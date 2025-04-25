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
                "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f",
                "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f",
                "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f",
                "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f",
                "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f",
                "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f",
                "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af",
                "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf",
                "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf",
                "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df",
                "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef",
                "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff",
];
Decimal.prototype.hyp = function (value) { return hyp(this, value); }
Decimal.prototype.pwb = function (value) { return this.pow_base(value); }
function N(num) { return new Decimal(num); }
var prod;
var player;
var v;

function hardReset() {
    /*存档数值*/
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
        wscb33: new Decimal(0),
        wscb34: new Decimal(0),
        wscb35: new Decimal(0),
        wscb36: new Decimal(0),
        wscb37: new Decimal(0),
        wscb38: new Decimal(0),
        wscb39: new Decimal(0),
        wscb40: new Decimal(0),
        wscb41: new Decimal(0),
        wscb42: new Decimal(0),
        wscb43: new Decimal(0),
        wscb44: new Decimal(0),
        wscb45: new Decimal(0),
        wscb46: new Decimal(0),
        wscb47: new Decimal(0),
        wscb48: new Decimal(0),

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
        wsca33: new Decimal(0),
        wsca34: new Decimal(0),
        wsca35: new Decimal(0),
        wsca36: new Decimal(0),
        wsca37: new Decimal(0),
        wsca38: new Decimal(0),
        wsca39: new Decimal(0),
        wsca40: new Decimal(0),
        wsca41: new Decimal(0),
        wsca42: new Decimal(0),
        wsca43: new Decimal(0),
        wsca44: new Decimal(0),
        wsca45: new Decimal(0),
        wsca46: new Decimal(0),
        wsca47: new Decimal(0),
        wsca48: new Decimal(0),

        tier01: new Decimal(0),
        tier02: new Decimal(0),
        tier03: new Decimal(0),
        tier04: new Decimal(0),
        tier05: new Decimal(0),
        tier06: new Decimal(0),
        tier07: new Decimal(0),
        tier08: new Decimal(0),
        tier01conf: false,
        tier02conf: false,
        autobuytier01: false,
        autobuytier02: false,
        autobuytier03: false,
        autobuytier04: false,
        autobuytier05: false,
        autobuytier06: false,
        autobuytier07: false,
        autobuytier08: false,

        upgd01: new Decimal(0),
        upgd02: new Decimal(0),
        upgd03: new Decimal(0),
        upgd04: new Decimal(0),
        upgd05: new Decimal(0),
        upgd06: new Decimal(0),
        upgd07: new Decimal(0),
        upgd08: new Decimal(0),
        autobuyupgd01: false,
        autobuyupgd02: false,
        autobuyupgd03: false,
        autobuyupgd04: false,
        autobuyupgd05: false,
        autobuyupgd06: false,
        autobuyupgd07: false,
        autobuyupgd08: false,

        hasUnlockedPL1: false,
        PL1energy: new Decimal(1),
        PL1pts: new Decimal(0),
        PL1ptsttl: new Decimal(0),
        PL1tms: new Decimal(0),
        PL1sec: new Decimal(0),
        PL1secrl: new Decimal(0),
        PL1conf: true,

        PL1upg: [false, false, false, false,
                 false, false, false, false,
                 false, false, false, false,
                 false, false, false, false,
                 false, false, false, false,
                 false, false, false, false,],
        alef: new Decimal(0),
        beth: new Decimal(0),
        giml: new Decimal(0),
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
        orbupg: [false, false, false, false, false, false, false, false,],
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
        chacom09: new Decimal(0),
        chacom10: new Decimal(0),
        chacom11: new Decimal(0),
        chacom12: new Decimal(0),
        chacom13: new Decimal(0),
        chacom14: new Decimal(0),
        chacom15: new Decimal(0),
        chacom16: new Decimal(0),

        hasUnlockedPL2: false,
        PL2energy: new Decimal(1),
        PL2pts: new Decimal(0),
        PL2ptsttl: new Decimal(0),
        PL2tms: new Decimal(0),
        PL2sec: new Decimal(0),
        PL2secrl: new Decimal(0),
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
        alcswt: new Decimal(0),
        alch01: new Decimal(0),
        alch02: new Decimal(0),
        alch03: new Decimal(0),
        alch04: new Decimal(0),
        alch05: new Decimal(0),
        alch06: new Decimal(0),
        alca: [false, false, false, false, false, false, false, false],
        alcu01: new Decimal(0),
        alcu02: new Decimal(0),
        alcu03: new Decimal(0),
        alcu04: new Decimal(0),
        alcu05: new Decimal(0),
        alcu06: new Decimal(0),
        alcu: [false, false, false, false, false, false, false, false],
        hasunlockedanm2: false,
        infytx: false,
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
        PL3secrl: new Decimal(0),
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
        resa09: new Decimal(0),
        resa10: new Decimal(0),
        resa11: new Decimal(0),
        resa12: new Decimal(0),
        resa13: new Decimal(0),
        resa14: new Decimal(0),
        resa15: new Decimal(0),
        resa16: new Decimal(0),
        resp01: new Decimal(0),
        resp02: new Decimal(0),
        resp03: new Decimal(0),
        resp04: new Decimal(0),
        resp05: new Decimal(0),
        resp06: new Decimal(0),
        resp07: new Decimal(0),
        resp08: new Decimal(0),
        resp09: new Decimal(0),
        resp10: new Decimal(0),
        resp11: new Decimal(0),
        resp12: new Decimal(0),
        resp13: new Decimal(0),
        resp14: new Decimal(0),
        resp15: new Decimal(0),
        resp16: new Decimal(0),
        ptn: [false, false, false, false, false, false, false, false,],
        ptnu01: new Decimal(0),
        ptnu02: new Decimal(0),
        ptnu03: new Decimal(0),
        ptnu04: new Decimal(0),
        tthamnt: new Decimal(0),
        tthsize: new Decimal(1),
        tthgrow: new Decimal(0),
        ingrow: false,
        tthseed: new Decimal(0),
        tthgene: new Decimal(0),
        tthsucr: new Decimal(0),
        tthimpr: new Decimal(1),
        tthatunl: [false, false, false, false, false, false,],
        tthatact: [false, false, false, false, false, false,],
        tthu01: new Decimal(0),
        tthu02: new Decimal(0),
        tthu03: new Decimal(0),
        tthu04: new Decimal(0),
        tthpres: new Decimal(0),
        tthprem: new Decimal(1),
        tthpu: [false, false, false, false,],
        tthpu1: new Decimal(0),
        tthpu2: new Decimal(0),
        tthpu3: new Decimal(0),
        tthpu4: new Decimal(0),
        xyzx: new Decimal(0),
        xyzy: new Decimal(0),
        xyzz: new Decimal(0),
        xyzt: new Decimal(0),
        xyzu: [false, false, false, false,],
        xyzsw: new Decimal(0),
        xyzbo: new Decimal(0),
        xyze: new Decimal(0),
        xyzf: new Decimal(0),
        xyzg: new Decimal(0),
        xyzh: new Decimal(0),
        xyzegn: new Decimal(0),
        xyzfgn: new Decimal(0),
        xyzggn: new Decimal(0),
        xyzhgn: new Decimal(0),
        hasunlockedanm3: false,
        anm3: new Decimal(0),
        anm3u01: new Decimal(0),
        anm3u02: new Decimal(0),
        anm3u03: new Decimal(0),
        anm3u04: new Decimal(0),
        anm3u : [false, false, false, false,],
        inreac: false,
        reacp: new Decimal(0),
        reacm1: new Decimal(1),
        reacm2: new Decimal(0),
        cata: new Decimal(1),
        convu: [
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
            false, false, false, false,
        ],
        convr: [false, false, false, false,],
        convc: [false, false, false, false,],
        convn: new Decimal(0),
        convp: new Decimal(0),

        hasUnlockedPL4: false,
        PL4energy: new Decimal(1),
        PL4pts: new Decimal(0),
        PL4ptsttl: new Decimal(0),
        PL4tms: new Decimal(0),
        PL4sec: new Decimal(0),
        PL4secrl: new Decimal(0),
        PL4conf: true,

        PL4goal: [false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
        ],
        sta8n1: true,
        PL4fra: new Decimal(0),
        PL4frattl: new Decimal(0),
        frau01: new Decimal(0),
        frau02: new Decimal(0),
        frau03: new Decimal(0),
        frau04: new Decimal(0),
        frau05: new Decimal(0),
        frau06: new Decimal(0),
        frau07: new Decimal(0),
        frau08: new Decimal(0),
        frau09: new Decimal(0),
        frau10: new Decimal(0),
        bogglebox: new Decimal(0),
        bogglettl: new Decimal(0),
        boxa1: new Decimal(0),
        boxa2: new Decimal(0),
        hdrn4: new Decimal(0),
        hdrn6: new Decimal(0),
        hdrn8: new Decimal(0),
        hdrn12: new Decimal(0),
        hdrn20: new Decimal(0),
        hdrn4w: new Decimal(0),
        hdrn6w: new Decimal(0),
        hdrn8w: new Decimal(0),
        hdrn12w: new Decimal(0),
        hdrn20w: new Decimal(0),
        wxzf: new Decimal(0),
        hydf: new Decimal(0),
        xkwz: new Decimal(0),
        zzlt: new Decimal(0),
        zzltw: new Decimal(0),
        zzltu: [false, false, false, false, false,],
        stage: new Decimal(1),
        stgcl: new Decimal(0),
        stgmx: new Decimal(1),
        coin: new Decimal(0),
        atk: new Decimal(0),
        btk: new Decimal(0),
        ctk: new Decimal(0),
        dtk: new Decimal(0),
        rhp: new Decimal(0),
        skpthv: new Decimal(0),
        skptcp: new Decimal(0),
        sklv01: new Decimal(0),
        sklv02: new Decimal(0),
        sklv03: new Decimal(0),
        sklv04: new Decimal(0),
        syna01: new Decimal(0),
        syna02: new Decimal(0),
        syna03: new Decimal(0),
        syna04: new Decimal(0),
        syna05: new Decimal(0),
        synfcs: 0,
        synu01: new Decimal(0),
        synu02: new Decimal(0),
        synu03: new Decimal(0),
        synu04: new Decimal(0),
        synu05: new Decimal(0),
        synu06: new Decimal(0),
        synu07: new Decimal(0),
        synu08: new Decimal(0),
        synu09: new Decimal(0),
        synu10: new Decimal(0),
        synu11: new Decimal(0),
        synu12: new Decimal(0),
        synu13: new Decimal(0),
        synu14: new Decimal(0),
        synu15: new Decimal(0),
        hasunlockedanm4: false,
        incyzb: false,
        shdwsl: [false,
            false, false,
            false, false, false,
            false, false, false, false,
            false, false, false,
            false, false,
            false,],
        shdwlv01: new Decimal(0),
        shdwlv02: new Decimal(0),
        shdwlv03: new Decimal(0),
        shdwlv04: new Decimal(0),
        shdwrc: new Decimal(0),
        anm4: new Decimal(0),
        anm4u01: new Decimal(0),
        anm4u02: new Decimal(0),
        anm4u03: new Decimal(0),
        anm4u04: new Decimal(0),
        ntmtmr: new Decimal(30),
        ntmv: new Decimal(0),
        nrev: new Decimal(0),
        ntmu03: new Decimal(0),
        ntmu04: new Decimal(0),
        ntmr01: new Decimal(0),
        ntmr02: new Decimal(0),
        ntmr03: new Decimal(0),
        ntmr04: new Decimal(0),
        ntmr05: new Decimal(0),
        ntmr06: new Decimal(0),

        hasUnlockedPL5: false,
        PL5energy: new Decimal(1),
        PL5pts: new Decimal(0),
        PL5ptsttl: new Decimal(0),
        PL5tms: new Decimal(0),
        PL5sec: new Decimal(0),
        PL5secrl: new Decimal(0),
        PL5conf: true,

        depth: 1,
        quant: new Decimal(1),
        quau: [false, false, false, false, false, false,
            false, false, false, false, false, false,
            false, false, false, false, false, false,
            false, false, false, false, false, false,
        ],
        quafil01: new Decimal(0),
        quafil02: new Decimal(0),
        quafil03: new Decimal(0),
        quafil04: new Decimal(0),
        xbmu01: new Decimal(0),
        xbmu02: new Decimal(0),
        xbmu03: new Decimal(0),
        xbmu04: new Decimal(0),
        xbmu05: new Decimal(0),
        xbmu06: new Decimal(0),
        xbmu07: new Decimal(0),
        xbmu08: new Decimal(0),
        Rliteng: new Decimal(0),
        Bliteng: new Decimal(0),
        Rlitengp: new Decimal(1),
        Blitengp: new Decimal(1),
        carbu: [false, false, false, false],
        carba1: new Decimal(0),
        carba2: new Decimal(0),
        carba3: new Decimal(0),
        carba4: new Decimal(0),
        EMenergy: new Decimal(0),
        slwa01: new Decimal(1),
        slwa02: new Decimal(1),
        slwa03: new Decimal(1),
        slwa04: new Decimal(1),
        slwa05: new Decimal(1),
        slwa06: new Decimal(1),
        slwa07: new Decimal(1),
        slwa08: new Decimal(1),
        slwb01: new Decimal(1),
        slwb02: new Decimal(1),
        slwb03: new Decimal(1),
        slwb04: new Decimal(1),
        slwb05: new Decimal(1),
        slwb06: new Decimal(1),
        slwb07: new Decimal(1),
        slwb08: new Decimal(1),

        hasUnlockedPL6: false,

        hasUnlockedPL7: false,

        hasUnlockedPLw: false,

        hasUnlockedPLw2: false,

        autobuywsc: [null,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
        ],
        ach: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
              false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
              false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
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
        gameseconds: new Decimal(0),

        nowtime: 0,
        news: true,
        hotk: true,
        oflntm: 0,
        oflnpw: 0,
        fyjj: false,
        gmrn: true,
    }

    /*其他数值*/
    v = {
        glbspd: 1,
        preps: new Decimal(0),
        energyps: new Decimal(0),
        baseprd: new Decimal(0.25),

        gamespd1: new Decimal(1),
        gamespd2: new Decimal(1),
        gamespd3: new Decimal(1),
        gamespd4: new Decimal(1),
        softcap: new Decimal(1),
        softcap2: new Decimal(1),
        softcap3: new Decimal(1),
        softcap4: new Decimal(1),
        wscmpb: new Decimal(1.6),
        wscppb: new Decimal(1.001),

        scal01: new Decimal(1024),
        scal02: new Decimal(1099511627776),
        scal03: new Decimal(1.329227995784915e36),
        scal04: new Decimal(2.135987035920910e96),
        scal05: new Decimal(6.668014432879854e240),
        scal06: new Decimal("9.497114518078914e577"),
        scal07: new Decimal("4.115101717688653e1348"),
        scal08: new Decimal("3.524971412108382e3082"),

        scaltier01: new Decimal(16),
        scaltier02: new Decimal(1048576),
        scaltier03: new Decimal(1.267650600228229e30),
        scaltier04: new Decimal(3.273390607896141e150),
        scaltier05: new Decimal("1e800"),
        scaltier06: new Decimal("1e4000"),
        scaltier07: new Decimal("1e20000"),
        scaltier08: new Decimal("1e100000"),

        scalupgd01: new Decimal(100),
        scalupgd02: new Decimal(1e8),
        scalupgd03: new Decimal(1e24),
        scalupgd04: new Decimal(1e64),
        scalupgd05: new Decimal(1e160),
        scalupgd06: new Decimal("1e384"),
        scalupgd07: new Decimal("1e896"),
        scalupgd08: new Decimal("1e2048"),

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
        wscc33: new Decimal(2),
        wscc34: new Decimal(4),
        wscc35: new Decimal(16),
        wscc36: new Decimal(256),
        wscc37: new Decimal(65536),
        wscc38: new Decimal(4294967296),
        wscc39: new Decimal(1.844674407370955e19),
        wscc40: new Decimal(3.402823669209384e38),
        wscc41: new Decimal(2),
        wscc42: new Decimal(4),
        wscc43: new Decimal(16),
        wscc44: new Decimal(256),
        wscc45: new Decimal(65536),
        wscc46: new Decimal(4294967296),
        wscc47: new Decimal(1.844674407370955e19),
        wscc48: new Decimal(3.402823669209384e38),

        wsccor01: new Decimal(1),
        wsccor02: new Decimal(2),
        wsccor03: new Decimal(4),
        wsccor04: new Decimal(8),
        wsccor05: new Decimal(16),
        wsccor06: new Decimal(32),
        wsccor07: new Decimal(64),
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
        wsccor33: new Decimal(1),
        wsccor34: new Decimal(2),
        wsccor35: new Decimal(4),
        wsccor36: new Decimal(8),
        wsccor37: new Decimal(16),
        wsccor38: new Decimal(32),
        wsccor39: new Decimal(64),
        wsccor40: new Decimal(128),
        wsccor41: new Decimal(1),
        wsccor42: new Decimal(2),
        wsccor43: new Decimal(4),
        wsccor44: new Decimal(8),
        wsccor45: new Decimal(16),
        wsccor46: new Decimal(32),
        wsccor47: new Decimal(64),
        wsccor48: new Decimal(128),

        wsccsl01: new Decimal(2),
        wsccsl02: new Decimal(4),
        wsccsl03: new Decimal(8),
        wsccsl04: new Decimal(16),
        wsccsl05: new Decimal(32),
        wsccsl06: new Decimal(64),
        wsccsl07: new Decimal(128),
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
        wsccsl33: new Decimal(2),
        wsccsl34: new Decimal(4),
        wsccsl35: new Decimal(8),
        wsccsl36: new Decimal(16),
        wsccsl37: new Decimal(32),
        wsccsl38: new Decimal(64),
        wsccsl39: new Decimal(128),
        wsccsl40: new Decimal(256),
        wsccsl41: new Decimal(2),
        wsccsl42: new Decimal(4),
        wsccsl43: new Decimal(8),
        wsccsl44: new Decimal(16),
        wsccsl45: new Decimal(32),
        wsccsl46: new Decimal(64),
        wsccsl47: new Decimal(128),
        wsccsl48: new Decimal(256),

        wscm01: new Decimal(1),
        wscm02: new Decimal(1),
        wscm03: new Decimal(1),
        wscm04: new Decimal(1),
        wscm05: new Decimal(1),
        wscm06: new Decimal(1),
        wscm07: new Decimal(1),
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
        wscm33: new Decimal(1),
        wscm34: new Decimal(1),
        wscm35: new Decimal(1),
        wscm36: new Decimal(1),
        wscm37: new Decimal(1),
        wscm38: new Decimal(1),
        wscm39: new Decimal(1),
        wscm40: new Decimal(1),
        wscm41: new Decimal(1),
        wscm42: new Decimal(1),
        wscm43: new Decimal(1),
        wscm44: new Decimal(1),
        wscm45: new Decimal(1),
        wscm46: new Decimal(1),
        wscm47: new Decimal(1),
        wscm48: new Decimal(1),

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
        wscp33: new Decimal(1),
        wscp34: new Decimal(1),
        wscp35: new Decimal(1),
        wscp36: new Decimal(1),
        wscp37: new Decimal(1),
        wscp38: new Decimal(1),
        wscp39: new Decimal(1),
        wscp40: new Decimal(1),
        wscp41: new Decimal(1),
        wscp42: new Decimal(1),
        wscp43: new Decimal(1),
        wscp44: new Decimal(1),
        wscp45: new Decimal(1),
        wscp46: new Decimal(1),
        wscp47: new Decimal(1),
        wscp48: new Decimal(1),

        wsch01: new Decimal(1),
        wsch02: new Decimal(1),
        wsch03: new Decimal(1),
        wsch04: new Decimal(1),
        wsch05: new Decimal(1),
        wsch06: new Decimal(1),
        wsch07: new Decimal(1),
        wsch08: new Decimal(1),
        wsch09: new Decimal(1),
        wsch10: new Decimal(1),
        wsch11: new Decimal(1),
        wsch12: new Decimal(1),
        wsch13: new Decimal(1),
        wsch14: new Decimal(1),
        wsch15: new Decimal(1),
        wsch16: new Decimal(1),
        wsch17: new Decimal(1),
        wsch18: new Decimal(1),
        wsch19: new Decimal(1),
        wsch20: new Decimal(1),
        wsch21: new Decimal(1),
        wsch22: new Decimal(1),
        wsch23: new Decimal(1),
        wsch24: new Decimal(1),
        wsch25: new Decimal(1),
        wsch26: new Decimal(1),
        wsch27: new Decimal(1),
        wsch28: new Decimal(1),
        wsch29: new Decimal(1),
        wsch30: new Decimal(1),
        wsch31: new Decimal(1),
        wsch32: new Decimal(1),
        wsch33: new Decimal(1),
        wsch34: new Decimal(1),
        wsch35: new Decimal(1),
        wsch36: new Decimal(1),
        wsch37: new Decimal(1),
        wsch38: new Decimal(1),
        wsch39: new Decimal(1),
        wsch40: new Decimal(1),
        wsch41: new Decimal(1),
        wsch42: new Decimal(1),
        wsch43: new Decimal(1),
        wsch44: new Decimal(1),
        wsch45: new Decimal(1),
        wsch46: new Decimal(1),
        wsch47: new Decimal(1),
        wsch48: new Decimal(1),

        wscbaseValue: new Decimal(0),
        wscbaseValue1: new Decimal(1),
        wscbaseValue2: new Decimal(1),
        wscbaseValue3: new Decimal(1),
        wscbaseValue4: new Decimal(1),
        wscbaseValue5: new Decimal(1),
        wscbaseValue6: new Decimal(1),
        wscbaseValue7: new Decimal(1),
        wscbaseValue8: new Decimal(1),
        wscbaseValueExp: new Decimal(1),
        tierc01: new Decimal(4),
        tierc02: new Decimal(4),
        tierc03: new Decimal(4),
        tierc04: new Decimal(4),
        tierc05: new Decimal(4),
        tierc06: new Decimal(4),
        tierc07: new Decimal(4),
        tierc08: new Decimal(4),
        DBpower: new Decimal(1),
        AGpower: new Decimal(1),

        upgc01: new Decimal(256),
        upgc02: new Decimal(512),
        upgc03: new Decimal(1024),
        upgc04: new Decimal(2048),
        upgc05: new Decimal(1),
        upgc06: new Decimal(2),
        upgc07: new Decimal(4),
        upgc08: new Decimal(8),
        upgcor01: new Decimal(256),
        upgcor02: new Decimal(512),
        upgcor03: new Decimal(1024),
        upgcor04: new Decimal(2048),
        upgcor05: new Decimal(1),
        upgcor06: new Decimal(2),
        upgcor07: new Decimal(4),
        upgcor08: new Decimal(8),
        upgcsl01: new Decimal(512),
        upgcsl02: new Decimal(1024),
        upgcsl03: new Decimal(2048),
        upgcsl04: new Decimal(4096),
        upgcsl05: new Decimal(2),
        upgcsl06: new Decimal(4),
        upgcsl07: new Decimal(8),
        upgcsl08: new Decimal(16),
        upge01: new Decimal(0),
        upge02: new Decimal(0),
        upge03: new Decimal(0),
        upge04: new Decimal(0),
        upge05: new Decimal(0),
        upge06: new Decimal(0),
        upge07: new Decimal(0),
        upge08: new Decimal(0),
        upgf01: new Decimal(0),
        upgf02: new Decimal(0),
        upgf03: new Decimal(0),
        upgf04: new Decimal(0),
        upgf05: new Decimal(0),
        upgf06: new Decimal(0),
        upgf07: new Decimal(0),
        upgf08: new Decimal(0),
        upgd01mult: new Decimal(0),
        upgd02mult: new Decimal(0),
        upgd03mult: new Decimal(0),
        upgd04mult: new Decimal(0),
        upgd05mult: new Decimal(0),
        upgd06mult: new Decimal(0),
        upgd07mult: new Decimal(0),
        upgd08mult: new Decimal(0),

        PL1engmul: new Decimal(1),
        PL1engpow: new Decimal(1),

        PL1ue5: new Decimal(1),
        PL1ue6: new Decimal(1),
        PL1ue7: new Decimal(1),
        PL1ue8: new Decimal(1),

        PL1babc1: new Decimal(1024),
        PL1babc2: new Decimal(1024),
        PL1babc3: new Decimal(1024),
        PL1babcsl1: new Decimal(2),
        PL1babcsl2: new Decimal(2),
        PL1babcsl3: new Decimal(2),
        alefps: new Decimal(0),
        bethps: new Decimal(0),
        gimlps: new Decimal(0),

        anmparps: new Decimal(0),
        anmparsc: new Decimal(80),
        parupgc01: new Decimal(10),
        parupgc02: new Decimal(100),
        parupgc03: new Decimal(1000),
        parupgc04: new Decimal(80),

        chagoa01: new Decimal("1e1000"),
        chagoa02: new Decimal("1e1000"),
        chagoa03: new Decimal("1e1000"),
        chagoa04: new Decimal("1e1000"),
        chagoa05: new Decimal("1e1000000"),
        chagoa06: new Decimal("1e1000000"),
        chagoa07: new Decimal("1e1000000"),
        chagoa08: new Decimal("1e1000000"),
        chagoa09: new Decimal("e1e10"),
        chagoa10: new Decimal("e1e10"),
        chagoa11: new Decimal("e1e10"),
        chagoa12: new Decimal("e1e10"),
        chagoa13: new Decimal("e1e15"),
        chagoa14: new Decimal("e1e15"),
        chagoa15: new Decimal("e1e15"),
        chagoa16: new Decimal("e1e15"),
        charew01: new Decimal(1),
        charew02: new Decimal(1),
        charew03: new Decimal(1),
        charew04: new Decimal(1),
        charew05: new Decimal(1),
        charew06: new Decimal(1),
        charew07: new Decimal(1),
        charew08: new Decimal(1),
        charew09: new Decimal(1),
        charew10: new Decimal(1),
        charew11: new Decimal(1),
        charew12: new Decimal(1),
        charew13: new Decimal(1),
        charew14: new Decimal(1),
        charew15: new Decimal(1),
        charew16: new Decimal(1),
        PL1chacap: new Decimal(4),
        PL2chacap: new Decimal(4),
        PL3chacap: new Decimal(4),
        PL4chacap: new Decimal(4),

        PL2engmul: new Decimal(1),
        PL2engpow: new Decimal(1),

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
        alchmu: new Decimal(1),
        alcuc01: new Decimal(2),
        alcuc02: new Decimal(2),
        alcuc03: new Decimal(2),
        alcuc04: new Decimal(2),
        alcuc05: new Decimal(2),
        alcuc06: new Decimal(2),
        alcuc07: new Decimal(128),
        alcuc08: new Decimal(256),
        alcuc09: new Decimal(512),
        alcuc10: new Decimal(1024),
        alcuc11: new Decimal(2048),
        alcuc12: new Decimal(4096),

        anm2ps: new Decimal(0),
        anm2c01: new Decimal(10),
        anm2c02: new Decimal(100),
        anm2c03: new Decimal(1000),
        anm2c04: new Decimal(10000),

        PL3engmul: new Decimal(1),
        PL3engpow: new Decimal(1),
        PL3tef1: new Decimal(1),
        PL3tef2: new Decimal(1),

        resped: new Decimal(1),
        resr01: new Decimal(16),
        resr02: new Decimal(32),
        resr03: new Decimal(64),
        resr04: new Decimal(128),
        resr05: new Decimal(256),
        resr06: new Decimal(1024),
        resr07: new Decimal(4096),
        resr08: new Decimal(16384),
        resr09: new Decimal(65536),
        resr10: new Decimal(4294967296),
        resr11: new Decimal(2.8147497e14),
        resr12: new Decimal(1.8446744e19),
        resr13: new Decimal(1.2089258e24),
        resr14: new Decimal(7.9228162e28),
        resr15: new Decimal(5.1922968e33),
        resr16: new Decimal(3.4028236e38),
        rese01: new Decimal(1),
        rese02: new Decimal(1),
        rese03: new Decimal(1),
        rese04: new Decimal(1),

        ptnv: new Decimal(1),
        ptnuc01: new Decimal(4),
        ptnuc02: new Decimal(256),
        ptnuc03: new Decimal(1e308),
        ptnuc04: new Decimal(1e308),
        ptnm01: new Decimal(1),
        ptnm02: new Decimal(1),
        ptnm03: new Decimal(1),
        ptnm04: new Decimal(1),
        ptnm05: new Decimal(1),
        ptnm06: new Decimal(1),
        ptnm07: new Decimal(1),
        ptnm08: new Decimal(1),

        tthgspd: new Decimal(1),
        tthgreq: new Decimal(1),
        tthmul: new Decimal(1),
        tthpow: new Decimal(1),
        tthuc01: new Decimal(1),
        tthuc02: new Decimal(1),
        tthuc03: new Decimal(1),
        tthuc04: new Decimal(1),
        tthue01: new Decimal(1),
        tthue02: new Decimal(1),
        tthue03: new Decimal(1),
        tthue04: new Decimal(1),
        tthseedpd: new Decimal(1),
        tthgenepd: new Decimal(1),
        tthsucrpd: new Decimal(1),
        tthimpc: new Decimal(5),
        tthprespd: new Decimal(1),
        tthprempd: new Decimal(1),
        tthpuc1: new Decimal(2),
        tthpuc2: new Decimal(16),
        tthpuc3: new Decimal(512),
        tthpuc4: new Decimal(65536),
        cpper: new Decimal(0),

        xyze1: new Decimal(0),
        xyze2: new Decimal(0),

        anm3ps: new Decimal(0),
        anm3c01: new Decimal(10),
        anm3c02: new Decimal(100),
        anm3c03: new Decimal(1000),
        anm3c04: new Decimal(10000),
        blcnt: new Decimal(1),

        convmx: new Decimal(0),
        convnx: new Decimal(0),
        convp01: new Decimal(0),
        convp02: new Decimal(0),
        convp03: new Decimal(0),
        convp04: new Decimal(0),
        convp05: new Decimal(0),
        convp06: new Decimal(0),
        convp07: new Decimal(0),
        convp08: new Decimal(0),
        convp09: new Decimal(0),
        convp10: new Decimal(0),
        convp11: new Decimal(0),
        convp12: new Decimal(0),
        convp13: new Decimal(0),
        convp14: new Decimal(0),
        convp15: new Decimal(0),
        convp16: new Decimal(0),

        PL4engmul: new Decimal(1),
        PL4engpow: new Decimal(1),

        fraft1: new Decimal(1),
        fraft2: new Decimal(1),
        fraft3: new Decimal(1),
        fraft4: new Decimal(1),
        frauc01: new Decimal(1),
        frauc02: new Decimal(1),
        frauc03: new Decimal(1),
        frauc04: new Decimal(1),
        frauc05: new Decimal(1),
        frauc06: new Decimal(1),
        frauc07: new Decimal(1),
        frauc08: new Decimal(1),
        frauc09: new Decimal(1),
        frauc10: new Decimal(1),
        fraue01: new Decimal(0),
        fraue02: new Decimal(0),
        fraue03: new Decimal(0),
        fraue04: new Decimal(0),
        fraue05: new Decimal(0),
        fraue06: new Decimal(0),
        fraue07: new Decimal(0),
        fraue08: new Decimal(0),
        fraue09: new Decimal(0),
        fraue10: new Decimal(0),

        boxc1: new Decimal(65536),
        boxc2: new Decimal(256),
        hdrn4e: new Decimal(0),
        hdrn6e: new Decimal(0),
        hdrn8e: new Decimal(0),
        hdrn12e: new Decimal(0),
        hdrn20e: new Decimal(0),
        hdrn4wps: new Decimal(0),
        hdrn6wps: new Decimal(0),
        hdrn8wps: new Decimal(0),
        hdrn12wps: new Decimal(0),
        hdrn20wps: new Decimal(0),
        wxzfe: new Decimal(1),
        hydfe: new Decimal(1),
        xkwze: new Decimal(1),
        zzltwps: new Decimal(0),
        ltwum1: new Decimal(1),
        ltwum2: new Decimal(1),
        ltwum3: new Decimal(1),
        ltwum4: new Decimal(1),

        bpmpb: new Decimal(0),
        atke: new Decimal(0),
        btke: new Decimal(0),
        ctke: new Decimal(0),
        dtke: new Decimal(0),
        atkc: new Decimal(0),
        btkc: new Decimal(0),
        ctkc: new Decimal(0),
        dtkc: new Decimal(0),
        mhp: new Decimal(0),
        cps: new Decimal(0),
        pcps: new Decimal(0),
        skptpd: new Decimal(0),
        skptst: new Decimal(0),
        skef01: new Decimal(0),
        skef02: new Decimal(0),
        skef03: new Decimal(0),
        skef04: new Decimal(0),

        synum01: new Decimal(0),
        synum02: new Decimal(0),
        synum03: new Decimal(0),
        synum04: new Decimal(0),
        synum05: new Decimal(0),
        synum06: new Decimal(0),
        synum07: new Decimal(0),
        synum08: new Decimal(0),
        synum09: new Decimal(0),
        synum10: new Decimal(0),
        synuc01: new Decimal(0),
        synuc02: new Decimal(0),
        synuc03: new Decimal(0),
        synuc04: new Decimal(0),
        synuc05: new Decimal(0),
        synuc06: new Decimal(0),
        synuc07: new Decimal(0),
        synuc08: new Decimal(0),
        synuc09: new Decimal(0),
        synuc10: new Decimal(0),
        synps01: new Decimal(0),
        synps02: new Decimal(0),
        synps03: new Decimal(0),
        synps04: new Decimal(0),
        synps05: new Decimal(0),

        shdb01: new Decimal(1),
        shdb02: new Decimal(1),
        shdb03: new Decimal(1),
        shdb04: new Decimal(1),
        shdwpd: new Decimal(1),
        anm4ps: new Decimal(0),
        anm4c01: new Decimal(10),
        anm4c02: new Decimal(100),
        anm4c03: new Decimal(1000),
        anm4c04: new Decimal(10000),

        ntmm: new Decimal(1),
        ntma: new Decimal(1),
        ntmecd: new Decimal(30),
        ntmels: new Decimal(30),
        ntmc01: new Decimal("ee6"),
        ntmc02: new Decimal(10),
        ntmc03: new Decimal(1),
        ntmc04: new Decimal(9),
        ntme01: new Decimal(0),
        ntme02: new Decimal(0),
        ntme03: new Decimal(0),
        ntme04: new Decimal(0),
        ntme05: new Decimal(0),
        ntme06: new Decimal(0),

        PL5engmul: new Decimal(1),
        PL5engpow: new Decimal(1),

        quantps: new Decimal(1),
        quae11: new Decimal(1),
        quaef1: new Decimal(0),
        quaef2: new Decimal(0),
        quaef3: new Decimal(0),
        xbmc01: new Decimal(0),
        xbmc02: new Decimal(0),
        xbmc03: new Decimal(0),
        xbmc04: new Decimal(0),
        xbmc05: new Decimal(0),
        xbmc06: new Decimal(0),
        xbmc07: new Decimal(0),
        xbmc08: new Decimal(0),
        xbme05: new Decimal(0),
        xbme06: new Decimal(0),
        xbme07: new Decimal(0),
        xbme08: new Decimal(0),
        slwc01: new Decimal(1),
        slwc02: new Decimal(1),
        slwc03: new Decimal(1),
        slwc04: new Decimal(1),
        slwc05: new Decimal(1),
        slwc06: new Decimal(1),
        slwc07: new Decimal(1),
        slwc08: new Decimal(1),
        slwp01: new Decimal(1),
        slwp02: new Decimal(1),
        slwp03: new Decimal(1),
        slwp04: new Decimal(1),
        slwp05: new Decimal(1),
        slwp06: new Decimal(1),
        slwp07: new Decimal(1),
        slwp08: new Decimal(1),

        currentTab: "row1",
        currentPage: "p1_1",
        lastPage: [1,1,1,1,1,1,1,1,1,1,1,1],
    }
}
hardReset();

var tempPlayer = player;

load();

Object.assign(tempPlayer, player);

player = tempPlayer;

/*离线时间*/
function get_offline_time() {
    let nt = Date.now();
    let rt = 0;
    let ot = nt - player.nowtime;
    if (player.oflntm < 86400) rt = player.oflntm;
    else if (player.oflntm < 1000000) rt = Math.pow(player.oflntm / 86400, 1.526347217858322) * 86400;
    else rt = 3628800;
    if (ot > 0 & player.nowtime > 0) {
        rt = rt + (ot / 1000);
        if (rt < 86400) player.oflntm = rt;
        else if (rt < 3628800) player.oflntm = Math.pow(rt / 86400, 0.6551589234087505) * 86400;
        else player.oflntm = 1000000;
    }
    //alert("你离线了" + (ot / 1000).toFixed(0) + "秒，你的离线时间变成了" + (player.oflntm).toFixed(0) +"，可以在杂项-选项-风隐急进中使用离线时间")
}
get_offline_time();

//#region 存档
/*存档*/
function save() {
    localStorage.windSpiritCreation = btoa(JSON.stringify(player));
    shownoti("#autosave");
}

async function load() {
    clearInterval(prod);
    prod = null;
    if (localStorage.windSpiritCreation) {
        player = JSON.parse(atob(localStorage.windSpiritCreation));
        transformToDecimal(player);
    }
    //mainLoop();
    await delay(100);
    prod = setInterval(produce, 50);
}

function exportSave() {
    save();
    var output = document.getElementById("importExportText");
    output.value = btoa(JSON.stringify(player));
    shownoti("#export");
    return navigator.clipboard.writeText(btoa(JSON.stringify(player)));
}

function exportSaveFile() {
    let str = btoa(JSON.stringify(player));
    let file = new Blob([str], { type: "text/plain" });
    window.URL = window.URL || window.webkitURL;
    let a = document.createElement("a");
    a.href = window.URL.createObjectURL(file);
    a.download = "WindSpiritCreationSave-" + Date().replaceAll(" ", "_").slice(0, 24) + ".txt";
    a.click();
    shownoti("#exportfile");
}

