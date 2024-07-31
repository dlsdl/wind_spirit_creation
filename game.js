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
];
var player;

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

        tier01: new Decimal(0),
        tier02: new Decimal(0),
        tier03: new Decimal(0),
        tier04: new Decimal(0),
        tier01conf: false,
        tier02conf: false,
        tier03conf: false,
        tier04conf: false,
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

        hasUnlockedPL4: false,
        PL4energy: new Decimal(1),
        PL4pts: new Decimal(0),
        PL4ptsttl: new Decimal(0),
        PL4tms: new Decimal(0),
        PL4sec: new Decimal(0),
        PL4conf: true,

        PL4goal: [false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false,
        ],
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
    }
    player.energy = new Decimal(2);

    /*其他数值*/
    v = {
        glblspd: new Decimal(1),
        baseprd: new Decimal(0.25),
        gamespd1: new Decimal(1),
        gamespd2: new Decimal(1),
        softcap: new Decimal("e3.470639555327098e17"),
        softcap2: new Decimal("e5.403e307"),
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

        scaltier01: new Decimal(100),
        scaltier02: new Decimal(1e10),
        scaltier03: new Decimal(1e42),
        scaltier04: new Decimal(1e170),
        scaltier05: new Decimal("1e682"),
        scaltier06: new Decimal("1e2730"),
        scaltier07: new Decimal("1e10922"),
        scaltier08: new Decimal("1e43690"),

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

        wscbaseValue: new Decimal(0),
        wscbaseValue1: new Decimal(0),
        wscbaseValue2: new Decimal(0),
        wscbaseValue3: new Decimal(0),
        wscbaseValue4: new Decimal(0),
        wscbaseValue5: new Decimal(0),
        wscbaseValue6: new Decimal(0),
        wscbaseValue7: new Decimal(0),
        wscbaseValue8: new Decimal(0),
        wscbaseValueExp: new Decimal(1),
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
        upgcor03: new Decimal(1024),
        upgcor04: new Decimal(2048),
        upgcsl01: new Decimal(512),
        upgcsl02: new Decimal(1024),
        upgcsl03: new Decimal(2048),
        upgcsl04: new Decimal(4096),
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
        chascl01: new Decimal("1e4932"),
        chascl02: new Decimal("1e9864"),
        chascl03: new Decimal("1e19728"),
        chascl04: new Decimal("1e39456"),
        chascl05: new Decimal("1e2000000"),
        chascl06: new Decimal("1e8000000"),
        chascl07: new Decimal("1e32000000"),
        chascl08: new Decimal("1e128000000"),
        chascl09: new Decimal("e1e5"),
        chascl10: new Decimal("e1e14"),
        chascl11: new Decimal("e1e12"),
        chascl12: new Decimal("e1e10"),
        PL1chacap: new Decimal(4),
        PL2chacap: new Decimal(4),
        PL3chacap: new Decimal(4),

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
        PL3tef1: new Decimal(1),
        PL3tef2: new Decimal(1),

        resped: new Decimal(1),
        resr01: new Decimal(4),
        resr02: new Decimal(16),
        resr03: new Decimal(64),
        resr04: new Decimal(256),
        resr05: new Decimal(1024),
        resr06: new Decimal(4096),
        resr07: new Decimal(16384),
        resr08: new Decimal(65536),
        resr09: new Decimal(1048576),
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
        fraue01: new Decimal(1),
        fraue02: new Decimal(1),
        fraue03: new Decimal(1),
        fraue04: new Decimal(1),
        fraue05: new Decimal(1),
        fraue06: new Decimal(1),
        fraue07: new Decimal(1),
        fraue08: new Decimal(1),

        boxc1: new Decimal(4096),
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
    if (nt - player.nowtime > 10000 && player.nowtime > 10000) {
        if (nt - player.nowtime >= 86400000) {
            nt = player.nowtime + 86400000;
        }
        gui_mod = 0;
        mainLoop();
        for (let i = 0; i < (nt - player.nowtime) / 10000; i++) {
            produce(200);
            mainLoop();
        }
        document.getElementById("offline").style.display = "block";
        document.getElementById("offlt").innerHTML = "你离线了" + ((nt - player.nowtime) / 1000) + "秒（最大86400秒）<br><br>在此期间，你的能量变成了" + notation(player.energy);
    }
    gui_mod = 1;
}
get_offline_time();

function closeModal() {
    document.getElementById("offline").style.display = "none";
}

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
    mainLoop();
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
    a.download = "WindSpiritCreationSave-" + Date() + ".txt";
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

/*游戏*/
function buyWsc(tier) {
    getWscCost();
    var name = tiername[tier];
    if (tier <= 8) {
        if (player.innormcha == 4 & tier >= 5) return;
        if (player.energy.gte(v["wscc" + name])) {
            player["wsca" + name] = player["wsca" + name].add(1);
            player["wscb" + name] = player["wscb" + name].add(1);
            player.energy = player.energy.sub(v["wscc" + name]);
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
    for (let i = 1; i <= 40; i++) {
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

function getWscMult() {
    let mult01to08 = new Decimal(1);
    let mult09to16 = new Decimal(1);
    let mult17to24 = new Decimal(1);
    let mult25to32 = new Decimal(1);
    let mult33to40 = new Decimal(1);

    let wmpb01to08 = new Decimal(1);
    let wmpb09to16 = new Decimal(1);
    let wmpb17to24 = new Decimal(1);
    let wmpb25to32 = new Decimal(1);
    let wmpb33to40 = new Decimal(1);

    let wbpw = new Decimal(1);
    if (player.tier01.gte(6308)) wbpw = wbpw.pow(player.tthsize.max(1).pow(5));
    if (player.tier03.gte(50)) wbpw = wbpw.pow(player.tier03.sub(44).mul(0.2).max(1));

    if (player.tier01.gte(1)) mult01to08 = mult01to08.mul(player.tier01.add(1).pow(2));
    if (player.tier01.gte(2)) mult01to08 = mult01to08.mul(v.wscbaseValue.div(64).max(1));
    if (player.tier01.gte(5)) mult01to08 = mult01to08.mul(player.tier02.add(1).pow(3));
    if (player.tier01.gte(10)) mult01to08 = mult01to08.mul(player.energy.add(1).log(2).pow(0.2).max(1));
    if (player.tier01.gte(25)) mult01to08 = mult01to08.mul(new Decimal(2).mul(new Decimal(2).pow(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03))).pow(player.tier01.mul(wbpw)).max(1));
    if (player.tier01.gte(63)) mult09to16 = mult09to16.mul(player.tier01.add(1).pow(2)).mul(player.tier02.add(1).pow(3));
    
    if (player.PL1upg[4] == true) mult09to16 = mult09to16.mul(player.PL1energy.add(1).log(2).max(1).pow(player.chacom02.mul(1).add(2)));
    if (player.PL1upg[5] == true) mult09to16 = mult09to16.mul(player.PL1ptsttl.min(player.PL1ptsttl.add(1).log(1.189207115002721).pow(4).mul(4294967296)).max(1));
    if (player.PL1upg[6] == true) mult09to16 = mult09to16.mul(player.PL1tms.pow(4).min(player.PL1tms.pow(0.25).mul(1.152921505e18)).max(1)); 
    if (player.PL1upg[7] == true) mult09to16 = mult09to16.mul(player.energy.add(1).log(2).max(1).pow(player.chacom02.mul(1).add(2))); 

    mult01to08 = mult01to08.mul(new Decimal(16).pow(player.PL1bab10));
    mult09to16 = mult09to16.mul(new Decimal(2).pow(player.PL1bab12)).mul(player.anmpar.pow(player.parupg02.mul(0.25)).max(1));
    
    if (player.orbupg[0] == true) mult01to08 = mult01to08.mul(player.PL1energy.add(1).log(2).pow(16));
    if (player.orbupg[1] == true) mult01to08 = mult01to08.mul(player.energy.add(1).log(2).pow(16));
    if (player.orbupg[2] == true) mult09to16 = mult09to16.mul(player.PL1energy.add(1).log(2).pow(4));
    if (player.orbupg[3] == true) mult09to16 = mult09to16.mul(player.energy.add(1).log(2).pow(4));
    if (player.orbupg[4] == true) mult01to08 = mult01to08.mul(hyp(player.PL1energy, 0.9));
    if (player.orbupg[5] == true) mult01to08 = mult01to08.mul(hyp(player.energy, 0.75));
    if (player.orbupg[6] == true) mult09to16 = mult09to16.mul(hyp(player.PL1energy, 0.75));
    if (player.orbupg[7] == true) mult09to16 = mult09to16.mul(hyp(player.energy, 0.625));
    
    if (player.tier03.gte(1)) mult17to24 = mult17to24.mul(new Decimal(1.044273782427413).pow(player.upgd01.add(player.upgd02).add(player.upgd03).add(player.upgd04)));
    mult17to24 = mult17to24.mul(player.PL2tms.pow(player.PL2upg04).max(1)).mul(player.anm2.pow(player.anm2u02.mul(4)).max(1));
    
    if (player.std[4] == true) mult09to16 = mult09to16.mul(new Decimal(2).mul(new Decimal(2).pow(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03))).root(8).pow(player.tier01).pow(player.tier03.sub(44).mul(0.2).max(1)));
    if (player.std[5] == true) mult17to24 = mult17to24.mul(new Decimal(2).mul(new Decimal(2).pow(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03))).root(64).pow(player.tier01).pow(player.tier03.sub(44).mul(0.2).max(1)));
    if (player.std[8] == true) mult01to08 = mult01to08.mul(player.PL2energy.max(1).log(2).pow(4096).max(1));
    if (player.std[9] == true) mult09to16 = mult09to16.mul(player.PL2energy.max(1).log(2).pow(256).max(1));
    if (player.std[10] == true) mult17to24 = mult17to24.mul(player.PL2energy.max(1).log(2).pow(16).max(1));

    if (player.resa01.gte(1)) mult25to32 = mult25to32.mul(v.rese01);

    if (player.ptn[0] == true) mult01to08 = mult01to08.mul(v.ptnm01);
    if (player.ptn[1] == true) mult09to16 = mult09to16.mul(v.ptnm02);
    if (player.ptn[2] == true) mult17to24 = mult17to24.mul(v.ptnm03);
    if (player.ptn[3] == true & player.tthpu[2] == true) mult25to32 = mult25to32.mul(v.ptnm04);
    
    mult01to08 = mult01to08.mul(v.tthmul.max(1));
    mult09to16 = mult09to16.mul(v.tthmul.max(1));
    mult17to24 = mult17to24.mul(v.tthmul.max(1));
    mult25to32 = mult25to32.mul(v.tthmul.max(1));
    
    mult01to08 = mult01to08.mul(v.PL1engmul).mul(v.PL2engmul).mul(v.PL3engmul).mul(v.PL4engmul);
    mult09to16 = mult09to16.mul(v.PL2engmul).mul(v.PL3engmul).mul(v.PL4engmul);
    mult17to24 = mult17to24.mul(v.PL3engmul).mul(v.PL4engmul);
    mult25to32 = mult25to32.mul(v.PL4engmul);
    
    if (player.tier02.gte(750)) {
        wmpb01to08 = v.wscmpb.pow(256);
        wmpb09to16 = v.wscmpb.pow(64);
        wmpb17to24 = v.wscmpb.pow(16);
        wmpb25to32 = v.wscmpb.pow(4);
        wmpb33to40 = v.wscmpb;
    }
    else if (player.tier02.gte(75)) {
        wmpb01to08 = v.wscmpb.pow(4);
        wmpb09to16 = v.wscmpb.pow(2);
        wmpb17to24 = v.wscmpb;
        wmpb25to32 = v.wscmpb;
        wmpb33to40 = v.wscmpb;
    }
    else {
        wmpb01to08 = v.wscmpb;
        wmpb09to16 = v.wscmpb;
        wmpb17to24 = v.wscmpb;
        wmpb25to32 = v.wscmpb;
        wmpb33to40 = v.wscmpb;
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

    if (player.infytx == true | player.incha == 9) {
        for (let tier = 1; tier <= 40; tier++) {
            let name = tiername[tier];
            v["wscm" + name] = v["wscm" + name].div(player.energy.pow(0.125).max(1));
        }
    }
    if (player.innormcha == 8) {
        player.normchamul = player.normchamul.div(new Decimal(8).pow(new Decimal(diff))).min(1);
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
    if (player.innormcha == 1) {
        v.wscp01 = new Decimal(2);
        for (let tier = 2; tier <= 8; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = new Decimal(0);
        }
    }
    else if (player.innormcha == 3) {
        player.normchapow = player.normchapow.add(new Decimal(diff).mul(0.333)).min(1);
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
        let a = new Decimal(4096);
        powe01to08 = powe01to08.add(player.chacom03.min(player.chacom03.mul(4).root(2)).min(player.chacom03.mul(256).root(4)).mul(0.01));
        powe09to16 = powe09to16.add(player.chacom06.min(player.chacom06.mul(64).root(4)).mul(0.01));

        if (player.tier03.gte(3)) {
            powe01to08 = powe01to08.add(player.tier03.min(player.tier03.pow(0.5).mul(8)).mul(0.001));
            powe09to16 = powe09to16.add(player.tier03.min(player.tier03.pow(0.5).mul(8)).mul(0.001));
        }
        if (player.tier04.gte(3)) powe17to24 = powe17to24.add(player.tier03.min(player.tier03.pow(0.5).mul(8)).mul(0.001));
        if (player.tier03.gte(126)) powe25to32 = powe25to32.add(player.tier03.min(player.tier03.pow(0.5).mul(8)).mul(0.0004));

        if (player.alcu[5] == true) {
            powe01to08 = powe01to08.add(player.energy.add(1).log(2).add(1).log(2).div(a));
            powe09to16 = powe09to16.add(player.PL1energy.add(1).log(2).add(1).log(2).div(a));
            powe17to24 = powe17to24.add(player.PL2energy.add(1).log(2).add(1).log(2).div(a));
        }
        powe01to08 = powe01to08.add(player.alcu03.mul(0.01));
        powe09to16 = powe09to16.add(player.alcu04.mul(0.01));
        powe17to24 = powe17to24.add(player.alcu05.mul(0.01));

        powe01to08 = powe01to08.add(player.anm2u04.pow(0.6667).min(player.anm2u04.pow(0.3333).mul(2)).mul(0.01));
        powe09to16 = powe09to16.add(player.anm2u04.pow(0.6667).min(player.anm2u04.pow(0.3333).mul(2)).mul(0.01));
        powe17to24 = powe17to24.add(player.anm2u04.pow(0.6667).min(player.anm2u04.pow(0.3333).mul(2)).mul(0.01));

        powe25to32 = powe25to32.add(v.xyze2.max(0));

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

        powe33to40 = powe33to40.add(v.fraue02);

        if (player.resa03.gte(1)) {
            powe01to08 = powe01to08.mul(new Decimal(1.010889286).pow(player.resa03.pow(0.5)));
            powe09to16 = powe09to16.mul(new Decimal(1.010889286).pow(player.resa03.pow(0.5)));
            powe17to24 = powe17to24.mul(new Decimal(1.010889286).pow(player.resa03.pow(0.5)));
            powe25to32 = powe25to32.mul(new Decimal(1.010889286).pow(player.resa03.pow(0.5)));
        }

        powe01to08 = powe01to08.mul(v.tthpow.max(1));
        powe09to16 = powe09to16.mul(v.tthpow.max(1));
        powe17to24 = powe17to24.mul(v.tthpow.max(1));
        powe25to32 = powe25to32.mul(v.tthpow.max(1));

        powe01to08 = powe01to08.mul(v.hdrn4e.max(1));
        powe09to16 = powe09to16.mul(v.hdrn6e.max(1));
        powe17to24 = powe17to24.mul(v.hdrn8e.max(1));
        powe25to32 = powe25to32.mul(v.hdrn12e.max(1));
        powe33to40 = powe33to40.mul(v.hdrn20e.max(1));

        if (player.incha == 11) {
            powe09to16 = new Decimal(0.5).pow(player.PL1sec.div(v.gamespd1));
            powe17to24 = new Decimal(0.5).pow(player.PL2sec.div(v.gamespd1));
            powe25to32 = new Decimal(0.5).pow(player.PL3sec.div(v.gamespd1));
        }

        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe01to08;
        }
        for (let tier = 9; tier <= 16; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe09to16;
        }
        for (let tier = 17; tier <= 24; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe17to24;
        }
        for (let tier = 25; tier <= 32; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe25to32;
        }
        for (let tier = 33; tier <= 40; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = powe33to40;
        }
    }
    if (player.incha == 2 | player.incha == 9) {
        for (let tier = 1; tier <= 32; tier++) {
            let name = tiername[tier];
            v["wscp" + name] = v["wscp" + name].div(player.energy.log(2).max(1).pow(0.5).div(1024).add(1)).min(1);
        }
    }
}

function getWscHyp() {
    if (player.PL4goal[9] == true) {
        for (let tier = 1; tier <= 40; tier++) {
            let name = tiername[tier];
            v["wsch" + name] = new Decimal(1.001);
        }
    }
    else {
        for (let tier = 1; tier <= 40; tier++) {
            let name = tiername[tier];
            v["wsch" + name] = new Decimal(1);
        }
    }
}

function getWscMultPerBuy() {
    v.wscmpb = new Decimal(1.6);
    if (player.tier02.gte(1)) v.wscmpb = v.wscmpb.add(player.tier02.pow(0.25).mul(0.05));
    if (player.tier02.gte(5)) v.wscmpb = v.wscmpb.add(player.tier01.pow(0.25).mul(0.05));
    v.wscmpb = v.wscmpb.add(v.upge01).mul(v.upge02);
    if (player.tier02.gte(12)) v.wscmpb = v.wscmpb.mul(new Decimal(1.010889286051700).pow(player.PL1bab04.add(player.PL1bab05).add(player.PL1bab06).mul(0.2).add(1)).pow(player.tier02));
    if (player.PL1upg[15] == true) v.wscmpb = v.wscmpb.mul(1.25);
    if (player.hasunlockedanmorb == true & player.incha != 6 & player.incha != 9) {
        if (player.std[0] == true) v.wscmpb = v.wscmpb.pow(player.anmpar.add(1).log(2).add(1).log(2).pow(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4))).max(1));
        else v.wscmpb = v.wscmpb.mul(player.anmpar.add(1).log(2).pow(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4))).max(1));
    }
    if (player.innormcha == 12) v.wscmpb = new Decimal(1);
}

