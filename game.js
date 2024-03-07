var lastUpdate = Date.now();
var diff = (Date.now() - lastUpdate) / 1000;
var tiername = [null,
    "01", "02", "03", "04", "05", "06", "07", "08",
    "09", "10", "11", "12", "13", "14", "15", "16",
    "17", "18", "19", "20", "21", "22", "23", "24",
    "25", "26", "27", "28", "29", "30", "31", "32",
    "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48",
    "49", "50", "51", "52", "53", "54", "55", "56",
    "57", "58", "59", "60", "61", "62", "63", "64",
];
var hexdigit = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f",
                "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f",
                "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f",
                "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f",
];
var player;

function hardReset() {
    player = {
        energy: new Decimal(2),
        energyttl: new Decimal(2),

        wscb01: new Decimal(0),
        wscb02: new Decimal(0),
        wscb03: new Decimal(0),
        wscb04: new Decimal(0),
        wscb05: new Decimal(0),
        wscb06: new Decimal(0),
        wscb07: new Decimal(0),
        wscb08: new Decimal(0),
        wscb09: new Decimal(0),
        wscb10: new Decimal(0),
        wscb11: new Decimal(0),
        wscb12: new Decimal(0),
        wscb13: new Decimal(0),
        wscb14: new Decimal(0),
        wscb15: new Decimal(0),
        wscb16: new Decimal(0),
        wscb17: new Decimal(0),
        wscb18: new Decimal(0),
        wscb19: new Decimal(0),
        wscb20: new Decimal(0),
        wscb21: new Decimal(0),
        wscb22: new Decimal(0),
        wscb23: new Decimal(0),
        wscb24: new Decimal(0),
        wscb25: new Decimal(0),
        wscb26: new Decimal(0),
        wscb27: new Decimal(0),
        wscb28: new Decimal(0),
        wscb29: new Decimal(0),
        wscb30: new Decimal(0),
        wscb31: new Decimal(0),
        wscb32: new Decimal(0),

        wsca01: new Decimal(0),
        wsca02: new Decimal(0),
        wsca03: new Decimal(0),
        wsca04: new Decimal(0),
        wsca05: new Decimal(0),
        wsca06: new Decimal(0),
        wsca07: new Decimal(0),
        wsca08: new Decimal(0),
        wsca09: new Decimal(0),
        wsca10: new Decimal(0),
        wsca11: new Decimal(0),
        wsca12: new Decimal(0),
        wsca13: new Decimal(0),
        wsca14: new Decimal(0),
        wsca15: new Decimal(0),
        wsca16: new Decimal(0),
        wsca17: new Decimal(0),
        wsca18: new Decimal(0),
        wsca19: new Decimal(0),
        wsca20: new Decimal(0),
        wsca21: new Decimal(0),
        wsca22: new Decimal(0),
        wsca23: new Decimal(0),
        wsca24: new Decimal(0),
        wsca25: new Decimal(0),
        wsca26: new Decimal(0),
        wsca27: new Decimal(0),
        wsca28: new Decimal(0),
        wsca29: new Decimal(0),
        wsca30: new Decimal(0),
        wsca31: new Decimal(0),
        wsca32: new Decimal(0),

        tier01: new Decimal(0),
        tier02: new Decimal(0),
        tier03: new Decimal(0),
        tier04: new Decimal(0),
        tier01conf: true,
        tier02conf: true,
        tier03conf: true,
        tier04conf: true,
        autobuytier01: false,
        autobuytier02: false,
        autobuytier03: false,
        autobuytier04: false,

        upgd01: new Decimal(0),
        upgd02: new Decimal(0),
        upgd03: new Decimal(0),
        upgd04: new Decimal(0),
        autobuyupgd01: false,
        autobuyupgd02: false,
        autobuyupgd03: false,
        autobuyupgd04: false,

        hasUnlockedPL1: false,
        PL1energy: new Decimal(1),
        PL1pts: new Decimal(0),
        PL1ptsttl: new Decimal(0),
        PL1tms: new Decimal(0),
        PL1sec: new Decimal(0),
        PL1conf: true,
        PL1upg: [false, false, false, false,
                 false, false, false, false,
                 false, false, false, false,
                 false, false, false, false,],
        PL1bab01: new Decimal(0),
        PL1bab02: new Decimal(0),
        PL1bab03: new Decimal(0),
        PL1bab04: new Decimal(0),
        PL1bab05: new Decimal(0),
        PL1bab06: new Decimal(0),
        PL1bab07: new Decimal(0),
        PL1bab08: new Decimal(0),
        PL1bab09: new Decimal(0),
        PL1bab10: new Decimal(0),
        PL1bab11: new Decimal(0),
        PL1bab12: new Decimal(0),
        hasunlockedanmorb: false,
        anmpar: new Decimal(0),
        anmorb: new Decimal(0),
        anmorbttl: new Decimal(0),
        parupg01: new Decimal(0),
        parupg02: new Decimal(0),
        parupg03: new Decimal(0),
        parupg04: new Decimal(0),
        orbupg: [false, false, false, false,],
        innormcha: 0,
        normchamul: new Decimal(0),
        normchapow: new Decimal(1),
        normchacom: [false, false, false, false, false, false, false, false, false, false, false, false,],
        incha: 0,
        chacom01: new Decimal(0),
        chacom02: new Decimal(0),
        chacom03: new Decimal(0),
        chacom04: new Decimal(0),
        chacom05: new Decimal(0),
        chacom06: new Decimal(0),
        chacom07: new Decimal(0),
        chacom08: new Decimal(0),

        hasUnlockedPL2: false,
        PL2energy: new Decimal(1),
        PL2pts: new Decimal(0),
        PL2ptsttl: new Decimal(0),
        PL2tms: new Decimal(0),
        PL2sec: new Decimal(0),
        PL2conf: true,
        PL2tmsc: new Decimal(0),
        PL2upg01: new Decimal(0),
        PL2upg02: new Decimal(0),
        PL2upg03: new Decimal(0),
        PL2upg04: new Decimal(0),
        elmt: new Decimal(0),
        elmttl: new Decimal(0),
        elmt01: new Decimal(0),
        elmt02: new Decimal(0),
        elmt03: new Decimal(0),
        elmt04: new Decimal(0),
        elmten01: new Decimal(0),
        elmten02: new Decimal(0),
        elmten03: new Decimal(0),
        elmten04: new Decimal(0),
        thrm: new Decimal(0),
        thrmttl: new Decimal(0),
        thrmb01: new Decimal(0),
        thrmb02: new Decimal(0),
        thrmb03: new Decimal(0),
        thrmb04: new Decimal(0),
        std: [  false,
                false,
            false, false,
            false, false,
            false,
            false,
            false, false, false,
            false, false, false,
            false, false, false,
            false,
            false,
            false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false,
            false,
            false,
            false,
        ],
        alcspd: new Decimal(0),
        alch01: new Decimal(0),
        alch02: new Decimal(0),
        alch03: new Decimal(0),
        alch04: new Decimal(0),
        alca: [false, false, false, false, false, false, false, false],
        alcu01: new Decimal(0),
        alcu02: new Decimal(0),
        alcu03: new Decimal(0),
        alcu04: new Decimal(0),
        alcu05: new Decimal(0),
        alcu06: new Decimal(0),
        alcu: [false, false, false, false, false, false, false, false],
        hasunlockedanm2: false,
        inzyts: false,
        anm2sc: new Decimal(0),
        anm2: new Decimal(0),
        anm2u01: new Decimal(0),
        anm2u02: new Decimal(0),
        anm2u03: new Decimal(0),
        anm2u04: new Decimal(0),

        hasUnlockedPL3: false,
        PL3energy: new Decimal(1),
        PL3pts: new Decimal(0),
        PL3ptsttl: new Decimal(0),
        PL3tms: new Decimal(0),
        PL3sec: new Decimal(0),
        PL3conf: true,
        res: [false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
        ],
        inres: 0,
        resa01: new Decimal(0),
        resa02: new Decimal(0),
        resa03: new Decimal(0),
        resa04: new Decimal(0),
        resa05: new Decimal(0),
        resa06: new Decimal(0),
        resa07: new Decimal(0),
        resa08: new Decimal(0),
        resp01: new Decimal(0),
        resp02: new Decimal(0),
        resp03: new Decimal(0),
        resp04: new Decimal(0),
        resp05: new Decimal(0),
        resp06: new Decimal(0),
        resp07: new Decimal(0),
        resp08: new Decimal(0),

        autobuywsc: [null,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
        ],

        ach: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
              false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
              false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
              false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
        ],
        milliseconds: new Decimal(0),
        seconds: new Decimal(0),
        minuts: new Decimal(0),
        hours: new Decimal(0),
        days: new Decimal(0),
        totalSeconds: new Decimal(0),
    }
    player.energy = new Decimal(2);
}
hardReset();

/*数值*/
variab = {
    scal01: new Decimal(1024),
    scal02: new Decimal(1099511627776),
    scal03: new Decimal(1.329227995784915e36),
    scal04: new Decimal(2.135987035920910e96),

    scaltier01: new Decimal(100),
    scaltier02: new Decimal(1e8),
    scaltier03: new Decimal(1e24),
    scaltier04: new Decimal(1e64),

    wscc01: new Decimal(2),
    wscc02: new Decimal(4),
    wscc03: new Decimal(16),
    wscc04: new Decimal(256),
    wscc05: new Decimal(65536),
    wscc06: new Decimal(4294967296),
    wscc07: new Decimal(1.844674407370955e19),
    wscc08: new Decimal(3.402823669209384e38),
    wscc09: new Decimal(2),
    wscc10: new Decimal(4),
    wscc11: new Decimal(16),
    wscc12: new Decimal(256),
    wscc13: new Decimal(65536),
    wscc14: new Decimal(4294967296),
    wscc15: new Decimal(1.844674407370955e19),
    wscc16: new Decimal(3.402823669209384e38),
    wscc17: new Decimal(2),
    wscc18: new Decimal(4),
    wscc19: new Decimal(16),
    wscc20: new Decimal(256),
    wscc21: new Decimal(65536),
    wscc22: new Decimal(4294967296),
    wscc23: new Decimal(1.844674407370955e19),
    wscc24: new Decimal(3.402823669209384e38),
    wscc25: new Decimal(2),
    wscc26: new Decimal(4),
    wscc27: new Decimal(16),
    wscc28: new Decimal(256),
    wscc29: new Decimal(65536),
    wscc30: new Decimal(4294967296),
    wscc31: new Decimal(1.844674407370955e19),
    wscc32: new Decimal(3.402823669209384e38),

    wsccor01 : new Decimal(1),
    wsccor02 : new Decimal(2),
    wsccor03 : new Decimal(4),
    wsccor04 : new Decimal(8),
    wsccor05 : new Decimal(16),
    wsccor06 : new Decimal(32),
    wsccor07 : new Decimal(64),
    wsccor08: new Decimal(128),
    wsccor09: new Decimal(1),
    wsccor10: new Decimal(2),
    wsccor11: new Decimal(4),
    wsccor12: new Decimal(8),
    wsccor13: new Decimal(16),
    wsccor14: new Decimal(32),
    wsccor15: new Decimal(64),
    wsccor16: new Decimal(128),
    wsccor17: new Decimal(1),
    wsccor18: new Decimal(2),
    wsccor19: new Decimal(4),
    wsccor20: new Decimal(8),
    wsccor21: new Decimal(16),
    wsccor22: new Decimal(32),
    wsccor23: new Decimal(64),
    wsccor24: new Decimal(128),
    wsccor25: new Decimal(1),
    wsccor26: new Decimal(2),
    wsccor27: new Decimal(4),
    wsccor28: new Decimal(8),
    wsccor29: new Decimal(16),
    wsccor30: new Decimal(32),
    wsccor31: new Decimal(64),
    wsccor32: new Decimal(128),

    wsccsl01 : new Decimal(2),
    wsccsl02 : new Decimal(4),
    wsccsl03 : new Decimal(8),
    wsccsl04 : new Decimal(16),
    wsccsl05 : new Decimal(32),
    wsccsl06 : new Decimal(64),
    wsccsl07 : new Decimal(128),
    wsccsl08: new Decimal(256),
    wsccsl09: new Decimal(2),
    wsccsl10: new Decimal(4),
    wsccsl11: new Decimal(8),
    wsccsl12: new Decimal(16),
    wsccsl13: new Decimal(32),
    wsccsl14: new Decimal(64),
    wsccsl15: new Decimal(128),
    wsccsl16: new Decimal(256),
    wsccsl17: new Decimal(2),
    wsccsl18: new Decimal(4),
    wsccsl19: new Decimal(8),
    wsccsl20: new Decimal(16),
    wsccsl21: new Decimal(32),
    wsccsl22: new Decimal(64),
    wsccsl23: new Decimal(128),
    wsccsl24: new Decimal(256),
    wsccsl25: new Decimal(2),
    wsccsl26: new Decimal(4),
    wsccsl27: new Decimal(8),
    wsccsl28: new Decimal(16),
    wsccsl29: new Decimal(32),
    wsccsl30: new Decimal(64),
    wsccsl31: new Decimal(128),
    wsccsl32: new Decimal(256),

    wscm01 : new Decimal(1),
    wscm02 : new Decimal(1),
    wscm03 : new Decimal(1),
    wscm04 : new Decimal(1),
    wscm05 : new Decimal(1),
    wscm06 : new Decimal(1),
    wscm07 : new Decimal(1),
    wscm08: new Decimal(1),
    wscm09: new Decimal(1),
    wscm10: new Decimal(1),
    wscm11: new Decimal(1),
    wscm12: new Decimal(1),
    wscm13: new Decimal(1),
    wscm14: new Decimal(1),
    wscm15: new Decimal(1),
    wscm16: new Decimal(1),
    wscm17: new Decimal(1),
    wscm18: new Decimal(1),
    wscm19: new Decimal(1),
    wscm20: new Decimal(1),
    wscm21: new Decimal(1),
    wscm22: new Decimal(1),
    wscm23: new Decimal(1),
    wscm24: new Decimal(1),
    wscm25: new Decimal(1),
    wscm26: new Decimal(1),
    wscm27: new Decimal(1),
    wscm28: new Decimal(1),
    wscm29: new Decimal(1),
    wscm30: new Decimal(1),
    wscm31: new Decimal(1),
    wscm32: new Decimal(1),

    wscp01: new Decimal(1),
    wscp02: new Decimal(1),
    wscp03: new Decimal(1),
    wscp04: new Decimal(1),
    wscp05: new Decimal(1),
    wscp06: new Decimal(1),
    wscp07: new Decimal(1),
    wscp08: new Decimal(1),
    wscp09: new Decimal(1),
    wscp10: new Decimal(1),
    wscp11: new Decimal(1),
    wscp12: new Decimal(1),
    wscp13: new Decimal(1),
    wscp14: new Decimal(1),
    wscp15: new Decimal(1),
    wscp16: new Decimal(1),
    wscp17: new Decimal(1),
    wscp18: new Decimal(1),
    wscp19: new Decimal(1),
    wscp20: new Decimal(1),
    wscp21: new Decimal(1),
    wscp22: new Decimal(1),
    wscp23: new Decimal(1),
    wscp24: new Decimal(1),
    wscp25: new Decimal(1),
    wscp26: new Decimal(1),
    wscp27: new Decimal(1),
    wscp28: new Decimal(1),
    wscp29: new Decimal(1),
    wscp30: new Decimal(1),
    wscp31: new Decimal(1),
    wscp32: new Decimal(1),

    wscmpb: new Decimal(1.6),

    wscBaseValue: new Decimal(0),
    wscBaseValue1: new Decimal(0),
    wscBaseValue2: new Decimal(0),
    wscBaseValue3: new Decimal(0),
    wscBaseValue4: new Decimal(0),
    wscBaseValueExp: new Decimal(1),
    tierc01: new Decimal(64),
    tierc02: new Decimal(4),
    tierc03: new Decimal(4),
    tierc04: new Decimal(4),

    upgc01: new Decimal(0),
    upgc02: new Decimal(0),
    upgc03: new Decimal(0),
    upgc04: new Decimal(0),
    upgcor01: new Decimal(256),
    upgcor02: new Decimal(512),
    upgcor03: new Decimal(2048),
    upgcor04: new Decimal(8192),
    upgcsl01: new Decimal(512),
    upgcsl02: new Decimal(1024),
    upgcsl03: new Decimal(4096),
    upgcsl04: new Decimal(16384),
    upge01: new Decimal(1),
    upge02: new Decimal(1),
    upge03: new Decimal(1),
    upge04: new Decimal(1),
    upgf01: new Decimal(0),
    upgf02: new Decimal(0),
    upgf03: new Decimal(0),
    upgf04: new Decimal(0),

    upgd01mult: new Decimal(1),
    upgd02mult: new Decimal(1),
    upgd03mult: new Decimal(1),
    upgd04mult: new Decimal(1),

    PL1engmul: new Decimal(1),
    PL1engpow: new Decimal(1),

    PL1babc1: new Decimal("1e5120"),
    PL1babc2: new Decimal(1e160),
    PL1babc3: new Decimal(100000),
    PL1babc4: new Decimal("1e20480"),
    PL1babc5: new Decimal("1e640"),
    PL1babc6: new Decimal(1e20),
    PL1babcsl1: new Decimal("1e1024"),
    PL1babcsl2: new Decimal(1e32),
    PL1babcsl3: new Decimal(10),

    anmparps: new Decimal(0),
    anmparsc: new Decimal(80),
    parupgc01: new Decimal(10),
    parupgc02: new Decimal(100),
    parupgc03: new Decimal(1000),
    parupgc04: new Decimal(80),

    chagoa01: new Decimal("1.415461031044954e9864"),
    chagoa02: new Decimal("2.003529930406844e19728"),
    chagoa03: new Decimal("4.0141321e39456"),
    chagoa04: new Decimal("1.044388881413152e1233"),
    chagoa05: new Decimal("1e100000"),
    chagoa06: new Decimal("1e100000"),
    chagoa07: new Decimal("1e100000"),
    chagoa08: new Decimal("1e100000"),
    chascl01: new Decimal("1.090748135619415e2466"),
    chascl02: new Decimal("1.189731495357231e4932"),
    chascl03: new Decimal("1.415461031044954e9864"),
    chascl04: new Decimal("1.044388881413152e1233"),
    chascl05: new Decimal("1e2000000"),
    chascl06: new Decimal("1e8000000"),
    chascl07: new Decimal("1e32000000"),
    chascl08: new Decimal("1e128000000"),
    PL1chacap: new Decimal(4),
    PL2chacap: new Decimal(4),

    PL2engmul: new Decimal(1),
    PL2engpow: new Decimal(1),
    PL2engmul2: new Decimal(1),
    PL2engpow2: new Decimal(1),

    PL2upgc01: new Decimal(4),
    PL2upgc02: new Decimal(4),
    PL2upgc03: new Decimal(4),
    PL2upgc04: new Decimal(4),

    elmmpd: new Decimal(4),
    elmtps01: new Decimal(0),
    elmtps02: new Decimal(0),
    elmtps03: new Decimal(0),
    elmtps04: new Decimal(0),

    thrmc01: new Decimal("1e315652"),
    thrmc02: new Decimal("1.797e308"),
    thrmc03: new Decimal(2),
    thrmc04: new Decimal(2),

    alcost: new Decimal("1e2500"),
    alcuc01: new Decimal(2),
    alcuc02: new Decimal(2),
    alcuc03: new Decimal(2),
    alcuc04: new Decimal(2),
    alcuc05: new Decimal(2),
    alcuc06: new Decimal(2),
    alcuc07: new Decimal(48),
    alcuc08: new Decimal(64),
    alcuc09: new Decimal(96),
    alcuc10: new Decimal(128),
    alcuc11: new Decimal(192),
    alcuc12: new Decimal(256),

    anm2ps: new Decimal(0),
    anm2c01: new Decimal(10),
    anm2c02: new Decimal(100),
    anm2c03: new Decimal(1000),
    anm2c04: new Decimal(10000),

    PL3engmul: new Decimal(1),
    PL3engpow: new Decimal(1),
    PL3engmul2: new Decimal(1),
    PL3engpow2: new Decimal(1),
    PL3engmul3: new Decimal(1),
    PL3engpow3: new Decimal(1),
    PL3tef1: new Decimal(1),
    PL3tef2: new Decimal(1),

    resped: new Decimal(1),
    resr01: new Decimal(32),
    resr02: new Decimal(64),
    resr03: new Decimal(128),
    resr04: new Decimal(256),
    resr05: new Decimal(1024),
    resr06: new Decimal(4096),
    resr07: new Decimal(16384),
    resr08: new Decimal(65536),
    rese01: new Decimal(1),
    rese02: new Decimal(1),
    rese03: new Decimal(1),
    rese04: new Decimal(1),
}

var tempPlayer = player;

load();

Object.assign(tempPlayer, player);

player = tempPlayer;

player.ach.length = 64;

player.ach = player.ach.map(item => item === null | item === undefined ? false : item);

/*存档*/
function save() {
    localStorage.windSpiritCreation = btoa(JSON.stringify(player));
    shownoti("#autosave");
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
    shownoti("#export");
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
        shownoti("#import");
    }
}

