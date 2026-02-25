<template>
  <div id="p2_3">
    <br />
    <p align="center" class="ftsz2">普通挑战</p>
    <table align="center">
      <tbody>
        <tr>
          <td v-for="i in 4" :key="i">
            <button :class="player.normchacom[i-1] ? 'normchalyes' : (player.innormcha === i ? 'normchalin' : 'normchalno')">
              普通挑战{{ i }}
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
