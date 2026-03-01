<template>
  <div id="p5_2">
    <div class="btnrow">
      <div align="center" class="ftsz2" style="display: inline-block">你有{{notation(player.PL4fra)}}扬敦碎片，前2个升级可以购买20次，后6个升级可以购买4次。第9和10个升级将最大购买且不花费碎片</div><br />
      <div align="center" class="ftsz2" style="display: inline-block">当前扬敦可获得碎片数量：{{notation(v.fraft1)}}(基于能量)×{{notation(v.fraft2)}}(基于扬敦能量)×{{notation(v.fraft3)}}(基于扬敦次数)×{{notation(v.fraft4)}}(升级加成)={{notation(v.fraft1.mul(v.fraft2).mul(v.fraft3).mul(v.fraft4))}}</div><br />
    </div>
    <table align="center">
      <tbody>
        <tr>
          <td><button class="fraupg" @click="buyfrau(1)">扬敦碎片获取数量<br />×{{notation(v.fraue01)}}→×{{notation(v.fraue01.mul(1.189))}}<br />等级{{notation(player.frau01)}}/20<br />花费{{notation(v.frauc01)}}扬敦碎片</button></td>
          <td><button class="fraupg" @click="buyfrau(2)">33~40式风灵指数<br />+{{notation(v.fraue02)}}→+{{notation(v.fraue02.add(0.02))}}<br />等级{{notation(player.frau02)}}/20<br />花费{{notation(v.frauc02)}}扬敦碎片</button></td>
        </tr>
        <tr>
          <td><button class="fraupg" @click="buyfrau(3)">能量软上限延后倍数<br />×{{notation(v.fraue03)}}→×{{notation(v.fraue03.mul(2))}}<br />等级{{notation(player.frau03)}}/4<br />花费{{notation(v.frauc03)}}扬敦碎片</button></td>
          <td><button class="fraupg" @click="buyfrau(4)">药剂效果值倍数<br />×{{notation(v.fraue04)}}→×{{notation(v.fraue04.mul(2))}}<br />等级{{notation(player.frau04)}}/4<br />花费{{notation(v.frauc04)}}扬敦碎片</button></td>
        </tr>
        <tr>
          <td><button class="fraupg" @click="buyfrau(5)">一阶游戏速度倍数<br />×{{notation(v.fraue05)}}→×{{notation(v.fraue05.mul(1.414))}}<br />等级{{notation(player.frau05)}}/4<br />花费{{notation(v.frauc05)}}扬敦碎片</button></td>
          <td><button class="fraupg" @click="buyfrau(6)">风灵基础值倍数<br />×{{notation(v.fraue06)}}→×{{notation(v.fraue06.mul(1.414))}}<br />等级{{notation(player.frau06)}}/4<br />花费{{notation(v.frauc06)}}扬敦碎片</button></td>
        </tr>
        <tr>
          <td><button class="fraupg" @click="buyfrau(7)">转化升级效果倍数<br />×{{notation(v.fraue07)}}→×{{notation(v.fraue07.mul(1.189))}}<br />等级{{notation(player.frau07)}}/4<br />花费{{notation(v.frauc07)}}扬敦碎片</button></td>
          <td><button class="fraupg" @click="buyfrau(8)">甜甜花生长折算延后<br />+{{notation(v.fraue08)}}→+{{notation(v.fraue08.add(2))}}<br />等级{{notation(player.frau08)}}/4<br />花费{{notation(v.frauc08)}}扬敦碎片</button></td>
        </tr>
        <tr v-if="player.stgmx.gte(1500)">
          <td><button class="fraupg" @click="buyfrau(9)">扩散、扪敤、扫敥、扬敦能量的指数+0.04+0.002×等级<br />+{{notation(v.fraue09)}}→+{{notation(v.fraue09.add(0.002))}}<br />等级{{notation(player.frau09)}}/480<br />花费{{notation(v.frauc09)}}扬敦碎片</button></td>
          <td><button class="fraupg" @click="buyfrau(10)">将风灵基础值的指数增加等级÷1600<br />+{{notation(v.fraue10)}}→+{{notation(v.fraue10.add(6.25e-4))}}<br />等级{{notation(player.frau10)}}/480<br />花费{{notation(v.frauc10)}}扬敦碎片</button></td>
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

const { notation, buyfrau } = useGameState()
</script>