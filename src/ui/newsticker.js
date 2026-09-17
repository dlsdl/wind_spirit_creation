// ============================================================================
// ui/newsticker.js —— 顶部滚动新闻
//
// 原实现的三个问题：
//  ① 用 setInterval(..., 10) 即 100Hz，是 60Hz 屏幕刷新率的 1.7 倍，纯属浪费；
//  ② 每个周期都读 newsElement.innerText 与 document.body.clientWidth
//     （强制同步布局 / layout thrashing），紧接着又写 style 使其失效；
//  ③ 写 style.left 会触发 reflow。
//
// 改法：
//  · requestAnimationFrame 驱动，与屏幕刷新同步；
//  · 用 transform: translateX() 代替 left —— 只走合成层，不触发 layout/paint；
//  · 文本长度、容器宽度只在初始化和换文本时测量一次，不再每帧读 DOM；
//  · 位移按真实 dt 计算，速度与原实现一致（100px/s），与刷新率解耦；
//  · 返回 stop() 句柄，组件卸载时可彻底停掉（原实现返回的 timer 无人保存）。
// ============================================================================

const SPEED = 100      // px/s（原实现 1px / 10ms）
const CHAR_W = 16      // 每个字符的估算宽度，用于算出文本滚出屏幕的终点

/**
 * @param {string[]} texts      文案池
 * @param {() => boolean} isEnabled  是否处于开启状态（关闭时跳过，不写样式）
 * @returns {() => void} stop()
 */
export function startNewsTicker(texts, isEnabled) {
    const el = document.getElementById('newsText')
    if (!el || !texts || texts.length === 0) return () => {}

    const width = document.body.clientWidth   // 只测量一次
    let p = 50 + width
    let l = 0
    let rafId = null
    let lastTime = 0
    let stopped = false

    const pick = () => texts[Math.floor(Math.random() * texts.length)]

    function setText(t) {
        el.textContent = t                    // textContent 比 innerHTML 快，且不解析 HTML
        l = -50 - t.length * CHAR_W
    }

    setText(pick())

    function frame(now) {
        if (stopped) return
        rafId = requestAnimationFrame(frame)

        const dt = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 0
        lastTime = now

        if (!isEnabled()) return

        p -= SPEED * dt
        if (p <= l) {
            setText(pick())
            p = 50 + width
        }
        el.style.transform = 'translateX(' + p.toFixed(1) + 'px)'
    }

    rafId = requestAnimationFrame(frame)

    return function stop() {
        stopped = true
        if (rafId !== null) {
            cancelAnimationFrame(rafId)
            rafId = null
        }
    }
}
