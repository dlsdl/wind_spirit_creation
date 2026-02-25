<template>
  <div id="p4_6">
    <br />
    <p align="center" class="ftsz2">转化系统</p>
    <table align="center">
      <tbody>
        <tr>
          <td v-for="i in 4" :key="i">
            <button :class="player.convr[i-1] ? 'PL4upgyes' : 'PL4upgno'">转化{{ i }}</button>
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
