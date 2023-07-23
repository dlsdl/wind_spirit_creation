var lastUpdate = Date.now();
var tiername = [null,
    "01", "02", "03", "04", "05", "06", "07", "08",
    "09", "10", "11", "12", "13", "14", "15", "16",];
var player;

function hardReset() {
    player = {
        energy: new Decimal(2),

        wscb01: new Decimal(0),
        wscb02: new Decimal(0),
        wscb03: new Decimal(0),
        wscb04: new Decimal(0),
        wscb05: new Decimal(0),
        wscb06: new Decimal(0),
        wscb07: new Decimal(0),
        wscb08: new Decimal(0),

        wsca01: new Decimal(0),
        wsca02: new Decimal(0),
        wsca03: new Decimal(0),
        wsca04: new Decimal(0),
        wsca05: new Decimal(0),
        wsca06: new Decimal(0),
        wsca07: new Decimal(0),
        wsca08: new Decimal(0),

        tier01: new Decimal(0),
        tier02: new Decimal(0),

        upgd01: new Decimal(0),
        upgd02: new Decimal(0),

        hasUnlockedPL1: false,
        milliseconds: new Decimal(0),
        seconds: new Decimal(0),
        minuts: new Decimal(0),
        hours: new Decimal(0),
        days: new Decimal(0),
        totalSeconds: new Decimal(0),
    }
}
hardReset();

var tempPlayer = player;

load();

Object.assign(tempPlayer, player);

player = tempPlayer;

/*数值*/
variab = {
    scal01: new Decimal(1024),
    scal02: new Decimal(1125899906842624),
    scal03: new Decimal(1.496577676626844e51),
    scal04: new Decimal(3.196670515523576e147),

wscc01: new Decimal(2),
wscc02: new Decimal(4),
wscc03: new Decimal(16),
wscc04: new Decimal(256),
wscc05: new Decimal(65536),
wscc06: new Decimal(4294967296),
wscc07: new Decimal(1.844674407370955e19),
wscc08: new Decimal(3.402823669209384e38),

wsccor01 : new Decimal(2),
wsccor02 : new Decimal(4),
wsccor03 : new Decimal(16),
wsccor04 : new Decimal(256),
wsccor05 : new Decimal(65536),
wsccor06 : new Decimal(4294967296),
wsccor07 : new Decimal(1.844674407370955e19),
wsccor08 : new Decimal(3.402823669209384e38),

wsccsl01 : new Decimal(4),
wsccsl02 : new Decimal(16),
wsccsl03 : new Decimal(256),
wsccsl04 : new Decimal(65536),
wsccsl05 : new Decimal(4294967296),
wsccsl06 : new Decimal(1.844674407370955e19),
wsccsl07 : new Decimal(3.402823669209384e38),
wsccsl08 : new Decimal(1.157920892373161e77),

wscm01 : new Decimal(1),
wscm02 : new Decimal(1),
wscm03 : new Decimal(1),
wscm04 : new Decimal(1),
wscm05 : new Decimal(1),
wscm06 : new Decimal(1),
wscm07 : new Decimal(1),
    wscm08: new Decimal(1),

    wscmpb: new Decimal(1.6),

    wscBaseValue: new Decimal(0),
    tierc01: new Decimal(64),
    tierc02: new Decimal(4),

    upgc01: new Decimal(0),
    upgc02: new Decimal(0),

    upgcor01: new Decimal(256),
    upgcor02: new Decimal(512),

    upgcsl01: new Decimal(512),
    upgcsl02: new Decimal(1024),

}
/*存档*/
function save() {
    localStorage.windSpiritCreation = btoa(JSON.stringify(player));
    console.log('auto save')
}

function load() {
    if (!localStorage.windSpiritCreation) return;
    player = JSON.parse(atob(localStorage.windSpiritCreation));
    transformToDecimal(player)
}

function exportSave() {
    save();
    var output = document.getElementById("importExportText");
    output.value = btoa(JSON.stringify(player));
}

function importSave() {
    let confirmation = confirm("您确定要导入吗？");
    if (confirmation) {
        hardReset();
        tempPlayer = player;
        var input = document.getElementById("importExportText");
        input = JSON.parse(atob(input.value));
        player = input;
        transformToDecimal(player)
        Object.assign(tempPlayer, player);
        player = tempPlayer;
    }
}

function trueHardReset() {
    let confirmation = confirm("您确定要硬重置吗？");
    if (confirmation) {
        hardReset();
    }
}

