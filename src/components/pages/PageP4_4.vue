<template>
  <div id="p4_4">
    <div id="xyz" v-if="player.tthpu[3]">
      <div align="center" class="ftsz3">你的slog(x吸引子)等于{{notation(player.xyzx.max(1).slog())}}<br /></div>
      <div align="center" class="ftsz2">额外风灵升级数量增加{{notation(v.xyze1)}}%，25~32风灵指数额外增加{{notation(v.xyze2)}}，风灵基础值指数增加{{notation(player.xyzsw.add(player.xyzbo).mul(0.01))}}</div>
      <div align="center" class="ftsz2"><span v-if="player.xyzbo.gte(1)">扪敤能量效果指数+1</span><span v-if="player.xyzbo.gte(2)">，自动获取扪敤次数</span><span v-if="player.xyzbo.gte(3)">，扫敥次数获取数量增加扪敤次数^1/16</span></div>
      <div align="center" id="xxyz" class="ftsz2">你有 {{notation(player.xyzx)}} x吸引子</div>
      <div align="center" id="yxyz" class="ftsz2" v-if="player.xyzsw.gte(1)">你有 {{notation(player.xyzy)}} y吸引子</div>
      <div align="center" id="zxyz" class="ftsz2" v-if="player.xyzsw.gte(2)">你有 {{notation(player.xyzz)}} z吸引子</div>
      <div align="center" id="txyz" class="ftsz2" v-if="player.xyzsw.gte(3)">你有 {{notation(player.xyzt)}} t吸引子</div>
      <div align="center" class="ftsz2" v-if="player.xyzsw.gte(4)">你有 {{notation(player.xyze)}} e吸引子</div>
      <div align="center" class="ftsz2" v-if="player.xyzsw.gte(5)">你有 {{notation(player.xyzf)}} f吸引子</div>
      <div align="center" class="ftsz2" v-if="player.xyzsw.gte(6)">你有 {{notation(player.xyzg)}} g吸引子</div>
      <div align="center" class="ftsz2" v-if="player.xyzsw.gte(7)">你有 {{notation(player.xyzh)}} h吸引子</div>
      <table align="center">
        <tbody>
          <tr>
            <td><button :class="player.xyzu[0]?'PL3upgyes':'PL3upgno'" @click="buyxyzu(1)">其他吸引子的乘积产生x吸引子<br />需要：0x吸引子</button></td>
            <td><button :class="player.xyzu[1]?'PL3upgyes':'PL3upgno'" @click="buyxyzu(2)" v-if="player.xyzsw.gte(1)">其他吸引子的乘积产生y吸引子<br />需要：100x吸引子</button></td>
            <td><button :class="player.xyzu[2]?'PL3upgyes':'PL3upgno'" @click="buyxyzu(3)" v-if="player.xyzsw.gte(2)">其他吸引子的乘积产生z吸引子<br />需要：e300x吸引子</button></td>
            <td><button :class="player.xyzu[3]?'PL3upgyes':'PL3upgno'" @click="buyxyzu(4)" v-if="player.xyzsw.gte(3)">其他吸引子的乘积产生t吸引子，t吸引子增加迭代速度<br />需要：ee1000x吸引子</button></td>
          </tr>
          <tr>
            <td><button class="PL3upgno" @click="buyxyze()" v-if="player.xyzsw.gte(4)">每秒获得e吸引子数量个e生成器，e吸引子增加xyzt吸引子迭代速度</button></td>
            <td><button class="PL3upgno" @click="buyxyzf()" v-if="player.xyzsw.gte(5)">每秒获得e吸引子数量个f生成器，f吸引子增加xyzte吸引子迭代速度</button></td>
            <td><button class="PL3upgno" @click="buyxyzg()" v-if="player.xyzsw.gte(6)">每秒获得e吸引子数量个g生成器，g吸引子增加xyztef吸引子迭代速度</button></td>
            <td><button class="PL3upgno" @click="buyxyzh()" v-if="player.xyzsw.gte(7)">每秒获得e吸引子数量个h生成器，h吸引子增加xyztefg吸引子迭代速度</button></td>
          </tr>
        </tbody>
      </table>
      <table align="center">
        <tbody>
          <tr>
            <td><button class="tthupg" @click="xyzsw()">重置吸引子数量，吸引子速度翻倍，并解锁新的吸引子，需要：{{xyzswdp()}}</button></td>
          </tr>
          <tr>
            <td><button class="tthupg" @click="xyzbo()">重置吸引子数量，吸引子速度翻倍，并解锁新的效果，需要：{{xyzbodp()}}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else align="center" class="ftsz2">需要购买特殊甜甜花升级4</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, buyxyzu, xyzsw, xyzswdp, buyxyze, buyxyzf, buyxyzg, buyxyzh, xyzbo, xyzbodp } = useGameState()
</script>