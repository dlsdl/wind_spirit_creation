<template>
  <div id="p5_1">
    <br />
    <p align="center" class="ftsz2">扬敦目标</p>
    <table align="center">
      <tbody>
        <tr>
          <td v-for="i in 8" :key="i">
            <button :class="player.PL4goal[i-1] ? 'PL4goalyes' : 'PL4goalno'">目标{{ i }}</button>
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