function trueHardReset() {
    let promption = prompt("您确定要硬重置吗？输入This is the future确定");
    if (promption == "This is the future") {
        hardReset();
        hardReset();
        shownoti("#hardreset");
    }
}

/*游戏*/
function buyWsc(tier) {
    getWscCost();
    var name = tiername[tier];
    if (tier <= 8) {
        if (player.innormcha == 4 & tier >= 5) return;
        if (player.energy.gte(variab["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.energy = player.energy.sub(variab["wscc" + name]);
            if (player.innormcha == 3) player.normchapow = new Decimal(0);
            if (player.innormcha == 5) {
                for (let i = 1; i < tier; i++) {
                    let name = tiername[i];
                    player["wscb" + name] = new Decimal(0);
                }
            }
            if (player.innormcha == 7) {
                for (let i = 1; i <= 8; i++) {
                    let name = tiername[i];
                    if (player["wsca" + name].gt(0)) player["wsca" + name] = new Decimal(0.001);
                }
            }
            if (player.innormcha == 8) player.normchamul = new Decimal(1);
        }
        else return
    }
    else if (tier <= 16) {
        if (player.PL1pts.gte(variab["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.PL1pts = player.PL1pts.sub(variab["wscc" + name]);
        }
        else return
    }
    else if (tier <= 24) {
        if (player.PL2pts.gte(variab["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.PL2pts = player.PL2pts.sub(variab["wscc" + name]);
        }
        else return
    }
    else if (tier <= 32) {
        if (player.PL3pts.gte(variab["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.PL3pts = player.PL3pts.sub(variab["wscc" + name]);
        }
        else return
    }
    else return
}

function buyMaxWsc(tier) {
    if (player.innormcha == 2 | player.innormcha == 5) return;
    var name = tiername[tier];
    if (tier <= 8) {
        if (player.innormcha == 4 & tier >= 5) return;
        var wscbmax = invscale(player.energy.log(2)).add(variab["wsccor" + name]).div(variab["wsccsl" + name]).floor();
        if (wscbmax.gt(player["wscb" + name])) {
            player["wsca" + name] = player["wsca" + name].add(wscbmax.sub(player["wscb" + name]));
            player["wscb" + name] = wscbmax.sub(1);
            getWscCost();
            player.energy = player.energy.sub(variab["wscc" + name]);
            player["wscb" + name] = player["wscb" + name].add(1);
            if (player.innormcha == 3) player.normchapow = new Decimal(0);
            if (player.innormcha == 7) {
                for (let i = 1; i <= 8; i++) {
                    let name = tiername[i];
                    if (player["wsca" + name].gt(0)) player["wsca" + name] = new Decimal(0.001);
                }
            }
            if (player.innormcha == 8) player.normchamul = new Decimal(1);
        }
        else return
    }
    else if (tier <= 16) {
        var wscbmax = invscale(player.PL1pts.log(2)).add(variab["wsccor" + name]).div(variab["wsccsl" + name]).floor();
        if (wscbmax.gt(player["wscb" + name])) {
            player["wsca" + name] = player["wsca" + name].add(wscbmax.sub(player["wscb" + name]));
            player["wscb" + name] = wscbmax.sub(1);
            getWscCost();
            player.PL1pts = player.PL1pts.sub(variab["wscc" + name]);
            player["wscb" + name] = player["wscb" + name].add(1);
        }
        else return
    }
    else if (tier <= 24) {
        var wscbmax = invscale(player.PL2pts.log(2)).add(variab["wsccor" + name]).div(variab["wsccsl" + name]).floor();
        if (wscbmax.gt(player["wscb" + name])) {
            player["wsca" + name] = player["wsca" + name].add(wscbmax.sub(player["wscb" + name]));
            player["wscb" + name] = wscbmax.sub(1);
            getWscCost();
            player.PL2pts = player.PL2pts.sub(variab["wscc" + name]);
            player["wscb" + name] = player["wscb" + name].add(1);
        }
        else return
    }
    else if (tier <= 32) {
        var wscbmax = invscale(player.PL3pts.log(2)).add(variab["wsccor" + name]).div(variab["wsccsl" + name]).floor();
        if (wscbmax.gt(player["wscb" + name])) {
            player["wsca" + name] = player["wsca" + name].add(wscbmax.sub(player["wscb" + name]));
            player["wscb" + name] = wscbmax.sub(1);
            getWscCost();
            player.PL3pts = player.PL3pts.sub(variab["wscc" + name]);
            player["wscb" + name] = player["wscb" + name].add(1);
        }
        else return
    }
    else return
}

function autoBuyWsc(tier) {
        if (player.autobuywsc[tier] == true) buyMaxWsc(tier);
}

function abwSwitch(tier) {
    if (player.autobuywsc[tier] == false) player.autobuywsc[tier] = true;
    else player.autobuywsc[tier] = false;
}

function maxAll() {
    for (let i = 1; i <= 32; i++) {
        buyMaxWsc(i);
    }
}

function maxAll08() {
    for (let i = 1; i <= 8; i++) {
        buyMaxWsc(i);
    }
}

function maxAll16() {
    for (let i = 9; i <= 16; i++) {
        buyMaxWsc(i);
    }
}

function maxAll24() {
    for (let i = 17; i <= 24; i++) {
        buyMaxWsc(i);
    }
}

function maxAll32() {
    for (let i = 25; i <= 32; i++) {
        buyMaxWsc(i);
    }
}

function getWscMult() {
    var mult01to08 = new Decimal(1);
    var mult09to16 = new Decimal(1);
    var mult17to24 = new Decimal(1);
    var mult25to32 = new Decimal(1);

    if (player.tier01.gte(1)) mult01to08 = mult01to08.mul(player.tier01.add(1).pow(2));
    if (player.tier01.gte(2)) mult01to08 = mult01to08.mul(variab.wscBaseValue.div(64).max(1));
    if (player.tier01.gte(5)) mult01to08 = mult01to08.mul(player.tier02.add(1).pow(3));
    if (player.tier01.gte(10)) mult01to08 = mult01to08.mul(player.energy.add(1).log(2).pow(0.2).max(1));
    if (player.tier01.gte(25)) mult01to08 = mult01to08.mul(new Decimal(2).mul(new Decimal(2).pow(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03))).pow(player.tier01));
    if (player.tier01.gte(63)) mult09to16 = mult09to16.mul(player.tier01.add(1).pow(2)).mul(player.tier02.add(1).pow(3));

    if (player.PL1upg[4] == true) mult09to16 = mult09to16.mul(player.PL1energy.add(1).log(2).max(1).pow(player.chacom02.mul(1).add(2)));
    if (player.PL1upg[5] == true) mult09to16 = mult09to16.mul(player.PL1ptsttl.min(player.PL1ptsttl.add(1).log(1.189207115002721).pow(4).mul(4294967296)).max(1));
    if (player.PL1upg[6] == true) mult09to16 = mult09to16.mul(player.PL1tms.pow(4).min(player.PL1tms.pow(0.25).mul(1.152921505e18)).max(1)); 
    if (player.PL1upg[7] == true) mult09to16 = mult09to16.mul(player.energy.add(1).log(2).max(1).pow(player.chacom02.mul(1).add(2))); 

    mult01to08 = mult01to08.mul(new Decimal(16).pow(player.PL1bab10));
    mult09to16 = mult09to16.mul(new Decimal(2).pow(player.PL1bab12)).mul(player.anmpar.pow(player.parupg02.mul(0.25)).max(1));

    if (player.orbupg[0] == true) mult01to08 = mult01to08.mul(player.energy.add(1).log(2).pow(16));
    if (player.orbupg[1] == true) mult01to08 = mult01to08.mul(player.PL1energy.add(1).log(2).pow(16));
    if (player.orbupg[2] == true) mult09to16 = mult09to16.mul(player.energy.add(1).log(2).pow(4));
    if (player.orbupg[3] == true) mult09to16 = mult09to16.mul(player.PL1energy.add(1).log(2).pow(4));

    if (player.tier03.gte(1)) mult17to24 = mult17to24.mul(new Decimal(1.189207115002721).pow(player.upgd01.add(player.upgd02).add(player.upgd03).add(player.upgd04)));
    mult17to24 = mult17to24.mul(player.PL2tms.pow(player.PL2upg04).max(1)).mul(player.anm2.pow(player.anm2u02.mul(4)).max(1));

    if (player.std[4] == true) mult09to16 = mult09to16.mul(new Decimal(2).mul(new Decimal(2).pow(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03))).root(8).pow(player.tier01));
    if (player.std[5] == true) mult17to24 = mult17to24.mul(new Decimal(2).mul(new Decimal(2).pow(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03))).root(64).pow(player.tier01));
    if (player.std[8] == true) mult01to08 = mult01to08.mul(player.PL2energy.max(1).log(2).pow(4096));
    if (player.std[9] == true) mult09to16 = mult09to16.mul(player.PL2energy.max(1).log(2).pow(256));
    if (player.std[10] == true) mult17to24 = mult17to24.mul(player.PL2energy.max(1).log(2).pow(16));

    if(player.resa01.gte(1)) mult25to32 = mult25to32.mul(variab.rese01);

    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        variab["wscm" + name] = variab.wscmpb.pow(player["wscb" + name]).mul(mult01to08.max(1)).mul(variab.PL1engmul).mul(variab.PL2engmul2).mul(variab.PL3engmul3);
    }
    for (let tier = 9; tier <= 16; tier++) {
        let name = tiername[tier];
        variab["wscm" + name] = variab.wscmpb.pow(player["wscb" + name]).mul(mult09to16.max(1)).mul(variab.PL2engmul).mul(variab.PL3engmul2);
    }
    for (let tier = 17; tier <= 24; tier++) {
        let name = tiername[tier];
        variab["wscm" + name] = variab.wscmpb.pow(player["wscb" + name]).mul(mult17to24.max(1)).mul(variab.PL3engmul);
    }
    for (let tier = 25; tier <= 32; tier++) {
        let name = tiername[tier];
        variab["wscm" + name] = variab.wscmpb.pow(player["wscb" + name]).mul(mult25to32.max(1));
    }

    if (player.inzyts == true) {
        for (let tier = 1; tier <= 24; tier++) {
            let name = tiername[tier];
            variab["wscm" + name] = variab["wscm" + name].div(player.energy.pow(0.1));
        }
    }
    if (player.innormcha == 8) {
        player.normchamul = player.normchamul.div(new Decimal(8).pow(new Decimal(diff))).min(1);
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            variab["wscm" + name] = variab["wscm" + name].mul(player.normchamul);
        }
    }
    if (player.innormcha == 10) {
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            variab["wscm" + name] = variab["wscm" + name].div(variab.wscBaseValue1.add(1).pow(2));
        }
    }
}

function getWscPow() {
    if (player.innormcha == 1) {
        variab.wscp01 = new Decimal(2);
        for (let tier = 2; tier <= 8; tier++) {
            let name = tiername[tier];
            variab["wscp" + name] = new Decimal(0);
        }
    }
    else if (player.innormcha == 3) {
        player.normchapow = player.normchapow.add(new Decimal(diff).mul(0.333)).min(1);
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            variab["wscp" + name] = player.normchapow;
        }
    }
    else if (player.innormcha == 9) {
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            variab["wscp" + name] = new Decimal(1).sub(variab.wscBaseValue1.mul(0.001)).max(0);
        }
    }
    else if (player.incha == 2) {
        for (let tier = 1; tier <= 16; tier++) {
            let name = tiername[tier];
            variab["wscp" + name] = new Decimal(1).div(player.energy.log(2).max(1).pow(0.5).div(1000).add(1)).min(1);
        }
    }
    else {
        let a = new Decimal(4096);
        if (player.alcu[3] == true) a = new Decimal(1024);
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            variab["wscp" + name] = new Decimal(1);
            variab["wscp" + name] = variab["wscp" + name].add(player.chacom03.mul(0.01));
            if (player.tier03.gte(3)) variab["wscp" + name] = variab["wscp" + name].add(player.tier03.min(player.tier03.pow(0.5).mul(8)).mul(0.001));
            if (player.tier02.gte(75)) variab["wscp" + name] = variab["wscp" + name].add(player.energy.add(1).log(2).add(1).log(2).div(a));
            variab["wscp" + name] = variab["wscp" + name].add(player.alcu03.mul(0.01));
            variab["wscp" + name] = variab["wscp" + name].add(player.anm2u04.mul(0.01));
            if (player.resa03.gte(1)) mult25to32 = variab["wscp" + name] = variab["wscp" + name].mul(new Decimal(1.010889286));
        }
        for (let tier = 9; tier <= 16; tier++) {
            let name = tiername[tier];
            variab["wscp" + name] = new Decimal(1);
            variab["wscp" + name] = variab["wscp" + name].add(player.chacom06.mul(0.01));
            if (player.tier03.gte(3)) variab["wscp" + name] = variab["wscp" + name].add(player.tier03.min(player.tier03.pow(0.5).mul(8)).mul(0.001));
            if (player.tier02.gte(75)) variab["wscp" + name] = variab["wscp" + name].add(player.PL1energy.add(1).log(2).add(1).log(2).div(a));
            variab["wscp" + name] = variab["wscp" + name].add(player.alcu04.mul(0.01));
            variab["wscp" + name] = variab["wscp" + name].add(player.anm2u04.mul(0.01));
            if (player.resa03.gte(1)) mult25to32 = variab["wscp" + name] = variab["wscp" + name].mul(new Decimal(1.010889286));
        }
        for (let tier = 17; tier <= 24; tier++) {
            let name = tiername[tier];
            variab["wscp" + name] = new Decimal(1);
            if (player.tier04.gte(3)) variab["wscp" + name] = variab["wscp" + name].add(player.tier03.min(player.tier03.pow(0.5).mul(8)).mul(0.001));
            if (player.tier02.gte(75)) variab["wscp" + name] = variab["wscp" + name].add(player.PL2energy.add(1).log(2).add(1).log(2).div(a));
            variab["wscp" + name] = variab["wscp" + name].add(player.alcu05.mul(0.01));
            variab["wscp" + name] = variab["wscp" + name].add(player.anm2u04.mul(0.01));
            if (player.resa03.gte(1)) mult25to32 = variab["wscp" + name] = variab["wscp" + name].mul(new Decimal(1.010889286));
        }
        for (let tier = 25; tier <= 32; tier++) {
            let name = tiername[tier];
            variab["wscp" + name] = new Decimal(1);
            if (player.resa03.gte(1)) mult25to32 = variab["wscp" + name] = variab["wscp" + name].mul(new Decimal(1.010889286));
        }
    }
}

function getWscMultPerBuy() {
    variab.wscmpb = new Decimal(1.6);
    if (player.tier02.gte(1)) variab.wscmpb = variab.wscmpb.add(player.tier02.pow(0.25).mul(0.05));
    if (player.tier02.gte(5)) variab.wscmpb = variab.wscmpb.add(player.tier01.pow(0.25).mul(0.05));
    variab.wscmpb = variab.wscmpb.add(variab.upge01).mul(variab.upge02);
    if (player.tier02.gte(12)) variab.wscmpb = variab.wscmpb.mul(new Decimal(1.010889286051700).pow(player.PL1bab04.add(player.PL1bab05).add(player.PL1bab06).mul(0.2).add(1)).pow(player.tier02));
    if (player.PL1upg[15] == true) variab.wscmpb = variab.wscmpb.mul(1.25);
    if (player.hasunlockedanmorb == true & player.incha != 6) {
        if (player.std[0] == true) variab.wscmpb = variab.wscmpb.pow(player.anmpar.add(1).log(2).pow(player.parupg03.min(60).div(256).add(0.015625)).max(1));
        else variab.wscmpb = variab.wscmpb.mul(player.anmpar.add(1).log(2).pow(player.parupg03.min(60).div(64).add(0.0625)).max(1));
    }
    if (player.innormcha == 12) variab.wscmpb = new Decimal(1);
}

function getWscCost() {
    for (let tier = 1; tier <= 32; tier++) {
        let name = tiername[tier];
        var bcost = variab["wsccor" + name].add(variab["wsccsl" + name].mul(player["wscb" +name]));
        variab["wscc" + name] = new Decimal(2).pow(scale(bcost));
    }
    if (player.innormcha == 2) {
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            var bcost = variab["wsccor" + name].add(variab["wsccsl" + name].mul(player["wscb" + name]).mul(2));
            variab["wscc" + name] = new Decimal(2).pow(scale(bcost));
        }
    }
}

function getWscBaseValue() {
    variab.wscBaseValue1 = new Decimal(0);
    variab.wscBaseValue2 = new Decimal(0);
    variab.wscBaseValue3 = new Decimal(0);
    variab.wscBaseValue4 = new Decimal(0);
    variab.wscBaseValueExp = new Decimal(1);
    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        variab.wscBaseValue1 = variab.wscBaseValue1.add(player["wscb" + name]);
    }
    for (let tier = 9; tier <= 16; tier++) {
        let name = tiername[tier];
        variab.wscBaseValue2 = variab.wscBaseValue2.add(player["wscb" + name]);
    }
    for (let tier = 17; tier <= 24; tier++) {
        let name = tiername[tier];
        variab.wscBaseValue3 = variab.wscBaseValue3.add(player["wscb" + name]);
    }
    for (let tier = 25; tier <= 32; tier++) {
        let name = tiername[tier];
        variab.wscBaseValue4 = variab.wscBaseValue4.add(player["wscb" + name]);
    }
    if (player.std[1] == true) variab.wscBaseValueExp = variab.wscBaseValueExp.add(0.05);
    variab.wscBaseValueExp = variab.wscBaseValueExp.add(player.alcu06.mul(0.005));
    variab.wscBaseValue = variab.wscBaseValue1.add(variab.wscBaseValue2.mul(4)).add(variab.wscBaseValue3.mul(16)).add(variab.wscBaseValue4.mul(64)).pow(variab.wscBaseValueExp);
    if (player.innormcha == 6 & variab.wscBaseValue1.gt(60)) quitCha();
}

function incTier1() {
    if (variab.wscBaseValue.gte(variab.tierc01)) {
        if (player.innormcha == 9 | player.innormcha == 10) return
        player.tier01 = player.tier01.add(1);
        if (player.PL1upg[13] == false) tier01Reset();
    }
    else return
}

function incTier2() {
    if (player.tier01.gte(variab.tierc02)) {
        player.tier02 = player.tier02.add(1);
        if (player.PL1upg[14] == false) tier02Reset();
    }
    else return
}

function incTier3() {
    if (player.tier02.gte(variab.tierc03)) {
        player.tier03 = player.tier03.add(1);
        if (player.PL2tms.lt(9)) tier03Reset();
    }
    else return
}

function incTier4() {
    if (player.tier03.gte(variab.tierc04)) {
        player.tier04 = player.tier04.add(1);
        if(player.alcu[0] != true) tier04Reset();
    }
    else return
}

function incMaxTier1() {
    let tierbmax = invscaleTier(variab.wscBaseValue.div(64)).floor();
    if (tierbmax.gt(player.tier01)) {
        player.tier01 = tierbmax;
        if (player.PL1upg[13] == false) tier01Reset();
    }
    else return
}

function incMaxTier2() {
    let tierbmax = invscaleTier(player.tier01.div(4)).floor();
    if (tierbmax.gt(player.tier02)) {
        player.tier02 = tierbmax;
        if (player.PL1upg[14] == false) tier02Reset();
    }
    else return
}

function incMaxTier3() {
    let tierbmax = invscaleTier(player.tier02.div(4)).floor();
    if (tierbmax.gt(player.tier03)) {
        player.tier03 = tierbmax;
    }
    else return
}

function incMaxTier4() {
    let tierbmax = invscaleTier(player.tier03.div(4)).floor();
    if (tierbmax.gt(player.tier04)) {
        player.tier04 = tierbmax;
    }
    else return
}

function getTierCost() {
    variab.tierc01 = scaleTier(player.tier01).mul(64).add(64);
    variab.tierc02 = scaleTier(player.tier02).mul(4).add(4);
    variab.tierc03 = scaleTier(player.tier03).mul(4).add(4);
    variab.tierc04 = scaleTier(player.tier04).mul(4).add(4);
}

const tier01checkbox = document.getElementById("tier01confirm");
tier01checkbox.addEventListener("input", function () {
    if (tier01checkbox.checked) {
        player.tier01conf = true;
    } else {
        player.tier01conf = false;
    }
})

const tier02checkbox = document.getElementById("tier02confirm");
tier02checkbox.addEventListener("input", function () {
    if (tier02checkbox.checked) {
        player.tier02conf = true;
    } else {
        player.tier02conf = false;
    }
})

