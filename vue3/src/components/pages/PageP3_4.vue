<template>
  <div id="p3_4">
    <div id="alch" v-if="player.std[19]">
      <div align="center" class="ftsz2">点击炼金生命进行炼金，再次点击取消<br /></div>
      <div align="center" class="ftsz2">
        你有{{ notatint(player.alcspd) }}实验装置，它将炼金生命转化数量乘以{{ notation(v.alchmu) }}<br />
      </div>
      <div class="btnrow">
        <button class="xxButton" @click="buyalc()" style="background-color: #ffffff">
          获得实验装置<br />花费{{ notatint(v.alcost) }}扪敤能量
        </button>
      </div>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.alca[0] ? 'alcyes' : 'alcno'" @click="alchsw(1)">
                炼金生命1<br />数量：{{ notation(player.alch01) }}<br />合成不需要任何东西
              </button>
            </td>
            <td>
              <button :class="player.alca[1] ? 'alcyes' : 'alcno'" @click="alchsw(2)">
                炼金生命2<br />数量：{{ notation(player.alch02) }}<br />合成1个需要4炼金生命1
              </button>
            </td>
            <td>
              <button :class="player.alca[2] ? 'alcyes' : 'alcno'" @click="alchsw(3)">
                炼金生命3<br />数量：{{ notation(player.alch03) }}<br />合成1个需要4炼金生命2
              </button>
            </td>
            <td>
              <button :class="player.alca[3] ? 'alcyes' : 'alcno'" @click="alchsw(4)">
                炼金生命4<br />数量：{{ notation(player.alch04) }}<br />合成1个需要4炼金生命3
              </button>
            </td>
            <td>
              <button :class="player.alca[4] ? 'alcyes' : 'alcno'" @click="alchsw(5)">
                炼金生命5<br />数量：{{ notation(player.alch05) }}<br />合成1个需要4炼金生命4
              </button>
            </td>
            <td>
              <button :class="player.alca[5] ? 'alcyes' : 'alcno'" @click="alchsw(6)">
                炼金生命6<br />数量：{{ notation(player.alch06) }}<br />合成1个需要4炼金生命5
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.alcu01.gte(10) ? 'alcyes' : 'alcno'" @click="buyalcu(1)">
                每级使合成时额外获得5%高一级的产物({{ notatint(player.alcu01) }}/10)<br />花费：{{ notation(v.alcuc01) }}炼金生命1
              </button>
            </td>
            <td>
              <button :class="player.alcu02.gte(10) ? 'alcyes' : 'alcno'" @click="buyalcu(2)">
                每级使合成时返还2.5%低一级的产物({{ notatint(player.alcu02) }}/10)<br />花费：{{ notation(v.alcuc02) }}炼金生命2
              </button>
            </td>
            <td>
              <button :class="player.alcu03.gte(10) ? 'alcyes' : 'alcno'" @click="buyalcu(3)">
                1~8式风灵指数增加0.002({{ notatint(player.alcu03) }}/10)<br />花费：{{ notation(v.alcuc03) }}炼金生命3
              </button>
            </td>
            <td>
              <button :class="player.alcu04.gte(10) ? 'alcyes' : 'alcno'" @click="buyalcu(4)">
                9~16式风灵指数增加0.002({{ notatint(player.alcu04) }}/10)<br />花费：{{ notation(v.alcuc04) }}炼金生命4
              </button>
            </td>
            <td>
              <button :class="player.alcu05.gte(10) ? 'alcyes' : 'alcno'" @click="buyalcu(5)">
                17~24式风灵指数增加0.002({{ notatint(player.alcu05) }}/10)<br />花费：{{ notation(v.alcuc05) }}炼金生命5
              </button>
            </td>
            <td>
              <button :class="player.alcu06.gte(10) ? 'alcyes' : 'alcno'" @click="buyalcu(6)">
                风灵基础值指数增加0.005({{ notatint(player.alcu06) }}/10)<br />花费：{{ notation(v.alcuc06) }}炼金生命6
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.alcu[0] ? 'alcyes' : 'alcno'" @click="buyalcu(7)">
                解锁自动获得风四倍系统，它不再重置任何东西<br />花费：128炼金生命1
              </button>
            </td>
            <td>
              <button :class="player.alcu[1] ? 'alcyes' : 'alcno'" @click="buyalcu(8)">
                每秒自动获得扩散重置时能获得的扩散次数<br />花费：256炼金生命2
              </button>
            </td>
            <td>
              <button :class="player.alcu[2] ? 'alcyes' : 'alcno'" @click="buyalcu(9)">
                元素能量每次分配乘数将基于累计的风元素数量<br />花费：512炼金生命3
              </button>
            </td>
            <td>
              <button :class="player.alcu[3] ? 'alcyes' : 'alcno'" @click="buyalcu(10)">
                再次使扩散能量转换指数增加1<br />花费：1024炼金生命4
              </button>
            </td>
            <td>
              <button :class="player.alcu[4] ? 'alcyes' : 'alcno'" @click="buyalcu(11)">
                再次使扪敤能量转换指数增加1<br />花费：2048炼金生命5
              </button>
            </td>
            <td>
              <button :class="player.alcu[5] ? 'alcyes' : 'alcno'" @click="buyalcu(12)">
                自动最大化获得烧瓶且不消耗任何东西<br />花费：4096炼金生命6
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else align="center" class="ftsz2">需要购买第20个研究</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, buyalc, alchsw, buyalcu } = useGameState()
</script>