<template>
  <div id="p1_3">
    <br />
    <div class="upg" v-if="player.tier02.gte(1)">
      风灵升级一·等级{{ notatint(player.upgd01) }} (+{{ notatint(v.upgf01) }}) 每级使风灵每次作成乘数增加{{ notation(v.upgd01mult) }}
      <button class="wscbt2" @click="abUpgd01Switch" style="color: #ffffff" v-if="player.PL1upg[2]">自动：{{ player.autobuyupgd01 ? "开" : "关" }}</button>
      <button class="wscbt1" style="color: #ffffff" @click="buyUpgd(1)">花费：{{ notation(v.upgc01) }}能量</button>
      当前：+{{ notation(v.upge01) }}
    </div>
    <div class="upg" v-if="player.tier02.gte(2)">
      风灵升级二·等级{{ notatint(player.upgd02) }} (+{{ notatint(v.upgf02) }}) 每级使风灵每次作成乘数乘以{{ notation(v.upgd02mult) }}
      <button class="wscbt2" @click="abUpgd02Switch" style="color: #ffffff" v-if="player.PL1upg[2]">自动：{{ player.autobuyupgd02 ? "开" : "关" }}</button>
      <button class="wscbt1" style="color: #ffffff" @click="buyUpgd(2)">花费：{{ notation(v.upgc02) }}能量</button>
      当前：×{{ notation(v.upge02) }}
    </div>
    <div class="upg" v-if="player.tier02.gte(12)">
      风灵升级三·等级{{ notatint(player.upgd03) }} (+{{ notatint(v.upgf03) }}) 每级使风灵升级1倍率增加{{ notation(v.upge05.mul(0.25)) }}倍
      <button class="wscbt2" @click="abUpgd03Switch" style="color: #ffffff" v-if="player.PL2tms.gte(7)">自动：{{ player.autobuyupgd03 ? "开" : "关" }}</button>
      <button class="wscbt1" style="color: #ffffff" @click="buyUpgd(3)">花费：{{ notation(v.upgc03) }}能量</button>
      当前：+{{ notation(v.upge03) }}
    </div>
    <div class="upg" v-if="player.tier02.gte(30)">
      风灵升级四·等级{{ notatint(player.upgd04) }} (+{{ notatint(v.upgf04) }}) 每级使风灵升级2倍率乘以{{ v.upge06.mul(1.002711275050202).toFixed(6) }}
      <button class="wscbt2" @click="abUpgd04Switch" style="color: #ffffff" v-if="player.PL2tms.gte(8)">自动：{{ player.autobuyupgd04 ? "开" : "关" }}</button>
      <button class="wscbt1" style="color: #ffffff" @click="buyUpgd(4)">花费：{{ notation(v.upgc04) }}能量</button>
      当前：×{{ notation(v.upge04) }}
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

const {
  notation,
  notatint,
  buyUpgd,
  abUpgd01Switch,
  abUpgd02Switch,
  abUpgd03Switch,
  abUpgd04Switch,
} = useGameState()
</script>
