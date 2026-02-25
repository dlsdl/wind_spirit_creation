<template>
  <div id="p5_2">
    <br />
    <p align="center" class="ftsz2">碎片升级</p>
    <table align="center">
      <tbody>
        <tr>
          <td v-for="i in 10" :key="i">
            <button class="fraupg">碎片升级{{ i }}</button>
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
