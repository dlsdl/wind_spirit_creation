<template>
  <div id="p5_4">
    <br />
    <p align="center" class="ftsz2">试炼场</p>
    <table align="center">
      <tbody>
        <tr>
          <td>
            <div class="batowc">
              <p>当前关卡：{{ notation(player.stage) }}</p>
              <p>最高关卡：{{ notation(player.stgmx) }}</p>
              <p>难度：{{ dfstr() }}</p>
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

const { notation, dfstr } = useGameState()
</script>
