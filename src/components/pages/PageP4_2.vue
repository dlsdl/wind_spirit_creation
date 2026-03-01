<template>
  <div id="p4_2">
    <div class="btnrow">
      <div align="center" class="ftsz2">当前最多效果数为{{notatint(player.ptnu01)}}，药剂效果值为{{notation(v.ptnv)}}（倍数为{{notatint(player.ptnu02.pwb(2))}}/65536，基于扫敥能量和扫敥时间，在65536秒和6e315652扫敥能量到达最大值）</div>
      <div align="center" class="ftsz2">点击药剂以获得效果，点击回退将清除全部效果且进行扫敥重置 <button class="ltbutton" @click="rptn()">回退</button></div>
    </div>
    <table align="center">
      <tbody>
        <tr>
          <td><button :class="player.ptn[0]?'PL3upgyes':'PL3upgno'" @click="ptnchs(0)">1~8式风灵乘数×{{notation(v.ptnm01)}}</button></td>
          <td><button :class="player.ptn[1]?'PL3upgyes':'PL3upgno'" @click="ptnchs(1)">9~16式风灵乘数×{{notation(v.ptnm02)}}</button></td>
          <td><button :class="player.ptn[2]?'PL3upgyes':'PL3upgno'" @click="ptnchs(2)">17~24式风灵乘数×{{notation(v.ptnm03)}}</button></td>
          <td><button :class="player.ptn[3]?'PL3upgyes':'PL3upgno'" @click="ptnchs(3)" v-if="player.tthpu[2]">25~32式风灵乘数×{{notation(v.ptnm04)}}</button></td>
        </tr>
        <tr>
          <td><button :class="player.ptn[4]?'PL3upgyes':'PL3upgno'" @click="ptnchs(4)">研究速度×{{notation(v.ptnm05)}}</button></td>
          <td><button :class="player.ptn[5]?'PL3upgyes':'PL3upgno'" @click="ptnchs(5)">风之微粒获取×{{notation(v.ptnm06)}}</button></td>
          <td><button :class="player.ptn[6]?'PL3upgyes':'PL3upgno'" @click="ptnchs(6)">风之徯粓获取×{{notation(v.ptnm07)}}</button></td>
          <td><button :class="player.ptn[7]?'PL3upgyes':'PL3upgno'" @click="ptnchs(7)" v-if="player.anm3u[0]">风之徰粔获取×{{notation(v.ptnm08)}}</button></td>
        </tr>
        <tr>
          <td><button :class="player.ptnu01.gte(8)?'resyes':'resno'" @click="buyptnupg(1)">增加最多效果数+1<br />({{notatint(player.ptnu01)}}/8)<br />花费：{{notation(v.ptnuc01)}}扫敥点</button></td>
          <td><button :class="player.ptnu02.gte(16)?'resyes':'resno'" @click="buyptnupg(2)">增加效果值倍数×2<br />({{notatint(player.ptnu02)}}/16)<br />花费：{{notation(v.ptnuc02)}}扫敥点</button></td>
          <td><button :class="player.ptnu03.gte(4)?'resyes':'resno'" v-if="player.resa14.gte(1)" @click="buyptnupg(3)" id="ptnu3">进阶挑战1~4上限增加5，5~8上限增加3<br />({{notatint(player.ptnu03)}}/4)<br />花费：{{notation(v.ptnuc03)}}扫敥点</button></td>
          <td><button :class="player.ptnu04.gte(12)?'resyes':'resno'" v-if="player.resa14.gte(1)" @click="buyptnupg(4)" id="ptnu4">一阶游戏速度×1.25，扩散、扪敤、扫敥能量效果指数+1/4、1/6、1/12<br />({{notatint(player.ptnu04)}}/12)<br />花费：{{notation(v.ptnuc04)}}扫敥点</button></td>
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

const { notation, notatint, ptnchs, buyptnupg, rptn } = useGameState()
</script>