<template>
  <div id="p0_5">
    <br />
    <p align="center" class="ftsz2">游戏概要</p>
    <p align="center" class="textct">风灵作成是一个多层级的增量游戏。</p>
    <p align="center" class="textct">从能量开始，通过作成风灵来获取更多能量。</p>
    <p align="center" class="textct">继续前进，解锁更多层级，探索更深的游戏内容！</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  player: Object,
  v: Object
})
</script>