function tier01Reset() {
    var confirmation = true;
    if (player.tier01conf == true) confirmation = confirm("您确定要获得风单元吗？这将重置能量和1~8式风灵作成");
    if (confirmation | !player.tier01conf) {
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
}

function tier02Reset() {
    var confirmation = true;
    if (player.tier02conf == true) confirmation = confirm("您确定要获得风模块吗？这将重置能量、1~8式风灵作成、风单元");
    if (confirmation | !player.tier02conf) {
        tier01Reset();
        player.tier01 = new Decimal(0);
    }
}

function tier03Reset() {
        tier02Reset();
        player.tier02 = new Decimal(0);
}

function tier04Reset() {
        tier03Reset();
        player.tier03 = new Decimal(0);
}

function abTier01Switch() {
    if (player.autobuytier01 == false) player.autobuytier01 = true;
    else player.autobuytier01 = false;
}

function abTier02Switch() {
    if (player.autobuytier02 == false) player.autobuytier02 = true;
    else player.autobuytier02 = false;
}

function abTier03Switch() {
    if (player.autobuytier03 == false) player.autobuytier03 = true;
    else player.autobuytier03 = false;
}

function abTier04Switch() {
    if (player.autobuytier04 == false) player.autobuytier04 = true;
    else player.autobuytier04 = false;
}

function autoBuyTier01() {
    if (player.autobuytier01 == true) {
        incMaxTier1();
        incTier1();
    }
}

function autoBuyTier02() {
    if (player.autobuytier02 == true) {
        incMaxTier2();
        incTier2();
    }
}

function autoBuyTier03() {
    if (player.autobuytier03 == true) {
        incMaxTier3();
        incTier3();
    }
}

function autoBuyTier04() {
    if (player.autobuytier04 == true) {
        incMaxTier4();
        incTier4();
    }
}

function buyUpgd(tier) {
    let name = tiername[tier];
    getUpgdCost();
    if (player.energy.gte(variab["upgc" + name])) {
        player["upgd" + name] = player["upgd" + name].add(1);
        player.energy = player.energy.sub(variab["upgc" + name]);
    }
    else return
}

function buyMaxUpgd(tier) {
    let name = tiername[tier];
    let max = invscale(player.energy.log(2)).add(variab["upgcor" + name]).div(variab["upgcsl" + name]).floor();
    if (max.gt(player["upgd" + name])) {
        player["upgd" + name] = max.sub(1);
        getUpgdCost();
        player.energy = player.energy.sub(variab["upgc" + name]);
        player["upgd" + name] = player["upgd" + name].add(1);
    }
    else return
}

function abUpgd01Switch() {
    if (player.autobuyupgd01 == false) player.autobuyupgd01 = true;
    else player.autobuyupgd01 = false;
}

function abUpgd02Switch() {
    if (player.autobuyupgd02 == false) player.autobuyupgd02 = true;
    else player.autobuyupgd02 = false;
}

function abUpgd03Switch() {
    if (player.autobuyupgd03 == false) player.autobuyupgd03 = true;
    else player.autobuyupgd03 = false;
}

function abUpgd04Switch() {
    if (player.autobuyupgd04 == false) player.autobuyupgd04 = true;
    else player.autobuyupgd04 = false;
}

function autoBuyUpgd01() {
    if (player.autobuyupgd01 == true & player.tier02.gte(1)) buyMaxUpgd(1);
}

function autoBuyUpgd02() {
    if (player.autobuyupgd02 == true & player.tier02.gte(2)) buyMaxUpgd(2);
}

function autoBuyUpgd03() {
    if (player.autobuyupgd03 == true & player.tier02.gte(12)) buyMaxUpgd(3);
}

function autoBuyUpgd04() {
    if (player.autobuyupgd04 == true & player.tier02.gte(30)) buyMaxUpgd(4);
}

function getUpgdMult() {
    if (player.incha == 3) {
        player.upgd01 = new Decimal(0);
        player.upgd02 = new Decimal(0);
        player.upgd03 = new Decimal(0);
        player.upgd04 = new Decimal(0);
    }
    if (player.PL1upg[9] == true) variab.upgd01mult = new Decimal(0.0625).mul(variab.upge03);
    else variab.upgd01mult = new Decimal(0.025).mul(variab.upge03);
    if (player.PL1upg[10] == true) variab.upgd02mult = new Decimal(1.044273782427413).pow(variab.upge04);
    else variab.upgd02mult = new Decimal(1.021897148654116).pow(variab.upge04);
    variab.upge01 = variab.upgd01mult.mul(player.upgd01.add(variab.upgf01));
    variab.upge02 = softcap(variab.upgd02mult.pow(player.upgd02.add(variab.upgf02)));
    variab.upge03 = player.upgd03.add(variab.upgf03).mul(0.25).add(1);
    variab.upge04 = softcap(player.upgd04.add(variab.upgf04).pow(2)).root(2).mul(0.25).add(1);
}

function getUpgdCost() {
    var bcost1 = variab.upgcor01.add(variab.upgcsl01.mul(player.upgd01));
    variab.upgc01 = new Decimal(2).pow(scale(bcost1));
    var bcost2 = variab.upgcor02.add(variab.upgcsl02.mul(player.upgd02));
    variab.upgc02 = new Decimal(2).pow(scale(bcost2));
    var bcost3 = variab.upgcor03.add(variab.upgcsl03.mul(player.upgd03));
    variab.upgc03 = new Decimal(2).pow(scale(bcost3));
    var bcost4 = variab.upgcor04.add(variab.upgcsl04.mul(player.upgd04));
    variab.upgc04 = new Decimal(2).pow(scale(bcost4));
}

const PL1checkbox = document.getElementById("PL1confirm");
PL1checkbox.addEventListener("input", function () {
    if (PL1checkbox.checked) {
        player.PL1conf = true;
    } else {
        player.PL1conf = false;
    }
})

async function PL1reset() {
    if (player.energy.lt(1.797e308)) return;
    if (player.incha == 8) return;
    var confirmation = true;
    if (player.PL1conf == true) confirmation = confirm("您确定要扩散吗？这将重置能量、1~8式风灵作成、风单元、风模块、风灵升级，但是可以获得扩散点！第一次扩散解锁9~16式风灵和其他内容");
    if (confirmation | !player.PL1conf) {
        player.PL1pts = player.PL1pts.add(player.energy.root(1024).floor());
        player.PL1ptsttl = player.PL1ptsttl.add(player.energy.root(1024).floor());
        if (player.std[14] == true) player.PL1tms = player.PL1tms.add(new Decimal(2).pow(player.PL1bab11).mul(variab.wscBaseValue.max(1).log(2)));
        else player.PL1tms = player.PL1tms.add(new Decimal(2).pow(player.PL1bab11));
        player.hasUnlockedPL1 = true;

        clearInterval(prod);
        prod = null;

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
        if (player.PL2tms.lte(4)) {
            player.tier01 = new Decimal(0);
            player.tier02 = new Decimal(0);
        }
        player.upgd01 = new Decimal(0);
        player.upgd02 = new Decimal(0);
        player.PL1sec = new Decimal(0);
        player.PL1energy = new Decimal(1);

        await delay(100);
        player.energy = new Decimal(2);
        prod = setInterval(produce, 50);
    }
}

function getPL1engMul() {
    if (player.incha == 1) variab.PL1engmul = new Decimal(1e-100).pow(variab.PL1engpow);
    else variab.PL1engmul = player.PL1energy.pow(variab.PL1engpow).max(1);
}

function getPL1engPow() {
    if (player.innormcha == 11) variab.PL1engpow = new Decimal(0.1);
    else variab.PL1engpow = new Decimal(1);
    if (player.PL1upg[8] == true) variab.PL1engpow = variab.PL1engpow.add(0.5);
    variab.PL1engpow = variab.PL1engpow.add(player.PL1bab07.add(player.PL1bab08).add(player.PL1bab09).mul(0.1)).add(player.chacom01.min(player.chacom01.pow(0.5).mul(2)).mul(0.25));
    if (player.std[2] == true) {
        variab.PL1engpow = variab.PL1engpow.add(1);
    }
    if (player.alcu[4] == true) variab.PL1engpow = variab.PL1engpow.add(1);
}

function buyPL1upg(tier) {
    var PL1upgcost = [2, 4, 8, 16,
        32, 64, 128, 256,
        1024, 4096, 16384, 65536,
        1048576, 16777216, 268435456, 4294967296,];
    if (player.PL1pts.gte(new Decimal(PL1upgcost[tier])) & player.PL1upg[tier] == false) {
        player.PL1upg[tier] = true;
        player.PL1pts = player.PL1pts.sub(new Decimal(PL1upgcost[tier]));
    }
}

function buyPL1bab1() {
    if (player.energy.gte(variab.PL1babc1) & player.PL1bab01.lt(5)) {
        player.PL1bab01 = player.PL1bab01.add(1);
        player.energy = player.energy.sub(variab.PL1babc1);
    }
    else return
}

function buyPL1bab2() {
    if (player.PL1energy.gte(variab.PL1babc2) & player.PL1bab02.lt(5)) {
        player.PL1bab02 = player.PL1bab02.add(1);
        player.PL1energy = player.PL1energy.sub(variab.PL1babc2);
    }
    else return
}

function buyPL1bab3() {
    if (player.PL1pts.gte(variab.PL1babc3) & player.PL1bab03.lt(5)) {
        player.PL1bab03 = player.PL1bab03.add(1);
        player.PL1pts = player.PL1pts.sub(variab.PL1babc3);
    }
    else return
}

function buyPL1bab4() {
    if (player.energy.gte(variab.PL1babc1) & player.PL1bab04.lt(5)) {
        player.PL1bab04 = player.PL1bab04.add(1);
        player.energy = player.energy.sub(variab.PL1babc1);
    }
    else return
}

function buyPL1bab5() {
    if (player.PL1energy.gte(variab.PL1babc2) & player.PL1bab05.lt(5)) {
        player.PL1bab05 = player.PL1bab05.add(1);
        player.PL1energy = player.PL1energy.sub(variab.PL1babc2);
    }
    else return
}

function buyPL1bab6() {
    if (player.PL1pts.gte(variab.PL1babc3) & player.PL1bab06.lt(5)) {
        player.PL1bab06 = player.PL1bab06.add(1);
        player.PL1pts = player.PL1pts.sub(variab.PL1babc3);
    }
    else return
}

function buyPL1bab7() {
    if (player.energy.gte(variab.PL1babc1) & player.PL1bab07.lt(5)) {
        player.PL1bab07 = player.PL1bab07.add(1);
        player.energy = player.energy.sub(variab.PL1babc1);
    }
    else return
}

function buyPL1bab8() {
    if (player.PL1energy.gte(variab.PL1babc2) & player.PL1bab08.lt(5)) {
        player.PL1bab08 = player.PL1bab08.add(1);
        player.PL1energy = player.PL1energy.sub(variab.PL1babc2);
    }
    else return
}

function buyPL1bab9() {
    if (player.PL1pts.gte(variab.PL1babc3) & player.PL1bab09.lt(5)) {
        player.PL1bab09 = player.PL1bab09.add(1);
        player.PL1pts = player.PL1pts.sub(variab.PL1babc3);
    }
    else return
}

function buyPL1bab10() {
    if (player.energy.gte(variab.PL1babc4) & player.PL1bab10.lt(40)) {
        player.PL1bab10 = player.PL1bab10.add(1);
        player.energy = player.energy.sub(variab.PL1babc4);
    }
    else return
}

function buyPL1bab11() {
    if (player.PL1energy.gte(variab.PL1babc5) & player.PL1bab11.lt(40)) {
        player.PL1bab11 = player.PL1bab11.add(1);
        player.PL1energy = player.PL1energy.sub(variab.PL1babc5);
    }
    else return
}

function buyPL1bab12() {
    if (player.PL1pts.gte(variab.PL1babc6) & player.PL1bab12.lt(40)) {
        player.PL1bab12 = player.PL1bab12.add(1);
        player.PL1pts = player.PL1pts.sub(variab.PL1babc6);
    }
    else return
}

function getBabCost() {
    variab.PL1babc1 = new Decimal("1e5120").mul(variab.PL1babcsl1.pow(player.PL1bab01.add(player.PL1bab04).add(player.PL1bab07)));
    variab.PL1babc2 = new Decimal(1e160).mul(variab.PL1babcsl2.pow(player.PL1bab02.add(player.PL1bab05).add(player.PL1bab08)));
    variab.PL1babc3 = new Decimal(100000).mul(variab.PL1babcsl3.pow(player.PL1bab03.add(player.PL1bab06).add(player.PL1bab09)));
    variab.PL1babc4 = new Decimal("1e20480").mul(variab.PL1babcsl1.pow(player.PL1bab10));
    variab.PL1babc5 = new Decimal("1e640").mul(variab.PL1babcsl2.pow(player.PL1bab11));
    variab.PL1babc6 = new Decimal(1e20).mul(variab.PL1babcsl3.pow(player.PL1bab12));
}

function resetBab() {
    for (let tier = 1; tier <= 9; tier++) {
        let name = tiername[tier];
        player["PL1bab" + name] = new Decimal(0);
    }
    PL1reset();
}

function ulAnmOrb() {
    if (player.hasunlockedanmorb == false & player.PL1pts.gte(1e60)) player.hasunlockedanmorb = true;
    else return
}

function buyparupg(tier) {
    let name = tiername[tier];
    getParupgCost();
    if (player.anmpar.gte(variab["parupgc" + name])) {
        player["parupg" + name] = player["parupg" + name].add(1);
        player.anmpar = player.anmpar.sub(variab["parupgc" + name]);
        if (tier == 4) {
            player.anmpar = new Decimal(0);
            player.anmorb = player.anmorb.add(1);
            player.anmorbttl = player.anmorbttl.add(1);
        }
    }
    else return
}

function autobuyparupg() {
    getParupgCost();
    if (player.anmpar.gte(variab.parupgc01) & player.PL2upg03.gte(1)) player.parupg01 = player.parupg01.add(1);
    if (player.anmpar.gte(variab.parupgc02) & player.PL2upg03.gte(2)) player.parupg02 = player.parupg02.add(1);
    if (player.anmpar.gte(variab.parupgc03) & player.PL2upg03.gte(3)) player.parupg03 = player.parupg03.add(1);
    if (player.anmpar.gte(variab.parupgc04) & player.PL2upg03.gte(4)) {
        player.parupg04 = player.parupg04.add(1);
        player.anmorb = player.anmorb.add(1);
        player.anmorbttl = player.anmorbttl.add(1);
    }
}

function getParupgCost() {
    variab.parupgc01 = new Decimal(10).mul(new Decimal(10).pow(player.parupg01.add(player.parupg01.sub(50).max(0).pow(2))));
    variab.parupgc02 = new Decimal(100).mul(new Decimal(100).pow(player.parupg02.add(player.parupg02.sub(50).max(0).pow(2))));
    variab.parupgc03 = new Decimal(1000).mul(new Decimal(1000).pow(player.parupg03.add(player.parupg03.sub(50).max(0).pow(2))));
    variab.parupgc04 = new Decimal(80).mul(new Decimal(2.143546925).pow(player.parupg04).mul(new Decimal(1.071773463).pow(player.parupg04.sub(30).max(0).pow(2))));
}

function buyorbupg(tier) {
    var cost = [2, 4, 6, 8];
    if (player.anmorb.gte(cost[tier - 1]) & (player.orbupg[tier - 1] == false)) {
        player.orbupg[tier - 1] = true;
        player.anmorb = player.anmorb.sub(cost[tier - 1]);
    }
    else return
}

function resetOrb() {
    player.orbupg = [false, false, false, false];
    player.anmorb = player.anmorbttl;
    PL1reset();
}

function entNormCha(tier) {
    if (player.innormcha == 0 & player.incha == 0) {
        PL1reset();
        player.innormcha = tier;
    }
    else alert("您已经在一个普通挑战中了");
}

function comNormCha() {
    if (player.innormcha != 0 & player.energy.gte(1.797e308)) {
        player.normchacom[player.innormcha - 1] = true;
        quitNormCha();
    }
}

function entCha(tier) {
    if (player.innormcha != 0 | player.incha != 0) quitCha();
    if (tier <= 4) {
        PL1reset();
        player.enengy = new Decimal(2);
        player.incha = tier;
    }
    else if (tier <= 8) {
        PL2reset();
        PL1reset();
        player.enengy = new Decimal(2);
        player.incha = tier;
    }
    else return
}

function getChaGoal() {
    variab.chagoa01 = new Decimal("1.4154610e9864").mul(variab.chascl01.pow(player.chacom01));
    variab.chagoa02 = new Decimal("2.0035299e19728").mul(variab.chascl02.pow(player.chacom02));
    variab.chagoa03 = new Decimal("4.0141321e39456").mul(variab.chascl03.pow(player.chacom03));
    variab.chagoa04 = new Decimal("1.0443888e1233").mul(variab.chascl04.pow(player.chacom04));
    variab.chagoa05 = new Decimal("1e2000000").mul(variab.chascl05.pow(player.chacom05));
    variab.chagoa06 = new Decimal("1e8000000").mul(variab.chascl06.pow(player.chacom06));
    variab.chagoa07 = new Decimal("1e32000000").mul(variab.chascl07.pow(player.chacom07));
    variab.chagoa08 = new Decimal("1e128000000").mul(variab.chascl08.pow(player.chacom08));

    if (player.tier04.gte(1)) variab.PL1chacap = new Decimal(4).add(player.tier04.min(12));
    variab.PL2chacap = new Decimal(4);
}

function comCha() {
    if (player.incha > 0 & player.incha <= 4) {
        let name = tiername[player.incha];
        if (player.energy.gte(variab["chagoa" + name]) & player["chacom" + name].lt(variab.PL1chacap)) player["chacom" + name] = player["chacom" + name].add(1);
    }
    else if (player.incha > 4 & player.incha <= 8) {
        let name = tiername[player.incha];
        if (player.energy.gte(variab["chagoa" + name]) & player["chacom" + name].lt(variab.PL2chacap)) player["chacom" + name] = player["chacom" + name].add(1);
    }
}

function quitCha() {
    player.innormcha = 0;
    player.incha = 0;
}

function quitNormCha() {
    player.innormcha = 0;
}

const PL2checkbox = document.getElementById("PL2confirm");
PL2checkbox.addEventListener("input", function () {
    if (PL2checkbox.checked) {
        player.PL2conf = true;
    } else {
        player.PL2conf = false;
    }
})

async function PL2reset() {
    if (player.PL1pts.lt(1.797e308)) return;
    var confirmation = true;
    if (player.PL2conf == true) confirmation = confirm("您确定要扪敤吗？这将重置之前的一切进度，但是可以获得扪敤点！第一次扪敤解锁8种新的风灵和其他内容");
    if (confirmation | !player.PL2conf) {
        player.PL2pts = player.PL2pts.add(player.PL1pts.root(1024).floor());
        player.PL2ptsttl = player.PL2ptsttl.add(player.PL1pts.root(1024).floor());
        if (player.std[15] == true) {
            player.PL2tms = player.PL2tms.add(new Decimal(2).pow(player.PL2upg02).mul(player.PL1tms.max(1).log(2)).mul(variab.PL3tef1).max(1));
            player.PL2tmsc = player.PL2tmsc.add(new Decimal(2).pow(player.PL2upg02).mul(player.PL1tms.max(1).log(2)).mul(variab.PL3tef1).max(1));
        }
        else {
            player.PL2tms = player.PL2tms.add(new Decimal(2).pow(player.PL2upg02).mul(variab.PL3tef1).max(1));
            player.PL2tmsc = player.PL2tmsc.add(new Decimal(2).pow(player.PL2upg02).mul(variab.PL3tef1).max(1));
        }
        player.hasUnlockedPL2 = true;

        clearInterval(prod);
        prod = null;

        player.energy = new Decimal(2);
        player.wscb01= new Decimal(0);
        player.wscb02= new Decimal(0);
        player.wscb03= new Decimal(0);
        player.wscb04= new Decimal(0);
        player.wscb05= new Decimal(0);
        player.wscb06= new Decimal(0);
        player.wscb07= new Decimal(0);
        player.wscb08= new Decimal(0);
        player.wscb09= new Decimal(0);
        player.wscb10= new Decimal(0);
        player.wscb11= new Decimal(0);
        player.wscb12= new Decimal(0);
        player.wscb13= new Decimal(0);
        player.wscb14= new Decimal(0);
        player.wscb15= new Decimal(0);
        player.wscb16= new Decimal(0);
        player.wsca01= new Decimal(0);
        player.wsca02= new Decimal(0);
        player.wsca03= new Decimal(0);
        player.wsca04= new Decimal(0);
        player.wsca05= new Decimal(0);
        player.wsca06= new Decimal(0);
        player.wsca07= new Decimal(0);
        player.wsca08= new Decimal(0);
        player.wsca09= new Decimal(0);
        player.wsca10= new Decimal(0);
        player.wsca11= new Decimal(0);
        player.wsca12= new Decimal(0);
        player.wsca13= new Decimal(0);
        player.wsca14= new Decimal(0);
        player.wsca15= new Decimal(0);
        player.wsca16 = new Decimal(0);
        player.tier01= new Decimal(0);
        player.tier02 = new Decimal(0);
        player.tier03 = new Decimal(0);
        player.tier04 = new Decimal(0);
        player.upgd01= new Decimal(0);
        player.upgd02= new Decimal(0);
        player.upgd03= new Decimal(0);
        player.upgd04 = new Decimal(0);
        player.PL1energy= new Decimal(1);
        player.PL1pts= new Decimal(0);
        player.PL1tms= new Decimal(0);
        player.PL1sec= new Decimal(0);
        if (player.PL2tms.eq(1)) player.PL1upg = [true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false,];
        if (player.PL2tms.eq(2)) player.PL1upg = [true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false,];
        if (player.PL2tms.eq(3)) player.PL1upg = [true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false,];
        if (player.PL2tms.gte(4)) player.PL1upg = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,];
        if (player.PL2tms.lte(2)) {
            player.PL1bab01 = new Decimal(0);
            player.PL1bab02 = new Decimal(0);
            player.PL1bab03 = new Decimal(0);
            player.PL1bab04 = new Decimal(0);
            player.PL1bab05 = new Decimal(0);
            player.PL1bab06 = new Decimal(0);
            player.PL1bab07 = new Decimal(0);
            player.PL1bab08 = new Decimal(0);
            player.PL1bab09 = new Decimal(0);
            player.PL1bab10 = new Decimal(0);
            player.PL1bab11 = new Decimal(0);
            player.PL1bab12 = new Decimal(0);
        }
        if (player.PL2tms.lte(5)) {
            player.hasunlockedanmorb = false;
            player.orbupg = [false, false, false, false,];
        }
        player.anmpar= new Decimal(0);
        player.anmorb= new Decimal(0);
        player.anmorbttl= new Decimal(0);
        player.parupg01= new Decimal(0);
        player.parupg02= new Decimal(0);
        player.parupg03= new Decimal(0);
        player.parupg04= new Decimal(0);
        player.innormcha= 0;
        if (player.PL2tms.lte(1)) player.normchacom= [false, false, false, false, false, false, false, false, false, false, false, false,];
        player.incha = 0;
        if (player.PL2tms.lte(7)) {
            player.chacom01 = new Decimal(0);
            player.chacom02 = new Decimal(0);
            player.chacom03 = new Decimal(0);
            player.chacom04 = new Decimal(0);
        }
        player.PL2sec = new Decimal(0);
        player.PL2energy = new Decimal(1);

        await delay(100);
        player.energy = new Decimal(2);
        prod = setInterval(produce, 50);
    }
}

