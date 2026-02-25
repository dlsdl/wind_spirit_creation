<template>
  <div id="p4_3">
    <br />
    <p align="center" class="ftsz2">种甜甜花</p>
    <table align="center">
      <tbody>
        <tr>
          <td>
            <div class="tthupg">
              <p>甜甜花种子：{{ notation(player.tthseed) }}</p>
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

const { notation, getprow2 } = useGameState()
</script>