function importSave() {
    let confirmation = confirm("您确定要导入吗？这将会覆盖当前游戏进度");
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

function importSaveFile() {
    let a = document.createElement("input");
    a.setAttribute("type", "file");
    a.click();
    a.onchange = () => {
        let fr = new FileReader();
        fr.onload = () => {
            let save2 = fr.result;
            input = JSON.parse(atob(save2));
            player = input;
            transformToDecimal(player);
            Object.assign(tempPlayer, player);
            player = tempPlayer;
        }
        fr.readAsText(a.files[0]);
    }
    shownoti("#importfile");
}

async function trueHardReset() {
    let promption = prompt("您确定要硬重置吗？输入This is the future确定");
    if (promption == "This is the future") {
        clearInterval(prod);
        prod = null;
        hardReset();
        await delay(100);
        player.energy = new Decimal(2);
        prod = setInterval(produce, 50);
        shownoti("#hardreset");
    }
}
//#endregion

//#region 游戏
/*游戏*/
function buyWsc(tier) {
    getWscCost();
    var name = tiername[tier];
    if (tier <= 8) {
        if (player.innormcha == 4 & tier >= 7) return;
        if (player.energy.gte(v["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.energy = player.energy.sub(v["wscc" + name]);
            if (player.innormcha == 3) player.normchapow = new Decimal(0);
            if (player.innormcha == 5 & tier>1) {
                    let name = tiername[tier-1];
                    player["wscb" + name] = new Decimal(0);
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
        if (player.PL1pts.gte(v["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.PL1pts = player.PL1pts.sub(v["wscc" + name]);
        }
        else return
    }
    else if (tier <= 24) {
        if (player.PL2pts.gte(v["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.PL2pts = player.PL2pts.sub(v["wscc" + name]);
        }
        else return
    }
    else if (tier <= 32) {
        if (player.PL3pts.gte(v["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.PL3pts = player.PL3pts.sub(v["wscc" + name]);
        }
        else return
    }
    else if (tier <= 40) {
        if (player.PL4pts.gte(v["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.PL4pts = player.PL4pts.sub(v["wscc" + name]);
        }
        else return
    }
    else if (tier <= 48) {
        if (player.PL5pts.gte(v["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.PL5pts = player.PL4pts.sub(v["wscc" + name]);
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
        var wsccmax = invscale(player.energy.log(2)).add(v["wsccor" + name]).div(v["wsccsl" + name]).floor();
        if (wsccmax.gt(player["wscb" + name])) {
            player["wsca" + name] = player["wsca" + name].add(wsccmax.sub(player["wscb" + name]));
            player["wscb" + name] = wsccmax.sub(1);
            getWscCost();
            player.energy = player.energy.sub(v["wscc" + name]);
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
        var wsccmax = invscale(player.PL1pts.log(2)).add(v["wsccor" + name]).div(v["wsccsl" + name]).floor();
        if (wsccmax.gt(player["wscb" + name])) {
            player["wsca" + name] = player["wsca" + name].add(wsccmax.sub(player["wscb" + name]));
            player["wscb" + name] = wsccmax.sub(1);
            getWscCost();
            player.PL1pts = player.PL1pts.sub(v["wscc" + name]);
            player["wscb" + name] = player["wscb" + name].add(1);
        }
        else return
    }
    else if (tier <= 24) {
        var wsccmax = invscale(player.PL2pts.log(2)).add(v["wsccor" + name]).div(v["wsccsl" + name]).floor();
        if (wsccmax.gt(player["wscb" + name])) {
            player["wsca" + name] = player["wsca" + name].add(wsccmax.sub(player["wscb" + name]));
            player["wscb" + name] = wsccmax.sub(1);
            getWscCost();
            player.PL2pts = player.PL2pts.sub(v["wscc" + name]);
            player["wscb" + name] = player["wscb" + name].add(1);
        }
        else return
    }
    else if (tier <= 32) {
        var wsccmax = invscale(player.PL3pts.log(2)).add(v["wsccor" + name]).div(v["wsccsl" + name]).floor();
        if (wsccmax.gt(player["wscb" + name])) {
            player["wsca" + name] = player["wsca" + name].add(wsccmax.sub(player["wscb" + name]));
            player["wscb" + name] = wsccmax.sub(1);
            getWscCost();
            player.PL3pts = player.PL3pts.sub(v["wscc" + name]);
            player["wscb" + name] = player["wscb" + name].add(1);
        }
        else return
    }
    else if (tier <= 40) {
        var wsccmax = invscale(player.PL4pts.log(2)).add(v["wsccor" + name]).div(v["wsccsl" + name]).floor();
        if (wsccmax.gt(player["wscb" + name])) {
            player["wsca" + name] = player["wsca" + name].add(wsccmax.sub(player["wscb" + name]));
            player["wscb" + name] = wsccmax.sub(1);
            getWscCost();
            player.PL4pts = player.PL4pts.sub(v["wscc" + name]);
            player["wscb" + name] = player["wscb" + name].add(1);
        }
        else return
    }
    else if (tier <= 48) {
        var wsccmax = invscale(player.PL5pts.log(2)).add(v["wsccor" + name]).div(v["wsccsl" + name]).floor();
        if (wsccmax.gt(player["wscb" + name])) {
            player["wsca" + name] = player["wsca" + name].add(wsccmax.sub(player["wscb" + name]));
            player["wscb" + name] = wsccmax.sub(1);
            getWscCost();
            player.PL5pts = player.PL5pts.sub(v["wscc" + name]);
            player["wscb" + name] = player["wscb" + name].add(1);
        }
        else return
    }
    else return
}

function autoBuyWsc(tier) {
    if (player.autobuywsc[tier] == true) buyMaxWsc(tier);
}

function abw(tier) {
    if (player.autobuywsc[tier] == true) buyWsc(tier);
}

function abwSwitch(tier) {
    if (player.autobuywsc[tier] == false) player.autobuywsc[tier] = true;
    else player.autobuywsc[tier] = false;
}

function maxAll() {
    for (let i = 1; i <= 48; i++) {
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

function maxAll40() {
    for (let i = 33; i <= 40; i++) {
        buyMaxWsc(i);
    }
}
function maxAll48() {
    for (let i = 41; i <= 48; i++) {
        buyMaxWsc(i);
    }
}

function getWscMult() {
    let mult01to08 = new Decimal(1);
    let mult09to16 = new Decimal(1);
    let mult17to24 = new Decimal(1);
    let mult25to32 = new Decimal(1);
    let mult33to40 = new Decimal(1);
    let mult41to48 = new Decimal(1);

    let wmpb01to08 = new Decimal(1);
    let wmpb09to16 = new Decimal(1);
    let wmpb17to24 = new Decimal(1);
    let wmpb25to32 = new Decimal(1);
    let wmpb33to40 = new Decimal(1);
    let wmpb41to48 = new Decimal(1);

    v.DBpower = new Decimal(1);
    if (player.tier03.gte(42)) v.DBpower = v.DBpower.mul(4);
    if (player.std[21] == true) v.DBpower = v.DBpower.mul(player.alch01.div(16000).add(1).min(1.587401));
    if (player.std[25] == true) v.DBpower = v.DBpower.mul(player.alch03.div(16000).add(1).min(1.587401));
    if (player.std[29] == true) v.DBpower = v.DBpower.mul(player.alch05.div(16000).add(1).min(1.587401));
    v.DBpower = v.DBpower.mul(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03).add(1));

    if (player.tier01.gte(1)) mult01to08 = mult01to08.mul(player.tier01.add(1).pow(2));
    if (player.tier01.gte(2)) mult01to08 = mult01to08.mul(v.wscbaseValue.div(4).max(1));
    if (player.tier01.gte(5)) mult01to08 = mult01to08.mul(player.tier02.add(1).pow(3));
    if (player.tier01.gte(10)) mult01to08 = mult01to08.mul(player.energy.max(2).log(2).pow(0.2).max(1));
    if (player.tier01.gte(25)) mult01to08 = mult01to08.mul(player.tier01.mul(v.DBpower).pwb(2).max(1));
    if (player.tier01.gte(63)) mult09to16 = mult09to16.mul(player.tier01.add(1).pow(2).mul(v.wscbaseValue.div(64).max(1)).mul(player.tier02.add(1).pow(3)).mul(player.energy.max(2).log(2).pow(0.2).max(1)).pow(0.5));
    if (player.tier01.gte(200)) {
        if (player.PL1upg[4] == true) mult01to08 = mult01to08.mul(v.PL1ue5);
        if (player.PL1upg[5] == true) mult01to08 = mult01to08.mul(v.PL1ue6);
        if (player.PL1upg[6] == true) mult01to08 = mult01to08.mul(v.PL1ue7);
        if (player.PL1upg[7] == true) mult01to08 = mult01to08.mul(v.PL1ue8); 
    }

    if (player.PL1upg[4] == true) mult09to16 = mult09to16.mul(v.PL1ue5);
    if (player.PL1upg[5] == true) mult09to16 = mult09to16.mul(v.PL1ue6);
    if (player.PL1upg[6] == true) mult09to16 = mult09to16.mul(v.PL1ue7); 
    if (player.PL1upg[7] == true) mult09to16 = mult09to16.mul(v.PL1ue8); 

    mult01to08 = mult01to08.mul(player.alef.max(2).log(2).pow(player.PL1bab10.mul(16)));
    mult09to16 = mult09to16.mul(player.giml.max(2).log(2).pow(player.PL1bab12)).mul(player.anmpar.pow(player.parupg02.mul(0.25)).max(1));
    
    if (player.orbupg[0] == true) mult01to08 = mult01to08.mul(player.PL1energy.add(1).log(2).pow(16));
    if (player.orbupg[1] == true) mult01to08 = mult01to08.mul(player.energy.add(1).log(2).pow(16));
    if (player.orbupg[2] == true) mult09to16 = mult09to16.mul(player.PL1energy.add(1).log(2).pow(4));
    if (player.orbupg[3] == true) mult09to16 = mult09to16.mul(player.energy.add(1).log(2).pow(4));
    if (player.orbupg[4] == true) mult01to08 = mult01to08.mul(hyp(player.PL1energy, 0.9));
    if (player.orbupg[5] == true) mult01to08 = mult01to08.mul(hyp(player.energy, 0.75));
    if (player.orbupg[6] == true) mult09to16 = mult09to16.mul(hyp(player.PL1energy, 0.75));
    if (player.orbupg[7] == true) mult09to16 = mult09to16.mul(hyp(player.energy, 0.625));
    
    if (player.tier03.gte(1)) mult17to24 = mult17to24.mul(player.upgd01.add(player.upgd02).add(player.upgd03).add(player.upgd04).add(v.upgf01).add(v.upgf02).add(v.upgf03).add(v.upgf04).pwb(2));
    mult17to24 = mult17to24.mul(player.PL2tms.pow(player.PL2upg04.mul(4)).max(1)).mul(player.anm2.pow(player.anm2u02.mul(4)).max(1));
    
    if (player.std[4] == true) mult09to16 = mult09to16.mul(player.tier01.mul(v.DBpower).pwb(2).root(16).max(1));
    if (player.std[5] == true) mult17to24 = mult17to24.mul(player.tier01.mul(v.DBpower).pwb(2).root(256).max(1));
    if (player.std[8] == true) mult01to08 = mult01to08.mul(player.PL2energy.max(2).log(2).pow(4096).max(1));
    if (player.std[9] == true) mult09to16 = mult09to16.mul(player.PL2energy.max(2).log(2).pow(256).max(1));
    if (player.std[10] == true) mult17to24 = mult17to24.mul(player.PL2energy.max(2).log(2).pow(16).max(1));
    if (player.std[11] == true) mult01to08 = mult01to08.mul(player.PL1sec.pow(0.5).pwb("1.044e1233"));
    if (player.std[12] == true) mult09to16 = mult09to16.mul(player.PL2sec.pow(0.25).pwb("1.797e308"));
    if (player.std[13] == true) mult17to24 = mult17to24.mul(player.PL1energy.max(2).log(2).pow(16));
    if (player.std[14] == true) mult01to08 = mult01to08.mul(player.PL1tms.pow(1024).max(1));
    if (player.std[15] == true) mult09to16 = mult09to16.mul(player.PL2tms.pow(256).max(1));
    if (player.std[16] == true) mult17to24 = mult17to24.mul(player.energy.max(2).log(2).pow(16));
    if (player.std[32] == true) mult01to08 = mult01to08.mul(player.elmten01.pow(4096).max(1));
    if (player.std[33] == true) mult09to16 = mult09to16.mul(player.elmten02.pow(64).max(1));
    if (player.std[34] == true) mult17to24 = mult17to24.mul(player.elmten03.pow(1).max(1));

    if (player.resa01.gte(1)) mult25to32 = mult25to32.mul(v.rese01);
    mult25to32 = mult25to32.mul(player.anm3.pow(player.anm3u02.mul(1024)).max(1));

    if (player.ptn[0] == true) mult01to08 = mult01to08.mul(v.ptnm01);
    if (player.ptn[1] == true) mult09to16 = mult09to16.mul(v.ptnm02);
    if (player.ptn[2] == true) mult17to24 = mult17to24.mul(v.ptnm03);
    if (player.ptn[3] == true & player.tthpu[2] == true) mult25to32 = mult25to32.mul(v.ptnm04);
    
    mult01to08 = mult01to08.mul(v.tthmul.max(1));
    mult09to16 = mult09to16.mul(v.tthmul.max(1));
    mult17to24 = mult17to24.mul(v.tthmul.max(1));
    mult25to32 = mult25to32.mul(v.tthmul.max(1));

    if (player.zzltu[3] == true) mult33to40 = mult33to40.mul(v.ltwum4);
    mult33to40 = mult33to40.mul(player.anm4.pow(player.anm4u02.mul(16777216)).max(1));

    if (player.quau[0] == true) {
        mult01to08 = mult01to08.mul(v.quae11);
        mult09to16 = mult09to16.mul(v.quae11);
        mult17to24 = mult17to24.mul(v.quae11);
        mult25to32 = mult25to32.mul(v.quae11);
        mult33to40 = mult33to40.mul(v.quae11);
        mult41to48 = mult41to48.mul(v.quae11);
    }
    
    mult01to08 = mult01to08.mul(v.PL1engmul).mul(v.PL2engmul).mul(v.PL3engmul).mul(v.PL4engmul).mul(v.PL5engmul);
    mult09to16 = mult09to16.mul(v.PL2engmul).mul(v.PL3engmul).mul(v.PL4engmul).mul(v.PL5engmul);
    mult17to24 = mult17to24.mul(v.PL3engmul).mul(v.PL4engmul).mul(v.PL5engmul);
    mult25to32 = mult25to32.mul(v.PL4engmul).mul(v.PL5engmul);
    mult33to40 = mult33to40.mul(v.PL5engmul);
    
    if (player.tier02.gte(750)) {
        wmpb01to08 = v.wscmpb.pow(16);
        wmpb09to16 = v.wscmpb.pow(8);
        wmpb17to24 = v.wscmpb.pow(4);
        wmpb25to32 = v.wscmpb.pow(2);
        wmpb33to40 = v.wscmpb;
        wmpb41to48 = v.wscmpb;
    }
    else if (player.tier02.gte(75)) {
        wmpb01to08 = v.wscmpb.pow(1.4142135);
        wmpb09to16 = v.wscmpb.pow(1.1892071);
        wmpb17to24 = v.wscmpb;
        wmpb25to32 = v.wscmpb;
        wmpb33to40 = v.wscmpb;
        wmpb41to48 = v.wscmpb;
    }
    else {
        wmpb01to08 = v.wscmpb;
        wmpb09to16 = v.wscmpb;
        wmpb17to24 = v.wscmpb;
        wmpb25to32 = v.wscmpb;
        wmpb33to40 = v.wscmpb;
        wmpb41to48 = v.wscmpb;
    }
    if (player.zzltu[4] == true) {
        wmpb01to08 = wmpb01to08.mul(v.PL1engmul.pow(v.bpmpb));
        wmpb09to16 = wmpb09to16.mul(v.PL2engmul.pow(v.bpmpb));
        wmpb17to24 = wmpb17to24.mul(v.PL3engmul.pow(v.bpmpb));
        wmpb25to32 = wmpb25to32.mul(v.PL4engmul.pow(v.bpmpb));
        wmpb33to40 = wmpb33to40.mul(v.PL5engmul.pow(v.bpmpb));
    }
    if (player.incyzb == true & player.shdwsl[5] == true) {
        wmpb01to08 = v.PL1engmul.pow(v.bpmpb.div(1.4));
        wmpb09to16 = v.PL2engmul.pow(v.bpmpb.div(1.4));
        wmpb17to24 = v.PL3engmul.pow(v.bpmpb.div(1.4));
        wmpb25to32 = v.PL4engmul.pow(v.bpmpb.div(1.4));
        wmpb33to40 = v.PL5engmul.pow(v.bpmpb.div(1.4));
    }
    if (player.incyzb == true & player.shdwsl[7] == true) {
        wmpb01to08 = wmpb01to08.pow(v.shdb02);
        wmpb09to16 = wmpb09to16.pow(v.shdb02);
        wmpb17to24 = wmpb17to24.pow(v.shdb02);
        wmpb25to32 = wmpb25to32.pow(v.shdb02);
        wmpb33to40 = wmpb33to40.pow(v.shdb02);
    }

    if (player.incha == 4 | player.incha == 9) {
        mult01to08 = mult01to08.pow(0.25);
        mult09to16 = mult09to16.pow(0.25);
        mult17to24 = mult17to24.pow(0.25);
        mult25to32 = mult25to32.pow(0.25);
        mult33to40 = mult33to40.pow(0.25);
    }

    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        v["wscm" + name] = wmpb01to08.pow(player["wscb" + name]).mul(mult01to08.max(1));
    }
    for (let tier = 9; tier <= 16; tier++) {
        let name = tiername[tier];
        v["wscm" + name] = wmpb09to16.pow(player["wscb" + name]).mul(mult09to16.max(1));
    }
    for (let tier = 17; tier <= 24; tier++) {
        let name = tiername[tier];
        v["wscm" + name] = wmpb17to24.pow(player["wscb" + name]).mul(mult17to24.max(1));
    }
    for (let tier = 25; tier <= 32; tier++) {
        let name = tiername[tier];
        v["wscm" + name] = wmpb25to32.pow(player["wscb" + name]).mul(mult25to32.max(1));
    }
    for (let tier = 33; tier <= 40; tier++) {
        let name = tiername[tier];
        v["wscm" + name] = wmpb33to40.pow(player["wscb" + name]).mul(mult33to40.max(1));
    }
    for (let tier = 41; tier <= 48; tier++) {
        let name = tiername[tier];
        v["wscm" + name] = wmpb41to48.pow(player["wscb" + name]).mul(mult41to48.max(1));
    }

    if (player.infytx == true | player.incha == 9) {
        for (let tier = 1; tier <= 48; tier++) {
            let name = tiername[tier];
            v["wscm" + name] = v["wscm" + name].max(2).log(2);
        }
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            if (player.std[36] == true) v["wscm" + name] = v["wscm" + name].mul(player.thrmttl.max(1));
            if (player.std[37] == true) v["wscm" + name] = v["wscm" + name].mul(player.thrmttl.max(1));
            if (player.std[38] == true) v["wscm" + name] = v["wscm" + name].mul(player.thrmttl.max(1));
            if (player.std[39] == true) v["wscm" + name] = v["wscm" + name].mul(player.thrmttl.max(1));
        }
    }
    if (player.innormcha == 8) {
        player.normchamul = player.normchamul.div(new Decimal(16777216).pow(new Decimal(diff))).min(1);
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            v["wscm" + name] = v["wscm" + name].mul(player.normchamul);
        }
    }
    if (player.innormcha == 10) {
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            v["wscm" + name] = v["wscm" + name].div(v.wscbaseValue1.add(1).pow(2));
        }
    }
}

function getWscPow() {
    let powe01to08 = new Decimal(1);
    let powe09to16 = new Decimal(1);
    let powe17to24 = new Decimal(1);
    let powe25to32 = new Decimal(1);
    let powe33to40 = new Decimal(1);
    let powe41to48 = new Decimal(1);

    let wppb01to08 = new Decimal(0);
    let wppb09to16 = new Decimal(0);
    let wppb17to24 = new Decimal(0);
    let wppb25to32 = new Decimal(0);
    let wppb33to40 = new Decimal(0);
    let wppb41to48 = new Decimal(0);

    if (player.innormcha == 1) {
        v.wscp01 = new Decimal(2.1);
        for (let tier = 2; tier <= 8; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = new Decimal(0.1);
        }
    }
    else if (player.innormcha == 3) {
        player.normchapow = player.normchapow.add(new Decimal(diff)).min(1);
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = player.normchapow;
        }
    }
    else if (player.innormcha == 9) {
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = new Decimal(1).sub(v.wscbaseValue1.mul(0.001)).max(0);
        }
    }
    else {
        powe01to08 = powe01to08.add(player.chacom03.min(player.chacom03.mul(4).root(2)).mul(0.01));
        powe09to16 = powe09to16.add(player.chacom06.min(player.chacom06.mul(4).root(2)).mul(0.01));

        if (player.tier03.gte(3)) {
            powe01to08 = powe01to08.add(player.tier03.min(player.tier03.pow(0.5).mul(2)).div(256));
            powe09to16 = powe09to16.add(player.tier03.min(player.tier03.pow(0.5).mul(2)).div(256));
        }
        if (player.tier04.gte(3)) powe17to24 = powe17to24.add(player.tier03.min(player.tier03.pow(0.5).mul(2)).div(1024));
        if (player.tier03.gte(106)) powe25to32 = powe25to32.add(player.tier03.min(player.tier03.pow(0.5).mul(2)).div(1024));

        if (player.std[20] == true) powe01to08 = powe01to08.add(player.alch01.div(500000).min(0.02));
        if (player.std[22] == true) powe01to08 = powe01to08.add(player.alch02.div(500000).min(0.02));
        if (player.std[24] == true) powe09to16 = powe09to16.add(player.alch03.div(500000).min(0.02));
        if (player.std[26] == true) powe09to16 = powe09to16.add(player.alch04.div(500000).min(0.02));
        if (player.std[28] == true) powe17to24 = powe17to24.add(player.alch05.div(500000).min(0.02));
        if (player.std[30] == true) powe17to24 = powe17to24.add(player.alch06.div(500000).min(0.02));

        powe01to08 = powe01to08.add(player.alcu03.mul(0.004));
        powe09to16 = powe09to16.add(player.alcu04.mul(0.004));
        powe17to24 = powe17to24.add(player.alcu05.mul(0.004));

        powe01to08 = powe01to08.add(player.anm2u04.pow(0.5).min(player.anm2u04.pow(0.25).mul(2)).mul(0.01));
        powe09to16 = powe09to16.add(player.anm2u04.pow(0.5).min(player.anm2u04.pow(0.25).mul(2)).mul(0.01));
        powe17to24 = powe17to24.add(player.anm2u04.pow(0.5).min(player.anm2u04.pow(0.25).mul(2)).mul(0.01));

        powe25to32 = powe25to32.add(v.xyze2.max(0));

        if (player.incyzb != true | player.shdwsl[2] != true){
            if (player.convu[0] == true) powe01to08 = powe01to08.add(v.convp01);
            if (player.convu[1] == true) powe01to08 = powe01to08.add(v.convp02);
            if (player.convu[2] == true) powe01to08 = powe01to08.add(v.convp03);
            if (player.convu[3] == true) powe01to08 = powe01to08.add(v.convp04);
            if (player.convu[4] == true) powe09to16 = powe09to16.add(v.convp05);
            if (player.convu[5] == true) powe09to16 = powe09to16.add(v.convp06);
            if (player.convu[6] == true) powe09to16 = powe09to16.add(v.convp07);
            if (player.convu[7] == true) powe09to16 = powe09to16.add(v.convp08);
            if (player.convu[8] == true) powe17to24 = powe17to24.add(v.convp09);
            if (player.convu[9] == true) powe17to24 = powe17to24.add(v.convp10);
            if (player.convu[10] == true) powe17to24 = powe17to24.add(v.convp11);
            if (player.convu[11] == true) powe17to24 = powe17to24.add(v.convp12);
            if (player.convu[12] == true) powe25to32 = powe25to32.add(v.convp13);
            if (player.convu[13] == true) powe25to32 = powe25to32.add(v.convp14);
            if (player.convu[14] == true) powe25to32 = powe25to32.add(v.convp15);
            if (player.convu[15] == true) powe25to32 = powe25to32.add(v.convp16);
        }

        powe33to40 = powe33to40.add(v.fraue02);

        if (player.resa03.gte(1)) {
            powe01to08 = powe01to08.mul(new Decimal(1.010889286).pow(player.resa03.pow(0.25)));
            powe09to16 = powe09to16.mul(new Decimal(1.010889286).pow(player.resa03.pow(0.25)));
            powe17to24 = powe17to24.mul(new Decimal(1.010889286).pow(player.resa03.pow(0.25)));
            powe25to32 = powe25to32.mul(new Decimal(1.010889286).pow(player.resa03.pow(0.25)));
        }
        if (player.incyzb != true | player.shdwsl[1] != true) {
            powe01to08 = powe01to08.mul(v.tthpow.max(1));
            powe09to16 = powe09to16.mul(v.tthpow.max(1));
            powe17to24 = powe17to24.mul(v.tthpow.max(1));
            powe25to32 = powe25to32.mul(v.tthpow.max(1));
        }
        wppb01to08 = v.hdrn4e;
        wppb09to16 = v.hdrn6e;
        wppb17to24 = v.hdrn8e;
        wppb25to32 = v.hdrn12e;
        wppb33to40 = v.hdrn20e;
        if (player.incyzb == true & player.shdwsl[3] == true) {
            wppb01to08 = v.hdrn4e.div(4);
            wppb09to16 = v.hdrn6e.div(4);
            wppb17to24 = v.hdrn8e.div(4);
            wppb25to32 = v.hdrn12e.div(4);
            wppb33to40 = v.hdrn20e.div(4);
        }

        if (player.incha == 11) {
            powe09to16 = new Decimal(0.5).pow(player.PL1sec.div(v.gamespd1));
            powe17to24 = new Decimal(0.5).pow(player.PL2sec.div(v.gamespd1));
            powe25to32 = new Decimal(0.5).pow(player.PL3sec.div(v.gamespd1));
        }
        if (player.incha == 14) {
            powe01to08 = powe01to08.div(4);
            powe09to16 = powe09to16.div(4);
            powe17to24 = powe17to24.div(4);
            powe25to32 = powe25to32.div(4);
            powe33to40 = powe33to40.div(4);
        }
        if (player.incyzb == true & player.shdwsl[9] == true) {
            powe01to08 = powe01to08.mul(v.shdb04);
            powe09to16 = powe09to16.mul(v.shdb04);
            powe17to24 = powe17to24.mul(v.shdb04);
            powe25to32 = powe25to32.mul(v.shdb04);
            powe33to40 = powe33to40.mul(v.shdb04);
        }

        powe41to48 = powe41to48.add(v.quaef1);

        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe01to08;
            v["wscp" + name] = v["wscp" + name].mul(player["wscb" + name].max(1.415).log(2).sub(0.5).mul(wppb01to08).add(1));
        }
        for (let tier = 9; tier <= 16; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe09to16;
            v["wscp" + name] = v["wscp" + name].mul(player["wscb" + name].max(1.415).log(2).sub(0.5).mul(wppb09to16).add(1));
        }
        for (let tier = 17; tier <= 24; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe17to24;
            v["wscp" + name] = v["wscp" + name].mul(player["wscb" + name].max(1.415).log(2).sub(0.5).mul(wppb17to24).add(1));
        }
        for (let tier = 25; tier <= 32; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe25to32;
            v["wscp" + name] = v["wscp" + name].mul(player["wscb" + name].max(1.415).log(2).sub(0.5).mul(wppb25to32).add(1));
        }
        for (let tier = 33; tier <= 40; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe33to40;
            v["wscp" + name] = v["wscp" + name].mul(player["wscb" + name].max(1.415).log(2).sub(0.5).mul(wppb33to40).add(1));
        }
        for (let tier = 41; tier <= 48; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe41to48;
            v["wscp" + name] = v["wscp" + name].mul(player["wscb" + name].max(1.415).log(2).sub(0.5).mul(wppb41to48).add(1));
        }
    }
    if (player.incha == 2 | player.incha == 9) {
        for (let tier = 1; tier <= 32; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = v["wscp" + name].div(player.energy.log(2).max(1).pow(0.25).div(100).add(1)).min(1);
        }
    }
}

function getWscHyp() {
    let hypw01to08 = new Decimal(1);
    let hypw09to16 = new Decimal(1);
    let hypw17to24 = new Decimal(1);
    let hypw25to32 = new Decimal(1);
    let hypw33to40 = new Decimal(1);
    let hypw41to48 = new Decimal(1);
    let hyp = new Decimal(1);
    if (player.ntmr02.gte(0.05)) hypw01to08 = hypw01to08.add(v.ntme02);
    if (player.ntmr03.gte(0.05)) hypw09to16 = hypw09to16.add(v.ntme03);
    if (player.ntmr04.gte(0.05)) hypw17to24 = hypw17to24.add(v.ntme04);
    if (player.ntmr05.gte(0.05)) hypw25to32 = hypw25to32.add(v.ntme05);
    if (player.ntmr06.gte(0.05)) hypw33to40 = hypw33to40.add(v.ntme06);
    if (player.PL4goal[9] == true) {
        hypw01to08 = hypw01to08.add(0.001);
        hypw09to16 = hypw09to16.add(0.001);
        hypw17to24 = hypw17to24.add(0.001);
        hypw25to32 = hypw25to32.add(0.001);
        hypw33to40 = hypw33to40.add(0.001);
    }
    if (player.tier05.gte(5)) {
        hypw01to08 = hypw01to08.add(player.tier05.div(5000));
        hypw09to16 = hypw09to16.add(player.tier05.div(5000));
        hypw17to24 = hypw17to24.add(player.tier05.div(5000));
        hypw25to32 = hypw25to32.add(player.tier05.div(5000));
        hypw33to40 = hypw33to40.add(player.tier05.div(5000));
    }
    if (player.anm4u04.gte(1)) {
        hypw01to08 = hypw01to08.add(player.anm4u04.pow(0.5).div(2500));
        hypw09to16 = hypw09to16.add(player.anm4u04.pow(0.5).div(2500));
        hypw17to24 = hypw17to24.add(player.anm4u04.pow(0.5).div(2500));
        hypw25to32 = hypw25to32.add(player.anm4u04.pow(0.5).div(2500));
        hypw33to40 = hypw33to40.add(player.anm4u04.pow(0.5).div(2500));
    }
    if (player.incyzb == true & player.shdwsl[0] == true) {
        hypw01to08 = hypw01to08.sub(0.05);
        hypw09to16 = hypw09to16.sub(0.05);
        hypw17to24 = hypw17to24.sub(0.05);
        hypw25to32 = hypw25to32.sub(0.05);
        hypw33to40 = hypw33to40.sub(0.05);
    }
    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        v["wsch" + name] = hypw01to08;
    }
    for (let tier = 9; tier <= 16; tier++) {
        let name = tiername[tier];
        v["wsch" + name] = hypw09to16;
    }
    for (let tier = 17; tier <= 24; tier++) {
        let name = tiername[tier];
        v["wsch" + name] = hypw17to24;
    }
    for (let tier = 25; tier <= 32; tier++) {
        let name = tiername[tier];
        v["wsch" + name] = hypw25to32;
    }
    for (let tier = 33; tier <= 40; tier++) {
        let name = tiername[tier];
        v["wsch" + name] = hypw33to40;
    }
    for (let tier = 41; tier <= 48; tier++) {
        let name = tiername[tier];
        v["wsch" + name] = hypw41to48;
    }
}

function getWscMultPerBuy() {
    v.wscmpb = new Decimal(1.6);
    let mk = new Decimal(0);
    if (player.tier02.gte(1)) mk = new Decimal(0.05);
    if (player.tier02.gte(2)) mk = mk.mul(player.tier02.pow(0.25));
    if (player.tier02.gte(5)) mk = mk.mul(player.tier01.pow(0.25)).mul(5);
    if (player.tier02.gte(75)) mk = mk.mul(4);
    v.wscmpb = v.wscmpb.add(mk);
    v.wscmpb = v.wscmpb.add(v.upge01).mul(v.upge02);

    v.AGpower = new Decimal(1);
    v.AGpower = v.AGpower.add(player.PL1bab04.add(player.PL1bab05).add(player.PL1bab06).mul(0.2));
    if (player.std[23] == true) v.AGpower = v.AGpower.mul(player.alch02.div(36000).add(1).min(1.259921));
    if (player.std[27] == true) v.AGpower = v.AGpower.mul(player.alch04.div(36000).add(1).min(1.259921));
    if (player.std[31] == true) v.AGpower = v.AGpower.mul(player.alch06.div(36000).add(1).min(1.259921));
    if (player.tier03.gte(41)) v.AGpower = v.AGpower.mul(2);
    if (player.tier02.gte(12)) v.wscmpb = v.wscmpb.mul(new Decimal(1.010889286051700).pow(v.AGpower).pow(player.tier02));

    if (player.PL1upg[15] == true) v.wscmpb = v.wscmpb.mul(1.1);
    if (player.hasunlockedanmorb == true & player.incha != 6 & player.incha != 9) {
        if (player.std[0] == true) v.wscmpb = v.wscmpb.pow(player.anmpar.add(1).log(2).add(1).log(2).pow(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4))).max(1));
        else v.wscmpb = v.wscmpb.mul(player.anmpar.add(1).log(2).pow(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4))).max(1));
    }
    if (player.innormcha == 12) v.wscmpb = new Decimal(1);
}

function getWscPowPerBuy() {

}

function getWscCost() {
    for (let tier = 1; tier <= 48; tier++) {
        let name = tiername[tier];
        var bcost = v["wsccor" + name].add(v["wsccsl" + name].mul(player["wscb" +name]));
        v["wscc" + name] = new Decimal(2).pow(scale(bcost));
    }
    if (player.innormcha == 2) {
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            var bcost = v["wsccor" + name].add(v["wsccsl" + name].mul(player["wscb" + name]).mul(1.25));
            v["wscc" + name] = new Decimal(2).pow(scale(bcost));
        }
    }
}

function getWscBaseValue() {
    v.wscbaseValue1 = new Decimal(1);
    v.wscbaseValue2 = new Decimal(1);
    v.wscbaseValue3 = new Decimal(1);
    v.wscbaseValue4 = new Decimal(1);
    v.wscbaseValue5 = new Decimal(1);
    v.wscbaseValue6 = new Decimal(1);
    v.wscbaseValue7 = new Decimal(1);
    v.wscbaseValue8 = new Decimal(1);
    v.wscbaseValueExp = new Decimal(1);
    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        v.wscbaseValue1 = v.wscbaseValue1.add(player["wscb" + name].div(16));
    }
    for (let tier = 9; tier <= 16; tier++) {
        let name = tiername[tier];
        v.wscbaseValue2 = v.wscbaseValue2.add(player["wscb" + name].div(16));
    }
    for (let tier = 17; tier <= 24; tier++) {
        let name = tiername[tier];
        v.wscbaseValue3 = v.wscbaseValue3.add(player["wscb" + name].div(16));
    }
    for (let tier = 25; tier <= 32; tier++) {
        let name = tiername[tier];
        v.wscbaseValue4 = v.wscbaseValue4.add(player["wscb" + name].div(16));
    }
    for (let tier = 33; tier <= 40; tier++) {
        let name = tiername[tier];
        v.wscbaseValue5 = v.wscbaseValue5.add(player["wscb" + name].div(16));
    }
    for (let tier = 41; tier <= 48; tier++) {
        let name = tiername[tier];
        v.wscbaseValue6 = v.wscbaseValue6.add(player["wscb" + name].div(16));
    }
    if (player.std[1] == true) v.wscbaseValueExp = v.wscbaseValueExp.add(0.05);
    v.wscbaseValueExp = v.wscbaseValueExp.add(player.alcu06.mul(0.005));
    if (player.resa05.gte(1)) v.wscbaseValueExp = v.wscbaseValueExp.add(0.1);
    v.wscbaseValueExp = v.wscbaseValueExp.add(player.xyzsw.add(player.xyzbo).mul(0.01));
    v.wscbaseValueExp = v.wscbaseValueExp.add(v.fraue10);
    if (player.incha == 14) v.wscbaseValueExp = v.wscbaseValueExp.div(2);
    v.wscbaseValue = v.wscbaseValue1.mul(v.wscbaseValue2).mul(v.wscbaseValue3).mul(v.wscbaseValue4).mul(v.wscbaseValue5).mul(v.wscbaseValue6).mul(v.fraue06).pow(v.wscbaseValueExp).sub(1);
    if (player.innormcha == 6 & v.wscbaseValue1.gt(42.625)) quitCha();
}

function incTier1() {
    if (player.innormcha == 9 | player.innormcha == 10) return
    if (v.wscbaseValue.gte(v.tierc01)) {
        let confirmation = true;
        if (player.tier01conf == true & player.autobuytier01 == false) confirmation = confirm("这样做会使术式里诞生的风灵迅速就消散。确定获得风单元？这将重置能量和1~8式风灵作成");
        if (confirmation | !player.tier01conf) {
            player.tier01 = player.tier01.add(1);
            if (player.PL1upg[13] == false) tier01Reset();
        }
    }
    else return
}

function incTier2() {
    if (player.tier01.gte(v.tierc02)) {
        let confirmation = true;
        if (player.tier02conf == true & player.autobuytier02 == false) confirmation = confirm("这样做会出现迅速增多的不稳态无相之风。确定获得风模块？这将重置能量、1~8式风灵作成、风单元");
        if (confirmation | !player.tier02conf) {
            player.tier02 = player.tier02.add(1);
            if (player.PL1upg[14] == false) tier02Reset();
        }
    }
    else return
}

function incTier3() {
    if (player.tier02.gte(v.tierc03)) {
        player.tier03 = player.tier03.add(1);
        if (player.PL2tms.lt(11)) tier03Reset();
    }
    else return
}

function incTier4() {
    if (player.tier03.gte(v.tierc04)) {
        player.tier04 = player.tier04.add(1);
        if(player.alcu[0] != true) tier04Reset();
    }
    else return
}

function incTier5() {
    if (player.tier04.gte(v.tierc05)) {
        player.tier05 = player.tier05.add(1);
        tier05Reset();
    }
    else return
}

function incTier6() {
    if (player.tier05.gte(v.tierc06)) {
        player.tier06 = player.tier06.add(1);
        tier06Reset();
    }
    else return
}

function incTier7() {
    if (player.tier06.gte(v.tierc07)) {
        player.tier07 = player.tier07.add(1);
        tier07Reset();
    }
    else return
}

function incTier8() {
    if (player.tier07.gte(v.tierc08)) {
        player.tier08 = player.tier08.add(1);
        tier08Reset();
    }
    else return
}

function incMaxTier1() {
    let tierbmax = invscaleTier(v.wscbaseValue.div(4)).floor();
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
        if (player.PL2tms.lt(11)) tier03Reset();
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

function incMaxTier5() {
    let tierbmax = invscaleTier(player.tier04.div(4)).floor();
    if (tierbmax.gt(player.tier05)) {
        player.tier05 = tierbmax;
    }
    else return
}

function incMaxTier6() {
    let tierbmax = invscaleTier(player.tier05.div(4)).floor();
    if (tierbmax.gt(player.tier06)) {
        player.tier06 = tierbmax;
    }
    else return
}

function incMaxTier7() {
    let tierbmax = invscaleTier(player.tier06.div(4)).floor();
    if (tierbmax.gt(player.tier07)) {
        player.tier07 = tierbmax;
    }
    else return
}

function incMaxTier8() {
    let tierbmax = invscaleTier(player.tier07.div(4)).floor();
    if (tierbmax.gt(player.tier08)) {
        player.tier08 = tierbmax;
    }
    else return
}

function getTierCost() {
    v.tierc01 = scaleTier(player.tier01.add(1)).mul(4);
    v.tierc02 = scaleTier(player.tier02.add(1)).mul(4);
    v.tierc03 = scaleTier(player.tier03.add(1)).mul(4);
    v.tierc04 = scaleTier(player.tier04.add(1)).mul(4);
    v.tierc05 = scaleTier(player.tier05.add(1)).mul(4);
    v.tierc06 = scaleTier(player.tier06.add(1)).mul(4);
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

function tier03Reset() {
        tier02Reset();
        player.tier02 = new Decimal(0);
}

function tier04Reset() {
        tier03Reset();
        player.tier03 = new Decimal(0);
}

function tier05Reset() {
    tier04Reset();
    player.tier04 = new Decimal(0);
}

function tier06Reset() {
    tier05Reset();
    player.tier05 = new Decimal(0);
}

function tier07Reset() {
    tier06Reset();
    player.tier06 = new Decimal(0);
}

function tier08Reset() {
    tier07Reset();
    player.tier07 = new Decimal(0);
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

function abTier05Switch() {
    if (player.autobuytier05 == false) player.autobuytier05 = true;
    else player.autobuytier05 = false;
}

function abTier06Switch() {
    if (player.autobuytier06 == false) player.autobuytier06 = true;
    else player.autobuytier06 = false;
}

function abTier07Switch() {
    if (player.autobuytier07 == false) player.autobuytier07 = true;
    else player.autobuytier07 = false;
}

function abTier08Switch() {
    if (player.autobuytier08 == false) player.autobuytier08 = true;
    else player.autobuytier08 = false;
}

function autoBuyTier01() {
    if (player.autobuytier01 == true) {
        if (player.normchacom[8] == true) incMaxTier1();
        getTierCost();
        incTier1();
    }
}

function autoBuyTier02() {
    if (player.autobuytier02 == true) {
        if (player.normchacom[9] == true) incMaxTier2();
        getTierCost();
        incTier2();
    }
}

function autoBuyTier03() {
    if (player.autobuytier03 == true) {
        incMaxTier3();
        getTierCost();
        incTier3();
    }
}

function autoBuyTier04() {
    if (player.autobuytier04 == true) {
        incMaxTier4();
        getTierCost();
        incTier4();
    }
}

function autoBuyTier05() {
    if (player.autobuytier05 == true) {
        incMaxTier5();
        getTierCost();
        incTier5();
    }
}

function autoBuyTier06() {
    if (player.autobuytier06 == true) {
        incMaxTier6();
        getTierCost();
        incTier6();
    }
}

function autoBuyTier07() {
    if (player.autobuytier07 == true) {
        incMaxTier7();
        getTierCost();
        incTier7();
    }
}

function autoBuyTier08() {
    if (player.autobuytier08 == true) {
        incMaxTier8();
        getTierCost();
        incTier8();
    }
}

function buyUpgd(tier) {
    if (player.incha == 3 | player.incha == 9) return;
    let name = tiername[tier];
    getUpgdCost();
    if (player.energy.gte(v["upgc" + name])) {
        player["upgd" + name] = player["upgd" + name].add(1);
        player.energy = player.energy.sub(v["upgc" + name]);
    }
    else return
}

function buyMaxUpgd(tier) {
    if (player.incha == 3 | player.incha == 9) return;
    let name = tiername[tier];
    let max = invscale(player.energy.log(2)).add(v["upgcor" + name]).div(v["upgcsl" + name]).floor();
    if (max.gt(player["upgd" + name])) {
        player["upgd" + name] = max.sub(1);
        getUpgdCost();
        player.energy = player.energy.sub(v["upgc" + name]);
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

function abUpgd05Switch() {
    if (player.autobuyupgd05 == false) player.autobuyupgd05 = true;
    else player.autobuyupgd05 = false;
}

function abUpgd06Switch() {
    if (player.autobuyupgd06 == false) player.autobuyupgd06 = true;
    else player.autobuyupgd06 = false;
}

function abUpgd07Switch() {
    if (player.autobuyupgd07 == false) player.autobuyupgd07 = true;
    else player.autobuyupgd07 = false;
}

function abUpgd08Switch() {
    if (player.autobuyupgd08 == false) player.autobuyupgd08 = true;
    else player.autobuyupgd08 = false;
}

function autoBuyUpgd01() {
    if (player.autobuyupgd01 == true & player.tier02.gte(1)) {
        if (player.normchacom[10] == true) buyMaxUpgd(1);
        else buyUpgd(1);
    }
}

function autoBuyUpgd02() {
    if (player.autobuyupgd02 == true & player.tier02.gte(2)) {
        if (player.normchacom[11] == true) buyMaxUpgd(2);
        else buyUpgd(2);
    }
}

function autoBuyUpgd03() {
    if (player.autobuyupgd03 == true & player.tier02.gte(12)) buyMaxUpgd(3);
}

function autoBuyUpgd04() {
    if (player.autobuyupgd04 == true & player.tier02.gte(30)) buyMaxUpgd(4);
}

function autoBuyUpgd05() {
    if (player.autobuyupgd05 == true & player.PL4goal[14] == true) buyMaxUpgd(5);
}

function autoBuyUpgd06() {
    if (player.autobuyupgd06 == true & player.PL4goal[15] == true) buyMaxUpgd(6);
}

/*function autoBuyUpgd07() {
    if (player.autobuyupgd07 == true & player.PL4goal[16] == true) buyMaxUpgd(7);
}

function autoBuyUpgd08() {
    if (player.autobuyupgd08 == true & player.PL4goal[17] == true) buyMaxUpgd(8);
}*/

function getUpgdMult() {
    let upgepw = v.wxzfe;
    let upgepw2 = v.hydfe;
    if (player.anm2sc.gte("1e616")) upgepw = upgepw.mul(1.25);
    if (player.tier02.gte(237)) upgepw2 = upgepw2.mul(1.25);
    if (player.PL1upg[9] == true) v.upgd01mult = new Decimal(0.0625).mul(v.upge03);
    else v.upgd01mult = new Decimal(0.025).mul(v.upge03);
    if (player.PL1upg[10] == true) v.upgd02mult = new Decimal(1.044273782427413).mul(v.upge04);
    else v.upgd02mult = new Decimal(1.021897148654116).pow(v.upge04);
    v.upge06 = player.upgd06.pwb(1.000169239705302);
    v.upge05 = player.upgd05.mul(0.25).add(1);
    v.upge04 = player.upgd04.add(v.upgf04).pwb(v.upge06.mul(1.002711275050202));
    v.upge03 = player.upgd03.add(v.upgf03).mul(v.upge05.mul(0.25)).add(1);
    v.upge02 = softcap(v.upgd02mult.pow(player.upgd02.add(v.upgf02))).pow(upgepw2);
    v.upge01 = v.upgd01mult.mul(player.upgd01.add(v.upgf01)).pow(upgepw);
    if (player.tier02.gte(2372)) {
        v.upge04 = player.upgd04.add(v.upgf04).max(player.upgd04.mul(v.upgf04.pow(0.35))).pwb(v.upge06.mul(1.002711275050202));
        v.upge03 = player.upgd03.add(v.upgf03).max(player.upgd03.mul(v.upgf03.pow(0.35))).mul(v.upge05.mul(0.25)).add(1);
        v.upge02 = softcap(v.upgd02mult.pow(player.upgd02.add(v.upgf02).max(player.upgd02.mul(v.upgf02.pow(0.35))))).pow(upgepw2);
        v.upge01 = v.upgd01mult.mul(player.upgd01.add(v.upgf01).max(player.upgd01.mul(v.upgf01.pow(0.35)))).pow(upgepw);
    }
    if (player.tier02.gte(7500)) {
        v.upge04 = player.upgd04.add(v.upgf04).max(player.upgd04.mul(v.upgf04.pow(0.5))).pwb(v.upge06.mul(1.002711275050202));
        v.upge03 = player.upgd03.add(v.upgf03).max(player.upgd03.mul(v.upgf03.pow(0.5))).mul(v.upge05.mul(0.25)).add(1);
        v.upge02 = softcap(v.upgd02mult.pow(player.upgd02.add(v.upgf02).max(player.upgd02.mul(v.upgf02.pow(0.5))))).pow(upgepw2);
        v.upge01 = v.upgd01mult.mul(player.upgd01.add(v.upgf01).max(player.upgd01.mul(v.upgf01.pow(0.5)))).pow(upgepw);
    }
}

function getUpgdCost() {
    let bcost1 = v.upgcor01.add(v.upgcsl01.mul(player.upgd01));
    v.upgc01 = scale(bcost1).pwb(2);
    let bcost2 = v.upgcor02.add(v.upgcsl02.mul(player.upgd02));
    v.upgc02 = scale(bcost2).pwb(2);
    let bcost3 = v.upgcor03.add(v.upgcsl03.mul(player.upgd03));
    v.upgc03 = scale(bcost3).pwb(2);
    let bcost4 = v.upgcor04.add(v.upgcsl04.mul(player.upgd04));
    v.upgc04 = scale(bcost4).pwb(2);
    let bcost5 = v.upgcor05.add(v.upgcsl05.mul(player.upgd05));
    v.upgc05 = scale(bcost5).pwb(2).pwb(2);
    let bcost6 = v.upgcor06.add(v.upgcsl06.mul(player.upgd06));
    v.upgc06 = scale(bcost6).pwb(2).pwb(2);
}

function PL1reset() {
    if (player.energy.lt(1.797e308)) return;
    if (player.incha == 8 | player.incha == 9) return;
    if (player.infytx == true) return;
    var confirmation = true;
    if (player.PL1conf == true) confirmation = confirm("您确定要扩散吗？这将重置能量、1~8式风灵作成、风单元、风模块、风灵升级，但是可以获得扩散点！第一次扩散解锁9~16式风灵和其他内容");
    if (confirmation | !player.PL1conf) PL1FR();
}

async function PL1FR() {
        player.PL1pts = player.PL1pts.add(player.energy.root(1024).floor());
        player.PL1ptsttl = player.PL1ptsttl.add(player.energy.root(1024).floor());
        player.PL1tms = player.PL1tms.add(getPL1tms());
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

        player.tier01 = new Decimal(0);
        player.tier02 = new Decimal(0);
        player.upgd01 = new Decimal(0);
        player.upgd02 = new Decimal(0);
        player.PL1sec = new Decimal(0);
        player.PL1secrl = new Decimal(0);
        player.PL1energy = new Decimal(1);

        await delay(100);
        player.energy = new Decimal(2);
        prod = setInterval(produce, 50);
}

function getPL1tms() {
    let baset = new Decimal(1);
    baset = baset.mul(player.beth.max(2).log(2).max(1).pow(player.PL1bab11));
    if (player.std[14] == true) baset = baset.mul(v.wscbaseValue.max(1).root(16));
    if (player.PL4goal[0] == true) baset = baset.mul(2);
    if (player.PL4goal[1] == true) baset = baset.mul(2);
    return baset;
}

function getPL1engMul() {
    if (player.incha == 1 | player.incha == 9) v.PL1engmul = new Decimal(1e-100).pow(v.PL1engpow);
    else v.PL1engmul = player.PL1energy.pow(v.PL1engpow).max(1);
}

function getPL1engPow() {
    if (player.innormcha == 11) v.PL1engpow = new Decimal(0);
    else v.PL1engpow = new Decimal(1);
    if (player.PL1upg[8] == true) v.PL1engpow = v.PL1engpow.add(0.5);
    v.PL1engpow = v.PL1engpow.add(player.PL1bab07.add(player.PL1bab08).add(player.PL1bab09).mul(0.1)).add(player.chacom01.min(player.chacom01.pow(0.5).mul(2)).mul(0.25));
    if (player.std[2] == true) v.PL1engpow = v.PL1engpow.add(1);
    if (player.alcu[3] == true) v.PL1engpow = v.PL1engpow.add(1);
    if (player.anm2sc.gte("1e1233")) v.PL1engpow = v.PL1engpow.add(1);
    v.PL1engpow = v.PL1engpow.add(player.ptnu04.div(4));
    if (player.PL4goal[8] == true) v.PL1engpow = v.PL1engpow.add(1);
    v.PL1engpow = v.PL1engpow.add(v.fraue09);
    if (v.ntma.gte(10)) v.PL1engpow = v.PL1engpow.add(v.ntma.div(500).min(1));
    if (player.incyzb == true & player.shdwsl[6] == true) v.PL1engpow = v.PL1engpow.mul(v.shdb01);
}

function getPL1u() {
    v.PL1ue5 = player.PL1energy.max(2).log(2).pow(2);
    if (player.PL1ptsttl.gte(1e8)) v.PL1ue6 = player.PL1ptsttl.max(10).log(10).pow(2).mul(1562500).max(1);
    else v.PL1ue6 = player.PL1ptsttl.max(1);
    if (player.PL1tms.gte(100)) v.PL1ue7 = player.PL1tms.root(2).mul(1e7).max(1);
    else v.PL1ue7 = player.PL1tms.pow(4).max(1);
    v.PL1ue8 = player.energy.max(2).log(2).pow(1.5);
}

function buyPL1upg(tier) {
    var PL1upgcost = [4, 8, 12, 16,
        32, 64, 128, 256,
        1024, 4096, 16384, 65536,
        1048576, 16777216, 268435456, 4294967296,];
    if (player.PL1pts.gte(new Decimal(PL1upgcost[tier])) & player.PL1upg[tier] == false) {
        player.PL1upg[tier] = true;
        player.PL1pts = player.PL1pts.sub(new Decimal(PL1upgcost[tier]));
    }
}

function getBab() {
    v.PL1babc1 = player.PL1bab01.add(player.PL1bab04).add(player.PL1bab07).add(player.PL1bab10).pwb(2).mul(1024);
    v.PL1babc2 = player.PL1bab02.add(player.PL1bab05).add(player.PL1bab08).add(player.PL1bab11).pwb(2).mul(1024);
    v.PL1babc3 = player.PL1bab03.add(player.PL1bab06).add(player.PL1bab09).add(player.PL1bab12).pwb(2).mul(1024);
    v.alefps = player.energy.root(10240).mul(player.chacom02.pwb(2));
    v.bethps = player.PL1energy.root(320).mul(player.chacom02.pwb(2));
    v.gimlps = player.PL1pts.root(10).mul(player.chacom02.pwb(2));
    if (player.tier01.gte(6308)) v.bethps = v.bethps.add(v.alefps).add(v.gimlps);
}

function buyPL1bab(tier) {
    getBab();
    let name = tiername[tier];
    if (tier % 3 == 1) {
        if (player.alef.gte(v.PL1babc1) & player["PL1bab" + name].lt(5)) {
            player["PL1bab" + name] = player["PL1bab" + name].add(1);
            player.alef = player.alef.sub(v.PL1babc1);
        }
    }
    else if (tier % 3 == 2) {
        if (player.beth.gte(v.PL1babc2) & player["PL1bab" + name].lt(5)) {
            player["PL1bab" + name] = player["PL1bab" + name].add(1);
            player.beth = player.beth.sub(v.PL1babc2);
        }
    }
    else if (tier % 3 == 0) {
        if (player.giml.gte(v.PL1babc3) & player["PL1bab" + name].lt(5)) {
            player["PL1bab" + name] = player["PL1bab" + name].add(1);
            player.giml = player.giml.sub(v.PL1babc3);
        }
    }
    else return
}

function resetBab() {
    for (let tier = 1; tier <= 12; tier++) {
        let name = tiername[tier];
        player["PL1bab" + name] = new Decimal(0);
    }
    player.alef = player.alef.add(v.PL1babc1).sub(1024);
    player.beth = player.beth.add(v.PL1babc2).sub(1024);
    player.giml = player.giml.add(v.PL1babc3).sub(1024);
    PL1FR();
}

function ulAnmOrb() {
    if (player.hasunlockedanmorb == false & player.PL1pts.gte(1e60)) player.hasunlockedanmorb = true;
    else return
}

function buyparupg(tier) {
    let name = tiername[tier];
    getParupgCost();
    if (player.anmpar.gte(v["parupgc" + name])) {
        player["parupg" + name] = player["parupg" + name].add(1);
        player.anmpar = player.anmpar.sub(v["parupgc" + name]);
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
    let max1 = invscaleUpgd(player.anmpar.log(10)).floor().sub(player.parupg01).max(0);
    let max2 = invscaleUpgd(player.anmpar.log(10)).div(2).floor().sub(player.parupg02).max(0);
    let max3 = invscaleUpgd(player.anmpar.log(10)).div(3).floor().sub(player.parupg03).max(0);
    let max4 = invscaleUpgd(player.anmpar.log(10)).div(4).floor().sub(player.parupg04).max(0);
        if (player.anmpar.gte(v.parupgc01) & player.PL2upg03.gte(1)) player.parupg01 = player.parupg01.add(max1);
        if (player.anmpar.gte(v.parupgc02) & player.PL2upg03.gte(2)) player.parupg02 = player.parupg02.add(max2);
        if (player.anmpar.gte(v.parupgc03) & player.PL2upg03.gte(3)) player.parupg03 = player.parupg03.add(max3);
        if (player.anmpar.gte(v.parupgc04) & player.PL2upg03.gte(4)) {
            player.parupg04 = player.parupg04.add(max4);
            player.anmorb = player.anmorb.add(max4);
            player.anmorbttl = player.anmorbttl.add(max4);
        }
        getParupgCost();
        if (player.anmpar.gte(v.parupgc01) & player.PL2upg03.gte(1)) player.parupg01 = player.parupg01.add(1);
        if (player.anmpar.gte(v.parupgc02) & player.PL2upg03.gte(2)) player.parupg02 = player.parupg02.add(1);
        if (player.anmpar.gte(v.parupgc03) & player.PL2upg03.gte(3)) player.parupg03 = player.parupg03.add(1);
        if (player.anmpar.gte(v.parupgc04) & player.PL2upg03.gte(4)) {
            player.parupg04 = player.parupg04.add(1);
            player.anmorb = player.anmorb.add(1);
            player.anmorbttl = player.anmorbttl.add(1);
        }
}

function getParupgCost() {
    v.parupgc01 = scaleUpgd(player.parupg01.add(1).mul(1)).pwb(10);
    v.parupgc02 = scaleUpgd(player.parupg02.add(1).mul(2)).pwb(10);
    v.parupgc03 = scaleUpgd(player.parupg03.add(1).mul(3)).pwb(10);
    v.parupgc04 = scaleUpgd(player.parupg04.add(1).mul(4)).pwb(10);
}

function buyorbupg(tier) {
    var cost = [1, 2, 3, 4, 20, 30, 40, 50];
    if (player.anmorb.gte(cost[tier - 1]) & player.orbupg[tier - 1] != true) {
        player.orbupg[tier - 1] = true;
        player.anmorb = player.anmorb.sub(cost[tier - 1]);
    }
    else return
}

function resetOrb() {
    player.orbupg = [false, false, false, false, false, false, false, false];
    player.anmorb = player.anmorbttl;
    PL1reset();
}

function entNormCha(tier) {
    if (player.innormcha == 0 & player.incha == 0) {
        PL1FR();
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
        PL1FR();
        player.incha = tier;
        player.enengy = new Decimal(2);
    }
    else if (tier <= 8) {
        PL2FR();
        player.incha = tier;
        player.enengy = new Decimal(2);
    }
    else if (tier <= 12) {
        PL3FR();
        player.incha = tier;
        player.enengy = new Decimal(2);
    }
    else if (tier <= 16) {
        PL4FR();
        player.incha = tier;
        player.enengy = new Decimal(2);
    }
    else return
}

function getChaGoal() {
    v.chagoa01 = scaleChal(player.chacom01.add(1)).pow(2).pwb("1.0443888e1233");
    v.chagoa02 = scaleChal(player.chacom02.add(1)).pow(2).pwb("1.0907481e2466");
    v.chagoa03 = scaleChal(player.chacom03.add(1)).pow(2).pwb("1.1897314e4932");
    v.chagoa04 = scaleChal(player.chacom04.add(1)).pow(2).pwb("1e6000").mul("1e24000");
    v.chagoa05 = scaleChal(player.chacom05.add(1)).pow(2).pwb("e4e5");
    v.chagoa06 = scaleChal(player.chacom06.add(1)).pow(2).pwb("e6.4e6");
    v.chagoa07 = scaleChal(player.chacom07.add(1)).pow(2).pwb("e1.28e7");
    v.chagoa08 = scaleChal(player.chacom08.add(1)).pow(2).pwb("e2.56e7");
    v.chagoa09 = player.chacom09.add(1).pwb("1e30").mul(1e270);
    v.chagoa10 = scaleChal(player.chacom10.add(1)).pow(2).pwb("e1e12");
    v.chagoa11 = scaleChal(player.chacom11.add(1)).pow(2).pwb("e1e11");
    v.chagoa12 = scaleChal(player.chacom12.add(1)).pow(2).pwb("e1e10");
    v.chagoa13 = scaleChal(player.chacom13.add(1)).pow(2).pwb("e1e9");
    v.chagoa14 = scaleChal(player.chacom14.add(1)).pow(2).pwb("e1e12");
    v.chagoa15 = scaleChal(player.chacom15.add(1)).pow(2).pwb("e1e20");
    v.chagoa16 = scaleChal(player.chacom16.add(1)).pow(2).pwb("e1e22");

    v.charew01 = player.chacom01.min(player.chacom01.pow(0.5).mul(2)).mul(0.25);
    v.charew02 = player.chacom02.pwb(2);
    v.charew03 = player.chacom03.min(player.chacom03.mul(4).root(2)).mul(0.01);
    v.charew04 = player.chacom04.pwb(2);
    v.charew05 = player.chacom05.min(player.chacom05.pow(0.5).mul(2)).mul(0.25);
    v.charew06 = player.chacom06.min(player.chacom06.mul(4).root(2)).mul(0.01);
    v.charew07 = player.chacom07.div(16).pwb(2);
    v.charew08 = player.chacom08.pwb(4);
    v.charew09 = player.chacom09.min(player.chacom09.pow(0.5).mul(2)).mul(0.25);
    v.charew10 = player.chacom10.pwb(2);
    v.charew11 = player.chacom11.pwb(4);
    v.charew12 = player.chacom12.pwb(8);
    v.charew13 = player.chacom13.min(player.chacom13.pow(0.5).mul(2)).mul(0.25);
    v.charew14 = player.chacom14.pwb(4);
    v.charew15 = player.chacom15.pwb(4);
    v.charew16 = player.chacom16.pwb(16);

    v.PL1chacap = new Decimal(4);
    if (player.tier04.gte(1)) v.PL1chacap = v.PL1chacap.add(player.tier04.min(12))
    v.PL1chacap = v.PL1chacap.add(player.ptnu03.mul(5));
    if (player.synu12.gte(1)) v.PL1chacap = v.PL1chacap.add(28);
    v.PL2chacap = new Decimal(4).add(player.ptnu03.mul(3));
    if (player.synu12.gte(1)) v.PL2chacap = v.PL2chacap.add(20);
    v.PL3chacap = new Decimal(4);
    if (player.synu12.gte(1)) v.PL3chacap = v.PL3chacap.add(12);
    v.PL4chacap = new Decimal(4);

    v.baseprd = new Decimal(0.25);
    for (let i = 0; i < 12; i++) {
        if (player.normchacom[i] == true) v.baseprd = v.baseprd.add(0.0625);
    }
}

function comCha() {
    if (player.incha > 0 & player.incha <= 4) {
        let name = tiername[player.incha];
        if (player.energy.gte(v["chagoa" + name]) & player["chacom" + name].lt(v.PL1chacap)) player["chacom" + name] = player["chacom" + name].add(1);
    }
    else if (player.incha > 4 & player.incha <= 8) {
        let name = tiername[player.incha];
        if (player.energy.gte(v["chagoa" + name]) & player["chacom" + name].lt(v.PL2chacap)) player["chacom" + name] = player["chacom" + name].add(1);
    }
    else if (player.incha > 8 & player.incha <= 12) {
        let name = tiername[player.incha];
        if (player.energy.gte(v["chagoa" + name]) & player["chacom" + name].lt(v.PL3chacap)) player["chacom" + name] = player["chacom" + name].add(1);
    }
    else if (player.incha > 12 & player.incha <= 16) {
        let name = tiername[player.incha];
        if (player.energy.gte(v["chagoa" + name]) & player["chacom" + name].lt(v.PL4chacap)) player["chacom" + name] = player["chacom" + name].add(1);
    }
}

function clear() {
    player.innormcha = 0;
    player.incha = 0;
    player.infytx = false;
    player.incyzb = false;
}

function quitCha() {
    player.innormcha = 0;
    player.incha = 0;
}

function quitNormCha() {
    player.innormcha = 0;
}

function PL2reset(){
    if (player.PL1pts.lt(1.797e308)) return;
    var confirmation = true;
    if (player.PL2conf == true) confirmation = confirm("您确定要扪敤吗？这将重置之前的一切进度，但是可以获得扪敤点！第一次扪敤解锁8种新的风灵和其他内容");
    if (confirmation | !player.PL2conf) PL2FR();
}

async function PL2FR() {
        player.PL2pts = player.PL2pts.add(player.PL1pts.root(1024).floor());
        player.PL2ptsttl = player.PL2ptsttl.add(player.PL1pts.root(1024).floor());
        player.PL2tms = player.PL2tms.add(getPL2tms());
        player.PL2tmsc = player.PL2tmsc.add(getPL2tms());
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
        player.tier01 = new Decimal(0);
        player.tier02 = new Decimal(0);
        player.upgd01= new Decimal(0);
        player.upgd02= new Decimal(0);
        player.upgd03= new Decimal(0);
        player.upgd04 = new Decimal(0);
        player.PL1energy= new Decimal(1);
        player.PL1pts= new Decimal(0);
        player.PL1tms= new Decimal(0);
    player.PL1sec = new Decimal(0);
    player.PL1secrl = new Decimal(0);
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
        player.alef = new Decimal(0);
        player.beth = new Decimal(0);
        player.giml = new Decimal(0);
        if (player.PL2tms.lte(4)) player.hasunlockedanmorb = false;
        if (player.PL2tms.lte(5)) player.orbupg = [false, false, false, false, false, false, false, false,];
        player.anmpar= new Decimal(0);
        player.anmorb= new Decimal(0);
        player.anmorbttl= new Decimal(0);
        player.parupg01= new Decimal(0);
        player.parupg02= new Decimal(0);
        player.parupg03= new Decimal(0);
        player.parupg04= new Decimal(0);
        if (player.PL2tms.lte(1)) player.normchacom= [false, false, false, false, false, false, false, false, false, false, false, false,];
        if (player.PL2tms.lte(9)) {
            player.chacom01 = new Decimal(0);
            player.chacom02 = new Decimal(0);
            player.chacom03 = new Decimal(0);
            player.chacom04 = new Decimal(0);
        }
    player.PL2sec = new Decimal(0);
    player.PL2secrl = new Decimal(0);
        player.PL2energy = new Decimal(1);

        await delay(100);
        player.energy = new Decimal(2);
        prod = setInterval(produce, 50);
}

function getPL2tms() {
    let baset = new Decimal(1);
    baset = baset.mul(new Decimal(2).pow(player.PL2upg02).max(1).mul(v.PL3tef1.max(1)));
    if (player.std[15] == true) baset = baset.mul(player.PL1tms.max(1).root(16));
    if (player.PL4goal[0] == true) baset = baset.mul(2);
    if (player.PL4goal[1] == true) baset = baset.mul(2);
    return baset;
}

function getPL2engMul() {
    v.PL2engmul = player.PL2energy.pow(v.PL2engpow).max(1);
}

function getPL2engPow() {
    v.PL2engpow = new Decimal(1);
    if (player.std[3] == true) v.PL2engpow = v.PL2engpow.add(1);
    v.PL2engpow = v.PL2engpow.add(player.chacom05.min(player.chacom05.pow(0.5).mul(2)).mul(0.25));
    if (player.alcu[4] == true) v.PL2engpow = v.PL2engpow.add(1);
    v.PL2engpow = v.PL2engpow.add(player.ptnu04.div(6));
    if (player.xyzbo.gte(1)) v.PL2engpow = v.PL2engpow.add(1);
    if (player.PL4goal[8] == true) v.PL2engpow = v.PL2engpow.add(1);
    v.PL2engpow = v.PL2engpow.add(v.fraue09);
    if (v.ntma.gte(10)) v.PL2engpow = v.PL2engpow.add(v.ntma.div(500).min(1));
    if (player.incyzb == true & player.shdwsl[6] == true) v.PL2engpow = v.PL2engpow.mul(v.shdb01);
}

function getPL2upgCost() {
    v.PL2upgc01 = new Decimal(4).add(player.PL2upg01);
    v.PL2upgc02 = new Decimal(4).mul(new Decimal(2.25).pow(player.PL2upg02));
    v.PL2upgc03 = new Decimal(4).add(player.PL2upg03.mul(4));
    v.PL2upgc04 = new Decimal(4).mul(new Decimal(10).pow(player.PL2upg04));
}

function buyPL2upg(tier) {
    let name = tiername[tier];
    let cap = [0, 8, 8, 4, 4];
    if (player.PL2tmsc.gte(v["PL2upgc" + name]) & player["PL2upg" + name].lt(new Decimal(cap[tier]))) {
        player["PL2upg" + name] = player["PL2upg" + name].add(1);
        player.PL2tmsc = player.PL2tmsc.sub(v["PL2upgc" + name]);
    }
    else return
}

function getelmtamt() {
    player.elmttl = invscale(player.PL2ptsttl.max(1).log(2).pow(1.666666666666667)).pow(0.6).floor();
    player.elmt = player.elmttl.sub(player.elmt01).sub(player.elmt02).sub(player.elmt03).sub(player.elmt04).max(0);
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
    v.elmmpd = new Decimal(4).mul(player.chacom07.div(16).pwb(2)).mul(new Decimal(1.044273782427414).pow(player.resa02.pow(0.5)));
    v.elmtps01 = new Decimal(1).mul(v.elmmpd.pow(player.elmt01)).mul(player.elmt01);
    v.elmtps02 = new Decimal(1).mul(v.elmmpd.pow(player.elmt02)).mul(player.elmt02);
    v.elmtps03 = new Decimal(1).mul(v.elmmpd.pow(player.elmt03)).mul(player.elmt03);
    v.elmtps04 = new Decimal(1).mul(v.elmmpd.pow(player.elmt04)).mul(player.elmt04);
    if (player.alcu[2] == true) {
        v.elmtps01 = new Decimal(1).mul(v.elmmpd.pow(player.elmttl)).mul(player.elmt01).mul(player.elmttl);
        v.elmtps02 = new Decimal(1).mul(v.elmmpd.pow(player.elmttl)).mul(player.elmt02).mul(player.elmttl);
        v.elmtps03 = new Decimal(1).mul(v.elmmpd.pow(player.elmttl)).mul(player.elmt03).mul(player.elmttl);
        v.elmtps04 = new Decimal(1).mul(v.elmmpd.pow(player.elmttl)).mul(player.elmt04).mul(player.elmttl);
    }
    if (player.tier03.gte(7)) {
        v.elmtps01 = v.elmtps01.mul(player.elmttl.max(1).pow(2));
        v.elmtps02 = v.elmtps02.mul(player.elmttl.max(1).pow(2));
        v.elmtps03 = v.elmtps03.mul(player.elmttl.max(1).pow(2));
        v.elmtps04 = v.elmtps04.mul(player.elmttl.max(1).pow(2));
    }
    if (player.tier03.gte(16)) {
        v.elmtps01 = v.elmtps01.mul(player.energy.max(2).log(2));
        v.elmtps02 = v.elmtps02.mul(player.energy.max(2).log(2));
        v.elmtps03 = v.elmtps03.mul(player.energy.max(2).log(2));
        v.elmtps04 = v.elmtps04.mul(player.energy.max(2).log(2));
    }
}

function getfreeupg() {
    v.upgf01 = player.elmten01.max(1).log(2) ;
    v.upgf02 = player.elmten02.max(1).log(4) ;
    v.upgf03 = player.elmten03.max(1).log(16) ;
    v.upgf04 = player.elmten04.max(1).log(256) ;
    if (player.resa04.gte(1)) {
        v.upgf01 = v.upgf01.mul(v.rese04.mul(0.01).add(1)) ;
        v.upgf02 = v.upgf02.mul(v.rese04.mul(0.01).add(1)) ;
        v.upgf03 = v.upgf03.mul(v.rese04.mul(0.01).add(1)) ;
        v.upgf04 = v.upgf04.mul(v.rese04.mul(0.01).add(1)) ;
    }
    if (player.tthpu[3] == true) {
        v.upgf01 = v.upgf01.mul(v.xyze1.mul(0.01).add(1)) ;
        v.upgf02 = v.upgf02.mul(v.xyze1.mul(0.01).add(1)) ;
        v.upgf03 = v.upgf03.mul(v.xyze1.mul(0.01).add(1)) ;
        v.upgf04 = v.upgf04.mul(v.xyze1.mul(0.01).add(1)) ;
    }
    if (player.xkwz.gte(0)) {
        v.upgf01 = v.upgf01.mul(v.xkwze.mul(0.01).add(1)) ;
        v.upgf02 = v.upgf02.mul(v.xkwze.mul(0.01).add(1)) ;
        v.upgf03 = v.upgf03.mul(v.xkwze.mul(0.01).add(1)) ;
        v.upgf04 = v.upgf04.mul(v.xkwze.mul(0.01).add(1)) ;
    }
    if (player.incha == 7 | player.incha == 9) {
        v.upgf01 = player.elmten01.add(1).log(2).pow(0.25) ;
        v.upgf02 = player.elmten02.add(1).log(4).pow(0.25) ;
        v.upgf03 = player.elmten03.add(1).log(16).pow(0.25) ;
        v.upgf04 = player.elmten04.add(1).log(256).pow(0.25) ;
    }
    v.upgf01 = v.upgf01.floor();
    v.upgf02 = v.upgf02.floor();
    v.upgf03 = v.upgf03.floor();
    v.upgf04 = v.upgf04.floor();
}

function buythr01() {
    getthrcost();
    if (player.energy.gte(v.thrmc01)) {
        player.thrm = player.thrm.add(1);
        player.thrmttl = player.thrmttl.add(1);
        player.thrmb01 = player.thrmb01.add(1);
        player.energy = player.energy.sub(v.thrmc01);
    }
    else return
}

function buythr02() {
    getthrcost();
    if (player.PL1pts.gte(v.thrmc02)) {
        player.thrm = player.thrm.add(1);
        player.thrmttl = player.thrmttl.add(1);
        player.thrmb02 = player.thrmb02.add(1);
        player.PL1pts = player.PL1pts.sub(v.thrmc02);
    }
    else return
}

function buythr03() {
    getthrcost();
    if (player.PL2pts.gte(v.thrmc03)) {
        player.thrm = player.thrm.add(1);
        player.thrmttl = player.thrmttl.add(1);
        player.thrmb03 = player.thrmb03.add(1);
        player.PL2pts = player.PL2pts.sub(v.thrmc03);
    }
    else return
}

function buymaxthr() {
    getthrcost();
    let max1 = player.energy.log("4e315652").sub(player.thrmb01).floor();
    let max2 = player.PL1pts.log("1.797e308").sub(player.thrmb02).floor();
    let max3 = player.PL2pts.log(2).sub(player.thrmb03).sub(1).floor();
    if (max1.gt(0)) {
        player.thrm = player.thrm.add(max1);
        player.thrmttl = player.thrmttl.add(max1);
        player.thrmb01 = player.thrmb01.add(max1);
    }
    if (max2.gt(0)) {
        player.thrm = player.thrm.add(max2);
        player.thrmttl = player.thrmttl.add(max2);
        player.thrmb02 = player.thrmb02.add(max2);
    }
    if (max3.gt(0)) {
        player.thrm = player.thrm.add(max3);
        player.thrmttl = player.thrmttl.add(max3);
        player.thrmb03 = player.thrmb03.add(max3);
        player.PL2pts = player.PL2pts.add(v.thrmc03)
        getthrcost();
        player.PL2pts = player.PL2pts.sub(v.thrmc03);
    }
}

function getthrcost() {
    v.thrmc01 = new Decimal(1048576).mul(player.thrmb01.add(1)).pwb(2);
    v.thrmc02 = new Decimal(1024).mul(player.thrmb02.add(1)).pwb(2);
    v.thrmc03 = new Decimal(1).mul(player.thrmb03.add(1)).pwb(2);
    if (player.alcu[5] == true) {
        let max1 = player.energy.log("4e315652").sub(player.thrmb01).floor();
        let max2 = player.PL1pts.log("1.797e308").sub(player.thrmb02).floor();
        let max3 = player.PL2pts.log(2).sub(player.thrmb03).sub(1).floor();
        if (max1.gt(0)) {
            player.thrm = player.thrm.add(max1);
            player.thrmttl = player.thrmttl.add(max1);
            player.thrmb01 = player.thrmb01.add(max1);
        }
        if (max2.gt(0)) {
            player.thrm = player.thrm.add(max2);
            player.thrmttl = player.thrmttl.add(max2);
            player.thrmb02 = player.thrmb02.add(max2);
        }
        if (max3.gt(0)) {
            player.thrm = player.thrm.add(max3);
            player.thrmttl = player.thrmttl.add(max3);
            player.thrmb03 = player.thrmb03.add(max3);
        }
    }
}

function buystd(tier) {
    if (player.std[tier] == true) return;
    if (tier == 0 & player.thrm.gte(10) ) { player.std[0] = true; player.thrm = player.thrm.sub(10)}
    if (tier == 1 & player.thrm.gte(4) & player.std[0] == true) { player.std[1] = true; player.thrm = player.thrm.sub(4) }

    if (tier == 2 & player.thrm.gte(4) & player.std[1] == true) { player.std[2] = true; player.thrm = player.thrm.sub(4) }
    if (tier == 3 & player.thrm.gte(6) & player.std[1] == true) { player.std[3] = true; player.thrm = player.thrm.sub(6) }
    if (tier == 4 & player.thrm.gte(6) & player.std[2] == true) { player.std[4] = true; player.thrm = player.thrm.sub(6) }
    if (tier == 5 & player.thrm.gte(9) & player.std[3] == true) { player.std[5] = true; player.thrm = player.thrm.sub(9) }
    if (tier == 6 & player.thrm.gte(12) & (player.std[4] == true | player.std[5] == true)) { player.std[6] = true; player.thrm = player.thrm.sub(12) }
    if (tier == 7 & player.thrm.gte(13) & player.std[6] == true) { player.std[7] = true; player.thrm = player.thrm.sub(13) }

    if (tier == 8 & player.thrm.gte(16) & player.std[7] == true) { player.std[8] = true; player.thrm = player.thrm.sub(16) }
    if (tier == 9 & player.thrm.gte(20) & player.std[7] == true) { player.std[9] = true; player.thrm = player.thrm.sub(20) }
    if (tier == 10 & player.thrm.gte(24) & player.std[7] == true) { player.std[10] = true; player.thrm = player.thrm.sub(24) }
    if (tier == 11 & player.thrm.gte(20) & player.std[8] == true) { player.std[11] = true; player.thrm = player.thrm.sub(20) }
    if (tier == 12 & player.thrm.gte(25) & player.std[9] == true) { player.std[12] = true; player.thrm = player.thrm.sub(25) }
    if (tier == 13 & player.thrm.gte(30) & player.std[10] == true) { player.std[13] = true; player.thrm = player.thrm.sub(30) }
    if (tier == 14 & player.thrm.gte(24) & player.std[11] == true) { player.std[14] = true; player.thrm = player.thrm.sub(24) }
    if (tier == 15 & player.thrm.gte(30) & player.std[12] == true) { player.std[15] = true; player.thrm = player.thrm.sub(30) }
    if (tier == 16 & player.thrm.gte(36) & player.std[13] == true) { player.std[16] = true; player.thrm = player.thrm.sub(36) }
    if (tier == 17 & player.thrm.gte(35) & (player.std[14] == true | player.std[15] == true | player.std[16] == true)) { player.std[17] = true; player.thrm = player.thrm.sub(35) }
    if (tier == 18 & player.thrm.gte(44) & player.std[17] == true) { player.std[18] = true; player.thrm = player.thrm.sub(44) }
    if (tier == 19 & player.thrm.gte(52) & player.std[18] == true) { player.std[19] = true; player.thrm = player.thrm.sub(52) }

    if (tier == 20 & player.thrm.gte(3600) & player.std[19] == true) { player.std[20] = true; player.thrm = player.thrm.sub(3600) }
    if (tier == 21 & player.thrm.gte(4800) & player.std[19] == true) { player.std[21] = true; player.thrm = player.thrm.sub(4800) }
    if (tier == 22 & player.thrm.gte(6000) & player.std[19] == true) { player.std[22] = true; player.thrm = player.thrm.sub(6000) }
    if (tier == 23 & player.thrm.gte(7200) & player.std[19] == true) { player.std[23] = true; player.thrm = player.thrm.sub(7200) }
    if (tier == 24 & player.thrm.gte(4800) & player.std[20] == true) { player.std[24] = true; player.thrm = player.thrm.sub(4800) }
    if (tier == 25 & player.thrm.gte(6400) & player.std[21] == true) { player.std[25] = true; player.thrm = player.thrm.sub(6400) }
    if (tier == 26 & player.thrm.gte(8000) & player.std[22] == true) { player.std[26] = true; player.thrm = player.thrm.sub(8000) }
    if (tier == 27 & player.thrm.gte(9600) & player.std[23] == true) { player.std[27] = true; player.thrm = player.thrm.sub(9600) }
    if (tier == 28 & player.thrm.gte(6000) & player.std[24] == true) { player.std[28] = true; player.thrm = player.thrm.sub(6000) }
    if (tier == 29 & player.thrm.gte(8000) & player.std[25] == true) { player.std[29] = true; player.thrm = player.thrm.sub(8000) }
    if (tier == 30 & player.thrm.gte(10000) & player.std[26] == true) { player.std[30] = true; player.thrm = player.thrm.sub(10000) }
    if (tier == 31 & player.thrm.gte(12000) & player.std[27] == true) { player.std[31] = true; player.thrm = player.thrm.sub(12000) }
    if (tier == 32 & player.thrm.gte(7200) & player.std[28] == true) { player.std[32] = true; player.thrm = player.thrm.sub(7200) }
    if (tier == 33 & player.thrm.gte(9600) & player.std[29] == true) { player.std[33] = true; player.thrm = player.thrm.sub(9600) }
    if (tier == 34 & player.thrm.gte(12000) & player.std[30] == true) { player.std[34] = true; player.thrm = player.thrm.sub(12000) }
    if (tier == 35 & player.thrm.gte(14400) & player.std[31] == true) { player.std[35] = true; player.thrm = player.thrm.sub(14400) }
    if (tier == 36 & player.thrm.gte(250000) & (player.std[32] == true | player.std[33] == true | player.std[34] == true | player.std[35] == true)) { player.std[36] = true; player.thrm = player.thrm.sub(250000) }
    if (tier == 37 & player.thrm.gte(500000) & player.std[36] == true) { player.std[37] = true; player.thrm = player.thrm.sub(500000) }
    if (tier == 38 & player.thrm.gte(750000) & player.std[37] == true) { player.std[38] = true; player.thrm = player.thrm.sub(750000) }
    if (tier == 39 & player.thrm.gte(1000000) & player.std[38] == true) { player.std[39] = true; player.thrm = player.thrm.sub(1000000) }
}

function rstd() {
    for (let i = 0; i < 40; i++) {
        player.std[i] = false;
    }
    player.thrm = player.thrmttl;
    PL2reset();
}

function rstd2() {
    if (player.std[7] == false) return;
    for (let i = 8; i < 40; i++) {
        player.std[i] = false;
    }
    player.thrm = player.thrmttl.sub(64);
    PL2reset();
}

function rstd3() {
    if (player.std[19] == false) return;
    for (let i = 20; i < 40; i++) {
        player.std[i] = false;
    }
    player.thrm = player.thrmttl.sub(420);
    PL2reset();
}

function getalc() {
    v.alcost = new Decimal("1e2500").pow(new Decimal(2).pow(player.alcspd));
    v.alchmu = player.alcspd.mul(new Decimal(1.333333).pow(player.alcspd.sub(1)));
    v.alcuc01 = player.alcu01.pwb(2).mul(1);
    v.alcuc02 = player.alcu02.pwb(2).mul(2);
    v.alcuc03 = player.alcu03.pwb(2).mul(3);
    v.alcuc04 = player.alcu04.pwb(2).mul(4);
    v.alcuc05 = player.alcu05.pwb(2).mul(5);
    v.alcuc06 = player.alcu06.pwb(2).mul(6);
}

function buyalc() {
    if (player.PL2energy.gte(v.alcost)) {
        player.alcspd = player.alcspd.add(1);
        player.PL2energy = player.PL2energy.sub(v.alcost);
    }
    else return;
}

function alchsw(tier) {
    if (player.alca[tier - 1] == true) player.alca[tier - 1] = false;
    else player.alca[tier - 1] = true;
}

function buyalcu(tier) {
    let name = tiername[tier];
    let name2 = tiername[tier-6];
    if (tier <= 6) {
        if (player["alcu" + name].lt(10) & v["alcuc" + name].lte(player["alch" + name])) {
            player["alcu" + name] = player["alcu" + name].add(1);
            player["alch" + name] = player["alch" + name].sub(v["alcuc" + name]);
        }
    }
    if (tier > 6 & tier <= 12) {
        if (player.alcu[tier - 7] == false & v["alcuc" + name].lte(player["alch" + name2])) {
            player.alcu[tier - 7] = true;
            player["alch" + name2] = player["alch" + name2].sub(v["alcuc" + name]);
        }
    }
}

function ulAnm2() {
    if (player.PL2pts.gte("1e5000") & player.hasunlockedanm2 == false) player.hasunlockedanm2 = true;
}

function entfytx() {
    if (player.infytx == true) player.infytx = false;
    else {
        player.infytx = true;
        PL2reset();
    }
    player.wsca17 = player.wscb17;
    player.wsca18 = player.wscb18;
    player.wsca19 = player.wscb19;
    player.wsca20 = player.wscb20;
    player.wsca21 = player.wscb21;
    player.wsca22 = player.wscb22;
    player.wsca23 = player.wscb23;
    player.wsca24 = player.wscb24;
    player.tier03 = new Decimal(0);
    player.tier04 = new Decimal(0);
    player.enengy = new Decimal(2);
}

function autobuyanm2upg() {
    if (player.resa11.gte(1)) {
        let max1 = invscaleUpgd(player.anm2.log(10)).floor().sub(player.anm2u01).max(0);
        let max2 = invscaleUpgd(player.anm2.log(10)).div(2).floor().sub(player.anm2u02).max(0);
        let max3 = invscaleUpgd(player.anm2.log(10)).div(3).floor().sub(player.anm2u03).max(0);
        let max4 = invscaleUpgd(player.anm2.log(10)).div(4).floor().sub(player.anm2u04).max(0);
        if (player.anm2.gte(v.anm2c01)) player.anm2u01 = player.anm2u01.add(max1);
        if (player.anm2.gte(v.anm2c02)) player.anm2u02 = player.anm2u02.add(max2);
        if (player.anm2.gte(v.anm2c03)) player.anm2u03 = player.anm2u03.add(max3);
        if (player.anm2.gte(v.anm2c04)) player.anm2u04 = player.anm2u04.add(max4);
        getanm2();
        if (player.anm2.gte(v.anm2c01)) player.anm2u01 = player.anm2u01.add(1);
        if (player.anm2.gte(v.anm2c02)) player.anm2u02 = player.anm2u02.add(1);
        if (player.anm2.gte(v.anm2c03)) player.anm2u03 = player.anm2u03.add(1);
        if (player.anm2.gte(v.anm2c04)) player.anm2u04 = player.anm2u04.add(1);
    }
}

function getanm2() {
    v.anm2c01 = scaleUpgd(player.anm2u01.add(1).mul(1)).pwb(10);
    v.anm2c02 = scaleUpgd(player.anm2u02.add(1).mul(2)).pwb(10);
    v.anm2c03 = scaleUpgd(player.anm2u03.add(1).mul(3)).pwb(10);
    v.anm2c04 = scaleUpgd(player.anm2u04.add(1).mul(4)).pwb(10);
    if ((player.infytx == true | player.resa16.gte(1)) & player.energy.gte(player.anm2sc)) player.anm2sc = player.energy;
}

function buyanm2u(tier) {
    let name = tiername[tier];
    if (player.anm2.gte(v["anm2c" + name])) {
        player["anm2u" + name] = player["anm2u" + name].add(1);
        player.anm2 = player.anm2.sub(v["anm2c" + name]);
    }
}

function PL3reset() {
    if (player.PL2pts.lt("6.741e315652")) return;
    var confirmation = true;
    if (player.PL3conf == true) confirmation = confirm("您确定要扫敥吗？这将重置之前的一切进度，但是可以获得扫敥点！第一次扫敥解锁25~32式风灵和其他内容");
    if (confirmation | !player.PL3conf) PL3FR();
}

async function PL3FR() {

        player.PL3pts = player.PL3pts.add(player.PL2pts.root(1048576).floor());
        player.PL3ptsttl = player.PL3ptsttl.add(player.PL2pts.root(1048576).floor());
        player.PL3tms = player.PL3tms.add(getPL3tms());
    player.PL3sec = new Decimal(0);
    player.PL3secrl = new Decimal(0);

        player.hasUnlockedPL3 = true;

        clearInterval(prod);
        prod = null;

        player.energy = new Decimal(2);
        player.wscb01 = new Decimal(0);
        player.wscb02 = new Decimal(0);
        player.wscb03 = new Decimal(0);
        player.wscb04 = new Decimal(0);
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
        player.wscb17= new Decimal(0);
        player.wscb18= new Decimal(0);
        player.wscb19= new Decimal(0);
        player.wscb20= new Decimal(0);
        player.wscb21= new Decimal(0);
        player.wscb22= new Decimal(0);
        player.wscb23= new Decimal(0);
        player.wscb24 = new Decimal(0);

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
        player.wsca16= new Decimal(0);
        player.wsca17= new Decimal(0);
        player.wsca18= new Decimal(0);
        player.wsca19= new Decimal(0);
        player.wsca20= new Decimal(0);
        player.wsca21= new Decimal(0);
        player.wsca22= new Decimal(0);
        player.wsca23= new Decimal(0);
        player.wsca24 = new Decimal(0);

        player.tier01 = new Decimal(0);
        player.tier02 = new Decimal(0);
        player.tier03 = new Decimal(0);
        player.tier04 = new Decimal(0);
        player.upgd01 = new Decimal(0);
        player.upgd02 = new Decimal(0);
        player.upgd03 = new Decimal(0);
        player.upgd04 = new Decimal(0);

        player.PL1energy = new Decimal(1);
        player.PL1pts = new Decimal(0);
        player.PL1tms = new Decimal(0);
        player.PL1sec = new Decimal(0);
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
        player.alef = new Decimal(0);
        player.beth = new Decimal(0);
        player.giml = new Decimal(0);
        if (player.PL2tms.lte(5)) {
            player.hasunlockedanmorb = false;
            player.orbupg = [false, false, false, false, false, false, false, false,];
        }
        player.anmpar = new Decimal(0);
        player.anmorb = new Decimal(0);
        player.anmorbttl = new Decimal(0);
        player.parupg01 = new Decimal(0);
        player.parupg02 = new Decimal(0);
        player.parupg03 = new Decimal(0);
        player.parupg04 = new Decimal(0);
        if (player.PL2tms.lte(1)) player.normchacom = [false, false, false, false, false, false, false, false, false, false, false, false,];
        if (player.PL2tms.lte(7)) {
            player.chacom01 = new Decimal(0);
            player.chacom02 = new Decimal(0);
            player.chacom03 = new Decimal(0);
            player.chacom04 = new Decimal(0);
        }

        player.PL2energy = new Decimal(1);
        player.PL2pts = new Decimal(0);
        player.PL2ptsttl = new Decimal(0);
        player.PL2tms = new Decimal(2).pow(player.PL3tms).min(player.PL3tms.mul(4));
        player.PL2sec = new Decimal(0);
        player.PL2tmsc = new Decimal(0);
        if (player.resa06.eq(0)) {
            player.PL2upg01 = new Decimal(0);
            player.PL2upg02 = new Decimal(0);
            player.PL2upg03 = new Decimal(0);
            player.PL2upg04 = new Decimal(0);
            player.chacom05 = new Decimal(0);
            player.chacom06 = new Decimal(0);
            player.chacom07 = new Decimal(0);
            player.chacom08 = new Decimal(0);
        }
        player.elmt = new Decimal(0);
        player.elmttl = new Decimal(0);
        if (player.resa10.eq(0)) {
            player.elmt01 = new Decimal(0);
            player.elmt02 = new Decimal(0);
            player.elmt03 = new Decimal(0);
            player.elmt04 = new Decimal(0);
        }
        player.elmten01 = new Decimal(0);
        player.elmten02 = new Decimal(0);
        player.elmten03 = new Decimal(0);
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
        if (player.resa08.eq(0)) {
            player.alcspd = new Decimal(0);
            player.alch01 = new Decimal(0);
            player.alch02 = new Decimal(0);
            player.alch03 = new Decimal(0);
            player.alch04 = new Decimal(0);
            player.alca = [false, false, false, false, false, false, false, false];
            player.alcu01 = new Decimal(0);
            player.alcu02 = new Decimal(0);
            player.alcu03 = new Decimal(0);
            player.alcu04 = new Decimal(0);
            player.alcu05 = new Decimal(0);
            player.alcu06 = new Decimal(0);
            player.alcu = [false, false, false, false, false, false, false, false];
        }
        if (player.resa09.eq(0)) player.hasunlockedanm2 = false;
        player.infytx = false;
        if (player.resa11.eq(0)) player.anm2sc = new Decimal(0);
        player.anm2 = new Decimal(0);
        player.anm2u01 = new Decimal(0);
        player.anm2u02 = new Decimal(0);
        player.anm2u03 = new Decimal(0);
        player.anm2u04 = new Decimal(0);
        player.PL3energy = new Decimal(1);

        await delay(100);
        player.energy = new Decimal(2);
        prod = setInterval(produce, 50);
}

function getPL3tms() {
    let baset = new Decimal(1);
    if (player.anm3u[2] == true) baset = baset.mul(player.anm3.max(1).log(16).max(1));
    if (player.xyzbo.gte(3)) baset = baset.mul(player.PL2tms.max(1).root(16));
    if (player.zzltu[0] == true) baset = baset.mul(v.ltwum1);
    if (player.PL4goal[0] == true) baset = baset.mul(2);
    if (player.PL4goal[1] == true) baset = baset.mul(2);

    return baset;
}

function getPL3engMul() {
    v.PL3engmul = player.PL3energy.pow(v.PL3engpow).max(1);
}

function getPL3engPow() {
    v.PL3engpow = new Decimal(1);
    if (player.resa10.gte(1)) v.PL3engpow = v.PL3engpow.add(1);
    v.PL3engpow = v.PL3engpow.add(player.chacom09.min(player.chacom09.pow(0.5).mul(2)).mul(0.25));
    v.PL3engpow = v.PL3engpow.add(player.ptnu04.div(12));
    if (player.PL4goal[8] == true) v.PL3engpow = v.PL3engpow.add(1);
    v.PL3engpow = v.PL3engpow.add(v.fraue09);
    if (v.ntma.gte(10)) v.PL3engpow = v.PL3engpow.add(v.ntma.div(500).min(1));
    if (player.incyzb == true & player.shdwsl[6] == true) v.PL3engpow = v.PL3engpow.mul(v.shdb01);
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
    let rspd = new Decimal(1);
    v.PL3tef1 = new Decimal(2).pow(player.PL3tms).min(player.PL3tms.mul(4)).max(1);
    v.PL3tef2 = player.PL3tms.mul(new Decimal(1.414213562).pow(player.PL3tms.sub(2).max(0))).min(player.PL3tms.pow(4)).min(player.PL3tms.mul(1e30));
    if (player.ptn[4] == true) rspd = rspd.mul(v.ptnm05.max(1));
    if (player.resa09.gte(1)) rspd = rspd.mul(player.energy.max(1).log(2).div(1099511627776).pow(8).max(1).min(1e8));
    v.resped = rspd.mul(v.PL3tef2);
    v.resr01 = player.resa01.pwb(16).mul(16);
    v.resr02 = player.resa02.pwb(16).mul(32);
    v.resr03 = player.resa03.pwb(16).mul(64);
    v.resr04 = player.resa04.pwb(16).mul(128);
    v.rese01 = player.energy.max(4).hyp(0.25).pow(player.resa01.pow(0.25));
    v.rese02 = player.resa02.pow(0.5).pwb(1.044273782427414);
    v.rese03 = player.resa03.pow(0.25).pwb(1.0108892860517);
    v.rese04 = player.resa04.pow(0.5).mul(10);
    if (player.PL4goal[1] == true) {
        if (v.resped.mul(v.gamespd1).gte(v.resr01)) {
            player.resa01 = player.resa01.add(1);
            player.resa02 = player.resa02.add(1);
            player.resa03 = player.resa03.add(1);
            player.resa04 = player.resa04.add(1);
        }
    }
}

function getprow1() {
    let name = tiername[player.inres];
    if (player.inres != 0) return (notation(player["resp" + name].div(v["resr" + name]).min(1).max(0).mul(100)) + "%");
    else return "0.000%";
}

function getptn() {
    v.ptnuc01 = player.ptnu01.pwb(2).pwb(4);
    v.ptnuc02 = player.ptnu02.add(1).pwb(1.6).mul(4).floor();
    v.ptnuc03 = player.ptnu03.add(1).pow(2).pwb(1e80);
    v.ptnuc04 = player.ptnu04.add(1).pwb(1e120);
    v.ptnv = player.PL3sec.min(65536).mul(player.PL3energy.max(2).log(2).div(65536).min(16)).mul(player.ptnu02.pwb(2)).mul(player.chacom11.pwb(2)).mul(v.fraue04.pow(4));
    v.ptnm01 = Decimal.pow(2, 16777216).pow(v.ptnv.pow(0.25));
    v.ptnm02 = Decimal.pow(2, 262144).pow(v.ptnv.pow(0.25));
    v.ptnm03 = Decimal.pow(2, 4096).pow(v.ptnv.pow(0.25));
    v.ptnm04 = Decimal.pow(2, 64).pow(v.ptnv.pow(0.25));
    v.ptnm05 = v.ptnv.add(1);
    v.ptnm06 = Decimal.pow(2, 4).pow(v.ptnv.pow(0.25));
    v.ptnm07 = Decimal.pow(2, 0.25).pow(v.ptnv.pow(0.25));
    v.ptnm08 = Decimal.pow(2, 0.015625).pow(v.ptnv.pow(0.25));
}

function ptnchs(tier) {
    if (player.ptn[tier] == false) {
        let ptnamt = 0;
        for (let i = 0; i < 8; i++) {
            if (player.ptn[i] == true) ptnamt = ptnamt + 1;
        }
        if (player.ptnu01.lte(ptnamt)) return;
        else player.ptn[tier] = true;
    }
}

function buyptnupg(tier) {
    let name = tiername[tier];
    let cap = [8, 16, 4, 12];
    if (player.PL3pts.gte(v["ptnuc" + name]) & player["ptnu" + name].lt(new Decimal(cap[tier-1]))) {
        player["ptnu" + name] = player["ptnu" + name].add(1);
        player.PL3pts = player.PL3pts.sub(v["ptnuc" + name]);
    }
    else return;
}

function rptn() {
    for (let i = 0; i < 8; i++) player.ptn[i] = false;
    PL3reset();
}

function gettth() {
    v.tthgspd = new Decimal(2).pow(player.tthu01).mul(player.tthprem.max(1)).mul(player.PL4tms.mul(5).max(1));
    if (player.resa15.gte(1)) v.tthgspd = v.tthgspd.mul(player.PL3energy.max(1).log(2).div(1048576).max(1));
    if (player.incha == 15) v.tthgspd = new Decimal(1);
    v.tthgreq = new Decimal(5).pow(player.tthsize.add(player.tthsize.sub(32).sub(v.fraue08).max(0).pow(1.5).div(6)).add(player.tthsize.sub(160).max(0).pow(2).div(6))).div(new Decimal(1.01).pow(player.tthu03.mul(player.tthsize)));
    v.tthimpc = player.tthimpr.add(4);
    v.tthseedpd = new Decimal(2).pow(player.tthu02).mul(new Decimal(4).pow(player.tthsize)).mul(new Decimal(1.01).pow(player.tthu04.mul(player.tthsize))).max(1);
    v.tthgenepd = new Decimal(5).pow(player.tthsize);
    v.tthsucrpd = new Decimal(5).pow(player.tthsize);
    v.tthuc01 = new Decimal(3).pow(player.tthu01.add(1));
    v.tthuc02 = new Decimal(3).pow(player.tthu02.add(1));
    v.tthuc03 = new Decimal(4).pow(player.tthu03.add(1));
    v.tthuc04 = new Decimal(4).pow(player.tthu04.add(1));
    v.tthue01 = new Decimal(2).pow(player.tthu01);
    v.tthue02 = new Decimal(2).pow(player.tthu02);
    v.tthue03 = new Decimal(1.01).pow(player.tthu03);
    v.tthue04 = new Decimal(1.01).pow(player.tthu04);
    v.tthmul = player.tthseed.pow(64).max(1);
    v.tthpow = player.tthseed.max(1).log(2).root(64).max(1);
    if (player.tthatact[0] == true & player.ingrow != true) player.ingrow = true;
    if (player.tthatact[1] == true & player.tthgrow.gte(v.tthgreq)) {
        player.ingrow = false;
        player.tthgrow = new Decimal(0);
        player.tthamnt = player.tthamnt.add(1);
    }
    if (player.tthatact[3] == true & player.incha != 15) {
        if (player.tthatunl[3] == true) {
            player.tthu01 = player.tthgene.max(1).log(3).floor().max(0);
            player.tthu02 = player.tthgene.max(1).log(3).floor().max(0);
        }
        if (player.tthatunl[4] == true) {
            player.tthu03 = player.tthsucr.max(1).log(4).floor().max(0);
            player.tthu04 = player.tthsucr.max(1).log(4).floor().max(0);
        }
    }
    v.tthprespd = new Decimal(1.4142136).pow(player.tthimpr.sub(8).max(0));
    v.tthprempd = new Decimal(1.4142136).pow(player.tthimpr.sub(8).max(0));
    v.tthpuc1 = new Decimal(2).pow(player.tthpu1.add(1));
    v.tthpuc2 = new Decimal(4).pow(player.tthpu2.add(2));
    v.tthpuc3 = new Decimal(8).pow(player.tthpu3.add(3));
    v.tthpuc4 = new Decimal(16).pow(player.tthpu4.add(4));
    if (player.incha != 15) v.cpper = player.tthpu4.mul(0.1);
    else v.cpper = new Decimal(0);
}

function getprow2() {
    if (player.ingrow == true) return (notation(player.tthgrow.div(v.tthgreq).mul(100).min(100)) + "%");
    else return "0%";
}
function ulatplt() {
    if (player.tthseed.gte(1000) & player.tthatunl[0] != true) {
        player.tthatunl[0] = true;
        player.tthseed = player.tthseed.sub(1000);
    }
}

function ulathar() {
    if (player.tthseed.gte(1000000) & player.tthatunl[1] != true) {
        player.tthatunl[1] = true;
        player.tthseed = player.tthseed.sub(1000000);
    }
}

function ulatimp() {
    if (player.tthseed.gte(1000000000) & player.tthatunl[2] != true) {
        player.tthatunl[2] = true;
        player.tthseed = player.tthseed.sub(1000000000);
    }
}

function ulatupg1() {
    if (player.tthgene.gte(1e12) & player.tthatunl[3] != true) {
        player.tthatunl[3] = true;
        player.tthgene = player.tthgene.sub(1e12);
    }
}

function ulatupg2() {
    if (player.tthsucr.gte(1e15) & player.tthatunl[4] != true) {
        player.tthatunl[4] = true;
        player.tthsucr = player.tthsucr.sub(1e15);
    }
}

function atpltsw() {
    if (player.tthatact[0] == true) player.tthatact[0] = false;
    else player.tthatact[0] = true;
}

function atharsw() {
    if (player.tthatact[1] == true) player.tthatact[1] = false;
    else player.tthatact[1] = true;
}

function atimpsw() {
    if (player.tthatact[2] == true) player.tthatact[2] = false;
    else player.tthatact[2] = true;
}

function atbtusw() {
    if (player.tthatact[3] == true) player.tthatact[3] = false;
    else player.tthatact[3] = true;
}

function addtthtier() {
    if (player.tthsize.lt(player.tthimpr)) {
        player.tthsize = player.tthsize.add(1);
        player.ingrow = false;
        player.tthamnt = new Decimal(0);
        player.tthgrow = new Decimal(0);
    }
}

function subtthtier() {
    if (player.tthsize.gt(1)) {
        player.tthsize = player.tthsize.sub(1);
        player.ingrow = false;
        player.tthamnt = new Decimal(0);
        player.tthgrow = new Decimal(0);
    }
}

function plt() {
    if (player.ingrow != true) {
        player.ingrow = true;
    }
}

function har() {
    if (player.tthgrow.gte(v.tthgreq)) {
        player.ingrow = false;
        player.tthgrow = new Decimal(0);
        player.tthamnt = player.tthamnt.add(1);
    }
}

function imp() {
    if (player.tthamnt.gte(v.tthimpc) & player.tthsize.eq(player.tthimpr)) {
        player.tthimpr = player.tthimpr.add(1);
        player.ingrow = false;
        player.tthamnt = new Decimal(0);
        player.tthgrow = new Decimal(0);
    }
}

function buytthupg(tier) {
    if (player.incha == 15) return;
    let name = tiername[tier];
    if (tier == 1 | tier == 2) {
        if (player.tthgene.gte(v["tthuc" + name])) {
            player["tthu" + name] = player["tthu" + name].add(1);
            player.tthgene = player.tthgene.sub(v["tthuc" + name]);
        }
    }
    if (tier == 3 | tier == 4) {
        if (player.tthsucr.gte(v["tthuc" + name])) {
            player["tthu" + name] = player["tthu" + name].add(1);
            player.tthsucr = player.tthsucr.sub(v["tthuc" + name]);
        }
    }
}

function toseed() {
    if (player.tthamnt.gte(1)) {
        player.tthamnt = player.tthamnt.sub(1);
        player.tthseed = player.tthseed.add(v.tthseedpd);
    }
}

function togene() {
    if (player.tthamnt.gte(1)) {
        player.tthamnt = player.tthamnt.sub(1);
        player.tthgene = player.tthgene.add(v.tthgenepd);
    }
}

function tosucr() {
    if (player.tthamnt.gte(1)) {
        player.tthamnt = player.tthamnt.sub(1);
        player.tthsucr = player.tthsucr.add(v.tthsucrpd);
    }
}

function tthpre() {
    if (player.tthimpr.gte(8)) {
        player.tthpres = new Decimal(player.tthpres);
        player.tthpres = player.tthpres.add(v.tthprespd);
        player.tthprem = player.tthprem.add(v.tthprempd);

        player.tthamnt = new Decimal(0);
        player.tthsize = new Decimal(1);
        player.tthgrow = new Decimal(0);
        player.ingrow = false;
        player.tthseed = new Decimal(0);
        player.tthgene = new Decimal(0);
        player.tthsucr = new Decimal(0);
        player.tthimpr = new Decimal(1);
        player.tthu01 = new Decimal(0);
        player.tthu02 = new Decimal(0);
        player.tthu03 = new Decimal(0);
        player.tthu04 = new Decimal(0);
    }
    else return
}

function buytthpu(tier) {
    let p=[1,2,64,4096,]
    if (player.tthpu[tier - 1] != true & player.tthpres.gte(new Decimal(p[tier-1]))) {
        player.tthpu[tier - 1] = true;
        player.tthpres = player.tthpres.sub(p[tier - 1]);
    }
    else return
}

function buytthpu2(tier) {
    if (tier == 1 & player.tthpu1.lt(10) & player.tthpres.gte(v.tthpuc1)) {
        player.tthpu1 = player.tthpu1.add(1);
        player.tthpres = player.tthpres.sub(v.tthpuc1);
    }
    else if (tier == 2 & player.tthpu2.lt(10) & player.tthpres.gte(v.tthpuc2)) {
        player.tthpu2 = player.tthpu2.add(1);
        player.tthpres = player.tthpres.sub(v.tthpuc2);
    }
    else if (tier == 3 & player.tthpu3.lt(10) & player.tthpres.gte(v.tthpuc3)) {
        player.tthpu3 = player.tthpu3.add(1);
        player.tthpres = player.tthpres.sub(v.tthpuc3);
    }
    else if (tier == 4 & player.tthpu4.lt(10) & player.tthpres.gte(v.tthpuc4)) {
        player.tthpu4 = player.tthpu4.add(1);
        player.tthpres = player.tthpres.sub(v.tthpuc4);
    }
}

function getxyz(tier) {
    let slogx = player.xyzx.max(1).slog();
    v.xyze1 = slogx.mul(10);
    v.xyze2 = slogx.mul(0.04).min(0.2);
    if (player.xyzegn.gte(1)) player.xyzegn = player.xyzegn.add(player.xyze.div(20));
    if (player.xyzfgn.gte(1)) player.xyzfgn = player.xyzfgn.add(player.xyze.div(20));
    if (player.xyzggn.gte(1)) player.xyzggn = player.xyzggn.add(player.xyze.div(20));
    if (player.xyzhgn.gte(1)) player.xyzhgn = player.xyzhgn.add(player.xyze.div(20));
}

function buyxyzu(tier) {
    let p = [0, 100, 1e300, "ee1000"]
    if (player.xyzx.gte(new Decimal(p[tier - 1]))) player.xyzu[tier - 1] = true;
}

function xyzsw() {
    if (player.xyzsw.eq(0) & player.xyzx.gte(100)) player.xyzsw = new Decimal(1);
    else if (player.xyzsw.eq(1) & player.xyzx.gte(1e300)) player.xyzsw = new Decimal(2);
    else if (player.xyzsw.eq(2) & player.xyzx.gte("ee1000")) player.xyzsw = new Decimal(3);
    else if (player.xyzsw.eq(3) & player.xyzx.gte("eee3000")) player.xyzsw = new Decimal(4);
    else if (player.xyzsw.eq(4) & player.xyzx.gte("eee30000")) player.xyzsw = new Decimal(5);
    else if (player.xyzsw.eq(5) & player.xyzx.gte("eee1000000")) player.xyzsw = new Decimal(6);
    else if (player.xyzsw.eq(6) & player.xyzx.gte("eee100000000")) player.xyzsw = new Decimal(7);
    else return;
    player.xyzx = new Decimal(1);
    player.xyzy = new Decimal(1);
    player.xyzz = new Decimal(1);
    player.xyzt = new Decimal(1);
    player.xyze = new Decimal(1);
    player.xyzf = new Decimal(1);
    player.xyzg = new Decimal(1);
    player.xyzh = new Decimal(1);
    player.xyzegn = new Decimal(0);
    player.xyzfgn = new Decimal(0);
    player.xyzggn = new Decimal(0);
    player.xyzhgn = new Decimal(0);
    player.xyzu = [false, false, false, false,];
}

function xyzswdp() {
    if (player.xyzsw.eq(0)) return "100x吸引子";
    if (player.xyzsw.eq(1)) return "e300x吸引子";
    if (player.xyzsw.eq(2)) return "ee1000x吸引子";
    if (player.xyzsw.eq(3)) return "eee3000x吸引子";
    if (player.xyzsw.eq(4)) return "eee300000x吸引子";
    if (player.xyzsw.eq(5)) return "6.000f4x吸引子";
    if (player.xyzsw.eq(6)) return "8.000f4x吸引子";
    if (player.xyzsw.eq(7)) return "无限x吸引子";
}

function xyzbo() {
    if (player.xyzbo.eq(0) & player.xyze.gte(1e300)) player.xyzbo = new Decimal(1);
    else if (player.xyzbo.eq(1) & player.xyze.gte("ee300")) player.xyzbo = new Decimal(2);
    else if (player.xyzbo.eq(2) & player.xyze.gte("ee10000")) player.xyzbo = new Decimal(3);
    else return;
    player.xyzx = new Decimal(1);
    player.xyzy = new Decimal(1);
    player.xyzz = new Decimal(1);
    player.xyzt = new Decimal(1);
    player.xyze = new Decimal(1);
    player.xyzf = new Decimal(1);
    player.xyzg = new Decimal(1);
    player.xyzh = new Decimal(1);
    player.xyzegn = new Decimal(0);
    player.xyzfgn = new Decimal(0);
    player.xyzggn = new Decimal(0);
    player.xyzhgn = new Decimal(0);
    player.xyzu = [false, false, false, false,];
}

function xyzbodp() {
    if (player.xyzbo.eq(0)) return "1e300e吸引子";
    if (player.xyzbo.eq(1)) return "ee300e吸引子";
    if (player.xyzbo.eq(2)) return "ee10000e吸引子";
    if (player.xyzbo.eq(3)) return "无限e吸引子";
}

function buyxyze() {
    player.xyzegn = player.xyzegn.add(1);
}

function buyxyzf() {
    player.xyzfgn = player.xyzfgn.add(1);
}

function buyxyzg() {
    player.xyzggn = player.xyzggn.add(1);
}

function buyxyzh() {
    player.xyzhgn = player.xyzhgn.add(1);
}

function ulAnm3() {
    if (player.PL3pts.gte("1e10000") & player.hasunlockedanm3 == false) player.hasunlockedanm3 = true;
}

function reastart() {
    if (player.inreac != true) player.inreac = true;
    else player.inreac = false;
}

function reareset() {
    if (player.reacm1.eq(0)) {
        player.reacp = player.reacp.add(1);
        player.reacm1 = new Decimal(4).pow(player.reacp);
        player.reacm2 = new Decimal(0);
        player.cata = new Decimal(2).pow(player.reacp);
    }
    else return
}

function getanm3() {
    v.blcnt = player.reacm2.add(1).div(player.reacm1.add(1)).max(0);
    v.anm3c01 = scaleUpgd(player.anm3u01.add(1).mul(1)).pwb(10);
    v.anm3c02 = scaleUpgd(player.anm3u02.add(1).mul(2)).pwb(10);
    v.anm3c03 = scaleUpgd(player.anm3u03.add(1).mul(3)).pwb(10);
    v.anm3c04 = scaleUpgd(player.anm3u04.add(1).mul(4)).pwb(10);
}

function getprow3() {
    if (player.inreac == true) return (notation(player.reacm2.div(player.reacm1.add(player.reacm2)).mul(100).min(100)) + "%");
    else return "0.000%";
}

function buyanm3u(tier) {
    let name = tiername[tier];
    if (player.anm3.gte(v["anm3c" + name])) {
        player["anm3u" + name] = player["anm3u" + name].add(1);
        player.anm3 = player.anm3.sub(v["anm3c" + name]);
    }
}

function buyanm3u2(tier) {
    let cost = [1e8, 1e16, 1e24, 1e32];
    if (player.anm3u[tier] != true & player.anm3.gte(new Decimal(cost[tier]))) {
        player.anm3u[tier] = true;
        player.anm3 = player.anm3.sub(new Decimal(cost));
    }
}

function autobuyanm3upg() {
    if (player.PL4goal[4] == true) {
        let max1 = invscaleUpgd(player.anm3.log(10)).floor().sub(player.anm3u01).max(0);
        let max2 = invscaleUpgd(player.anm3.log(10)).div(2).floor().sub(player.anm3u02).max(0);
        let max3 = invscaleUpgd(player.anm3.log(10)).div(3).floor().sub(player.anm3u03).max(0);
        let max4 = invscaleUpgd(player.anm3.log(10)).div(4).floor().sub(player.anm3u04).max(0);
        if (player.anm3.gte(v.anm3c01)) player.anm3u01 = player.anm3u01.add(max1);
        if (player.anm3.gte(v.anm3c02)) player.anm3u02 = player.anm3u02.add(max2);
        if (player.anm3.gte(v.anm3c03)) player.anm3u03 = player.anm3u03.add(max3);
        if (player.anm3.gte(v.anm3c04)) player.anm3u04 = player.anm3u04.add(max4);
        getanm3();
        if (player.anm3.gte(v.anm3c01)) player.anm3u01 = player.anm3u01.add(1);
        if (player.anm3.gte(v.anm3c02)) player.anm3u02 = player.anm3u02.add(1);
        if (player.anm3.gte(v.anm3c03)) player.anm3u03 = player.anm3u03.add(1);
        if (player.anm3.gte(v.anm3c04)) player.anm3u04 = player.anm3u04.add(1);
    }
}

function buyconv(row, col) {
    let num = row * 4 + col ;
    if (player.convr[row] == true | player.convc[col] == true | player.convn.gte(v.convmx)) return;
    else {
        player.convu[num] = true;
        player.convr[row] = true;
        player.convc[col] = true;
        player.convn = player.convn.add(1);
    }
}

function rconv() {
    for (let i = 0; i < 16; i++) player.convu[i] = false;
    player.convr = [false, false, false, false,];
    player.convc = [false, false, false, false,];
    player.convn = new Decimal(0);
    PL3reset();
}

function getconv() {
    if (player.PL3pts.gte("1e200000")) {
        v.convmx = new Decimal(4);
        v.convnx = new Decimal("infinity");
    }
    else if (player.PL3pts.gte("1e100000")) {
        v.convmx = new Decimal(3);
        v.convnx = new Decimal("1e200000");
    }
    else if (player.PL3pts.gte("1e50000")) {
        v.convmx = new Decimal(2);
        v.convnx = new Decimal("1e100000");
    }
    else {
        v.convmx = new Decimal(1);
        v.convnx = new Decimal("1e50000");
    }

    v.convp01 = player.energy.max(1).log(2).max(1).log(2).div(1200).mul(v.fraue07);
    v.convp02 = player.PL1pts.max(1).log(2).max(1).log(2).div(1000).mul(v.fraue07);
    v.convp03 = player.PL2pts.max(1).log(2).max(1).log(2).div(800).mul(v.fraue07);
    v.convp04 = player.PL3pts.max(1).log(2).max(1).log(2).div(400).mul(v.fraue07);
    v.convp05 = player.energy.max(1).log(2).max(1).log(2).div(1200).mul(v.fraue07);
    v.convp06 = player.PL1pts.max(1).log(2).max(1).log(2).div(1000).mul(v.fraue07);
    v.convp07 = player.PL2pts.max(1).log(2).max(1).log(2).div(800).mul(v.fraue07);
    v.convp08 = player.PL3pts.max(1).log(2).max(1).log(2).div(400).mul(v.fraue07);
    v.convp09 = player.energy.max(1).log(2).max(1).log(2).div(1200).mul(v.fraue07);
    v.convp10 = player.PL1pts.max(1).log(2).max(1).log(2).div(1000).mul(v.fraue07);
    v.convp11 = player.PL2pts.max(1).log(2).max(1).log(2).div(800).mul(v.fraue07);
    v.convp12 = player.PL3pts.max(1).log(2).max(1).log(2).div(400).mul(v.fraue07);
    v.convp13 = player.energy.max(1).log(2).max(1).log(2).div(1200).mul(v.fraue07);
    v.convp14 = player.PL1pts.max(1).log(2).max(1).log(2).div(1000).mul(v.fraue07);
    v.convp15 = player.PL2pts.max(1).log(2).max(1).log(2).div(800).mul(v.fraue07);
    v.convp16 = player.PL3pts.max(1).log(2).max(1).log(2).div(400).mul(v.fraue07);
}

function PL4reset() {
    if (player.PL3pts.lt("6.741e315652")) return;
    var confirmation = true;
    if (player.PL4conf == true) confirmation = confirm("您确定要扬敦吗？这将重置之前的一切进度，但是可以获得扬敦点！第一次扬敦解锁33~40式风灵和其他内容");
    if (confirmation | !player.PL4conf) PL4FR();
}

async function PL4FR() {

        player.PL4pts = player.PL4pts.add(player.PL3pts.root(1048576).floor());
        player.PL4ptsttl = player.PL4ptsttl.add(player.PL3pts.root(1048576).floor());
        player.PL4tms = player.PL4tms.add(getPL4tms());
        player.PL4sec = new Decimal(0);
        player.PL4secrl = new Decimal(0);
        getPL4goal();
        player.PL4fra = player.PL4fra.add(getfra());

        player.hasUnlockedPL4 = true;

        clearInterval(prod);
        prod = null;

        player.PL1tms = new Decimal(0);
        player.PL2tms = new Decimal(0);
        player.PL3tms = new Decimal(0);
        if(player.PL4goal[2] == true) player.PL2tms = new Decimal(12);

        player.energy = new Decimal(2);
        player.wscb01 = new Decimal(0);
        player.wscb02 = new Decimal(0);
        player.wscb03 = new Decimal(0);
        player.wscb04 = new Decimal(0);
        player.wscb05 = new Decimal(0);
        player.wscb06 = new Decimal(0);
        player.wscb07 = new Decimal(0);
        player.wscb08 = new Decimal(0);
        player.wscb09 = new Decimal(0);
        player.wscb10 = new Decimal(0);
        player.wscb11 = new Decimal(0);
        player.wscb12 = new Decimal(0);
        player.wscb13 = new Decimal(0);
        player.wscb14 = new Decimal(0);
        player.wscb15 = new Decimal(0);
        player.wscb16 = new Decimal(0);
        player.wscb17 = new Decimal(0);
        player.wscb18 = new Decimal(0);
        player.wscb19 = new Decimal(0);
        player.wscb20 = new Decimal(0);
        player.wscb21 = new Decimal(0);
        player.wscb22 = new Decimal(0);
        player.wscb23 = new Decimal(0);
        player.wscb24 = new Decimal(0);
        player.wscb25 = new Decimal(0);
        player.wscb26 = new Decimal(0);
        player.wscb27 = new Decimal(0);
        player.wscb28 = new Decimal(0);
        player.wscb29 = new Decimal(0);
        player.wscb30 = new Decimal(0);
        player.wscb31 = new Decimal(0);
        player.wscb32 = new Decimal(0);

        player.wsca01 = new Decimal(0);
        player.wsca02 = new Decimal(0);
        player.wsca03 = new Decimal(0);
        player.wsca04 = new Decimal(0);
        player.wsca05 = new Decimal(0);
        player.wsca06 = new Decimal(0);
        player.wsca07 = new Decimal(0);
        player.wsca08 = new Decimal(0);
        player.wsca09 = new Decimal(0);
        player.wsca10 = new Decimal(0);
        player.wsca11 = new Decimal(0);
        player.wsca12 = new Decimal(0);
        player.wsca13 = new Decimal(0);
        player.wsca14 = new Decimal(0);
        player.wsca15 = new Decimal(0);
        player.wsca16 = new Decimal(0);
        player.wsca17 = new Decimal(0);
        player.wsca18 = new Decimal(0);
        player.wsca19 = new Decimal(0);
        player.wsca20 = new Decimal(0);
        player.wsca21 = new Decimal(0);
        player.wsca22 = new Decimal(0);
        player.wsca23 = new Decimal(0);
        player.wsca24 = new Decimal(0);
        player.wsca25 = new Decimal(0);
        player.wsca26 = new Decimal(0);
        player.wsca27 = new Decimal(0);
        player.wsca28 = new Decimal(0);
        player.wsca29 = new Decimal(0);
        player.wsca30 = new Decimal(0);
        player.wsca31 = new Decimal(0);
        player.wsca32 = new Decimal(0);

        player.tier01 = new Decimal(0);
        player.tier02 = new Decimal(0);
        player.tier03 = new Decimal(0);
        player.tier04 = new Decimal(0);
        player.upgd01 = new Decimal(0);
        player.upgd02 = new Decimal(0);
        player.upgd03 = new Decimal(0);
        player.upgd04 = new Decimal(0);

        player.PL1energy = new Decimal(1);
        player.PL1pts = new Decimal(0);
        player.PL1sec = new Decimal(0);
        if (player.PL2tms.eq(0)) player.PL1upg = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,];
        if (player.PL2tms.eq(1) | player.PL4goal[1] == true) player.PL1upg = [true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false,];
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
        player.alef = new Decimal(0);
        player.beth = new Decimal(0);
        player.giml = new Decimal(0);
        if (player.PL2tms.lte(5)) {
            player.hasunlockedanmorb = false;
            player.orbupg = [false, false, false, false, false, false, false, false,];
        }
        player.anmpar = new Decimal(0);
        player.anmorb = new Decimal(0);
        player.anmorbttl = new Decimal(0);
        player.parupg01 = new Decimal(0);
        player.parupg02 = new Decimal(0);
        player.parupg03 = new Decimal(0);
        player.parupg04 = new Decimal(0);
        if (player.PL2tms.lte(1) & player.PL4goal[1] != true) player.normchacom = [false, false, false, false, false, false, false, false, false, false, false, false,];
        if (player.PL2tms.lte(7)) {
            player.chacom01 = new Decimal(0);
            player.chacom02 = new Decimal(0);
            player.chacom03 = new Decimal(0);
            player.chacom04 = new Decimal(0);
        }

        player.PL2energy = new Decimal(1);
        player.PL2pts = new Decimal(0);
        player.PL2ptsttl = new Decimal(0);
        if (player.PL4goal[4] == true) player.PL2tms = new Decimal(10);
        player.PL2sec = new Decimal(0);
        player.PL2tmsc = new Decimal(0);
        if (player.PL4goal[4] != true) {
            player.PL2upg01 = new Decimal(0);
            player.PL2upg02 = new Decimal(0);
            player.PL2upg03 = new Decimal(0);
            player.PL2upg04 = new Decimal(0);
            player.chacom05 = new Decimal(0);
            player.chacom06 = new Decimal(0);
            player.chacom07 = new Decimal(0);
            player.chacom08 = new Decimal(0);
        }
        player.elmt = new Decimal(0);
        player.elmttl = new Decimal(0);
        if (player.PL4goal[5] != true) {
            player.elmt01 = new Decimal(0);
            player.elmt02 = new Decimal(0);
            player.elmt03 = new Decimal(0);
            player.elmt04 = new Decimal(0);
        }
        player.elmten01 = new Decimal(0);
        player.elmten02 = new Decimal(0);
        player.elmten03 = new Decimal(0);
        player.elmten04 = new Decimal(0);
        if (player.PL4goal[4] != true) {
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
        if (player.PL4goal[5] != true) {
            player.alcspd = new Decimal(0);
            player.alch01 = new Decimal(0);
            player.alch02 = new Decimal(0);
            player.alch03 = new Decimal(0);
            player.alch04 = new Decimal(0);
            player.alch05 = new Decimal(0);
            player.alch06 = new Decimal(0);
            player.alca = [false, false, false, false, false, false, false, false];
            player.alcu01 = new Decimal(0);
            player.alcu02 = new Decimal(0);
            player.alcu03 = new Decimal(0);
            player.alcu04 = new Decimal(0);
            player.alcu05 = new Decimal(0);
            player.alcu06 = new Decimal(0);
            player.alcu = [false, false, false, false, false, false, false, false];
        }
        if (player.PL4goal[5] != true) player.hasunlockedanm2 = false;
        player.infytx = false;
        if (player.PL4goal[5] != true) player.anm2sc = new Decimal(0);
        player.anm2 = new Decimal(0);
        player.anm2u01 = new Decimal(0);
        player.anm2u02 = new Decimal(0);
        player.anm2u03 = new Decimal(0);
        player.anm2u04 = new Decimal(0);

        player.PL3energy= new Decimal(1);
        player.PL3pts= new Decimal(0);
        player.PL3ptsttl= new Decimal(0);
        player.PL3sec = new Decimal(0);
        if (player.PL4goal[9] != true) {
            player.chacom09 = new Decimal(0);
            player.chacom10 = new Decimal(0);
            player.chacom11 = new Decimal(0);
            player.chacom12 = new Decimal(0);
        }

        player.res= [false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
        ];
        player.inres= 0,
        player.resa01= new Decimal(0);
        player.resa02= new Decimal(0);
        player.resa03= new Decimal(0);
        player.resa04 = new Decimal(0);
        if (player.PL4goal[4] != true) {
            player.resa05 = new Decimal(0);
            player.resa06 = new Decimal(0);
            player.resa07 = new Decimal(0);
            player.resa08 = new Decimal(0);
        }
        if (player.PL4goal[5] != true) {
            player.resa09 = new Decimal(0);
            player.resa10 = new Decimal(0);
            player.resa11 = new Decimal(0);
            player.resa12 = new Decimal(0);
        }
        if (player.PL4goal[6] != true) {
            player.resa13 = new Decimal(0);
            player.resa14 = new Decimal(0);
            player.resa15 = new Decimal(0);
            player.resa16 = new Decimal(0);
        }
        player.resp01= new Decimal(0);
        player.resp02= new Decimal(0);
        player.resp03= new Decimal(0);
        player.resp04= new Decimal(0);
        player.resp05= new Decimal(0);
        player.resp06= new Decimal(0);
        player.resp07= new Decimal(0);
        player.resp08= new Decimal(0);
        player.resp09= new Decimal(0);
        player.resp10= new Decimal(0);
        player.resp11= new Decimal(0);
        player.resp12= new Decimal(0);
        player.resp13= new Decimal(0);
        player.resp14= new Decimal(0);
        player.resp15= new Decimal(0);
        player.resp16= new Decimal(0);
        if (player.PL4goal[3] != true) {
            player.ptn = [false, false, false, false, false, false, false, false,];
            player.ptnu01 = new Decimal(0);
            player.ptnu02 = new Decimal(0);
            player.ptnu03 = new Decimal(0);
            player.ptnu04 = new Decimal(0);
        }
        player.tthamnt= new Decimal(0);
        player.tthsize= new Decimal(1);
        player.tthgrow= new Decimal(0);
        player.ingrow= false,
        player.tthseed= new Decimal(0);
        player.tthgene= new Decimal(0);
        player.tthsucr= new Decimal(0);
        player.tthimpr = new Decimal(1);
    if (player.PL4goal[2] != true) {
        player.tthatunl = [false, false, false, false, false, false,]
    }
        if (player.PL4goal[6] != true) {
            player.tthpu1 = new Decimal(0);
            player.tthpu2 = new Decimal(0);
            player.tthpu3 = new Decimal(0);
            player.tthpu4 = new Decimal(0);
            player.tthpu = [false, false, false, false,];
        }
        player.tthpres = new Decimal(0);
        player.tthprem = new Decimal(1);
        player.tthu01 = new Decimal(0);
        player.tthu02 = new Decimal(0);
        player.tthu03 = new Decimal(0);
        player.tthu04 = new Decimal(0);
        if (player.PL4goal[5] != true) {
            player.xyzx = new Decimal(0);
            player.xyzy = new Decimal(0);
            player.xyzz = new Decimal(0);
            player.xyzt = new Decimal(0);
            player.xyzu = [false, false, false, false,];
            player.xyzsw = new Decimal(0);
            player.xyzbo = new Decimal(0);
            player.xyze = new Decimal(0);
            player.xyzf = new Decimal(0);
            player.xyzg = new Decimal(0);
            player.xyzh = new Decimal(0);
            player.xyzegn = new Decimal(0);
            player.xyzfgn = new Decimal(0);
            player.xyzggn = new Decimal(0);
            player.xyzhgn = new Decimal(0);
        }
        if (player.PL4goal[4] != true) {
            player.hasunlockedanm3 = false,
            player.anm3u = [false, false, false, false,];
        }
        player.anm3u01 = new Decimal(0);
        player.anm3u02 = new Decimal(0);
        player.anm3u03 = new Decimal(0);
        player.anm3u04 = new Decimal(0);
        player.anm3 = new Decimal(0);
        player.inreac= false,
        player.reacp= new Decimal(0);
        player.reacm1= new Decimal(1);
        player.reacm2= new Decimal(0);
        player.cata= new Decimal(1);
        if (player.PL4goal[8] != true) {
            player.convu = [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
            ];
            player.convr = [false, false, false, false,];
            player.convc = [false, false, false, false,];
            player.convn = new Decimal(0);
        }
        player.PL4energy = new Decimal(1);

        await delay(100);
        player.energy = new Decimal(2);
        prod = setInterval(produce, 50);
}

function getPL4tms() {
    let baset = new Decimal(1);
    if (player.PL4goal[0] == true) baset = baset.mul(2);
    if (player.PL4goal[1] == true) baset = baset.mul(2);
    return baset;
}

function getPL4engMul() {
    v.PL4engmul = player.PL4energy.pow(v.PL4engpow).max(1);
}

function getPL4engPow() {
    v.PL4engpow = new Decimal(1);
    v.PL4engpow = v.PL4engpow.add(v.fraue09);
    v.PL4engpow = v.PL4engpow.add(player.chacom13.min(player.chacom13.pow(0.5).mul(2)).mul(0.25));
    if (v.ntma.gte(10)) v.PL4engpow = v.PL4engpow.add(v.ntma.div(500).min(1));
    if (player.incyzb == true & player.shdwsl[6] == true) v.PL4engpow = v.PL4engpow.mul(v.shdb01);
}

function getPL4goal() {
    if (player.PL4ptsttl.gte(2)) player.PL4goal[0] = true;
    if (player.PL4ptsttl.gte(4)) player.PL4goal[1] = true;
    if (player.PL4ptsttl.gte(8)) player.PL4goal[2] = true;
    if (player.PL4ptsttl.gte(16)) player.PL4goal[3] = true;
    if (player.PL4ptsttl.gte(64)) player.PL4goal[4] = true;
    if (player.PL4ptsttl.gte(256)) player.PL4goal[5] = true;
    if (player.PL4ptsttl.gte(4096)) player.PL4goal[6] = true;
    if (player.PL4ptsttl.gte(65536)) player.PL4goal[7] = true;
    if (player.PL4ptsttl.gte(4.294e9)) player.PL4goal[8] = true;
    if (player.PL4ptsttl.gte(1.844e19)) player.PL4goal[9] = true;
    if (player.PL4ptsttl.gte(3.402e38)) player.PL4goal[10] = true;
    if (player.PL4ptsttl.gte(1.157e77)) player.PL4goal[11] = true;
}

function getPL4goal2() {
    if (player.wsca01.lt(2) & player.energy.gte("e5.553023288523357e18")) player.PL4goal[12] = true;
    if (player.PL3energy.lt(2) & player.energy.gte("e5.553023288523357e18")) player.PL4goal[13] = true;
    if (player.PL2energy.lt(2) & player.energy.gte("e5.553023288523357e18")) player.PL4goal[14] = true;
    if (player.PL1energy.lt(2) & player.energy.gte("e5.553023288523357e18")) player.PL4goal[15] = true;
} 

function swi8n1(){
    if (player.sta8n1 == true) player.sta8n1 = false;
    else player.sta8n1 = true;
}

function getfra() {
    let base = new Decimal(1);
    if (player.PL4tms.lte(1)) return (new Decimal(4));
    else return base.mul(v.fraft1).mul(v.fraft2).mul(v.fraft3).mul(v.fraft4);
}

function getfrau() {
    v.fraft1 = player.energy.max(1).log(2).root(2).div(536870912).max(2);
    v.fraft2 = player.PL4energy.max(1).log(2).root(2).div(128).max(2);
    v.fraft3 = player.PL4tms.div(4).add(1).pow(1.25).max(1);
    v.fraft4 = player.frau01.mul(0.25).pwb(2).mul(v.ltwum2.max(1)).mul(player.chacom14.pwb(4).max(1)).mul(player.anm4u04.pwb(4));
    if (player.tier05.gte(1)) v.fraft4 = v.fraft4.mul(player.tier05.add(1).pow(2));
    v.frauc01 = player.frau01.add(1).pwb(2);
    v.frauc02 = player.frau02.add(1).pwb(2);
    for (let i = 3; i <= 8; i++) {
        let name = tiername[i];
        v["frauc" + name] = new Decimal(2).pow(player["frau" + name].add(1).pow(2));
    }
    v.frauc09 = player.frau09.add(360).pwb(1.059463094359295);
    v.frauc10 = player.frau10.add(360).pwb(1.059463094359295);
    v.fraue01 = new Decimal(2).pow(player.frau01.mul(0.25)).max(1);
    v.fraue02 = player.frau02.mul(0.02);
    v.fraue03 = new Decimal(2).pow(player.frau03).max(1);
    v.fraue04 = new Decimal(2).pow(player.frau04).max(1);
    v.fraue05 = new Decimal(2).pow(player.frau05.mul(0.5)).max(1);
    v.fraue06 = new Decimal(2).pow(player.frau06.mul(0.5)).max(1);
    v.fraue07 = new Decimal(2).pow(player.frau07.mul(0.25)).max(1);
    v.fraue08 = player.frau08.mul(2);
    v.fraue09 = player.frau09.min(player.frau09.mul(0.002).add(0.04)).max(0);
    v.fraue10 = player.frau10.div(1600).max(0);
}

function buyfrau(tier) {
    let name = tiername[tier];
    let cap = [20, 20, 4, 4, 4, 4, 4, 4, 480, 480,];
    if (tier <= 8) {
        if (player.PL4fra.gte(v["frauc" + name]) & player["frau" + name].lt(new Decimal(cap[tier - 1]))) {
            player["frau" + name] = player["frau" + name].add(1);
            player.PL4fra = player.PL4fra.sub(v["frauc" + name]);
        }
    }
    let max = player.PL4fra.log(1.059463094359295).sub(360).floor().add(1).max(0).min(480);
    if (tier == 9 & player.frau09.lt(max)) player.frau09 = max;
    if (tier == 10 & player.frau10.lt(max)) player.frau10 = max;
}

function getboggle() {
    v.boxc1 = player.boxa1.add(4).pwb(4).max(player.boxa1.pwb(1.04).pwb(2));
    v.boxc2 = player.boxa2.add(4).pow(4).max(player.boxa2.pwb(1.1));
    player.bogglettl = player.boxa1.add(player.boxa2);
    if (player.synu11.gte(1)) {
        v.hdrn4wps = player.bogglettl.min(player.bogglettl.mul(16777216).root(4)).pwb(2).mul(player.bogglettl).mul(v.synm01);
        v.hdrn6wps = player.bogglettl.min(player.bogglettl.mul(16777216).root(4)).pwb(2).mul(player.bogglettl).mul(v.synm02);
        v.hdrn8wps = player.bogglettl.min(player.bogglettl.mul(16777216).root(4)).pwb(2).mul(player.bogglettl).mul(v.synm03);
        v.hdrn12wps = player.bogglettl.min(player.bogglettl.mul(16777216).root(4)).pwb(2).mul(player.bogglettl).mul(v.synm04);
        v.hdrn20wps = player.bogglettl.min(player.bogglettl.mul(16777216).root(4)).pwb(2).mul(player.bogglettl).mul(v.synm05);
    }
    else {
        v.hdrn4wps = player.hdrn4.min(player.hdrn4.mul(16777216).root(4)).pwb(2).mul(player.hdrn4).mul(v.synm01);
        v.hdrn6wps = player.hdrn6.min(player.hdrn6.mul(16777216).root(4)).pwb(2).mul(player.hdrn6).mul(v.synm02);
        v.hdrn8wps = player.hdrn8.min(player.hdrn8.mul(16777216).root(4)).pwb(2).mul(player.hdrn8).mul(v.synm03);
        v.hdrn12wps = player.hdrn12.min(player.hdrn12.mul(16777216).root(4)).pwb(2).mul(player.hdrn12).mul(v.synm04);
        v.hdrn20wps = player.hdrn20.min(player.hdrn20.mul(16777216).root(4)).pwb(2).mul(player.hdrn20).mul(v.synm05);
    }
    v.hdrn4e = player.hdrn4w.div(1024).add(1).log(2).pow(0.4).div(1024).min(0.05);
    v.hdrn6e = player.hdrn6w.div(256).add(1).log(2).pow(0.4).div(1024).min(0.05);
    v.hdrn8e = player.hdrn8w.div(64).add(1).log(2).pow(0.4).div(1024).min(0.05);
    v.hdrn12e = player.hdrn12w.div(16).add(1).log(2).pow(0.4).div(1024).min(0.05);
    v.hdrn20e = player.hdrn20w.div(4).add(1).log(2).pow(0.4).div(1024).min(0.05);
    if (player.synu13.gte(1)) {
        v.wxzfe = player.bogglettl.div(2).add(1).root(2).min(16);
        v.hydfe = player.bogglettl.div(2).add(1).root(2).min(16);
        v.xkwze = player.bogglettl.div(2).root(2).mul(10).min(160);
        v.zzltwps = player.bogglettl.div(6).pwb(2).mul(player.bogglettl.div(6));
    }
    else {
        v.wxzfe = player.wxzf.add(1).root(2).min(16);
        v.hydfe = player.hydf.add(1).root(2).min(16);
        v.xkwze = player.xkwz.root(2).mul(10).min(160);
        v.zzltwps = player.zzlt.pwb(2).mul(player.zzlt);
    }
    v.ltwum1 = player.zzltw.max(1).root(16);
    v.ltwum2 = player.zzltw.max(1).root(16);
    v.ltwum3 = player.zzltw.max(1).root(16);
    v.ltwum4 = player.zzltw.max(1).pow(65536);
    if (player.tier06.gte(1)) {
        v.hdrn4wps = v.hdrn4wps.mul(player.tier06.pwb(10));
        v.hdrn6wps = v.hdrn6wps.mul(player.tier06.pwb(10));
        v.hdrn8wps = v.hdrn8wps.mul(player.tier06.pwb(10));
        v.hdrn12wps = v.hdrn12wps.mul(player.tier06.pwb(10));
        v.hdrn20wps = v.hdrn20wps.mul(player.tier06.pwb(10));
        v.zzltwps = v.zzltwps.mul(player.tier06.pwb(10));
    }
}

function getbox1() {
    if (player.PL4pts.gte(v.boxc1)) {
        let ttl = player.PL4pts.log(4).sub(4).min(player.PL4pts.log(2).log(1.04)).floor().add(1);
        player.bogglebox = player.bogglebox.add(ttl.sub(player.boxa1));
        player.boxa1 = ttl;
    }
}

function getbox2() {
    if (player.PL4fra.gte(v.boxc2)) {
        let ttl = player.PL4fra.root(4).sub(4).min(player.PL4fra.log(1.1)).floor().add(1);
        player.bogglebox = player.bogglebox.add(ttl.sub(player.boxa2));
        player.boxa2 = ttl;
    }
}

function openbox1() {
    let i = 0;
    if (player.bogglebox.gte(1)) {
        i = (Math.floor(Math.random() * 5));
        switch (i) {
            case 0:
                player.hdrn4 = player.hdrn4.add(1);
                break;
            case 1:
                player.hdrn6 = player.hdrn6.add(1);
                break;
            case 2:
                player.hdrn8 = player.hdrn8.add(1);
                break;
            case 3:
                player.hdrn12 = player.hdrn12.add(1);
                break;
            case 4:
                player.hdrn20 = player.hdrn20.add(1);
                break;
        }
        player.bogglebox = player.bogglebox.sub(1);
    }
}

function openbox2() {
    let r = player.bogglebox.mul(0.2);
    while (player.bogglebox.gt(r)) {
        openbox1();
    }
}

function resbox() {
    player.bogglebox = player.bogglettl;
    player.hdrn4 = new Decimal(0);
    player.hdrn6 = new Decimal(0);
    player.hdrn8 = new Decimal(0);
    player.hdrn12 = new Decimal(0);
    player.hdrn20 = new Decimal(0);
    player.wxzf = new Decimal(0);
    player.hydf = new Decimal(0);
    player.xkwz = new Decimal(0);
    player.zzlt = new Decimal(0);
    PL4reset();
}

function forge(tier) {
    switch (tier) {
        case 1:
            if (player.hdrn6.gte(1) & player.hdrn8.gte(1)) {
                player.hdrn6 = player.hdrn6.sub(1);
                player.hdrn8 = player.hdrn8.sub(1);
                player.wxzf = player.wxzf.add(1);
            }
            break;
        case 2:
            if (player.hdrn4.gte(1) & player.hdrn20.gte(1)) {
                player.hdrn4 = player.hdrn4.sub(1);
                player.hdrn20 = player.hdrn20.sub(1);
                player.hydf = player.hydf.add(1);
            }
            break;
        case 3:
            if (player.hdrn12.gte(1) & player.bogglebox.gte(1)) {
                player.hdrn12 = player.hdrn12.sub(1);
                player.bogglebox = player.bogglebox.sub(1);
                player.xkwz = player.xkwz.add(1);
            }
            break;
        case 4:
            if (player.wxzf.gte(1) & player.hydf.gte(1) & player.xkwz.gte(1)) {
                player.wxzf = player.wxzf.sub(1);
                player.hydf = player.hydf.sub(1);
                player.xkwz = player.xkwz.sub(1);
                player.zzlt = player.zzlt.add(1);
            }
            break;
    }
}

function resforge() {
    player.bogglebox = player.bogglebox.add(player.xkwz).add(player.zzlt);
    player.hdrn4 = player.hdrn4.add(player.hydf).add(player.zzlt);
    player.hdrn6 = player.hdrn6.add(player.wxzf).add(player.zzlt);
    player.hdrn8 = player.hdrn8.add(player.wxzf).add(player.zzlt);
    player.hdrn12 = player.hdrn12.add(player.xkwz).add(player.zzlt);
    player.hdrn20 = player.hdrn20.add(player.hydf).add(player.zzlt);
    player.wxzf = new Decimal(0);
    player.hydf = new Decimal(0);
    player.xkwz = new Decimal(0);
    player.zzlt = new Decimal(0);
    PL4reset();
}

function buyltwu(tier) {
    let cost = [1e3, 1e6, 1e9, 1e12, 1e15];
    if (player.zzltw.gte(cost[tier]))
        player.zzltu[tier] = true;
}

function getbatow() {
    let df = player.stage.sub(1).div(1000).min(10).floor();
    let hpstg = df.pwb(2).mul(player.stage.add(24)).sub(df.pwb(2).mul(df).sub(df.pwb(2).sub(1)).mul(1024));
    v.mhp = hpstg.div(16).pwb(2);
    v.pcps = v.cps.mul(v.skef02).mul(v.skef04).mul(player.chacom15.pwb(4));
    if (player.ntmr01.gte(0.05)) v.pcps = v.pcps.pow(v.ntme01.add(1));
    v.bpmpb = player.coin.add(1).log(2).div(16777216).min(0.000244140625);
    v.atke = player.atk.add(1).mul(v.btke).div(16).mul(v.skef01).mul(v.skef03).mul(player.chacom15.pwb(4));
    v.btke = player.btk.add(2).pow(v.ctke);
    v.ctke = player.ctk.div(4).add(2).hyp(v.dtke);
    v.dtke = player.dtk.div(16).add(1)
    v.atkc = player.atk.add(1).pow(4);
    v.btkc = player.btk.add(1).pwb(2);
    v.ctkc = player.ctk.add(2).pwb(1.414213562373095).pwb(2);
    v.dtkc = player.dtk.add(4).pwb(1.189207115002721).pwb(2).pwb(2);
    v.skptpd = player.stgmx.sub(800).div(200).floor();
    v.skptst = v.skptpd.add(5).mul(200);
    if (v.ntma.gte(152)) {
        v.skef01 = player.PL4energy.max(2).log(2).pow(player.skptcp.mul(0.125));
        v.skef02 = player.PL4energy.max(2).log(2).pow(player.skptcp.mul(0.125));
        v.skef03 = player.hdrn4w.max(2).log(2).pow(player.skptcp.mul(0.625));
        v.skef04 = player.hdrn4w.max(2).log(2).pow(player.skptcp.mul(0.625));
    }
    else {
        v.skef01 = player.PL4energy.max(2).log(2).pow(player.sklv01.mul(0.25));
        v.skef02 = player.PL4energy.max(2).log(2).pow(player.sklv02.mul(0.25));
        v.skef03 = player.hdrn4w.max(2).log(2).pow(player.sklv03.mul(1.25));
        v.skef04 = player.hdrn4w.max(2).log(2).pow(player.sklv04.mul(1.25));
    }
    if (player.stgmx.gte(1000)) {
        player.atk = player.coin.max(0).root(4).floor();
        player.btk = player.coin.max(1).log(2).floor();
        player.ctk = player.coin.max(2).log(2).log(1.414213562373095).sub(1).max(0).floor();
        player.dtk = player.coin.max(4).log(2).log(2).log(1.189207115002721).sub(3).max(0).floor();
    }
}

function dfstr() {
    let df = ["简单", "普通", "困难", "混沌", "淸沍", "淹沎", "淺沏", "添沐", "淼沑", "淽沒", "淾沓",]
    return (df[player.stage.sub(1).div(1000).min(10).floor().toNumber()] + "(" + notatint(player.stage.sub(1).div(1000).min(10).floor()) + ")" );
}

function stageclear() {
    if (player.stage.gte(player.stgcl.add(1))) player.stgcl = player.stage;
    if (player.stgcl.gt(player.stgmx)) player.stgmx = player.stgcl
    player.stage = player.stage.add(1);
    player.rhp = v.mhp;
    let df = player.stage.sub(1).div(1000).min(10).floor();
    v.cps = player.stgcl.add(df.add(1).mul(24)).div(16).pwb(2).div(16);
}

function chgstg(tier) {
    switch (tier){
        case 1:
            if (player.stage.gt(1000)) player.stage = player.stage.sub(1000);
            else player.stage = new Decimal(1);
            break;
        case 2:
            if (player.stage.gt(100)) player.stage = player.stage.sub(100);
            else player.stage = new Decimal(1);
            break;
        case 3:
            if (player.stage.gt(10)) player.stage = player.stage.sub(10);
            else player.stage = new Decimal(1);
            break;
        case 4:
            if (player.stage.gt(1)) player.stage = player.stage.sub(1);
            else player.stage = new Decimal(1);
            break;
        case 5:
            if (player.stage.add(1).lte(player.stgcl.add(1))) player.stage = player.stage.add(1);
            else player.stage = player.stgcl.add(1);
            break;
        case 6:
            if (player.stage.add(10).lte(player.stgcl.add(1))) player.stage = player.stage.add(10);
            else player.stage = player.stgcl.add(1);
            break;
        case 7:
            if (player.stage.add(100).lte(player.stgcl.add(1))) player.stage = player.stage.add(100);
            else player.stage = player.stgcl.add(1);
            break;
        case 8:
            if (player.stage.add(1000).lte(player.stgcl.add(1))) player.stage = player.stage.add(1000);
            else player.stage = player.stgcl.add(1);
            break;
    }
    getbatow();
    player.rhp = v.mhp;
}

function buybatu(tier) {
    getbatow();
    switch (tier) {
        case 1:
            if (player.coin.gt(v.atkc)) {
                player.atk = player.atk.add(1);
                player.coin = player.coin.sub(v.atkc);
            }
            break;
        case 2:
            if (player.coin.gt(v.btkc)) {
                player.btk = player.btk.add(1);
                player.coin = player.coin.sub(v.btkc);
            }
            break;
        case 3:
            if (player.coin.gt(v.ctkc)) {
                player.ctk = player.ctk.add(1);
                player.coin = player.coin.sub(v.ctkc);
            }
            break;
        case 4:
            if (player.coin.gt(v.dtkc)) {
                player.dtk = player.dtk.add(1);
                player.coin = player.coin.sub(v.dtkc);
            }
            break; 
    }
}

function batpre() {
    if (player.stgcl.lt(1000)) return;
    player.skptcp = v.skptpd;
    player.skpthv = player.skptcp.sub(player.sklv01).sub(player.sklv02).sub(player.sklv03).sub(player.sklv04);
    player.coin = new Decimal(0);
    player.stage = new Decimal(1);
    player.stgcl = new Decimal(0);
    player.atk = new Decimal(0);
    player.btk = new Decimal(0);
    player.ctk = new Decimal(0);
    player.dtk = new Decimal(0);
}

function sklv(tier) {
    switch (tier) {
        case 1:
            if (player.sklv01.gt(0)) {
                player.sklv01 = player.sklv01.sub(1);
                player.skpthv = player.skpthv.add(1);
            }
            break;
        case 2:
            if (player.skpthv.gt(0)) {
                player.sklv01 = player.sklv01.add(1);
                player.skpthv = player.skpthv.sub(1);
            }
            break;
        case 3:
            if (player.sklv02.gt(0)) {
                player.sklv02 = player.sklv02.sub(1);
                player.skpthv = player.skpthv.add(1);
            }
            break;
        case 4:
            if (player.skpthv.gt(0)) {
                player.sklv02 = player.sklv02.add(1);
                player.skpthv = player.skpthv.sub(1);
            }
            break;
        case 5:
            if (player.sklv03.gt(0)) {
                player.sklv03 = player.sklv03.sub(1);
                player.skpthv = player.skpthv.add(1);
            }
            break;
        case 6:
            if (player.skpthv.gt(0)) {
                player.sklv03 = player.sklv03.add(1);
                player.skpthv = player.skpthv.sub(1);
            }
            break;
        case 7:
            if (player.sklv04.gt(0)) {
                player.sklv04 = player.sklv04.sub(1);
                player.skpthv = player.skpthv.add(1);
            }
            break;
        case 8:
            if (player.skpthv.gt(0)) {
                player.sklv04 = player.sklv04.add(1);
                player.skpthv = player.skpthv.sub(1);
            }
            break;
    }
}

function reskl() {
    player.sklv01 = new Decimal(0);
    player.sklv02 = new Decimal(0);
    player.sklv03 = new Decimal(0);
    player.sklv04 = new Decimal(0);
    player.skpthv = player.skptcp;
}

function getsyn() {
    v.synps01 = new Decimal(1);
    v.synps02 = new Decimal(1);
    v.synps03 = new Decimal(1);
    v.synps04 = new Decimal(1);
    v.synps05 = new Decimal(1);
    v.synum01 = player.syna01.max(2).log(2).pow(player.synu01.div(16));
    v.synum02 = player.syna02.max(2).log(2).pow(player.synu02.div(16));
    v.synum03 = player.syna03.max(2).log(2).pow(player.synu03.div(16));
    v.synum04 = player.syna04.max(2).log(2).pow(player.synu04.div(16));
    v.synum05 = player.syna05.max(2).log(2).pow(player.synu05.div(16));
    v.synum06 = player.syna02.mul(player.syna03).mul(player.syna04).mul(player.syna05).root(4).max(2).log(2).pow(player.synu06.div(4));
    v.synum07 = player.syna01.mul(player.syna03).mul(player.syna04).mul(player.syna05).root(4).max(2).log(2).pow(player.synu07.div(4));
    v.synum08 = player.syna01.mul(player.syna02).mul(player.syna04).mul(player.syna05).root(4).max(2).log(2).pow(player.synu08.div(4));
    v.synum09 = player.syna01.mul(player.syna02).mul(player.syna03).mul(player.syna05).root(4).max(2).log(2).pow(player.synu09.div(4));
    v.synum10 = player.syna01.mul(player.syna02).mul(player.syna03).mul(player.syna04).root(4).max(2).log(2).pow(player.synu10.div(4));
    v.synps01 = v.synps01.mul(v.synum06).mul(v.synum02).mul(v.synum03).mul(v.synum04).mul(v.synum05);
    v.synps02 = v.synps02.mul(v.synum07).mul(v.synum01).mul(v.synum03).mul(v.synum04).mul(v.synum05);
    v.synps03 = v.synps03.mul(v.synum08).mul(v.synum01).mul(v.synum02).mul(v.synum04).mul(v.synum05);
    v.synps04 = v.synps04.mul(v.synum09).mul(v.synum01).mul(v.synum02).mul(v.synum03).mul(v.synum05);
    v.synps05 = v.synps05.mul(v.synum10).mul(v.synum01).mul(v.synum02).mul(v.synum03).mul(v.synum04);
    for (i = 1; i <= 5; i++) {
        if (player.synfcs == 0) break;
        let name = tiername[i];
        if (player.synfcs == i | v.ntma.gte(39)) v["synps" + name] = v["synps" + name].pow(1.05).mul(4);
        else v["synps" + name] = v["synps" + name].root(1.05).div(4);
    }
    for (i = 1; i <= 10; i++) {
        let name = tiername[i];
        if (player["synu" + name].lte(18)) v["synuc" + name] = player["synu" + name].add(1).pow(1.15).pwb(4).mul(10);
        else v["synuc" + name] = player["synu" + name].add(1).pow(2).div(12).pwb(4).mul(10);
    }
    v.synm01 = player.syna01.div(16).add(1).pow(4);
    v.synm02 = player.syna02.div(16).add(1).pow(4);
    v.synm03 = player.syna03.div(16).add(1).pow(4);
    v.synm04 = player.syna04.div(16).add(1).pow(4);
    v.synm05 = player.syna05.div(16).add(1).pow(4);
}

function fcssyn(tier) {
    player.synfcs = tier;
}

function buysynu(tier) {
    let name = tiername[tier];
    if (tier >= 1 & tier <= 5) {
        if (player["syna" + name].gte(v["synuc" + name])) {
            player["synu" + name] = player["synu" + name].add(1);
            player["syna" + name] = player["syna" + name].sub(v["synuc" + name]);
        }
    }
    else if (tier >= 6 & tier <= 10) {
        let name2 = tiername[tier - 5]
        if (player["syna" + name2].gte(v["synuc" + name])) {
            player["synu" + name] = player["synu" + name].add(1);
            player["syna" + name2] = player["syna" + name2].sub(v["synuc" + name]);
        }
    }
    else if (tier == 11) {
        if (player.syna01.gte(1e6)) player.synu11 = new Decimal(1);
    }
    else if (tier == 12) {
        if (player.syna01.gte(1e12)) player.synu12 = new Decimal(1);
    }
    else if (tier == 13) {
        if (player.syna01.gte(1e18)) player.synu13 = new Decimal(1);
    }
}

function ulAnm4() {
    if (player.PL4pts.gte("6e666666") & player.hasunlockedanm4 == false) player.hasunlockedanm4 = true;
}

function encyzb() {
    if (player.incyzb != true) player.incyzb = true;
    else player.incyzb = false;
    PL4reset();
    player.wsca33 = player.wscb33;
    player.wsca34 = player.wscb34;
    player.wsca35 = player.wscb35;
    player.wsca36 = player.wscb36;
    player.wsca37 = player.wscb37;
    player.wsca38 = player.wscb38;
    player.wsca39 = player.wscb39;
    player.wsca40 = player.wscb40;
    player.enengy = new Decimal(2);
}

function shsl(tier) {
    if (player.incyzb == true) return;
    if (tier == 1) player.shdwsl[0] = true;
    if (tier == 2 & player.shdwsl[0] == true) player.shdwsl[1] = true;
    if (tier == 3 & player.shdwsl[0] == true) player.shdwsl[2] = true;
    if (tier == 4 & (player.shdwsl[1] == true | player.shdwsl[2] == true)) player.shdwsl[3] = true;
    if (tier == 5 & (player.shdwsl[1] == true | player.shdwsl[2] == true)) player.shdwsl[4] = true;
    if (tier == 6 & (player.shdwsl[1] == true | player.shdwsl[2] == true)) player.shdwsl[5] = true;
    if (tier == 7 & (player.shdwsl[3] == true | player.shdwsl[4] == true | player.shdwsl[5] == true)) player.shdwsl[6] = true;
    if (tier == 8 & (player.shdwsl[3] == true | player.shdwsl[4] == true | player.shdwsl[5] == true)) player.shdwsl[7] = true;
    if (tier == 9 & (player.shdwsl[3] == true | player.shdwsl[4] == true | player.shdwsl[5] == true)) player.shdwsl[8] = true;
    if (tier == 10 & (player.shdwsl[3] == true | player.shdwsl[4] == true | player.shdwsl[5] == true)) player.shdwsl[9] = true;
}

function reshsl() {
    if (player.incyzb == true) return;
    for (let i = 0; i < 10; i++) player.shdwsl[i] = false;
}

function shad(tier) {
    if (player.incyzb == true) return;
    switch (tier) {
        case 1:
            if (player.shdwlv01.gt(0)) {
                player.shdwlv01 = player.shdwlv01.sub(1);
            }
            break;
        case 2:
            if (player.shdwlv01.lt(5)) {
                player.shdwlv01 = player.shdwlv01.add(1);
            }
            break;
        case 3:
            if (player.shdwlv02.gt(0)) {
                player.shdwlv02 = player.shdwlv02.sub(1);
            }
            break;
        case 4:
            if (player.shdwlv02.lt(5)) {
                player.shdwlv02 = player.shdwlv02.add(1);
            }
            break;
        case 5:
            if (player.shdwlv03.gt(0)) {
                player.shdwlv03 = player.shdwlv03.sub(1);
            }
            break;
        case 6:
            if (player.shdwlv03.lt(5)) {
                player.shdwlv03 = player.shdwlv03.add(1);
            }
            break;
        case 7:
            if (player.shdwlv04.gt(0)) {
                player.shdwlv04 = player.shdwlv04.sub(1);
            }
            break;
        case 8:
            if (player.shdwlv04.lt(5)) {
                player.shdwlv04 = player.shdwlv04.add(1);
            }
            break;
        }
}

function getanm4() {
    v.shdwpd = new Decimal(1);
    v.shdb01 = player.shdwlv01.mul(-0.1).add(1);
    v.shdb02 = player.shdwlv02.mul(-0.1).add(1).pow(2);
    v.shdb03 = player.shdwlv03.pwb(1e-10);
    v.shdb04 = player.shdwlv04.mul(-0.1).add(1);
    if (player.shdwsl[0] == true) v.shdwpd = v.shdwpd.mul(4);
    if (player.shdwsl[1] == true) v.shdwpd = v.shdwpd.mul(8);
    if (player.shdwsl[2] == true) v.shdwpd = v.shdwpd.mul(8);
    if (player.shdwsl[3] == true) v.shdwpd = v.shdwpd.mul(16);
    if (player.shdwsl[4] == true) v.shdwpd = v.shdwpd.mul(16);
    if (player.shdwsl[5] == true) v.shdwpd = v.shdwpd.mul(16);
    if (player.shdwsl[6] == true) v.shdwpd = v.shdwpd.mul(player.shdwlv01.pwb(4));
    if (player.shdwsl[7] == true) v.shdwpd = v.shdwpd.mul(player.shdwlv02.pwb(4));
    if (player.shdwsl[8] == true) v.shdwpd = v.shdwpd.mul(player.shdwlv03.pwb(4));
    if (player.shdwsl[9] == true) v.shdwpd = v.shdwpd.mul(player.shdwlv04.pwb(4));
    if (player.incyzb == true & player.energy.gte("e1e15")) {
        if (player.shdwrc.lt(v.shdwpd)) player.shdwrc = v.shdwpd;
    }
    v.anm4c01 = scaleUpgd(player.anm4u01.add(1).mul(1)).pwb(10);
    v.anm4c02 = scaleUpgd(player.anm4u02.add(1).mul(2)).pwb(10);
    v.anm4c03 = scaleUpgd(player.anm4u03.add(1).mul(3)).pwb(10);
    v.anm4c04 = scaleUpgd(player.anm4u04.add(1).mul(4)).pwb(10);
}

function buyanm4u(tier) {
    let name = tiername[tier];
    if (player.anm4.gte(v["anm4c" + name])) {
        player["anm4u" + name] = player["anm4u" + name].add(1);
        player.anm4 = player.anm4.sub(v["anm4c" + name]);
    }
}

function autobuyanm4upg() {
    if (player.quau[2] == true) {
        let max1 = invscaleUpgd(player.anm4.log(10)).floor().sub(player.anm4u01).max(0);
        let max2 = invscaleUpgd(player.anm4.log(10)).div(2).floor().sub(player.anm4u02).max(0);
        let max3 = invscaleUpgd(player.anm4.log(10)).div(3).floor().sub(player.anm4u03).max(0);
        let max4 = invscaleUpgd(player.anm4.log(10)).div(4).floor().sub(player.anm4u04).max(0);
        if (player.anm4.gte(v.anm4c01)) player.anm4u01 = player.anm4u01.add(max1);
        if (player.anm4.gte(v.anm4c02)) player.anm4u02 = player.anm4u02.add(max2);
        if (player.anm4.gte(v.anm4c03)) player.anm4u03 = player.anm4u03.add(max3);
        if (player.anm4.gte(v.anm4c04)) player.anm4u04 = player.anm4u04.add(max4);
        getanm4();
        if (player.anm4.gte(v.anm4c01)) player.anm4u01 = player.anm4u01.add(1);
        if (player.anm4.gte(v.anm4c02)) player.anm4u02 = player.anm4u02.add(1);
        if (player.anm4.gte(v.anm4c03)) player.anm4u03 = player.anm4u03.add(1);
        if (player.anm4.gte(v.anm4c04)) player.anm4u04 = player.anm4u04.add(1);
    }
}

function getntm() {
    if (player.shdwrc.lt(1024)) return;
    if (player.ntmv.lt(300)) v.ntmc01 = player.ntmv.add(1).pwb("ee6");
    else v.ntmc01 = player.ntmv.sub(299).pwb(1.01).mul(300).pwb("ee6");
    v.ntmc02 = player.nrev.add(1).mul(10);
    v.ntmc03 = player.ntmu03.add(1).add(player.ntmu04.mul(6));
    v.ntmc04 = new Decimal(9);
    v.ntmm = player.nrev.mul(0.03).add(1);
    v.ntma = player.ntmv.mul(v.ntmm);
    v.ntmecd = new Decimal(30).mul(player.ntmu03.pwb(0.6));
    v.ntmels = new Decimal(30).mul(player.ntmu03.pwb(0.8));
    for (i = 1; i <= 6; i++) {
        let name = tiername[i];
        if (player["ntmr" + name].gt(0.05)) player["ntmr" + name] = player["ntmr" + name].sub(0.05);
        else player["ntmr" + name] = new Decimal(0);
        if (i == 1) v["ntme" + name] = v.ntma.pow(0.5).mul(0.01);
        else v["ntme" + name] = v.ntma.pow(0.5).mul(0.0001);
    }
    player.ntmtmr = player.ntmtmr.sub(0.05);
    if (player.ntmtmr.lte(0)) ntmact();
    if (player.ntmu04.gte(1)) player.ntmr01 = new Decimal(1e308);
    if (player.ntmu04.gte(2)) player.ntmr02 = new Decimal(1e308);
    if (player.ntmu04.gte(3)) player.ntmr03 = new Decimal(1e308);
}

function ntmact() {
    player.ntmtmr = v.ntmecd;
    let i = (Math.floor(Math.random() * 3)) + player.ntmu04.toNumber();
    if (i == 0) player.ntmr01 = v.ntmels;
    else if (i == 1) player.ntmr02 = v.ntmels;
    else if (i == 2) player.ntmr03 = v.ntmels;
    else if (i == 3) player.ntmr04 = v.ntmels;
    else if (i == 4) player.ntmr05 = v.ntmels;
    else if (i == 5) player.ntmr06 = v.ntmels;
    else return;
}

function buyntmu(tier) {
    if (tier == 1 & player.PL4pts.gte(v.ntmc01)) player.ntmv = player.ntmv.add(1);
    if (tier == 2 & player.ntmv.gte(v.ntmc02)) player.nrev = player.nrev.add(1);
    if (tier == 3 & player.nrev.gte(v.ntmc03) & player.ntmu03.lt(9)) player.ntmu03 = player.ntmu03.add(1);
    if (tier == 4 & player.ntmu03.gte(v.ntmc04) & player.ntmu04.lt(3)) {
        player.ntmu04 = player.ntmu04.add(1);
        player.ntmu03 = new Decimal(0);
        player.ntmtmr = new Decimal(30);
        for (i = 1; i <= 6; i++) {
            let name = tiername[i];
            player["ntmr" + name] = new Decimal(0);
        }
    }
}

function PL5reset() {
    if (player.PL4pts.lt("4.198e323228496")) return;
    var confirmation = true;
    if (player.PL5conf == true) confirmation = confirm("您确定要扭敧吗？这将重置之前的一切进度，但是可以获得扭敧点！第一次扭敧解锁41~48式风灵和其他内容");
    if (confirmation | !player.PL5conf) PL5FR();
}

async function PL5FR() {
    
        player.PL5pts = player.PL5pts.add(player.PL4pts.root(1073741824).floor());
        player.PL5ptsttl = player.PL5ptsttl.add(player.PL4pts.root(1073741824).floor());
        player.PL5tms = player.PL5tms.add(1);
        player.PL5sec = new Decimal(0);
        player.PL5secrl = new Decimal(0);

        player.hasUnlockedPL5 = true;

        clearInterval(prod);
        prod = null;

        player.PL1tms = new Decimal(0);
        player.PL2tms = new Decimal(0);
        player.PL3tms = new Decimal(0);
    player.PL4tms = new Decimal(0);
    if (player.quau[3] == false) {
        for (let i = 0; i <= 7;i++) player.PL4goal[i] = false;
    }
    if (player.quau[4] == false) {
        for (let i = 8; i <= 15; i++) player.PL4goal[i] = false;
    }
        if (player.PL4goal[2] == true) player.PL2tms = new Decimal(12);
        if (player.quau[1] == true) player.PL2tms = new Decimal(4);

        player.energy = new Decimal(2);
        player.wscb01 = new Decimal(0);
        player.wscb02 = new Decimal(0);
        player.wscb03 = new Decimal(0);
        player.wscb04 = new Decimal(0);
        player.wscb05 = new Decimal(0);
        player.wscb06 = new Decimal(0);
        player.wscb07 = new Decimal(0);
        player.wscb08 = new Decimal(0);
        player.wscb09 = new Decimal(0);
        player.wscb10 = new Decimal(0);
        player.wscb11 = new Decimal(0);
        player.wscb12 = new Decimal(0);
        player.wscb13 = new Decimal(0);
        player.wscb14 = new Decimal(0);
        player.wscb15 = new Decimal(0);
        player.wscb16 = new Decimal(0);
        player.wscb17 = new Decimal(0);
        player.wscb18 = new Decimal(0);
        player.wscb19 = new Decimal(0);
        player.wscb20 = new Decimal(0);
        player.wscb21 = new Decimal(0);
        player.wscb22 = new Decimal(0);
        player.wscb23 = new Decimal(0);
        player.wscb24 = new Decimal(0);
        player.wscb25 = new Decimal(0);
        player.wscb26 = new Decimal(0);
        player.wscb27 = new Decimal(0);
        player.wscb28 = new Decimal(0);
        player.wscb29 = new Decimal(0);
        player.wscb30 = new Decimal(0);
        player.wscb31 = new Decimal(0);
        player.wscb32 = new Decimal(0);
        player.wscb33 = new Decimal(0);
        player.wscb34 = new Decimal(0);
        player.wscb35 = new Decimal(0);
        player.wscb36 = new Decimal(0);
        player.wscb37 = new Decimal(0);
        player.wscb38 = new Decimal(0);
        player.wscb39 = new Decimal(0);
        player.wscb40 = new Decimal(0);

        player.wsca01 = new Decimal(0);
        player.wsca02 = new Decimal(0);
        player.wsca03 = new Decimal(0);
        player.wsca04 = new Decimal(0);
        player.wsca05 = new Decimal(0);
        player.wsca06 = new Decimal(0);
        player.wsca07 = new Decimal(0);
        player.wsca08 = new Decimal(0);
        player.wsca09 = new Decimal(0);
        player.wsca10 = new Decimal(0);
        player.wsca11 = new Decimal(0);
        player.wsca12 = new Decimal(0);
        player.wsca13 = new Decimal(0);
        player.wsca14 = new Decimal(0);
        player.wsca15 = new Decimal(0);
        player.wsca16 = new Decimal(0);
        player.wsca17 = new Decimal(0);
        player.wsca18 = new Decimal(0);
        player.wsca19 = new Decimal(0);
        player.wsca20 = new Decimal(0);
        player.wsca21 = new Decimal(0);
        player.wsca22 = new Decimal(0);
        player.wsca23 = new Decimal(0);
        player.wsca24 = new Decimal(0);
        player.wsca25 = new Decimal(0);
        player.wsca26 = new Decimal(0);
        player.wsca27 = new Decimal(0);
        player.wsca28 = new Decimal(0);
        player.wsca29 = new Decimal(0);
        player.wsca30 = new Decimal(0);
        player.wsca31 = new Decimal(0);
        player.wsca32 = new Decimal(0);
        player.wsca33 = new Decimal(0);
        player.wsca34 = new Decimal(0);
        player.wsca35 = new Decimal(0);
        player.wsca36 = new Decimal(0);
        player.wsca37 = new Decimal(0);
        player.wsca38 = new Decimal(0);
        player.wsca39 = new Decimal(0);
        player.wsca40 = new Decimal(0);

        player.tier01 = new Decimal(0);
        player.tier02 = new Decimal(0);
        player.tier03 = new Decimal(0);
        player.tier04 = new Decimal(0);
        player.tier05 = new Decimal(0);
        player.tier06 = new Decimal(0);
        player.upgd01 = new Decimal(0);
        player.upgd02 = new Decimal(0);
        player.upgd03 = new Decimal(0);
        player.upgd04 = new Decimal(0);
        player.upgd05 = new Decimal(0);
        player.upgd06 = new Decimal(0);

        player.PL1energy = new Decimal(1);
        player.PL1pts = new Decimal(0);
        player.PL1sec = new Decimal(0);
        if (player.PL2tms.eq(0)) player.PL1upg = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,];
        if (player.PL2tms.eq(1) | player.PL4goal[1] == true| player.quau[1] == true) player.PL1upg = [true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false,];
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
        player.alef = new Decimal(0);
        player.beth = new Decimal(0);
        player.giml = new Decimal(0);
        if (player.PL2tms.lte(5)) {
            player.hasunlockedanmorb = false;
            player.orbupg = [false, false, false, false, false, false, false, false,];
        }
        player.anmpar = new Decimal(0);
        player.anmorb = new Decimal(0);
        player.anmorbttl = new Decimal(0);
        player.parupg01 = new Decimal(0);
        player.parupg02 = new Decimal(0);
        player.parupg03 = new Decimal(0);
        player.parupg04 = new Decimal(0);
        if (player.PL2tms.lte(1) & player.PL4goal[1] != true & player.quau[1] != true) player.normchacom = [false, false, false, false, false, false, false, false, false, false, false, false,];
        if (player.PL2tms.lte(7)) {
            player.chacom01 = new Decimal(0);
            player.chacom02 = new Decimal(0);
            player.chacom03 = new Decimal(0);
            player.chacom04 = new Decimal(0);
        }

        player.PL2energy = new Decimal(1);
        player.PL2pts = new Decimal(0);
        player.PL2ptsttl = new Decimal(0);
        if (player.PL4goal[4] == true) player.PL2tms = new Decimal(10);
        player.PL2sec = new Decimal(0);
        player.PL2tmsc = new Decimal(0);
        if (player.PL4goal[4] != true) {
            player.PL2upg01 = new Decimal(0);
            player.PL2upg02 = new Decimal(0);
            player.PL2upg03 = new Decimal(0);
            player.PL2upg04 = new Decimal(0);
            player.chacom05 = new Decimal(0);
            player.chacom06 = new Decimal(0);
            player.chacom07 = new Decimal(0);
            player.chacom08 = new Decimal(0);
        }
        if (player.quau[1] == true) player.PL2upg01 = new Decimal(8);
        player.elmt = new Decimal(0);
        player.elmttl = new Decimal(0);
        if (player.PL4goal[5] != true) {
            player.elmt01 = new Decimal(0);
            player.elmt02 = new Decimal(0);
            player.elmt03 = new Decimal(0);
            player.elmt04 = new Decimal(0);
        }
        player.elmten01 = new Decimal(0);
        player.elmten02 = new Decimal(0);
        player.elmten03 = new Decimal(0);
        player.elmten04 = new Decimal(0);
        if (player.PL4goal[4] != true) {
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
        if (player.PL4goal[5] != true) {
            player.alcspd = new Decimal(0);
            player.alch01 = new Decimal(0);
            player.alch02 = new Decimal(0);
            player.alch03 = new Decimal(0);
            player.alch04 = new Decimal(0);
            player.alch05 = new Decimal(0);
            player.alch06 = new Decimal(0);
            player.alca = [false, false, false, false, false, false, false, false];
            player.alcu01 = new Decimal(0);
            player.alcu02 = new Decimal(0);
            player.alcu03 = new Decimal(0);
            player.alcu04 = new Decimal(0);
            player.alcu05 = new Decimal(0);
            player.alcu06 = new Decimal(0);
            player.alcu = [false, false, false, false, false, false, false, false];
        }
        if (player.PL4goal[5] != true) player.hasunlockedanm2 = false;
        player.infytx = false;
        if (player.PL4goal[5] != true) player.anm2sc = new Decimal(0);
        player.anm2 = new Decimal(0);
        player.anm2u01 = new Decimal(0);
        player.anm2u02 = new Decimal(0);
        player.anm2u03 = new Decimal(0);
        player.anm2u04 = new Decimal(0);

        player.PL3energy = new Decimal(1);
        player.PL3pts = new Decimal(0);
        player.PL3ptsttl = new Decimal(0);
        player.PL3sec = new Decimal(0);
        if (player.PL4goal[9] != true) {
            player.chacom09 = new Decimal(0);
            player.chacom10 = new Decimal(0);
            player.chacom11 = new Decimal(0);
            player.chacom12 = new Decimal(0);
        }

        player.res = [false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
        ];
        player.inres = 0,
        player.resa01 = new Decimal(0);
        player.resa02 = new Decimal(0);
        player.resa03 = new Decimal(0);
        player.resa04 = new Decimal(0);
        if (player.PL4goal[4] != true) {
            player.resa05 = new Decimal(0);
            player.resa06 = new Decimal(0);
            player.resa07 = new Decimal(0);
            player.resa08 = new Decimal(0);
        }
        if (player.PL4goal[5] != true) {
            player.resa09 = new Decimal(0);
            player.resa10 = new Decimal(0);
            player.resa11 = new Decimal(0);
            player.resa12 = new Decimal(0);
        }
        if (player.PL4goal[6] != true) {
            player.resa13 = new Decimal(0);
            player.resa14 = new Decimal(0);
            player.resa15 = new Decimal(0);
            player.resa16 = new Decimal(0);
        }
        if (player.quau[1] == true) player.resa05 = new Decimal(1);
        player.resp01 = new Decimal(0);
        player.resp02 = new Decimal(0);
        player.resp03 = new Decimal(0);
        player.resp04 = new Decimal(0);
        player.resp05 = new Decimal(0);
        player.resp06 = new Decimal(0);
        player.resp07 = new Decimal(0);
        player.resp08 = new Decimal(0);
        player.resp09 = new Decimal(0);
        player.resp10 = new Decimal(0);
        player.resp11 = new Decimal(0);
        player.resp12 = new Decimal(0);
        player.resp13 = new Decimal(0);
        player.resp14 = new Decimal(0);
        player.resp15 = new Decimal(0);
        player.resp16 = new Decimal(0);
        if (player.PL4goal[3] != true) {
            player.ptn = [false, false, false, false, false, false, false, false,];
            player.ptnu01 = new Decimal(0);
            player.ptnu02 = new Decimal(0);
            player.ptnu03 = new Decimal(0);
            player.ptnu04 = new Decimal(0);
        }
        player.tthamnt = new Decimal(0);
        player.tthsize = new Decimal(1);
        player.tthgrow = new Decimal(0);
        player.ingrow = false,
            player.tthseed = new Decimal(0);
        player.tthgene = new Decimal(0);
        player.tthsucr = new Decimal(0);
        player.tthimpr = new Decimal(1);
        if (player.PL4goal[6] != true) {
            player.tthpu1 = new Decimal(0);
            player.tthpu2 = new Decimal(0);
            player.tthpu3 = new Decimal(0);
            player.tthpu4 = new Decimal(0);
            player.tthpu = [false, false, false, false,];
        }
        player.tthpres = new Decimal(0);
        player.tthprem = new Decimal(1);
        player.tthu01 = new Decimal(0);
        player.tthu02 = new Decimal(0);
        player.tthu03 = new Decimal(0);
        player.tthu04 = new Decimal(0);
        if (player.PL4goal[5] != true) {
            player.xyzx = new Decimal(0);
            player.xyzy = new Decimal(0);
            player.xyzz = new Decimal(0);
            player.xyzt = new Decimal(0);
            player.xyzu = [false, false, false, false,];
            player.xyzsw = new Decimal(0);
            player.xyzbo = new Decimal(0);
            player.xyze = new Decimal(0);
            player.xyzf = new Decimal(0);
            player.xyzg = new Decimal(0);
            player.xyzh = new Decimal(0);
            player.xyzegn = new Decimal(0);
            player.xyzfgn = new Decimal(0);
            player.xyzggn = new Decimal(0);
            player.xyzhgn = new Decimal(0);
        }
        if (player.PL4goal[4] != true) {
            player.hasunlockedanm3 = false,
                player.anm3u = [false, false, false, false,];
        }
        player.anm3u01 = new Decimal(0);
        player.anm3u02 = new Decimal(0);
        player.anm3u03 = new Decimal(0);
        player.anm3u04 = new Decimal(0);
        player.anm3 = new Decimal(0);
        player.inreac = false,
            player.reacp = new Decimal(0);
        player.reacm1 = new Decimal(1);
        player.reacm2 = new Decimal(0);
        player.cata = new Decimal(1);
        if (player.PL4goal[8] != true) {
            player.convu = [
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
                false, false, false, false,
            ];
            player.convr = [false, false, false, false,];
            player.convc = [false, false, false, false,];
            player.convn = new Decimal(0);
        }

        player.PL4energy = new Decimal(1);
        player.PL4pts= new Decimal(0);
        player.PL4ptsttl= new Decimal(0);
        player.PL4tms= new Decimal(0);
        player.PL4sec= new Decimal(0);
    player.PL4secrl = new Decimal(0);
    player.chacom13 = new Decimal(0);
    player.chacom14 = new Decimal(0);
    player.chacom15 = new Decimal(0);
    player.chacom16 = new Decimal(0);

        player.PL4goal= [false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
        ];
        if (player.quau[1] == true) player.PL4goal[1] = true;
        player.sta8n1= true,
        player.PL4fra= new Decimal(0);
        player.PL4frattl= new Decimal(0);
        player.frau01= new Decimal(0);
        player.frau02= new Decimal(0);
        player.frau03= new Decimal(0);
        player.frau04= new Decimal(0);
        player.frau05= new Decimal(0);
        player.frau06= new Decimal(0);
        player.frau07= new Decimal(0);
        player.frau08= new Decimal(0);
        player.frau09= new Decimal(0);
        player.frau10= new Decimal(0);
        player.bogglebox= new Decimal(0);
        player.bogglettl= new Decimal(0);
        player.boxa1= new Decimal(0);
        player.boxa2= new Decimal(0);
        player.hdrn4= new Decimal(0);
        player.hdrn6= new Decimal(0);
        player.hdrn8= new Decimal(0);
        player.hdrn12= new Decimal(0);
        player.hdrn20= new Decimal(0);
        player.hdrn4w= new Decimal(0);
        player.hdrn6w= new Decimal(0);
        player.hdrn8w= new Decimal(0);
        player.hdrn12w= new Decimal(0);
        player.hdrn20w= new Decimal(0);
        player.wxzf= new Decimal(0);
        player.hydf= new Decimal(0);
        player.xkwz= new Decimal(0);
        player.zzlt= new Decimal(0);
        player.zzltw= new Decimal(0);
        player.zzltu= [false, false, false, false, false,];
        player.stage= new Decimal(1);
        player.stgcl= new Decimal(0);
        player.stgmx= new Decimal(1);
        player.coin= new Decimal(0);
        player.atk= new Decimal(0);
        player.btk= new Decimal(0);
        player.ctk= new Decimal(0);
        player.dtk= new Decimal(0);
        player.rhp= new Decimal(0);
        player.skpthv= new Decimal(0);
        player.skptcp= new Decimal(0);
        player.sklv01= new Decimal(0);
        player.sklv02= new Decimal(0);
        player.sklv03= new Decimal(0);
        player.sklv04= new Decimal(0);
        player.syna01= new Decimal(0);
        player.syna02= new Decimal(0);
        player.syna03= new Decimal(0);
        player.syna04= new Decimal(0);
        player.syna05= new Decimal(0);
        player.synfcs= 0,
        player.synu01= new Decimal(0);
        player.synu02= new Decimal(0);
        player.synu03= new Decimal(0);
        player.synu04= new Decimal(0);
        player.synu05= new Decimal(0);
        player.synu06= new Decimal(0);
        player.synu07= new Decimal(0);
        player.synu08= new Decimal(0);
        player.synu09= new Decimal(0);
        player.synu10= new Decimal(0);
        player.synu11= new Decimal(0);
    player.synu12 = new Decimal(0);
    player.synu13 = new Decimal(0);
        player.hasunlockedanm4= false,
        player.incyzb= false,
        player.shdwsl= [false,
            false, false,
            false, false, false,
            false, false, false, false,
            false, false, false,
            false, false,
            false,];
        player.shdwlv01= new Decimal(0);
        player.shdwlv02= new Decimal(0);
        player.shdwlv03= new Decimal(0);
        player.shdwlv04= new Decimal(0);
        player.shdwrc= new Decimal(0);
        player.anm4= new Decimal(0);
        player.anm4u01= new Decimal(0);
        player.anm4u02= new Decimal(0);
        player.anm4u03= new Decimal(0);
        player.anm4u04= new Decimal(0);
        player.ntmtmr= new Decimal(30);
        player.ntmv= new Decimal(0);
    player.nrev = new Decimal(0);
    v.ntma = new Decimal(0);
    player.ntmu01 = new Decimal(0);
    player.ntmu02 = new Decimal(0);
        player.ntmu03= new Decimal(0);
        player.ntmu04= new Decimal(0);
        player.ntmr01= new Decimal(0);
        player.ntmr02= new Decimal(0);
        player.ntmr03= new Decimal(0);
        player.ntmr04= new Decimal(0);
        player.ntmr05= new Decimal(0);
        player.ntmr06= new Decimal(0);

        await delay(100);
        player.energy = new Decimal(2);
        prod = setInterval(produce, 50);
}

function getPL5engMul() {
    v.PL5engmul = player.PL5energy.pow(v.PL5engpow).max(1);
}

function getPL5engPow() {
    v.PL5engpow = new Decimal(1);
}

function chdepth(tier) {
    player.depth = tier;
}

function getqua() {
    v.quantps = player.PL5energy.max(2).log(2).pow(player.PL5tms.pow(0.1))
    v.quae11 = player.quant.pow(4).div(256).add(1);
    if (player.quafil01.lte(4.914e17)) v.quaef1 = player.quafil01.add(1).log(2).mul(0.01);
    else v.quaef1 = player.quafil01.add(1).log(2).log(2).mul(0.1);
}

function buyquau(tier) {
    if (tier == 0 & player.quant.gte(100)) {
        player.quau[0] = true;
    }
    if (tier == 1 & player.quant.gte(10000)) {
        player.quau[1] = true;
        player.PL1upg[0] = true;
        for (let i = 0; i < 12; i++) player.normchacom[i] = true;
        player.PL2tms = N(4);
        player.PL2upg01 = N(8);
        player.resa05 = N(1);
        player.PL4goal[0] = true;
        player.PL4goal[1] = true;
    }
    if (tier == 2 & player.quant.gte(1e6)) {
        player.quau[2] = true;
        player.PL2upg03 = N(8);
        player.resa11 = N(1);
        for (let i = 0; i < 5; i++)player.PL4goal[i] = true;
        player.hasunlockedanmorb = true;
        player.hasunlockedanm2 = true;
        player.hasunlockedanm3 = true;
        player.hasunlockedanm4 = true;
    }
    if (tier == 3 & player.quant.gte(1e8)) {
        player.quau[3] = true;
        for (let i = 0; i < 16; i++)player.PL4goal[i] = true;
    }
    if (tier == 4 & player.quant.gte(1e10)) {
        player.quau[4] = true;
        player.alcu[1] = true;
        player.xyzbo = N(2);
        player.zzltu[0] = true;
    }
}

function fillqua(tier) {
    let name = tiername[tier];
    player["quafil" + name] = player["quafil" + name].add(player.quant.div(100));
    player.quant = player.quant.mul(0.99);
}

function getxbe() {
    v.xbmc01 = player.xbmu01.add(1).pwb(2).pwb(2);
    v.xbmc02 = player.xbmu02.add(1).pow(2).pwb(2).mul(1e4);
    v.xbmc03 = player.xbmu03.add(1).pwb(2).pwb(2);
    v.xbmc04 = player.xbmu04.add(1).pow(2).pwb(2).mul(1e4);
    v.xbmc05 = player.xbmu05.add(1).pwb(2).pwb(65536);
    v.xbmc06 = player.xbmu06.add(1).pwb(2).pwb(65536);
    v.xbmc07 = player.xbmu07.add(1).pwb(2).pwb(65536);
    v.xbmc08 = player.xbmu08.add(1).pwb(2).pwb(65536);

    v.xbme05 = player.PL1tms.max(2).log(2).log(2).sub(5).mul(0.1).mul(player.xbmu05).add(1);
    v.xbme06 = player.PL1tms.max(2).log(2).log(2).sub(5).mul(0.1).mul(player.xbmu06).add(1);
    v.xbme07 = player.PL5tms.max(2).log(2).log(2).sub(5).mul(0.1).mul(player.xbmu07).add(1);
    v.xbme08 = player.PL5tms.max(2).log(2).log(2).sub(5).mul(0.1).mul(player.xbmu08).add(1);
}

function buyxbmu(tier) {
    getxbe();
    let name = tiername[tier];
    if (tier == 1 | tier == 3) {
        if (player.PL5pts.gte(v["xbmc" + name])) {
            player["xbmu" + name] = player["xbmu" + name].add(1);
            player.PL5pts = player.PL5pts.sub(v["xbmc" + name]);
        }
    }
    else if (tier == 2 | tier == 5 | tier == 6) {
        if (player.PL1sec.gte(v["xbmc" + name])) {
            player["xbmu" + name] = player["xbmu" + name].add(1);
            player.PL1sec = player.PL1sec.sub(v["xbmc" + name]);
        }
    }
    else if (tier == 4 | tier == 7 | tier == 8) {
        if (player.PL5sec.gte(v["xbmc" + name])) {
            player["xbmu" + name] = player["xbmu" + name].add(1);
            player.PL5sec = player.PL5sec.sub(v["xbmc" + name]);
        }
    }
}

function getslw() {

}


var spd0 = 1;
function getspd() {
    v.gamespd1 = player.chacom10.pwb(2).mul(player.ptnu04.div(3).pwb(2)).mul(player.anm3u04.pwb(1.189207115002721)).mul(v.fraue05).max(1);
    if (player.tier04.gte(10)) v.gamespd1 = v.gamespd1.mul(player.tier04.mul(0.25).max(1));
    if (player.PL4goal[0] == true) v.gamespd1 = v.gamespd1.mul(4);
    if (player.zzltu[2] == true) v.gamespd1 = v.gamespd1.mul(v.ltwum3);
    if (player.incyzb == true & player.shdwsl[8] == true) v.gamespd1 = v.gamespd1.mul(v.shdb03);
    if (player.hasUnlockedPL5) v.gamespd1 = v.gamespd1.mul(player.PL5secrl.pow(player.xbmu01.add(1)));
    if (player.hasUnlockedPL5) v.gamespd1 = v.gamespd1.mul(player.xbmu02.pwb(2));
    if (player.incha == 10) v.gamespd1 = N(1e-308);

    v.gamespd2 = N(1);
    if (player.hasUnlockedPL5) v.gamespd2 = v.gamespd2.mul(player.PL5secrl.pow(player.xbmu03.add(1).mul(0.25)));
    if (player.hasUnlockedPL5) v.gamespd2 = v.gamespd2.mul(player.xbmu04.pwb(2));

    if (player.gmrn != true) v.glbspd = 0;
    else if (player.fyjj != true | player.oflntm <= 0) v.glbspd = 1;
    else v.glbspd = Math.pow(2, player.oflnpw / 10);
    v.glbspd = v.glbspd * spd0;
    v.softcap = player.energy.max(2).log(2).div(getsoftcap().max(2).log(2)).max(1);
}

function getsoftcap() {
    if (player.incha == 13) return new Decimal(2);
    let sc = new Decimal("e3.470639555327098e17")
    sc = sc.pow(v.fraue03);
    if (player.incyzb == true & player.shdwsl[4] == true) sc = sc.root(256);
    return sc
}

function getsoftcap2() {
    return new Decimal(256).pwb(2).pwb(2)
}

function getsoftcap3() {
    return new Decimal(1024).pwb(2).pwb(2)
}

function getsoftcap4() {
    return new Decimal(4096).pwb(2).pwb(2)
}

function produce(spd = 1) {
    let speed = new Decimal(spd).mul(v.gamespd1).mul(v.glbspd).div(20);
    let speed2 = new Decimal(spd).mul(v.gamespd2).mul(v.glbspd).div(20);

    player.totalSeconds = player.totalSeconds.plus(new Decimal(v.glbspd).div(20));
    player.PL1secrl = player.PL1secrl.plus(new Decimal(v.glbspd).div(20));
    player.PL2secrl = player.PL2secrl.plus(new Decimal(v.glbspd).div(20));
    player.PL3secrl = player.PL3secrl.plus(new Decimal(v.glbspd).div(20));
    player.PL4secrl = player.PL4secrl.plus(new Decimal(v.glbspd).div(20));
    player.PL5secrl = player.PL5secrl.plus(new Decimal(v.glbspd).div(20));

    player.gameseconds = player.gameseconds.plus(speed);
    player.PL1sec = player.PL1sec.plus(speed);
    player.PL2sec = player.PL2sec.plus(speed);
    player.PL3sec = player.PL3sec.plus(speed);
    player.PL4sec = player.PL4sec.plus(speed2);
    player.PL5sec = player.PL5sec.plus(speed2);

    if (player.energy.log(2).lte(getsoftcap().log(2))) v.energyps = player.wsca01.mul(v.wscm01).pow(v.wscp01).hyp(v.wsch01).mul(speed).mul(v.baseprd);
    else v.energyps = player.wsca01.mul(v.wscm01).pow(v.wscp01).hyp(v.wsch01).root(getsoftcap().log(2)).hyp(0.5).pow(getsoftcap().log(2)).mul(speed).mul(v.baseprd);
    if (v.energyps.log(2).gte(getsoftcap().log(2))) v.energyps = player.wsca01.mul(v.wscm01).pow(v.wscp01).hyp(v.wsch01).root(getsoftcap().log(2)).hyp(0.5).pow(getsoftcap().log(2)).mul(speed).mul(v.baseprd);
    v.preps = player.energy;
    player.energy = player.energy.add(v.energyps);
    player.energyttl = player.energyttl.add(v.energyps);

    if(player.incha != 12) for (let tier = 2; tier <= 8; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]).hyp(v["wsch" + name]).mul(speed).mul(v.baseprd));
    }
    if (player.PL1upg[12] == true & player.sta8n1 == true) { player.wsca08 = player.wsca08.add(hyp(player.wsca09.mul(v.wscm09).pow(v.wscp09), v.wsch09).pow(v.PL1engpow.pow(v.cpper).max(1)).mul(speed).mul(v.baseprd)); }
    if (player.std[18] == true & player.incha != 8 & player.incha != 9 & player.PL1pts.lte(player.energy.root(1024).floor())) {
        player.PL1pts = player.PL1pts.add(player.energy.root(1024).floor().mul(speed));
        player.PL1ptsttl = player.PL1ptsttl.add(player.energy.root(1024).floor().mul(speed));
    }
    if (player.alcu[1] == true) player.PL1tms = player.PL1tms.add(getPL1tms().mul(speed));

    player.PL1energy = player.PL1energy.add(player.wsca09.mul(v.wscm09).pow(v.wscp09).hyp(v.wsch09).mul(speed).mul(v.baseprd));
    if (player.incha != 12) for (let tier = 10; tier <= 16; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]).hyp(v["wsch" + name]).mul(speed).mul(v.baseprd));
    }
    if (player.std[7] == true & player.sta8n1 == true) player.wsca16 = player.wsca16.add(hyp(player.wsca17.mul(v.wscm17).pow(v.wscp17), v.wsch17).pow(v.PL2engpow.pow(v.cpper).max(1)).mul(speed).mul(v.baseprd));
    if (player.tthpu[1] == true & player.PL2pts.lte(player.PL1pts.root(1024).floor())) {
        player.PL2pts = player.PL2pts.add(player.PL1pts.root(1024).floor().mul(speed));
        player.PL2ptsttl = player.PL2ptsttl.add(player.PL1pts.root(1024).floor().mul(speed));
    }
    if (player.xyzbo.gte(2)) player.PL2tms = player.PL2tms.add(getPL2tms().mul(speed));

    player.PL2energy = player.PL2energy.add(player.wsca17.mul(v.wscm17).pow(v.wscp17).hyp(v.wsch17).mul(speed).mul(v.baseprd));
    if (player.incha != 12) for (let tier = 18; tier <= 24; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]).hyp(v["wsch" + name]).mul(speed).mul(v.baseprd));
    }
    if (player.tthpu[0] == true & player.sta8n1 == true) player.wsca24 = player.wsca24.add(hyp(player.wsca25.mul(v.wscm25).pow(v.wscp25), v.wsch25).pow(v.PL3engpow.pow(v.cpper).max(1)).mul(speed).mul(v.baseprd));
    if (player.PL4goal[11] == true & player.PL3pts.lte(player.PL2pts.root(1048576).floor())) {
        player.PL3pts = player.PL3pts.add(player.PL2pts.root(1048576).floor().mul(speed));
        player.PL3ptsttl = player.PL3ptsttl.add(player.PL2pts.root(1048576).floor().mul(speed));
    }
    if (player.zzltu[0] == true) player.PL3tms = player.PL3tms.add(getPL3tms().mul(speed));

    player.PL3energy = player.PL3energy.add(player.wsca25.mul(v.wscm25).pow(v.wscp25).hyp(v.wsch25).mul(speed).mul(v.baseprd));
    if (player.incha != 12) for (let tier = 26; tier <= 32; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]).hyp(v["wsch" + name]).mul(speed).mul(v.baseprd));
    }
    if (player.PL4goal[10] == true & player.sta8n1 == true) player.wsca32 = player.wsca32.add(player.wsca33.mul(v.wscm33).pow(v.wscp33).hyp(v.wsch33).pow(v.PL4engpow.pow(v.cpper).max(1)).mul(speed).mul(v.baseprd));
    if (player.quau[12] == true & player.PL4pts.lte(player.PL3pts.root(1048576).floor())) {
        player.PL4pts = player.PL4pts.add(player.PL3pts.root(1048576).floor().mul(speed));
        player.PL4ptsttl = player.PL4ptsttl.add(player.PL3pts.root(1048576).floor().mul(speed));
    }
    if (player.quau[4] == true) player.PL4tms = player.PL4tms.add(getPL4tms().mul(speed2));

    player.PL4energy = player.PL4energy.add(player.wsca33.mul(v.wscm33).pow(v.wscp33).hyp(v.wsch33).mul(speed2).mul(v.baseprd));
    for (let tier = 34; tier <= 40; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]).hyp(v["wsch" + name]).mul(speed2).mul(v.baseprd));
    }
    if (player.quau[11] == true & player.sta8n1 == true) player.wsca40 = player.wsca40.add(player.wsca41.mul(v.wscm41).pow(v.wscp41).hyp(v.wsch41).pow(v.PL5engpow.pow(v.cpper).max(1)).mul(speed2).mul(v.baseprd));

    player.PL5energy = player.PL5energy.add(player.wsca41.mul(v.wscm41).pow(v.wscp41).hyp(v.wsch41).mul(speed2).mul(v.baseprd));
    for (let tier = 42; tier <= 48; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]).hyp(v["wsch" + name]).mul(speed2).mul(v.baseprd));
    }

    if (player.hasunlockedanmorb == true) {
        v.anmparsc = player.anmorbttl.pwb(1000).mul(1000).max(1);
        v.anmparps = player.wscb08.pwb(1.258925412).max(1).div(1e6).mul(player.parupg01.pwb(2)).mul(player.chacom04.pwb(2));
        if (player.tier02.gte(30)) v.anmparps = v.anmparps.mul(player.PL1tms.div(1e8).max(1).min(1e8));
        if (player.tier01.gte(630)) v.anmparps = v.anmparps.mul(player.wscb16.pwb(1.258925412).max(1));
        if (player.hasunlockedanm2 == true) v.anmparps = v.anmparps.pow(player.anm2.add(1).log(2).add(1).log(2).max(1).pow(player.anm2u03.div(64).add(0.0625).min(player.anm2u03.div(64).add(0.0625).root(4))));
        if (player.ptn[5] == true) v.anmparps = v.anmparps.mul(v.ptnm06);
        if (v.anmparps.gte(v.anmparsc)) {
            let scpw = new Decimal(0.5);
            if (player.tier03.gte(7)) scpw = scpw.add(0.125);
            if (player.anm2sc.gte("1e2466")) scpw = scpw.add(0.125);
            v.anmparps = v.anmparsc.mul(v.anmparps.div(v.anmparsc).pow(scpw));
        }
        player.anmpar = player.anmpar.add(v.anmparps.mul(speed));
    }
    if (player.hasunlockedanm2 == true & player.infytx == false & player.incha != 9) {
        v.anm2ps = player.anm2sc.max(2).log(2).div(1024).pow(12).mul(player.chacom08.pwb(4)).mul(player.anm2u01.pwb(2));
        if (player.anm2sc.lt(1.797e308)) v.anm2ps = new Decimal(0);
        if (player.tier01.gte(1995)) v.anm2ps = v.anm2ps.mul(player.wscb24.pwb(1.02).max(1));
        if (player.ptn[6] == true) v.anm2ps = v.anm2ps.mul(v.ptnm07);
        if (player.hasunlockedanm3 == true) v.anm2ps = v.anm2ps.pow(player.anm3.add(1).log(2).add(1).log(2).max(1).pow(player.anm3u03.div(64).add(0.0625).min(player.anm3u03.div(64).add(0.0625).root(4))));
        player.anm2 = player.anm2.add(v.anm2ps.mul(speed));
    }
    if (player.hasunlockedanm3 == true) {
        v.anm3ps = v.blcnt.sub(0.5).max(0).mul(0.001)
        v.anm3ps = v.anm3ps.mul(player.anm3u01.pwb(2)).mul(player.chacom12.pwb(8));
        if (player.ptn[7] == true & player.anm3u[0] == true) v.anm3ps = v.anm3ps.mul(v.ptnm08);
        if (player.hasunlockedanm4 == true) v.anm3ps = v.anm3ps.pow(player.anm4.add(1).log(2).add(1).log(2).max(1).pow(player.anm4u03.div(64).add(0.0625).min(player.anm4u03.div(64).add(0.0625).root(4))));
        player.anm3 = player.anm3.add(v.anm3ps.mul(speed));
    }
    if (player.hasunlockedanm4 == true & player.incyzb == false) {
        v.anm4ps = player.shdwrc.max(1).sub(1).pow(2);
        v.anm4ps = v.anm4ps.mul(player.anm4u01.pwb(2)).mul(player.chacom16.pwb(16));
        if (v.ntma.gte(593)) v.anm4ps = v.anm4ps.mul(v.ntma.max(1));
        player.anm4 = player.anm4.add(v.anm4ps.mul(speed2));
    }

    if (player.PL1upg[11] == true) {
        player.alef = player.alef.add(v.alefps.mul(speed));
        player.beth = player.beth.add(v.bethps.mul(speed));
        player.giml = player.giml.add(v.gimlps.mul(speed));
    }

    player.elmten01 = player.elmten01.add(v.elmtps01.mul(speed));
    player.elmten02 = player.elmten02.add(v.elmtps02.mul(speed));
    player.elmten03 = player.elmten03.add(v.elmtps03.mul(speed));
    player.elmten04 = player.elmten04.add(v.elmtps04.mul(speed));

    let fnals = v.alchmu.mul(speed);
    if (player.alca[0] == true) {
        player.alch01 = player.alch01.add(fnals.mul(player.alcu01.mul(0.05).add(1)));
    }
    if (player.alca[1] == true) {
        if (player.alch01.gte(fnals.mul(4))) {
            player.alch02 = player.alch02.add(fnals.mul(player.alcu01.mul(0.05).add(1)));
            player.alch01 = player.alch01.sub(fnals.mul(player.alcu02.mul(-0.1).add(4)));
        }
    }
    if (player.alca[2] == true) {
        if (player.alch02.gte(fnals.mul(4))) {
            player.alch03 = player.alch03.add(fnals.mul(player.alcu01.mul(0.05).add(1)));
            player.alch02 = player.alch02.sub(fnals.mul(player.alcu02.mul(-0.1).add(4)));
        }
    }
    if (player.alca[3] == true) {
        if (player.alch03.gte(fnals.mul(4))) {
            player.alch04 = player.alch04.add(fnals.mul(player.alcu01.mul(0.05).add(1)));
            player.alch03 = player.alch03.sub(fnals.mul(player.alcu02.mul(-0.1).add(4)));
        }
    }
    if (player.alca[4] == true) {
        if (player.alch04.gte(fnals.mul(4))) {
            player.alch05 = player.alch05.add(fnals.mul(player.alcu01.mul(0.05).add(1)));
            player.alch04 = player.alch04.sub(fnals.mul(player.alcu02.mul(-0.1).add(4)));
        }
    }
    if (player.alca[5] == true) {
        if (player.alch05.gte(fnals.mul(4))) {
            player.alch06 = player.alch06.add(fnals.mul(player.alcu01.mul(0.05).add(1)));
            player.alch05 = player.alch05.sub(fnals.mul(player.alcu02.mul(-0.1).add(4)));
        }
    }

    if (player.inres != 0) {
        player["resp" + tiername[player.inres]] = player["resp" + tiername[player.inres]].add(v.resped.mul(speed));
        if (player["resp" + tiername[player.inres]].gte(v["resr" + tiername[player.inres]])) {
            player["resa" + tiername[player.inres]] = player["resa" + tiername[player.inres]].add(1);
            player["resp" + tiername[player.inres]] = new Decimal(0);
            player.inres = 0;
        }
    }

    if (player.tthgrow.lte(v.tthgreq) & player.ingrow) player.tthgrow = player.tthgrow.add(v.tthgspd.mul(speed));
    player.tthseed = player.tthseed.add(v.tthseedpd.mul(player.tthpu1.pow(2)).div(100).mul(speed));
    player.tthgene = player.tthgene.add(v.tthgenepd.mul(player.tthpu2.pow(2)).div(100).mul(speed));
    player.tthsucr = player.tthsucr.add(v.tthsucrpd.mul(player.tthpu3.pow(2)).div(100).mul(speed));
    if (player.PL4goal[3] == true) {
        player.tthpres = player.tthpres.add(v.tthprespd.mul(speed).mul(0.001));
        player.tthprem = player.tthprem.add(v.tthprempd.mul(speed).mul(0.001));
    }
    if (player.tthatact[2] == true & player.tthatact[2] == true) {
        if ((player.tthamnt.gte(v.tthimpc) & player.tthsize.eq(player.tthimpr)) | v.tthgreq.lte(v.tthgspd.mul(speed).div(20))) {
            player.tthimpr = player.tthimpr.add(1);
            player.tthsize = player.tthsize.add(1);
            player.tthamnt = new Decimal(0);
            player.tthgrow = new Decimal(0);
        }
    }

    let xyzspeed1 = player.xyze.max(2).log(2).mul(player.xyzf.max(2).log(2)).mul(player.xyzf.max(2).log(2)).mul(player.xyzh.max(2).log(2)).mul(player.xyzsw.add(player.xyzbo).pwb(2)).mul(speed);
    if (player.xyzu[0] == true) player.xyzx = player.xyzx.add(xyzspeed1);
    if (player.xyzu[1] == true) {
        player.xyzx = player.xyzx.add(player.xyzy.max(1).mul(xyzspeed1));
        player.xyzy = player.xyzy.add(player.xyzx.max(1).mul(xyzspeed1));
    }
    if (player.xyzu[2] == true) {
        player.xyzx = player.xyzx.add(player.xyzy.max(1).mul(player.xyzz.max(1)).pow(xyzspeed1));
        player.xyzy = player.xyzy.add(player.xyzx.max(1).mul(player.xyzz.max(1)).pow(xyzspeed1));
        player.xyzz = player.xyzz.add(player.xyzx.max(1).mul(player.xyzy.max(1)).pow(xyzspeed1));
    }
    if (player.xyzu[3] == true) {
        player.xyzx = player.xyzx.add(player.xyzy.max(1).mul(player.xyzz.max(1)).mul(player.xyzt.max(1)).pow(player.xyzt.max(2).log(2)).hyp(xyzspeed1));
        player.xyzy = player.xyzy.add(player.xyzx.max(1).mul(player.xyzz.max(1)).mul(player.xyzt.max(1)).pow(player.xyzt.max(2).log(2)).hyp(xyzspeed1));
        player.xyzz = player.xyzz.add(player.xyzx.max(1).mul(player.xyzy.max(1)).mul(player.xyzt.max(1)).pow(player.xyzt.max(2).log(2)).hyp(xyzspeed1));
        player.xyzt = player.xyzt.add(player.xyzx.max(1).mul(player.xyzy.max(1)).mul(player.xyzz.max(1)).pow(player.xyzt.max(2).log(2)).hyp(xyzspeed1));
    }
    let xyzspeed2 = player.xyzsw.add(player.xyzbo).pwb(2).mul(speed);
    player.xyze = player.xyze.add(player.xyzegn.mul(player.xyzf.max(1)).mul(player.xyzg.max(1)).mul(player.xyzh.max(1)).pow(xyzspeed2));
    player.xyzf = player.xyzf.add(player.xyzfgn.mul(player.xyzg.max(1)).mul(player.xyzh.max(1)).pow(xyzspeed2));
    player.xyzg = player.xyzg.add(player.xyzggn.mul(player.xyzh.max(1)).pow(xyzspeed2));
    player.xyzh = player.xyzh.add(player.xyzhgn.pow(xyzspeed2));

    let rpcnt = player.reacm2.div(player.reacm1.add(player.reacm2)).mul(100).min(100);
    let s = speed.mul(player.cata).div(v.blcnt.max(1)).div(20);
    if (player.anm3u[1] == true) s = s.mul(player.PL3tms.max(1));
    if (player.inreac == true) {
        if (player.reacm1.lte(s)) {
            player.reacm1 = new Decimal(0);
            player.reacm2 = new Decimal(4).pow(player.reacp);
        }
        else {
            player.reacm1 = player.reacm1.sub(s);
            player.reacm2 = player.reacm2.add(s);
        }
    }

    if (player.PL4goal[4] == true) {
        player.cata = player.cata.add(v.gamespd1.mul(player.PL3tms.max(1).pow(0.5)));
        player.reacm2 = player.cata.pow(2);
    }

    if (player.hdrn4.gte(1)) player.hdrn4w = player.hdrn4w.add(v.hdrn4wps.mul(speed2));
    else player.hdrn4w = player.hdrn4w.div(1.035265);
    if (player.hdrn6.gte(1)) player.hdrn6w = player.hdrn6w.add(v.hdrn6wps.mul(speed2));
    else player.hdrn6w = player.hdrn6w.div(1.035265);
    if (player.hdrn8.gte(1)) player.hdrn8w = player.hdrn8w.add(v.hdrn8wps.mul(speed2));
    else player.hdrn8w = player.hdrn8w.div(1.035265);
    if (player.hdrn12.gte(1)) player.hdrn12w = player.hdrn12w.add(v.hdrn12wps.mul(speed2));
    else player.hdrn12w = player.hdrn12w.div(1.035265);
    if (player.hdrn20.gte(1)) player.hdrn20w = player.hdrn20w.add(v.hdrn20wps.mul(speed2));
    else player.hdrn20w = player.hdrn20w.div(1.035265);
    if (player.zzlt.gte(1)) player.zzltw = player.zzltw.add(v.zzltwps.mul(speed2));
    else player.zzltw = player.zzltw.div(1.035265);

    if (player.zzltu[4] == true) {
        player.coin = player.coin.add(v.pcps.mul(speed2));
        if (player.rhp.lte(v.atke.div(20))) stageclear();
        else player.rhp = player.rhp.sub(v.atke.mul(speed2));
    }

    if (player.stgmx.gte(2000)) {
        player.syna01 = player.syna01.add(v.synps01.mul(speed2));
        player.syna02 = player.syna02.add(v.synps02.mul(speed2));
        player.syna03 = player.syna03.add(v.synps03.mul(speed2));
        player.syna04 = player.syna04.add(v.synps04.mul(speed2));
        player.syna05 = player.syna05.add(v.synps05.mul(speed2));
    }

    if(player.hasUnlockedPL5) player.quant = player.quant.add(v.quantps.mul(speed2));

    if (player.incha == 5 | player.incha == 9) {
        player.PL1energy = new Decimal(1);
        player.PL2energy = new Decimal(1);
    }
    if (player.incha == 8 | player.incha == 9) {
        player.wsca16 = new Decimal(0);
    }
    if (player.incha == 16) {
        player.PL3pts = new Decimal(0);
        player.PL3tms = new Decimal(0);
    }
}

