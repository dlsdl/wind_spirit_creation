<template>
  <div id="p3_5">
    <br />
    <p align="center" class="ftsz2">风压坍陷</p>
    <table align="center">
      <tbody>
        <tr>
          <td>
            <div class="fytx" @click="enterFytx">
              <p>风压坍陷</p>
              <p>当前状态：{{ player.infytx ? '进行中' : '未开始' }}</p>
              <p>效果：待定</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  player: Object,
  v: Object
})

function enterFytx() {
  
}
</script>
