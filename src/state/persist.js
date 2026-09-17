// ============================================================================
// state/persist.js —— 存档的序列化 / 反序列化 / 版本迁移
//
// 相比原实现的三处改进：
//  ① UTF-8 安全：原实现直接用 btoa()，一旦存档里出现任何非 Latin-1 字符
//     （中文昵称/文案等）就会抛 InvalidCharacterError 导致**存档失败**。
//     这里改为 TextEncoder → 逐字节 → btoa。
//  ② 手写序列化：只把 Decimal 转成字符串，跳过 JSON.stringify 对 reactive Proxy
//     的深度遍历与 toJSON 间接层，字段集合完全可控。
//  ③ 版本迁移：引入 { version, data } 包裹与 MIGRATIONS 迁移链，
//     取代原来的裸 Object.assign（旧版存档格式无 version，按 v0 处理，可平滑升级）。
//  ④ deserialize 用 typeof 分派：原 transformToDecimal 对每个键调用了 3 次
//     new Decimal()，这里降到 1 次，且不递归进 Decimal 自身。
// ============================================================================
import { Decimal } from '../core/decimal.js'

export const SAVE_KEY = 'windSpiritCreation'

/** 当前存档格式版本；新增破坏性改动时 +1 并在 MIGRATIONS 里补一条 */
export const SAVE_VERSION = 1

/** 超过这个量级视为脏数据（沿用原实现的兜底） */
const ABSURD = new Decimal('F1e308')

// --------------------------------------------------------------------------
// UTF-8 安全的 base64
// --------------------------------------------------------------------------
function toB64(str) {
    const bytes = new TextEncoder().encode(str)
    let bin = ''
    const CHUNK = 0x8000
    for (let i = 0; i < bytes.length; i += CHUNK) {
        bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK))
    }
    return btoa(bin)
}

function fromB64(b64) {
    const bin = atob(b64)
    const bytes = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
    return new TextDecoder().decode(bytes)
}

// --------------------------------------------------------------------------
// 序列化：Decimal → 字符串（保持与旧存档完全一致的表示）
// --------------------------------------------------------------------------
function encodeValue(v) {
    if (v instanceof Decimal) return v.toString()
    if (Array.isArray(v)) {
        const out = new Array(v.length)
        for (let i = 0; i < v.length; i++) out[i] = encodeValue(v[i])
        return out
    }
    if (v && typeof v === 'object') {
        const out = {}
        for (const k in v) out[k] = encodeValue(v[k])
        return out
    }
    return v
}

function serializePlayer(player) {
    const out = {}
    for (const k in player) out[k] = encodeValue(player[k])
    return out
}

// --------------------------------------------------------------------------
// 反序列化：字符串 → Decimal
// --------------------------------------------------------------------------
// 只有由这些字符组成、且至少含一位数字的字符串才当作数字还原。
// 旧实现用 `!isNaN(new Decimal(s).mag)` 判断，但 break_eternity 对无法解析的字符串
// 返回的是 0 而不是 NaN —— 于是 save 里任何普通字符串字段（例如 phenotype）
// 都会在读取时被**悄悄改成 0**。改成字符集判断后不会再误伤。
const NUMERIC_CHARS = /^[0-9eE+\-.]+$/

function decodeValue(v) {
    if (typeof v === 'string') {
        if (v === '' || !NUMERIC_CHARS.test(v) || !/\d/.test(v)) return v
        const d = new Decimal(v)
        if (isNaN(d.mag)) return v
        return d.gte(ABSURD) ? new Decimal(1) : d
    }
    if (Array.isArray(v)) {
        for (let i = 0; i < v.length; i++) v[i] = decodeValue(v[i])
        return v
    }
    if (v && typeof v === 'object') {
        for (const k in v) v[k] = decodeValue(v[k])
        return v
    }
    return v
}

function deserializePlayer(data) {
    for (const k in data) data[k] = decodeValue(data[k])
    return data
}

// --------------------------------------------------------------------------
// 版本迁移
// --------------------------------------------------------------------------
export const MIGRATIONS = {
    // 示例：1: (d) => { d.newField = 0; return d },
}

function runMigrations(parsed) {
    // 旧存档是裸 player 对象，没有 version 包裹 → 视为 v0
    const wrapped = parsed && typeof parsed === 'object' && 'data' in parsed && 'version' in parsed
    let data = wrapped ? parsed.data : parsed
    let version = wrapped ? parsed.version : 0
    while (version < SAVE_VERSION) {
        const m = MIGRATIONS[version + 1]
        if (m) data = m(data)
        version++
    }
    return data
}

// --------------------------------------------------------------------------
// 对外 API
// --------------------------------------------------------------------------
export function encodeSave(player) {
    return toB64(JSON.stringify({ version: SAVE_VERSION, data: serializePlayer(player) }))
}

export function decodeSave(b64) {
    const parsed = JSON.parse(fromB64(b64))
    return deserializePlayer(runMigrations(parsed))
}

export function saveTo(player, key = SAVE_KEY) {
    try {
        localStorage[key] = encodeSave(player)
        return true
    } catch (e) {
        console.error('[save] 保存失败:', e)
        return false
    }
}

export function loadFrom(player, key = SAVE_KEY) {
    const raw = localStorage[key]
    if (!raw) return false
    try {
        Object.assign(player, decodeSave(raw))
        return true
    } catch (e) {
        console.error('[save] 读取失败，已保留当前进度:', e)
        return false
    }
}

export function clearSave(key = SAVE_KEY) {
    try {
        localStorage.removeItem(key)
    } catch (e) {
        console.error('[save] 清除失败:', e)
    }
}

export function exportSaveFile(player, filenamePrefix = 'WindSpiritCreationSave') {
    let str = encodeSave(player)
    let file = new Blob([str], { type: 'text/plain' })
    window.URL = window.URL || window.webkitURL
    let a = document.createElement('a')
    a.href = window.URL.createObjectURL(file)
    a.download = filenamePrefix + '-' + Date().replaceAll(' ', '_').slice(0, 24) + '.txt'
    a.click()
    return str
}

export function importSaveFile(player, onDone) {
    let a = document.createElement('input')
    a.setAttribute('type', 'file')
    a.click()
    a.onchange = () => {
        let fr = new FileReader()
        fr.onload = () => {
            try {
                Object.assign(player, decodeSave(fr.result))
                if (onDone) onDone(true)
            } catch (e) {
                console.error('[save] 导入失败:', e)
                if (onDone) onDone(false)
            }
        }
        fr.readAsText(a.files[0])
    }
}

export { toB64, fromB64 }
