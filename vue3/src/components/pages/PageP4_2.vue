<template>
  <div id="p4_2">
    <br />
    <p align="center" class="ftsz2">药剂系统</p>
    <table align="center">
      <tbody>
        <tr>
          <td v-for="i in 8" :key="i">
            <button class="PL3upgno">药剂{{ i }}</button>
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
