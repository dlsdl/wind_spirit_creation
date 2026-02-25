<template>
  <div id="p3_2">
    <br />
    <p align="center" class="ftsz2">元素系统</p>
    <table align="center">
      <tbody>
        <tr>
          <td>
            <div class="PL2elmt">
              <p class="pyro">火元素：{{ notation(player.elmt01) }}</p>
              <p>能量：{{ notation(player.elmten01) }}</p>
              <p>效果：×{{ notation(v.elmtps01) }}</p>
            </div>
          </td>
          <td>
            <div class="PL2elmt">
              <p class="hydro">水元素：{{ notation(player.elmt02) }}</p>
              <p>能量：{{ notation(player.elmten02) }}</p>
              <p>效果：×{{ notation(v.elmtps02) }}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="PL2elmt">
              <p class="electro">雷元素：{{ notation(player.elmt03) }}</p>
              <p>能量：{{ notation(player.elmten03) }}</p>
              <p>效果：×{{ notation(v.elmtps03) }}</p>
            </div>
          </td>
          <td>
            <div class="PL2elmt">
              <p class="cryo">冰元素：{{ notation(player.elmt04) }}</p>
              <p>能量：{{ notation(player.elmten04) }}</p>
              <p>效果：×{{ notation(v.elmtps04) }}</p>
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
