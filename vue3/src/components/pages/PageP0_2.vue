<template>
  <div id="p0_2">
    <br />
    <p align="center" class="ftsz2">游戏选项</p>
    <table align="center" class="ftsz2">
      <tbody>
        <tr>
          <td><button class="ltbutton">新闻：{{ player.news ? '开' : '关' }}</button></td>
          <td><button class="ltbutton">快捷键：{{ player.hotk ? '开' : '关' }}</button></td>
          <td><button class="ltbutton">游戏运行：{{ player.gmrn ? '是' : '否' }}</button></td>
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
</script>
