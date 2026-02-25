<template>
  <div id="p4_1">
    <br />
    <p align="center" class="ftsz2">进度研究</p>
    <table align="center">
      <tbody>
        <tr>
          <td v-for="i in 8" :key="i">
            <button :class="player.res[i-1] ? 'resyes' : 'resno'">
              进度研究{{ i }}
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
</script>
