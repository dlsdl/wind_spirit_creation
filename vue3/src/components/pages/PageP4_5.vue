<template>
  <div id="p4_5">
    <br />
    <p align="center" class="ftsz2">催化剂系统</p>
    <table align="center">
      <tbody>
        <tr>
          <td>
            <div class="tthupg">
              <p>催化剂：{{ notation(player.cata) }}</p>
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

const { notation, getprow3 } = useGameState()
</script>
