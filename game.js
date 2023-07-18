var lastUpdate = Date.now();
var tiername = [null, "01", "02", "03", "04", "05", "06", "07", "08"];
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

        upgd01: new Decimal(0),
        upgd02: new Decimal(0),

        milliseconds: new Decimal(0),
        seconds: new Decimal(0),
        minuts: new Decimal(0),
        hours: new Decimal(0),
        days: new Decimal(0),
        years: new Decimal(0),
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
wscm08 : new Decimal(1),

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
        variab["wscm" + name] = variab["wscm" + name].mul(1.6);
        player.energy = player.energy.sub(variab["wscc" + name]);
        console.log('buy1')
    }
    else return
}

function getWscMult() {
    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        variab["wscm" + name] = new Decimal(1.6).pow(player["wscb" + name]);
    }
}

function getWscCost() {
    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        variab["wscc" + name] = variab["wsccor" + name].mul(variab["wsccsl" + name].pow(player["wscb" + name]));
    }
}

function produce() {
    player.energy = player.energy.add(player.wsca01.mul(variab.wscm01).mul(new Decimal(0.005)));
    for (let tier = 2; tier <= 8; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier-1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(variab["wscm" + name]).mul(new Decimal(0.005)));
    }
}

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
    if (player.days == 365) {
        player.days = new Decimal(0);
        player.years = player.years.plus(1);
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
    document.getElementById("energyPs").innerHTML = notation(player.wsca01.mul(variab.wscm01).mul(new Decimal(0.1)));
    for (let tier = 1; tier <= 8; tier++) { 
        var name = tiername[tier];
        document.getElementById("wscb" + name).innerHTML = player["wscb" + name].toFixed(0);
        document.getElementById("wscc" + name).innerHTML = notation(variab["wscc" + name]);
        document.getElementById("wscd" + name).innerHTML = "+" + notation(player["wsca" + name]).padEnd(15, '_') + "×" + notation(variab["wscm" + name]).padEnd(15, '_') + "^1.000__________¶1.000__________";
    }
    document.getElementById("playtime").innerHTML = "游戏时间：" + player.days.toFixed(0) + "d " + player.hours.toFixed(0) + "h " + player.minuts.toFixed(0) + "m " + player.seconds.toFixed(0) + "s " + player.milliseconds.toFixed(0) + "ms";
}

/*切换tab*/
var tabnow = "btnrow1";
function changeBt(name) {
    if (tabnow) document.getElementById(tabnow).style.display = 'none';
    document.getElementById(name).style.display = 'block';
    tabnow = name;
}
var pagenow = "p1_1";
function changePg(name) {
    if (pagenow) document.getElementById(pagenow).style.display = 'none';
    document.getElementById(name).style.display = 'block';
    pagenow = name;
}

/*滚动新闻*/
var texts =
    [
        "6308式风单元，75式超级风模块",
        "增量游戏就应该有滚动新闻",
        "可能是1.8e308序数增量吧吧友弄的吗？",
        "八重神子和砂糖有同款兽耳",
        "研究表明，超频子的自旋为3/5",
        "无害甜度砂糖，sucrose",
        "生物炼金，比起创造，更注重改造",
        "593式营养餐的593用IUPAC命名法是pet，宠物的意思，所以这是一种宠物食品",
        "30式便携营养袋设计灵感来源于砂糖把吃下去的东西转化为砂糖奶",
        "本增量游戏所有物品均采用逻辑命名法",      /*10*/
        "砂糖待机做的实验是：HבO+Hב₂=ב↑+H2O",
        "NT紫人组(分析家)",
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

/*主要循环*/
function mainLoop() {
    diff = (Date.now() - lastUpdate) / 1000;
    lastUpdate = Date.now();
    getWscMult();
    getWscCost();
    produce();
    time(diff);
    updateGUI();
}

setInterval(mainLoop, 50);

setInterval(save, 60000);

updateGUI();