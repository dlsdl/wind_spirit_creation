<template>
  <div id="p0_4">
    <br />
    <p align="center" class="ftsz2">成就系统</p>
    <table align="center">
      <tbody>
        <tr v-for="row in 8" :key="row">
          <td v-for="col in 12" :key="col">
            <button :class="player.ach[(row-1)*12 + col - 1] ? 'achyes' : 'achno'">
              {{ (row-1)*12 + col }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  player: Object,
  v: Object
})
</script>
