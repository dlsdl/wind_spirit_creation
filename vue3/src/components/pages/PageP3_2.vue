<template>
  <div id="p3_2">
    <div class="btnrow">
      <div align="center" class="ftsz2" style="display: inline-block">
        你有{{ notatint(player.elmt) }}风元素(下一个在{{ notatint(scale(player.elmttl.add(1).pow(2.5)).pow(0.4).pwb(2)) }}累计扪敤点)，你有{{ notatint(player.elmttl) }}累计的风元素
      </div>
      <button class="ltbutton" @click="resetElmt()">回退</button>
    </div>
    <div class="btnrow">
      <div align="center" class="ftsz2" style="display: inline-block">
        基础每秒元素能量：1，每次分配乘数：{{ notation(v.elmmpd) }}
      </div>
      <button class="ltbutton" @click="dtavelmt()">平均分配</button>
    </div>
    <div class="PL2elmt" id="PL2elmt01">
      <div class="pyro">
        你有{{ notatint(player.elmt01) }}火元素，{{ notation(player.elmten01) }}火元素能量(+{{ notation(v.elmtps01) }}/s)<br />
        提供{{ notatint(v.upgf01) }}额外的风灵升级1（下一个在{{ notatint(v.upgf01.add(1).pwb(2)) }}火元素能量）<br />
      </div>
      <button class="wscbt1bl" style="float:none; margin:auto" @click="distelmt(1)">分配x1</button>
      <button class="wscbt1bl" style="float:none; margin:auto" @click="dtmxelmt(1)">分配全部</button>
    </div>
    <div class="PL2elmt" id="PL2elmt02">
      <div class="hydro">
        你有{{ notatint(player.elmt02) }}水元素，{{ notation(player.elmten02) }}水元素能量(+{{ notation(v.elmtps02) }}/s)<br />
        提供{{ notatint(v.upgf02) }}额外的风灵升级2（下一个在{{ notatint(v.upgf02.add(1).pwb(4)) }}水元素能量）
      </div>
      <button class="wscbt1bl" style="float:none; margin:auto" @click="distelmt(2)">分配x1</button>
      <button class="wscbt1bl" style="float:none; margin:auto" @click="dtmxelmt(2)">分配全部</button>
    </div>
    <div class="PL2elmt" id="PL2elmt03">
      <div class="electro">
        你有{{ notatint(player.elmt03) }}雷元素，{{ notation(player.elmten03) }}雷元素能量(+{{ notation(v.elmtps03) }}/s)<br />
        提供{{ notatint(v.upgf03) }}额外的风灵升级3（下一个在{{ notatint(v.upgf03.add(1).pwb(16)) }}雷元素能量）
      </div>
      <button class="wscbt1bl" style="float:none; margin:auto" @click="distelmt(3)">分配x1</button>
      <button class="wscbt1bl" style="float:none; margin:auto" @click="dtmxelmt(3)">分配全部</button>
    </div>
    <div class="PL2elmt" id="PL2elmt04">
      <div class="cryo">
        你有{{ notatint(player.elmt04) }}冰元素，{{ notation(player.elmten04) }}冰元素能量(+{{ notation(v.elmtps04) }}/s)<br />
        提供{{ notatint(v.upgf04) }}额外的风灵升级4（下一个在{{ notatint(v.upgf04.add(1).pwb(256)) }}冰元素能量）
      </div>
      <button class="wscbt1bl" style="float:none; margin:auto" @click="distelmt(4)">分配x1</button>
      <button class="wscbt1bl" style="float:none; margin:auto" @click="dtmxelmt(4)">分配全部</button>
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

const { notation, notatint, scale, resetElmt, dtavelmt, distelmt, dtmxelmt } = useGameState()
</script>