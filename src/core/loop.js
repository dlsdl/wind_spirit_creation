// ============================================================================
// core/loop.js —— 固定步长主循环
//
// 取代原先裸 `setInterval(mainLoop, 33)` 的三个问题：
//   1. 浏览器把后台标签页的 setInterval 节流到 1s+，回到前台时 diff 会突然变成几十秒，
//      导致一帧内要补算大量内容（卡顿甚至假死）。这里把单帧 dt 钳制在 MAX_CATCH_UP 内。
//   2. setInterval 与屏幕刷新不同步，容易产生抖动/掉帧。改用 requestAnimationFrame。
//   3. 各 PLxFR() 重置函数里散落着 `clearInterval(ml); ml = setInterval(mainLoop, 33)`，
//      每处都要手写一遍，且容易漏清理。这里统一成 start()/stop()/restart()。
//
// 语义：step(dt) 会被以固定 dt = FIXED_DT 调用 N 次/帧（N 由累加器决定），
//       与旧实现的"每 33ms 一次、dt = 真实间隔"在稳态下等价。
// ============================================================================

const FIXED_DT = 1 / 30          // 与旧实现的 33ms 对齐
const MAX_CATCH_UP = 0.25        // 单帧最多补算 0.25s（后台标签页回来时不会炸）

// 非浏览器环境（SSR / Node 测试）下退化到 setTimeout，保证模块可被独立测试
const hasRaf = typeof requestAnimationFrame === 'function'
const nextFrame = hasRaf
    ? (cb) => requestAnimationFrame(cb)
    : (cb) => setTimeout(() => cb(performance.now()), 1000 / 60)
const cancelFrame = hasRaf
    ? (id) => cancelAnimationFrame(id)
    : (id) => clearTimeout(id)

let rafId = null
let lastTime = 0
let accumulator = 0
let stepFn = null

function frame(now) {
    rafId = nextFrame(frame)

    let elapsed = (now - lastTime) / 1000
    lastTime = now
    // 钳制：切标签页/断点调试回来时 elapsed 可能是几十秒
    if (!(elapsed > 0)) elapsed = 0
    if (elapsed > MAX_CATCH_UP) elapsed = MAX_CATCH_UP

    accumulator += elapsed
    let guard = 0
    while (accumulator >= FIXED_DT && guard < 8) {
        stepFn(FIXED_DT)
        accumulator -= FIXED_DT
        guard++
    }
    if (guard >= 8) accumulator = 0 // 极端情况下丢弃积压，避免螺旋式卡死
}

/** 启动主循环；重复调用会先停掉旧的 */
export function start(step) {
    stop()
    stepFn = step
    lastTime = performance.now()
    accumulator = 0
    rafId = nextFrame(frame)
}

/** 停止主循环（组件卸载 / 重置层时调用） */
export function stop() {
    if (rafId !== null) {
        cancelFrame(rafId)
        rafId = null
    }
}

/** 重置累加器（层级重置后调用，等价于旧代码的 clearInterval + setInterval） */
export function restart() {
    if (stepFn === null) return
    lastTime = performance.now()
    accumulator = 0
}

export function isRunning() {
    return rafId !== null
}

export { FIXED_DT, MAX_CATCH_UP }
