<template>
  <div id="p1_1">
    <div class="btnrow">
      <div align="center" class="ftsz2" style="display: inline-block">基础风灵产量：{{ notation(v.baseprd) }} 每次作成乘数：{{ notation(v.wscmpb) }}</div>
      <button class="ltbutton" @click="maxAll">全部最大</button>
    </div>
    
    <div v-for="wsc in zerotosixtyfour" :key="wsc.id">
      <div 
        class="wsc" 
        :style="{background: getWsColor(+wsc.id), color: +wsc.id > 56 ? '#fff' : '#000'}"
        v-if="wsc.id <= wscUnlocked()">
        {{ wscale(wsc.id) }}<span>{{ toChineseOrdinal(wsc.id) }}式风灵作成·</span>{{ notatcom(player["wscb" + tiername[wsc.id]]) }}
        <button 
          class="wscbt2" 
          v-if="wscAutobuyable(wsc.id)" 
          @click="abwSwitch(wsc.id)" 
          :style="{color: wsc.id > 56 ? '#fff' : '#000'}">
          自动：{{ player.autobuywsc[wsc.id] ? "开" : "关" }}
        </button>
        <button 
          class="wscbt2" 
          @click="buyMaxWsc(wsc.id)" 
          :style="{color: wsc.id > 56 ? '#fff' : '#000'}">
          最大作成
        </button>
        <button 
          class="wscbt1" 
          @click="buyWsc(wsc.id)" 
          :style="{color: wsc.id > 56 ? '#fff' : '#000'}">
          作成1次花费:<br>{{ notation(v["wscc" + tiername[wsc.id]]) }}{{ getWSCresourcename(Math.floor(wsc.id / 8 - 0.125)) }}
        </button><br />
        <span class="wscdat">{{ displayWSdata(wsc.id) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

const props = defineProps({
  player: Object,
  v: Object
})

const {
  notation,
  notatcom,
  tiername,
  zerotosixtyfour,
  wscUnlocked,
  wscAutobuyable,
  getWsColor,
  wscale,
  toChineseOrdinal,
  getWSCresourcename,
  displayWSdata,
  buyWsc,
  buyMaxWsc,
  abwSwitch,
  maxAll,
} = useGameState()
</script>

<style scoped>
</style>