function getPL2engMul() {
    variab.PL2engmul = player.PL2energy.pow(variab.PL2engpow).max(1);
    variab.PL2engmul2 = player.PL2energy.pow(variab.PL2engpow2).max(1);
}

function getPL2engPow() {
    variab.PL2engpow = new Decimal(1);
    if (player.std[3] == true) variab.PL2engpow = variab.PL2engpow.add(1);
    variab.PL2engpow = variab.PL2engpow.add(player.chacom05.mul(0.25));
    if (player.alcu[5] == true) variab.PL2engpow = variab.PL2engpow.add(1);
    variab.PL2engpow2 = variab.PL2engpow.mul(2);
}

function getPL2upgCost() {
    variab.PL2upgc01 = new Decimal(4).add(player.PL2upg01);
    variab.PL2upgc02 = new Decimal(4).mul(new Decimal(2.25).pow(player.PL2upg02));
    variab.PL2upgc03 = new Decimal(4).add(player.PL2upg03.mul(4));
    variab.PL2upgc04 = new Decimal(4).mul(new Decimal(10).pow(player.PL2upg04));
}

function buyPL2upg(tier) {
    let name = tiername[tier];
    let cap = [0, 8, 8, 4, 4];
    if (player.PL2tmsc.gte(variab["PL2upgc" + name]) & player["PL2upg" + name].lt(new Decimal(cap[tier]))) {
        player["PL2upg" + name] = player["PL2upg" + name].add(1);
        player.PL2tmsc = player.PL2tmsc.sub(variab["PL2upgc" + name]);
    }
    else return
}

function getelmtamt() {
    if (player.PL2ptsttl.lte(1.844674407370955e19)) player.elmttl = player.PL2ptsttl.max(1).log(2).floor();
    else player.elmttl = player.PL2ptsttl.max(1).log(2).max(1).log(2).mul(4).add(40).floor();
    player.elmt = player.elmttl.sub(player.elmt01).sub(player.elmt02).sub(player.elmt03).sub(player.elmt04);
}

function distelmt(tier) {
    let name = tiername[tier];
    if (player.elmt.gt(0)) player["elmt" + name] = player["elmt" + name].add(1);
}

function dtmxelmt(tier) {
    let name = tiername[tier];
    if (player.elmt.gt(0)) player["elmt" + name] = player["elmt" + name].add(player.elmt);
}

function dtavelmt() {
    player.elmt01 = player.elmt01.add(player.elmt.div(4).floor());
    player.elmt02 = player.elmt02.add(player.elmt.div(4).floor());
    player.elmt03 = player.elmt03.add(player.elmt.div(4).floor());
    player.elmt04 = player.elmt04.add(player.elmt.div(4).floor());
}

function resetElmt() {
    player.elmt01 = new Decimal(0);
    player.elmt02 = new Decimal(0);
    player.elmt03 = new Decimal(0);
    player.elmt04 = new Decimal(0);
}

function getelmtps() {
    variab.elmmpd = new Decimal(4).mul(new Decimal(4).pow(player.chacom07.div(4)));
    variab.elmtps01 = new Decimal(0.25).mul(variab.elmmpd.pow(player.elmt01)).mul(player.elmt01);
    variab.elmtps02 = new Decimal(0.25).mul(variab.elmmpd.pow(player.elmt02)).mul(player.elmt02);
    variab.elmtps03 = new Decimal(0.25).mul(variab.elmmpd.pow(player.elmt03)).mul(player.elmt03);
    variab.elmtps04 = new Decimal(0.25).mul(variab.elmmpd.pow(player.elmt04)).mul(player.elmt04);
    if (player.alcu[2] == true) {
        variab.elmtps01 = new Decimal(0.25).mul(variab.elmmpd.pow(player.elmttl)).mul(player.elmt01).mul(player.elmttl);
        variab.elmtps02 = new Decimal(0.25).mul(variab.elmmpd.pow(player.elmttl)).mul(player.elmt02).mul(player.elmttl);
        variab.elmtps03 = new Decimal(0.25).mul(variab.elmmpd.pow(player.elmttl)).mul(player.elmt03).mul(player.elmttl);
        variab.elmtps04 = new Decimal(0.25).mul(variab.elmmpd.pow(player.elmttl)).mul(player.elmt04).mul(player.elmttl);
    }
    if (player.tier03.gte(20)) {
        variab.elmtps01 = variab.elmtps01.mul(player.energy.max(2).log(2));
        variab.elmtps02 = variab.elmtps02.mul(player.energy.max(2).log(2));
        variab.elmtps03 = variab.elmtps03.mul(player.energy.max(2).log(2));
        variab.elmtps04 = variab.elmtps04.mul(player.energy.max(2).log(2));
    }
}

function getfreeupg() {
    variab.upgf01 = player.elmten01.add(1).log(2).floor();
    variab.upgf02 = player.elmten02.add(1).log(4).floor();
    variab.upgf03 = player.elmten03.add(1).log(16).floor();
    variab.upgf04 = player.elmten04.add(1).log(256).floor();
    if (player.resa02.gte(1)) {
        variab.upgf01 = variab.upgf01.add(player.resa02.mul(16));
        variab.upgf02 = variab.upgf02.add(player.resa02.mul(8));
        variab.upgf03 = variab.upgf03.add(player.resa02.mul(4));
        variab.upgf04 = variab.upgf04.add(player.resa02.mul(2));
    }
    if (player.resa04.gte(1)) {
        variab.upgf01 = variab.upgf01.mul(player.resa04.mul(0.05).add(1)).floor();
        variab.upgf02 = variab.upgf02.mul(player.resa04.mul(0.05).add(1)).floor();
        variab.upgf03 = variab.upgf03.mul(player.resa04.mul(0.05).add(1)).floor();
        variab.upgf04 = variab.upgf04.mul(player.resa04.mul(0.05).add(1)).floor();
    }
    if (player.incha == 7) {
        variab.upgf01 = player.elmten01.add(1).log(2).pow(0.5).floor();
        variab.upgf02 = player.elmten02.add(1).log(4).pow(0.5).floor();
        variab.upgf03 = player.elmten03.add(1).log(16).pow(0.5).floor();
        variab.upgf04 = player.elmten04.add(1).log(256).pow(0.5).floor();
    }
}

function buythr01() {
    getthrcost();
    if (player.energy.gte(variab.thrmc01)) {
        player.thrm = player.thrm.add(1);
        player.thrmttl = player.thrmttl.add(1);
        player.thrmb01 = player.thrmb01.add(1);
        player.energy = player.energy.sub(variab.thrmc01);
    }
    else return
}

function buythr02() {
    getthrcost();
    if (player.PL1pts.gte(variab.thrmc02)) {
        player.thrm = player.thrm.add(1);
        player.thrmttl = player.thrmttl.add(1);
        player.thrmb02 = player.thrmb02.add(1);
        player.PL1pts = player.PL1pts.sub(variab.thrmc02);
    }
    else return
}

function buythr03() {
    getthrcost();
    if (player.PL2pts.gte(variab.thrmc03)) {
        player.thrm = player.thrm.add(1);
        player.thrmttl = player.thrmttl.add(1);
        player.thrmb03 = player.thrmb03.add(1);
        player.PL2pts = player.PL2pts.sub(variab.thrmc03);
    }
    else return
}

function getthrcost() {
    variab.thrmc01 = new Decimal(2).pow(new Decimal(1048576).mul(player.thrmb01.add(1)));
    variab.thrmc02 = new Decimal(2).pow(new Decimal(1024).mul(player.thrmb02.add(1)));
    variab.thrmc03 = new Decimal(2).pow(new Decimal(1).mul(player.thrmb03.add(1)));
}

function buystd(tier) {
    if (tier == 0 & player.thrm.gte(4)) { player.std[0] = true; player.thrm = player.thrm.sub(4)}
    if (tier == 1 & player.thrm.gte(4) & player.std[0] == true) { player.std[1] = true; player.thrm = player.thrm.sub(4) }
    if (tier == 2 & player.thrm.gte(4) & player.std[1] == true) { player.std[2] = true; player.thrm = player.thrm.sub(4) }
    if (tier == 3 & player.thrm.gte(6) & player.std[1] == true) { player.std[3] = true; player.thrm = player.thrm.sub(6) }
    if (tier == 4 & player.thrm.gte(6) & player.std[2] == true) { player.std[4] = true; player.thrm = player.thrm.sub(6) }
    if (tier == 5 & player.thrm.gte(9) & player.std[3] == true) { player.std[5] = true; player.thrm = player.thrm.sub(9) }
    if (tier == 6 & player.thrm.gte(12) & (player.std[4] == true | player.std[5] == true)) { player.std[6] = true; player.thrm = player.thrm.sub(12) }
    if (tier == 7 & player.thrm.gte(12) & player.std[6] == true) { player.std[7] = true; player.thrm = player.thrm.sub(12) }
    if (tier == 8 & player.thrm.gte(16) & player.std[7] == true) { player.std[8] = true; player.thrm = player.thrm.sub(16) }
    if (tier == 9 & player.thrm.gte(20) & player.std[7] == true) { player.std[9] = true; player.thrm = player.thrm.sub(20) }
    if (tier == 10 & player.thrm.gte(24) & player.std[7] == true) { player.std[10] = true; player.thrm = player.thrm.sub(24) }
    if (tier == 11 & player.thrm.gte(20) & player.std[8] == true) { player.std[11] = true; player.thrm = player.thrm.sub(20) }
    if (tier == 12 & player.thrm.gte(25) & player.std[9] == true) { player.std[12] = true; player.thrm = player.thrm.sub(25) }
    if (tier == 13 & player.thrm.gte(30) & player.std[10] == true) { player.std[13] = true; player.thrm = player.thrm.sub(30) }
    if (tier == 14 & player.thrm.gte(24) & (player.std[11] == true | player.std[12] == true | player.std[13] == true)) { player.std[14] = true; player.thrm = player.thrm.sub(24) }
    if (tier == 15 & player.thrm.gte(30) & (player.std[11] == true | player.std[12] == true | player.std[13] == true)) { player.std[15] = true; player.thrm = player.thrm.sub(30) }
    if (tier == 16 & player.thrm.gte(36) & (player.std[11] == true | player.std[12] == true | player.std[13] == true)) { player.std[16] = true; player.thrm = player.thrm.sub(36) }
    if (tier == 17 & player.thrm.gte(35) & (player.std[14] == true | player.std[15] == true | player.std[16] == true)) { player.std[17] = true; player.thrm = player.thrm.sub(35) }
    if (tier == 18 & player.thrm.gte(42) & player.std[17] == true) { player.std[18] = true; player.thrm = player.thrm.sub(42) }
    if (tier == 19 & player.thrm.gte(48) & player.std[18] == true) { player.std[19] = true; player.thrm = player.thrm.sub(48) }

}

function rstd() {
    for (let i = 0; i < 40; i++) {
        player.std[i] = false;
    }
    player.thrm = player.thrmttl;
    PL2reset();
}

function getalc() {
    variab.alcost = new Decimal("1e2500").pow(player.alcspd.add(1));
    variab.alcuc01 = new Decimal(2).pow(player.alcu01).mul(1);
    variab.alcuc02 = new Decimal(2).pow(player.alcu02).mul(1.25);
    variab.alcuc03 = new Decimal(2).pow(player.alcu03).mul(1.5);
    variab.alcuc04 = new Decimal(2).pow(player.alcu04).mul(2);
    variab.alcuc05 = new Decimal(2).pow(player.alcu05).mul(2.5);
    variab.alcuc06 = new Decimal(2).pow(player.alcu06).mul(3)
}

function buyalc() {
    if (player.PL2energy.gte(variab.alcost)) {
        player.alcspd = player.alcspd.add(1);
        player.PL2energy = player.PL2energy.sub(variab.alcost);
    }
    else return;
}

function alchsw(tier) {
    if (player.alca[tier - 1] == true) player.alca[tier - 1] = false;
    else player.alca[tier - 1] = true;
}

function buyalcu(tier) {
    let name = tiername[tier];
    let name2 = tiername[(tier-1) % 4 + 1];
    if (tier <= 6) {
        if (player["alcu" + name].lt(10) & variab["alcuc" + name].lte(player["alch" + name2])) {
            player["alcu" + name] = player["alcu" + name].add(1);
            player["alch" + name2] = player["alch" + name2].sub(variab["alcuc" + name]);
        }
    }
    if (tier > 6 & tier <= 12) {
        if (player.alcu[tier - 7] == false & variab["alcuc" + name].lte(player["alch" + name2])) {
            player.alcu[tier - 7] = true;
            player["alch" + name2] = player["alch" + name2].sub(variab["alcuc" + name]);
        }
    }
}

function alchac() {
    if (player.alca[0] == true) {
        player.alch01 = player.alch01.add(player.alcspd.mul(player.alcu01.mul(0.1).add(1)).mul(new Decimal(1.2).pow(player.alcu02)));
    }
    if (player.alca[1] == true) {
        if (player.alch01.gte(player.alcspd.mul(4))) {
            player.alch02 = player.alch02.add(player.alcspd.mul(player.alcu01.mul(0.1).add(1)));
            player.alch01 = player.alch01.sub(player.alcspd.mul(4));
        }
    }
    if (player.alca[2] == true) {
        if (player.alch02.gte(player.alcspd.mul(4))) {
            player.alch03 = player.alch03.add(player.alcspd.mul(player.alcu01.mul(0.1).add(1)));
            player.alch02 = player.alch02.sub(player.alcspd.mul(4));
        }
    }
    if (player.alca[3] == true) {
        if (player.alch03.gte(player.alcspd.mul(4))) {
            player.alch04 = player.alch04.add(player.alcspd.mul(player.alcu01.mul(0.1).add(1)));
            player.alch03 = player.alch03.sub(player.alcspd.mul(4));
        }
    }
}
setInterval(alchac , 1000);

function ulAnm2() {
    if (player.PL2pts.gte("1e5000") & player.hasunlockedanm2 == false) player.hasunlockedanm2 = true;
}

function entzyts() {
    if (player.inzyts == true) player.inzyts = false;
    else player.inzyts = true;
    PL2reset();
    player.enengy = new Decimal(2);
}

function getanm2() {
    let score = player.energy.max(1).log(2);
    if (player.inzyts == true & score.gte(player.anm2sc)) player.anm2sc = player.energy.max(1).log(2);
    variab.anm2c01 = new Decimal(10).pow(player.anm2u01.add(1).add(player.anm2u01.sub(40).max(0).pow(2)));
    variab.anm2c02 = new Decimal(100).pow(player.anm2u02.add(1).add(player.anm2u02.sub(20).max(0).pow(2)));
    variab.anm2c03 = new Decimal(1000).pow(player.anm2u03.add(1).add(player.anm2u03.sub(14).max(0).pow(2)));
    variab.anm2c04 = new Decimal(10000).pow(player.anm2u04.add(1).add(player.anm2u04.sub(10).max(0).pow(2)));
}

function buyanm2u(tier) {
    let name = tiername[tier];
    if (player.anm2.gte(variab["anm2c" + name])) {
        player["anm2u" + name] = player["anm2u" + name].add(1);
        player.anm2 = player.anm2.sub(variab["anm2c" + name]);
    }
}

const PL3checkbox = document.getElementById("PL3confirm");
PL3checkbox.addEventListener("input", function () {
    if (PL3checkbox.checked) {
        player.PL3conf = true;
    } else {
        player.PL3conf = false;
    }
})

