// ============================================================================
// core/decimal.js —— 超大数（break_eternity）的唯一入口
// 从 useGameState.js 中抽出，供全局复用；同时集中处理"不让 Vue 代理 Decimal"这一关键约定。
// ============================================================================
import Decimal from 'break_eternity.js'

// ---------------------------------------------------------------------------
// P0-1：让 Decimal 完全绕过 Vue 的响应式代理
//
// Vue reactive 的核心判定是 getTargetType(value) 里的 `value['__v_skip']`，
// 该读取是普通属性读取，会沿原型链查找 —— 所以把它打在 Decimal.prototype 上，
// 就能让**所有** Decimal 实例（含每次 .add()/.mul()/.pow() 产生的新实例）返回原始对象：
//   · 顶层读写（player.energy = ... 、v.xxx = ...）仍由 player / v 的 Proxy 追踪 → UI 照常刷新
//   · Decimal 内部对 sign / mag / layer 的数十次读写不再经过 Proxy trap → 算术显著提速
//   · 不再为每帧上千个新 Decimal 创建嵌套 Proxy，reactiveMap 也不再膨胀 → GC 压力大幅下降
//
// 必须用 defineProperty 保持不可枚举，避免污染 for...in / JSON.stringify。
// 前提：Decimal 在本项目中按"不可变值"使用（绝不原地Mutation），因此跳过代理是安全的。
// ---------------------------------------------------------------------------
Object.defineProperty(Decimal.prototype, '__v_skip', {
    value: true,
    enumerable: false,
    writable: false,
    configurable: false,
})

/** 超指数：a → 2^2^( log2(log2(a)) · b )，即"把增长速率再套一层指数" */
function hyp(a, b) {
    if (a.lte(2)) return a;
    else return a.max(1).log(2).max(1).log(2).mul(b).pow_base(2).pow_base(2);
}

Decimal.prototype.hyp = function (value) { return hyp(this, value) }

// 常用常量：避免热路径里反复构造（享元模式）
const D_ZERO = new Decimal(0)
const D_ONE = new Decimal(1)

export { Decimal, hyp, D_ZERO, D_ONE }
export default Decimal