/*游戏*/
function buyWsc(tier) {
    var name = tiername[tier];
    if (player.energy.gte(variab["wscc" + name])) {
        player["wsca" + name] = player["wsca" + name].add(1);
        player["wscb" + name] = player["wscb" + name].add(1);
        player.energy = player.energy.sub(variab["wscc" + name]);
        console.log('buy1')
    }
    else return
}

function getWscMult() {
    var mult01to08 = new Decimal(1);
    if (player.tier01.gte(1)) mult01to08 = mult01to08.mul(variab.wscBaseValue.div(16).add(1));
    if (player.tier01.gte(2)) mult01to08 = mult01to08.mul(player.tier01.pow(2).div(4).add(1));
    if (player.tier01.gte(5)) mult01to08 = mult01to08.mul(player.tier02.pow(3).add(1));
    if (player.tier01.gte(10)) mult01to08 = mult01to08.mul(player.energy.add(1).log(2).pow(0.4).add(1));
    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        variab["wscm" + name] = variab.wscmpb.pow(player["wscb" + name]).mul(mult01to08);
    }
}

function getWscMultPerBuy() {
    variab.wscmpb = new Decimal(1.6).add(player.tier02.pow(0.5).mul(0.05)).add(player.upgd01.mul(0.025)).mul(new Decimal(1.031).pow(player.upgd02));
}

function getWscCost() {
    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        variab["wscc" + name] = variab["wsccor" + name].mul(variab["wsccsl" + name].pow(player["wscb" + name]));
    }
}

function getWscBaseValue() {
    var n = new Decimal(0);
    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        n = n.add(player["wscb" + name]);
    }
    variab.wscBaseValue = n;
}

function incTier1() {
    if (variab.wscBaseValue.gte(variab.tierc01)) {
        player.tier01 = player.tier01.add(1);
        tier01Reset();
        console.log('6308sfdy')
    }
    else return
}

function incTier2() {
    if (player.tier01.gte(variab.tierc02)) {
        player.tier02 = player.tier02.add(1);
        tier02Reset();
        console.log('75scjfmk')
    }
    else return
}

function getTierCost() {
    variab.tierc01 = player.tier01.mul(64).add(64);
    variab.tierc02 = player.tier02.mul(4).add(4);
}

function tier01Reset() {
    player.energy = new Decimal(2);

    player.wscb01 = new Decimal(0);
    player.wscb02 = new Decimal(0);
    player.wscb03 = new Decimal(0);
    player.wscb04 = new Decimal(0);
    player.wscb05 = new Decimal(0);
    player.wscb06 = new Decimal(0);
    player.wscb07 = new Decimal(0);
    player.wscb08 = new Decimal(0);

    player.wsca01 = new Decimal(0);
    player.wsca02 = new Decimal(0);
    player.wsca03 = new Decimal(0);
    player.wsca04 = new Decimal(0);
    player.wsca05 = new Decimal(0);
    player.wsca06 = new Decimal(0);
    player.wsca07 = new Decimal(0);
    player.wsca08 = new Decimal(0);
}

function tier02Reset() {
    tier01Reset();
    player.tier01 = new Decimal(0);
}

function buyUpgd01() {
    if (player.energy.gte(variab.upgc01)) {
        player.upgd01 = player.upgd01.add(1);
        player.energy = player.energy.sub(variab.upgc01);
        console.log('upgraded');
    }
    else return
}

function buyUpgd02() {
    if (player.energy.gte(variab.upgc02)) {
        player.upgd02 = player.upgd02.add(1);
        player.energy = player.energy.sub(variab.upgc02);
        console.log('upgraded');
    }
    else return
}

function getUpgdCost() {
    var bcost1 = variab.upgcor01.add(variab.upgcsl01.mul(player.upgd01));
    var scost1 = bcost1.max(bcost1.pow(2).div(variab.scal02)).max(bcost1.pow(4).div(variab.scal02)).max(bcost1.pow(8).div(variab.scal03)).max(bcost1.pow(16).div(variab.scal04));
    variab.upgc01 = new Decimal(2).pow(scost1);
    var bcost2 = variab.upgcor02.add(variab.upgcsl02.mul(player.upgd02));
    var scost2 = bcost2.max(bcost2.pow(2).div(variab.scal02)).max(bcost2.pow(4).div(variab.scal02)).max(bcost2.pow(8).div(variab.scal03)).max(bcost2.pow(16).div(variab.scal04));
    variab.upgc02 = new Decimal(2).pow(scost2);
}

