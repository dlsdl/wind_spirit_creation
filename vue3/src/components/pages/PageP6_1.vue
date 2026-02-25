<template>
  <div id="p6_1">
    <br />
    <p align="center" class="ftsz2">升级海</p>
    <table align="center">
      <tbody>
        <tr>
          <td v-for="i in 24" :key="i">
            <button :class="player.quau[i-1] ? 'PL5upgyes' : 'PL5upgno'">升级{{ i }}</button>
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