function epsdisp() {
    if (player.energy.div(v.preps.max(1)).pow(20).lte(2)) return (notation(player.energy.sub(v.preps).mul(20)));
    else if (player.energy.log(v.preps.max(2)).pow(20).lte(2)) return (notation(player.energy.div(v.preps).log(2).mul(20)) + " 二进制位");
    else return (notation(player.energy.log(v.preps).log(2).mul(20)) + " 二进制位^2");
}

function fszqw() {
    if (caidan != true) alert("资源不足，无法升级！");
    else {
        alert("您愿意放弃目前的一切生物，踏上更强炼金的征途吗？风神将赐予你630875金色风灵。");
        alert("您到达了游戏终点，也就是第0次扰敪。砂糖和风神都为您感到骄傲。");
        alert("您可以选择就此封盘，认为您已经通关了，又或者您还愿意做一些更有趣的事情。");
        alert("这个仙境已经容纳不下您的力量了，风灵作成的多元仙境可谓无穷无尽，比起现在这个仙境，还有更多更难用炼金创造出来的仙境。");
        alert("让我们重新开始，进入第1次扰敪吧。创造下一个仙境比当前仙境更艰难，但是您可以获得630875金色风灵购买最后的升级。");
        alert("但是，您之前的一切成果都将离开您而去，所有的风灵、扩散、扪敤、扫敥、扬敦、扭敧、扮敨、扯敩层级的内容，一切的一切，都将成为过去。");
        alert("所以您意下如何？您真的要进入扰敪吗？");
        alert("您……真的想要进入扰敪吗？");
        alert("您是真的真的确认了吗？一旦这么做将再也无法反悔！这是最后一次向您确认！");
        alert("请等待游戏更新！有朝一日将打通书页的隔阂，用「生物炼金」的技术创造「仙境」。");
    }
}
//#endregion

