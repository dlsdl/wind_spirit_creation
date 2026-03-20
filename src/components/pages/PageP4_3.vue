<template>
  <div id="p4_3">
    <div id="ztth" v-if="player.resa12.gte(1)">
      <div align="center" class="ftsz2" style="color:#00ff00">生物，就是炼金术的未来！欢迎您来研究甜甜花。</div>
      <div align="center" class="ftsz2">你有{{notatint(player.tthamnt)}}个{{notatint(player.tthsize)}}倍大甜甜花，{{notatint(player.tthseed)}}个{{notatint(player.tthsize)}}倍大甜甜花种子，最大倍数为{{notatint(player.tthimpr)}}，</div>
      <div align="center" class="ftsz2">使1~32式风灵乘数×{{notation(v.tthmul)}}，使1~32式风灵指数×{{notation(v.tthpow)}}</div>
      <div class="probarcon">
        <div class="probar" :style="{width:getprow2()}"></div>
      </div>
      <div align="center" class="ftsz2">甜甜花生长进度：{{notation(player.tthgrow)}}/{{notation(v.tthgreq)}}({{getprow2()}})</div>
      <div align="center" class="ftsz2" v-if="player.resa15.gte(1)">扫敥能量超过6e315652的部分使甜甜花生长速度×{{notation(player.PL3energy.max(1).log(2).div(1048576).max(1))}}</div>
      <table align="center">
        <tbody>
          <tr>
            <td></td>
            <td><button class="wscbt1bl" @click="subtthtier()">重置甜甜花数量，使甜甜花倍数-1</button></td>
            <td><button class="wscbt1bl" @click="addtthtier()">重置甜甜花数量，使甜甜花倍数+1</button></td>
            <td></td>
          </tr>
          <tr>
            <td><button class="wscbt1bl" @click="atpltsw()" v-if="player.tthatunl[0]">自动种植：{{player.tthatact[0]?"开":"关"}}</button></td>
            <td><button class="wscbt1bl" @click="atharsw()" v-if="player.tthatunl[1]">自动收获：{{player.tthatact[1]?"开":"关"}}</button></td>
            <td><button class="wscbt1bl" @click="atimpsw()" v-if="player.tthatunl[2]">自动改良：{{player.tthatact[2]?"开":"关"}}</button></td>
            <td><button class="wscbt1bl" @click="atbtusw()" v-if="player.tthatunl[3]|player.tthatunl[4]">自动升级：{{player.tthatact[3]?"开":"关"}}</button></td>
          </tr>
        </tbody>
      </table>
      <table align="center">
        <tbody>
          <tr>
            <td><button class="tthupg" @click="plt()">种植甜甜花</button></td>
            <td><button class="tthupg" @click="har()">收获甜甜花</button></td>
            <td><button class="tthupg" @click="imp()">改良甜甜花使它的倍数上限增加1，需要{{notatint(v.tthimpc)}}个{{notatint(player.tthimpr)}}倍大甜甜花</button></td>
          </tr>
          <tr>
            <td></td>
            <td><div align="center" class="ftsz2">将甜甜花转化为种子、基因、糖分</div></td>
            <td></td>
          </tr>
          <tr>
            <td><button class="tthupg" @click="toseed()">将甜甜花转化为种子(+{{notation(v.tthseedpd)}})</button></td>
            <td><button class="tthupg" @click="togene()">研究甜甜花获得基因(+{{notation(v.tthgenepd)}})</button></td>
            <td><button class="tthupg" @click="tosucr()">提炼甜甜花的糖分(+{{notation(v.tthsucrpd)}})</button></td>
          </tr>
          <tr>
            <td></td>
            <td><div align="center" class="ftsz2">你有{{notatint(player.tthseed)}}种子</div></td>
            <td></td>
          </tr>
          <tr>
            <td><button class="tthupg" @click="ulatplt()">解锁自动种植<br />花费：1000种子</button></td>
            <td><button class="tthupg" @click="ulathar()">解锁自动收获<br />花费：1e6种子</button></td>
            <td><button class="tthupg" @click="ulatimp()">解锁自动改良<br />花费：1e9种子</button></td>
          </tr>
          <tr>
            <td></td>
            <td><div align="center" class="ftsz2">你有{{notatint(player.tthgene)}}基因</div></td>
            <td></td>
          </tr>
          <tr>
            <td><button class="tthupg" @click="ulatupg1()">解锁自动第二行升级<br />花费：1e12基因</button></td>
            <td><button class="tthupg" @click="buytthupg(1)">生长的速度乘以2<br />花费：{{notation(v.tthuc01)}}基因<br />当前：×{{notation(v.tthue01)}}</button></td>
            <td><button class="tthupg" @click="buytthupg(2)">获得的种子乘以2<br />花费：{{notation(v.tthuc02)}}基因<br />当前：×{{notation(v.tthue02)}}</button></td>
          </tr>
          <tr>
            <td></td>
            <td><div align="center" class="ftsz2">你有{{notatint(player.tthsucr)}}糖分</div></td>
            <td></td>
          </tr>
          <tr>
            <td><button class="tthupg" @click="ulatupg2()">解锁自动第三行升级<br />花费：1e15糖分</button></td>
            <td><button class="tthupg" @click="buytthupg(3)">每一倍大甜甜花的生长需求乘数÷1.01<br />花费：{{notation(v.tthuc03)}}糖分<br />当前：÷{{notation(v.tthue03)}}</button></td>
            <td><button class="tthupg" @click="buytthupg(4)">每一倍大甜甜花的种子转化乘数×1.01<br />花费：{{notation(v.tthuc04)}}糖分<br />当前：×{{notation(v.tthue04)}}</button></td>
          </tr>
        </tbody>
      </table>
      <div align="center" class="ftsz2">到达8倍大甜甜花，可以进行声望，重置甜甜花及其升级，获得甜甜花香味特化版</div>
      <div class="btnrow">
        <div><button class="tthupg" @click="tthpre()" align="center">声望获得{{notation(v.tthprespd)}}特殊甜甜花，+{{notation(v.tthprempd)}}声望速度倍率</button></div>
      </div>
      <div align="center" class="ftsz2">你有{{notation(player.tthpres)}}特殊甜甜花，你有{{notation(player.tthprem)}}声望速度倍率</div>
      <table align="center">
        <tbody>
          <tr>
            <td><button :class="player.tthpu[0]?'tthupg2y':'tthupg2'" @click="buytthpu(1)">贰伍式风灵可以生产贰肆式风灵<br />花费：1特殊甜甜花</button></td>
            <td><button :class="player.tthpu[1]?'tthupg2y':'tthupg2'" @click="buytthpu(2)">每秒自动获得100%判定中的扪敤点，直到扪敤点等于判定中的扪敤点为止<br />花费：4特殊甜甜花</button></td>
            <td><button :class="player.tthpu[2]?'tthupg2y':'tthupg2'" @click="buytthpu(3)">解锁药剂第一行的最后一个效果（基于扫敥时间增加25~32式风灵乘数）<br />花费：64特殊甜甜花</button></td>
            <td><button :class="player.tthpu[3]?'tthupg2y':'tthupg2'" @click="buytthpu(4)">解锁"吸引子"选项卡<br />花费：4096特殊甜甜花</button></td>
          </tr>
          <tr>
            <td><button :class="player.tthpu1.gte(10)?'tthupg2y':'tthupg2'" @click="buytthpu2(1)">每秒自动获得(等级²)%种子({{notation(player.tthpu1)}}/10)<br />花费：{{notation(v.tthpuc1)}}特殊甜甜花</button></td>
            <td><button :class="player.tthpu2.gte(10)?'tthupg2y':'tthupg2'" @click="buytthpu2(2)">每秒自动获得(等级²)%基因({{notation(player.tthpu2)}}/10)<br />花费：{{notation(v.tthpuc2)}}特殊甜甜花</button></td>
            <td><button :class="player.tthpu3.gte(10)?'tthupg2y':'tthupg2'" @click="buytthpu2(3)">每秒自动获得(等级²)%糖分({{notation(player.tthpu3)}}/10)<br />花费：{{notation(v.tthpuc3)}}特殊甜甜花</button></td>
            <td><button :class="player.tthpu4.gte(10)?'tthupg2y':'tthupg2'" @click="buytthpu2(4)">8n+1生产8n式风灵的指数乘以对应能量效果指数的0.1次方({{notation(player.tthpu4)}}/10)<br />花费：{{notation(v.tthpuc4)}}特殊甜甜花</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else align="center" class="ftsz2">需要完成进度研究12</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, getprow2, subtthtier, addtthtier, atpltsw, atharsw, atimpsw, atbtusw, plt, har, imp, toseed, togene, tosucr, ulatplt, ulathar, ulatimp, ulatupg1, ulatupg2, buytthupg, tthpre, buytthpu, buytthpu2 } = useGameState()
</script>