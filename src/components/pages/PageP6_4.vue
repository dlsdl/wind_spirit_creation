<template>
  <div id="p6_4">
    <div class="btnrow" v-if="player.sucram.gte(1e16)">
      <div align="center" class="ftsz2">电磁能量每秒乘以壹式太阳风灵的乘数^指数，前一式太阳风灵的乘数每秒乘以后一式太阳风灵的乘数^指数</div>
      <div align="center" class="ftsz2">你有<span class="ftsz3">{{notation(player.EMenergy)}}</span>电磁能量，它使最终能量指数乘以<span class="ftsz3">{{notation(v.FEexp)}}</span>。<button class="ltbutton" @click="emeadd1()">+1</button></div><br />
      <div class="solarwsc" style="background-color:#ffffff80;">
        <span>壹式太阳风灵作成·{{notatint(player.slwb01)}}</span>
        <button class="wscbt2" style="display: none" @click=" ">自动：</button>
        <button class="wscbt1" @click="buyslw(1)">作成1次需要:<br>{{notation(v.slwc01)}}电磁能量</button><br />
        <span class="wscdat">×{{notation(player.slwa01)}} ^{{notation(v.slwp01)}}</span>
      </div>
      <div class="solarwsc" style="background-color:#ff000080;">
        <span>贰式太阳风灵作成·{{notatint(player.slwb02)}}</span>
        <button class="wscbt2" style="display: none" @click=" ">自动：</button>
        <button class="wscbt1" @click="buyslw(2)">作成1次需要:<br>{{notation(v.slwc02)}}电磁能量</button><br />
        <span class="wscdat">×{{notation(player.slwa02)}} ^{{notation(v.slwp02)}}</span>
      </div>
      <div class="solarwsc" style="background-color:#ffff0080;">
        <span>叁式太阳风灵作成·{{notatint(player.slwb03)}}</span>
        <button class="wscbt2" style="display: none" @click=" ">自动：</button>
        <button class="wscbt1" @click="buyslw(3)">作成1次需要:<br>{{notation(v.slwc03)}}电磁能量</button><br />
        <span class="wscdat">×{{notation(player.slwa03)}} ^{{notation(v.slwp03)}}</span>
      </div>
      <div class="solarwsc" style="background-color:#00ff0080;">
        <span>肆式太阳风灵作成·{{notatint(player.slwb04)}}</span>
        <button class="wscbt2" style="display: none" @click=" ">自动：</button>
        <button class="wscbt1" @click="buyslw(4)"> 作成1次需要:<br>{{notation(v.slwc04)}}电磁能量</button><br />
        <span class="wscdat">×{{notation(player.slwa04)}} ^{{notation(v.slwp04)}}</span>
      </div>
      <div class="solarwsc" style="background-color: #00ffff80;" v-if="player.magstobest.gte(2000)">
        <span>伍式太阳风灵作成·{{notatint(player.slwb05)}}</span>
        <button class="wscbt2" style="display: none" @click="buyslw(5)">自动：</button>
        <button class="wscbt1" @click="buyslw(5)"> 作成1次需要:<br>{{notation(v.slwc05)}}电磁能量</button><br />
        <span class="wscdat">×{{notation(player.slwa05)}} ^{{notation(v.slwp05)}}</span>
      </div>
      <div class="solarwsc" style="background-color: #0000ff80;" v-if="player.magstobest.gte(2500)">
        <span>陆式太阳风灵作成·{{notatint(player.slwb06)}}</span>
        <button class="wscbt2" style="display: none" @click="buyslw(6)">自动：</button>
        <button class="wscbt1" @click="buyslw(6)"> 作成1次需要:<br>{{notation(v.slwc06)}}电磁能量</button><br />
        <span class="wscdat">×{{notation(player.slwa06)}} ^{{notation(v.slwp06)}}</span>
      </div>
      <div class="solarwsc" style="background-color: #ff00ff80;" v-if="player.magstobest.gte(3000)">
        <span>柒式太阳风灵作成·{{notatint(player.slwb07)}}</span>
        <button class="wscbt2" style="display: none" @click="buyslw(7)">自动：</button>
        <button class="wscbt1" @click="buyslw(7)"> 作成1次需要:<br>{{notation(v.slwc07)}}电磁能量</button><br />
        <span class="wscdat">×{{notation(player.slwa07)}} ^{{notation(v.slwp07)}}</span>
      </div>
      <div class="solarwsc" style="background-color: #00000080;" v-if="player.magstobest.gte(3500)">
        <span>捌式太阳风灵作成·{{notatint(player.slwb08)}}</span>
        <button class="wscbt2" style="display: none" @click="buyslw(8)">自动：</button>
        <button class="wscbt1" @click="buyslw(8)" style="color: #ffffff;"> 作成1次需要:<br>{{notation(v.slwc08)}}电磁能量</button><br />
        <span class="wscdat">×{{notation(player.slwa08)}} ^{{notation(v.slwp08)}}</span>
      </div>
      <br />
      <button v-if="player.quau[15]" class="stormbtn" @click="swMagStorm()">
        开启/停止电磁暴（当前状态：{{player.magstorm?"活动中":"未激活"}}）<br />
        开启电磁暴时，将进行扭敧重置并重置1~48式风灵，游戏速度加成失效，<br />
        在电磁暴中风灵的乘数、指数、超指数加成失效，每次作成乘数强制为2。<br />
        电磁暴中的最高能量指数（log2能量）：{{notation(player.magstobest)}}<br />
        {{player.magstobest.lte(2000)?"到达2000指数将解锁5式太阳风灵":player.magstobest.lte(2500)?"到达2500指数将解锁6式太阳风灵":player.magstobest.lte(3000)?"到达3000指数将解锁7式太阳风灵":player.magstobest.lte(3500)?"到达3500指数将解锁8式太阳风灵":"到达4000指数将解锁生物炼金选项卡"}}
      </button>
    </div>
    <div v-else align="center" class="ftsz2">需要购买光合作用升级8</div>
  </div>
</template>

<script setup>
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, emeadd1, buyslw, swMagStorm } = useGameState()
</script>