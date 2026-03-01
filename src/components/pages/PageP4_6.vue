<template>
  <div id="p4_6">
    <div v-if="player.anm3u[3]">
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block">当前最多开启{{notatint(v.convmx)}}个转化升级，下一个在{{notation(v.convnx)}}扫敥点<br />每行每列最多只能开启1个转化升级，回退升级将进行扫敥重置</div>
        <button class="ltbutton" @click="rconv()">回退</button>
      </div><br />
      <table align="center">
        <tbody>
          <tr>
            <td><button :class="player.convu[0]?'PL3upgyes':'PL3upgno'" @click="buyconv(0,0)">能量转化为1~8式风灵指数<br />+{{notation(v.convp01)}}</button></td>
            <td><button :class="player.convu[1]?'PL3upgyes':'PL3upgno'" @click="buyconv(0,1)">扩散点转化为1~8式风灵指数<br />+{{notation(v.convp02)}}</button></td>
            <td><button :class="player.convu[2]?'PL3upgyes':'PL3upgno'" @click="buyconv(0,2)">扪敤点转化为1~8式风灵指数<br />+{{notation(v.convp03)}}</button></td>
            <td><button :class="player.convu[3]?'PL3upgyes':'PL3upgno'" @click="buyconv(0,3)">扫敥点转化为1~8式风灵指数<br />+{{notation(v.convp04)}}</button></td>
          </tr>
          <tr>
            <td><button :class="player.convu[4]?'PL3upgyes':'PL3upgno'" @click="buyconv(1,0)">能量转化为9~16式风灵指数<br />+{{notation(v.convp04)}}</button></td>
            <td><button :class="player.convu[5]?'PL3upgyes':'PL3upgno'" @click="buyconv(1,1)">扩散点转化为9~16式风灵指数<br />+{{notation(v.convp04)}}</button></td>
            <td><button :class="player.convu[6]?'PL3upgyes':'PL3upgno'" @click="buyconv(1,2)">扪敤点转化为9~16式风灵指数<br />+{{notation(v.convp04)}}</button></td>
            <td><button :class="player.convu[7]?'PL3upgyes':'PL3upgno'" @click="buyconv(1,3)">扫敥点转化为9~16式风灵指数<br />+{{notation(v.convp04)}}</button></td>
          </tr>
          <tr>
            <td><button :class="player.convu[8]?'PL3upgyes':'PL3upgno'" @click="buyconv(2,0)">能量转化为17~24式风灵指数<br />+{{notation(v.convp04)}}</button></td>
            <td><button :class="player.convu[9]?'PL3upgyes':'PL3upgno'" @click="buyconv(2,1)">扩散点转化为17~24式风灵指数<br />+{{notation(v.convp04)}}</button></td>
            <td><button :class="player.convu[10]?'PL3upgyes':'PL3upgno'" @click="buyconv(2,2)">扪敤点转化为17~24式风灵指数<br />+{{notation(v.convp04)}}</button></td>
            <td><button :class="player.convu[11]?'PL3upgyes':'PL3upgno'" @click="buyconv(2,3)">扫敥点转化为17~24式风灵指数<br />+{{notation(v.convp04)}}</button></td>
          </tr>
          <tr>
            <td><button :class="player.convu[12]?'PL3upgyes':'PL3upgno'" @click="buyconv(3,0)">能量转化为25~32式风灵指数<br />+{{notation(v.convp04)}}</button></td>
            <td><button :class="player.convu[13]?'PL3upgyes':'PL3upgno'" @click="buyconv(3,1)">扩散点转化为25~32式风灵指数<br />+{{notation(v.convp04)}}</button></td>
            <td><button :class="player.convu[14]?'PL3upgyes':'PL3upgno'" @click="buyconv(3,2)">扪敤点转化为25~32式风灵指数<br />+{{notation(v.convp04)}}</button></td>
            <td><button :class="player.convu[15]?'PL3upgyes':'PL3upgno'" @click="buyconv(3,3)">扫敥点转化为25~32式风灵指数<br />+{{notation(v.convp04)}}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else align="center" class="ftsz2">需要购买催化剂升级8</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, rconv, buyconv } = useGameState()
</script>