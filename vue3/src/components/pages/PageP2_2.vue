<template>
  <div id="p2_2">
    <br />
    <table align="center">
      <tbody>
        <tr>
          <td><button class="PL1bab" @click="handleBuyPL1bab(1)">风之微粒壹型<br />当前：{{ notation(player.PL1bab01) }}<br />花费：{{ notation(v.PL1babc1) }}扩散点<br />效果：基于风之微粒提升风单元奖励</button></td>
          <td><button class="PL1bab" @click="handleBuyPL1bab(2)">风之微粒贰型<br />当前：{{ notation(player.PL1bab02) }}<br />花费：{{ notation(v.PL1babc2) }}扩散点<br />效果：基于风之微粒提升风模块奖励</button></td>
          <td><button class="PL1bab" @click="handleBuyPL1bab(3)">风之微粒叁型<br />当前：{{ notation(player.PL1bab03) }}<br />花费：{{ notation(v.PL1babc3) }}扩散点<br />效果：基于风之微粒提升扩散能量指数</button></td>
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

const { notation } = useGameState()

function handleBuyPL1bab(id) {}
</script>
