<template>
  <div id="p4_4">
    <br />
    <p align="center" class="ftsz2">吸引子系统</p>
    <table align="center">
      <tbody>
        <tr>
          <td>
            <div class="tthupg">
              <p>X坐标：{{ notation(player.xyzx) }}</p>
              <p>Y坐标：{{ notation(player.xyzy) }}</p>
              <p>Z坐标：{{ notation(player.xyzz) }}</p>
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