//#region 数值计算
/*数值计算*/
function scale(x) {
    return x.max(x.pow(2).div(v.scal01)).max(x.pow(4).div(v.scal02)).max(x.pow(8).div(v.scal03)).max(x.pow(16).div(v.scal04)).max(x.pow(32).div(v.scal05)).max(x.pow(64).div(v.scal06)).max(x.pow(128).div(v.scal07)).max(x.pow(256).div(v.scal08));
}

function invscale(x) {
    return x.min(x.mul(v.scal01).root(2)).min(x.mul(v.scal02).root(4)).min(x.mul(v.scal03).root(8)).min(x.mul(v.scal04).root(16)).min(x.mul(v.scal05).root(32)).min(x.mul(v.scal06).root(64)).min(x.mul(v.scal07).root(128)).min(x.mul(v.scal08).root(256));
}

function scaleTier(x) {
    return x.max(x.pow(2).div(v.scaltier01)).max(x.pow(4).div(v.scaltier02)).max(x.pow(8).div(v.scaltier03)).max(x.pow(16).div(v.scaltier04));
}

function invscaleTier(x) {
    return x.min(x.mul(v.scaltier01).root(2)).min(x.mul(v.scaltier02).root(4)).min(x.mul(v.scaltier03).root(8)).min(x.mul(v.scaltier04).root(16));
}

