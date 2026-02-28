<template>
  <div id="p2_4">
    <div v-if="player.hasunlockedanmorb">
      <div class="btnrow">
          <div align="center" class="ftsz2" style="display:inline-block; color:#ff8000">你有{{notation(player.anmpar)}}风之微粒(+{{notation(v.anmparps)}}/s)，它以{{player.std[0]?"log2(log2(x+1)+1)^":"log2(x+1)^"}}{{notation(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4)))}}的效果使每次作成乘数{{player.std[0]?"^"+notation(player.anmpar.add(1).log(2).add(1).log(2).pow(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4))).max(1)):"×"+notation(player.anmpar.add(1).log(2).pow(player.parupg03.div(64).add(0.0625).min(player.parupg03.div(64).add(0.0625).root(4))).max(1))}}</div><br />
          <div align="center" class="ftsz2" style="display:inline-block; color:#ff8000">每次捌式风灵作成都会将风之微粒的获取乘以1.259，当前风之微粒软上限为{{notation(v.anmparsc)}}/s（每个总计的风之晶球×1000）</div><br />
      </div>
      <table align="center">
        <tbody>
          <tr>
              <td><button class="PL1bab" @click="buyparupg(1)">双倍风之微粒获取<br />{{ascale(player.parupg01,1)}}等级{{notatint(player.parupg01)}}<br />当前：×{{notation(player.parupg01.pwb(2))}}<br />花费：{{notation(v.parupgc01)}}风之微粒</button></td>
              <td><button class="PL1bab" @click="buyparupg(2)">风之微粒提升9~16式风灵<br />{{ascale(player.parupg02,2)}}等级{{notatint(player.parupg02)}}<br />当前：×{{notation(player.anmpar.pow(player.parupg02.mul(0.25)).max(1))}}<br />花费：{{notation(v.parupgc02)}}风之微粒</button></td>
              <td><button class="PL1bab" @click="buyparupg(3)">风之微粒效果指数增加0.015625<br />{{ascale(player.parupg03,3)}}等级{{notatint(player.parupg03)}}<br />当前：+{{notation(player.parupg03.div(64).min(player.parupg03.div(64).add(0.0625).root(4).sub(0.0625)))}}{{player.parupg03.gte(60)?"(受软上限限制)":""}}<br />花费：{{notation(v.parupgc03)}}风之微粒</button></td>
              <td><button class="PL1bab" @click="buyparupg(4)">重置风之微粒，获得1风之晶球<br />{{ascale(player.parupg04,4)}}等级{{notatint(player.parupg04)}}<br />当前：+{{notatint(player.parupg04)}}<br />花费：{{notation(v.parupgc04)}}风之微粒</button></td>
          </tr>
        </tbody>
      </table>
      <div class="btnrow">
          <div align="center" class="ftsz2" style="display:inline-block; color:#ff8000">你有{{notation(player.anmorb)}}风之晶球（总计{{notation(player.anmorbttl)}}），用来购买下面的升级</div><br />
          <div align="center" class="ftsz2" style="display:inline-block; color:#ff8000">点击回退风之晶球升级，进行扩散重置并退还风之晶球</div>
          <button class="ltbutton" @click="resetOrb">回退</button>
      </div>
      <table align="center">
        <tbody>
          <tr>
              <td><button :class="player.orbupg[0]?'PL1upgyes':'PL1upgno'" @click="buyorbupg(1)">log2扩散能量对1~8式风灵乘数的指数变为16<br />效果：×{{notation(player.PL1energy.add(1).log(2).pow(16))}}<br />花费：1风之晶球</button></td>
              <td><button :class="player.orbupg[1]?'PL1upgyes':'PL1upgno'" @click="buyorbupg(2)">log2能量对1~8式风灵乘数的指数变为16<br />效果：×{{notation(player.energy.add(1).log(2).pow(16))}}<br />花费：2风之晶球</button></td>
              <td><button :class="player.orbupg[2]?'PL1upgyes':'PL1upgno'" @click="buyorbupg(3)">log2扩散能量对9~16式风灵乘数的指数变为4<br />效果：×{{notation(player.PL1energy.add(1).log(2).pow(4))}}<br />花费：3风之晶球</button></td>
              <td><button :class="player.orbupg[3]?'PL1upgyes':'PL1upgno'" @click="buyorbupg(4)">log2能量对9~16式风灵乘数的指数变为4<br />效果：×{{notation(player.energy.add(1).log(2).pow(4))}}<br />花费：4风之晶球</button></td>
          </tr>
          <tr v-if="player.anm2sc.gte('1e1850')">
              <td><button :class="player.orbupg[4]?'PL1upgyes':'PL1upgno'" @click="buyorbupg(5)">扩散能量¶0.9乘以1~8式风灵<br />效果：×{{notation(player.PL1energy.hyp(0.9))}}<br />花费：20风之晶球</button></td>
              <td><button :class="player.orbupg[5]?'PL1upgyes':'PL1upgno'" @click="buyorbupg(6)">能量¶0.75乘以1~8式风灵<br />效果：×{{notation(player.energy.hyp(0.75))}}<br />花费：30风之晶球</button></td>
              <td><button :class="player.orbupg[6]?'PL1upgyes':'PL1upgno'" @click="buyorbupg(7)">扩散能量¶0.75乘以9~16式风灵<br />效果：×{{notation(player.PL1energy.hyp(0.75))}}<br />花费：40风之晶球</button></td>
              <td><button :class="player.orbupg[7]?'PL1upgyes':'PL1upgno'" @click="buyorbupg(8)">能量¶0.625乘以9~16式风灵<br />效果：×{{notation(player.energy.hyp(0.625))}}<br />花费：50风之晶球</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <div class="btnrow">
          <button align="center" class="xxButton" @click="ulAnmOrb" style="background-color:#ff8000">解锁风之晶球<br />花费：1e60扩散点</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, ulAnmOrb, ascale, buyparupg, buyorbupg, resetOrb } = useGameState()
</script>
