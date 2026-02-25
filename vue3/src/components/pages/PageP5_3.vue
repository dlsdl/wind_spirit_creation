<template>
  <div id="p5_3">
    <br />
    <p align="center" class="ftsz2">惊奇风盒</p>
    <table align="center">
      <tbody>
        <tr>
          <td>
            <div class="boggle">
              <p>惊奇风盒</p>
              <p>当前：{{ notation(player.bogglebox) }}</p>
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