function scaleUpgd(x) {
    return x.max(x.pow(2).div(v.scalupgd01)).max(x.pow(4).div(v.scalupgd02)).max(x.pow(8).div(v.scalupgd03)).max(x.pow(16).div(v.scalupgd04));
}

function invscaleUpgd(x) {
    return x.min(x.mul(v.scalupgd01).root(2)).min(x.mul(v.scalupgd02).root(4)).min(x.mul(v.scalupgd03).root(8)).min(x.mul(v.scalupgd04).root(16));
}

function scaleChal(x) {
    return x.max(x.pow(2).div(4)).max(x.pow(4).div(1024)).max(x.pow(8).div(17179869184)).max(x.pow(16).div(3.169126500570573e29));
}

function invscaleChal(x) {
    return x.min(x.mul(4).root(2)).min(x.mul(1024).root(4)).min(x.mul(17179869184).root(8)).min(x.mul(3.169126500570573e29).root(16));
}

function softcap(x) {
    if (x.lte(16)) return x;
    else if (x.lte(65536)) return x.hyp(0.5).pow(2);
    else if (x.lte(1.157920892373162e77)) return x.hyp(0.25).pow(4);
    else if (x.lte("2.004e19728")) return x.hyp(0.125).pow(8);
    else return x.hyp(0.0625).pow(16);
}

