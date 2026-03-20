<template>
  <div id="p3_3">
    <div id="stdtree" v-if="player.energyttl.gte('e1e6')">
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block">
          你有{{ notatint(player.thrm) }}烧瓶（{{ notatint(player.thrmttl) }}总计的烧瓶）,回退研究将进行扪敤重置
        </div>
        <button class="ltbutton" @click="rstd()">回退研究</button>
        <button class="ltbutton" @click="rstd2()">回退至6行</button>
        <button class="ltbutton" @click="rstd3()">回退至12行</button>
      </div>
      <div align="center" class="ftsz2">获得第二行及之后的研究需要获得至少一个它上方的研究</div>
      <div class="btnrow">
        <button class="xxButton" @click="buythr01()" style="background-color: #ffffff">
          用能量获得1烧瓶<br />花费能量：<br />{{ notatint(v.thrmc01) }}
        </button>
        <button class="xxButton" @click="buythr02()" style="background-color: #ff0000">
          用扩散点获得1烧瓶<br />花费扩散点：<br />{{ notatint(v.thrmc02) }}
        </button>
        <button class="xxButton" @click="buythr03()" style="background-color: #ffff00">
          用扪敤点获得1烧瓶<br />花费扪敤点：<br />{{ notatint(v.thrmc03) }}
        </button>
        <button class="xxButton" @click="buymaxthr()" style="background-color: #aaaaaa">
          &nbsp;<br />最大获得烧瓶<br />&nbsp;
        </button>
      </div>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.std[0] ? 'stdyes' : 'stdno'" @click="buystd(0)">
                风之微粒效果的乘数变成指数，但公式变为log2(log2(x))^指数<br />需要：10烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[1] ? 'stdyes' : 'stdno'" @click="buystd(1)">
                风灵基础值的指数增加0.05<br />需要：4烧瓶
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.std[2] ? 'stdyes' : 'stdno'" @click="buystd(2)">
                扩散能量的效果指数增加1<br />需要：4烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[3] ? 'stdyes' : 'stdno'" @click="buystd(3)">
                扪敤能量的效果指数增加1<br />需要：6烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[4] ? 'stdyes' : 'stdno'" @click="buystd(4)">
                25式风单元以降低的效果乘以9~16式风灵<br />当前：x{{ notation(player.tier01.mul(v.DBpower).pwb(2).root(16).max(1)) }}<br />需要：6烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[5] ? 'stdyes' : 'stdno'" @click="buystd(5)">
                25式风单元以降低的效果乘以17~24式风灵<br />当前：x{{ notation(player.tier01.mul(v.DBpower).pwb(2).root(256).max(1)) }}<br />需要：9烧瓶
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.std[6] ? 'stdyes' : 'stdno'" @click="buystd(6)">
                在元素生命选项卡中解锁"风四倍系统"<br />需要：12烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[7] ? 'stdyes' : 'stdno'" @click="buystd(7)">
                壹柒式风灵可以生产壹陆式风灵<br />需要：13烧瓶
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.std[8] ? 'stdyes' : 'stdno'" @click="buystd(8)">
                将1~8式风灵乘数乘以log2(扪敤能量)^4096 当前：x{{ notation(player.PL2energy.max(1).log(2).pow(4096)) }}<br />需要：16烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[9] ? 'stdyes' : 'stdno'" @click="buystd(9)">
                将9~16式风灵乘数乘以log2(扪敤能量)^256 当前：x{{ notation(player.PL2energy.max(1).log(2).pow(256)) }}<br />需要：20烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[10] ? 'stdyes' : 'stdno'" @click="buystd(10)">
                将17~24式风灵乘数乘以log2(扪敤能量)^16<br />当前：x{{ notation(player.PL2energy.max(1).log(2).pow(16)) }}<br />需要：24烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[11] ? 'stdyes' : 'stdno'" @click="buystd(11)">
                基于扩散时间提高1~8式风灵乘数 当前：x{{ notation(player.PL1sec.pow(0.25).pwb("1.189e4932").min("e1.6e13")) }}<br />需要：20烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[12] ? 'stdyes' : 'stdno'" @click="buystd(12)">
                基于扪敤时间提高9~16式风灵乘数 当前：x{{ notation(player.PL2sec.pow(0.25).pwb("1.797e308").min("e1e12")) }}<br />需要：25烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[13] ? 'stdyes' : 'stdno'" @click="buystd(13)">
                将17~24式风灵乘数乘以log2(扩散能量)^16<br />当前：x{{ notation(player.PL1energy.max(1).log(2).pow(16)) }}<br />需要：30烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[14] ? 'stdyes' : 'stdno'" @click="buystd(14)">
                扩散次数乘以风灵基础值^1/16，并提高1~8式风灵乘数 当前：x{{ notation(player.PL1tms.max(1).pow(1024)) }}<br />需要：24烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[15] ? 'stdyes' : 'stdno'" @click="buystd(15)">
                扪敤次数乘以扩散次数^1/16，并提高9~16式风灵乘数 当前：x{{ notation(player.PL2tms.max(1).pow(256)) }}<br />需要：30烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[16] ? 'stdyes' : 'stdno'" @click="buystd(16)">
                将17~24式风灵乘数乘以log2(能量)^16<br />当前：x{{ notation(player.energy.max(1).log(2).pow(16)) }}<br />需要：36烧瓶
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.std[17] ? 'stdyes' : 'stdno'" @click="buystd(17)">
                解锁进阶挑战5~8<br />需要：35烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[18] ? 'stdyes' : 'stdno'" @click="buystd(18)">
                每秒自动获得100%判定中的扩散点，直到扩散点等于判定中的扩散点为止<br />需要：42烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[19] ? 'stdyes' : 'stdno'" @click="buystd(19)">
                解锁炼金选项卡<br />需要：54烧瓶
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.std[20] ? 'stdyes' : 'stdno'" @click="buystd(20)">
                基于炼金生命1增加1~8式风灵的指数<br />当前：+{{ notation(player.alch01.div(1e6).min(0.01)) }}<br />需要：3600烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[21] ? 'stdyes' : 'stdno'" @click="buystd(21)">
                基于炼金生命1增加25式风单元效果<br />当前：+{{ notation(player.alch01.div(100).min(100)) }}%<br />需要：4800烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[22] ? 'stdyes' : 'stdno'" @click="buystd(22)">
                基于炼金生命2增加1~8式风灵的指数<br />当前：+{{ notation(player.alch02.div(1e6).min(0.01)) }}<br />需要：6000烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[23] ? 'stdyes' : 'stdno'" @click="buystd(23)">
                基于炼金生命2增加12式风模块效果<br />当前：+{{ notation(player.alch02.div(200).min(50)) }}%<br />需要：7200烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[24] ? 'stdyes' : 'stdno'" @click="buystd(24)">
                基于炼金生命3增加9~16式风灵的指数<br />当前：+{{ notation(player.alch03.div(1e6).min(0.01)) }}<br />需要：4800烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[25] ? 'stdyes' : 'stdno'" @click="buystd(25)">
                基于炼金生命3增加25式风单元效果<br />当前：+{{ notation(player.alch03.div(100).min(100)) }}%<br />需要：6400烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[26] ? 'stdyes' : 'stdno'" @click="buystd(26)">
                基于炼金生命4增加9~16式风灵的指数<br />当前：+{{ notation(player.alch04.div(1e6).min(0.01)) }}<br />需要：8000烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[27] ? 'stdyes' : 'stdno'" @click="buystd(27)">
                基于炼金生命4增加12式风模块效果<br />当前：+{{ notation(player.alch04.div(200).min(50)) }}%<br />需要：9600烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[28] ? 'stdyes' : 'stdno'" @click="buystd(28)">
                基于炼金生命5增加17~24式风灵的指数<br />当前：+{{ notation(player.alch05.div(1e6).min(0.01)) }}<br />需要：6000烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[29] ? 'stdyes' : 'stdno'" @click="buystd(29)">
                基于炼金生命5增加25式风单元效果<br />当前：+{{ notation(player.alch05.div(100).min(100)) }}%<br />需要：8000烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[30] ? 'stdyes' : 'stdno'" @click="buystd(30)">
                基于炼金生命6增加17~24式风灵的指数<br />当前：+{{ notation(player.alch06.div(1e6).min(0.01)) }}<br />需要：10000烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[31] ? 'stdyes' : 'stdno'" @click="buystd(31)">
                基于炼金生命6增加12式风模块效果<br />当前：+{{ notation(player.alch06.div(200).min(50)) }}%<br />需要：12000烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[32] ? 'stdyes' : 'stdno'" @click="buystd(32)">
                火元素能量提升1~8式风灵的乘数<br />当前：x{{ notation(player.elmten01.pow(4096)) }}<br />需要：7200烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[33] ? 'stdyes' : 'stdno'" @click="buystd(33)">
                水元素能量提升9~16式风灵的乘数<br />当前：x{{ notation(player.elmten02.pow(256)) }}<br />需要：10800烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[34] ? 'stdyes' : 'stdno'" @click="buystd(34)">
                雷元素能量提升17~24式风灵的乘数<br />当前：x{{ notation(player.elmten03.pow(16)) }}<br />需要：12600烧瓶
              </button>
            </td>
            <td>
              <button :class="player.std[35] ? 'stdyes' : 'stdno'" @click="buystd(35)">
                冰元素能量提升风之微粒获取的乘数<br />当前：x{{ notation(player.elmten04.max(2).log(2).pow(4)) }}<br />需要：14400烧瓶
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.std[36] ? 'stdyes' : 'stdno'" id="std37" @click="buystd(36)">
                在风压坍陷中，1-16式风灵乘数乘以总计烧瓶数量（不受log2乘数影响）<br />需要：250000烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[37] ? 'stdyes' : 'stdno'" id="std38" @click="buystd(37)">
                在风压坍陷中，1-16式风灵乘数乘以总计烧瓶数量（不受log2乘数影响），总计乘以^2<br />需要：500000烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[38] ? 'stdyes' : 'stdno'" id="std39" @click="buystd(38)">
                在风压坍陷中，1-16式风灵乘数乘以总计烧瓶数量（不受log2乘数影响），总计乘以^3<br />需要：750000烧瓶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.std[39] ? 'stdyes' : 'stdno'" id="std40" @click="buystd(39)">
                在风压坍陷中，1-16式风灵乘数乘以总计烧瓶数量（不受log2乘数影响），总计乘以^4<br />需要：1e6烧瓶
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else align="center" class="ftsz2">需要到达e1.000e6总计能量</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, buythr01, buythr02, buythr03, buymaxthr, buystd, rstd, rstd2, rstd3 } = useGameState()
</script>