function produce() {
    player.energy = player.energy.add(player.wsca01.mul(variab.wscm01).mul(new Decimal(0.0125)));
    for (let tier = 2; tier <= 8; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier-1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(variab["wscm" + name]).mul(new Decimal(0.0125)));
    }
}

function fixInfinity() {
    if (player.energy.gte(1.797693134862315e308)) {
        player.energy = new Decimal(1.797693134862315e308);
        document.getElementById("energy").innerHTML = "1.797e308";
        document.getElementById("fixinf").style.display = 'block';
    }
}
/*游戏机制之外……*/
function transformToDecimal(object) {
    for (i in object) {
        if (typeof (object[i]) == "string" && !isNaN(new Decimal(object[i]).mag)) object[i] = new Decimal(object[i]);
        if (typeof (object[i]) == "object") transformToDecimal(object[i])
    }
}

function time(diff) {
    let diff2 = new Decimal(diff);
    player.milliseconds = player.milliseconds.plus(diff2.times(1000));
    if (player.milliseconds.gte(1000)) {
        player.seconds = player.seconds.plus(1);
        player.totalSeconds = player.totalSeconds.plus(1);
        player.milliseconds = player.milliseconds.minus(1000);
    }
    if (player.seconds == 60) {
        player.seconds = new Decimal(0);
        player.minuts = player.minuts.plus(1);
    }
    if (player.minuts == 60) {
        player.minuts = new Decimal(0);
        player.hours = player.hours.plus(1);
    }
    if (player.hours == 24) {
        player.hours = new Decimal(0);
        player.days = player.days.plus(1);
    }
}

function notation(amount) {
    if (amount.sign != -1) {
        let power = Decimal.floor(Decimal.log10(amount));
        let mantissa = amount.div(Decimal.pow(10, power));
        let power2 = Decimal.floor(Decimal.log10(power));
        let mantissa2 = power.div(Decimal.pow(10, power2));
        let power3 = Decimal.floor(Decimal.log10(power2));
        let mantissa3 = power2.div(Decimal.pow(10, power3));
        if (amount == 0) return "0"
        if (power < 1) return amount.toFixed(3);
        if (power < 2) return amount.toFixed(2);
        if (power < 3) return amount.toFixed(1);
        if (power < 6) return amount.toFixed(0);
        if (power < 1000000) return mantissa.toFixed(3) + "e" + power;
        if (power2 < 1000000) return "e" + mantissa2.toFixed(3) + "e" + power2;
        return "ee" + mantissa3.toFixed(3) + "e" + power3;
    }
    else {
        amount.sign = 1;
        let power = Decimal.floor(Decimal.log10(amount));
        let mantissa = amount.div(Decimal.pow(10, power));
        let power2 = Decimal.floor(Decimal.log10(power));
        let mantissa2 = power.div(Decimal.pow(10, power2));
        let power3 = Decimal.floor(Decimal.log10(power2));
        let mantissa3 = power2.div(Decimal.pow(10, power3));
        if (power < 1) return "-" + amount.toFixed(3);
        if (power < 2) return "-" + amount.toFixed(2);
        if (power < 3) return "-" + amount.toFixed(1);
        if (power < 6) return "-" + amount.toFixed(0);
        if (power < 1000000) return mantissa.toFixed(3) + "-e" + power;
        if (power2 < 1000000) return "-e" + mantissa2.toFixed(3) + "e" + power2;
        return "-ee" + mantissa3.toFixed(3) + "e" + power3;
    }
}

