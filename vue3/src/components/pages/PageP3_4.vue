<template>
  <div id="p3_4">
    <br />
    <p align="center" class="ftsz2">炼金系统</p>
    <table align="center">
      <tbody>
        <tr>
          <td v-for="i in 8" :key="i">
            <button :class="player.alca[i-1] ? 'alcyes' : 'alcno'" @click="buyAlc(i)">
              炼金{{ i }}<br />
              效果：待定<br />
              花费：{{ notation(v['alcuc' + String(i).padStart(2, '0')] || 1) }}炼金点
            </button>
          </td>
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

function buyAlc(id) {
  
}
</script>