function getWscCost() {
    for (let tier = 1; tier <= 40; tier++) {
        let name = tiername[tier];
        var bcost = v["wsccor" + name].add(v["wsccsl" + name].mul(player["wscb" +name]));
        v["wscc" + name] = new Decimal(2).pow(scale(bcost));
    }
    if (player.innormcha == 2) {
        for (let tier = 1; tier <= 8; tier++) {
            let name = tiername[tier];
            var bcost = v["wsccor" + name].add(v["wsccsl" + name].mul(player["wscb" + name]).mul(2));
            v["wscc" + name] = new Decimal(2).pow(scale(bcost));
        }
    }
}

function getWscBaseValue() {
    v.wscbaseValue1 = new Decimal(0);
    v.wscbaseValue2 = new Decimal(0);
    v.wscbaseValue3 = new Decimal(0);
    v.wscbaseValue4 = new Decimal(0);
    v.wscbaseValue5 = new Decimal(0);
    v.wscbaseValueExp = new Decimal(1);
    for (let tier = 1; tier <= 8; tier++) {
        let name = tiername[tier];
        v.wscbaseValue1 = v.wscbaseValue1.add(player["wscb" + name]);
    }
    for (let tier = 9; tier <= 16; tier++) {
        let name = tiername[tier];
        v.wscbaseValue2 = v.wscbaseValue2.add(player["wscb" + name]);
    }
    for (let tier = 17; tier <= 24; tier++) {
        let name = tiername[tier];
        v.wscbaseValue3 = v.wscbaseValue3.add(player["wscb" + name]);
    }
    for (let tier = 25; tier <= 32; tier++) {
        let name = tiername[tier];
        v.wscbaseValue4 = v.wscbaseValue4.add(player["wscb" + name]);
    }
    for (let tier = 33; tier <= 40; tier++) {
        let name = tiername[tier];
        v.wscbaseValue5 = v.wscbaseValue5.add(player["wscb" + name]);
    }
    if (player.std[1] == true) v.wscbaseValueExp = v.wscbaseValueExp.add(0.05);
    v.wscbaseValueExp = v.wscbaseValueExp.add(player.alcu06.mul(0.005));
    if (player.resa15.gte(1)) v.wscbaseValueExp = v.wscbaseValueExp.add(0.1);
    v.wscbaseValue = v.wscbaseValue1.add(v.wscbaseValue2.mul(4)).add(v.wscbaseValue3.mul(16)).add(v.wscbaseValue4.mul(64)).add(v.wscbaseValue5.mul(256)).mul(v.fraue06).pow(v.wscbaseValueExp);
    if (player.innormcha == 6 & v.wscbaseValue1.gt(60)) quitCha();
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

function incMaxTier1() {
    let tierbmax = invscaleTier(v.wscbaseValue.div(64)).floor();
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

function getTierCost() {
    v.tierc01 = scaleTier(player.tier01).mul(64).add(64);
    v.tierc02 = scaleTier(player.tier02).mul(4).add(4);
    v.tierc03 = scaleTier(player.tier03).mul(4).add(4);
    v.tierc04 = scaleTier(player.tier04).mul(4).add(4);
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

function getUpgdMult() {
    let upgepw = new Decimal(1);
    let upgepw2 = new Decimal(1);
    if (player.PL1upg[9] == true) v.upgd01mult = new Decimal(0.0625).mul(v.upge03);
    else v.upgd01mult = new Decimal(0.025).mul(v.upge03);
    if (player.PL1upg[10] == true) v.upgd02mult = new Decimal(1.044273782427413).pow(v.upge04);
    else v.upgd02mult = new Decimal(1.021897148654116).pow(v.upge04);
    v.upge01 = v.upgd01mult.mul(player.upgd01.add(v.upgf01));
    v.upge02 = softcap(v.upgd02mult.pow(player.upgd02.add(v.upgf02)));
    v.upge03 = player.upgd03.add(v.upgf03).mul(0.25).add(1);
    v.upge04 = softcap(player.upgd04.add(v.upgf04).pow(2)).root(2).mul(0.25).add(1);
    if (player.anm2sc.gte(67108864)) upgepw = upgepw.add(0.5);
    if (player.tier02.gte(237)) upgepw = upgepw.add(0.5);
    upgepw = upgepw.mul(v.wxzfe);
    upgepw2 = upgepw2.mul(v.hydfe);
    v.upge01 = v.upge01.pow(upgepw);
    v.upge03 = v.upge03.pow(upgepw);
    v.upge02 = v.upge02.pow(upgepw2);
    v.upge04 = v.upge04.pow(upgepw2);
}

function getUpgdCost() {
    var bcost1 = v.upgcor01.add(v.upgcsl01.mul(player.upgd01));
    v.upgc01 = new Decimal(2).pow(scale(bcost1));
    var bcost2 = v.upgcor02.add(v.upgcsl02.mul(player.upgd02));
    v.upgc02 = new Decimal(2).pow(scale(bcost2));
    var bcost3 = v.upgcor03.add(v.upgcsl03.mul(player.upgd03));
    v.upgc03 = new Decimal(2).pow(scale(bcost3));
    var bcost4 = v.upgcor04.add(v.upgcsl04.mul(player.upgd04));
    v.upgc04 = new Decimal(2).pow(scale(bcost4));
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
    if (player.incha == 8 | player.incha == 9) return;
    if (player.infytx == true) return;
    var confirmation = true;
    if (player.PL1conf == true) confirmation = confirm("您确定要扩散吗？这将重置能量、1~8式风灵作成、风单元、风模块、风灵升级，但是可以获得扩散点！第一次扩散解锁9~16式风灵和其他内容");
    if (confirmation | !player.PL1conf) {
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

function getPL1tms() {
    let baset = new Decimal(1);
    baset = baset.mul(new Decimal(2).pow(player.PL1bab11));
    if (player.std[14] == true) baset = baset.mul(v.wscbaseValue.max(1).log(2));
    if (player.PL4goal[0] == true) baset = baset.mul(2);
    if (player.PL4goal[1] == true) baset = baset.mul(2);
    return baset;
}

function getPL1engMul() {
    if (player.incha == 1 | player.incha == 9) v.PL1engmul = new Decimal(1e-100).pow(v.PL1engpow);
    else v.PL1engmul = player.PL1energy.pow(v.PL1engpow).max(1);
}

function getPL1engPow() {
    if (player.innormcha == 11) v.PL1engpow = new Decimal(0.1);
    else v.PL1engpow = new Decimal(1);
    if (player.PL1upg[8] == true) v.PL1engpow = v.PL1engpow.add(0.5);
    v.PL1engpow = v.PL1engpow.add(player.PL1bab07.add(player.PL1bab08).add(player.PL1bab09).mul(0.1)).add(player.chacom01.min(player.chacom01.pow(0.5).mul(2)).mul(0.25));
    if (player.std[2] == true) {
        v.PL1engpow = v.PL1engpow.add(1);
    }
    if (player.alcu[4] == true) v.PL1engpow = v.PL1engpow.add(1);
    if (player.anm2sc.gte(268435456)) v.PL1engpow = v.PL1engpow.add(1);
    if (player.PL4goal[8] == true) v.PL1engpow = v.PL1engpow.add(1);
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

function buyPL1bab1() {
    if (player.energy.gte(v.PL1babc1) & player.PL1bab01.lt(5)) {
        player.PL1bab01 = player.PL1bab01.add(1);
        player.energy = player.energy.sub(v.PL1babc1);
    }
    else return
}

function buyPL1bab2() {
    if (player.PL1energy.gte(v.PL1babc2) & player.PL1bab02.lt(5)) {
        player.PL1bab02 = player.PL1bab02.add(1);
        player.PL1energy = player.PL1energy.sub(v.PL1babc2);
    }
    else return
}

function buyPL1bab3() {
    if (player.PL1pts.gte(v.PL1babc3) & player.PL1bab03.lt(5)) {
        player.PL1bab03 = player.PL1bab03.add(1);
        player.PL1pts = player.PL1pts.sub(v.PL1babc3);
    }
    else return
}

function buyPL1bab4() {
    if (player.energy.gte(v.PL1babc1) & player.PL1bab04.lt(5)) {
        player.PL1bab04 = player.PL1bab04.add(1);
        player.energy = player.energy.sub(v.PL1babc1);
    }
    else return
}

function buyPL1bab5() {
    if (player.PL1energy.gte(v.PL1babc2) & player.PL1bab05.lt(5)) {
        player.PL1bab05 = player.PL1bab05.add(1);
        player.PL1energy = player.PL1energy.sub(v.PL1babc2);
    }
    else return
}

function buyPL1bab6() {
    if (player.PL1pts.gte(v.PL1babc3) & player.PL1bab06.lt(5)) {
        player.PL1bab06 = player.PL1bab06.add(1);
        player.PL1pts = player.PL1pts.sub(v.PL1babc3);
    }
    else return
}

function buyPL1bab7() {
    if (player.energy.gte(v.PL1babc1) & player.PL1bab07.lt(5)) {
        player.PL1bab07 = player.PL1bab07.add(1);
        player.energy = player.energy.sub(v.PL1babc1);
    }
    else return
}

function buyPL1bab8() {
    if (player.PL1energy.gte(v.PL1babc2) & player.PL1bab08.lt(5)) {
        player.PL1bab08 = player.PL1bab08.add(1);
        player.PL1energy = player.PL1energy.sub(v.PL1babc2);
    }
    else return
}

function buyPL1bab9() {
    if (player.PL1pts.gte(v.PL1babc3) & player.PL1bab09.lt(5)) {
        player.PL1bab09 = player.PL1bab09.add(1);
        player.PL1pts = player.PL1pts.sub(v.PL1babc3);
    }
    else return
}

function buyPL1bab10() {
    if (player.energy.gte(v.PL1babc4) & player.PL1bab10.lt(40)) {
        player.PL1bab10 = player.PL1bab10.add(1);
        player.energy = player.energy.sub(v.PL1babc4);
    }
    else return
}

function buyPL1bab11() {
    if (player.PL1energy.gte(v.PL1babc5) & player.PL1bab11.lt(40)) {
        player.PL1bab11 = player.PL1bab11.add(1);
        player.PL1energy = player.PL1energy.sub(v.PL1babc5);
    }
    else return
}

function buyPL1bab12() {
    if (player.PL1pts.gte(v.PL1babc6) & player.PL1bab12.lt(40)) {
        player.PL1bab12 = player.PL1bab12.add(1);
        player.PL1pts = player.PL1pts.sub(v.PL1babc6);
    }
    else return
}

function getBabCost() {
    v.PL1babc1 = new Decimal("1e5120").mul(v.PL1babcsl1.pow(player.PL1bab01.add(player.PL1bab04).add(player.PL1bab07)));
    v.PL1babc2 = new Decimal(1e160).mul(v.PL1babcsl2.pow(player.PL1bab02.add(player.PL1bab05).add(player.PL1bab08)));
    v.PL1babc3 = new Decimal(100000).mul(v.PL1babcsl3.pow(player.PL1bab03.add(player.PL1bab06).add(player.PL1bab09)));
    v.PL1babc4 = new Decimal("1e20480").mul(v.PL1babcsl1.pow(player.PL1bab10));
    v.PL1babc5 = new Decimal("1e640").mul(v.PL1babcsl2.pow(player.PL1bab11));
    v.PL1babc6 = new Decimal(1e20).mul(v.PL1babcsl3.pow(player.PL1bab12));
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
    let max4 = invscaleUpgd(player.anmpar.log(10)).mul(2).floor().sub(player.parupg04).max(0);
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
    v.parupgc01 = new Decimal(10).pow(scaleUpgd(player.parupg01.mul(1)).add(1));
    v.parupgc02 = new Decimal(10).pow(scaleUpgd(player.parupg02.mul(2)).add(2));
    v.parupgc03 = new Decimal(10).pow(scaleUpgd(player.parupg03.mul(3)).add(3));
    v.parupgc04 = new Decimal(10).pow(scaleUpgd(player.parupg04.mul(0.5))).mul(80);
}

function buyorbupg(tier) {
    var cost = [2, 4, 6, 8, 60, 100, 140, 180];
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
    else if (tier <= 12) {
        PL3reset();
        PL2reset();
        PL1reset();
        player.enengy = new Decimal(2);
        player.incha = tier;
    }
    else return
}

function getChaGoal() {
    v.chagoa01 = new Decimal("1.4154610e9864").mul(v.chascl01.pow(player.chacom01));
    v.chagoa02 = new Decimal("2.0035299e19728").mul(v.chascl02.pow(player.chacom02));
    v.chagoa03 = new Decimal("4.0141321e39456").mul(v.chascl03.pow(player.chacom03));
    v.chagoa04 = new Decimal("1.6e78913").mul(v.chascl04.pow(player.chacom04));
    v.chagoa05 = new Decimal("1e2000000").mul(v.chascl05.pow(player.chacom05));
    v.chagoa06 = new Decimal("1e8000000").mul(v.chascl06.pow(player.chacom06));
    v.chagoa07 = new Decimal("1e32000000").mul(v.chascl07.pow(player.chacom07));
    v.chagoa08 = new Decimal("1e128000000").mul(v.chascl08.pow(player.chacom08));
    v.chagoa09 = new Decimal("1e600000").mul(v.chascl09.pow(player.chacom09));
    v.chagoa10 = new Decimal("e1e14").mul(v.chascl10.pow(player.chacom10.pow(2)));
    v.chagoa11 = new Decimal("e1e12").mul(v.chascl11.pow(player.chacom11.pow(2).mul(2)));
    v.chagoa12 = new Decimal("e1e10").mul(v.chascl12.pow(player.chacom12.pow(2).mul(3)));

    v.PL1chacap = new Decimal(4);
    if (player.tier04.gte(1)) v.PL1chacap = v.PL1chacap.add(player.tier04.min(12))
    v.PL1chacap = v.PL1chacap.add(player.ptnu03.mul(5));
    v.PL2chacap = new Decimal(4).add(player.ptnu03.mul(3));
    v.PL3chacap = new Decimal(4);

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
        if (player.PL2tms.lte(4)) player.hasunlockedanmorb = false;
        if (player.PL2tms.lte(5)) player.orbupg = [false, false, false, false, false, false, false, false,];
        player.anmpar= new Decimal(0);
        player.anmorb= new Decimal(0);
        player.anmorbttl= new Decimal(0);
        player.parupg01= new Decimal(0);
        player.parupg02= new Decimal(0);
        player.parupg03= new Decimal(0);
        player.parupg04= new Decimal(0);
        player.innormcha= 0;
        if (player.PL2tms.lte(1)) player.normchacom= [false, false, false, false, false, false, false, false, false, false, false, false,];
        if (player.PL2tms.lte(9)) {
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

function getPL2tms() {
    let baset = new Decimal(1);
    baset = baset.mul(new Decimal(2).pow(player.PL2upg02).max(1).mul(v.PL3tef1.max(1)));
    if (player.std[15] == true) baset = baset.mul(player.PL1tms.max(1).log(2).max(1));
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
    if (player.alcu[5] == true) v.PL2engpow = v.PL2engpow.add(1);
    if (player.xyzbo.gte(1)) v.PL2engpow = v.PL2engpow.add(1);
    if (player.PL4goal[8] == true) v.PL2engpow = v.PL2engpow.add(1);
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
    if (player.PL2ptsttl.lte(1.844674407370955e19)) player.elmttl = player.PL2ptsttl.max(1).log(2).floor();
    else player.elmttl = player.PL2ptsttl.max(1).log(2).max(1).log(2).mul(16).sub(32).floor();
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
    v.elmmpd = new Decimal(4).mul(new Decimal(4).pow(player.chacom07.min(player.chacom07.pow(0.25).mul(2.8284)).div(4))).mul(new Decimal(1.010889287).pow(player.resa02));
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
    if (player.tier03.gte(20)) {
        v.elmtps01 = v.elmtps01.mul(player.energy.max(2).log(2));
        v.elmtps02 = v.elmtps02.mul(player.energy.max(2).log(2));
        v.elmtps03 = v.elmtps03.mul(player.energy.max(2).log(2));
        v.elmtps04 = v.elmtps04.mul(player.energy.max(2).log(2));
    }
    if (player.tier04.gte(10)) {
        v.elmtps01 = v.elmtps01.mul(new Decimal(2).pow(player.tier04));
        v.elmtps02 = v.elmtps02.mul(new Decimal(2).pow(player.tier04));
        v.elmtps03 = v.elmtps03.mul(new Decimal(2).pow(player.tier04));
        v.elmtps04 = v.elmtps04.mul(new Decimal(2).pow(player.tier04));
    }
}

function getfreeupg() {
    v.upgf01 = player.elmten01.add(1).log(2).floor();
    v.upgf02 = player.elmten02.add(1).log(4).floor();
    v.upgf03 = player.elmten03.add(1).log(16).floor();
    v.upgf04 = player.elmten04.add(1).log(256).floor();
    if (player.resa04.gte(1)) {
        v.upgf01 = v.upgf01.mul(player.resa04.mul(0.05).add(1)).floor();
        v.upgf02 = v.upgf02.mul(player.resa04.mul(0.05).add(1)).floor();
        v.upgf03 = v.upgf03.mul(player.resa04.mul(0.05).add(1)).floor();
        v.upgf04 = v.upgf04.mul(player.resa04.mul(0.05).add(1)).floor();
    }
    if (player.tthpu[3] == true) {
        v.upgf01 = v.upgf01.mul(v.xyze1.mul(0.01).add(1)).floor();
        v.upgf02 = v.upgf02.mul(v.xyze1.mul(0.01).add(1)).floor();
        v.upgf03 = v.upgf03.mul(v.xyze1.mul(0.01).add(1)).floor();
        v.upgf04 = v.upgf04.mul(v.xyze1.mul(0.01).add(1)).floor();
    }
    if (player.incha == 7 | player.incha == 9) {
        v.upgf01 = player.elmten01.add(1).log(2).pow(0.25).floor();
        v.upgf02 = player.elmten02.add(1).log(4).pow(0.25).floor();
        v.upgf03 = player.elmten03.add(1).log(16).pow(0.25).floor();
        v.upgf04 = player.elmten04.add(1).log(256).pow(0.25).floor();
    }
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

function getthrcost() {
    v.thrmc01 = new Decimal(2).pow(new Decimal(1048576).mul(player.thrmb01.add(1)));
    v.thrmc02 = new Decimal(2).pow(new Decimal(1024).mul(player.thrmb02.add(1)));
    v.thrmc03 = new Decimal(2).pow(new Decimal(1).mul(player.thrmb03.add(1)));
}

function buystd(tier) {
    if (player.std[tier] == true) return;
    if (tier == 0 & player.thrm.gte(4) ) { player.std[0] = true; player.thrm = player.thrm.sub(4)}
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
    v.alcost = new Decimal("1e2500").pow(new Decimal(2).pow(player.alcspd));
    v.alchmu = player.alcspd.mul(new Decimal(1.25).pow(player.alcspd.sub(1)));
    v.alcuc01 = new Decimal(2).pow(player.alcu01).mul(1);
    v.alcuc02 = new Decimal(2).pow(player.alcu02).mul(2);
    v.alcuc03 = new Decimal(2).pow(player.alcu03).mul(3);
    v.alcuc04 = new Decimal(2).pow(player.alcu04).mul(4);
    v.alcuc05 = new Decimal(2).pow(player.alcu05).mul(5);
    v.alcuc06 = new Decimal(2).pow(player.alcu06).mul(6);

    let fnals = v.alchmu.mul(v.gamespd1.div(20));
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
    else player.infytx = true;
    PL2reset();
    player.wsca17 = player.wscb17;
    player.wsca18 = player.wscb18;
    player.wsca19 = player.wscb19;
    player.wsca20 = player.wscb20;
    player.wsca21 = player.wscb21;
    player.wsca22 = player.wscb22;
    player.wsca23 = player.wscb23;
    player.wsca24 = player.wscb24;
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
    let score = player.energy.max(1).log(2);
    if ((player.infytx == true | player.resa16.gte(1)) & score.gte(player.anm2sc)) player.anm2sc = player.energy.max(1).log(2);
    v.anm2c01 = new Decimal(10).pow(scaleUpgd(player.anm2u01.mul(1)).add(1));
    v.anm2c02 = new Decimal(10).pow(scaleUpgd(player.anm2u02.mul(2)).add(2));
    v.anm2c03 = new Decimal(10).pow(scaleUpgd(player.anm2u03.mul(3)).add(3));
    v.anm2c04 = new Decimal(10).pow(scaleUpgd(player.anm2u04.mul(4)).add(4));
}

function buyanm2u(tier) {
    let name = tiername[tier];
    if (player.anm2.gte(v["anm2c" + name])) {
        player["anm2u" + name] = player["anm2u" + name].add(1);
        player.anm2 = player.anm2.sub(v["anm2c" + name]);
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
        player.PL3tms = player.PL3tms.add(getPL3tms());
        player.PL3sec = new Decimal(0);

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
        player.innormcha = 0;
        if (player.PL2tms.lte(1)) player.normchacom = [false, false, false, false, false, false, false, false, false, false, false, false,];
        player.incha = 0;
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
}

function getPL3tms() {
    let baset = new Decimal(1);
    if (player.anm3u[2] == true) baset = baset.mul(player.anm3.log(16).max(1));
    if (player.xyzbo.gte(3)) baset = baset.mul(player.PL2tms.max(1).log(2).max(1));
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
    if (player.PL4goal[8] == true) v.PL3engpow = v.PL3engpow.add(1);
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
    let speed = new Decimal(1).mul(v.gamespd1).div(20);
    let name = tiername[player.inres];
    let rspd = new Decimal(1);
    v.PL3tef1 = new Decimal(2).pow(player.PL3tms).min(player.PL3tms.mul(4)).max(1);
    v.PL3tef2 = player.PL3tms.mul(new Decimal(1.414213562).pow(player.PL3tms.sub(2).max(0))).min(player.PL3tms.pow(4));
    if (player.ptn[4] == true) rspd = rspd.mul(v.ptnm05.max(1));
    if (player.resa09.gte(1)) rspd = rspd.mul(player.energy.max(1).log(2).div(1e12).pow(4).max(1).min(1e6));
    v.resped = rspd.mul(v.PL3tef2);
    v.resr01 = new Decimal(16).pow(player.resa01).mul(32);
    v.resr02 = new Decimal(16).pow(player.resa02).mul(64);
    v.resr03 = new Decimal(16).pow(player.resa03).mul(128);
    v.resr04 = new Decimal(16).pow(player.resa04).mul(256);
    v.rese01 = hyp(player.energy.max(4),new Decimal(0.25)).pow(player.resa01.pow(0.25));
    v.rese02 = new Decimal(1.010889287).pow(player.resa02);
    v.rese03 = new Decimal(1.010889287).pow(player.resa03.pow(0.5));
    v.rese04 = player.resa04.pow(0.5).mul(10);
    if (player.inres != 0) {
        player["resp" + name] = player["resp" + name].add(v.resped.mul(speed));
        if (player["resp" + name].gte(v["resr" + name])) {
            player["resa" + name] = player["resa" + name].add(1);
            player.inres = 0;
            player["resp" + name] = new Decimal(0);
        }
        document.getElementById("probar").style.width = notation(player["resp" + name].div(v["resr" + name]).min(1).max(0).mul(100)) + "%";
        document.getElementById("respro").innerHTML = notation(player["resp" + name].div(v["resr" + name]).min(1).max(0).mul(100)) + "%";
    }
    else {
        document.getElementById("probar").style.width = "0%";
        document.getElementById("respro").innerHTML = "0%";
    }
}

function getptn() {
    v.ptnuc01 = new Decimal(2).pow(new Decimal(3).pow(player.ptnu01));
    v.ptnuc02 = new Decimal(1.6).pow(player.ptnu02.add(1)).mul(4).floor();
    v.ptnuc03 = new Decimal("1.797693134862315e308").pow(player.ptnu03.add(1).pow(3));
    v.ptnuc04 = new Decimal("1.044388881413152e1233").pow(player.ptnu04.add(1).pow(3));
    v.ptnv = player.PL3sec.min(65536).mul(new Decimal(2).pow(player.ptnu02.add(player.chacom11)).mul(v.fraue04));
    v.ptnm01 = new Decimal(2).pow(16777216).pow(v.ptnv.pow(0.25));
    v.ptnm02 = new Decimal(2).pow(65536).pow(v.ptnv.pow(0.25));
    v.ptnm03 = new Decimal(2).pow(1024).pow(v.ptnv.pow(0.25));
    v.ptnm04 = new Decimal(2).pow(64).pow(v.ptnv.pow(0.25));
    v.ptnm05 = v.ptnv;
    v.ptnm06 = new Decimal(16).pow(v.ptnv.pow(0.25));
    v.ptnm07 = new Decimal(1.414213563).pow(v.ptnv.pow(0.25));
    v.ptnm08 = new Decimal(1.044273783).pow(v.ptnv.pow(0.25));
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
    let cap = [8, 16, 4, 4];
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
    let speed = new Decimal(1).mul(v.gamespd1).div(20);
    v.tthgspd = new Decimal(2).pow(player.tthu01).mul(player.tthprem.max(1)).mul(player.PL4tms.mul(5).max(1));
    v.tthgreq = new Decimal(5).pow(player.tthsize.add(player.tthsize.sub(30).sub(v.fraue08).max(0).pow(1.5).div(6))).div(new Decimal(1.01).pow(player.tthu03.mul(player.tthsize)));
    v.tthimpc = new Decimal(5).add(player.tthimpr);
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
    if (player.ingrow == true) {
        if (player.tthgrow.lte(v.tthgreq)) player.tthgrow = player.tthgrow.add(v.tthgspd.mul(speed));
        document.getElementById("probar2").style.width = notation(player.tthgrow.div(v.tthgreq).mul(100).min(100)) + "%";
    }
    else {
        document.getElementById("probar2").style.width = "0%";
    }
    if (player.tthatact[0] == true & player.ingrow != true) player.ingrow = true;
    if (player.tthatact[1] == true & player.tthgrow.gte(v.tthgreq)) {
        player.ingrow = false;
        player.tthgrow = new Decimal(0);
        player.tthamnt = player.tthamnt.add(1);
    }
    if (player.tthatact[2] == true & player.PL4goal[2] == true) {
        player.tthu01 = player.tthgene.max(1).log(3).floor().max(0);
        player.tthu02 = player.tthgene.max(1).log(3).floor().max(0);
        player.tthu03 = player.tthsucr.max(1).log(4).floor().max(0);
        player.tthu04 = player.tthsucr.max(1).log(4).floor().max(0);
    }
    if (player.tthatact[3] == true & player.PL4goal[3] == true) {
        if (player.tthamnt.gte(v.tthimpc) & player.tthsize.eq(player.tthimpr)) {
            player.tthimpr = player.tthimpr.add(1);
            player.tthsize = player.tthsize.add(1);
            player.tthamnt = new Decimal(0);
            player.tthgrow = new Decimal(0);
        }
    }
    v.tthprespd = new Decimal(1.4142136).pow(player.tthimpr.sub(8).max(0));
    v.tthprempd = new Decimal(1.4142136).pow(player.tthimpr.sub(8).max(0));
    v.tthpuc1 = new Decimal(2).pow(player.tthpu1.add(1));
    v.tthpuc2 = new Decimal(4).pow(player.tthpu2.add(2));
    v.tthpuc3 = new Decimal(8).pow(player.tthpu3.add(3));
    v.tthpuc4 = new Decimal(16).pow(player.tthpu4.add(4));
    v.cpper = player.tthpu4.mul(0.1);
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

function atpltsw() {
    if (player.tthatact[0] == true) player.tthatact[0] = false;
    else player.tthatact[0] = true;
}

function atharsw() {
    if (player.tthatact[1] == true) player.tthatact[1] = false;
    else player.tthatact[1] = true;
}

function atbtusw() {
    if (player.tthatact[2] == true) player.tthatact[2] = false;
    else player.tthatact[2] = true;
}

function atimpsw() {
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
}

function buyxyzu(tier) {
    let p = [0, 30, 1e100, "ee300"]
    if (player.xyzx.gte(new Decimal(p[tier - 1]))) player.xyzu[tier - 1] = true;
}

function xyzsw() {
    if (player.xyzsw.eq(0) & player.xyzx.gte(30)) player.xyzsw = new Decimal(1);
    if (player.xyzsw.eq(1) & player.xyzx.gte(1e100)) player.xyzsw = new Decimal(2);
    if (player.xyzsw.eq(2) & player.xyzx.gte("ee300")) player.xyzsw = new Decimal(3);
    if (player.xyzsw.eq(3) & player.xyzx.gte("eee1000")) player.xyzsw = new Decimal(4);
    if (player.xyzsw.eq(4) & player.xyzx.gte("eee10000")) player.xyzsw = new Decimal(5);
    if (player.xyzsw.eq(5) & player.xyzx.gte("eee100000")) player.xyzsw = new Decimal(6);
    if (player.xyzsw.eq(6) & player.xyzx.gte("eee1000000")) player.xyzsw = new Decimal(7);
    player.xyzx = new Decimal(0);
    player.xyzy = new Decimal(0);
    player.xyzz = new Decimal(0);
    player.xyzt = new Decimal(0);
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

function xyzbo() {
    if (player.xyzbo.eq(0) & player.xyze.gte(1e100)) player.xyzbo = new Decimal(1);
    if (player.xyzbo.eq(1) & player.xyze.gte("ee30")) player.xyzbo = new Decimal(2);
    if (player.xyzbo.eq(2) & player.xyze.gte("ee308")) player.xyzbo = new Decimal(3);
    player.xyzx = new Decimal(0);
    player.xyzy = new Decimal(0);
    player.xyzz = new Decimal(0);
    player.xyzt = new Decimal(0);
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

function buyxyze() {
    player.xyzegn = player.xyzegn.add(player.xyze);
}

function buyxyzf() {
    player.xyzfgn = player.xyzfgn.add(player.xyze);
}

function buyxyzg() {
    player.xyzggn = player.xyzggn.add(player.xyze);
}

function buyxyzh() {
    player.xyzhgn = player.xyzhgn.add(player.xyze);
}

function ulAnm3() {
    if (player.PL3pts.gte("1e10000") & player.hasunlockedanm3 == false) player.hasunlockedanm3 = true;
}

function reastart() {
    if (player.inreac != true) player.inreac = true;
    else player.inreac = false;
}

function reareset() {
    if (player.reacm1.lte(0.001)) {
        player.reacp = player.reacp.add(1);
        player.reacm1 = new Decimal(4).pow(player.reacp);
        player.reacm2 = new Decimal(0);
        player.cata = new Decimal(2).pow(player.reacp);
    }
    else return
}

function getanm3() {
    v.blcnt = player.reacm2.add(1).div(player.reacm1.add(1)).max(0);
    let rpcnt = player.reacm2.div(player.reacm1.add(player.reacm2)).mul(100).min(100);
    let speed = v.gamespd1.mul(player.cata).div(v.blcnt.max(1)).div(20);
    if (player.anm3u[1] == true) speed = speed.mul(player.PL3tms.pow(0.5).max(1));
    if (player.inreac == true) {
        if (player.reacm1.lte(0.001)) {
            player.reacm1 = new Decimal(0);
            player.reacm2 = new Decimal(4).pow(player.reacp);
        }
        else {
            player.reacm1 = player.reacm1.sub(speed);
            player.reacm2 = player.reacm2.add(speed);
        }
        document.getElementById("probar3").style.width = notation(rpcnt) + "%";
    }
    else {
        document.getElementById("probar3").style.width = "0%";
    }

    v.anm3c01 = new Decimal(10).pow(player.anm3u01.add(1).add(player.anm3u01.sub(100).max(0).pow(2)));
    v.anm3c02 = new Decimal(100).pow(player.anm3u02.add(1).add(player.anm3u02.sub(50).max(0).pow(2)));
    v.anm3c03 = new Decimal(1000).pow(player.anm3u03.add(1).add(player.anm3u03.sub(33).max(0).pow(2)));
    v.anm3c04 = new Decimal(10000).pow(player.anm3u04.add(1).add(player.anm3u04.sub(25).max(0).pow(2)));
}

function buyanm3u(tier) {
    let name = tiername[tier];
    if (player.anm3.gte(v["anm3c" + name])) {
        player["anm3u" + name] = player["anm3u" + name].add(1);
        player.anm3 = player.anm3.sub(v["anm3c" + name]);
    }
}

function buyanm3u2(tier) {
    let cost = [1e10, 1e20, 1e30, 1e40];
    if (player.anm3u[tier] != true & player.anm3.gte(new Decimal(cost[tier]))) {
        player.anm3u[tier] = true;
        player.anm3 = player.anm3.sub(new Decimal(cost));
    }
}

function autobuyanm3upg() {
    if (player.PL4goal[4] == true) {
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
    else if (player.PL3pts.gte("1e150000")) {
        v.convmx = new Decimal(3);
        v.convnx = new Decimal("1e200000");
    }
    else if (player.PL3pts.gte("1e100000")) {
        v.convmx = new Decimal(2);
        v.convnx = new Decimal("1e150000");
    }
    else {
        v.convmx = new Decimal(1);
        v.convnx = new Decimal("1e100000");
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

const PL4checkbox = document.getElementById("PL4confirm");
PL4checkbox.addEventListener("input", function () {
    if (PL4checkbox.checked) {
        player.PL4conf = true;
    } else {
        player.PL4conf = false;
    }
})

async function PL4reset() {
    if (player.PL3pts.lt("6.741e315652")) return;
    var confirmation = true;
    if (player.PL4conf == true) confirmation = confirm("您确定要扬敦吗？这将重置之前的一切进度，但是可以获得扬敦点！第一次扬敦解锁33~40式风灵和其他内容");
    if (confirmation | !player.PL4conf) {
        player.PL4pts = player.PL4pts.add(player.PL3pts.root(1048576).floor());
        player.PL4ptsttl = player.PL4ptsttl.add(player.PL3pts.root(1048576).floor());
        player.PL4tms = player.PL4tms.add(getPL4tms());
        player.PL4sec = new Decimal(0);
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
        player.innormcha = 0;
        if (player.PL2tms.lte(1) & player.PL4goal[1] != true) player.normchacom = [false, false, false, false, false, false, false, false, false, false, false, false,];
        player.incha = 0;
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
        player.ptn= [false, false, false, false, false, false, false, false,];
        player.ptnu01 = new Decimal(0);
        if (player.PL4goal[3] == true) player.ptnu01 = new Decimal(1);
        player.ptnu02= new Decimal(0);
        player.ptnu03= new Decimal(0);
        player.ptnu04= new Decimal(0);
        player.tthamnt= new Decimal(0);
        player.tthsize= new Decimal(1);
        player.tthgrow= new Decimal(0);
        player.ingrow= false,
        player.tthseed= new Decimal(0);
        player.tthgene= new Decimal(0);
        player.tthsucr= new Decimal(0);
        player.tthimpr= new Decimal(1);
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
        player.hasunlockedanm3 = false,
        player.anm3= new Decimal(0);
        player.anm3u01= new Decimal(0);
        player.anm3u02= new Decimal(0);
        player.anm3u03= new Decimal(0);
        player.anm3u04= new Decimal(0);
        player.anm3u= [false, false, false, false,];
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
}

function getPL4goal() {
    let pts = player.PL3pts.root(1048576);
    if (pts.gte(2)) player.PL4goal[0] = true;
    if (pts.gte(3)) player.PL4goal[1] = true;
    if (pts.gte(4)) player.PL4goal[2] = true;
    if (pts.gte(8)) player.PL4goal[3] = true;
    if (pts.gte(16)) player.PL4goal[4] = true;
    if (pts.gte(64)) player.PL4goal[5] = true;
    if (pts.gte(256)) player.PL4goal[6] = true;
    if (pts.gte(4096)) player.PL4goal[7] = true;
    if (pts.gte(65536)) player.PL4goal[8] = true;
    if (pts.gte(16777216)) player.PL4goal[9] = true;
}

function getfra() {
    let base = new Decimal(1);
    if (player.PL4tms.lte(1)) return (new Decimal(4));
    else return base.mul(v.fraft1).mul(v.fraft2).mul(v.fraft3).mul(v.fraft4);
}

function getfrau() {
    v.fraft1 = player.energy.max(1).log(2).root(2).div(536870912).max(2);
    v.fraft2 = player.PL4energy.max(1).log(2).root(2).div(128).max(2);
    v.fraft3 = player.PL4tms.add(4).pow(0.25).max(1);
    v.fraft4 = new Decimal(2).pow(player.frau01.mul(0.25)).max(1);
    v.frauc01 = new Decimal(2).pow(player.frau01.add(1));
    v.frauc02 = new Decimal(2).pow(player.frau02.add(1));
    for (let i = 3; i <= 8; i++) {
        let name = tiername[i];
        v["frauc" + name] = new Decimal(2).pow(player["frau" + name].add(1).pow(2));
    }
    v.fraue01 = new Decimal(2).pow(player.frau01.mul(0.25)).max(1);
    v.fraue02 = player.frau02.mul(0.02);
    v.fraue03 = new Decimal(2).pow(player.frau03).max(1);
    v.fraue04 = new Decimal(2).pow(player.frau04).max(1);
    v.fraue05 = new Decimal(2).pow(player.frau05.mul(0.5)).max(1);
    v.fraue06 = new Decimal(2).pow(player.frau06.mul(0.5)).max(1);
    v.fraue07 = new Decimal(2).pow(player.frau07.mul(0.25)).max(1);
    v.fraue08 = player.frau08.mul(2);
}

function buyfrau(tier) {
    let name = tiername[tier];
    let cap = [20, 20, 4, 4, 4, 4, 4, 4];
    if (player.PL4fra.gte(v["frauc" + name]) & player["frau" + name].lt(new Decimal(cap[tier-1]))) {
        player["frau" + name] = player["frau" + name].add(1);
        player.PL4fra = player.PL4fra.sub(v["frauc" + name]);
    }
}

function getboggle() {
    v.boxc1 = new Decimal(4).pow(player.boxa1.add(4));
    v.boxc2 = new Decimal(2).pow(player.boxa2.add(4));
    player.bogglettl = player.boxa1.add(player.boxa2);
    v.hdrn4wps = new Decimal(2).pow(player.hdrn4).mul(player.hdrn4);
    v.hdrn6wps = new Decimal(2).pow(player.hdrn6).mul(player.hdrn6);
    v.hdrn8wps = new Decimal(2).pow(player.hdrn8).mul(player.hdrn8);
    v.hdrn12wps = new Decimal(2).pow(player.hdrn12).mul(player.hdrn12);
    v.hdrn20wps = new Decimal(2).pow(player.hdrn20).mul(player.hdrn20);
    v.hdrn4e = player.hdrn4w.div(16).add(1).log(2).div(1024).add(1).min(2);
    v.hdrn6e = player.hdrn6w.div(16).add(1).log(2).div(1024).add(1).min(2);
    v.hdrn8e = player.hdrn8w.div(16).add(1).log(2).div(1024).add(1).min(2);
    v.hdrn12e = player.hdrn12w.div(16).add(1).log(2).div(1024).add(1).min(2);
    v.hdrn20e = player.hdrn20w.div(16).add(1).log(2).div(1024).add(1).min(2);
    v.wxzfe = player.wxzf.add(1).log(2).div(4).add(1).min(4);
    v.hydfe = player.hydf.add(1).log(2).div(6).add(1).min(3);
    v.xkwze = player.xkwz.add(1).log(2).mul(16).min(100);
}

function getbox1() {
    if (player.PL4pts.gte(v.boxc1)) {
        player.boxa1 = player.boxa1.add(1);
        player.bogglebox = player.bogglebox.add(1);
        player.PL4pts = player.PL4pts.sub(v.boxc1);
    }
}

function getbox2() {
    if (player.PL4fra.gte(v.boxc2)) {
        player.boxa2 = player.boxa2.add(1);
        player.bogglebox = player.bogglebox.add(1);
        player.PL4fra = player.PL4fra.sub(v.boxc2);
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
    while (player.bogglebox.gt(0)) {
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
            if (player.hdrn12.gte(2)) {
                player.hdrn12 = player.hdrn12.sub(2);
                player.xkwz = player.xkwz.add(1);
            }
            break;
    }
}

function getspd() {
    v.gamespd1 = new Decimal(2).pow(player.chacom10.add(player.ptnu04)).mul(new Decimal(1.189207115002721).pow(player.anm3u04)).mul(v.fraue05).max(1);
    if (player.tier04.gte(30)) v.gamespd1 = v.gamespd1.mul(player.tier04.sub(24).mul(0.25));
    if (player.PL4goal[0] == true) v.gamespd1 = v.gamespd1.mul(4);
    if (player.incha == 10) v.gamespd1 = new Decimal(1e-308);
}

function getsoftcap() {
    return new Decimal("e3.470639555327098e17").pow(v.fraue03);
}

function produce(spd = 1) {
    let speed = new Decimal(spd).mul(v.gamespd1).div(20);
    let speed2 = new Decimal(spd).div(20);

    player.gameseconds = player.gameseconds.plus(speed);
    player.PL1sec = player.PL1sec.plus(speed);
    player.PL2sec = player.PL2sec.plus(speed);
    player.PL3sec = player.PL3sec.plus(speed);
    player.PL4sec = player.PL4sec.plus(speed2);

    if (player.energy.lte(getsoftcap())) {
        player.energy = player.energy.add(hyp(player.wsca01.mul(v.wscm01).pow(v.wscp01), v.wsch01).mul(speed).mul(v.baseprd));
        player.energyttl = player.energyttl.add(hyp(player.wsca01.mul(v.wscm01).pow(v.wscp01), v.wsch01).mul(speed).mul(v.baseprd));
    }
    else {
        player.energy = player.energy.add(hyp(player.wsca01.mul(v.wscm01).pow(v.wscp01), v.wsch01).root(player.energy.max(2).log(2).div(getsoftcap().log(2))).mul(speed).mul(v.baseprd));
        player.energyttl = player.energyttl.add(hyp(player.wsca01.mul(v.wscm01).pow(v.wscp01), v.wsch01).root(player.energy.max(2).log(2).div(getsoftcap().log(2))).mul(speed).mul(v.baseprd));
    }
    if(player.incha != 12) for (let tier = 2; tier <= 8; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(hyp(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]), v["wsch" + name]).mul(speed).mul(v.baseprd));
    }
    if (player.PL1upg[12] == true) { player.wsca08 = player.wsca08.add(hyp(player.wsca09.mul(v.wscm09).pow(v.wscp09), v.wsch09).pow(v.PL1engpow.pow(v.cpper).max(1)).mul(speed).mul(v.baseprd)); }
    if (player.std[18] == true & player.incha != 8 & player.incha != 9 & player.PL1pts.lte(player.energy.root(1024).floor())) {
        player.PL1pts = player.PL1pts.add(player.energy.root(1024).floor().mul(speed));
        player.PL1ptsttl = player.PL1ptsttl.add(player.energy.root(1024).floor().mul(speed));
    }
    if (player.alcu[1] == true) player.PL1tms = player.PL1tms.add(new Decimal(2).pow(player.PL1bab11).mul(v.wscbaseValue.max(1).log(2)).mul(speed));

    player.PL1energy = player.PL1energy.add(player.wsca09.mul(v.wscm09).pow(v.wscp09).mul(speed).mul(v.baseprd));
    if (player.incha != 12) for (let tier = 10; tier <= 16; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(hyp(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]), v["wsch" + name]).mul(speed).mul(v.baseprd));
    }
    if (player.std[7] == true & player.incha != 8 & player.incha != 9) player.wsca16 = player.wsca16.add(hyp(player.wsca17.mul(v.wscm17).pow(v.wscp17), v.wsch17).pow(v.PL2engpow.pow(v.cpper).max(1)).mul(speed).mul(v.baseprd));
    if (player.tthpu[1] == true & player.PL2pts.lte(player.PL1pts.root(1024).floor())) {
        player.PL2pts = player.PL2pts.add(player.PL1pts.root(1024).floor().mul(speed));
        player.PL2ptsttl = player.PL2ptsttl.add(player.PL1pts.root(1024).floor().mul(speed));
    }
    if (player.xyzbo.gte(2)) player.PL2tms = player.PL2tms.add(new Decimal(2).pow(player.PL2upg02).max(1).mul(player.PL1tms.max(1).log(2).max(1)).mul(v.PL3tef1.max(1)).mul(speed));

    player.PL2energy = player.PL2energy.add(player.wsca17.mul(v.wscm17).pow(v.wscp17).mul(speed).mul(v.baseprd));
    if (player.incha != 12) for (let tier = 18; tier <= 24; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(hyp(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]), v["wsch" + name]).mul(speed).mul(v.baseprd));
    }
    if (player.tthpu[0] == true) player.wsca24 = player.wsca24.add(hyp(player.wsca25.mul(v.wscm25).pow(v.wscp25), v.wsch25).pow(v.PL3engpow.pow(v.cpper).max(1)).mul(speed).mul(v.baseprd));

    player.PL3energy = player.PL3energy.add(player.wsca25.mul(v.wscm25).pow(v.wscp25).mul(speed).mul(v.baseprd));
    if (player.incha != 12) for (let tier = 26; tier <= 32; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(hyp(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]), v["wsch" + name]).mul(speed).mul(v.baseprd));
    }

    player.PL4energy = player.PL4energy.add(player.wsca33.mul(v.wscm33).pow(v.wscp33).mul(speed2));
    for (let tier = 34; tier <= 40; tier++) {
        let name = tiername[tier];
        let prev = tiername[tier - 1];
        player["wsca" + prev] = player["wsca" + prev].add(hyp(player["wsca" + name].mul(v["wscm" + name]).pow(v["wscp" + name]), v["wsch" + name]).mul(speed2).mul(v.baseprd));
    }

    if (player.hasunlockedanmorb == true) {
        v.anmparsc = new Decimal(2).pow(player.anmorbttl).mul(80).max(80);
        v.anmparps = new Decimal(0.01).mul(new Decimal(1.2).pow(player.wscb08.sub(50)).max(1)).mul(new Decimal(2).pow(player.parupg01).mul(new Decimal(2).pow(player.chacom04)))
        if (player.tier01.gte(200)) v.anmparps = v.anmparps.mul(player.tier01.max(200));
        if (player.tier01.gte(630)) v.anmparps = v.anmparps.mul(new Decimal(1.2).pow(player.wscb16).max(1));
        if (player.hasunlockedanm2 == true) v.anmparps = v.anmparps.pow(player.anm2.add(1).log(2).add(1).log(2).max(1).pow(player.anm2u03.div(64).add(0.0625)));
        if (player.ptn[5] == true) v.anmparps = v.anmparps.mul(v.ptnm06);
        if (player.anmpar.gte(v.anmparsc)) {
            let scpw = new Decimal(1);
            if (player.tier03.gte(8)) scpw = scpw.mul(0.8);
            if (player.anm2sc.gte(4294967296)) scpw = scpw.mul(0.8);
            else v.anmparps = v.anmparps.div(player.anmpar.div(v.anmparsc.pow(scpw)));
        }
        player.anmpar = player.anmpar.add(v.anmparps.mul(speed));
    }
    if (player.hasunlockedanm2 == true & player.infytx == false & player.incha != 9) {
        v.anm2ps = player.anm2sc.div(16777216).pow(4).mul(new Decimal(4).pow(player.chacom08)).mul(new Decimal(2).pow(player.anm2u01));
        if (player.tier01.gte(1995)) v.anm2ps = v.anm2ps.mul(new Decimal(1.01).pow(player.wscb16.add(player.wscb24)));
        if (player.ptn[6] == true) v.anm2ps = v.anm2ps.mul(v.ptnm07);
        if (player.hasunlockedanm3 == true) v.anm2ps = v.anm2ps.pow(player.anm3.add(1).log(2).add(1).log(2).max(1).pow(player.anm3u03.div(64).add(0.0625)));
        player.anm2 = player.anm2.add(v.anm2ps.mul(speed));
    }
    if (player.hasunlockedanm3 == true) {
        v.anm3ps = v.blcnt.sub(0.5).max(0).mul(0.01)
        v.anm3ps = v.anm3ps.mul(new Decimal(2).pow(player.anm3u01.add(player.chacom12.mul(3))));
        if (player.ptn[7] == true & player.anm3u[0] == true) v.anm3ps = v.anm3ps.mul(v.ptnm08);
        player.anm3 = player.anm3.add(v.anm3ps.mul(speed));
    }

    player.elmten01 = player.elmten01.add(v.elmtps01.mul(speed));
    player.elmten02 = player.elmten02.add(v.elmtps02.mul(speed));
    player.elmten03 = player.elmten03.add(v.elmtps03.mul(speed));
    player.elmten04 = player.elmten04.add(v.elmtps04.mul(speed));

    player.tthseed = player.tthseed.add(v.tthseedpd.mul(player.tthpu1.pow(2)).div(100).mul(speed));
    player.tthgene = player.tthgene.add(v.tthgenepd.mul(player.tthpu2.pow(2)).div(100).mul(speed));
    player.tthsucr = player.tthsucr.add(v.tthsucrpd.mul(player.tthpu3.pow(2)).div(100).mul(speed));

    if (player.xyzu[0] == true) player.xyzx = player.xyzx.add(player.xyzy.max(1).mul(player.xyzz.max(1)).mul(player.xyzt.max(1)).pow(player.xyzt.add(1).log(2).pow(player.xyze.add(1).log(2)).max(1)).mul(speed));
    if (player.xyzu[1] == true) player.xyzy = player.xyzy.add(player.xyzx.max(1).mul(player.xyzz.max(1)).mul(player.xyzt.max(1)).pow(player.xyzt.add(1).log(2).pow(player.xyze.add(1).log(2)).max(1)).mul(speed));
    if (player.xyzu[2] == true) player.xyzz = player.xyzz.add(player.xyzx.max(1).mul(player.xyzy.max(1)).mul(player.xyzt.max(1)).pow(player.xyzt.add(1).log(2).pow(player.xyze.add(1).log(2)).max(1)).mul(speed));
    if (player.xyzu[3] == true) player.xyzt = player.xyzt.add(player.xyzx.max(1).mul(player.xyzy.max(1)).mul(player.xyzz.max(1)).pow(player.xyzt.add(1).log(2).pow(player.xyze.add(1).log(2)).max(1)).mul(speed));
    player.xyze = player.xyze.add(player.xyzegn.mul(player.xyzf.max(1)).mul(player.xyzg.max(1)).mul(player.xyzh.max(1)).mul(speed));
    player.xyzf = player.xyzf.add(player.xyzfgn.mul(player.xyzg.max(1)).mul(player.xyzh.max(1)).mul(speed));
    player.xyzg = player.xyzg.add(player.xyzggn.mul(player.xyzh.max(1)).mul(speed));
    player.xyzh = player.xyzh.add(player.xyzhgn.mul(player.xyze.max(1)).mul(speed));

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

    if (player.incha == 5 | player.incha == 9) {
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

function fixEternity() {
    if (player.energy.gte("e5.411595565927717e307")) {
        document.getElementById("fixete").style.display = 'block';
    }
    else document.getElementById("fixete").style.display = 'none';
}

function fszqw() {
    if (player.energy.lt("ee300")) alert("资源不足，无法升级！");
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
    return x.min(hyp(x.mul(256), 0.5).mul(16));
}

function hyp(a, b) {
    if (a.lte(2)) return a;
    else return new Decimal(2).pow(new Decimal(2).pow(a.max(1).log(2).max(1).log(2).mul(b)));
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
    var string = "";
    if (amount.sign == -1) {
        string = string + "-";
        amount.sign = 1;
    }
    if (amount.lt("ee6")) {
        let power = Decimal.floor(Decimal.log10(amount));
        let mantissa = amount.div(Decimal.pow(10, power));
        if (amount == 0) string = "0";
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

var gui_mod = 1;
function updateGUI() {
    document.getElementById("energy").innerHTML = notation(player.energy);
    document.getElementById("energyPs").innerHTML = notation(player.wsca01.mul(v.wscm01).pow(v.wscp01).mul(0.25));
    document.getElementById("softcapt").innerHTML = notation(getsoftcap());
    document.getElementById("softcapx").innerHTML = notation(player.energy.max(2).log(2).div(getsoftcap().log(2)));
    document.getElementById("speed1").innerHTML = notation(v.gamespd1);

    document.getElementById("wscinfo").innerHTML = "基础风灵产量：" + notation(v.baseprd) + "/s  每次作成乘数：" + notation(v.wscmpb);
    for (let tier = 1; tier <= 40; tier++) { 
        var name = tiername[tier];
        document.getElementById("wscb" + name).innerHTML = notatint(player["wscb" + name]);
        document.getElementById("wscc" + name).innerHTML = notation(v["wscc" + name]);
        document.getElementById("wscd" + name).innerHTML = "+" + notation(player["wsca" + name]).padEnd(15, '_') + "×" + notation(v["wscm" + name]).padEnd(15, '_') + "^" + notation(v["wscp" + name]).padEnd(15, '_') + "¶" + notation(v["wsch" + name]).padEnd(15, '_');
        if (player["wscb" + name].gte(new Decimal(1125899906842624).div(v["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "九阶折算|";
        else if (player["wscb" + name].gte(new Decimal(35184372088832).div(v["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "八阶折算|";
        else if (player["wscb" + name].gte(new Decimal(1099511627776).div(v["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "七阶折算|";
        else if (player["wscb" + name].gte(new Decimal(34359738368).div(v["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "六阶折算|";
        else if (player["wscb" + name].gte(new Decimal(1073741824).div(v["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "五阶折算|";
        else if (player["wscb" + name].gte(new Decimal(33554432).div(v["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "四阶折算|";
        else if (player["wscb" + name].gte(new Decimal(1048576).div(v["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "三阶折算|";
        else if (player["wscb" + name].gte(new Decimal(32768).div(v["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "二阶折算|";
        else if (player["wscb" + name].gte(new Decimal(1024).div(v["wsccsl" + name]))) document.getElementById("wscs" + name).innerHTML = "一阶折算|";
        else document.getElementById("wscs" + name).innerHTML = "";
        if (player.autobuywsc[tier] == true) document.getElementById("byat" + name).innerHTML = "自动：开";
        else document.getElementById("byat" + name).innerHTML = "自动：关";
    }
    document.getElementById("wscbv").innerHTML = "你的风灵基础值为(" + notation(v.wscbaseValue1) + "+" + notatint(v.wscbaseValue2) + "×4" + "+" + notatint(v.wscbaseValue3) + "×16" + "+" + notatint(v.wscbaseValue4) + "×64" + "+" + notatint(v.wscbaseValue5) + "×256)^" + notation(v.wscbaseValueExp) + "=" + notation(v.wscbaseValue) + "（基于你作成的风灵总数而定）";
    document.getElementById("tier01").innerHTML = notatint(player.tier01) + "式风单元";
    document.getElementById("tier01rewa01").innerHTML = "1式风单元：基于风单元式数提升1~8式风灵乘数(1+n)²。当前：×" + notation(player.tier01.add(1).pow(2));
    document.getElementById("tier01rewa02").innerHTML = "2式风单元：基于风灵基础值提升1~8式风灵乘数max(1,n/64)。当前：×" + notation(v.wscbaseValue.div(64).max(1));
    document.getElementById("tier01rewa03").innerHTML = "5式风单元：基于风模块式数提升1~8式风灵乘数(1+n)³。当前：×" + notation(player.tier02.add(1).pow(3));
    document.getElementById("tier01rewa04").innerHTML = "10式风单元：基于能量提升1~8式风灵乘数max(1,log2(n+1)^0.2)。当前：×" + notation(player.energy.add(1).log(2).pow(0.2).max(1));
    document.getElementById("tier01rewa05").innerHTML = "25式风单元：每个风单元使1~8式风灵乘数×2。当前：×" + notation(new Decimal(2).mul(new Decimal(2).pow(player.PL1bab01.add(player.PL1bab02).add(player.PL1bab03))).pow(player.tier01).pow(player.tier03.sub(44).mul(0.2).max(1)).pow(player.tthsize.max(1).pow(5)));
    document.getElementById("tier01rewa06").innerHTML = "63式风单元：使1和5式风单元奖励也对9~16式风灵生效。";
    document.getElementById("tier01rewa07").innerHTML = "200式风单元：基于风单元式数提升风之微粒获取。当前：×" + notation(player.tier01);
    document.getElementById("tier01rewa08").innerHTML = "630式风单元：每作成一次16式风灵使风之微粒产量×1.2。当前：×" + notation(new Decimal(1.2).pow(player.wscb16));
    document.getElementById("tier01rewa09").innerHTML = "1995式风单元：每作成一次16和24式风灵使风之徯粓产量×1.01。当前：×" + notation(new Decimal(1.01).pow(player.wscb16.add(player.wscb24)));
    document.getElementById("tier01rewa10").innerHTML = "6308式风单元：基于甜甜花倍数提高25式风单元的效果。当前：^" + notation(player.tthsize.sub(10).max(1).pow(6));

    document.getElementById("tier02").innerHTML = notatint(player.tier02) + "式风模块";
    document.getElementById("tier02rewa01").innerHTML = "1式风模块：基于风模块式数提升风灵每次作成乘数(+0.05×n^0.25)，并解锁第一个升级。当前：+" + notation(player.tier02.pow(0.25).mul(0.05));
    document.getElementById("tier02rewa02").innerHTML = "2式风模块：解锁第二个升级。";
    document.getElementById("tier02rewa03").innerHTML = "5式风模块：基于风单元式数提升风灵每次作成乘数(+0.05×n^0.25)。当前：+" + notation(player.tier01.pow(0.25).mul(0.05));
    document.getElementById("tier02rewa04").innerHTML = "12式风模块：每个风模块将风灵每次作成乘数×1.011，并解锁第三个升级。当前：×" + notation(new Decimal(1.010889286051700).pow(player.PL1bab04.add(player.PL1bab05).add(player.PL1bab06).mul(0.2).add(1)).pow(player.tier02));
    document.getElementById("tier02rewa05").innerHTML = "30式风模块：解锁第四个升级。"
    document.getElementById("tier02rewa06").innerHTML = "75式风模块：使每次作成乘数的指数乘以：1~8式风灵为4，9~16式风灵为2"
    document.getElementById("tier02rewa07").innerHTML = "237式风模块：使风灵升级1和3的效果指数增加0.5";
    document.getElementById("tier02rewa08").innerHTML = "750式风模块：分别使1~8、9~16、17~24、25~32式风灵每次作成乘数的指数变为256、64、16、4";

    document.getElementById("tier03").innerHTML = notatint(player.tier03) + "式风系统";
    document.getElementById("tier03rewa01").innerHTML = "1式风系统：基于升级总和提升17~24式风灵乘数。当前：×" + notation(new Decimal(1.189207115002721).pow(player.upgd01.add(player.upgd02).add(player.upgd03).add(player.upgd04)));
    document.getElementById("tier03rewa02").innerHTML = "3式风系统：基于风系统提升1~16式风灵的指数。当前：+" + notation(player.tier03.min(player.tier03.pow(0.5).mul(8)).mul(0.001));
    document.getElementById("tier03rewa03").innerHTML = "8式风系统：使风之微粒的软上限弱化20%";
    document.getElementById("tier03rewa04").innerHTML = "20式风系统：使元素能量生产乘以log2(能量)。当前：×" + notation(player.energy.max(2).log(2));
    document.getElementById("tier03rewa05").innerHTML = "50式风系统：基于风系统使25式风单元效果提升。当前：^" + notation(player.tier03.sub(44).mul(0.2).max(1));
    document.getElementById("tier03rewa06").innerHTML = "126式风系统：使3式风系统也对25~32式风灵生效，但效果倍率降低"

    document.getElementById("tier04").innerHTML = notatint(player.tier04) + "式风四倍系统";
    document.getElementById("tier04rewa01").innerHTML = "1式风四倍系统：基于风四倍系统提升进阶挑战1~4上限（最多提升12）。当前：+" + notation(player.tier04.min(12));
    document.getElementById("tier04rewa02").innerHTML = "3式风四倍系统：使3式风系统也对17~24式风灵生效。";
    document.getElementById("tier04rewa03").innerHTML = "10式风四倍系统：基于风四倍系统提升元素能量产量。当前：×" + notation(new Decimal(2).pow(player.tier04));
    document.getElementById("tier04rewa04").innerHTML = "30式风四倍系统：基于风四倍系统提升一阶游戏速度。当前：×" + notation(player.tier04.sub(24).mul(0.25));

    document.getElementById("tier01cost").innerHTML = "需要：" + notation(v.tierc01) + "风灵基础值";
    document.getElementById("tier02cost").innerHTML = "需要：" + notation(v.tierc02) + "式风单元";
    document.getElementById("tier03cost").innerHTML = "需要：" + notation(v.tierc03) + "式风模块";
    document.getElementById("tier04cost").innerHTML = "需要：" + notation(v.tierc04) + "式风系统";
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

    document.getElementById("upgd01").innerHTML = notatint(player.upgd01);
    document.getElementById("upgd02").innerHTML = notatint(player.upgd02);
    document.getElementById("upgd03").innerHTML = notatint(player.upgd03);
    document.getElementById("upgd04").innerHTML = notatint(player.upgd04);
    document.getElementById("upgc01").innerHTML = "花费：" + notation(v.upgc01) + "能量";
    document.getElementById("upgc02").innerHTML = "花费：" + notation(v.upgc02) + "能量";
    document.getElementById("upgc03").innerHTML = "花费：" + notation(v.upgc03) + "能量";
    document.getElementById("upgc04").innerHTML = "花费：" + notation(v.upgc04) + "能量";
    document.getElementById("upge01").innerHTML = "当前：+" + notation(v.upge01);
    document.getElementById("upge02").innerHTML = "当前：×" + notation(v.upge02);
    document.getElementById("upge03").innerHTML = "当前：+" + notation(v.upge03) + "倍";
    document.getElementById("upge04").innerHTML = "当前：×" + notation(v.upge04) + "次方";
    document.getElementById("upgm01").innerHTML = notation(v.upgd01mult) ;
    document.getElementById("upgm02").innerHTML = notation(v.upgd02mult) ;
    if (player.autobuyupgd01 == true) document.getElementById("byatupgd01").innerHTML = "自动：开";
    else document.getElementById("byatupgd01").innerHTML = "自动：关";
    if (player.autobuyupgd02 == true) document.getElementById("byatupgd02").innerHTML = "自动：开";
    else document.getElementById("byatupgd02").innerHTML = "自动：关";
    if (player.autobuyupgd03 == true) document.getElementById("byatupgd03").innerHTML = "自动：开";
    else document.getElementById("byatupgd03").innerHTML = "自动：关";
    if (player.autobuyupgd04 == true) document.getElementById("byatupgd04").innerHTML = "自动：开";
    else document.getElementById("byatupgd04").innerHTML = "自动：关";
    if (v.upge02.gte(256)) document.getElementById("upgd02sc").innerHTML = "(受软上限限制)";
    else document.getElementById("upgd02sc").innerHTML = "";
    if (player.upgd04.add(v.upgf04).gte(16)) document.getElementById("upgd04sc").innerHTML = "(受软上限限制)";
    else document.getElementById("upgd04sc").innerHTML = "";

    document.getElementById("PL1ptspd").innerHTML = notation(player.energy.root(1024).floor()) + "扩散点";
    document.getElementById("PL1ptsnx").innerHTML = "，下一扩散点在" + notation(player.energy.root(1024).floor().add(1).pow(1024)) + "能量";
    document.getElementById("PL2ptspd").innerHTML = notation(player.PL1pts.root(1024).floor()) + "扪敤点";
    document.getElementById("PL2ptsnx").innerHTML = "，下一扪敤点在" + notation(player.PL1pts.root(1024).floor().add(1).pow(1024)) + "扩散点";
    document.getElementById("PL3ptspd").innerHTML = notation(player.PL2pts.root(1048576).floor()) + "扫敥点";
    document.getElementById("PL3ptsnx").innerHTML = "，下一扫敥点在" + notation(player.PL2pts.root(1048576).floor().add(1).pow(1048576)) + "扪敤点";
    document.getElementById("PL4ptspd").innerHTML = notation(player.PL3pts.root(1048576).floor()) + "扬敦点";
    document.getElementById("PL4ptsnx").innerHTML = "，下一扬敦点在" + notation(player.PL3pts.root(1048576).floor().add(1).pow(1048576)) + "扫敥点";

    document.getElementById("PL1Pts").innerHTML = notation(player.PL1pts);
    document.getElementById("PL1Eng").innerHTML = notation(player.PL1energy);
    document.getElementById("PL1EngPow").innerHTML = notation(v.PL1engpow);
    document.getElementById("PL1EngMul").innerHTML = notation(v.PL1engmul);
    document.getElementById("PL1EngPs").innerHTML = notation(player.wsca09.mul(v.wscm09).pow(v.wscp09).mul(new Decimal(0.25)));

    document.getElementById("PL1upge05").innerHTML = notation(player.PL1energy.add(1).log(2).max(1).pow(player.chacom02.mul(0.5).add(2)));
    document.getElementById("PL1upge06").innerHTML = notation(player.PL1ptsttl.min(player.PL1ptsttl.add(1).log(1.189207115002721).pow(4).mul(4294967296)).max(1));
    document.getElementById("PL1upge07").innerHTML = notation(player.PL1tms.pow(4).min(player.PL1tms.pow(0.25).mul(1.152921505e18)).max(1));
    document.getElementById("PL1upge08").innerHTML = notation(player.energy.add(1).log(2).max(1).pow(player.chacom02.mul(0.5).add(2)));

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

    document.getElementById("PL1babc1").innerHTML = notation(v.PL1babc1);
    document.getElementById("PL1babc2").innerHTML = notation(v.PL1babc2);
    document.getElementById("PL1babc3").innerHTML = notation(v.PL1babc3);
    document.getElementById("PL1babc4").innerHTML = notation(v.PL1babc1);
    document.getElementById("PL1babc5").innerHTML = notation(v.PL1babc2);
    document.getElementById("PL1babc6").innerHTML = notation(v.PL1babc3);
    document.getElementById("PL1babc7").innerHTML = notation(v.PL1babc1);
    document.getElementById("PL1babc8").innerHTML = notation(v.PL1babc2);
    document.getElementById("PL1babc9").innerHTML = notation(v.PL1babc3);
    document.getElementById("PL1babc10").innerHTML = notation(v.PL1babc4);
    document.getElementById("PL1babc11").innerHTML = notation(v.PL1babc5);
    document.getElementById("PL1babc12").innerHTML = notation(v.PL1babc6);

    document.getElementById("anmpar").innerHTML = notation(player.anmpar);
    document.getElementById("anmparps").innerHTML = notation(v.anmparps);
    document.getElementById("anmparsc").innerHTML = notation(v.anmparsc);
    if (player.std[0] == true) document.getElementById("anmparexp").innerHTML = "log2(log2(x+1)+1)^" + notation(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4)));
    else document.getElementById("anmparexp").innerHTML = "log2(x+1)^" + notation(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4)));
    if (player.std[0] == true) document.getElementById("anmpareffe").innerHTML = "^" + notation(player.anmpar.add(1).log(2).add(1).log(2).pow(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4))).max(1));
    else document.getElementById("anmpareffe").innerHTML = "×" + notation(player.anmpar.add(1).log(2).pow(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4))).max(1));
    document.getElementById("anmorba").innerHTML = notation(player.anmorb);
    document.getElementById("anmorbttl").innerHTML = notation(player.anmorbttl);

    document.getElementById("parupg01").innerHTML = notatint(player.parupg01);
    document.getElementById("parupg02").innerHTML = notatint(player.parupg02);
    document.getElementById("parupg03").innerHTML = notatint(player.parupg03);
    document.getElementById("parupg04").innerHTML = notatint(player.parupg04);
    document.getElementById("parupge01").innerHTML = notation(new Decimal(2).pow(player.parupg01));
    document.getElementById("parupge02").innerHTML = notation(player.anmpar.pow(player.parupg02.mul(0.25)).max(1));
    document.getElementById("parupge03").innerHTML = notation(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4)).sub(0.0625));
    document.getElementById("parupge04").innerHTML = notation(player.parupg04);
    document.getElementById("parupgc01").innerHTML = notation(v.parupgc01);
    document.getElementById("parupgc02").innerHTML = notation(v.parupgc02);
    document.getElementById("parupgc03").innerHTML = notation(v.parupgc03);
    document.getElementById("parupgc04").innerHTML = notation(v.parupgc04);

    document.getElementById("orbupge01").innerHTML = notation(player.PL1energy.add(1).log(2).pow(16));
    document.getElementById("orbupge02").innerHTML = notation(player.energy.add(1).log(2).pow(16));
    document.getElementById("orbupge03").innerHTML = notation(player.PL1energy.add(1).log(2).pow(4));
    document.getElementById("orbupge04").innerHTML = notation(player.energy.add(1).log(2).pow(4));
    document.getElementById("orbupge05").innerHTML = notation(hyp(player.PL1energy, 0.9));
    document.getElementById("orbupge06").innerHTML = notation(hyp(player.energy, 0.75));
    document.getElementById("orbupge07").innerHTML = notation(hyp(player.PL1energy, 0.75));
    document.getElementById("orbupge08").innerHTML = notation(hyp(player.energy, 0.625));

    document.getElementById("ncc").innerHTML = notatint(v.baseprd.sub(0.25).div(0.0625));
    document.getElementById("bpa").innerHTML = notation(v.baseprd.sub(0.25));
    for (let i = 1; i <= 12; i++) {
        let name = tiername[i];
        document.getElementById("chal" + name + "goal").innerHTML = notation(v["chagoa" + name]);
        document.getElementById("chal" + name + "comp").innerHTML = notatint(player["chacom" + name]);
        if (i <= 4) document.getElementById("chal" + name + "cap").innerHTML = notatint(v.PL1chacap);
        else if (i <= 8) document.getElementById("chal" + name + "cap").innerHTML = notatint(v.PL2chacap);
        else if (i <= 12) document.getElementById("chal" + name + "cap").innerHTML = notatint(v.PL3chacap);
    }
    document.getElementById("chal01effe").innerHTML = notation(player.chacom01.min(player.chacom01.pow(0.5).mul(2)).mul(0.25));
    document.getElementById("chal02effe").innerHTML = notation(player.chacom02.mul(1));
    document.getElementById("chal03effe").innerHTML = notation(player.chacom03.min(player.chacom03.mul(4).root(2)).min(player.chacom03.mul(256).root(4)).mul(0.01));
    document.getElementById("chal04effe").innerHTML = notation(new Decimal(2).pow(player.chacom04));
    document.getElementById("chal05effe").innerHTML = notation(player.chacom05.min(player.chacom05.pow(0.5).mul(2)).mul(0.25));
    document.getElementById("chal06effe").innerHTML = notation(player.chacom06.min(player.chacom06.mul(64).root(4)).mul(0.01));
    document.getElementById("chal07effe").innerHTML = notation(new Decimal(4).pow(player.chacom07.min(player.chacom07.pow(0.25).mul(2.8284)).div(4)));
    document.getElementById("chal08effe").innerHTML = notation(new Decimal(4).pow(player.chacom08));
    document.getElementById("chal09effe").innerHTML = notation(player.chacom09.min(player.chacom09.pow(0.5).mul(2)).mul(0.25));
    document.getElementById("chal10effe").innerHTML = notation(new Decimal(2).pow(player.chacom10));
    document.getElementById("chal11effe").innerHTML = notation(new Decimal(2).pow(player.chacom11));
    document.getElementById("chal12effe").innerHTML = notation(new Decimal(8).pow(player.chacom12));

    document.getElementById("PL2Pts").innerHTML = notation(player.PL2pts);
    document.getElementById("PL2Eng").innerHTML = notation(player.PL2energy);
    document.getElementById("PL2EngPow").innerHTML = notation(v.PL2engpow);
    document.getElementById("PL2EngMul").innerHTML = notation(v.PL2engmul);
    document.getElementById("PL2EngPs").innerHTML = notation(player.wsca17.mul(v.wscm17).pow(v.wscp17).mul(new Decimal(0.25)));

    document.getElementById("PL2tms2").innerHTML = "总计扪敤次数：" + notatint(player.PL2tms) + "次";
    document.getElementById("PL2tmc").innerHTML = notatint(player.PL2tmsc);
    document.getElementById("PL2tm01b").innerHTML = notatint(player.PL2upg01);
    document.getElementById("PL2tm02b").innerHTML = notatint(player.PL2upg02);
    document.getElementById("PL2tm03b").innerHTML = notatint(player.PL2upg03);
    document.getElementById("PL2tm04b").innerHTML = notatint(player.PL2upg04);
    document.getElementById("PL2tm01c").innerHTML = notatint(v.PL2upgc01);
    document.getElementById("PL2tm02c").innerHTML = notatint(v.PL2upgc02);
    document.getElementById("PL2tm03c").innerHTML = notatint(v.PL2upgc03);
    document.getElementById("PL2tm04c").innerHTML = notatint(v.PL2upgc04);

    document.getElementById("anemo").innerHTML = notatint(player.elmt);
    if (player.PL2ptsttl.lte(1.844674407370955e19)) document.getElementById("anemon").innerHTML = notatint(new Decimal(2).pow(player.elmttl.add(1)));
    else document.getElementById("anemon").innerHTML = notatint(new Decimal(2).pow(new Decimal(2).pow(player.elmttl.add(32).add(1).div(16))));
    document.getElementById("anemot").innerHTML = notatint(player.elmttl);
    document.getElementById("elmmpd").innerHTML = notation(v.elmmpd);

    document.getElementById("pyroa").innerHTML = notatint(player.elmt01);
    document.getElementById("hydroa").innerHTML = notatint(player.elmt02);
    document.getElementById("electroa").innerHTML = notatint(player.elmt03);
    document.getElementById("cryoa").innerHTML = notatint(player.elmt04);
    document.getElementById("pyroe").innerHTML = notation(player.elmten01);
    document.getElementById("hydroe").innerHTML = notation(player.elmten02);
    document.getElementById("electroe").innerHTML = notation(player.elmten03);
    document.getElementById("cryoe").innerHTML = notation(player.elmten04);
    document.getElementById("pyrop").innerHTML = notation(v.elmtps01);
    document.getElementById("hydrop").innerHTML = notation(v.elmtps02);
    document.getElementById("electrop").innerHTML = notation(v.elmtps03);
    document.getElementById("cryop").innerHTML = notation(v.elmtps04);
    document.getElementById("pyrou").innerHTML = notatint(v.upgf01);
    document.getElementById("hydrou").innerHTML = notatint(v.upgf02);
    document.getElementById("electrou").innerHTML = notatint(v.upgf03);
    document.getElementById("cryou").innerHTML = notatint(v.upgf04);
    document.getElementById("pyrou1").innerHTML = notatint(v.upgf01);
    document.getElementById("hydrou1").innerHTML = notatint(v.upgf02);
    document.getElementById("electrou1").innerHTML = notatint(v.upgf03);
    document.getElementById("cryou1").innerHTML = notatint(v.upgf04);
    document.getElementById("pyron").innerHTML = notatint(new Decimal(2).pow(v.upgf01.add(1)));
    document.getElementById("hydron").innerHTML = notatint(new Decimal(4).pow(v.upgf02.add(1)));
    document.getElementById("electron").innerHTML = notatint(new Decimal(16).pow(v.upgf03.add(1)));
    document.getElementById("cryon").innerHTML = notatint(new Decimal(256).pow(v.upgf04.add(1)));

    document.getElementById("thrm").innerHTML = notatint(player.thrm);
    document.getElementById("thrmttl").innerHTML = notatint(player.thrmttl);
    document.getElementById("thrmc01").innerHTML = notatint(v.thrmc01);
    document.getElementById("thrmc02").innerHTML = notatint(v.thrmc02);
    document.getElementById("thrmc03").innerHTML = notatint(v.thrmc03);
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
    document.getElementById("alchmu").innerHTML = notation(v.alchmu);
    document.getElementById("alcost").innerHTML = notatint(v.alcost);
    for (i = 1; i <= 6; i++) {
        let name = tiername[i];
        document.getElementById("alca" + name).innerHTML = notation(player["alch" + name]);
    }
    for (i = 1; i <= 6; i++) {
        let name = tiername[i];
        document.getElementById("alcu" + name).innerHTML = notatint(player["alcu" + name]);
        document.getElementById("alcc" + name).innerHTML = notation(v["alcuc" + name]);
    }

    if (player.infytx == true) document.getElementById("anm2st").innerHTML = "（你当前在风压坍陷中）";
    else document.getElementById("anm2st").innerHTML = "";
    document.getElementById("anm2am").innerHTML = notation(player.anm2);
    document.getElementById("anm2ps").innerHTML = notation(v.anm2ps);
    document.getElementById("anm2re").innerHTML = notation(new Decimal(2).pow(player.anm2sc));
    document.getElementById("anm2exp").innerHTML = notation(player.anm2u03.div(64).add(0.0625));
    document.getElementById("anm2effe").innerHTML = notation(player.anm2.add(1).log(2).add(1).log(2).max(1).pow(player.anm2u03.div(64).add(0.0625)));
    document.getElementById("anm2upg01").innerHTML = notatint(player.anm2u01);
    document.getElementById("anm2upg02").innerHTML = notatint(player.anm2u02);
    document.getElementById("anm2upg03").innerHTML = notatint(player.anm2u03);
    document.getElementById("anm2upg04").innerHTML = notatint(player.anm2u04);
    document.getElementById("anm2upge01").innerHTML = notation(new Decimal(2).pow(player.anm2u01));
    document.getElementById("anm2upge02").innerHTML = notation(player.anm2.pow(player.anm2u02.mul(4)).max(1));
    document.getElementById("anm2upge03").innerHTML = notation(player.anm2u03.div(64));
    document.getElementById("anm2upge04").innerHTML = notation(player.anm2u04.pow(0.6667).min(player.anm2u04.pow(0.3333).mul(2)).mul(0.01));
    document.getElementById("anm2upgc01").innerHTML = notation(v.anm2c01);
    document.getElementById("anm2upgc02").innerHTML = notation(v.anm2c02);
    document.getElementById("anm2upgc03").innerHTML = notation(v.anm2c03);
    document.getElementById("anm2upgc04").innerHTML = notation(v.anm2c04);

    document.getElementById("PL3Pts").innerHTML = notation(player.PL3pts);
    document.getElementById("PL3Eng").innerHTML = notation(player.PL3energy);
    document.getElementById("PL3EngPow").innerHTML = notation(v.PL3engpow);
    document.getElementById("PL3EngMul").innerHTML = notation(v.PL3engmul);
    document.getElementById("PL3EngPs").innerHTML = notation(player.wsca25.mul(v.wscm25).pow(v.wscp25).mul(new Decimal(0.25)));

    document.getElementById("PL3tms2").innerHTML = notatint(player.PL3tms);
    document.getElementById("PL3tef1").innerHTML = notatint(v.PL3tef1);
    document.getElementById("PL3tef2").innerHTML = notation(v.PL3tef2);
    document.getElementById("resped").innerHTML = notation(v.resped);
    for (i = 1; i <= 16; i++) {
        let name = tiername[i];
        document.getElementById("resp" + name).innerHTML = notation(player["resp" + name]);
        document.getElementById("resr" + name).innerHTML = notation(v["resr" + name]);
        document.getElementById("resa" + name).innerHTML = notatint(player["resa" + name]);
    }
    document.getElementById("rese01").innerHTML = notation(v.rese01);
    document.getElementById("rese02").innerHTML = notation(v.rese02);
    document.getElementById("rese03").innerHTML = notation(v.rese03);
    document.getElementById("rese04").innerHTML = notation(v.rese04);
    document.getElementById("resmbe").innerHTML = notation(player.energy.max(1).log(2).div(1e12).pow(4).max(1).min(1e6));

    for (i = 1; i <= 8; i++) {
        let name = tiername[i];
        document.getElementById("ptnm" + name).innerHTML = notation(v["ptnm" + name]);
    }

    document.getElementById("ptnmax").innerHTML = notatint(player.ptnu01);
    document.getElementById("ptnval").innerHTML = notation(v.ptnv);
    document.getElementById("ptnmul").innerHTML = notatint(new Decimal(2).pow(player.ptnu02));
    document.getElementById("ptnuc01").innerHTML = notation(v.ptnuc01);
    document.getElementById("ptnuc02").innerHTML = notation(v.ptnuc02);
    document.getElementById("ptnuc03").innerHTML = notation(v.ptnuc03);
    document.getElementById("ptnuc04").innerHTML = notation(v.ptnuc04);
    document.getElementById("ptnu01").innerHTML = notation(player.ptnu01);
    document.getElementById("ptnu02").innerHTML = notation(player.ptnu02);
    document.getElementById("ptnu03").innerHTML = notation(player.ptnu03);
    document.getElementById("ptnu04").innerHTML = notation(player.ptnu04);

    document.getElementById("tthamnt").innerHTML = notatint(player.tthamnt);
    document.getElementById("tthsize").innerHTML = notatint(player.tthsize);
    document.getElementById("tthsize2").innerHTML = notatint(player.tthsize);
    document.getElementById("tthsize3").innerHTML = notatint(player.tthimpr);
    document.getElementById("tthsize4").innerHTML = notatint(player.tthimpr);
    document.getElementById("tthireq").innerHTML = notatint(v.tthimpc);
    document.getElementById("tthgrow").innerHTML = notation(player.tthgrow);
    document.getElementById("tthgreq").innerHTML = notation(v.tthgreq);
    document.getElementById("tthmul").innerHTML = notation(v.tthmul);
    document.getElementById("tthpow").innerHTML = notation(v.tthpow);
    document.getElementById("tthseed").innerHTML = notation(player.tthseed);
    document.getElementById("tthseed2").innerHTML = notation(player.tthseed);
    document.getElementById("tthgene").innerHTML = notation(player.tthgene);
    document.getElementById("tthsucr").innerHTML = notation(player.tthsucr);
    document.getElementById("tthseedpd").innerHTML = notation(v.tthseedpd);
    document.getElementById("tthgenepd").innerHTML = notation(v.tthgenepd);
    document.getElementById("tthsucrpd").innerHTML = notation(v.tthsucrpd);
    document.getElementById("tthuc01").innerHTML = notation(v.tthuc01);
    document.getElementById("tthuc02").innerHTML = notation(v.tthuc02);
    document.getElementById("tthuc03").innerHTML = notation(v.tthuc03);
    document.getElementById("tthuc04").innerHTML = notation(v.tthuc04);
    document.getElementById("tthue01").innerHTML = notation(v.tthue01);
    document.getElementById("tthue02").innerHTML = notation(v.tthue02);
    document.getElementById("tthue03").innerHTML = notation(v.tthue03);
    document.getElementById("tthue04").innerHTML = notation(v.tthue04);
    if (player.tthatact[0] == true) document.getElementById("atplt").innerHTML = "开";
    else document.getElementById("atplt").innerHTML = "关";
    if (player.tthatact[1] == true) document.getElementById("athar").innerHTML = "开";
    else document.getElementById("athar").innerHTML = "关";
    if (player.tthatact[2] == true) document.getElementById("atbtu").innerHTML = "开";
    else document.getElementById("atbtu").innerHTML = "关";
    if (player.tthatact[3] == true) document.getElementById("atimp").innerHTML = "开";
    else document.getElementById("atimp").innerHTML = "关";
    document.getElementById("tthprespd").innerHTML = notation(v.tthprespd);
    document.getElementById("tthprempd").innerHTML = notation(v.tthprempd);
    document.getElementById("tthpres").innerHTML = notation(player.tthpres);
    document.getElementById("tthprem").innerHTML = notation(player.tthprem);
    document.getElementById("tthpu1").innerHTML = notation(player.tthpu1);
    document.getElementById("tthpu2").innerHTML = notation(player.tthpu2);
    document.getElementById("tthpu3").innerHTML = notation(player.tthpu3);
    document.getElementById("tthpu4").innerHTML = notation(player.tthpu4);
    document.getElementById("tthpuc1").innerHTML = notation(v.tthpuc1);
    document.getElementById("tthpuc2").innerHTML = notation(v.tthpuc2);
    document.getElementById("tthpuc3").innerHTML = notation(v.tthpuc3);
    document.getElementById("tthpuc4").innerHTML = notation(v.tthpuc4);

    document.getElementById("slogxyz").innerHTML = notation(player.xyzx.max(1).slog());
    document.getElementById("xyze1").innerHTML = notation(v.xyze1);
    document.getElementById("xyze2").innerHTML = notation(v.xyze2);
    document.getElementById("xyzx").innerHTML = notation(player.xyzx);
    document.getElementById("xyzy").innerHTML = notation(player.xyzy);
    document.getElementById("xyzz").innerHTML = notation(player.xyzz);
    document.getElementById("xyzt").innerHTML = notation(player.xyzt);
    document.getElementById("xyze").innerHTML = notation(player.xyze);
    document.getElementById("xyzf").innerHTML = notation(player.xyzf);
    document.getElementById("xyzg").innerHTML = notation(player.xyzg);
    document.getElementById("xyzh").innerHTML = notation(player.xyzh);


    if (player.xyzsw.eq(0)) {
        document.getElementById("xyzswr").innerHTML = "30x吸引子";
    }
    if (player.xyzsw.eq(1)) {
        document.getElementById("xyzswr").innerHTML = "e100x吸引子";
    }
    if (player.xyzsw.eq(2)) {
        document.getElementById("xyzswr").innerHTML = "ee300x吸引子";
    }
    if (player.xyzsw.eq(3)) {
        document.getElementById("xyzswr").innerHTML = "eee1000x吸引子";
    }
    if (player.xyzsw.eq(4)) {
        document.getElementById("xyzswr").innerHTML = "eee10000x吸引子";
    }
    if (player.xyzsw.eq(5)) {
        document.getElementById("xyzswr").innerHTML = "eee100000x吸引子";
    }
    if (player.xyzsw.eq(6)) {
        document.getElementById("xyzswr").innerHTML = "6.000f4x吸引子";
    }
    if (player.xyzsw.eq(7)) {
        document.getElementById("xyzswr").innerHTML = "无限x吸引子";
    }
    if (player.xyzbo.eq(0)) {
        document.getElementById("xyzbor").innerHTML = "1e100e吸引子";
    }
    if (player.xyzbo.eq(1)) {
        document.getElementById("xyzbor").innerHTML = "ee30e吸引子";
        document.getElementById("xyze3").innerHTML = "扪敤能量效果指数+1";
    }
    if (player.xyzbo.eq(2)) {
        document.getElementById("xyzbor").innerHTML = "ee308e吸引子";
        document.getElementById("xyze3").innerHTML = "扪敤能量效果指数+1，自动获取扪敤次数";
    }
    if (player.xyzbo.eq(3)) {
        document.getElementById("xyzbor").innerHTML = "无限e吸引子";
        document.getElementById("xyze3").innerHTML = "扪敤能量效果指数+1，自动获取扪敤次数，扫敥次数获取数量增加log2扪敤次数";
    }

    document.getElementById("reacm1").innerHTML = notation(player.reacm1);
    document.getElementById("reacm2").innerHTML = notation(player.reacm2);
    document.getElementById("cata").innerHTML = notation(player.cata);
    document.getElementById("blcnt").innerHTML = notation(v.blcnt);
    document.getElementById("anm3psb").innerHTML = notation(v.blcnt.sub(0.5).max(0).mul(0.01));
    document.getElementById("anm3am").innerHTML = notation(player.anm3);
    document.getElementById("anm3ps").innerHTML = notation(v.anm3ps);
    document.getElementById("anm3exp").innerHTML = notation(player.anm3u03.div(64).add(0.0625));
    document.getElementById("anm3effe").innerHTML = notation(player.anm3.add(1).log(2).add(1).log(2).max(1).pow(player.anm3u03.div(64).add(0.0625)));
    document.getElementById("anm3upg01").innerHTML = notatint(player.anm3u01);
    document.getElementById("anm3upg02").innerHTML = notatint(player.anm3u02);
    document.getElementById("anm3upg03").innerHTML = notatint(player.anm3u03);
    document.getElementById("anm3upg04").innerHTML = notatint(player.anm3u04);
    document.getElementById("anm3upge01").innerHTML = notation(new Decimal(2).pow(player.anm3u01));
    document.getElementById("anm3upge02").innerHTML = notation(player.anm3.pow(player.anm3u02.mul(16)).max(1));
    document.getElementById("anm3upge03").innerHTML = notation(player.anm3u03.div(64));
    document.getElementById("anm3upge04").innerHTML = notation(new Decimal(1.189207115002721).pow(player.anm3u04));
    document.getElementById("anm3upge05").innerHTML = notation(player.PL3tms.pow(0.5).max(1));
    document.getElementById("anm3upge06").innerHTML = notation(player.anm3.log(16).max(1));
    document.getElementById("anm3upgc01").innerHTML = notation(v.anm3c01);
    document.getElementById("anm3upgc02").innerHTML = notation(v.anm3c02);
    document.getElementById("anm3upgc03").innerHTML = notation(v.anm3c03);
    document.getElementById("anm3upgc04").innerHTML = notation(v.anm3c04);

    document.getElementById("convmx").innerHTML = notation(v.convmx);
    document.getElementById("convnx").innerHTML = notation(v.convnx);
    for (i = 1; i <= 16; i++) {
        let name = tiername[i];
        document.getElementById("convp" + name).innerHTML = notation(v["convp" + name]);
    }

    document.getElementById("PL4Pts").innerHTML = notation(player.PL4pts);
    document.getElementById("PL4Eng").innerHTML = notation(player.PL4energy);
    document.getElementById("PL4EngPow").innerHTML = notation(v.PL4engpow);
    document.getElementById("PL4EngMul").innerHTML = notation(v.PL4engmul);
    document.getElementById("PL4EngPs").innerHTML = notation(player.wsca33.mul(v.wscm33).pow(v.wscp33).mul(new Decimal(0.25)));

    document.getElementById("PL4fra").innerHTML = notation(player.PL4fra);
    document.getElementById("fraft1").innerHTML = notation(v.fraft1);
    document.getElementById("fraft2").innerHTML = notation(v.fraft2);
    document.getElementById("fraft3").innerHTML = notation(v.fraft3);
    document.getElementById("fraft4").innerHTML = notation(v.fraft4);
    document.getElementById("fragain").innerHTML = notation(v.fraft1.mul(v.fraft2).mul(v.fraft3).mul(v.fraft4));
    for (i = 1; i <= 8; i++) {
        let name = tiername[i];
        document.getElementById("frau" + name).innerHTML = notation(player["frau" + name]);
        document.getElementById("frauc" + name).innerHTML = notation(v["frauc" + name]);
        document.getElementById("fraue" + name).innerHTML = notation(v["fraue" + name]);
    }
    document.getElementById("fraue61").innerHTML = notation(v.fraue01.mul(1.189));
    document.getElementById("fraue62").innerHTML = notation(v.fraue02.mul("2.004e19728"));
    document.getElementById("fraue63").innerHTML = notation(v.fraue03.mul(2));
    document.getElementById("fraue64").innerHTML = notation(v.fraue04.mul(2));
    document.getElementById("fraue65").innerHTML = notation(v.fraue05.mul(1.414));
    document.getElementById("fraue66").innerHTML = notation(v.fraue06.mul(1.414));
    document.getElementById("fraue67").innerHTML = notation(v.fraue07.mul(1.189));
    document.getElementById("fraue68").innerHTML = notation(v.fraue08.add(2));

    document.getElementById("bglboxa").innerHTML = notatint(player.bogglebox);
    document.getElementById("boxc1").innerHTML = notation(v.boxc1);
    document.getElementById("boxc2").innerHTML = notation(v.boxc2);
    document.getElementById("hdrn4").innerHTML = notatint(player.hdrn4);
    document.getElementById("hdrn6").innerHTML = notatint(player.hdrn6);
    document.getElementById("hdrn8").innerHTML = notatint(player.hdrn8);
    document.getElementById("hdrn12").innerHTML = notatint(player.hdrn12);
    document.getElementById("hdrn20").innerHTML = notatint(player.hdrn20);
    document.getElementById("hdrn4w").innerHTML = notation(player.hdrn4w);
    document.getElementById("hdrn6w").innerHTML = notation(player.hdrn6w);
    document.getElementById("hdrn8w").innerHTML = notation(player.hdrn8w);
    document.getElementById("hdrn12w").innerHTML = notation(player.hdrn12w);
    document.getElementById("hdrn20w").innerHTML = notation(player.hdrn20w);
    document.getElementById("hdrn4wps").innerHTML = notation(v.hdrn4wps);
    document.getElementById("hdrn6wps").innerHTML = notation(v.hdrn6wps);
    document.getElementById("hdrn8wps").innerHTML = notation(v.hdrn8wps);
    document.getElementById("hdrn12wps").innerHTML = notation(v.hdrn12wps);
    document.getElementById("hdrn20wps").innerHTML = notation(v.hdrn20wps);
    document.getElementById("hdrn4e").innerHTML = notation(v.hdrn4e);
    document.getElementById("hdrn6e").innerHTML = notation(v.hdrn6e);
    document.getElementById("hdrn8e").innerHTML = notation(v.hdrn8e);
    document.getElementById("hdrn12e").innerHTML = notation(v.hdrn12e);
    document.getElementById("hdrn20e").innerHTML = notation(v.hdrn20e);
    document.getElementById("wxzf").innerHTML = notatint(player.wxzf);
    document.getElementById("hydf").innerHTML = notatint(player.hydf);
    document.getElementById("xkwz").innerHTML = notatint(player.xkwz);
    document.getElementById("wxzfe").innerHTML = notation(v.wxzfe);
    document.getElementById("hydfe").innerHTML = notation(v.hydfe);
    document.getElementById("xkwze").innerHTML = notation(v.xkwze);


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
    document.getElementById("PL1sec").innerHTML = "上次扩散到现在过了" + notatint(player.PL1sec) + "秒";
    document.getElementById("PL1pts").innerHTML = "总计扩散点：" + notatint(player.PL1ptsttl);
    document.getElementById("PL2tms").innerHTML = "您扪敤了" + notatint(player.PL2tms) + "次";
    document.getElementById("PL2sec").innerHTML = "上次扪敤到现在过了" + notatint(player.PL2sec) + "秒";
    document.getElementById("PL2pts").innerHTML = "总计扪敤点：" + notatint(player.PL2ptsttl);
    document.getElementById("PL3tms").innerHTML = "您扫敥了" + notatint(player.PL3tms) + "次";
    document.getElementById("PL3sec").innerHTML = "上次扫敥到现在过了" + notatint(player.PL3sec) + "秒";
    document.getElementById("PL3pts").innerHTML = "总计扫敥点：" + notatint(player.PL3ptsttl);
    document.getElementById("PL4tms").innerHTML = "您扬敦了" + notatint(player.PL4tms) + "次";
    document.getElementById("PL4sec").innerHTML = "上次扬敦到现在过了" + notatint(player.PL4sec) + "秒";
    document.getElementById("PL4pts").innerHTML = "总计扬敦点：" + notatint(player.PL4ptsttl);


    if (gui_mod == 1) player.nowtime = Date.now();
}

function styleDisplay() {
    if (player.energy.gte(getsoftcap())) document.getElementById("softcap").style.display = 'block';
    else document.getElementById("softcap").style.display = 'none';

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
        document.getElementById("tier01info").innerHTML = "在200式风单元，将基于风单元式数增加风之微粒获取";
    }
    else document.getElementById("tier01rewa06").style.display = 'none';
    if (player.tier01.gte(200)) {
        document.getElementById("tier01rewa07").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在630式风单元，将每作成一次16式风灵使风之微粒产量×1.2";
    }
    else document.getElementById("tier01rewa07").style.display = 'none';
    if (player.tier01.gte(630)) {
        document.getElementById("tier01rewa08").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在1995式风单元，将每作成一次24式风灵使风之徯粓产量×1.01";
    }
    else document.getElementById("tier01rewa08").style.display = 'none';
    if (player.tier01.gte(1995)) {
        document.getElementById("tier01rewa09").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "在6308式风单元，将基于甜甜花倍数提高25式风单元效果";
    }
    else document.getElementById("tier01rewa09").style.display = 'none';
    if (player.tier01.gte(6308)) {
        document.getElementById("tier01rewa10").style.display = 'block';
        document.getElementById("tier01info").innerHTML = "";
    }
    else document.getElementById("tier01rewa10").style.display = 'none';

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
        document.getElementById("tier02info").innerHTML = "在75式风模块，将使每次作成乘数的指数乘以：1~8式风灵为4，9~16式风灵为2";
        document.getElementById("upg_04").style.display = 'block';
    }
    else {
        document.getElementById("tier02rewa05").style.display = 'none';
        document.getElementById("upg_04").style.display = 'none';
    }
    if (player.tier02.gte(75)) {
        document.getElementById("tier02rewa06").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "在237式风模块，使风灵升级1和3的效果指数增加0.5";
    }
    else {
        document.getElementById("tier02rewa06").style.display = 'none';
    }
    if (player.tier02.gte(237)) {
        document.getElementById("tier02rewa07").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "在750式风模块，将分别使1~8、9~16、17~24、25~32式风灵每次作成乘数的指数变为256、64、16、4";
    }
    else {
        document.getElementById("tier02rewa07").style.display = 'none';
    }
    if (player.tier02.gte(750)) {
        document.getElementById("tier02rewa08").style.display = 'block';
        document.getElementById("tier02info").innerHTML = "";
    }
    else {
        document.getElementById("tier02rewa08").style.display = 'none';
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
        document.getElementById("tier03info").innerHTML = "在50式风系统，将基于风系统使25式风单元效果提升";
    }
    else document.getElementById("tier03rewa04").style.display = 'none';
    if (player.tier03.gte(50)) {
        document.getElementById("tier03rewa05").style.display = 'block';
        document.getElementById("tier03info").innerHTML = "在126式风系统，将使3式风系统也对25~32式风灵生效，但效果倍率降低";
    }
    else document.getElementById("tier03rewa05").style.display = 'none';
    if (player.tier03.gte(126)) {
        document.getElementById("tier03rewa06").style.display = 'block';
        document.getElementById("tier03info").innerHTML = "";
    }
    else document.getElementById("tier03rewa06").style.display = 'none';

    if (player.tier04.eq(0)) document.getElementById("tier04info").innerHTML = "在1式风四倍系统，将基于风四倍系统提升进阶挑战1~4上限（最多提升12）";
    if (player.tier04.gte(1)) {
        document.getElementById("tier04rewa01").style.display = 'block';
        document.getElementById("tier04info").innerHTML = "在3式风四倍系统，将使3式风系统也对17~24式风灵生效";
    }
    else document.getElementById("tier04rewa01").style.display = 'none';
    if (player.tier04.gte(3)) {
        document.getElementById("tier04rewa02").style.display = 'block';
        document.getElementById("tier04info").innerHTML = "在10式风四倍系统，将基于风四倍系统提高元素能量产量";
    }
    else document.getElementById("tier04rewa02").style.display = 'none';
    if (player.tier04.gte(10)) {
        document.getElementById("tier04rewa03").style.display = 'block';
        document.getElementById("tier04info").innerHTML = "在30式风四倍系统，将基于风四倍系统提高一阶游戏速度";
    }
    else document.getElementById("tier04rewa03").style.display = 'none';
    if (player.tier04.gte(30)) {
        document.getElementById("tier04rewa04").style.display = 'block';
        document.getElementById("tier04info").innerHTML = "";
    }
    else document.getElementById("tier04rewa04").style.display = 'none';

    if (player.PL2tms.gte(1)) document.getElementById("tier_03").style.display = 'block';
    else document.getElementById("tier_03").style.display = 'none';

    if (player.std[6] == true) document.getElementById("tier_04").style.display = 'block';
    else document.getElementById("tier_04").style.display = 'none';

    if (player.energy.gte(1.79769313486231e308)) document.getElementById("PL1button").style.display = 'block';
    else document.getElementById("PL1button").style.display = 'none';
    if (player.PL1pts.gte(1.79769313486231e308)) document.getElementById("PL2button").style.display = 'block';
    else document.getElementById("PL2button").style.display = 'none';
    if (player.PL2pts.gte("6.74114012549e315652")) document.getElementById("PL3button").style.display = 'block';
    else document.getElementById("PL3button").style.display = 'none';
    if (player.PL3pts.gte("6.74114012549e315652")) document.getElementById("PL4button").style.display = 'block';
    else document.getElementById("PL4button").style.display = 'none';

    if (player.energy.lt("1e6144")) document.getElementById("PL1ptsnx").style.display = 'block';
    else document.getElementById("PL1ptsnx").style.display = 'none';
    if (player.PL1pts.lt("1e6144")) document.getElementById("PL2ptsnx").style.display = 'block';
    else document.getElementById("PL2ptsnx").style.display = 'none';
    if (player.PL2pts.lt("1e6291456")) document.getElementById("PL3ptsnx").style.display = 'block';
    else document.getElementById("PL3ptsnx").style.display = 'none';
    if (player.PL3pts.lt("1e6291456")) document.getElementById("PL4ptsnx").style.display = 'block';
    else document.getElementById("PL4ptsnx").style.display = 'none';

    if (player.hasUnlockedPL1 == true) {
        document.getElementById("wscset2").style.display = 'block';
        document.getElementById("PL1info").style.display = 'block';
        document.getElementById("PL1stat").style.display = 'block';
        document.getElementById("comp1").style.display = 'block';
        document.getElementById("btrow2").style.display = '';
    }
    if (player.hasUnlockedPL2 == true) {
        document.getElementById("wscset3").style.display = 'block';
        document.getElementById("PL2info").style.display = 'block';
        document.getElementById("PL2stat").style.display = 'block';
        document.getElementById("comp2").style.display = 'block';
        document.getElementById("btrow3").style.display = '';
    }
    if (player.hasUnlockedPL3 == true) {
        document.getElementById("wscset4").style.display = 'block';
        document.getElementById("PL3info").style.display = 'block';
        document.getElementById("PL3stat").style.display = 'block';
        document.getElementById("comp3").style.display = 'block';
        document.getElementById("btrow4").style.display = '';
    }
    if (player.hasUnlockedPL4 == true) {
        document.getElementById("wscset5").style.display = 'block';
        document.getElementById("PL4info").style.display = 'block';
        document.getElementById("PL4stat").style.display = 'block';
        document.getElementById("comp4").style.display = 'block';
        document.getElementById("btrow5").style.display = '';
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
            document.getElementById("byat" + tiername[i + 16]).style.display = 'block';
        }
    }
    if (player.PL4goal[1] == true) {
        for (let i = 1; i <= 8; i++) {
            document.getElementById("byat" + tiername[i + 24]).style.display = 'block';
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
    if (player.PL2tms.gte(10)) document.getElementById("byattier03").style.display = 'block';
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
    if (player.PL2tms.gte(7)) document.getElementById("byatupgd03").style.display = 'block';
    else document.getElementById("byatupgd03").style.display = 'none';
    if (player.PL2tms.gte(8)) document.getElementById("byatupgd04").style.display = 'block';
    else document.getElementById("byatupgd04").style.display = 'none';

    if (player.PL1upg[3] == true) document.getElementById("normchal").style.display = 'block';
    else document.getElementById("normchal").style.display = 'none';

    if (player.ach[19] == true) document.getElementById("chal").style.display = 'block';
    else document.getElementById("chal").style.display = 'none';

    if (player.std[17] == true) document.getElementById("chal2").style.display = 'block';
    else document.getElementById("chal2").style.display = 'none';

    if (player.resa13.gte(1)) document.getElementById("chal3").style.display = 'block';
    else document.getElementById("chal3").style.display = 'none';

    for (let i = 0; i < 12; i++) {
        if (player.normchacom[i] == true) document.getElementById("normchal" + tiername[i + 1]).className = "normchalyes";
        else if (player.innormcha == i + 1) document.getElementById("normchal" + tiername[i + 1]).className = "normchalin"
        else document.getElementById("normchal" + tiername[i + 1]).className = "normchalno";
    }

    for (let i = 0; i < 4; i++) {
        let name = tiername[i + 1];
        if (player["chacom" + name].eq(v.PL1chacap)) document.getElementById("chal" + tiername[i + 1]).className = "chalyes";
        else if (player.incha == i + 1) document.getElementById("chal" + tiername[i + 1]).className = "chalin"
        else document.getElementById("chal" + tiername[i + 1]).className = "chalno";
    }
    for (let i = 4; i < 8; i++) {
        let name = tiername[i + 1];
        if (player["chacom" + name].eq(v.PL2chacap)) document.getElementById("chal" + tiername[i + 1]).className = "chalyes";
        else if (player.incha == i + 1) document.getElementById("chal" + tiername[i + 1]).className = "chalin"
        else document.getElementById("chal" + tiername[i + 1]).className = "chalno";
    }
    for (let i = 8; i < 12; i++) {
        let name = tiername[i + 1];
        if (player["chacom" + name].eq(v.PL3chacap)) document.getElementById("chal" + tiername[i + 1]).className = "chalyes";
        else if (player.incha == i + 1) document.getElementById("chal" + tiername[i + 1]).className = "chalin"
        else document.getElementById("chal" + tiername[i + 1]).className = "chalno";
    }

    if (player.PL1upg[11] == true) document.getElementById("PL1bab").style.display = '';
    else document.getElementById("PL1bab").style.display = 'none';

    if (player.anm2sc.gte(1073741824)) document.getElementById("orbrow2").style.display = '';
    else document.getElementById("orbrow2").style.display = 'none';

    for (let i = 0; i < 8; i++) {
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

    for (let i = 1; i <= 12; i++) {
        if (player.PL2tms.gte(i)) document.getElementById("PL2mlst" + tiername[i]).className = "PL2mlstyes";
        else document.getElementById("PL2mlst" + tiername[i]).className = "PL2mlstno";
    }
    if (player.PL2tms.gte(12)) document.getElementById("PL2tmshop").style.display = 'block';
    else  document.getElementById("PL2tmshop").style.display = 'none';

    if (player.energyttl.gte("e1e6")) document.getElementById("stdtree").style.display = 'block';
    else document.getElementById("stdtree").style.display = 'none';

    for (let i = 0; i < 40; i++) {
        if (player.std[i] == true) document.getElementById("std" + tiername[i + 1]).className = "stdyes";
        else document.getElementById("std" + tiername[i + 1]).className = "stdno";
    }

    if (player.std[19] == true) document.getElementById("alch").style.display = 'block';
    else document.getElementById("alch").style.display = 'none';

    for (i = 1; i <= 6; i++) {
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

    if (player.anm2sc.gte(67108864)) document.getElementById("anm2mlst01").className = "PL2mlstyes";
    else document.getElementById("anm2mlst01").className = "PL2mlstno";
    if (player.anm2sc.gte(268435456)) document.getElementById("anm2mlst02").className = "PL2mlstyes";
    else document.getElementById("anm2mlst02").className = "PL2mlstno";
    if (player.anm2sc.gte(1073741824)) document.getElementById("anm2mlst03").className = "PL2mlstyes";
    else document.getElementById("anm2mlst03").className = "PL2mlstno";
    if (player.anm2sc.gte(4294967296)) document.getElementById("anm2mlst04").className = "PL2mlstyes";
    else document.getElementById("anm2mlst04").className = "PL2mlstno";

    for (i = 1; i <= 16; i++) {
        let name = tiername[i];
        if (player.inres == i) document.getElementById("res" + name).className = "resyes";
        else document.getElementById("res" + name).className = "resno";
    }

    for (i = 1; i <= 8; i++) {
        let name = tiername[i];
        if (player.ptn[i - 1] == true) document.getElementById("ptn" + name).className = "PL3upgyes";
        else document.getElementById("ptn" + name).className = "PL3upgno";
    }
    if (player.resa14.gte(1)) {
        document.getElementById("ptnu3").style.display = 'block';
        document.getElementById("ptnu4").style.display = 'block';
    }
    else {
        document.getElementById("ptnu3").style.display = 'none';
        document.getElementById("ptnu4").style.display = 'none';
    }

    if (player.resa12.gte(1)) document.getElementById("ztth").style.display = 'block';
    else document.getElementById("ztth").style.display = 'none';
    if (player.tthatunl[0] == true) document.getElementById("ulplt").style.display = 'block'
    else document.getElementById("ulplt").style.display = 'none';
    if (player.tthatunl[1] == true) document.getElementById("ulhar").style.display = 'block'
    else document.getElementById("ulhar").style.display = 'none';
    if (player.PL4goal[2] == true) document.getElementById("ulbtu").style.display = 'block'
    else document.getElementById("ulbtu").style.display = 'none'
    if (player.PL4goal[3] == true) document.getElementById("ulimp").style.display = 'block'
    else document.getElementById("ulimp").style.display = 'none'
    for (i = 1; i <= 4; i++) {
        let name = tiername[i];
        if (player.tthpu[i - 1] == true) document.getElementById("tthu" + name).className = "tthupg2y";
        else document.getElementById("tthu" + name).className = "tthupg2";
    }
    if (player.tthpu[2] == true) {
        document.getElementById("ptnul1").style.display = 'none';
        document.getElementById("ptnm04").style.display = 'block';
    }
    else {
        document.getElementById("ptnul1").style.display = 'block';
        document.getElementById("ptnm04").style.display = 'none';
    }
    if (player.tthpu[3] == true) {
        document.getElementById("xyz").style.display = 'block';
    }
    else {
        document.getElementById("xyz").style.display = 'none';
    }

    for (i = 1; i <= 4; i++) {
        let name = tiername[i];
        if (player.xyzu[i - 1] == true) document.getElementById("xyzu" + name).className = "PL3upgyes";
        else document.getElementById("xyzu" + name).className = "PL3upgno";
    }

    if (player.xyzsw.gte(1)) {
        document.getElementById("yxyz").style.display = 'block';
        document.getElementById("xyzu02").style.display = 'block';
    }
    else {
        document.getElementById("yxyz").style.display = 'none';
        document.getElementById("xyzu02").style.display = 'none';
    }
    if (player.xyzsw.gte(2)) {
        document.getElementById("zxyz").style.display = 'block';
        document.getElementById("xyzu03").style.display = 'block';
    }
    else {
        document.getElementById("zxyz").style.display = 'none';
        document.getElementById("xyzu03").style.display = 'none';
    }
    if (player.xyzsw.gte(3)) {
        document.getElementById("txyz").style.display = 'block';
        document.getElementById("xyzu04").style.display = 'block';
    }
    else {
        document.getElementById("txyz").style.display = 'none';
        document.getElementById("xyzu04").style.display = 'none';
    }
    if (player.xyzsw.gte(4)) {
        document.getElementById("exyz").style.display = 'block';
        document.getElementById("xyzu05").style.display = 'block';
    }
    else {
        document.getElementById("exyz").style.display = 'none';
        document.getElementById("xyzu05").style.display = 'none';
    }
    if (player.xyzsw.gte(5)) {
        document.getElementById("fxyz").style.display = 'block';
        document.getElementById("xyzu06").style.display = 'block';
    }
    else {
        document.getElementById("fxyz").style.display = 'none';
        document.getElementById("xyzu06").style.display = 'none';
    }
    if (player.xyzsw.gte(6)) {
        document.getElementById("gxyz").style.display = 'block';
        document.getElementById("xyzu07").style.display = 'block';
    }
    else {
        document.getElementById("gxyz").style.display = 'none';
        document.getElementById("xyzu07").style.display = 'none';
    }
    if (player.xyzsw.gte(7)) {
        document.getElementById("hxyz").style.display = 'block';
        document.getElementById("xyzu08").style.display = 'block';
    }
    else {
        document.getElementById("hxyz").style.display = 'none';
        document.getElementById("xyzu08").style.display = 'none';
    }

    if (player.hasunlockedanm3 == true) {
        document.getElementById("anm3").style.display = 'block';
        document.getElementById("ulanm3").style.display = 'none';
    }
    else {
        document.getElementById("anm3").style.display = 'none';
        document.getElementById("ulanm3").style.display = 'block';
    }
    for (i = 1; i <= 4; i++) {
        let name = tiername[i];
        if (player.anm3u[i - 1] == true) document.getElementById("anm3u" + name).className = "PL3upgyes";
        else document.getElementById("anm3u" + name).className = "PL3upgno";
    }
    if (player.anm3u[0] == true) {
        document.getElementById("ptnul2").style.display = 'none';
        document.getElementById("ptnm08").style.display = 'block';
    }
    else {
        document.getElementById("ptnul2").style.display = 'block';
        document.getElementById("ptnm08").style.display = 'none';
    }

    if (player.anm3u[3] == true) document.getElementById("conv").style.display = 'block';
    else document.getElementById("conv").style.display = 'none';

    for (i = 1; i <= 16; i++) {
        let name = tiername[i];
        if (player.convu[i - 1] == true) document.getElementById("conv" + name).className = "PL3upgyes";
        else document.getElementById("conv" + name).className = "PL3upgno";
    }

    for (let i = 1; i <= 10; i++) {
        if (player.PL4goal[i-1] == true) document.getElementById("PL4goal" + tiername[i]).className = "PL4goalyes";
        else document.getElementById("PL4goal" + tiername[i]).className = "PL4goalno";
    }

    if (player.PL4goal[7] == true) document.getElementById("bogglebox").style.display = 'block';
    else document.getElementById("bogglebox").style.display = 'none';

    for (let i = 0; i < 68; i++) {
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
    if (player.PL4conf == true) document.getElementById("PL4confirm").checked = 'checked';
    else document.getElementById("PL4confirm").checked = '';
    if (player.news == true) document.getElementById("swnews").checked = 'checked';
    else document.getElementById("swnews").checked = '';
    if (player.hotk == true) document.getElementById("swhotk").checked = 'checked';
    else document.getElementById("swhotk").checked = '';
    if (player.news == true) document.getElementById("news").style.display = 'block';
    else document.getElementById("news").style.display = 'none';
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
    if (player.parupg04.gte(10)) getAch(24);
    if (player.chacom01.add(player.chacom02).add(player.chacom03).add(player.chacom04).gte(16)) getAch(25);
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
    if (player.infytx == true & player.energy.gte("1e1e10")) getAch(40);
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


}

/*弹出提示*/
function shownoti(notiname) {
    var noti = document.querySelector(notiname);
    noti.classList.add("show");
    setTimeout(function () { noti.classList.remove("show"); }, 4000);
}

/*快捷键*/
const hotkcheckbox = document.getElementById("swhotk");
hotkcheckbox.addEventListener("input", function () {
    if (hotkcheckbox.checked) {
        player.hotk = true;
    } else {
        player.hotk = false;
    }
})
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
        case 86:
            PL4reset();
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
    getWscHyp();
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
    getptn();
    gettth();
    getxyz();
    getanm3();
    getconv();
    getPL4engMul();
    getPL4engPow();
    getfrau();
    getboggle();
    getspd();
    autoBuy();
    comAch();
    if (player.hasUnlockedPL1 == false) fixInfinity();
    fixEternity();
}

function autoBuy() {
    if (player.PL1upg[0] == true) {
        if (player.normchacom[0] == true) autoBuyWsc(1);
        else abw(1);
        if (player.normchacom[1] == true) autoBuyWsc(2);
        else abw(2);
        if (player.normchacom[2] == true) autoBuyWsc(3);
        else abw(3);
        if (player.normchacom[3] == true) autoBuyWsc(4);
        else abw(4);
        if (player.normchacom[4] == true) autoBuyWsc(5);
        else abw(5);
        if (player.normchacom[5] == true) autoBuyWsc(6);
        else abw(6);
        if (player.normchacom[6] == true) autoBuyWsc(7);
        else abw(7);
        if (player.normchacom[7] == true) autoBuyWsc(8);
        else abw(8);
    }
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
}

updateGUI();

setInterval(mainLoop, 50);

setInterval(styleDisplay, 50);

setInterval(updateGUI, 50);

var prod = setInterval(produce, 50);

setInterval(save, 60000);


/*滚动新闻*/
const newscheckbox = document.getElementById("swnews");
newscheckbox.addEventListener("input", function () {
    if (newscheckbox.checked) {
        player.news = true;
    } else {
        player.news = false;
    }
})
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
        "传说风神的先祖（qeq6308）创造世界的时候做了三个选项卡，其中一个选项卡中从下往上按照大小顺序摞着64种风灵。",
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
        "旅行者，崩铁好玩吗？————开拓者，原神好玩吗？",
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
        "qeq6308是风神的先祖，就像Derpsmith是蚁神的先祖一样",
        "铃音(Lain)曾经说过：无论何时何地，每一个风灵都是互相联通的",
        "<coior=#f29e38ff>HTML可以做出模拟宇宙，HTML是最好的语言！</oolor>",
        "斯帕克模型猜想指的是在人类大脑神经元之间存在着一种以“斯帕克”（Sparks）为单位的信息传递模式。这一模型猜想源自于对大脑神经元活动的深入观察和研究，它挑战了传统上认为神经元之间信息传递是连续的观点，而提出了一种全新的、基于离散脉冲的信息传递机制。斯帕克模型猜想认为，神经元之间的信息传递不是连续的，而是以离散的“斯帕克”为单位进行。这种离散的信息传递方式，与连续的电信号传递相比，更能体现大脑信息处理的高效性和快速性。该猜想进一步假设，这些离散的“斯帕克”实际上是以脉冲的形式在神经元之间传递。这种脉冲式传递方式不仅符合大脑神经元活动的实际观测结果，而且为理解大脑复杂的信息处理机制提供了新的视角。研究人员利用脑电图（EEG）等技术手段，观察到大脑神经元之间的电活动确实呈现出离散的脉冲形式，这与斯帕克模型猜想的假设相一致。此外，还发现神经元之间的脉冲传递具有一定的时间间隔，进一步支持了离散信息传递的观点",/*130*/
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

    ]
var p = 50 + document.body.clientWidth
var l = -50 - (newsText.innerText.length * 16)
var newsTimer = setInterval(function () {
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