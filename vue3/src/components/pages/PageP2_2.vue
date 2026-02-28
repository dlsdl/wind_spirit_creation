<template>
  <div id="p2_2">
    <div id="PL1bab" v-if="player.PL1upg[11]">
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block">每购买一次购买项，这一列的购买项价格都会提高，点击按钮重置购买项及其价格，返还资源，但进行扩散重置。</div>
        <button class="ltbutton" @click="resetBab">回退</button>
      </div>
      <table align="center">
        <tr>
          <td><button class="PL1bab">你有{{ notation(player.alef) }}א阿列夫א<br />(+{{ notation(v.alefps) }}/s，基于能量^1/10240)</button></td>
          <td><button class="PL1bab">你有{{ notation(player.beth) }}ב贝特ב<br />(+{{ notation(v.bethps) }}/s，基于扩散能量^1/160)</button></td>
          <td><button class="PL1bab">你有{{ notation(player.giml) }}ג基末尔ג<br />(+{{ notation(v.gimlps) }}/s，基于扩散点^1/10)</button></td>
        </tr>
        <tr>
          <td><button :class="player.PL1bab01.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(1)">使25式风单元的效果×2（{{ notatint(player.PL1bab01) }}/5）<br />花费：{{ notation(v.PL1babc1) }}阿列夫</button></td>
          <td><button :class="player.PL1bab02.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(2)">使25式风单元的效果×2（{{ notatint(player.PL1bab02) }}/5）<br />花费：{{ notation(v.PL1babc2) }}贝特</button></td>
          <td><button :class="player.PL1bab03.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(3)">使25式风单元的效果×2（{{ notatint(player.PL1bab03) }}/5）<br />花费：{{ notation(v.PL1babc3) }}基末尔</button></td>
        </tr>
        <tr>
          <td><button :class="player.PL1bab04.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(4)">使12式风模块的效果+20%（{{ notatint(player.PL1bab04) }}/5）<br />花费：{{ notation(v.PL1babc1) }}阿列夫</button></td>
          <td><button :class="player.PL1bab05.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(5)">使12式风模块的效果+20%（{{ notatint(player.PL1bab05) }}/5）<br />花费：{{ notation(v.PL1babc2) }}贝特</button></td>
          <td><button :class="player.PL1bab06.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(6)">使12式风模块的效果+20%（{{ notatint(player.PL1bab06) }}/5）<br />花费：{{ notation(v.PL1babc3) }}基末尔</button></td>
        </tr>
        <tr>
          <td><button :class="player.PL1bab07.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(7)">使扩散能量指数增加0.1（{{ notatint(player.PL1bab07) }}/5）<br />花费：{{ notation(v.PL1babc1) }}阿列夫</button></td>
          <td><button :class="player.PL1bab08.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(8)">使扩散能量指数增加0.1（{{ notatint(player.PL1bab08) }}/5）<br />花费：{{ notation(v.PL1babc2) }}贝特</button></td>
          <td><button :class="player.PL1bab09.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(9)">使扩散能量指数增加0.1（{{ notatint(player.PL1bab09) }}/5）<br />花费：{{ notation(v.PL1babc3) }}基末尔</button></td>
        </tr>
        <tr>
          <td><button :class="player.PL1bab10.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(10)">基于阿列夫增益1~8式风灵乘数（{{ notatint(player.PL1bab10) }}/5）<br />×{{ notation(player.alef.log(2).max(1).pow(player.PL1bab10.mul(16))) }}<br />花费：{{ notation(v.PL1babc1) }}阿列夫</button></td>
          <td><button :class="player.PL1bab11.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(11)">基于贝特增益扩散次数（{{ notatint(player.PL1bab11) }}/5）<br />×{{ notation(player.beth.log(2).max(1).pow(player.PL1bab11)) }}<br />花费：{{ notation(v.PL1babc2) }}贝特</button></td>
          <td><button :class="player.PL1bab12.gte(5) ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1bab(12)">基于基末尔增益9~16式风灵乘数（{{ notatint(player.PL1bab12) }}/5）<br />×{{ notation(player.giml.log(2).max(1).pow(player.PL1bab12)) }}<br />花费：{{ notation(v.PL1babc3) }}基末尔</button></td>
        </tr>
      </table>
    </div>
    <div v-else>
      <div align="center" class="ftsz2">需要购买扩散升级3</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, buyPL1bab, resetBab } = useGameState()
</script>