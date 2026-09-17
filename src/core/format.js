// ============================================================================
// core/format.js —— 纯函数：超大数 → 显示字符串
//
// 从 useGameState.js 中抽出。这些函数是**最热的渲染路径**：PageP1_1 一页每帧
// 就要调用 200+ 次，因此这里的每一点开销都会被 30Hz × 68 页放大。
// 注意：本文件必须保持无状态、不依赖 player / v —— 依赖状态的展示函数
// （energyshow / epsdisp）仍留在 useGameState.js。
// ============================================================================
import { Decimal } from './decimal.js'

// P1-3：原实现每次调用都会把 "ee6"/"eee6"/"eeee6" 三个字符串重新解析成 Decimal
// （3 次字符串解析），提成常量后每帧可省下上千次 Decimal 字符串解析。
const NOT_EE6 = new Decimal("ee6")
const NOT_EEE6 = new Decimal("eee6")
const NOT_EEEE6 = new Decimal("eeee6")

/** 科学计数法显示（保留 3 位有效数字），按量级自动切换 e / ee / F 记法 */
function notation(amount) {
    let string = "";
    if (amount.sign == -1) {
        string = string + "-";
        amount = amount.abs(); // 改为取绝对值副本：旧写法 `amount.sign = 1` 会直接篡改 player/v 里的 Decimal
    }
    if (amount.lt(NOT_EE6)) {
        let power = Decimal.floor(Decimal.log10(amount));
        let mantissa = amount.div(Decimal.pow(10, power));
        if (amount == 0) string = "0.000";
        else if (power < -3) string = string + mantissa.toFixed(3) + "e" + power;
        else if (power < -2) string = string + amount.toFixed(6);
        else if (power < -1) string = string + amount.toFixed(5);
        else if (power < 0) string = string + amount.toFixed(4);
        else if (power < 1) string = string + amount.toFixed(3);
        else if (power < 2) string = string + amount.toFixed(2);
        else if (power < 3) string = string + amount.toFixed(1);
        else if (power < 6) string = string + amount.toFixed(0);
        else string = string + mantissa.toFixed(3) + "e" + power;
    }
    else if (amount.lt(NOT_EEE6)) {
        let power2 = Decimal.floor(Decimal.log10(Decimal.log10(amount)));
        let mantissa2 = Decimal.floor(Decimal.log10(amount)).div(Decimal.pow(10, power2));
        string = string + "e" + mantissa2.toFixed(3) + "e" + power2;
    }
    else if (amount.lt(NOT_EEEE6)) {
        let power3 = Decimal.floor(Decimal.log10(Decimal.log10(Decimal.log10(amount))));
        let mantissa3 = Decimal.floor(Decimal.log10(Decimal.log10(amount))).div(Decimal.pow(10, power3));
        string = string + "ee" + mantissa3.toFixed(3) + "e" + power3;
    }
    else if (amount.layer < 1.79e308) {
        let aF = 1;
        let Fb = amount.layer;
        if (amount.mag < 1e10) {
            aF = Decimal.log10(amount.mag);
            Fb = Fb + 1;
        }
        else {
            aF = Decimal.log10(Decimal.log10(amount.mag));
            Fb = Fb + 2;
        }
        string = string + aF.toFixed(3) + "f" + Fb;
    }
    else string = "114514";
    return string;
}

/** 整数显示（不显示小数），量级同上 */
function notatint(amount) {
    let string = "";
    if (amount.sign == -1) {
        string = string + "-";
        amount = amount.abs(); // 同上：不原地改写入参
    }
    if (amount.lt(NOT_EE6)) {
        let power = Decimal.floor(Decimal.log10(amount));
        let mantissa = amount.div(Decimal.pow(10, power));
        if (amount == 0) string = "0";
        else if (power < 6) string = string + amount.floor();
        else string = string + mantissa.toFixed(3) + "e" + power;
    }
    else if (amount.lt(NOT_EEE6)) {
        let power2 = Decimal.floor(Decimal.log10(Decimal.log10(amount)));
        let mantissa2 = Decimal.floor(Decimal.log10(amount)).div(Decimal.pow(10, power2));
        string = string + "e" + mantissa2.toFixed(3) + "e" + power2;
    }
    else if (amount.lt(NOT_EEEE6)) {
        let power3 = Decimal.floor(Decimal.log10(Decimal.log10(Decimal.log10(amount))));
        let mantissa3 = Decimal.floor(Decimal.log10(Decimal.log10(amount))).div(Decimal.pow(10, power3));
        string = string + "ee" + mantissa3.toFixed(3) + "e" + power3;
    }
    else if (amount.layer < 1.79e308) {
        let aF = 1;
        let Fb = amount.layer;
        if (amount.mag < 1e10) {
            aF = Decimal.log10(amount.mag);
            Fb = Fb + 1;
        }
        else {
            aF = Decimal.log10(Decimal.log10(amount.mag));
            Fb = Fb + 2;
        }
        string = string + aF.toFixed(3) + "f" + Fb;
    }
    else string = "1919810";
    return string;
}

/** 千分位分隔显示，超过 1e15 退化为科学计数法 */
function notatcom(num) {
    if (num === null || num === undefined) return "NaN"
    if (num.gte(1e15)) return (notation(num))
    let init = num.toString()
    let portions = init.split(".")
    portions[0] = portions[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return portions[0]
}

/** 秒数 → "x天x小时x分钟x秒"，极大值退化为宇宙年龄量级 */
function timeshow(time) {
    if (time.gte(8e36)) return notation(time.div(8e36)) + '超级宇宙年龄';
    if (time.gte(4.352e17)) return notation(time.div(4.352e17)) + '宇宙年龄';
    if (time.gte(31536000)) return notation(time.div(31536000)) + '年';
    let t = time.toNumber();
    let s = '';
    if (t >= 86400) s = s + Math.floor(t / 86400) + '天';
    t -= Math.floor(t / 86400) * 86400;
    if (t >= 3600) s = s + Math.floor(t / 3600) + '小时';
    t -= Math.floor(t / 3600) * 3600;
    if (t >= 60) s = s + Math.floor(t / 60) + '分钟';
    t -= Math.floor(t / 60) * 60;
    s = s + Math.floor(t) + '秒';
    return s;
}

export { notation, notatint, notatcom, timeshow, NOT_EE6, NOT_EEE6, NOT_EEEE6 }