function updateGUI() {
    document.getElementById("energy").innerHTML = notation(player.energy);
    document.getElementById("energyPs").innerHTML = notation(player.wsca01.mul(variab.wscm01).mul(new Decimal(0.25)));
    document.getElementById("wscinfo").innerHTML = "基础风灵产量：0.25/s  每次作成乘数：" + notation(variab.wscmpb);
    for (let tier = 1; tier <= 8; tier++) { 
        var name = tiername[tier];
        document.getElementById("wscb" + name).innerHTML = player["wscb" + name].toFixed(0);
        document.getElementById("wscc" + name).innerHTML = notation(variab["wscc" + name]);
        document.getElementById("wscd" + name).innerHTML = "+" + notation(player["wsca" + name]).padEnd(15, '_') + "×" + notation(variab["wscm" + name]).padEnd(15, '_') + "^1.000__________¶1.000__________";
    }
    document.getElementById("wscbv").innerHTML = "你的风灵基础值为" + notation(variab.wscBaseValue) + "（基于你作成的风灵总数而定）";
    document.getElementById("tier01").innerHTML = player.tier01.toFixed(0) + "式风单元";
    document.getElementById("tier01rewa01").innerHTML = "1式风单元：基于风灵基础值提升1~8式风灵乘数。当前：×" + notation(variab.wscBaseValue.div(16).add(1));
    document.getElementById("tier01rewa02").innerHTML = "2式风单元：基于风单元式数提升1~8式风灵乘数。当前：×" + notation(player.tier01.pow(2).div(4).add(1));
    document.getElementById("tier01rewa03").innerHTML = "5式风单元：基于风模块式数提升1~8式风灵乘数。当前：×" + notation(player.tier02.pow(3).add(1));
    document.getElementById("tier01rewa04").innerHTML = "10式风单元：基于能量提升1~8式风灵乘数。当前：×" + notation(player.energy.add(1).log(2).pow(0.4).add(1));
    document.getElementById("tier02").innerHTML = player.tier02.toFixed(0) + "式风模块";
    document.getElementById("tier02rewa01").innerHTML = "1式风模块：基于风模块式数提升风灵每次作成乘数，并解锁第一个升级。当前：+" + notation(player.tier02.pow(0.5).mul(0.05));
    document.getElementById("tier02rewa02").innerHTML = "2式风模块：解锁第二个升级。"
    document.getElementById("tier01cost").innerHTML = "需要：" + notation(variab.tierc01) + "风灵基础值";
    document.getElementById("tier02cost").innerHTML = "需要：" + notation(variab.tierc02) + "式风单元";

    document.getElementById("upgd01").innerHTML = player.upgd01.toFixed(0);
    document.getElementById("upgd02").innerHTML = player.upgd02.toFixed(0);
    document.getElementById("upgc01").innerHTML = "花费：" + notation(variab.upgc01) + "能量";
    document.getElementById("upgc02").innerHTML = "花费：" + notation(variab.upgc02) + "能量";
    document.getElementById("upge01").innerHTML = "当前：+" + notation(player.upgd01.mul(0.025));
    document.getElementById("upge02").innerHTML = "当前：×" + notation(new Decimal(1.031).pow(player.upgd02));

    document.getElementById("playtime").innerHTML = "游戏时间：" + player.days.toFixed(0) + "d " + player.hours.toFixed(0) + "h " + player.minuts.toFixed(0) + "m " + player.seconds.toFixed(0) + "s " + player.milliseconds.toFixed(0) + "ms";
}

function tierDisplay() {
    if (player.tier01.eq(0)) document.getElementById("tier01info").innerHTML = "在1式风单元，将基于风灵基础值提升1~8式风灵乘数(1+n/16)。";
    if (player.tier01.gte(1)) {
        document.getElementById("tier01rewa01").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在2式风单元，将基于风单元式数提升1~8式风灵乘数(1+n²/4)。";
    }
    else document.getElementById("tier01rewa01").style.display = 'none';
    if (player.tier01.gte(2)) {
        document.getElementById("tier01rewa02").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在5式风单元，将基于风模块式数提升1~8式风灵乘数(1+n³)。";
    }
    else document.getElementById("tier01rewa02").style.display = 'none';
    if (player.tier01.gte(5)) {
        document.getElementById("tier01rewa03").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在10式风单元，将基于能量提升1~8式风灵乘数(log2(n+1)^0.4+1)。";
    }
    else document.getElementById("tier01rewa03").style.display = 'none';
    if (player.tier01.gte(10)) {
        document.getElementById("tier01rewa04").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "";
    }
    else document.getElementById("tier01rewa04").style.display = 'none';

    if (player.tier02.eq(0)) document.getElementById("tier02info").innerHTML = "在1式风模块，将基于风模块式数提升风灵每次作成乘数(+0.05×n^0.5)，并解锁第一个升级";
    if (player.tier02.gte(1)) {
        document.getElementById("tier02rewa01").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "在2式风模块，将解锁第二个升级";
        document.getElementById("upg_01").style.display = 'block'
    }
    else {
        document.getElementById("tier02rewa01").style.display = 'none';
        document.getElementById("upg_01").style.display = 'none'
    }
    if (player.tier02.gte(2)) {
        document.getElementById("tier02rewa02").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "";
        document.getElementById("upg_02").style.display = 'block'
    }
    else {
        document.getElementById("tier02rewa02").style.display = 'none';
        document.getElementById("upg_02").style.display = 'none'
    }
}

