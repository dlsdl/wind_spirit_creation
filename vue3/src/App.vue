<template>
  <div id="app">
    <div v-if="player.news" class="news">
      <span class="newsContent" id="newsText"></span>
    </div>
    
    <button class="PL1button" @click="PL1reset">
      扩散重置：
      <span v-if="player.energy.gte('1.797694e308')">获得{{ notation(player.energy.root(1024).floor()) }}扩散点</span>
      <span v-if="player.energy.gte('1.797694e308') && player.energy.lt('1e6144')">，下一扩散点在{{ notation(player.energy.root(1024).floor().add(1).pow(1024)) }}能量</span>
      <span v-if="player.energy.lt('1.797694e308')">需要1.797e308能量</span>
    </button>
    
    <button v-if="player.hasUnlockedPL1" class="PL2button" @click="PL2reset">
      扪敤重置：
      <span v-if="player.PL1pts.gte('1.797694e308')">获得{{ notation(player.PL1pts.root(1024).floor()) }}扪敤点</span>
      <span v-if="player.PL1pts.gte('1.797694e308') && player.PL1pts.lt('1e6144')">，下一扪敤点在{{ notation(player.PL1pts.root(1024).floor().add(1).pow(1024)) }}扩散点</span>
      <span v-if="player.PL1pts.lt('1.797694e308')">需要1.797e308扩散点</span>
    </button>
    
    <button v-if="player.hasUnlockedPL2" class="PL3button" @click="PL3reset">
      扫敥重置：
      <span v-if="player.PL2pts.gte('6.742e315652')">获得{{ notation(player.PL2pts.root(1048576).floor()) }}扫敥点</span>
      <span v-if="player.PL2pts.gte('6.742e315652') && player.PL2pts.lt('e6291456')">，下一扫敥点在{{ notation(player.PL2pts.root(1048576).floor().add(1).pow(1048576)) }}扪敤点</span>
      <span v-if="player.PL2pts.lt('6.742e315652')">需要6.742e315652扪敤点</span>
    </button>
    
    <button v-if="player.hasUnlockedPL3" class="PL4button" @click="PL4reset">
      扬敦重置：
      <span v-if="player.PL3pts.gte('6.742e315652')">获得{{ notation(player.PL3pts.root(1048576).floor()) }}扬敦点</span>
      <span v-if="player.PL3pts.gte('6.742e315652') && player.PL3pts.lt('e6291456')">，下一扬敦点在{{ notation(player.PL3pts.root(1048576).floor().add(1).pow(1048576)) }}扫敥点</span>
      <span v-if="player.PL3pts.lt('6.742e315652')">需要6.742e315652扫敥点</span>
    </button>
    
    <button v-if="player.hasUnlockedPL4" class="PL5button" @click="PL5reset">
      扭敧重置：
      <span v-if="player.PL4pts.gte('5e323228496')">获得{{ notation(player.PL4pts.root(1073741824).floor()) }}扭敧点</span>
      <span v-if="player.PL4pts.gte('5e323228496') && player.PL4pts.lt('e6442450944')">，下一扭敧点在{{ notation(player.PL4pts.root(1073741824).floor().add(1).pow(1073741824)) }}扬敦点</span>
      <span v-if="player.PL4pts.lt('5e323228496')">需要e3.232e8扬敦点</span>
    </button>
    
    <button v-if="player.hasUnlockedPL5" class="PL6button" @click="PL6reset">
      扮敨重置：
      <span v-if="player.PL5pts.gte('5e323228496')">获得{{ notation(player.PL5pts.root(1073741824).floor()) }}扮敨点</span>
      <span v-if="player.PL5pts.gte('5e323228496') && player.PL5pts.lt('e6442450944')">，下一扮敨点在{{ notation(player.PL5pts.root(1073741824).floor().add(1).pow(1073741824)) }}扭敧点</span>
      <span v-if="player.PL5pts.lt('5e323228496')">需要e3.232e8扭敧点</span>
    </button>
    
    <button v-if="player.hasUnlockedPL6" class="PL7button" @click="PL7reset">
      扯敩重置：需要e3.309e11扮敨点
    </button>
    
    <button v-if="player.hasUnlockedPL7" class="PLwbutton" @click="PLwreset">
      第1次风灵坍缩需要e3.309e11扯敩点 扰敪重置：需要购买风神之奇物 进入第1次扰敪，风神将赐予您1024金色风灵
    </button>
    
    <br />
    
    <p align="center" class="ftsz2">
      你当前{{ player.innormcha == 0 && player.incha == 0 && !player.infytx && !player.incyzb ? "不在任何挑战" : "在 " }}
      <span v-if="player.innormcha != 0">普通挑战{{ player.innormcha }} </span>
      <span v-if="player.incha != 0">进阶挑战{{ player.incha }} </span>
      <span v-if="player.infytx">风压坍陷 </span>
      <span v-if="player.incyzb">刺影征标 </span>中
    </p>
    
    <p align="center" class="ftsz3">
      你有 <span class="ftsz4">{{ notation(player.energy) }}</span> 能量
    </p>
    
    <p align="center" class="ftsz2">
      你的能量每秒增加 {{ epsdisp() }}
    </p>
    
    <p align="center" class="textct">
      全局速度：×{{ v.glbspd.toFixed(3) }} {{ player.gmrn ? "" : "(游戏已暂停)" }}
    </p>
    
    <p align="center" class="textct" v-if="player.energy.gte(getsoftcap())">
      (由于能量超过{{ notation(getsoftcap()) }}，受软上限限制，变为{{ notation(v.softcap) }}次方根)
    </p>
    
    <p align="center" class="textct">
      一阶游戏速度(影响第0~3层内容)：×{{ notation(v.gamespd1) }}
    </p>
    
    <p align="center" class="textct" v-if="player.hasUnlockedPL4">
      二阶游戏速度(影响第4~7层内容)：×{{ notation(v.gamespd2) }}
    </p>
    
    <p align="center" class="ftsz4" v-if="player.energy.gte('1.797694e308') && !player.hasUnlockedPL1">
      仙境由于能量过多，坍塌了。
    </p>
    
    <p align="center" class="textct" style="color: #ff0000" v-if="player.hasUnlockedPL1">
      你有{{ notatint(player.PL1pts) }}扩散点,{{ notation(player.PL1energy) }}扩散能量,它以{{ notation(v.PL1engpow) }}的指数将1~8式风灵的效果乘以{{ notation(v.PL1engmul) }}倍。
    </p>
    
    <p align="center" class="textct" style="color: #ffff00" v-if="player.hasUnlockedPL2">
      你有{{ notatint(player.PL2pts) }}扪敤点,{{ notation(player.PL2energy) }}扪敤能量,它以{{ notation(v.PL2engpow) }}的指数将1~16式风灵的效果乘以{{ notation(v.PL2engmul) }}倍。
    </p>
    
    <p align="center" class="textct" style="color: #00ff00" v-if="player.hasUnlockedPL3">
      你有{{ notatint(player.PL3pts) }}扫敥点,{{ notation(player.PL3energy) }}扫敥能量,它以{{ notation(v.PL3engpow) }}的指数将1~24式风灵的效果乘以{{ notation(v.PL3engmul) }}倍。
    </p>
    
    <p align="center" class="textct" style="color: #00ffff" v-if="player.hasUnlockedPL4">
      你有{{ notatint(player.PL4pts) }}扬敦点,{{ notation(player.PL4energy) }}扬敦能量,它以{{ notation(v.PL4engpow) }}的指数将1~32式风灵的效果乘以{{ notation(v.PL4engmul) }}倍。
    </p>
    
    <p align="center" class="textct" style="color: #0000ff" v-if="player.hasUnlockedPL5">
      你有{{ notatint(player.PL5pts) }}扭敧点,{{ notation(player.PL5energy) }}扭敧能量,它以{{ notation(v.PL5engpow) }}的指数将1~40式风灵的效果乘以{{ notation(v.PL5engmul) }}倍。
    </p>
    
    <p align="center" class="textct" style="color: #ff00ff" v-if="player.hasUnlockedPL6">
      你有{{ notatint(player.PL6pts) }}扮敨点,{{ notation(player.PL6energy) }}扮敨能量,它以{{ notation(v.PL6engpow) }}的指数将1~48式风灵的效果乘以{{ notation(v.PL6engmul) }}倍。
    </p>
    
    <div class="btnrow" id="btnrowm">
      <button v-if="player.hasUnlockedPLw2" :class="{ slbutton: isCurrentRow('rowb'), button: !isCurrentRow('rowb') }" style="background-image: url('./assets/PLw2bg.bmp'); background-size: 34%; color: #000000" @click="handleChangeBt('rowb')">扸敲</button>
      <button v-if="player.hasUnlockedPLw" :class="{ slbutton: isCurrentRow('rowa'), button: !isCurrentRow('rowa') }" style="background-image: linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00); color: #000000" @click="handleChangeBt('rowa')">扰敪</button>  
      <button :class="{ slbutton: isCurrentRow('row1'), button: !isCurrentRow('row1') }" style="background-color: #ffffff; color: #000000" @click="handleChangeBt('row1')">风灵</button>
      <button v-if="player.hasUnlockedPL1" :class="{ slbutton: isCurrentRow('row2'), button: !isCurrentRow('row2') }" style="background-color: #ff0000; color: #ffffff" @click="handleChangeBt('row2')">扩散</button>
      <button v-if="player.hasUnlockedPL2" :class="{ slbutton: isCurrentRow('row3'), button: !isCurrentRow('row3') }" style="background-color: #ffff00; color: #000000" @click="handleChangeBt('row3')">扪敤</button>
      <button v-if="player.hasUnlockedPL3" :class="{ slbutton: isCurrentRow('row4'), button: !isCurrentRow('row4') }" style="background-color: #00ff00; color: #000000" @click="handleChangeBt('row4')">扫敥</button>
      <button v-if="player.hasUnlockedPL4" :class="{ slbutton: isCurrentRow('row5'), button: !isCurrentRow('row5') }" style="background-color: #00ffff; color: #000000" @click="handleChangeBt('row5')">扬敦</button>
      <button v-if="player.hasUnlockedPL5" :class="{ slbutton: isCurrentRow('row6'), button: !isCurrentRow('row6') }" style="background-color: #0000ff; color: #ffffff" @click="handleChangeBt('row6')">扭敧</button>
      <button v-if="player.hasUnlockedPL6" :class="{ slbutton: isCurrentRow('row7'), button: !isCurrentRow('row7') }" style="background-color: #ff00ff; color: #ffffff" @click="handleChangeBt('row7')">扮敨</button>
      <button v-if="player.hasUnlockedPL7" :class="{ slbutton: isCurrentRow('row8'), button: !isCurrentRow('row8') }" style="background-color: #000000; color: #ffffff" @click="handleChangeBt('row8')">扯敩</button>
      <button :class="{ slbutton: isCurrentRow('row9'), button: !isCurrentRow('row9') }" style="background-image: linear-gradient(to right,#808080,#ffffff,#808080); color: #000000" @click="handleChangeBt('row9')">统计</button>
      <button :class="{ slbutton: isCurrentRow('row0'), button: !isCurrentRow('row0') }" style="background-image: linear-gradient(to right,#7f7f7f,#000000,#7f7f7f); color: #ffffff" @click="handleChangeBt('row0')">杂项</button>  
    </div>
    
    <div class="btnrow" id="rowb" v-show="currentRow === 'rowb'">
      <button class="slbutton" style="background-image: url('./assets/PLw2bg.bmp'); background-size: 34%; color: #000000" @click="changePg('pb_1')">扸敲</button>
    </div>
    
    <div class="btnrow" id="rowa" v-show="currentRow === 'rowa'">
      <button class="slbutton" style="background-image: linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00); color: #000000" @click="changePg('pa_1')">扰敪升级/商店</button>
      <button class="button" style="background-image: linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00); color: #000000" @click="changePg('pa_2')">特权/惩罚/进化</button>
    </div>
    
    <div class="btnrow" id="row1" v-show="currentRow === 'row1'">
      <button :class="{ slbutton: isCurrentPage('p1_1'), button: !isCurrentPage('p1_1') }" style="background-color: #ffffff; color: #000000" @click="changePg('p1_1')">风灵</button>
      <button :class="{ slbutton: isCurrentPage('p1_2'), button: !isCurrentPage('p1_2') }" style="background-color: #ffffff; color: #000000" @click="changePg('p1_2')">元素生命</button>
      <button :class="{ slbutton: isCurrentPage('p1_3'), button: !isCurrentPage('p1_3') }" style="background-color: #ffffff; color: #000000" @click="changePg('p1_3')">升级</button>
    </div>
    
    <div class="btnrow" id="row2" v-show="currentRow === 'row2'">
      <button :class="{ slbutton: isCurrentPage('p2_1'), button: !isCurrentPage('p2_1') }" style="background-color: #ff0000; color: #ffffff" @click="changePg('p2_1')">扩散升级</button>
      <button :class="{ slbutton: isCurrentPage('p2_2'), button: !isCurrentPage('p2_2') }" style="background-color: #ff0000; color: #ffffff" @click="changePg('p2_2')">购买项</button>
      <button :class="{ slbutton: isCurrentPage('p2_3'), button: !isCurrentPage('p2_3') }" style="background-color: #ff0000; color: #ffffff" @click="changePg('p2_3')">挑战</button>
      <button :class="{ slbutton: isCurrentPage('p2_4'), button: !isCurrentPage('p2_4') }" style="background-color: #ff0000; color: #ffffff" @click="changePg('p2_4')">风之晶球</button>
    </div>
    
    <div class="btnrow" id="row3" v-show="currentRow === 'row3'">
      <button :class="{ slbutton: isCurrentPage('p3_1'), button: !isCurrentPage('p3_1') }" style="background-color: #ffff00; color: #000000" @click="changePg('p3_1')">里程碑</button>
      <button :class="{ slbutton: isCurrentPage('p3_2'), button: !isCurrentPage('p3_2') }" style="background-color: #ffff00; color: #000000" @click="changePg('p3_2')">元素</button>
      <button :class="{ slbutton: isCurrentPage('p3_3'), button: !isCurrentPage('p3_3') }" style="background-color: #ffff00; color: #000000" @click="changePg('p3_3')">研究</button>
      <button :class="{ slbutton: isCurrentPage('p3_4'), button: !isCurrentPage('p3_4') }" style="background-color: #ffff00; color: #000000" @click="changePg('p3_4')">炼金</button>
      <button :class="{ slbutton: isCurrentPage('p3_5'), button: !isCurrentPage('p3_5') }" style="background-color: #ffff00; color: #000000" @click="changePg('p3_5')">风压坍陷</button>
    </div>
    
    <div class="btnrow" id="row4" v-show="currentRow === 'row4'">
      <button :class="{ slbutton: isCurrentPage('p4_1'), button: !isCurrentPage('p4_1') }" style="background-color: #00ff00; color: #000000" @click="changePg('p4_1')">进度研究</button>
      <button :class="{ slbutton: isCurrentPage('p4_2'), button: !isCurrentPage('p4_2') }" style="background-color: #00ff00; color: #000000" @click="changePg('p4_2')">药剂</button>
      <button :class="{ slbutton: isCurrentPage('p4_3'), button: !isCurrentPage('p4_3') }" style="background-color: #00ff00; color: #000000" @click="changePg('p4_3')">种甜甜花</button>
      <button :class="{ slbutton: isCurrentPage('p4_4'), button: !isCurrentPage('p4_4') }" style="background-color: #00ff00; color: #000000" @click="changePg('p4_4')">吸引子</button>
      <button :class="{ slbutton: isCurrentPage('p4_5'), button: !isCurrentPage('p4_5') }" style="background-color: #00ff00; color: #000000" @click="changePg('p4_5')">催化剂</button>
      <button :class="{ slbutton: isCurrentPage('p4_6'), button: !isCurrentPage('p4_6') }" style="background-color: #00ff00; color: #000000" @click="changePg('p4_6')">转化</button>
    </div>
    
    <div class="btnrow" id="row5" v-show="currentRow === 'row5'">
      <button :class="{ slbutton: isCurrentPage('p5_1'), button: !isCurrentPage('p5_1') }" style="background-color: #00ffff; color: #000000" @click="changePg('p5_1')">目标</button>
      <button :class="{ slbutton: isCurrentPage('p5_2'), button: !isCurrentPage('p5_2') }" style="background-color: #00ffff; color: #000000" @click="changePg('p5_2')">碎片升级</button>
      <button :class="{ slbutton: isCurrentPage('p5_3'), button: !isCurrentPage('p5_3') }" style="background-color: #00ffff; color: #000000" @click="changePg('p5_3')">惊奇风盒</button>
      <button :class="{ slbutton: isCurrentPage('p5_4'), button: !isCurrentPage('p5_4') }" style="background-color: #00ffff; color: #000000" @click="changePg('p5_4')">试炼场</button>
      <button :class="{ slbutton: isCurrentPage('p5_5'), button: !isCurrentPage('p5_5') }" style="background-color: #00ffff; color: #000000" @click="changePg('p5_5')">协同</button>
      <button :class="{ slbutton: isCurrentPage('p5_6'), button: !isCurrentPage('p5_6') }" style="background-color: #00ffff; color: #000000" @click="changePg('p5_6')">刺影征标</button>
      <button :class="{ slbutton: isCurrentPage('p5_7'), button: !isCurrentPage('p5_7') }" style="background-color: #00ffff; color: #000000" @click="changePg('p5_7')">营养餐</button>
    </div>
    
    <div class="btnrow" id="row6" v-show="currentRow === 'row6'">
      <button :class="{ slbutton: isCurrentPage('p6_1'), button: !isCurrentPage('p6_1') }" style="background-color: #0000ff; color: #ffffff" @click="changePg('p6_1')">升级海</button>
      <button :class="{ slbutton: isCurrentPage('p6_2'), button: !isCurrentPage('p6_2') }" style="background-color: #0000ff; color: #ffffff" @click="changePg('p6_2')">时间扭敧</button>
      <button :class="{ slbutton: isCurrentPage('p6_3'), button: !isCurrentPage('p6_3') }" style="background-color: #0000ff; color: #ffffff" @click="changePg('p6_3')">光合作用</button>
      <button :class="{ slbutton: isCurrentPage('p6_4'), button: !isCurrentPage('p6_4') }" style="background-color: #0000ff; color: #ffffff" @click="changePg('p6_4')">太阳风</button>
      <button :class="{ slbutton: isCurrentPage('p6_5'), button: !isCurrentPage('p6_5') }" style="background-color: #0000ff; color: #ffffff" @click="changePg('p6_5')">生物炼金</button>
      <button :class="{ slbutton: isCurrentPage('p6_6'), button: !isCurrentPage('p6_6') }" style="background-color: #0000ff; color: #ffffff" @click="changePg('p6_6')">生态系统</button>
      <button :class="{ slbutton: isCurrentPage('p6_7'), button: !isCurrentPage('p6_7') }" style="background-color: #0000ff; color: #ffffff" @click="changePg('p6_7')">碱基</button>
      <button :class="{ slbutton: isCurrentPage('p6_8'), button: !isCurrentPage('p6_8') }" style="background-color: #0000ff; color: #ffffff" @click="changePg('p6_8')">CRISPR</button>
    </div>
    
    <div class="btnrow" id="row7" v-show="currentRow === 'row7'">
      <button :class="{ slbutton: isCurrentPage('p7_1'), button: !isCurrentPage('p7_1') }" style="background-color: #ff00ff; color: #ffffff" @click="changePg('p7_1')">扮敨重置</button>
      <button :class="{ slbutton: isCurrentPage('p7_2'), button: !isCurrentPage('p7_2') }" style="background-color: #ff00ff; color: #ffffff" @click="changePg('p7_2')">扮敨升级</button>
      <button :class="{ slbutton: isCurrentPage('p7_3'), button: !isCurrentPage('p7_3') }" style="background-color: #ff00ff; color: #ffffff" @click="changePg('p7_3')">扮敨挑战</button>
      <button :class="{ slbutton: isCurrentPage('p7_4'), button: !isCurrentPage('p7_4') }" style="background-color: #ff00ff; color: #ffffff" @click="changePg('p7_4')">扮敨拜谢</button>
      <button :class="{ slbutton: isCurrentPage('p7_5'), button: !isCurrentPage('p7_5') }" style="background-color: #ff00ff; color: #ffffff" @click="changePg('p7_5')">扮敨星星</button>
      <button :class="{ slbutton: isCurrentPage('p7_6'), button: !isCurrentPage('p7_6') }" style="background-color: #ff00ff; color: #ffffff" @click="changePg('p7_6')">扮敨商店</button>
      <button :class="{ slbutton: isCurrentPage('p7_7'), button: !isCurrentPage('p7_7') }" style="background-color: #ff00ff; color: #ffffff" @click="changePg('p7_7')">扮敨动物</button>
      <button :class="{ slbutton: isCurrentPage('p7_8'), button: !isCurrentPage('p7_8') }" style="background-color: #ff00ff; color: #ffffff" @click="changePg('p7_8')">扮敨膨胀</button>
      <button :class="{ slbutton: isCurrentPage('p7_9'), button: !isCurrentPage('p7_9') }" style="background-color: #ff00ff; color: #ffffff" @click="changePg('p7_9')">扮敨试炼</button>
    </div>
    
    <div class="btnrow" id="row8" v-show="currentRow === 'row8'">
      <button :class="{ slbutton: isCurrentPage('p8_1'), button: !isCurrentPage('p8_1') }" style="background-color: #000000; color: #ffffff" @click="changePg('p8_1')">扯敩重置</button>
      <button :class="{ slbutton: isCurrentPage('p8_2'), button: !isCurrentPage('p8_2') }" style="background-color: #000000; color: #ffffff" @click="changePg('p8_2')">扯敩升级</button>
      <button :class="{ slbutton: isCurrentPage('p8_3'), button: !isCurrentPage('p8_3') }" style="background-color: #000000; color: #ffffff" @click="changePg('p8_3')">扯敩挑战</button>
      <button :class="{ slbutton: isCurrentPage('p8_4'), button: !isCurrentPage('p8_4') }" style="background-color: #000000; color: #ffffff" @click="changePg('p8_4')">扯敩拜谢</button>
      <button :class="{ slbutton: isCurrentPage('p8_5'), button: !isCurrentPage('p8_5') }" style="background-color: #000000; color: #ffffff" @click="changePg('p8_5')">扯敩星星</button>
      <button :class="{ slbutton: isCurrentPage('p8_6'), button: !isCurrentPage('p8_6') }" style="background-color: #000000; color: #ffffff" @click="changePg('p8_6')">扯敩商店</button>
      <button :class="{ slbutton: isCurrentPage('p8_7'), button: !isCurrentPage('p8_7') }" style="background-color: #000000; color: #ffffff" @click="changePg('p8_7')">扯敩动物</button>
      <button :class="{ slbutton: isCurrentPage('p8_8'), button: !isCurrentPage('p8_8') }" style="background-color: #000000; color: #ffffff" @click="changePg('p8_8')">扯敩膨胀</button>
      <button :class="{ slbutton: isCurrentPage('p8_9'), button: !isCurrentPage('p8_9') }" style="background-color: #000000; color: #ffffff" @click="changePg('p8_9')">扯敩试炼</button>
      <button :class="{ slbutton: isCurrentPage('p8_0'), button: !isCurrentPage('p8_0') }" style="background-color: #000000; color: #ffffff" @click="changePg('p8_0')">扯敩遗物</button>
    </div>
    
    <div class="btnrow" id="row9" v-show="currentRow === 'row9'">
      <button :class="{ slbutton: isCurrentPage('p9_1'), button: !isCurrentPage('p9_1') }" @click="changePg('p9_1')">全局</button>
      <button :class="{ slbutton: isCurrentPage('p9_2'), button: !isCurrentPage('p9_2') }" @click="changePg('p9_2')">元素生命</button>
      <button :class="{ slbutton: isCurrentPage('p9_3'), button: !isCurrentPage('p9_3') }" @click="changePg('p9_3')">软上限</button>
      <button :class="{ slbutton: isCurrentPage('p9_4'), button: !isCurrentPage('p9_4') }" @click="changePg('p9_4')">折算</button>
    </div>
    
    <div class="btnrow" id="row0" v-show="currentRow === 'row0'">
      <button :class="{ slbutton: isCurrentPage('p0_1'), button: !isCurrentPage('p0_1') }" @click="changePg('p0_1')">存档</button>
      <button :class="{ slbutton: isCurrentPage('p0_2'), button: !isCurrentPage('p0_2') }" @click="changePg('p0_2')">选项</button>
      <button :class="{ slbutton: isCurrentPage('p0_3'), button: !isCurrentPage('p0_3') }" @click="changePg('p0_3')">关于</button>
      <button :class="{ slbutton: isCurrentPage('p0_4'), button: !isCurrentPage('p0_4') }" @click="changePg('p0_4')">成就</button>
      <button :class="{ slbutton: isCurrentPage('p0_5'), button: !isCurrentPage('p0_5') }" @click="changePg('p0_5')">概要</button>
    </div>
    
    <PageContent :currentPage="v.currentPage" :player="player" :v="v" />
    <NotificationToast />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useGameState } from './composables/useGameState'