async function PL3reset() {
    if (player.PL2pts.lt("6.741e315652")) return;
    var confirmation = true;
    if (player.PL3conf == true) confirmation = confirm("您确定要扫敥吗？这将重置之前的一切进度，但是可以获得扫敥点！第一次扫敥解锁25~32式风灵和其他内容");
    if (confirmation | !player.PL3conf) {
        player.PL3pts = player.PL3pts.add(player.PL2pts.root(1048576).floor());
        player.PL3ptsttl = player.PL3ptsttl.add(player.PL2pts.root(1048576).floor());
        player.PL3tms = player.PL3tms.add(1);

        hasUnlockedPL3 = true;

        clearInterval(prod);
        prod = null;

        player.energy = new Decimal(2);
        player.wscb01 = new Decimal(0);
        player.wscb02 = new Decimal(0);
        player.wscb03 = new Decimal(0);
        player.wscb04 = new Decimal(0);
player.        wscb05= new Decimal(0);
player.        wscb06= new Decimal(0);
player.        wscb07= new Decimal(0);
player.        wscb08= new Decimal(0);
player.        wscb09= new Decimal(0);
player.        wscb10= new Decimal(0);
player.        wscb11= new Decimal(0);
player.        wscb12= new Decimal(0);
player.        wscb13= new Decimal(0);
player.        wscb14= new Decimal(0);
player.        wscb15= new Decimal(0);
player.        wscb16= new Decimal(0);
player.        wscb17= new Decimal(0);
player.        wscb18= new Decimal(0);
player.        wscb19= new Decimal(0);
player.        wscb20= new Decimal(0);
player.        wscb21= new Decimal(0);
player.        wscb22= new Decimal(0);
player.        wscb23= new Decimal(0);
player.        wscb24= new Decimal(0);
player.        wscb25= new Decimal(0);
player.        wscb26= new Decimal(0);
player.        wscb27= new Decimal(0);
player.        wscb28= new Decimal(0);
player.        wscb29= new Decimal(0);
player.        wscb30= new Decimal(0);
player.        wscb31= new Decimal(0);
player.        wscb32= new Decimal(0);
player.        wsca01= new Decimal(0);
player.        wsca02= new Decimal(0);
player.        wsca03= new Decimal(0);
player.        wsca04= new Decimal(0);
player.        wsca05= new Decimal(0);
player.        wsca06= new Decimal(0);
player.        wsca07= new Decimal(0);
player.        wsca08= new Decimal(0);
player.        wsca09= new Decimal(0);
player.        wsca10= new Decimal(0);
player.        wsca11= new Decimal(0);
player.        wsca12= new Decimal(0);
player.        wsca13= new Decimal(0);
player.        wsca14= new Decimal(0);
player.        wsca15= new Decimal(0);
player.        wsca16= new Decimal(0);
player.        wsca17= new Decimal(0);
player.        wsca18= new Decimal(0);
player.        wsca19= new Decimal(0);
player.        wsca20= new Decimal(0);
player.        wsca21= new Decimal(0);
player.        wsca22= new Decimal(0);
player.        wsca23= new Decimal(0);
player.        wsca24= new Decimal(0);
player.        wsca25= new Decimal(0);
player.        wsca26= new Decimal(0);
player.        wsca27= new Decimal(0);
player.        wsca28= new Decimal(0);
player.        wsca29= new Decimal(0);
player.        wsca30= new Decimal(0);
player.        wsca31= new Decimal(0);
player.        wsca32 = new Decimal(0);
player.        tier01 = new Decimal(0);
player.        tier02= new Decimal(0);
player.        tier03= new Decimal(0);
player.        tier04= new Decimal(0);
player.        upgd01= new Decimal(0);
player.        upgd02= new Decimal(0);
player.        upgd03= new Decimal(0);
        player.upgd04 = new Decimal(0);

player.        PL1energy= new Decimal(1);
player.        PL1pts= new Decimal(0);
player.        PL1tms= new Decimal(0);
player.        PL1sec= new Decimal(0);
player.        PL1upg= [false, false, false, false,
                 false, false, false, false,
                 false, false, false, false,
                false, false, false, false,];
player.        PL1bab01= new Decimal(0);
player.        PL1bab02= new Decimal(0);
player.        PL1bab03= new Decimal(0);
player.        PL1bab04= new Decimal(0);
player.        PL1bab05= new Decimal(0);
player.        PL1bab06= new Decimal(0);
player.        PL1bab07= new Decimal(0);
player.        PL1bab08= new Decimal(0);
player.        PL1bab09= new Decimal(0);
player.        PL1bab10= new Decimal(0);
player.        PL1bab11= new Decimal(0);
player.        PL1bab12= new Decimal(0);
player.        hasunlockedanmorb = false;
player.        anmpar= new Decimal(0);
player.        anmorb= new Decimal(0);
player.        anmorbttl= new Decimal(0);
player.        parupg01= new Decimal(0);
player.        parupg02= new Decimal(0);
player.        parupg03= new Decimal(0);
player.        parupg04= new Decimal(0);
player.        orbupg= [false, false, false, false,];
player.        innormcha= 0;
player.        normchamul= new Decimal(0);
player.        normchapow= new Decimal(1);
player.        normchacom= [false, false, false, false, false, false, false, false, false, false, false, false,];
player.        incha= 0;
player.        chacom01= new Decimal(0);
player.        chacom02= new Decimal(0);
player.        chacom03= new Decimal(0);
player.        chacom04= new Decimal(0);
player.        chacom05= new Decimal(0);
player.        chacom06= new Decimal(0);
player.        chacom07= new Decimal(0);
player.        chacom08= new Decimal(0);

player.        PL2energy= new Decimal(1);
player.        PL2pts= new Decimal(0);
player.        PL2ptsttl= new Decimal(0);
player.        PL2tms= new Decimal(0);
player.        PL2sec= new Decimal(0);
        player.PL2tmsc = new Decimal(0);
        if (player.resa06.eq(0)) {
            player.PL2upg01 = new Decimal(0);
            player.PL2upg02 = new Decimal(0);
            player.PL2upg03 = new Decimal(0);
            player.PL2upg04 = new Decimal(0);
        }
player.        elmt= new Decimal(0);
player.        elmttl= new Decimal(0);
player.        elmt01= new Decimal(0);
player.        elmt02= new Decimal(0);
player.        elmt03= new Decimal(0);
player.        elmt04= new Decimal(0);
player.        elmten01= new Decimal(0);
player.        elmten02= new Decimal(0);
player.        elmten03= new Decimal(0);
        player.elmten04 = new Decimal(0);
        if (player.resa07.eq(0)) {
            player.thrm = new Decimal(0);
            player.thrmttl = new Decimal(0);
            player.thrmb01 = new Decimal(0);
            player.thrmb02 = new Decimal(0);
            player.thrmb03 = new Decimal(0);
            player.thrmb04 = new Decimal(0);
            player.std = [false,
                false,
                false, false,
                false, false,
                false,
                false,
                false, false, false,
                false, false, false,
                false, false, false,
                false,
                false,
                false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false,
                false,
                false,
                false,
            ];
        }
        if (player.resa08.eq(0)) player.alcspd = new Decimal(0);
player.        alch01= new Decimal(0);
player.        alch02= new Decimal(0);
player.        alch03= new Decimal(0);
player.        alch04= new Decimal(0);
player.        alca= [false, false, false, false, false, false, false, false];
player.        alcu01= new Decimal(0);
player.        alcu02= new Decimal(0);
player.        alcu03= new Decimal(0);
player.        alcu04= new Decimal(0);
player.        alcu05= new Decimal(0);
player.        alcu06= new Decimal(0);
player.        alcu= [false, false, false, false, false, false, false, false];
player.        hasunlockedanm2 = false;
player.        inzyts = false;
player.        anm2sc= new Decimal(0);
player.        anm2= new Decimal(0);
player.        anm2u01= new Decimal(0);
player.        anm2u02= new Decimal(0);
player.        anm2u03= new Decimal(0);
        player.anm2u04 = new Decimal(0);

        await delay(100);
        player.energy = new Decimal(2);
        prod = setInterval(produce, 50);
        }
}

function getPL3engMul() {
    variab.PL3engmul = player.PL3energy.pow(variab.PL3engpow).max(1);
    variab.PL3engmul2 = player.PL3energy.pow(variab.PL3engpow2).max(1);
    variab.PL3engmul3 = player.PL3energy.pow(variab.PL3engpow3).max(1);
}

function getPL3engPow() {
    variab.PL3engpow = new Decimal(1);
    variab.PL3engpow2 = variab.PL3engpow.mul(2);
    variab.PL3engpow3 = variab.PL3engpow.mul(4);
}

function research(tier) {
    let name = tiername[tier];
    if (player.inres == tier) player.inres = 0;
    else {
        player.inres = 0;
        player.inres = tier;
    }
    if (player.inres >= 5 & player["resa" + name].gte(1)) player.inres = 0;
}

function getres() {
    let name = tiername[player.inres];
    variab.PL3tef1 = new Decimal(2).pow(player.PL3tms).min(player.PL3tms.mul(4));
    variab.PL3tef2 = player.PL3tms.mul(new Decimal(1.333333333333333).pow(player.PL3tms.sub(2).max(0))).min(player.PL3tms.mul(625));
    variab.resped = variab.PL3tef2;
    variab.resr01 = new Decimal(4).pow(player.resa01).mul(32);
    variab.resr02 = new Decimal(4).pow(player.resa02).mul(64);
    variab.resr03 = new Decimal(4).pow(player.resa03).mul(128);
    variab.resr04 = new Decimal(4).pow(player.resa04).mul(256);
    variab.rese01 = hyp(player.energy.max(4), new Decimal(0.25)).pow(player.resa01);
    variab.rese02 = new Decimal(2).pow(player.resa02).mul(16);
    variab.rese03 = new Decimal(1.010889287).pow(player.resa03);
    variab.rese04 = player.resa03.mul(5);
    if (player.inres != 0) {
        player["resp" + name] = player["resp" + name].add(variab.resped.div(20));
        if (player["resp" + name].gte(variab["resr" + name])) {
            player["resa" + name] = player["resa" + name].add(1);
            player.inres = 0;
            player["resp" + name] = new Decimal(0);
        }
        document.getElementById("probar").style.width = notation(player["resp" + name].div(variab["resr" + name]).min(1).max(0).mul(100)) + "%";
        document.getElementById("respro").innerHTML = notation(player["resp" + name].div(variab["resr" + name]).min(1).max(0).mul(100)) + "%";
    }
    else {
        document.getElementById("probar").style.width = "0%";
        document.getElementById("respro").innerHTML = "0%";
    }
}

function produce() {
    player.energy = player.energy.add(player.wsca01.mul(variab.wscm01).pow(variab.wscp01).mul(new Decimal(0.0125)));
    player.energyttl = player.energyttl.add(player.wsca01.mul(variab.wscm01).pow(variab.wscp01).mul(new Decimal(0.0125)));
    if (player.energy.gte("e3.485689212103262e76")) {
        player.energy = new Decimal("e3.485689212103262e76");
        player.energyttl = new Decimal("e3.485689212103262e76");
    }
    for (let tier = 2; tier <= 8; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(variab["wscm" + name]).pow(variab["wscp" + name]).mul(new Decimal(0.0125)));
    }
    player.PL1energy = player.PL1energy.add(player.wsca09.mul(variab.wscm09).pow(variab.wscp09).mul(new Decimal(0.0125)));
    if (player.PL1upg[12] == true) player.wsca08 = player.wsca08.add(player.wsca09.mul(variab.wscm09).pow(variab.wscp09).mul(new Decimal(0.0125)));
    if (player.std[18] == true & player.incha != 8 & player.PL1pts.lte(player.energy.root(1024).floor())) player.PL1pts = player.PL1pts.add(player.energy.root(1024).floor().mul(0.0125));
    if (player.alcu[1] == true) player.PL1tms = player.PL1tms.add(new Decimal(2).pow(player.PL1bab11).mul(variab.wscBaseValue.max(1).log(2)).div(20));
    for (let tier = 10; tier <= 16; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(variab["wscm" + name]).pow(variab["wscp" + name]).mul(new Decimal(0.0125)));
    }
    player.PL2energy = player.PL2energy.add(player.wsca17.mul(variab.wscm17).pow(variab.wscp17).mul(new Decimal(0.0125)));
    if (player.std[7] == true & player.incha != 8) player.wsca16 = player.wsca16.add(player.wsca17.mul(variab.wscm17).pow(variab.wscp17).mul(new Decimal(0.0125)));
    for (let tier = 18; tier <= 24; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(variab["wscm" + name]).pow(variab["wscp" + name]).mul(new Decimal(0.0125)));
    }
    player.PL3energy = player.PL3energy.add(player.wsca25.mul(variab.wscm25).pow(variab.wscp25).mul(new Decimal(0.0125)));
    for (let tier = 26; tier <= 32; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(variab["wscm" + name]).pow(variab["wscp" + name]).mul(new Decimal(0.0125)));
    }

    if (player.hasunlockedanmorb == true) {
        variab.anmparsc = new Decimal(2).pow(player.anmorbttl).mul(80).max(80);
        variab.anmparps = new Decimal(0.01).mul(new Decimal(1.2).pow(player.wscb08.sub(50)).max(1)).mul(new Decimal(2).pow(player.parupg01).mul(new Decimal(2).pow(player.chacom04)))
        if (player.tier01.gte(200)) variab.anmparps = variab.anmparps.mul(player.tier01.max(200));
        if (player.tier01.gte(630)) variab.anmparps = variab.anmparps.mul(new Decimal(2).pow(player.wscb16).max(1));
        variab.anmparps = variab.anmparps.pow(player.anm2.add(1).log(2).pow(player.anm2u03.min(player.anm2u03.mul(4).pow(0.25).mul(16)).div(256).add(0.015625)).max(1));
        if (player.anmpar.gte(variab.anmparsc)) {
            if (player.tier03.gte(8)) variab.anmparps = variab.anmparps.div(player.anmpar.div(variab.anmparsc).pow(0.75));
            else variab.anmparps = variab.anmparps.div(player.anmpar.div(variab.anmparsc));
        }
        player.anmpar = player.anmpar.add(variab.anmparps.div(20));
    }
    if (player.hasunlockedanm2 == true & player.inzyts == false) {
        variab.anm2ps = player.anm2sc.div(1e8).pow(4).mul(new Decimal(4).pow(player.chacom08)).mul(new Decimal(2).pow(player.anm2u01));
        player.anm2 = player.anm2.add(variab.anm2ps.div(20));
    }
    player.elmten01 = player.elmten01.add(variab.elmtps01.div(20));
    player.elmten02 = player.elmten02.add(variab.elmtps02.div(20));
    player.elmten03 = player.elmten03.add(variab.elmtps03.div(20));
    player.elmten04 = player.elmten04.add(variab.elmtps04.div(20));
    if (player.incha == 5) {
        player.PL1energy = new Decimal(1);
        player.PL2energy = new Decimal(1);
    }
}

function fixInfinity() {
    if (player.energy.gte(1.797693134862315e308)) {
        document.getElementById("fixinf").style.display = 'block';
    }
    else document.getElementById("fixinf").style.display = 'none';
}

function fszqw() {
    alert("资源不足，无法升级！");
}

/*数值计算*/
function scale(x) {
    return x.max(x.pow(2).div(variab.scal01)).max(x.pow(4).div(variab.scal02)).max(x.pow(8).div(variab.scal03)).max(x.pow(16).div(variab.scal04));
}

function invscale(x) {
    return x.min(x.mul(variab.scal01).root(2)).min(x.mul(variab.scal02).root(4)).min(x.mul(variab.scal03).root(8)).min(x.mul(variab.scal04).root(16));
}

function scaleTier(x) {
    return x.max(x.pow(2).div(variab.scaltier01)).max(x.pow(4).div(variab.scaltier02)).max(x.pow(8).div(variab.scaltier03)).max(x.pow(16).div(variab.scaltier04));
}

function invscaleTier(x) {
    return x.min(x.mul(variab.scaltier01).root(2)).min(x.mul(variab.scaltier02).root(4)).min(x.mul(variab.scaltier03).root(8)).min(x.mul(variab.scaltier04).root(16));
}

function softcap(x) {
    return x.min(x.mul(256).root(2)).min(x.mul(1.099511628e12).root(4)).min(x.mul(8.711228593e40).root(8)).min(x.mul(1e118).root(16)).min(x.mul("1e310").root(32)).min(x.mul("1e773").root(64)).min(x.mul("1e1851").root(128)).min(x.mul("1e4317").root(256));
}

function hyp(a, b) {
    return new Decimal(2).pow(new Decimal(2).pow(a.max(1).log(2).max(1).log(2).mul(b)))
}

/*游戏机制之外……*/
function transformToDecimal(object) {
    for (i in object) {
        if (typeof (object[i]) == "string" && !isNaN(new Decimal(object[i]).mag)) object[i] = new Decimal(object[i]);
        if (typeof (object[i]) == "object" && !isNaN(new Decimal(object[i]).mag)) transformToDecimal(object[i]);
        if (new Decimal(object[i]).gte("F1e308")) object[i] = new Decimal(1);
    }
}