/*切换tab*/
var tabnow = "row1";
function changeBt(name) {
    if (tabnow) document.getElementById(tabnow).style.display = 'none';
    document.getElementById(name).style.display = 'block';
    document.getElementById("bt" + tabnow).className = "button";
    document.getElementById("bt" + name).className = "slbutton";
    changePg("p" + name.substr(-1) + "_1");
    tabnow = name;
}
var pagenow = "p1_1";
function changePg(name) {
    if (pagenow) document.getElementById(pagenow).style.display = 'none';
    document.getElementById(name).style.display = 'block';
    document.getElementById("bt" + pagenow).className = "button";
    document.getElementById("bt" + name).className = "slbutton";
    pagenow = name;
}

/*主要循环*/
function mainLoop() {
    diff = (Date.now() - lastUpdate) / 1000;
    lastUpdate = Date.now();
    getWscMult();
    getWscMultPerBuy();
    getWscCost();
    getWscBaseValue();
    getTierCost();
    tierDisplay();
    getUpgdCost();
    
    produce();
    time(diff);
    updateGUI();
    if (player.hasUnlockedPL1 == false) fixInfinity();
}

setInterval(mainLoop, 50);

setInterval(save, 60000);

updateGUI();

/*滚动新闻*/
var texts =
    [
        "6308式风单元，75式超级风模块",
        "增量游戏就应该有滚动新闻",
        "可能是1.8e308序数增量吧吧友弄的吗？",
        "八重神子和砂糖有同款兽耳",
        "研究表明，超频子的自旋为3/5",
        "无害甜度砂糖，sucrose",
        "生物炼金，比起创造，更注重改造，找到生物隐藏起来的优点，然后放大、结合，结果往往都让人大吃一惊。生命真的是太神奇了，究竟还有多少我们不知道的东西呢？",
        "593式营养餐的593用IUPAC命名法是pet，宠物的意思，所以这是一种宠物食品",
        "30式便携营养袋设计灵感来源于把吃下去的东西转化为奶",
        "本增量游戏所有物品均采用逻辑命名法",      /*10*/
        "砂糖待机做的实验的化学方程式是：HבO+Hב₂=ב↑+H2O",
        "大型风灵：结束阶段时，造成2点风元素伤害，可用3次。触发扩散反应后会转换元素类型，转而造成对应扩散元素伤害",
        "教令院六大学派之中的素论派研究炼金术，代表人物：砂糖，无相之风是砂糖某次实验不小心创造出来的",
        "这次更新，使得你的总共游戏时间加成你的全局时间速度，牛不牛？",
        "正在进行奇点捕获实验，启动机器.....温度不足，开始加热，你即将打破普朗克温度，请选择：1.打破  2.不打破",
        "炼金术实际上是研讨物质本质与其变化规律的学科，最终通向的是世界运转、地脉流通的规律",
        "传说在纤细脆弱的蝴蝶体内，也藏有引发飓风的力量，这由纯粹的风构成的蝴蝶，无疑在等待着再次召来暴风的那一天吧",
        "授人以鱼，不如授人以渔，不如授人以氵渔，不如授人以氵氵渔，不如授人以氵氵氵渔，不如授人以氵氵氵氵渔，不如授人以氵氵氵氵氵渔，…………",
        "5 hours until the update——准确地说，是大数放置类游戏玩家所周知的梗。表达下一次更新遥遥无期之意",
        "由于最近■■在增量游戏中给我带来了软上限，所以我要制造“不可名状”倍的TNT然后把他们的总部炸掉，软上限有多少种？从一到无穷大！",/*20*/
        "增量游戏超越一切物理化学生物定律，请给自己的增量游戏增加【虚无■■……    】等内容或层级",
        "超过1.8e308的数字怎么表示？break_infinity.js:我可以，break_eternity.js:我更可以，break_reality.js:暂时不存在",
        "我们生活在有限的世界里面，因此难以理解阿列夫的阶梯，我们生物的本能无法仰望无尽的星空",
        "那些物理学家正在建立比暴涨理论还大的理论准备入侵我们，他们把这个理论叫做“M理论”，不过我敢肯定他们不会成功",
        "砂糖在别人眼中是个性格内向、寡言少语的炼金术士，对他人的世界不感兴趣，但她对一切事物都有着极为强烈的求知欲",
        "宝箱出现的成因到底是什么？结合剧情考虑，每个宝箱的外边都有一圈符文，这些符文出现在坎瑞亚这个古老的文明，因此这些宝箱其实来自遥远的上古时期",
        "绿发兽耳眼镜娘，挥手即可立风场，日日夜夜不能寐，只为献身实验场，紧衣黑丝小裙摆，羞涩面容清纯心，可爱砂糖为吾妻，直戳作者XP上",
        "伍玖叁式营养餐中「健康」的绿色来源于加入奶油中的天然蔬菜汁…蔬菜汁？",
        "其实我创造了一个仙境，名为“random()仙境”，这里面什么都有",
        "是时候面对非常特殊的敌人：incremental·天理-hp:f1.797e308/f1.797e308",/*30*/
        "学习生物炼金就来砂糖的实验室~！不过六倍多种子蒲公英挺合理的",
        "针对无相之风的研究，主要由须弥教令院的学者主导进行，但由于其危险性，除了代号和命名以外，基本没有取得什么值得参考的研究成果",
        "说来很不好意思，虽然术式里诞生的元素生命迅速就消散了，但是在冒险里真的很好用，失败的实验也会诞生实用技术",
        "砂糖也曾经想给每一个不稳态无相之风取名字，但是其世系迅速超过了兔兔伯爵的八百九十三世",
        "埼玉老师的普通一拳和认真一拳没有太大的区别，因为认真一拳“已达软上限”",
        "| 0'''''''''1'''''''''2'''''''''2.5'''''''''3'''''''''3.4'''''''''3.7'''''''''4 |，这是一把软上限尺，这很增量游戏笑话",
        "在本游戏中，基于某一属性的一定比例获得另一属性，会计入同类比例转换提升，因为这是增量游戏",
        "计划描述：使用飞船“sin(θ)”到达可能到达的最远位置，但改成sinh(θ)可以更快速前进",
        "「这是第1.79e308株…性状…本来学名…就、就叫它…1.84e19式甜甜花改1.79e308号香味特化版好了！」",
        "这些符号的意思是你的数量为a，你的乘数为b，你的指数为c，你的超指数为d，还能玩出什么花样，接下来交给你们！",/*40*/
        "你是一名穿越进提瓦特的旅行者，你想要到天空岛的最顶层，看看Level8之后的世界",
        "风灵作成过多导致手机停止运行了是不？我们有炼金术改造的一加9RT青空结界手机",
        "即使未曾找到仙境，那我便自己制造仙境”,就这样，砂糖开始了她研习生物炼金的道路，将自己无尽的好奇心倾注其中",
        "“生物炼金”的诸多课题，来自砂糖对万物抱有的疑问，而疑问的源头，则是她比谁都要炽热的好奇心",
        "风灵作成的原理：砂糖利用炼金术把风元素浓缩到形成无相之风的本体的程度塞进瓶子里然后扔出去使其进入超扩散态使得风元素迅速凝聚而持续产生牵引力",
        "百岁珊风系辅助采用百年未被改变和触动过的风元素，为提瓦特少见的优质风系辅助之一，风中贵族，百岁珊",
        "树桩等于停止，盒子等于推动，漩涡等于胜利，喵喵等于你！",
        "游戏当中似乎有一些具有相当高的大数学潜力，那么研究这种题材类型的增量游戏是否能作为大数学的一种科普呢？",
        "自从某个游戏问世以后，“增量游戏” 已经从 “放置游戏” 中独立出来，自成一派。这些 “增量游戏” 的增长速度不低于指数增长甚至超指数增长",
        "增量游戏(Incremental Game)是一类旨在通过大量的点击、挂机等简单重复劳动，获取随时间增长的资源的游戏",/*50*/
    ]
var p = 50 + document.body.clientWidth
var l = -50 - (newsText.innerText.length * 16)
var newsTimer = setInterval(function () {
    p -= 1
    if (p <= l) {
        newsText.innerText = texts[Math.floor(Math.random() * texts.length)]
        newsText.style.width = (newsText.innerText.length * 16).toString() + "px"
        l = -50 - (newsText.innerText.length * 16)
        p = 50 + document.body.clientWidth
    }
    newsText.style.left = p.toFixed(1) + "px"
}, 10)