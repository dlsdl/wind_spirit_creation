<template>
  <div id="p5_5">
    <br />
    <p align="center" class="ftsz2">协同系统</p>
    <table align="center">
      <tbody>
        <tr>
          <td v-for="i in 5" :key="i">
            <div class="synu">
              <p>协同{{ i }}</p>
              <p>数量：{{ notation(player['syna0' + i] || 0) }}</p>
            </div>
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
</script>
