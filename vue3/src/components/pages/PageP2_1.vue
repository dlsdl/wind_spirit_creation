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