function time(diff) {
    let diff2 = new Decimal(diff);
    player.milliseconds = player.milliseconds.plus(diff2.times(1000));
    player.PL1sec = player.PL1sec.plus(diff2);
    player.PL2sec = player.PL2sec.plus(diff2);
    player.PL3sec = player.PL3sec.plus(diff2);
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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function notation(amount) {
    var string = "";
    if (amount.sign == -1) {
        string = string + "-";
        amount.sign = 1;
    }
    let power = Decimal.floor(Decimal.log10(amount));
    let mantissa = amount.div(Decimal.pow(10, power));
    let power2 = Decimal.floor(Decimal.log10(power));
    let mantissa2 = power.div(Decimal.pow(10, power2));
    let power3 = Decimal.floor(Decimal.log10(power2));
    let mantissa3 = power2.div(Decimal.pow(10, power3));
    if (amount == 0) return "0";
    if (power < -3) return mantissa.mul(10).toFixed(3) + "e" + power;
    if (power < -2) return amount.toFixed(6);
    if (power < -1) return amount.toFixed(5);
    if (power < 0) return amount.toFixed(4);
    if (power < 1) return amount.toFixed(3);
    if (power < 2) return amount.toFixed(2);
    if (power < 3) return amount.toFixed(1);
    if (power < 6) return amount.toFixed(0);
    if (power < 1000000) return mantissa.toFixed(3) + "e" + power;
    if (power2 < 1000000) return "e" + mantissa2.toFixed(3) + "e" + power2;
    if (power3 < 1000000) return "ee" + mantissa3.toFixed(3) + "e" + power3;
    return "END";
}

function notatint(amount) {
    var string = "";
    if (amount.sign == -1) {
        string = string + "-";
        amount.sign = 1;
    }
    let power = Decimal.floor(Decimal.log10(amount));
    let mantissa = amount.div(Decimal.pow(10, power));
    let power2 = Decimal.floor(Decimal.log10(power));
    let mantissa2 = power.div(Decimal.pow(10, power2));
    let power3 = Decimal.floor(Decimal.log10(power2));
    let mantissa3 = power2.div(Decimal.pow(10, power3));
    if (amount == 0) return "0";
    if (power < 6) return amount.toFixed(0);
    if (power < 1000000) return mantissa.toFixed(3) + "e" + power;
    if (power2 < 1000000) return "e" + mantissa2.toFixed(3) + "e" + power2;
    if (power3 < 1000000) return "ee" + mantissa3.toFixed(3) + "e" + power3;
    return "END";
}

function updateGUI() {
    document.getElementById("energy").innerHTML = notation(player.energy);
    document.getElementById("energyPs").innerHTML = notation(player.wsca01.mul(variab.wscm01).pow(variab.wscp01).mul(0.25));
    document.getElementById("wscinfo").innerHTML = "基础风灵产量：0.25/s  每次作成乘数：" + notation(variab.wscmpb);
    for (let tier = 1; tier <= 32; tier++) { 
        var name = tiername[tier];
        document.getElementById("wscb" + name).innerHTML = notatint(player["wscb" + name]);
        document.getElementById("wscc" + name).innerHTML = notation(variab["wscc" + name]);
        document.getElementById("wscd" + name).innerHTML = "+" + notation(player["wsca" + name]).padEnd(15, '_') + "×" + notation(variab["wscm" + name]).padEnd(15, '_') + "^" + notation(variab["wscp" + name]).padEnd(15, '_') + "¶1.000__________";
        if (player["wscb" + name].gte(new Decimal(33554432).div(variab["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "四阶折算|";
        else if (player["wscb" + name].gte(new Decimal(1048576).div(variab["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "三阶折算|";
        else if (player["wscb" + name].gte(new Decimal(32768).div(variab["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "二阶折算|";
        else if (player["wscb" + name].gte(new Decimal(1024).div(variab["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "一阶折算|";
        else document.getElementById("wscs" + name).innerHTML = "";
        if (player.autobuywsc[tier] == true) document.getElementById("byat" + name).innerHTML = "自动：开";
        else document.getElementById("byat" + name).innerHTML = "自动：关";
    }
    document.getElementById("wscbv").innerHTML = "你的风灵基础值为(" + notation(variab.wscBaseValue1) + "+" + notatint(variab.wscBaseValue2) + "×4" + "+" + notatint(variab.wscBaseValue3) + "×16" + "+" + notatint(variab.wscBaseValue4) + "×64)^" + notation(variab.wscBaseValueExp) + "=" + notation(variab.wscBaseValue) + "（基于你作成的风灵总数而定）";
    document.getElementById("tier01").innerHTML = notatint(player.tier01) + "式风单元";
    document.getElementById("tier01rewa01").innerHTML = "1式风单元：基于风单元式数提升1~8式风灵乘数(1+n)²。当前：×" + notation(player.tier01.add(1).pow(2));
    document.getElementById("tier01rewa02").innerHTML = "2式风单元：基于风灵基础值提升1~8式风灵乘数max(1,n/64)。当前：×" + notation(variab.wscBaseValue.div(64).max(1));
    document.getElementById("tier01rewa03").innerHTML = "5式风单元：基于风模块式数提升1~8式风灵乘数(1+n)³。当前：×" + notation(player.tier02.add(1).pow(3));
    document.getElementById("tier01rewa04").innerHTML = "10式风单元：基于能量提升1~8式风灵乘数max(1,log2(n+1)^0.2)。当前：×" + notation(player.energy.add(1).log(2).pow(0.2).max(1));
    document.getElementById("tier01rewa05").innerHTML = "25式风单元：每个风单元使1~8式风灵乘数×2。当前：×" + notation(new Decimal(2).mul(new Decimal(2).pow(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03))).pow(player.tier01));
    document.getElementById("tier01rewa06").innerHTML = "63式风单元：使1和5式风单元奖励也对9~16式风灵生效。";
    document.getElementById("tier01rewa07").innerHTML = "200式风单元：基于风单元式数提升风之微粒获取。当前：×" + notation(player.tier01);
    document.getElementById("tier01rewa08").innerHTML = "630式风单元：每作成一次16式风灵使风之微粒产量×2。当前：×" + notation(new Decimal(2).pow(player.wscb16));

    document.getElementById("tier02").innerHTML = notatint(player.tier02) + "式风模块";
    document.getElementById("tier02rewa01").innerHTML = "1式风模块：基于风模块式数提升风灵每次作成乘数(+0.05×n^0.25)，并解锁第一个升级。当前：+" + notation(player.tier02.pow(0.25).mul(0.05));
    document.getElementById("tier02rewa02").innerHTML = "2式风模块：解锁第二个升级。";
    document.getElementById("tier02rewa03").innerHTML = "5式风模块：基于风单元式数提升风灵每次作成乘数(+0.05×n^0.25)。当前：+" + notation(player.tier01.pow(0.25).mul(0.05));
    document.getElementById("tier02rewa04").innerHTML = "12式风模块：每个风模块将风灵每次作成乘数×1.011，并解锁第三个升级。当前：×" + notation(new Decimal(1.010889286051700).pow(player.PL1bab04.add(player.PL1bab05).add(player.PL1bab06).mul(0.2).add(1)).pow(player.tier02));
    document.getElementById("tier02rewa05").innerHTML = "30式风模块：解锁第四个升级。"
    document.getElementById("tier02rewa06").innerHTML = "75式风模块：使所有类型的能量增加与它相关的风灵的指数^1+log2(log2(x+1)+1)/4096"

    document.getElementById("tier03").innerHTML = notatint(player.tier03) + "式风系统";
    document.getElementById("tier03rewa01").innerHTML = "1式风系统：基于升级总和提升17~24式风灵乘数。当前：×" + notation(new Decimal(1.189207115002721).pow(player.upgd01.add(player.upgd02).add(player.upgd03).add(player.upgd04)));
    document.getElementById("tier03rewa02").innerHTML = "3式风系统：基于风系统提升1~16式风灵的指数。当前：+" + notation(player.tier03.min(player.tier03.pow(0.5).mul(8)).mul(0.001));
    document.getElementById("tier03rewa03").innerHTML = "8式风系统：使风之微粒的软上限弱化25%";
    document.getElementById("tier03rewa04").innerHTML = "20式风系统：使元素能量生产乘以log2(能量)。当前：×" + notation(player.energy.max(2).log(2));

    document.getElementById("tier04").innerHTML = notatint(player.tier04) + "式风四倍系统";
    document.getElementById("tier04rewa01").innerHTML = "1式风四倍系统：基于风四倍系统提升进阶挑战1~4上限（最多提升12）。当前：+" + notation(player.tier04.min(12));
    document.getElementById("tier04rewa02").innerHTML = "3式风四倍系统：使3式风系统也对17~24式风灵生效";

    document.getElementById("tier01cost").innerHTML = "需要：" + notation(variab.tierc01) + "风灵基础值";
    document.getElementById("tier02cost").innerHTML = "需要：" + notation(variab.tierc02) + "式风单元";
    document.getElementById("tier03cost").innerHTML = "需要：" + notation(variab.tierc03) + "式风模块";
    document.getElementById("tier04cost").innerHTML = "需要：" + notation(variab.tierc04) + "式风系统";
    if (player.tier01.gte(1e16)) document.getElementById("tiers01").innerHTML = "四阶折算|";
    else if (player.tier01.gte(1e8)) document.getElementById("tiers01").innerHTML = "三阶折算|";
    else if (player.tier01.gte(10000)) document.getElementById("tiers01").innerHTML = "二阶折算|";
    else if (player.tier01.gte(100)) document.getElementById("tiers01").innerHTML = "一阶折算|";
    else document.getElementById("tiers01").innerHTML = "";
    if (player.tier02.gte(1e16)) document.getElementById("tiers02").innerHTML = "四阶折算|";
    else if (player.tier02.gte(1e8)) document.getElementById("tiers02").innerHTML = "三阶折算|";
    else if (player.tier02.gte(10000)) document.getElementById("tiers02").innerHTML = "二阶折算|";
    else if (player.tier02.gte(100)) document.getElementById("tiers02").innerHTML = "一阶折算|";
    else document.getElementById("tiers02").innerHTML = "";
    if (player.tier03.gte(1e16)) document.getElementById("tiers03").innerHTML = "四阶折算|";
    else if (player.tier03.gte(1e8)) document.getElementById("tiers03").innerHTML = "三阶折算|";
    else if (player.tier03.gte(10000)) document.getElementById("tiers03").innerHTML = "二阶折算|";
    else if (player.tier03.gte(100)) document.getElementById("tiers03").innerHTML = "一阶折算|";
    else document.getElementById("tiers03").innerHTML = "";
    if (player.tier04.gte(1e16)) document.getElementById("tiers04").innerHTML = "四阶折算|";
    else if (player.tier04.gte(1e8)) document.getElementById("tiers04").innerHTML = "三阶折算|";
    else if (player.tier04.gte(10000)) document.getElementById("tiers04").innerHTML = "二阶折算|";
    else if (player.tier04.gte(100)) document.getElementById("tiers04").innerHTML = "一阶折算|";
    else document.getElementById("tiers04").innerHTML = "";
    if (player.autobuytier01 == true) document.getElementById("byattier01").innerHTML = "自动：开";
    else document.getElementById("byattier01").innerHTML = "自动：关";
    if (player.autobuytier02 == true) document.getElementById("byattier02").innerHTML = "自动：开";
    else document.getElementById("byattier02").innerHTML = "自动：关";
    if (player.autobuytier03 == true) document.getElementById("byattier03").innerHTML = "自动：开";
    else document.getElementById("byattier03").innerHTML = "自动：关";
    if (player.autobuytier04 == true) document.getElementById("byattier04").innerHTML = "自动：开";
    else document.getElementById("byattier04").innerHTML = "自动：关";

    document.getElementById("upgd01").innerHTML = player.upgd01.toFixed(0);
    document.getElementById("upgd02").innerHTML = player.upgd02.toFixed(0);
    document.getElementById("upgd03").innerHTML = player.upgd03.toFixed(0);
    document.getElementById("upgd04").innerHTML = player.upgd04.toFixed(0);
    document.getElementById("upgc01").innerHTML = "花费：" + notation(variab.upgc01) + "能量";
    document.getElementById("upgc02").innerHTML = "花费：" + notation(variab.upgc02) + "能量";
    document.getElementById("upgc03").innerHTML = "花费：" + notation(variab.upgc03) + "能量";
    document.getElementById("upgc04").innerHTML = "花费：" + notation(variab.upgc04) + "能量";
    document.getElementById("upge01").innerHTML = "当前：+" + notation(variab.upge01);
    document.getElementById("upge02").innerHTML = "当前：×" + notation(variab.upge02);
    document.getElementById("upge03").innerHTML = "当前：+" + notation(variab.upge03) + "倍";
    document.getElementById("upge04").innerHTML = "当前：×" + notation(variab.upge04) + "次方";
    document.getElementById("upgm01").innerHTML = notation(variab.upgd01mult) ;
    document.getElementById("upgm02").innerHTML = notation(variab.upgd02mult) ;
    if (player.autobuyupgd01 == true) document.getElementById("byatupgd01").innerHTML = "自动：开";
    else document.getElementById("byatupgd01").innerHTML = "自动：关";
    if (player.autobuyupgd02 == true) document.getElementById("byatupgd02").innerHTML = "自动：开";
    else document.getElementById("byatupgd02").innerHTML = "自动：关";
    if (player.autobuyupgd03 == true) document.getElementById("byatupgd03").innerHTML = "自动：开";
    else document.getElementById("byatupgd03").innerHTML = "自动：关";
    if (player.autobuyupgd04 == true) document.getElementById("byatupgd04").innerHTML = "自动：开";
    else document.getElementById("byatupgd04").innerHTML = "自动：关";
    if (variab.upge02.gte(256)) document.getElementById("upgd02sc").innerHTML = "(受软上限限制)";
    else document.getElementById("upgd02sc").innerHTML = "";
    if (player.upgd04.add(variab.upgf04).gte(16)) document.getElementById("upgd04sc").innerHTML = "(受软上限限制)";
    else document.getElementById("upgd04sc").innerHTML = "";

    document.getElementById("PL1ptspd").innerHTML = notation(player.energy.root(1024).floor()) + "扩散点";
    document.getElementById("PL1ptsnx").innerHTML = "，下一扩散点在" + notation(player.energy.root(1024).floor().add(1).pow(1024)) + "能量";
    document.getElementById("PL2ptspd").innerHTML = notation(player.PL1pts.root(1024).floor()) + "扪敤点";
    document.getElementById("PL2ptsnx").innerHTML = "，下一扪敤点在" + notation(player.PL1pts.root(1024).floor().add(1).pow(1024)) + "扩散点";
    document.getElementById("PL3ptspd").innerHTML = notation(player.PL2pts.root(1048576).floor()) + "扫敥点";
    document.getElementById("PL3ptsnx").innerHTML = "，下一扫敥点在" + notation(player.PL2pts.root(1048576).floor().add(1).pow(1048576)) + "扪敤点";

    document.getElementById("PL1Pts").innerHTML = notation(player.PL1pts);
    document.getElementById("PL1Eng").innerHTML = notation(player.PL1energy);
    document.getElementById("PL1EngPow").innerHTML = notation(variab.PL1engpow);
    document.getElementById("PL1EngMul").innerHTML = notation(variab.PL1engmul);
    document.getElementById("PL1EngPs").innerHTML = notation(player.wsca09.mul(variab.wscm09).pow(variab.wscp09).mul(new Decimal(0.25)));

    document.getElementById("PL1upge05").innerHTML = "当前：×" + notation(player.PL1energy.add(1).log(2).max(1).pow(player.chacom02.mul(0.5).add(2)));
    document.getElementById("PL1upge06").innerHTML = "当前：×" + notation(player.PL1ptsttl.min(player.PL1ptsttl.add(1).log(1.189207115002721).pow(4).mul(4294967296)).max(1));
    document.getElementById("PL1upge07").innerHTML = "当前：×" + notation(player.PL1tms.pow(4).min(player.PL1tms.pow(0.25).mul(1.152921505e18)).max(1));
    document.getElementById("PL1upge08").innerHTML = "当前：×" + notation(player.energy.add(1).log(2).max(1).pow(player.chacom02.mul(0.5).add(2)));

    document.getElementById("PL1bab01").innerHTML = player.PL1bab01.toFixed(0);
    document.getElementById("PL1bab02").innerHTML = player.PL1bab02.toFixed(0);
    document.getElementById("PL1bab03").innerHTML = player.PL1bab03.toFixed(0);
    document.getElementById("PL1bab04").innerHTML = player.PL1bab04.toFixed(0);
    document.getElementById("PL1bab05").innerHTML = player.PL1bab05.toFixed(0);
    document.getElementById("PL1bab06").innerHTML = player.PL1bab06.toFixed(0);
    document.getElementById("PL1bab07").innerHTML = player.PL1bab07.toFixed(0);
    document.getElementById("PL1bab08").innerHTML = player.PL1bab08.toFixed(0);
    document.getElementById("PL1bab09").innerHTML = player.PL1bab09.toFixed(0);
    document.getElementById("PL1bab10").innerHTML = player.PL1bab10.toFixed(0);
    document.getElementById("PL1bab11").innerHTML = player.PL1bab11.toFixed(0);
    document.getElementById("PL1bab12").innerHTML = player.PL1bab12.toFixed(0);

    document.getElementById("PL1babc1").innerHTML = notation(variab.PL1babc1);
    document.getElementById("PL1babc2").innerHTML = notation(variab.PL1babc2);
    document.getElementById("PL1babc3").innerHTML = notation(variab.PL1babc3);
    document.getElementById("PL1babc4").innerHTML = notation(variab.PL1babc1);
    document.getElementById("PL1babc5").innerHTML = notation(variab.PL1babc2);
    document.getElementById("PL1babc6").innerHTML = notation(variab.PL1babc3);
    document.getElementById("PL1babc7").innerHTML = notation(variab.PL1babc1);
    document.getElementById("PL1babc8").innerHTML = notation(variab.PL1babc2);
    document.getElementById("PL1babc9").innerHTML = notation(variab.PL1babc3);
    document.getElementById("PL1babc10").innerHTML = notation(variab.PL1babc4);
    document.getElementById("PL1babc11").innerHTML = notation(variab.PL1babc5);
    document.getElementById("PL1babc12").innerHTML = notation(variab.PL1babc6);

    document.getElementById("anmpar").innerHTML = notation(player.anmpar);
    document.getElementById("anmparps").innerHTML = notation(variab.anmparps);
    document.getElementById("anmparsc").innerHTML = notation(variab.anmparsc);
    if (player.std[0] == true) document.getElementById("anmparexp").innerHTML = notation(player.parupg03.min(60).div(256).add(0.015625));
    else document.getElementById("anmparexp").innerHTML = notation(player.parupg03.div(64).add(0.0625));
    if (player.std[0] == true) document.getElementById("anmpareffe").innerHTML = "^" + notation(player.anmpar.add(1).log(2).pow(player.parupg03.min(player.parupg03.mul(4).pow(0.25).mul(16)).div(256).add(0.015625)).max(1));
    else document.getElementById("anmpareffe").innerHTML = "×" + notation(player.anmpar.add(1).log(2).pow(player.parupg03.min(player.parupg03.mul(4).pow(0.25).mul(16)).div(64).add(0.0625)).max(1));
    document.getElementById("anmorba").innerHTML = notation(player.anmorb);
    document.getElementById("anmorbttl").innerHTML = notation(player.anmorbttl);

    document.getElementById("parupg01").innerHTML = notatint(player.parupg01);
    document.getElementById("parupg02").innerHTML = notatint(player.parupg02);
    document.getElementById("parupg03").innerHTML = notatint(player.parupg03);
    document.getElementById("parupg04").innerHTML = notatint(player.parupg04);
    document.getElementById("parupge01").innerHTML = notation(new Decimal(2).pow(player.parupg01));
    document.getElementById("parupge02").innerHTML = notation(player.anmpar.pow(player.parupg02.mul(0.25)).max(1));
    document.getElementById("parupge03").innerHTML = notation(player.parupg03.min(60).div(64));
    document.getElementById("parupge04").innerHTML = notation(player.parupg04);
    document.getElementById("parupgc01").innerHTML = notation(variab.parupgc01);
    document.getElementById("parupgc02").innerHTML = notation(variab.parupgc02);
    document.getElementById("parupgc03").innerHTML = notation(variab.parupgc03);
    document.getElementById("parupgc04").innerHTML = notation(variab.parupgc04);

    document.getElementById("orbupge01").innerHTML = notation(player.PL1energy.add(1).log(2).pow(16));
    document.getElementById("orbupge02").innerHTML = notation(player.energy.add(1).log(2).pow(16));
    document.getElementById("orbupge03").innerHTML = notation(player.PL1energy.add(1).log(2).pow(4));
    document.getElementById("orbupge04").innerHTML = notation(player.energy.add(1).log(2).pow(4));

    for (let i = 1; i <= 8; i++) {
        let name = tiername[i];
        document.getElementById("chal" + name + "goal").innerHTML = notation(variab["chagoa" + name]);
        document.getElementById("chal" + name + "comp").innerHTML = notatint(player["chacom" + name]);
        if (i <= 4) document.getElementById("chal" + name + "cap").innerHTML = notatint(variab.PL1chacap);
        else if (i <= 8) document.getElementById("chal" + name + "cap").innerHTML = notatint(variab.PL2chacap);
    }
    document.getElementById("chal01effe").innerHTML = notation(player.chacom01.min(player.chacom01.pow(0.5).mul(2)).mul(0.25));
    document.getElementById("chal02effe").innerHTML = notation(player.chacom02.mul(1));
    document.getElementById("chal03effe").innerHTML = notation(player.chacom03.mul(0.01));
    document.getElementById("chal04effe").innerHTML = notation(new Decimal(2).pow(player.chacom04));
    document.getElementById("chal05effe").innerHTML = notation(player.chacom05.min(player.chacom05.pow(0.5).mul(2)).mul(0.25));
    document.getElementById("chal06effe").innerHTML = notation(player.chacom06.mul(0.01));
    document.getElementById("chal07effe").innerHTML = notation(player.chacom07.mul(new Decimal(4).pow(player.chacom07.div(4))));
    document.getElementById("chal08effe").innerHTML = notation(new Decimal(4).pow(player.chacom08));

    document.getElementById("PL2Pts").innerHTML = notation(player.PL2pts);
    document.getElementById("PL2Eng").innerHTML = notation(player.PL2energy);
    document.getElementById("PL2EngPow").innerHTML = notation(variab.PL2engpow);
    document.getElementById("PL2EngMul").innerHTML = notation(variab.PL2engmul);
    document.getElementById("PL2EngPow2").innerHTML = notation(variab.PL2engpow2);
    document.getElementById("PL2EngMul2").innerHTML = notation(variab.PL2engmul2);
    document.getElementById("PL2EngPs").innerHTML = notation(player.wsca17.mul(variab.wscm17).pow(variab.wscp17).mul(new Decimal(0.25)));

    document.getElementById("PL2tms2").innerHTML = "总计扪敤次数：" + notatint(player.PL2tms) + "次";
    document.getElementById("PL2tmc").innerHTML = notatint(player.PL2tmsc);
    document.getElementById("PL2tm01b").innerHTML = notatint(player.PL2upg01);
    document.getElementById("PL2tm02b").innerHTML = notatint(player.PL2upg02);
    document.getElementById("PL2tm03b").innerHTML = notatint(player.PL2upg03);
    document.getElementById("PL2tm04b").innerHTML = notatint(player.PL2upg04);
    document.getElementById("PL2tm01c").innerHTML = notatint(variab.PL2upgc01);
    document.getElementById("PL2tm02c").innerHTML = notatint(variab.PL2upgc02);
    document.getElementById("PL2tm03c").innerHTML = notatint(variab.PL2upgc03);
    document.getElementById("PL2tm04c").innerHTML = notatint(variab.PL2upgc04);

    document.getElementById("anemo").innerHTML = notatint(player.elmt);
    if (player.PL2ptsttl.lte(1.844674407370955e19)) document.getElementById("anemon").innerHTML = notatint(new Decimal(2).pow(player.elmttl.add(1)));
    else document.getElementById("anemon").innerHTML = notatint(new Decimal(2).pow(new Decimal(2).pow(player.elmttl.sub(40).add(1).div(4))));
    document.getElementById("anemot").innerHTML = notatint(player.elmttl);
    document.getElementById("elmmpd").innerHTML = notation(variab.elmmpd);

    document.getElementById("pyroa").innerHTML = notatint(player.elmt01);
    document.getElementById("hydroa").innerHTML = notatint(player.elmt02);
    document.getElementById("electroa").innerHTML = notatint(player.elmt03);
    document.getElementById("cryoa").innerHTML = notatint(player.elmt04);
    document.getElementById("pyroe").innerHTML = notation(player.elmten01);
    document.getElementById("hydroe").innerHTML = notation(player.elmten02);
    document.getElementById("electroe").innerHTML = notation(player.elmten03);
    document.getElementById("cryoe").innerHTML = notation(player.elmten04);
    document.getElementById("pyrop").innerHTML = notation(variab.elmtps01);
    document.getElementById("hydrop").innerHTML = notation(variab.elmtps02);
    document.getElementById("electrop").innerHTML = notation(variab.elmtps03);
    document.getElementById("cryop").innerHTML = notation(variab.elmtps04);
    document.getElementById("pyrou").innerHTML = notatint(variab.upgf01);
    document.getElementById("hydrou").innerHTML = notatint(variab.upgf02);
    document.getElementById("electrou").innerHTML = notatint(variab.upgf03);
    document.getElementById("cryou").innerHTML = notatint(variab.upgf04);
    document.getElementById("pyrou1").innerHTML = notatint(variab.upgf01);
    document.getElementById("hydrou1").innerHTML = notatint(variab.upgf02);
    document.getElementById("electrou1").innerHTML = notatint(variab.upgf03);
    document.getElementById("cryou1").innerHTML = notatint(variab.upgf04);
    document.getElementById("pyron").innerHTML = notatint(new Decimal(2).pow(variab.upgf01.add(1)));
    document.getElementById("hydron").innerHTML = notatint(new Decimal(4).pow(variab.upgf02.add(1)));
    document.getElementById("electron").innerHTML = notatint(new Decimal(16).pow(variab.upgf03.add(1)));
    document.getElementById("cryon").innerHTML = notatint(new Decimal(256).pow(variab.upgf04.add(1)));

    document.getElementById("thrm").innerHTML = notatint(player.thrm);
    document.getElementById("thrmttl").innerHTML = notatint(player.thrmttl);
    document.getElementById("thrmc01").innerHTML = notatint(variab.thrmc01);
    document.getElementById("thrmc02").innerHTML = notatint(variab.thrmc02);
    document.getElementById("thrmc03").innerHTML = notatint(variab.thrmc03);
    document.getElementById("stde05").innerHTML = notation(new Decimal(2).mul(new Decimal(2).pow(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03))).root(8).pow(player.tier01));
    document.getElementById("stde06").innerHTML = notation(new Decimal(2).mul(new Decimal(2).pow(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03))).root(64).pow(player.tier01));
    document.getElementById("stde09").innerHTML = notation(player.PL2energy.max(1).log(2).pow(4096));
    document.getElementById("stde10").innerHTML = notation(player.PL2energy.max(1).log(2).pow(256));
    document.getElementById("stde11").innerHTML = notation(player.PL2energy.max(1).log(2).pow(16));
    document.getElementById("stde12").innerHTML = notation(new Decimal(2).pow(4096).pow(player.PL1sec.pow(0.5)));
    document.getElementById("stde13").innerHTML = notation(new Decimal(2).pow(1024).pow(player.PL2sec.pow(0.25)));
    document.getElementById("stde14").innerHTML = notation(player.PL1energy.max(1).log(2).pow(16));
    document.getElementById("stde15").innerHTML = notation(new Decimal(2).pow(16).pow(player.PL1tms.pow(0.25)));
    document.getElementById("stde16").innerHTML = notation(new Decimal(2).pow(16).pow(player.PL2tms.pow(0.5)));
    document.getElementById("stde17").innerHTML = notation(player.energy.max(1).log(2).pow(16));

    document.getElementById("alch00").innerHTML = notatint(player.alcspd);
    document.getElementById("alcost").innerHTML = notatint(variab.alcost);
    for (i = 1; i <= 4; i++) {
        let name = tiername[i];
        document.getElementById("alca" + name).innerHTML = notation(player["alch" + name]);
    }
    for (i = 1; i <= 6; i++) {
        let name = tiername[i];
        document.getElementById("alcu" + name).innerHTML = notatint(player["alcu" + name]);
        document.getElementById("alcc" + name).innerHTML = notation(variab["alcuc" + name]);
    }

    if (player.inzyts == true) document.getElementById("anm2st").innerHTML = "（你当前在增压坍缩中）";
    else document.getElementById("anm2st").innerHTML = "";
    document.getElementById("anm2am").innerHTML = notation(player.anm2);
    document.getElementById("anm2ps").innerHTML = notation(variab.anm2ps);
    document.getElementById("anm2exp").innerHTML = notation(player.anm2u03.min(player.anm2u03.mul(4).pow(0.25).mul(16)).div(256).add(0.015625));
    document.getElementById("anm2effe").innerHTML = notation(player.anm2.add(1).log(2).pow(player.anm2u03.min(player.anm2u03.mul(4).pow(0.25).mul(16)).div(256).add(0.015625)).max(1));
    document.getElementById("anm2upg01").innerHTML = notatint(player.anm2u01);
    document.getElementById("anm2upg02").innerHTML = notatint(player.anm2u02);
    document.getElementById("anm2upg03").innerHTML = notatint(player.anm2u03);
    document.getElementById("anm2upg04").innerHTML = notatint(player.anm2u04);
    document.getElementById("anm2upge01").innerHTML = notation(new Decimal(2).pow(player.anm2u01));
    document.getElementById("anm2upge02").innerHTML = notation(player.anm2.pow(player.anm2u02.mul(4)).max(1));
    document.getElementById("anm2upge03").innerHTML = notation(player.anm2u03.div(64));
    document.getElementById("anm2upge04").innerHTML = notation(player.anm2u04.mul(0.01));
    document.getElementById("anm2upgc01").innerHTML = notation(variab.anm2c01);
    document.getElementById("anm2upgc02").innerHTML = notation(variab.anm2c02);
    document.getElementById("anm2upgc03").innerHTML = notation(variab.anm2c03);
    document.getElementById("anm2upgc04").innerHTML = notation(variab.anm2c04);

    document.getElementById("PL3Pts").innerHTML = notation(player.PL3pts);
    document.getElementById("PL3Eng").innerHTML = notation(player.PL3energy);
    document.getElementById("PL3EngPow").innerHTML = notation(variab.PL3engpow);
    document.getElementById("PL3EngMul").innerHTML = notation(variab.PL3engmul);
    document.getElementById("PL3EngPow2").innerHTML = notation(variab.PL3engpow2);
    document.getElementById("PL3EngMul2").innerHTML = notation(variab.PL3engmul2);
    document.getElementById("PL3EngPow3").innerHTML = notation(variab.PL3engpow3);
    document.getElementById("PL3EngMul3").innerHTML = notation(variab.PL3engmul3);
    document.getElementById("PL3EngPs").innerHTML = notation(player.wsca25.mul(variab.wscm25).pow(variab.wscp25).mul(new Decimal(0.25)));

    document.getElementById("PL3tms2").innerHTML = notatint(player.PL3tms);
    document.getElementById("PL3tef1").innerHTML = notatint(variab.PL3tef1);
    document.getElementById("PL3tef2").innerHTML = notation(variab.PL3tef2);
    document.getElementById("resped").innerHTML = notation(variab.resped);
    for (i = 1; i <= 8; i++) {
        let name = tiername[i];
        document.getElementById("resp" + name).innerHTML = notation(player["resp" + name]);
        document.getElementById("resr" + name).innerHTML = notation(variab["resr" + name]);
        document.getElementById("resa" + name).innerHTML = notatint(player["resa" + name]);
    }
    document.getElementById("rese01").innerHTML = notation(variab.rese01);
    document.getElementById("rese02").innerHTML = notation(variab.rese02);
    document.getElementById("rese03").innerHTML = notation(variab.rese03);
    document.getElementById("rese04").innerHTML = notation(variab.rese04);

    if (player.innormcha == 1) document.getElementById("chalstat").innerHTML = "你当前在普通挑战1中";
    else if (player.innormcha == 2) document.getElementById("chalstat").innerHTML = "你当前在普通挑战2中";
    else if (player.innormcha == 3) document.getElementById("chalstat").innerHTML = "你当前在普通挑战3中";
    else if (player.innormcha == 4) document.getElementById("chalstat").innerHTML = "你当前在普通挑战4中";
    else if (player.innormcha == 5) document.getElementById("chalstat").innerHTML = "你当前在普通挑战5中";
    else if (player.innormcha == 6) document.getElementById("chalstat").innerHTML = "你当前在普通挑战6中";
    else if (player.innormcha == 7) document.getElementById("chalstat").innerHTML = "你当前在普通挑战7中";
    else if (player.innormcha == 8) document.getElementById("chalstat").innerHTML = "你当前在普通挑战8中";
    else if (player.innormcha == 9) document.getElementById("chalstat").innerHTML = "你当前在普通挑战9中";
    else if (player.innormcha == 10) document.getElementById("chalstat").innerHTML = "你当前在普通挑战10中";
    else if (player.innormcha == 11) document.getElementById("chalstat").innerHTML = "你当前在普通挑战11中";
    else if (player.innormcha == 12) document.getElementById("chalstat").innerHTML = "你当前在普通挑战12中";

    else if (player.incha == 1) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战1中";
    else if (player.incha == 2) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战2中";
    else if (player.incha == 3) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战3中";
    else if (player.incha == 4) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战4中";
    else if (player.incha == 5) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战5中";
    else if (player.incha == 6) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战6中";
    else if (player.incha == 7) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战7中";
    else if (player.incha == 8) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战8中";
    else if (player.incha == 9) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战9中";
    else if (player.incha == 10) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战10中";
    else if (player.incha == 11) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战11中";
    else if (player.incha == 12) document.getElementById("chalstat").innerHTML = "你当前在进阶挑战12中";
    else document.getElementById("chalstat").innerHTML = "你当前不在任何挑战中";

    document.getElementById("playtime").innerHTML = "游戏时间：" + player.days.toFixed(0) + "d " + player.hours.toFixed(0) + "h " + player.minuts.toFixed(0) + "m " + player.seconds.toFixed(0) + "s " + player.milliseconds.toFixed(0) + "ms";
    document.getElementById("totalseconds").innerHTML = "游戏秒数：" + player.totalSeconds.toFixed(0);
    document.getElementById("totalenergy").innerHTML = "总计能量：" + notation(player.energyttl);
    document.getElementById("PL1tms").innerHTML = "您扩散了" + notatint(player.PL1tms) + "次";
    document.getElementById("PL1sec").innerHTML = "上次扩散到现在过了" + player.PL1sec.toFixed(0) + "秒";
    document.getElementById("PL1pts").innerHTML = "总计扩散点：" + notatint(player.PL1ptsttl);
    document.getElementById("PL2tms").innerHTML = "您扪敤了" + notatint(player.PL2tms) + "次";
    document.getElementById("PL2sec").innerHTML = "上次扪敤到现在过了" + player.PL2sec.toFixed(0) + "秒";
    document.getElementById("PL2pts").innerHTML = "总计扪敤点：" + notatint(player.PL2ptsttl);
    document.getElementById("PL3tms").innerHTML = "您扫敥了" + notatint(player.PL3tms) + "次";
    document.getElementById("PL3sec").innerHTML = "上次扫敥到现在过了" + player.PL3sec.toFixed(0) + "秒";
    document.getElementById("PL3pts").innerHTML = "总计扫敥点：" + notatint(player.PL3ptsttl);

}

function styleDisplay() {
    if (player.tier01.eq(0)) document.getElementById("tier01info").innerHTML = "在1式风单元，将基于风单元式数提升1~8式风灵乘数(1+n)²。";
    if (player.tier01.gte(1)) {
        document.getElementById("tier01rewa01").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在2式风单元，将基于风灵基础值提升1~8式风灵乘数max(1,n/64)。";
    }
    else document.getElementById("tier01rewa01").style.display = 'none';
    if (player.tier01.gte(2)) {
        document.getElementById("tier01rewa02").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在5式风单元，将基于风模块式数提升1~8式风灵乘数(1+n)³。";
    }
    else document.getElementById("tier01rewa02").style.display = 'none';
    if (player.tier01.gte(5)) {
        document.getElementById("tier01rewa03").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在10式风单元，将基于能量提升1~8式风灵乘数max(1,log2(n+1)^0.2)。";
    }
    else document.getElementById("tier01rewa03").style.display = 'none';
    if (player.tier01.gte(10)) {
        document.getElementById("tier01rewa04").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在25式风单元，将使每个风单元使1~8式风灵乘数×2";
    }
    else document.getElementById("tier01rewa04").style.display = 'none';
    if (player.tier01.gte(25)) {
        document.getElementById("tier01rewa05").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在63式风单元，将使1和5式风单元奖励也对9~16式风灵生效";
    }
    else document.getElementById("tier01rewa05").style.display = 'none';
    if (player.tier01.gte(63)) {
        document.getElementById("tier01rewa06").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在200式风单元，将使风单元式数增加风之微粒获取";
    }
    else document.getElementById("tier01rewa06").style.display = 'none';
    if (player.tier01.gte(200)) {
        document.getElementById("tier01rewa07").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在630式风单元，将每作成一次16式风灵使风之微粒产量×2";
    }
    else document.getElementById("tier01rewa07").style.display = 'none';
    if (player.tier01.gte(630)) {
        document.getElementById("tier01rewa08").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "";
    }
    else document.getElementById("tier01rewa08").style.display = 'none';

    if (player.tier02.eq(0)) document.getElementById("tier02info").innerHTML = "在1式风模块，将基于风模块式数提升风灵每次作成乘数(+0.05×n^0.25)，并解锁第一个升级。";
    if (player.tier02.gte(1)) {
        document.getElementById("tier02rewa01").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "在2式风模块，将解锁第二个升级。";
        document.getElementById("upg_01").style.display = 'block';
    }
    else {
        document.getElementById("tier02rewa01").style.display = 'none';
        document.getElementById("upg_01").style.display = 'none';
    }
    if (player.tier02.gte(2)) {
        document.getElementById("tier02rewa02").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "在5式风模块，将基于风单元式数提升风灵每次作成乘数(+0.02×n^0.25)。";
        document.getElementById("upg_02").style.display = 'block';
    }
    else {
        document.getElementById("tier02rewa02").style.display = 'none';
        document.getElementById("upg_02").style.display = 'none';
    }
    if (player.tier02.gte(5)) {
        document.getElementById("tier02rewa03").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "在12式风模块，将使每个风模块将风灵每次作成乘数×1.011，并解锁第三个升级。";
    }
    else {
        document.getElementById("tier02rewa03").style.display = 'none';
    }
    if (player.tier02.gte(12)) {
        document.getElementById("tier02rewa04").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "在30式风模块，将解锁第四个升级";
        document.getElementById("upg_03").style.display = 'block';
    }
    else {
        document.getElementById("tier02rewa04").style.display = 'none';
        document.getElementById("upg_03").style.display = 'none';
    }
    if (player.tier02.gte(30)) {
        document.getElementById("tier02rewa05").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "在75式风模块，将使所有类型的能量增加与它相关的风灵的指数^1+log2(log2(x+1)+1)/4096";
        document.getElementById("upg_04").style.display = 'block';
    }
    else {
        document.getElementById("tier02rewa05").style.display = 'none';
        document.getElementById("upg_04").style.display = 'none';
    }
    if (player.tier02.gte(75)) {
        document.getElementById("tier02rewa06").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "";
    }
    else {
        document.getElementById("tier02rewa06").style.display = 'none';
    }

    if (player.tier03.eq(0)) document.getElementById("tier03info").innerHTML = "在1式风系统，将基于升级数量之和提高17~24式风灵乘数。";
    if (player.tier03.gte(1)) {
        document.getElementById("tier03rewa01").style.display = 'block';
        document.getElementById("tier03info").innerHTML = "在3式风系统，将基于风系统提升1~16式风灵的指数。";
    }
    else document.getElementById("tier03rewa01").style.display = 'none';
    if (player.tier03.gte(3)) {
        document.getElementById("tier03rewa02").style.display = 'block';
        document.getElementById("tier03info").innerHTML = "在8式风系统，将使风之微粒的软上限弱化25%。";
    }
    else document.getElementById("tier03rewa02").style.display = 'none';
    if (player.tier03.gte(8)) {
        document.getElementById("tier03rewa03").style.display = 'block';
        document.getElementById("tier03info").innerHTML = "在20式风系统，将使元素能量获取速度乘以log2(能量)";
    }
    else document.getElementById("tier03rewa03").style.display = 'none';
    if (player.tier03.gte(20)) {
        document.getElementById("tier03rewa04").style.display = 'block';
        document.getElementById("tier03info").innerHTML = "";
    }
    else document.getElementById("tier03rewa04").style.display = 'none';

    if (player.tier04.eq(0)) document.getElementById("tier04info").innerHTML = "在1式风四倍系统，将基于风四倍系统提升进阶挑战上限（最多提升12）";
    if (player.tier04.gte(1)) {
        document.getElementById("tier04rewa01").style.display = 'block';
        document.getElementById("tier04info").innerHTML = "在3式风四倍系统，将使3式风系统也对17~24式风灵生效";
    }
    else document.getElementById("tier04rewa01").style.display = 'none';
    if (player.tier04.gte(3)) {
        document.getElementById("tier04rewa02").style.display = 'block';
        document.getElementById("tier04info").innerHTML = "";
    }
    else document.getElementById("tier04rewa02").style.display = 'none';

    if (player.PL2tms.gte(1)) document.getElementById("tier_03").style.display = 'block';
    else document.getElementById("tier_03").style.display = 'none';

    if (player.std[6] == true) document.getElementById("tier_04").style.display = 'block';
    else document.getElementById("tier_04").style.display = 'none';

    if (player.energy.gte(1.797693134862315e308)) document.getElementById("PL1button").style.display = 'block';
    else document.getElementById("PL1button").style.display = 'none';
    if (player.PL1pts.gte(1.797693134862315e308)) document.getElementById("PL2button").style.display = 'block';
    else document.getElementById("PL2button").style.display = 'none';
    if (player.PL2pts.gte("6.741140125499073e315652")) document.getElementById("PL3button").style.display = 'block';
    else document.getElementById("PL3button").style.display = 'none';

    if (player.energy.lt("1e6144")) document.getElementById("PL1ptsnx").style.display = 'block';
    else document.getElementById("PL1ptsnx").style.display = 'none';
    if (player.PL1pts.lt("1e6144")) document.getElementById("PL2ptsnx").style.display = 'block';
    else document.getElementById("PL2ptsnx").style.display = 'none';
    if (player.PL2pts.lt("1e6291456")) document.getElementById("PL3ptsnx").style.display = 'block';
    else document.getElementById("PL3ptsnx").style.display = 'none';

    if (player.hasUnlockedPL1 == true) {
        document.getElementById("wscset2").style.display = 'block';
        document.getElementById("PL1info").style.display = 'block';
        document.getElementById("comp1").style.display = 'block';
        document.getElementById("btrow2").style.display = '';
    }
    if (player.hasUnlockedPL2 == true) {
        document.getElementById("wscset3").style.display = 'block';
        document.getElementById("PL2info").style.display = 'block';
        document.getElementById("comp2").style.display = 'block';
        document.getElementById("btrow3").style.display = '';
    }
    if (player.hasUnlockedPL3 == true) {
        document.getElementById("wscset4").style.display = 'block';
        document.getElementById("PL3info").style.display = 'block';
        document.getElementById("comp3").style.display = 'block';
        document.getElementById("btrow4").style.display = '';
    }

    for (let i = 0; i < 16; i++) {
        if (player.PL1upg[i] == true) document.getElementById("PL1upg" + tiername[i + 1]).className = "PL1upgyes";
        else document.getElementById("PL1upg" + tiername[i + 1]).className = "PL1upgno";
    }
    if (player.PL1upg[0] == true) {
        for (let i = 1; i <= 8; i++) {
            document.getElementById("byat" + tiername[i]).style.display = 'block';
        }
    }
    else {
        for (let i = 1; i <= 8; i++) {
            document.getElementById("byat" + tiername[i]).style.display = 'none';
        }
    }
    for (let i = 1; i <= 8; i++) {
        if (player.PL2upg01.gte(i)) document.getElementById("byat" + tiername[i+8]).style.display = 'block';
    }
    if (player.resa05.gte(1)) {
        for (let i = 1; i <= 8; i++) {
            document.getElementById("byat" + tiername[i+16]).style.display = 'block';
        }
    }


    if (player.PL1upg[1] == true) {
        document.getElementById("byattier01").style.display = 'block';
        document.getElementById("byattier02").style.display = 'block';
    }
    else {
        document.getElementById("byattier01").style.display = 'none';
        document.getElementById("byattier02").style.display = 'none';
    }
    if (player.PL2tms.gte(9)) document.getElementById("byattier03").style.display = 'block';
    else document.getElementById("byattier03").style.display = 'none';
    if (player.alcu[0] == true) document.getElementById("byattier04").style.display = 'block';
    else document.getElementById("byattier04").style.display = 'none';
    if (player.PL1upg[2] == true) {
        document.getElementById("byatupgd01").style.display = 'block';
        document.getElementById("byatupgd02").style.display = 'block';
    }
    else {
        document.getElementById("byatupgd01").style.display = 'none';
        document.getElementById("byatupgd02").style.display = 'none';
    }
    if (player.PL2tms.gte(7)) {
        document.getElementById("byatupgd03").style.display = 'block';
        document.getElementById("byatupgd04").style.display = 'block';
    }
    else {
        document.getElementById("byatupgd03").style.display = 'none';
        document.getElementById("byatupgd04").style.display = 'none';
    }

    if (player.PL1upg[3] == true) document.getElementById("normchal").style.display = 'block';
    else document.getElementById("normchal").style.display = 'none';

    if (player.ach[19] == true) document.getElementById("chal").style.display = 'block';
    else document.getElementById("chal").style.display = 'none';

    if (player.std[17] == true) document.getElementById("chal2").style.display = 'block';
    else document.getElementById("chal2").style.display = 'none';

    for (let i = 0; i < 12; i++) {
        if (player.normchacom[i] == true) document.getElementById("normchal" + tiername[i + 1]).className = "normchalyes";
        else if (player.innormcha == i + 1) document.getElementById("normchal" + tiername[i + 1]).className = "normchalin"
        else document.getElementById("normchal" + tiername[i + 1]).className = "normchalno";
    }

    for (let i = 0; i < 4; i++) {
        let name = tiername[i + 1];
        if (player["chacom" + name].eq(variab.PL1chacap)) document.getElementById("chal" + tiername[i + 1]).className = "chalyes";
        else if (player.incha == i + 1) document.getElementById("chal" + tiername[i + 1]).className = "chalin"
        else document.getElementById("chal" + tiername[i + 1]).className = "chalno";
    }
    for (let i = 4; i < 8; i++) {
        let name = tiername[i + 1];
        if (player["chacom" + name].eq(variab.PL2chacap)) document.getElementById("chal" + tiername[i + 1]).className = "chalyes";
        else if (player.incha == i + 1) document.getElementById("chal" + tiername[i + 1]).className = "chalin"
        else document.getElementById("chal" + tiername[i + 1]).className = "chalno";
    }

    if (player.PL1upg[11] == true) document.getElementById("PL1bab").style.display = '';
    else document.getElementById("PL1bab").style.display = 'none';

    for (let i = 0; i < 4; i++) {
        if (player.orbupg[i] == true) document.getElementById("orbupg" + tiername[i + 1]).className = "PL1upgyes";
        else document.getElementById("orbupg" + tiername[i + 1]).className = "PL1upgno";
    }

    if (player.hasunlockedanmorb == true) {
        document.getElementById("ulanmorb").style.display = 'none';
        document.getElementById("anmorb").style.display = 'block';
    }
    else {
        document.getElementById("anmorb").style.display = 'none';
        document.getElementById("ulanmorb").style.display = 'block';
    }

    for (let i = 1; i <= 10; i++) {
        if (player.PL2tms.gte(i)) document.getElementById("PL2mlst" + tiername[i]).className = "PL2mlstyes";
        else document.getElementById("PL2mlst" + tiername[i]).className = "PL2mlstno";
    }
    if (player.PL2tms.gte(10)) {
        document.getElementById("PL2tmshop").style.display = 'block';
        document.getElementById("stdtree").style.display = 'block';
    }
    else {
        document.getElementById("PL2tmshop").style.display = 'none';
        document.getElementById("stdtree").style.display = 'none';
    }

    for (let i = 0; i < 40; i++) {
        if (player.std[i] == true) document.getElementById("std" + tiername[i + 1]).className = "stdyes";
        else document.getElementById("std" + tiername[i + 1]).className = "stdno";
    }

    if (player.std[19] == true) document.getElementById("alch").style.display = 'block';
    else document.getElementById("alch").style.display = 'none';

    for (i = 1; i <= 4; i++) {
        let name = tiername[i];
        if (player.alca[i - 1] == true) document.getElementById("alch" + name).className = "alcyes";
        else document.getElementById("alch" + name).className = "alc";
    }
    for (i = 1; i <= 6; i++) {
        let name = tiername[i];
        if (player.alcu[i - 1] == true) document.getElementById("alcv" + name).className = "alcyes";
        else document.getElementById("alcv" + name).className = "alc";
    }

    if (player.hasunlockedanm2 == true) {
        document.getElementById("anm2").style.display = 'block';
        document.getElementById("ulanm2").style.display = 'none';
    }
    else {
        document.getElementById("anm2").style.display = 'none';
        document.getElementById("ulanm2").style.display = 'block';
    }

    for (i = 1; i <= 8; i++) {
        let name = tiername[i];
        if (player.inres == i) document.getElementById("res" + name).className = "resyes";
        else document.getElementById("res" + name).className = "resno";
    }

    for (let i = 0; i < 50; i++) {
        if (player.ach[i] == true) document.getElementById("ach" + hexdigit[i]).className = "achyes";
        else document.getElementById("ach" + hexdigit[i]).className = "achno";
    }
    if (player.tier01conf == true) document.getElementById("tier01confirm").checked = 'checked';
    else document.getElementById("tier01confirm").checked = '';
    if (player.tier02conf == true) document.getElementById("tier02confirm").checked = 'checked';
    else document.getElementById("tier02confirm").checked = '';
    if (player.PL1conf == true) document.getElementById("PL1confirm").checked = 'checked';
    else document.getElementById("PL1confirm").checked = '';
    if (player.PL2conf == true) document.getElementById("PL2confirm").checked = 'checked';
    else document.getElementById("PL2confirm").checked = '';
    if (player.PL3conf == true) document.getElementById("PL3confirm").checked = 'checked';
    else document.getElementById("PL3confirm").checked = '';
}

/*成就*/
function getAch(i) {
    if (player.ach[i] != true) {
        player.ach[i] = true;
        document.getElementById("ach" + hexdigit[i]).className = "achyes";
        shownoti("#notiach" + hexdigit[i]);
    }
}

function comAch() {
    if (player.wscb01.gt(0)) getAch(0);
    if (player.wscb02.gt(0)) getAch(1);
    if (player.wscb03.gt(0)) getAch(2);
    if (player.wscb04.gt(0)) getAch(3);
    if (player.wscb05.gt(0)) getAch(4);
    if (player.wscb06.gt(0)) getAch(5);
    if (player.wscb07.gt(0)) getAch(6);
    if (player.wscb08.gt(0)) getAch(7);
    if (player.tier01.gte(4)) getAch(8);
    if (player.tier02.gte(2)) getAch(9);
    if (player.wscb01.eq(1) & player.wscb02.eq(0) & player.wscb03.eq(1)) getAch(10);
    if (player.wscb01.gte(10) & player.wscb02.eq(0) & player.wscb03.eq(0) & player.wscb04.eq(0) & player.wscb05.eq(0) & player.wscb06.eq(0) & player.wscb07.eq(0) & player.wscb08.eq(0)) getAch(11);
    if (player.energy.gte(1e24) & player.wscb05.eq(0) & player.wscb06.eq(0) & player.wscb07.eq(0) & player.wscb08.eq(0)) getAch(12);
    if (player.wsca01.mul(variab.wscm01).mul(new Decimal(0.025)).gte(player.energy) & player.energy.gte(10)) getAch(13);
    if (player.wscb01.eq(1) & player.wscb02.eq(1) & player.wscb03.eq(1) & player.wscb04.eq(1) & player.wscb05.eq(1) & player.wscb06.eq(1) & player.wscb07.eq(1) & player.wscb08.eq(1)) getAch(14);
    if (player.wscb04.gte(20) & player.wscb05.eq(0) & player.wscb06.eq(0) & player.wscb07.eq(0) & player.wscb08.eq(0)) getAch(15);

    if (player.PL1tms.gt(0)) getAch(16);
    if (player.PL1energy.gte(1e6)) getAch(17);
    if (player.energy.root(1024).floor().gte(100)) getAch(18);
    if (player.normchacom[0] & player.normchacom[1] & player.normchacom[2] & player.normchacom[3] & player.normchacom[4] &player.normchacom[5] & player.normchacom[6] & player.normchacom[7] & player.normchacom[8] & player.normchacom[9] &player.normchacom[10] & player.normchacom[11]) getAch(19);
    if (player.wscb16.gt(0)) getAch(20);
    if (player.PL1upg[15] == true) getAch(21);
    if (player.PL1bab01.eq(5) & player.PL1bab02.eq(5) & player.PL1bab03.eq(5) & player.PL1bab04.eq(5) & player.PL1bab05.eq(5) & player.PL1bab06.eq(5) & player.PL1bab07.eq(5) & player.PL1bab08.eq(5) & player.PL1bab09.eq(5)) getAch(22);
    if (player.hasunlockedanmorb == true) getAch(23);
    if (player.parupg04.gte(10)) getAch(24);
    if (player.chacom01.add(player.chacom02).add(player.chacom03).add(player.chacom04).gte(16)) getAch(25);
    if (variab.wscm08.gt(variab.wscm07)) getAch(26);
    if (player.tier01.eq(0) & player.tier02.eq(0) & player.energy.gte(1e308)) getAch(27);
    if (player.wscb01.eq(1) & player.energy.gte(1e308)) getAch(28);
    if (player.PL1bab04.eq(0) & player.PL1bab05.eq(0) & player.PL1bab06.eq(0) & variab.wscmpb.gte(100) & player.energy.gte(4)) getAch(29);
    if (player.incha == 1 & player.energy.gte("1e30720")) getAch(30);
    if (player.energy.gte("1e200000") & player.orbupg == [0,0,0,0] ) getAch(31);

    if (player.PL2tms.gt(0)) getAch(32);
    if (player.elmt01.gte(1) & player.elmt02.gte(1) & player.elmt03.gte(1) & player.elmt04.gte(1)) getAch(33);
    if (player.PL2tms.gte(1000)) getAch(34);
    if (player.std[6] == true) getAch(35);
    if (player.wscb24.gt(0)) getAch(36);
    if (player.PL2pts.gt("1.797e308")) getAch(37);
    if (player.alcu01.gte(10)) getAch(38);
    if (player.hasunlockedanm2 == true) getAch(39);
    if (player.inzyts == true & player.energy.gte("1e1e10")) getAch(40);
    if (player.anm2.gte(1e30)) getAch(41);
    if (player.tier01.eq(0) & player.PL1pts.gte("1.8e308")) getAch(42);
    if (player.upgd01.eq(0) & player.upgd02.eq(0) & player.upgd03.eq(0) & player.upgd04.eq(0) & player.PL1pts.gte("1e1233")) getAch(43);
    if (player.std[0] == false & player.PL1pts.gte("1e4932")) getAch(44);
    if (player.elmt01.eq(2) & player.elmt02.eq(8) & player.elmt03.eq(18) & player.elmt04.eq(32)) getAch(45);
    if (player.inzyts == true & player.incha != 0) getAch(46);
    if (player.thrmttl.gte(1200) & player.alcspd.gte(400)) getAch(47);

    if (player.PL3tms.gt(0)) getAch(48);
    if (player.resa01.gte(6)) getAch(49);
}

/*弹出提示*/
function shownoti(notiname) {
    var noti = document.querySelector(notiname);
    noti.classList.add("show");
    setTimeout(function () { noti.classList.remove("show"); }, 4000);
}

/*快捷键*/
document.addEventListener("keydown", hotkeys);
function hotkeys(event) {
    switch (event.keyCode) {
        case 32:
            maxAll();
            break;

        case 49:
            maxAll08();
            break;
        case 50:
            maxAll16();
            break;
        case 51:
            maxAll24();
            break;
        case 52:
            maxAll32();
            break;

        case 81:
            incTier1();
            break;
        case 87:
            incTier2();
            break;
        case 69:
            incTier3();
            break;
        case 82:
            incTier4();
            break;

        case 65:
            buyUpgd(1);
            break;
        case 83:
            buyUpgd(2);
            break;
        case 68:
            buyUpgd(3);
            break;
        case 70:
            buyUpgd(4);
            break;

        case 90:
            PL1reset();
            break;
        case 88:
            PL2reset();
            break;
        case 67:
            PL3reset();
            break;
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
    time(diff);
    getWscMult();
    getWscPow();
    getWscMultPerBuy();
    getWscCost();
    getWscBaseValue();
    getTierCost();
    getUpgdMult();
    getUpgdCost();
    getPL1engMul()
    getPL1engPow();
    getBabCost();
    getParupgCost();
    getChaGoal();
    comNormCha();
    comCha();
    getPL2engMul();
    getPL2engPow();
    getPL2upgCost();
    getelmtamt();
    getelmtps();
    getfreeupg();
    getthrcost();
    getalc();
    getanm2();
    getPL3engMul();
    getPL3engPow();
    getres();
    autoBuyFast();
    comAch();
    styleDisplay();
    updateGUI();
    if (player.hasUnlockedPL1 == false) fixInfinity();
}

function autoBuyLoop() {
    autoBuyWsc(1);
    autoBuyWsc(2);
    autoBuyWsc(3);
    autoBuyWsc(4);
    autoBuyWsc(5);
    autoBuyWsc(6);
    autoBuyWsc(7);
    autoBuyWsc(8);
    autoBuyTier01();
    autoBuyTier02();
    autoBuyUpgd01();
    autoBuyUpgd02();
}

function autoBuyFast() {
    if (player.normchacom[0] == true) autoBuyWsc(1);
    if (player.normchacom[1] == true) autoBuyWsc(2);
    if (player.normchacom[2] == true) autoBuyWsc(3);
    if (player.normchacom[3] == true) autoBuyWsc(4);
    if (player.normchacom[4] == true) autoBuyWsc(5);
    if (player.normchacom[5] == true) autoBuyWsc(6);
    if (player.normchacom[6] == true) autoBuyWsc(7);
    if (player.normchacom[7] == true) autoBuyWsc(8);
    if (player.PL2upg01.gte(1)) autoBuyWsc(9);
    if (player.PL2upg01.gte(2)) autoBuyWsc(10);
    if (player.PL2upg01.gte(3)) autoBuyWsc(11);
    if (player.PL2upg01.gte(4)) autoBuyWsc(12);
    if (player.PL2upg01.gte(5)) autoBuyWsc(13);
    if (player.PL2upg01.gte(6)) autoBuyWsc(14);
    if (player.PL2upg01.gte(7)) autoBuyWsc(15);
    if (player.PL2upg01.gte(8)) autoBuyWsc(16);
    if (player.resa05.gte(1)) {
        autoBuyWsc(17);
        autoBuyWsc(18);
        autoBuyWsc(19);
        autoBuyWsc(20);
        autoBuyWsc(21);
        autoBuyWsc(22);
        autoBuyWsc(23);
        autoBuyWsc(24);
    }

    if (player.normchacom[8] == true) autoBuyTier01();
    if (player.normchacom[9] == true) autoBuyTier02();
    if (player.PL2tms.gte(9)) autoBuyTier03();
    if (player.alcu[0] == true) autoBuyTier04();

    if (player.normchacom[10] == true) autoBuyUpgd01();
    if (player.normchacom[11] == true) autoBuyUpgd02();
    if (player.PL2tms.gte(7)) autoBuyUpgd03();
    if (player.PL2tms.gte(7)) autoBuyUpgd04();

    autobuyparupg();
}

updateGUI();

var prod=setInterval(produce, 50);

setInterval(mainLoop, 50);

setInterval(save, 60000);

setInterval(autoBuyLoop, 1000);

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
        "“即使未曾找到仙境，那我便自己制造仙境”,就这样，砂糖开始了她研习生物炼金的道路，将自己无尽的好奇心倾注其中",
        "“生物炼金”的诸多课题，来自砂糖对万物抱有的疑问，而疑问的源头，则是她比谁都要炽热的好奇心",
        "风灵作成的原理：砂糖利用炼金术把风元素浓缩到形成无相之风的本体的程度塞进瓶子里然后扔出去使其进入超扩散态使得风元素迅速凝聚而持续产生牵引力",
        "百岁珊风系辅助采用百年未被改变和触动过的风元素，为提瓦特少见的优质风系辅助之一，风中贵族，百岁珊",
        "树桩等于停止，盒子等于推动，漩涡等于胜利，喵喵等于你！",
        "游戏当中似乎有一些具有相当高的大数学潜力，那么研究这种题材类型的增量游戏是否能作为大数学的一种科普呢？",
        "自从某个游戏问世以后，“增量游戏” 已经从 “放置游戏” 中独立出来，自成一派。这些 “增量游戏” 的增长速度不低于指数增长甚至超指数增长",
        "增量游戏(Incremental Game)是一类旨在通过大量的点击、挂机等简单重复劳动，获取随时间增长的资源的游戏，在增量游戏中，玩家最初会以很低的速度获取资源，但通过建造建筑、购买升级等途径，玩家获取资源的速率会以指数形式上涨，持有的资源量也会增长到天文数字。在满足一定条件后，玩家还可以重置当前的进度，以换取各种加成，或者解锁各种新资源",/*50*/
        "谁知道这个单机游戏为啥还没排行榜啊啊啊？",
        "由于风元素生物以某种方式知道它们明天会怎样，因此股市暴跌",
        "这里是6308概率频道，我们讨厌毛线，所以传感器给你打了(电话)！",
        "为什么我还没有解锁玖式风灵作成？因为你上一式风灵作成的评级还没有达到S哦，请继续努力！",
        "如果有1.797e308位的计算机，能不能带动1024个增量游戏一起挂？",
        "我本来和你一样也是风灵的化身，直到有一天，我的膝盖出了问题",
        "看见了吗？刚刚试验体因为玩了风灵作成使自己的甜度提升了1.797e308倍",
        "在2222年，风灵作成有高达30593个成就，6308个维度，75个阶层，并以5小时后更新的速度恒定更新",
        "在作成风灵时，会根据风灵作成的技术获得“奇怪的, 普通的, 美味的”三种风灵中的一种，并且作成风灵后与砂糖的好感度会增加",
        "你说的对，但是《风灵作成》是由6左爷6自主研发的一款全新开放世界增量游戏。游戏发生在一个被称作「风灵仙境」的幻想世界，在这里，被6左爷6选中的人将被授予「风元素」，导引扩散之力。你将扮演一位名为「player.energy」的神秘角色，在漫长的硬挂中邂逅条件各异、加成独特的升级们，和他们一起击败挑战，找回失散的朋友——同时，逐步发掘「生物炼金」的真相。",/*60*/
        "本增量游戏中的数字全部采用科学计数法，如果有任何问题请拨打电话1.331e10",
        "看起来你被困在了一片无尽土地上。你出不去，你只能在地上种些树苗，来打发时间",
        "有一片边长一光年的土地，一个人每隔一亿年来种一株边长一厘米的四叶草，等土地种满了四叶草，永远的第一秒就过去了",
        "beef其实是在Googology(大数学)中的名词，表示beef数阵，中文全称是鲍尔斯爆炸爆炸函数",
        "符号Ξ，相当于一个超越任何的数(或者不是数)，它远远超越自己，绝对凌驾于自己，而且严格的凌驾于自己",
        "有机数学（鹰语：Organic Mathematics）是研究有机数的性质、结构、运算、应用的一门学科，是数学的一个重要分支",
        "需要注意的是，并不是所有含碳的数学都是有机数学，就像含碳化合物不一定是有机物一样",
        "在强锑场条件下，氢原子会被电离为质子与电子，将质子轰击氦3的原子核，强相互作用力会无法支持电磁力，导致原子核裂开",
        "水变油，是锑星伟大的超理学家、著名超理学家委员会成员王洪成先生受著名超理学家Trave Thiruin先生启发发明的一项超理技术，由廉价的氧烷为原料，合成了烃类。",
        "早期的超理学家在对熔融状态下的镉进行发功时，发现在熔融镉的八个方向会由于复杂的超理反应沉积八种元素：硒、硅、氖、镍、碲、钛、铁、钅菲（Se、Si、Ne、Ni、Te、Ti、Fe、Fi），将镉围成一圈，因此这种现象被称之为“熔镉八围”。这时候八围的八种元素可以发生一些特殊的反应，反应的产物取决于反应物的量，遵循字母守恒定律，比较复杂，例如：4Ti+3Ne+2Si+Fe→INTP",/*70*/
        "让我们谈谈自由，和在自由中淹没的帆船",
        "我们生活在大地上，但我们的梦想超越天空", 
        "俄罗斯不仅有方块，不仅有套娃，还有 e l s e 语句",
        "快去测试模拟宇宙",
        "首先确定一条公理：即使放诸宇宙尺度，作者也是万年一遇的超级天才，重申一句，作者并非不知廉耻，而是廉耻之于作者，屁也不是",
        "星神“虚无”，名称Ⅸ，Ⅸ是罗马数字的9",
        "尝试给复制品添加思想，却发现复制品脑子里都是复制",
        "Introvert,iNtuitive,Thinking,Perceiving",
        "这一切有什么意义？没有什么意义？没有没什么意义？",
        "斯马特，绝对论之神，于大数历2268年3月6日诞生，起初曾是陨石，坠落到火山口里后被欧米茄改造成机器人，拥有了正常人的意识和正常人难以想象的力量，100岁的时候提出了绝对论，成为了绝对论之神和绝对论部长",/*80*/
        "为庆祝中秋国庆连假，宇宙学部门进行实验，在研究设施内制造黑洞，目标是将时间加速到180倍",
        "但由于操作不当，导致黑洞反转变成大规模减慢时间，就在他们焦头烂额的研究如何解决问题的时候，设施外面已经乱作一团",
        "只见设施外的工作人员发现设施里面的人员整整四个小时都没有任何回应，以为里面的人员发动叛乱了，准备直接武力攻破设施",
        "但就在这时，一旁的时间异常部门主管SCP-5616敏锐的察觉到了问题:SCP-5616利用时间异常设备发现设施内的时间流速正在飞速降慢",
        "现在已经到了设施内时间比外部时间慢几千倍的程度，再这样下去整个设施的时间将会停止，把里面的人全部像以前的SCP-5616一样永远困在里面",
        "宇宙学部在此提醒：实验千万条，安全第一条，操作不规范，亲人两行泪",
        "THE EVERYTHING FINAL OF Ω OF FINAL EVERYTHING THE",
        "是用纯数学绝对连续的物质做的",
        "EMOMOMOMO",
        "今早我来到饼干研究中心，发现每一个研究员都在埋头努力工作。粒子物理学研究员Pollux正在研究斯格明子，并且他还兼任天体物理学研究员的工作，研究传送门和奇点；我继续往前走，看到几个研究员在津津有味地讨论中子星和超新星爆发，还有一间实验室里面有研究员在做熵的研究工作；最后我走到SCP-CN-1630的办公室里面，发现他正在和SCP-5616一起研究黑洞来加速时间速度，但是研究课题太难了，SCP-CN-1630一气之下直接使用自己的能力扭曲现实来到了量子领域把大量的幽灵光子聚集坍缩成黑洞，顺利完成了制造黑洞的任务。随后，Pollux在研究天体物理学时发现了一个反物质的天体，它非常靠近一个宇宙吸引子，于是他坐上火箭前去探索，在中途打开计算器进行数位计算模拟计算器进化，结果他刚到半路就看到反物质的天体周围的现实发生了世界末日，他吓得赶紧进行修补现实，然后打开虫洞回到地球，把自己刚刚的经历和SCP-CN-1630交代，还拿出一个现实碎片来做证明，大家都十分惊讶。",/*90*/
        "汉化版打开游戏就能找到句号。",
        "给他一个时间速度加成，他敢把价格卖到114514 lodeverse",
        "增量的反义词是减魖",
        "我要找阮梅研究生物炼金",
        "打破希格斯玻色子:f_BO(1.8e308)",
        "数学大厦又倒塌了",
        "0+0是宇宙万法的那个源头",
        "在黑塔的模拟宇宙中寻找灵感",
        "『风灵作成』已经触手可及",
        "近日有网友表示，在某增量游戏新闻播放器上看到一则重要到有时间旅行者提醒的新闻，由于虫洞质量不断扩大，粒子物理学研究员Pollux和粒子超理学研究员天才俱乐部#83黑塔通过虫洞在反物质宇宙相遇，物理学家建议创造更大的虫洞。某一数学家兼物理学家利用伽罗瓦理论庞加莱猜想的庞加莱回归定理和伽马函数算出了天价虫洞已经来到了arv ^ 1024，不过我们还是不知道他们两个是怎么掉进这么大的虫洞的，可能是被自动幽灵一脚踢进虫洞。据研究员Pollux报告，他先前由于某个由于机密不能披露的异常影响导致视觉能力严重下降，来到反物质宇宙后因为反物质的时间效应迅速恢复，他表示以后天体物理学研究要加紧研究虫洞。为此五星上将麦克阿瑟表示，要是我有这么大的虫洞，我当年的军衔一定不止五星，至少也得有50星，就连SCP - CN - 1630都表示，这43年来，我天天被人注射记忆删除药剂，没得睡过一次好觉，要是我有这么大的虫洞一定得进去放个C类通道，然后在里面睡一觉，不仅可以体验相对论时间膨胀，还可以带薪休假。大型纪录片之《IMR 0.8天价虫洞卖出了arv ^ 1024》持续为您播放",/*100*/
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