<template>
  <div id="p0_4">
    <br />
    <table align="center">
      <tr v-for="row in 6" :key="row">
        <td v-for="col in 16" :key="col" :class="player.ach[(row-1)*16 + col - 1] ? 'achyes' : 'achno'">
            {{ (row-1)*16 + col }}<br />
            {{ achName[(row-1)*16 + col - 1] }}
            <span class="tooltip-text">{{ tooltip[(row-1)*16 + col - 1] }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  player: Object,
  v: Object
})

const achName=[
"违反热力学第一定律","100能量不是很多","AD现实版发售了","击掌只要四根手指",
"五小时能做任何事，除了更新","我们暂时承担不起9","下一次","转90°是X",
]

const tooltip=[
"作成1次壹式风灵","作成1次贰式风灵","作成1次叁式风灵","作成1次肆式风灵",
"作成1次伍式风灵","作成1次陆式风灵","作成1次柒式风灵","作成1次捌式风灵",
"获得4式风单元","获得2式风模块","前3式风灵作成次数的排布为1,0,1","作成10次壹式风灵但是2~8式风灵作成次数都为0",
"",
]
</script>
