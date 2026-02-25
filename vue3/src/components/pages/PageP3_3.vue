<template>
  <div id="p3_3">
    <br />
    <p align="center" class="ftsz2">研究系统</p>
    <table align="center">
      <tbody>
        <tr>
          <td v-for="i in 8" :key="i">
            <button :class="player.std[i-1] ? 'stdyes' : 'stdno'" @click="buyStd(i)">
              研究{{ i }}<br />
              效果：待定<br />
              花费：{{ notation(v['thrmc' + String(i).padStart(2, '0')] || 1) }}热能
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

function buyStd(id) {
  
}
</script>