function hyp(a, b) {
    if (a.lte(2)) return a;
    else return a.max(1).log(2).max(1).log(2).mul(b).pow_base(2).pow_base(2);
}
//#endregion

//#region 游戏机制之外……
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
    if (player.milliseconds.gte(1000)) {
        player.seconds = player.seconds.plus(1);
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
    let string = "";
    if (amount.sign == -1) {
        string = string + "-";
        amount.sign = 1;
    }
    if (amount.lt("ee6")) {
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
    else if (amount.lt("eee6")) {
        let power2 = Decimal.floor(Decimal.log10(Decimal.log10(amount)));
        let mantissa2 = Decimal.floor(Decimal.log10(amount)).div(Decimal.pow(10, power2));
        string = string + "e" + mantissa2.toFixed(3) + "e" + power2;
    }
    else if (amount.lt("eeee6")) {
        let power3 = Decimal.floor(Decimal.log10(Decimal.log10(Decimal.log10(amount))));
        let mantissa3 = Decimal.floor(Decimal.log10(Decimal.log10(amount))).div(Decimal.pow(10, power3));
        string = string + "ee" + mantissa3.toFixed(3) + "e" + power3;
    }
    else if (amount.layer < 1.79e308) {
        let aF = 1;
        let Fb = amount.layer;
        if (amount.mag <  1e10) {
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

function notatint(amount) {
    let string = "";
    if (amount.sign == -1) {
        string = string + "-";
        amount.sign = 1;
    }
    if (amount.lt("ee6")) {
        let power = Decimal.floor(Decimal.log10(amount));
        let mantissa = amount.div(Decimal.pow(10, power));
        if (amount == 0) string = "0";
        else if (power < 6) string = string + amount.floor();
        else string = string + mantissa.toFixed(3) + "e" + power;
    }
    else if (amount.lt("eee6")) {
        let power2 = Decimal.floor(Decimal.log10(Decimal.log10(amount)));
        let mantissa2 = Decimal.floor(Decimal.log10(amount)).div(Decimal.pow(10, power2));
        string = string + "e" + mantissa2.toFixed(3) + "e" + power2;
    }
    else if (amount.lt("eeee6")) {
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
        else{
            aF = Decimal.log10(Decimal.log10(amount.mag));
            Fb = Fb + 2;
        }
        string = string + aF.toFixed(3) + "f" + Fb;
    }
    else string = "1919810";
    return string;
}

function notatcom(num) {
    if (num === null || num === undefined) return "NaN"
    if(num.gte(1e15)) return(notation(num))
    let init = num.toString()
    let portions = init.split(".")
    portions[0] = portions[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return portions[0]
}

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

function energyshow() {
    if (player.energy.gte('ee308')) return '如果你每秒写3个数字，你需要写' + timeshow(player.energy.log10().log(1000)) + '才能写出你的能量的数量级。';
    else if (player.energy.gte(1e308)) return '如果你每秒写3个数字，你需要写' + timeshow(player.energy.log(1000)) + '才能写出你的能量。';
    else if (player.energy.gte(6e146)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(6e146)) + '个超级宇宙。';
    else if (player.energy.gte(1e89)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(1e89)) + '个可观测宇宙。';
    else if (player.energy.gte(1.8e78)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(1.8e78)) + '个银河系。';
    else if (player.energy.gte(1.1e66)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(1.1e66)) + '个太阳。';
    else if (player.energy.gte(3.5e60)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(3.5e60)) + '个地球。';
    else if (player.energy.gte(1e53)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(1e53)) + '个珠峰。';
    else if (player.energy.gte(3e47)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(3e47)) + '个哈利法塔';
    else if (player.energy.gte(3e42)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(3e42)) + '个大象';
    else if (player.energy.gte(5.6e37)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(5.6e37)) + '个苹果。';
    else if (player.energy.gte(2e34)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(2e34)) + '个蚂蚁。';
    else if (player.energy.gte(5.6e26)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(5.6e26)) + '个细菌。';
    else if (player.energy.gte(5.6e20)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(5.6e20)) + '个病毒。';
    else if (player.energy.gte(1.25e11)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(1.25e11)) + '个希格斯玻色子。';
    else if (player.energy.gte(9.38e8)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(9.38e8)) + '个质子。';
    else if (player.energy.gte(511000)) return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(511000)) + '个电子。';
    else return '如果每1能量等于1电子伏特，你的能量相当于' + notation(player.energy.div(2.2)) + '个电中微子。';
}

function wscale(tier) {
    let name = tiername[tier];
    if (player["wscb" + name].gte(new Decimal(1125899906842624).div(v["wsccsl" + name]))) return "九阶折算|";
    else if (player["wscb" + name].gte(new Decimal(35184372088832).div(v["wsccsl" + name]))) return "八阶折算|";
    else if (player["wscb" + name].gte(new Decimal(1099511627776).div(v["wsccsl" + name]))) return "七阶折算|";
    else if (player["wscb" + name].gte(new Decimal(34359738368).div(v["wsccsl" + name]))) return "六阶折算|";
    else if (player["wscb" + name].gte(new Decimal(1073741824).div(v["wsccsl" + name]))) return "五阶折算|";
    else if (player["wscb" + name].gte(new Decimal(33554432).div(v["wsccsl" + name]))) return "四阶折算|";
    else if (player["wscb" + name].gte(new Decimal(1048576).div(v["wsccsl" + name]))) return "三阶折算|";
    else if (player["wscb" + name].gte(new Decimal(32768).div(v["wsccsl" + name]))) return "二阶折算|";
    else if (player["wscb" + name].gte(new Decimal(1024).div(v["wsccsl" + name]))) return "一阶折算|";
    else return "";
}

function tscale(tier) {
    let name = tiername[tier];
    if (player["tier" + name].gte(1125899906842624)) return "四阶折算|";
    else if (player["tier" + name].gte(1048576)) return "三阶折算|";
    else if (player["tier" + name].gte(256)) return "二阶折算|";
    else if (player["tier" + name].gte(16)) return "一阶折算|";
    else return "";
}

function uscale(tier) {
    let name = tiername[tier];
    if (player["upgd" + name].gte(new Decimal(33554432).div(v["upgcsl" + name]))) return "四阶折算|";
    else if (player["upgd" + name].gte(new Decimal(1048576).div(v["upgcsl" + name]))) return "三阶折算|";
    else if (player["upgd" + name].gte(new Decimal(32768).div(v["upgcsl" + name]))) return "二阶折算|";
    else if (player["upgd" + name].gte(new Decimal(1024).div(v["upgcsl" + name]))) return "一阶折算|";
    else return "";
}

function ascale(x, tier) {
    let n = x.mul(new Decimal(tier));
    if (n.lt(100)) return "";
    else if (n.lt(1000)) return "一阶折算|";
    else if (n.lt(10000)) return "二阶折算|";
    else if (n.lt(100000)) return "三阶折算|";
    else return "四阶折算|";
}

function uscap(x) {
    if (x.lt(16)) return "";
    else if (x.lt(256)) return "(受软上限限制)";
    else if (x.lt(65536)) return "(受二重软上限限制)";
    else if (x.lt(4294967296)) return "(受三重软上限限制)";
    else return "(受四重软上限限制)";
}

function ascap(x) {
    if (x.lt(1)) return "";
    else if (x.lt(4)) return "(受软上限限制)";
    else if (x.lt(16)) return "(受二重软上限限制)";
    else if (x.lt(64)) return "(受三重软上限限制)";
    else return "(受四重软上限限制)";
}

function swfyjj() {
    if (player.fyjj != true) player.fyjj = true;
    else player.fyjj = false;
}

function swgmrn() {
    if (player.gmrn != true) {
        player.gmrn = true;
        ml = setInterval(mainLoop, 50);
        v.glbspd = 1;
    }
    else {
        player.gmrn = false;
        clearInterval(ml);
        ml = null;
        v.glbspd = 0;
    }
}

function useoflntm() {
    diff = (Date.now() - lastUpdate) / 1000;
    lastUpdate = Date.now();
    if (player.gmrn != true) {
        if (player.oflntm < 86400) player.oflntm = player.oflntm + diff;
        else if (player.oflntm < 1000000) player.oflntm = player.oflntm + diff * 33.011 * Math.pow(player.oflntm, -0.344841);
        else player.oflntm = 1000000;
    }
    else {
        if (player.fyjj == true & player.oflntm > 0) player.oflntm = player.oflntm - diff * (Math.pow(2, player.oflnpw/10) - 1);
        if (player.oflntm <= 0) player.oflntm=0
    }
}
//#endregion

//#region 成就
/*成就*/
function getAch(i) {
    if (player.ach[i] != true) {
        player.ach[i] = true;
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
    if (player.wsca01.mul(v.wscm01).mul(new Decimal(0.025)).gte(player.energy) & player.energy.gte(1e10)) getAch(13);
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
    if (player.parupg04.gte(4)) getAch(24);
    if (player.chacom01.add(player.chacom02).add(player.chacom03).add(player.chacom04).gte(15)) getAch(25);
    if (v.wscm08.gt(v.wscm07)) getAch(26);
    if (player.tier01.eq(0) & player.tier02.eq(0) & player.energy.gte(1e308)) getAch(27);
    if (player.wscb01.eq(1) & player.energy.gte(1e308)) getAch(28);
    if (player.PL1bab04.eq(0) & player.PL1bab05.eq(0) & player.PL1bab06.eq(0) & v.wscmpb.gte(100) & player.energy.gte(4)) getAch(29);
    if (player.incha == 1 & player.energy.gte("1e30720")) getAch(30);
    if (player.energy.gte("1e200000") & !player.orbupg[0] & !player.orbupg[1] & !player.orbupg[2] & !player.orbupg[3] ) getAch(31);

    if (player.PL2tms.gt(0)) getAch(32);
    if (player.elmt01.gte(1) & player.elmt02.gte(1) & player.elmt03.gte(1) & player.elmt04.gte(1)) getAch(33);
    if (player.PL2tms.gte(1000)) getAch(34);
    if (player.std[6] == true) getAch(35);
    if (player.wscb24.gt(0)) getAch(36);
    if (player.PL2pts.gt("1.797e308")) getAch(37);
    if (player.alcu01.gte(10)) getAch(38);
    if (player.hasunlockedanm2 == true) getAch(39);
    if (player.infytx == true & player.energy.gte("1e1000")) getAch(40);
    if (player.anm2.gte(1e30)) getAch(41);
    if (player.tier01.eq(0) & player.PL1pts.gte("1.8e308")) getAch(42);
    if (player.upgd01.eq(0) & player.upgd02.eq(0) & player.upgd03.eq(0) & player.upgd04.eq(0) & player.PL1pts.gte("1e1233")) getAch(43);
    if (player.std[0] == false & player.PL1pts.gte("1e4932")) getAch(44);
    if (player.elmt01.eq(2) & player.elmt02.eq(8) & player.elmt03.eq(18) & player.elmt04.eq(32)) getAch(45);
    if (player.infytx == true & player.incha != 0) getAch(46);
    if (player.thrmttl.gte(1000) & player.alcspd.gte(15)) getAch(47);

    if (player.PL3tms.gt(0)) getAch(48);
    if (player.resa01.gte(6)) getAch(49);
    if (player.ptnu01.gte(3)) getAch(50);
    if (player.tthseed.gte(2)) getAch(51);
    if (player.tthsize.gte(4) & player.tthamnt.gte(1)) getAch(52);
    if (player.PL3pts.gte("1.797e308")) getAch(53);
    if (player.xyzsw.gte(7)) getAch(54);
    if (player.hasunlockedanm3 == true) getAch(55);
    if (v.gamespd1.gte(256)) getAch(56);
    if (player.convn.gte(4)) getAch(57);
    if (v.gamespd1.lt(1) & player.inres != 0) getAch(58);
    if (player.ptn[0] != true & player.ptn[1] != true & player.ptn[2] != true & player.ptn[3] != true & player.ptn[4] != true & player.ptn[5] != true & player.ptn[6] != true & player.ptn[7] != true & player.energy.gte("ee16")) getAch(59);
    if (player.tthamnt.gte(2000)) getAch(60);
    if (player.xyzx.gte("eeee10")) getAch(61);
    if (player.inreac != true & player.reacm1.lt(1) & player.reacm1.gt(0)) getAch(62);
    if (player.convn.eq(0) & player.energy.gte("e1.5e17")) getAch(63);

    if (player.PL4tms.gt(0)) getAch(64);
    if (player.PL4goal[4] == true) getAch(65);
    if (player.frau01.gte(8) & player.frau02.gte(8)) getAch(66);
    if (player.hdrn4.gte(1) & player.hdrn6.gte(1) & player.hdrn8.gte(1) & player.hdrn12.gte(1) & player.hdrn20.gte(1)) getAch(67);
    if (player.stgcl.gte(10)) getAch(68);
    if (player.tier05.gte(5)) getAch(69);
    if (player.syna01.gte(1e10) & player.syna02.gte(1e10) & player.syna03.gte(1e10) & player.syna04.gte(1e10) & player.syna05.gte(1e10)) getAch(70);
    if (player.hasunlockedanm4 == true) getAch(71);
    if (player.shdwrc.gte(1024)) getAch(72);
    if (player.nrev.gte(1)) getAch(73);



}
//#endregion

//#region 风灵v-for显示 by veryrrdefine
var layername = ["扩散","扪敤","扫敥","扬敦","扭敧","扮敨","扯敩"];

//显示风灵数据
function displayWSdata(id){
    if (id>8+8*5){ return "+0.000\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0×1.000\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0^1.000\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0¶1.000"}
    let name = tiername[id];
    return "+" + notation(player["wsca" + name]).padEnd(15, '\u00a0') 
    + "×" + notation(v["wscm" + name]).padEnd(15, '\u00a0') 
    + "^" + notation(v["wscp" + name]).padEnd(15, '\u00a0')
    + "\u00b6" + notation(v["wsch" + name]).padEnd(15, '\u00a0')
    /*
    + (v["wscp" + name].eq(1) ? "" : ("^" + notation(v["wscp" + name]).padEnd(15, '\u00a0') ))
    + (v["wsch" + name].eq(1) ? "" : ("\u00b6" + notation(v["wsch" + name]).padEnd(15, '\u00a0')))
    */
}

//显示作成风灵所需资源
function getWSCresourcename(layerID){
    return (layerID==0 ? "能量" : (layername[layerID-1]+"点"))
}

//中文汉字显示
var chineseordinal = "零壹贰叁肆伍陆柒捌玖";
function toChineseOrdinal(id){
    if (id < 0){
        return "负"+toChineseOrdinal(-id);
    }
    let iddigit = Math.floor(Math.log10(id));
    if (iddigit>=1){
        return toChineseOrdinal(Math.floor(id/10))+chineseordinal[id%10]
    }else{
        return chineseordinal[id%10];
    }
}

var zerotosixtyfour = []; // 0到64(方便显示？)
for (let i = 1; i<=64; i++){
    zerotosixtyfour.push({'id': i});
}
var wsColor = `333322332232233223323222 
               311300310210211201301200
               331320330230231221321220
               131120130030031021121020
               133122132032033023123022
               113102112012013003103002
               313302312212213203303202
               111100110010011001101000`.replaceAll(/\s/g, "")

function wscUnlocked() {
    if (player.hasUnlockedPL7) return 48
    if (player.hasUnlockedPL6) return 48
    if (player.hasUnlockedPL5) return 48
    if (player.hasUnlockedPL4) return 40
    if (player.hasUnlockedPL3) return 32
    if (player.hasUnlockedPL2) return 24
    if (player.hasUnlockedPL1) return 16
    return 8
}

/**
 * @param {Number} id 风灵序号1-64
 * @returns {String} 返回RGB 
 */
 function getWsColor(id){
    color = wsColor.slice(id*3-3,id*3)
    return "#"+color.replaceAll("3", "ff").replaceAll("2","aa").replaceAll("1", "55").replaceAll("0", "00")
}

function wscAutobuyable(id){
    const between = (x,y,z) => (y >= x) && (y <= z);
    if (between(1, id, 8)) return player.PL1upg[0]
    if (between(9, id, 16)) return player.PL2tms.gte(4)
    if (between(17, id, 24)) return player.resa05.gte(1)
    if (between(25, id, 32)) return player.PL4goal[1]
    if (between(33, id, 40)) return player.quau[1]
    if (between(41, id, Infinity)) return false
}
//#endregion

/*弹出提示*/
function shownoti(notiname) {
    var noti = document.querySelector(notiname);
    noti.classList.add("show");
    setTimeout(function () { noti.classList.remove("show"); }, 4000);
}

/*快捷键*/
document.addEventListener("keydown", hotkeys);
function hotkeys(event) {
    if (player.hotk != true) return;
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
        case 53:
            maxAll40();
            break;
        case 54:
            maxAll48();
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
        case 84:
            incTier5();
            break;
        case 89:
            incTier6();
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
        case 71:
            buyUpgd(5);
            break;
        case 72:
            buyUpgd(6);
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
        case 86:
            PL4reset();
            break;
        case 66:
            PL5reset();
            break;
    }
}

/*切换tab*/
function changeBt(name) {
    if (v.currentTab) document.getElementById(v.currentTab).style.display = 'none';
    document.getElementById(name).style.display = 'block';
    document.getElementById("bt" + v.currentTab).className = "button";
    document.getElementById("bt" + name).className = "slbutton";
    v.lastPage[new Decimal(v.currentTab.substr(-1)).toNumber()] = v.currentPage.substr(-1);
    v.currentTab = name;
    changePg("p" + name.substr(-1) + "_" + v.lastPage[new Decimal(name.substr(-1)).toNumber()]);
}
function changePg(name) {
    let c = v.currentPage;
    v.currentPage = name;
    document.getElementById("bt" + name).className = "slbutton";
    document.getElementById("bt" + c).className = "button";
}

/*循环*/
function mainLoop() {
    diff = (Date.now() - lastUpdate) / 1000;
    lastUpdate = Date.now();
    time(diff);
    getWscMult();
    getWscPow();
    getWscHyp();
    getWscMultPerBuy();
    getWscCost();
    getWscBaseValue();
    getTierCost();
    getUpgdMult();
    getUpgdCost();
    getPL1engMul()
    getPL1engPow();
    getPL1u();
    getBab();
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
    getptn();
    gettth();
    getxyz();
    getanm3();
    getconv();
    getPL4engMul();
    getPL4engPow();
    getPL4goal2();
    getfrau();
    getboggle();
    getbatow();
    getsyn();
    getanm4();
    getntm();
    getPL5engMul();
    getPL5engPow();
    getqua();
    getxbe();

    getspd();
    autoBuy();
}

function subLoop() {
    comAch();
    useoflntm();
}

function autoBuy() {
    if (player.PL1upg[0] == true) {
        if (player.normchacom[0] == true) autoBuyWsc(1);
         abw(1);
        if (player.normchacom[1] == true) autoBuyWsc(2);
         abw(2);
        if (player.normchacom[2] == true) autoBuyWsc(3);
         abw(3);
        if (player.normchacom[3] == true) autoBuyWsc(4);
         abw(4);
        if (player.normchacom[4] == true) autoBuyWsc(5);
         abw(5);
        if (player.normchacom[5] == true) autoBuyWsc(6);
         abw(6);
        if (player.normchacom[6] == true) autoBuyWsc(7);
         abw(7);
        if (player.normchacom[7] == true) autoBuyWsc(8);
         abw(8);
    }
    if (player.PL2tms.gte(4)) {
        if (player.PL2upg01.gte(1)) autoBuyWsc(9);
         abw(9);
        if (player.PL2upg01.gte(2)) autoBuyWsc(10);
         abw(10);
        if (player.PL2upg01.gte(3)) autoBuyWsc(11);
         abw(11);
        if (player.PL2upg01.gte(4)) autoBuyWsc(12);
         abw(12);
        if (player.PL2upg01.gte(5)) autoBuyWsc(13);
         abw(13);
        if (player.PL2upg01.gte(6)) autoBuyWsc(14);
         abw(14);
        if (player.PL2upg01.gte(7)) autoBuyWsc(15);
         abw(15);
        if (player.PL2upg01.gte(8)) autoBuyWsc(16);
         abw(16);
    }
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
    if (player.PL4goal[1] == true) {
        autoBuyWsc(25);
        autoBuyWsc(26);
        autoBuyWsc(27);
        autoBuyWsc(28);
        autoBuyWsc(29);
        autoBuyWsc(30);
        autoBuyWsc(31);
        autoBuyWsc(32);
    }
    if (player.quau[1] == true) {
        autoBuyWsc(33);
        autoBuyWsc(34);
        autoBuyWsc(35);
        autoBuyWsc(36);
        autoBuyWsc(37);
        autoBuyWsc(38);
        autoBuyWsc(39);
        autoBuyWsc(40);
    }

    if (player.PL1upg[1] == true) {
        autoBuyTier01();
        autoBuyTier02();
    }
    if (player.PL2tms.gte(9)) autoBuyTier03();
    if (player.alcu[0] == true) autoBuyTier04();

    if (player.PL1upg[2] == true) {
        autoBuyUpgd01();
        autoBuyUpgd02();
    }
    if (player.PL2tms.gte(8)) autoBuyUpgd03();
    if (player.PL2tms.gte(9)) autoBuyUpgd04();

    autobuyparupg();
    autobuyanm2upg();
    autobuyanm3upg();
    autobuyanm4upg();
}


ml = setInterval(mainLoop, 50);

setInterval(subLoop, 50);

setInterval(save, 60000);

/*debug*/
var inputVal = "";
function goldenEnergy() {
    hardReset();
    player.energy = new Decimal(inputVal).pwb(2).pwb(2);
    let p1 = player.energy.root(new Decimal(2).pow(10));
    if (p1.gte(2)) {
        player.PL1pts = p1;
        player.hasUnlockedPL1 = true;
    }
    let p2 = player.energy.root(new Decimal(2).pow(20));
    if (p2.gte(2)) {
        player.PL2pts = p2;
        player.hasUnlockedPL2 = true;
    }
    let p3 = player.energy.root(new Decimal(2).pow(40));
    if (p3.gte(2)) {
        player.PL3pts = p3;
        player.hasUnlockedPL3 = true;
    }
    let p4 = player.energy.root(new Decimal(2).pow(60));
    if (p4.gte(2)) {
        player.PL4pts = p4;
        player.hasUnlockedPL4 = true;
    }
    let p5 = player.energy.root(new Decimal(2).pow(90));
    if (p5.gte(2)) {
        player.PL5pts = p5;
        player.hasUnlockedPL5 = true;
    }
    let p6 = player.energy.root(new Decimal(2).pow(120));
    let p7 = player.energy.root(new Decimal(2).pow(160));
    save();
    updateGUI();
}

function speedrun(speed) {
    spd0 = speed;
}

function resete() {
    player.energy = new Decimal(2);
    player.PL1energy = new Decimal(1);
    player.PL2energy = new Decimal(1);
    player.PL3energy = new Decimal(1);
    player.PL4energy = new Decimal(1);
    player.PL5energy = new Decimal(1);
}

function reseta() {
    for (i = 1; i <= 48; i++) {
        player["wsca" + tiername[i]] = player["wscb" + tiername[i]];
    }
}

function showall() {
    let p = ["1", "2", "3", "4", "5", "6", "7", "w", "w2",]
    for (i = 0; i < 9; i++) {
        player["hasUnlockedPL" + p[i]] = true;
    }
}

function hideall() {
    let p = ["1", "2", "3", "4", "5", "6", "7", "w", "w2",]
    for (i = 0; i < 9; i++) {
        player["hasUnlockedPL" + p[i]] = false;
    }
}

function pasgen() {
    player.PL1pts = player.energy.root(new Decimal(2).pow(10)).floor();
    player.PL2pts = player.energy.root(new Decimal(2).pow(20)).floor();
    player.PL3pts = player.energy.root(new Decimal(2).pow(40)).floor();
    player.PL4pts = player.energy.root(new Decimal(2).pow(60)).floor();
    player.PL5pts = player.energy.root(new Decimal(2).pow(90)).floor();
}

function timewarp(time) {
    for (let t = 0; t < time/1000; t++) {
        mainLoop();
        produce(20000);
    }
}

function nc0() {
    for (let i = 0; i < 12; i++) player.normchacom[i] = false;
}

function nc1() {
    for (let i = 0; i < 12; i++) player.normchacom[i] = true;
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
        "增量游戏超越一切物理化学生物定律，请给自己的增量游戏增加【<span class='nihility'>虚无</span>■■……    】等内容或层级",
        "超过1.8e308的数字怎么表示？break_infinity.js:我可以，break_eternity.js:我更可以，break_reality.js:暂时不存在",
        "我们生活在有限的世界里面，因此难以理解阿列夫的阶梯，我们生物的本能无法仰望无尽的星空",
        "那些物理学家正在建立比暴涨理论还大的理论准备入侵我们，他们把这个理论叫做“M理论”，不过我敢肯定他们不会成功",
        "砂糖在别人眼中是个性格内向、寡言少语的炼金术士，对他人的世界不感兴趣，但她对一切事物都有着极为强烈的求知欲",
        "宝箱出现的成因到底是什么？结合剧情考虑，每个宝箱的外边都有一圈符文，这些符文出现在坎瑞亚这个古老的文明，因此这些宝箱其实来自遥远的上古时期",
        "绿发兽耳眼镜娘，挥手即可立风场，日日夜夜不能寐，只为献身实验场，紧衣黑丝小裙摆，羞涩面容清纯心，可爱砂糖为吾妻，直戳作者XP上",
        "伍玖叁式营养餐中「健康」的绿色来源于加入奶油中的天然蔬菜汁……蔬菜汁？",
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
        "<span class='nihility'>虚无</span>星神，名称Ⅸ，Ⅸ是罗马数字的9",
        "尝试给复制品添加思想，却发现复制品脑子里都是复制",
        "序数增量？庐敱墟釐！",
        "这一切有什么意义？没有什么意义？没有没什么意义？",
        "<span class='erudition'>智识</span>星神博识尊在众多星神中可谓是一个十分特殊的存在，因为其极有可能是造物升华为星神的存在，其思维底层逻辑是彻底的理性，感性对于真相的粉饰对祂毫无意义，祂将追寻宇宙真理，直至尽头。博识尊是由用于求解万物的星体计算机升格而成的星神，祂的理念简而言之：万物皆有解，上帝不会掷骰子，宇宙不存在不能被计算的变量。博识尊对于其他存在并无太多想法，祂将大部分的注意力放在求解宇宙方程，以及推导虚数法则上，除此之外，唯有凡人世界偶然出现的智慧火花吸引祂的目光，祂会追寻讯息，前往源头，邀请天才加入探寻宇宙答案的行列。而获得邀请的存在，唯有正确理解了讯息的含义，认知到宇宙的答案超脱凡人智慧的极限，才能够成为天才俱乐部的真正会员。目前研究的所有问题，博识尊都有答案，但祂并不会将问题的答案给予他人，只会提供无尽的问题。所以说，风灵作成未来的更新，一直到<span class='rygcbm'>扰敪</span>之后的阶段，博识尊早在几千万年前就玩透了",/*80*/
        "怀旧空吟闻笛赋，到乡翻似烂柯人，other times await，I need to become eternal",
        "小子，你是阿列夫几级啊，也敢出来混？",
        "所有游戏的解密本质就是来源于数学，包括增量游戏",
        "传说风神的先祖创造世界的时候做了三个选项卡，其中一个选项卡中从下往上按照大小顺序摞着64种风灵。",
        "怪笑帽帽猫，惊奇猫猫盒，不笑饿饿鹅？",
        "有一次冒险时珐露珊受困于遗迹之神Effarig的现实和时间膨胀中导致变得不会衰老",
        "THE EVERYTHING FINAL OF Ω OF FINAL EVERYTHING THE",
        "是用纯数学绝对连续的物质做的",
        "斯马特，绝对论之神，起初曾是陨石，坠落到火山口里后被Ω改造成机器人，拥有了正常人的意识和正常人难以想象的力量，100岁的时候提出了绝对论，成为了绝对论之神",
        "今早我来到饼干研究中心，发现每一个研究员都在埋头努力工作。粒子物理学研究员Pollux正在研究斯格明子，并且他还兼任天体物理学研究员的工作，研究传送门和奇点；我继续往前走，看到几个研究员在津津有味地讨论中子星和超新星爆发，还有一间实验室里面有研究员在做熵的研究工作；最后我走到SCP-CN-1630的办公室里面，发现他正在和SCP-5616一起研究黑洞来加速时间速度，但是研究课题太难了，SCP-CN-1630一气之下直接使用自己的能力扭曲现实来到了量子领域把大量的幽灵光子聚集坍缩成黑洞，顺利完成了制造黑洞的任务。随后，Pollux在研究天体物理学时发现了一个反物质的天体，它非常靠近一个宇宙吸引子，于是他坐上火箭前去探索，在中途打开计算器进行数位计算模拟计算器进化，结果他刚到半路就看到反物质的天体周围的现实发生了世界末日，他吓得赶紧进行修补现实，然后打开虫洞回到地球，把自己刚刚的经历和SCP-CN-1630交代，还拿出一个现实碎片来做证明，大家都十分惊讶",/*90*/
        "汉化版打开游戏就能找到句号。",
        "给他一个时间速度加成，他敢把价格卖到114514 lodeverse",
        "增量的反义词是减魖",
        "我要找阮·梅研究生物炼金",
        "打破希格斯玻色子:f_BO(1.8e308)",
        "数学大厦又倒塌了",
        "0+0是宇宙万法的那个源头",
        "在黑塔的模拟宇宙中寻找灵感",
        "『风灵作成』已经触手可及",
        "近日有网友表示，在某增量游戏新闻播放器上看到一则重要到有时间旅行者提醒的新闻，由于虫洞质量不断扩大，粒子物理学研究员Pollux和粒子超理学研究员天才俱乐部#83黑塔通过虫洞在反物质宇宙相遇，物理学家建议创造更大的虫洞。某一数学家兼物理学家利用伽罗瓦理论庞加莱猜想的庞加莱回归定理和伽马函数算出了天价虫洞已经来到了arv^1024，不过我们还是不知道他们两个是怎么掉进这么大的虫洞的，可能是被自动幽灵一脚踢进虫洞。据研究员Pollux报告，他先前由于某个由于机密不能披露的异常影响导致视觉能力严重下降，来到反物质宇宙后因为反物质的时间效应迅速恢复，他表示以后天体物理学研究要加紧研究虫洞。为此五星上将麦克阿瑟表示，要是我有这么大的虫洞，我当年的军衔一定不止五星，至少也得有50星，就连SCP-CN-1630都表示，这43年来，我天天被人注射记忆删除药剂，没得睡过一次好觉，要是我有这么大的虫洞一定得进去放个C类通道，然后在里面睡一觉，不仅可以体验相对论时间膨胀，还可以带薪休假。大型纪录片之《IMR 0.8天价虫洞卖出了arv^1024》持续为您播放",/*100*/
        "从香料放置、能量发生器、FE000000、Antimatter Dimension各《借鉴》了一点",
        "观6左爷6做增量游戏有感：汉字的后继是什么？",
        "Hexagon1296被超形上学部收容，这一事件无疑在数学界引起了广泛关注",
        "已经被混沌大重置混沌死了",
        "K9e15比葛立恒数还大",
        "看到expantanum之后，break_eternity表示，自己还是太逊了",
        "Milk-Eating Go Brrrrr",
        "本游戏1000000%是增量游戏，没有其他可能",
        "每当我找不到存在的意义，每当我迷失在黑夜里，夜空中最亮的星，请指引我靠近你",
        "为庆祝中秋国庆连假，宇宙学部门进行实验，在研究设施内制造黑洞，目标是将时间加速到180倍，但由于操作不当，导致黑洞反转变成大规模减慢时间，就在他们焦头烂额的研究如何解决问题的时候，设施外面已经乱作一团，只见设施外的工作人员发现设施里面的人员整整四个小时都没有任何回应，以为里面的人员发动叛乱了，准备直接武力攻破设施，但就在这时，一旁的时间异常部门主管SCP-5616敏锐的察觉到了问题:SCP-5616利用时间异常设备发现设施内的时间流速正在飞速降慢，现在已经到了设施内时间比外部时间慢几千倍的程度，再这样下去整个设施的时间将会停止，把里面的人全部像以前的SCP-5616一样永远困在里面，宇宙学部在此提醒：实验千万条，安全第一条，操作不规范，亲人两行泪！",/*110*/
        "本游戏共有7个基本的声望层：<span style='color:#ff0000'>扩散</span>、<span style='color:#ffff00'>扪敤</span>、<span style='color:#00ff00'>扫敥</span>、<span style='color:#00ffff'>扬敦</span>、<span style='color:#0000ff'>扭敧</span>、<span style='color:#ff00ff'>扮敨</span>、扯敩",
        "本游戏的声望层级与FE000000声望层级相比，相当于五倍大甜甜花和四倍大甜甜花的区别",
        "苯游戏使用氢氚ML/Ja钒砷铬碘铂/二硫化碳编写",
        "到达9e15条新闻后，你的滚动新闻将发生溢出初储触锟斤拷烫烫烫...",
        "我是旅行者、开拓者、绳匠、……",
        "已修复修复修复……(以下省略3.6e308字)新闻不能显示的bug失败的bug失败……(以下省略7.2e308字)的bug",
        "kurukurukurukurukurukurukurukurukurukurukurukurukurukurukururin",
        "没人在乎，我在<span class='nihility'>虚无</span>中打翻了<span class='nihility'>虚无</span>，在<span class='erudition'>智识</span>中演算了<span class='erudition'>智识</span>",
        "<span class='erudition'>智识</span>星神为何沉默不语？或许是因为没装声卡",
        "跳舞，只要音乐在响，就尽管跳下去。明白我的话？跳舞，不停地跳舞。不要考虑为什么跳，不要考虑意义不意义，意义那玩意儿本来就是没有的，要是考虑这个，脚步势必停下来。一旦停下来，我就再也爱莫能助了，并且连接你的线索也将全部消失，永远消失。那一来，你就只能在这里生存，只能不由自主地陷进这边的世界。因此不能停住脚步，不管你如何觉得滑稽好笑，也不能半途而废，务必咬紧牙关踩着舞点跳下去。跳着跳着，原先坚固的东西便会一点点酥软，有的东西还没有完全不可救药。能用的全部用上去，全力以赴，不足为惧的。你的确很疲劳，精疲力竭，惶惶不可终日。谁都有这种时候，觉得一切都错得不可收拾，以致停下脚步。但只有跳下去，而且要跳得出类拔萃，跳得大家心悦诚服。这样，我才有可能助你一臂之力。总之一定要跳要舞，只要音乐没停，要跳要舞，只要音乐没停",/*120*/
        "俸俸伲 购美病",
        "为什么点数×点数不等于点数²？因为点数×点数=点点数数，点数²=点数数",
        "预言石上血痕现，星河倒悬月无光，莫问何处寻生路，轮回尽头万物殇",
        "仿生人偶是会梦见电子羊的",
        "有两颗中子星，它们的风元素力分别是1000<span style='color:#ff8000'>风之微粒</span>和1<span style='color:#80ff00'>风之徯粓</span>，它们的风元素力之和是多少？",
        "当你遇到困难时，回望自己所做过的一切，所经历过的所有不顺心的事情，你就会发现：其实你现在所正经历的困难，倒也不算什么大事。",
        "Tryptophe是风神的先祖，就像Derpsmith是蚁神的先祖一样",
        "铃音(Lain)曾经说过：无论何时何地，每一个风灵都是互相联通的",
        "<coior=#f29e38ff>HTML可以做出模拟宇宙，HTML是最好的语言！</oolor>",
        "斯帕克模型猜想指的是在人类大脑神经元之间存在着一种以“斯帕克”(Sparks)为单位的信息传递模式。这一模型猜想源自于对大脑神经元活动的深入观察和研究，它挑战了传统上认为神经元之间信息传递是连续的观点，而提出了一种全新的、基于离散脉冲的信息传递机制。斯帕克模型猜想认为，神经元之间的信息传递不是连续的，而是以离散的“斯帕克”为单位进行。这种离散的信息传递方式，与连续的电信号传递相比，更能体现大脑信息处理的高效性和快速性。该猜想进一步假设，这些离散的“斯帕克”实际上是以脉冲的形式在神经元之间传递。这种脉冲式传递方式不仅符合大脑神经元活动的实际观测结果，而且为理解大脑复杂的信息处理机制提供了新的视角。研究人员利用脑电图(EEG)等技术手段，观察到大脑神经元之间的电活动确实呈现出离散的脉冲形式，这与斯帕克模型猜想的假设相一致。此外，还发现神经元之间的脉冲传递具有一定的时间间隔，进一步支持了离散信息传递的观点",/*130*/
        "就算我们不抬头仰望，星空也永远注视着我们",
        "风带来了故事的种子，时间墙使之发芽；风带来了新的故事，时间墙使之成为神话",
        "事物的规律总是外表庞杂动人，内在却简单质朴，万物归因，一行公式可解众生迷茫",
        "哪怕蝴蝶的翅膀足以撼动飓风，它的美丽也需<del>草木</del>style.css点缀",
        "根据加速回报定律，从1998年7月6日《铃音的系列实验》出版到现在的过程中人类所取得的进步比从500万年前人类诞生到1998年7月6日取得的总进步更多。",
        "秘境的尽头到底是什么？从遇到的怪物来看，探寻答案之路肯定不轻松，不过，只要最终能得到答案，一切都是值得的",
        "哪个反物质维度的mod能有ee308膨胀时间(DT)？IDR(infinity dimention rewritten)mod！",
        "第九代互联网协议(IPv9)，有2^2^10=1.8e308个IP地址，IPvn有2^2^(n+1)个",
        "全网呼叫增量人！增量游戏车牌歌：增A反物质车，增B序数的，增C声望、增D欧米伽、质量是增E；协同是增F，莱因哈特叫增G，楼梯间挂着增H，鲨鱼增J车！……",
        "生命的本质是什么？生命的终点在哪里？生命的定义从未有过「完美作品」，没有标准答案的问题被设立，本就是为了令人寻找得不到的答案。渴望一些「纯粹」的事物，「依恋」……关乎掌控焦虑和疼痛的岛叶皮质，还有制造渴望的伏隔核，情感的规律可被轻易拆解，孩子们得到随机的奖励，就会变得更加……乖巧。倘若将生命「培育」、「重组」、「再现」，便能解剖「记忆」、调控「均衡」、解构「纯美」、再现「不朽」、理解「生命」、触控「概念」、成为「<span class='redacted'>生物炼金之星神</span>」",/*140*/
        "滚动新闻对我来说就是梗文字聚集地",
        "世界由于反问题过多晕倒了，进行大嘎吱嘎吱以获得1无穷远点",
        "QqQe308，音乐游戏树的祈-我与神祖-",
        "数学家们已经计算出，BB(5)吨TNT当量的核弹威力还比不上沙皇炸弹，但BB(6)吨TNT当量的核弹足以摧毁至少13个lodeverses",
        "byd反物质维度slower把我浏览器搞不崩了",
        "近日有两名业余数学家声称发现了五次方程的纯根式求根公式，在不相关新闻中，ZFC公理化集合论已经彻底崩塌",
        "人类到什么时候才能把圆周率计算到10^18位？答：5小时后",
        "多元宇宙的属性e1e9，是距离增量开创的",
        "永远不会放弃你,永远不会令你沮丧,永远不会抛弃你,永远不会让你哭,永远不会同你道别,永远不会谎言伤害你",
        "2↑↑0.5=我不会，长大后再学习",/*150*/
        "Mathematike Syntaxis",
        "(ﺕ)",
        "有人声称证明了奇完全数的数量不超过10^-540个",
        "(✨🌞🏘✨️🌙🌳✨)💥🧗‍░▒▓█",
        "柏拉图在《蒂迈欧篇》中将正多面体与宇宙意义联系起来，正四面体-火，正六面体-土，正八面体-气，正二十面体-水，而正十二面体则是以太，构成星群和天空的物质",
        "总是会放弃你,总是会令你沮丧,总是会抛弃你,总是会让你哭,总是会同你道别,总是会谎言伤害你——反物质瑞克·艾斯利",
        "学习eferygrt的自己写出bug后找原作者的精神",
        "idleballs是我（曾经）最喜欢的放置游戏（之一），之前叫做球球作战大冒险，最后一关是500关，数字为4.93e88",
        "红鲨在坐车回家的路上，因为超级折算|路程，速度(受软上限限制)，迟迟到不了家",
        "9月15日是增量游戏节（e9e15），在JavaScript中，最大的安全整数是Number.MAX_SAFE_INTEGER，其值为9,007,199,254,740,992，这是在不失去精度的情况下JavaScript中可以处理的最大整数，在break_infinity.js中当指数为最大安全整数时，表示的数值为e9e15",/*160*/
        "刚刚复习完的你正在玩游戏休息，突然你脑中出现一道信息： 遗忘度 超过 记忆度 ，进行一次无奖励的 知识重置",
        "粒子物理学家Pollux用加速器证明了相对论是错误的，因为光速并不是一个硬上限，而是一个很硬的软上限",
        "你在突发兴致一下子喝了十杯水后，胃里突然出现了一个 杯水 生成器",
        "科技已经这么发达了吗，都有K65路公交车了，比葛立恒数还大！",
        "Incremental mass rewritten <span class='redacted'>REDACTED</span> edition: 致敬传奇重写王veryrrdefine",
        "过早地放盐和酱油的时候，都可以让氯化钠中的氯就挥发出去了，就剩下钠了，这样的话，你吃的时候还是不咸",
        "AI取代了人，所以AI工智能取代了人工智能，AI工智能工智能取代了AI工智能，AI工智能工智能工智能取代了AI工智能工智能……",
        "樵夫误入了青霞洞天仙境后，青霞洞天仙境由于能量过多坍塌了",
        "无相之风晶核、赫耀多方面体、星形十二面体，在原神中是存在的",
        "在法眼层次的人们，同时具有天眼和慧眼的功能，不仅仅能够看见事实，也能看清其来龙去脉，同时本身的能量够大，还能够介入事物的根本结构里面，去造成事实的改变",/*170*/
        "序数增量吧吧友们（包括我）干的事越来越<del>离谱</del>全面：C++大数库、编程猫增量游戏、python增量游戏，后面该不会有专门制作增量游戏的编程语言吧",
        "抓大鹅，抓几只，抓9007199254740993只，没抓着",
        "口阿口牙，马亥歹匕手戈力",
        "猫的反应速度是猫的七倍 设猫的反应速度为x 则由题意可知x=7x 解得x=0 ∴猫 = 石头",
        "Number.MAX_VALUE === eval(`0b${'1'.repeat(53)}${'0’.repeat(971)}`)",
        "禁·风灵作成·" + toChineseOrdinal(Math.floor(Math.random() * 100)) + "同构" + toChineseOrdinal(Math.floor(Math.random() * 10)) + "型",
        "<span style=\"color:#111;text-shadow: 1px 1px 2px #222, -1px -1px 2px #444, 0 0 24px #666\">与众不同</span>",
        "「实验体" + toChineseOrdinal(Math.floor(Math.random() * 1000)) + "式」的光照分泌物其实有两种,为了明确区分,就叫「壹" + toChineseOrdinal(Math.floor(Math.random() * 1000)) + "式」和「壹" + toChineseOrdinal(Math.floor(Math.random() * 1000)) +"式」",
        "佩勒,the celestial of antimatter,就是饼干点击里的邪恶老奶奶",
        "Googology(大数的学问)不是在于创造出最大的数——那根本就不存在——而是在于拥有能够表示数的记号.站在巨人的肩上这句话在这里并不适用.任何 + 1的行为都是徒劳, 只有自己创造出一个记号, 或是发现一个新的函数,才是有用的. Sbiis Saibian 曾说过这样一句话: 几乎所有的正整数都是非常非常大的.其实, 无论对于什么正整数n, 如果任取一个正整数m, 那么m > n的概率是1",/*180*/
        "the Answer to Life, the Universe and Everything is " + 'the Answer to Life, the Universe and Everything is '.replace(/\s/g, "").length,
        "在增量游戏中，你永远不知道下一个更新会带来什么",
        "研究增量游戏，发现增量游戏，创造增量游戏",
        "为什么增量游戏玩家喜欢在群里发滑稽的表情包？因为滑稽的表情包可以增加游戏的趣味性，让玩家更加投入其中。",
        "增量游戏玩家：我，增量游戏玩家，在增量游戏中",
        "大数学家的终极目标是证明所有数都是有限的，而增量游戏玩家则认为最大的数就是最大的快乐",
        "无相之风拟造物，无相之水拟造物，无相之火拟造物，无相之岩拟造物，无相之雷拟造物，无相之冰拟造物，无相之草拟造物",
        "智识星神是一个巨大的黑洞，而愚行星神则是一个巨大的白洞，它们共同构成了宇宙的边界",
        "天才俱乐部的成员都是天才，他们拥有超凡脱俗的能力和智慧。",
        "理论星相学家认为，星星的形状和大小是由它们的自转速度、引力场强度等因素决定的，而星星的亮度则是由它们的温度和距离地球的距离决定的，而星星的颜色则是由它们的化学成分和温度决定的，而星星的运动轨迹则是由它们的引力场和周围物质的影响决定的",/*190*/
        "西格玛重子基本粒子是一种假想的粒子，它由西格玛（+1）和重子（-1/3）组成，这种粒子在宇宙中极为罕见，但其存在对于理解宇宙的基本性质至关重要",
        "报告和论文的撰写是学术研究的重要环节，它们不仅有助于整理和分享研究成果，还能促进学术交流和合作",
        "增量游戏的学术研究通常涉及对游戏机制的深入分析，以及对玩家行为和策略的细致观察",
        "数字到达葛立恒数的游戏，玩家需要不断点击数字，直到它达到这个惊人的数值",
        "成就星神（V）和虚无星神（IX）是罗马数字5和9表示，虚无成就是九十五个成就的总和，成就星神（V）代表了成就的深度和广度，而成就星神（IX）则代表了成就的数量和质量",
        "对制作者表示拜谢，对玩家表示感谢，对赞助者表示赞赏",
        "砂糖是蔗糖的另一种称呼，它们都是糖类物质，原神砂糖的原型是砂糖，砂糖是砂糖的原型",
        "你是一个一个一个的数字，你也是一个一个的一个数字",
        "来自星星的计算机，能够处理任何大小的数字，无论它们有多大",
        "生物炼金学家认为，通过将生物的基因和化学物质进行精确的控制和组合，可以创造出具有特定功能和性能的新物种，这种新物种可以被用于医学、农业、工业等领域，为人类带来更多的福利和便利，生物炼金学的研究和应用，将为人类带来更多的科学和技术进步",/*200*/
    ]
var p = 50 + document.body.clientWidth
var l = -50 - (newsText.innerText.length * 16)
var newsTimer = setInterval(function () {
    if (!player.news) return;
    p -= 1
    if (p <= l) {
        newsText.innerHTML = texts[Math.floor(Math.random() * texts.length)]
        newsText.style.width = (newsText.innerText.length * 16).toString() + "px"
        l = -50 - (newsText.innerText.length * 16)
        p = 50 + document.body.clientWidth
    }
    newsText.style.left = p.toFixed(1) + "px"
}, 10)
newsText.innerHTML = texts[Math.floor(Math.random() * texts.length)]

var caidan = false;

/*动画效果*/
function animationBigCrunch() {
    document.querySelectorAll("body")[0].style.animation = "2s ease 0s 1 normal none running bigcrunch"
    setTimeout(function () {
        document.querySelectorAll("body")[0].style.animation = ""
    }, 2000)
}

function predictableRandom(x) {
    let start = Math.pow(x % 97, 4.3) * 232344573;
    const a = 15485863;
    const b = 521791;
    start = (start * a) % b;
    for (let i = 0; i < (x * x) % 90 + 90; i++) {
        start = (start * a) % b;
    }
    return start / b;
}

function randomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 50) + 192);
}

function wordCycle(list, noBuffer = false) {
    const len = list.length;
    const tick = Math.floor(Date.now() / 250) % (len * 5);
    const mod5 = ((Date.now() / 250) % (len * 5)) % 5;
    const largeTick = Math.floor(tick / 5);
    let v = list[largeTick];

    // Blend with adjacent words, in such a way that mod5 being 0 or 5 corresponds with a 0.5 blend parameter
    if (mod5 < 0.6) {
        v = this.blendWords(list[(largeTick + list.length - 1) % list.length], list[largeTick], (mod5 + 0.6) / 1.2);
    } else if (mod5 > 4.4) {
        v = this.blendWords(list[largeTick], list[(largeTick + 1) % list.length], (mod5 - 4.4) / 1.2);
    }

    v = this.randomCrossWords(v, 0.1 * Math.pow(mod5 - 2.5, 4) - 0.6);
    if (noBuffer) return v;

    const maxWordLen = Math.max(...list.map(x => x.length));
    const bufferSpace = (maxWordLen - v.length) / 2;

    // Buffer the result with ALT+255 on either side to prevent the ui from twitching.
    // Spaces do not work due to being automatically collapsed, and css fixing this causes other issues.
    return " ".repeat(Math.ceil(bufferSpace)) + v + " ".repeat(Math.floor(bufferSpace));
}

function randomCrossWords(str, frac = 0.7) {
    if (frac <= 0) return str;
    const x = str.split("");
    for (let i = 0; i < x.length * frac; i++) {
        const randomIndex = Math.floor(predictableRandom(Math.floor(Date.now() / 500) % 964372 + 1.618 * i) * x.length);
        x[randomIndex] = randomSymbol();
    }
    return x.join("");
}

function blendWords(first, second, param) {
    if (param <= 0) return first;
    if (param >= 1) return second;
    return first.substring(0, first.length * (1 - param)) +
        second.substring(second.length * (1 - param), second.length);
}

function loadVue() {
    window.app = new Vue({
        el: "#app",
        data: {
            player: player,
            v: v,
        }
    })
}
loadVue();