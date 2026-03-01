<template>
  <div id="p2_1">
    <br />
    <table align="center">
      <tbody>
        <tr>
          <td><button :class="player.PL1upg[0] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(0)">解锁自动作成1~8式风灵<br />花费：4扩散点</button></td>
          <td><button :class="player.PL1upg[1] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(1)">解锁自动获得风单元和风模块<br />花费：8扩散点</button></td>
          <td><button :class="player.PL1upg[2] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(2)">解锁自动购买风灵升级1和2<br />花费：12扩散点</button></td>
          <td><button :class="player.PL1upg[3] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(3)">解锁普通挑战<br />花费：16扩散点</button></td>
        </tr>
        <tr>
          <td><button :class="player.PL1upg[4] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(4)">基于log2扩散能量^2乘以9~16式风灵乘数<br />当前：x{{ notation(v.PL1ue5) }}<br />花费：32扩散点</button></td>
          <td><button :class="player.PL1upg[5] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(5)">基于总计扩散点乘以9~16式风灵乘数(软上限x65536)<br />当前：x{{ notation(v.PL1ue6) }}<br />花费：64扩散点</button></td>
          <td><button :class="player.PL1upg[6] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(6)">基于扩散次数^4乘以9~16式风灵乘数(软上限x65536)<br />当前：x{{ notation(v.PL1ue7) }}<br />花费：128扩散点</button></td>
          <td><button :class="player.PL1upg[7] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(7)">基于log2能量^1.5乘以9~16式风灵乘数<br />当前：x{{ notation(v.PL1ue8) }}<br />花费：256扩散点</button></td>
        </tr>
        <tr>
          <td><button :class="player.PL1upg[8] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(8)">扩散能量指数增加0.5<br />花费：1024扩散点</button></td>
          <td><button :class="player.PL1upg[9] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(9)">风灵升级1基础倍率增加到0.0625<br />花费：4096扩散点</button></td>
          <td><button :class="player.PL1upg[10] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(10)">风灵升级2基础倍率增加到1.044<br />花费：16384扩散点</button></td>
          <td><button :class="player.PL1upg[11] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(11)">解锁购买项<br />花费：65536扩散点</button></td>
        </tr>
        <tr>
          <td><button :class="player.PL1upg[12] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(12)">玖式风灵可以生产捌式风灵<br />花费：1.048e6扩散点</button></td>
          <td><button :class="player.PL1upg[13] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(13)">风单元不再重置任何东西<br />花费：1.677e7扩散点</button></td>
          <td><button :class="player.PL1upg[14] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(14)">风模块不再重置任何东西<br />花费：2.684e8扩散点</button></td>
          <td><button :class="player.PL1upg[15] ? 'PL1upgyes' : 'PL1upgno'" @click="buyPL1upg(15)">将每次作成乘数乘以1.1<br />花费：4.294e9扩散点</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, buyPL1upg } = useGameState()
</script>