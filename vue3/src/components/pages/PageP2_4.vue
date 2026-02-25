<template>
  <div id="p2_4">
    <br />
    <p align="center" class="ftsz2">风之晶球</p>
    <table align="center">
      <tbody>
        <tr>
          <td>
            <div class="singul">
              <p style="color: #ff0000">风之晶球</p>
              <p>当前：{{ notation(player.anmorb) }}</p>
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