import PageContent from './components/PageContent.vue'
import NotificationToast from './components/NotificationToast.vue'

const {
  player,
  v,
  notation,
  notatint,
  epsdisp,
  getsoftcap,
  changePg,
  PL1reset,
  PL2reset,
  PL3reset,
  PL4reset,
  PL5reset,
  PL6reset,
  //PL7reset,
  //PLwreset,
  startGameLoop,
  startNewsTicker,
} = useGameState()

const currentRow = ref('row1')

const rowToFirstPage = {
  'row1': 'p1_1',
  'row2': 'p2_1',
  'row3': 'p3_1',
  'row4': 'p4_1',
  'row5': 'p5_1',
  'row6': 'p6_1',
  'row7': 'p7_1',
  'row8': 'p8_1',
  'row9': 'p9_1',
  'row0': 'p0_1',
  'rowa': 'pa_1',
  'rowb': 'pb_1',
}

function handleChangeBt(row) {
  currentRow.value = row
  v.currentPage = rowToFirstPage[row] || 'p1_1'
}

function isCurrentRow(row) {
  return currentRow.value === row
}

function isCurrentPage(pageName) {
  return v.currentPage === pageName
}

onMounted(() => {
  startGameLoop()
  startNewsTicker()
})
</script>

<style scoped>
</style>
