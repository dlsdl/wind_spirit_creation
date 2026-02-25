<template>
  <div id="p1_2">
    <div align="center" class="ftsz2" style="width: 1024px; margin: auto">
      你的风灵基础值为({{ notation(v.wscbaseValue1) }}
      <span style="color: #ff0000" v-if="player.hasUnlockedPL1">×{{ notation(v.wscbaseValue2) }}</span>
      <span style="color: #ffff00" v-if="player.hasUnlockedPL2">×{{ notation(v.wscbaseValue3) }}</span>
      <span style="color: #00ff00" v-if="player.hasUnlockedPL3">×{{ notation(v.wscbaseValue4) }}</span>
      <span style="color: #00ffff" v-if="player.hasUnlockedPL4">×{{ notation(v.wscbaseValue5) }}</span>
      <span style="color: #0000ff" v-if="player.hasUnlockedPL5">×{{ notation(v.wscbaseValue6) }}</span>
      <span style="color: #aaaaaa">×{{ notation(v.fraue06) }}</span>
      )^{{ notation(v.wscbaseValueExp) }}-1={{ notation(v.wscbaseValue) }}(基于你作成的风灵总数而定)
    </div>
    
    <div class="upg" id="tier_01">
      {{ tscale(1) }}{{ notatint(player.tier01) }}式风单元
      <button class="wscbt2bl" @click="abTier01Switch" v-if="player.PL1upg[1]">自动：{{ player.autobuytier01 ? "开" : "关" }}</button>
      <button class="wscbt1bl" @click="incTier1">需要：{{ notation(v.tierc01) }}风灵基础值</button>
      重置能量和1~8式风灵，但提升风单元。
      <span v-if="player.tier01.lt(1)">在1式风单元，将基于风单元式数提升1~8式风灵乘数(1+n)²。</span>
      <span v-if="player.tier01.gte(1) && player.tier01.lt(2)">在2式风单元，将基于风灵基础值提升1~8式风灵乘数max(1,n/4)。</span>
      <span v-if="player.tier01.gte(2) && player.tier01.lt(5)">在5式风单元，将基于风模块式数提升1~8式风灵乘数(1+n)³。</span>
      <span v-if="player.tier01.gte(5) && player.tier01.lt(10)">在10式风单元，将基于能量提升1~8式风灵乘数max(1,log2(n+1)^0.2)。</span>
      <span v-if="player.tier01.gte(10) && player.tier01.lt(25)">在25式风单元，将使每个风单元使1~8式风灵乘数×2。</span>
      <span v-if="player.tier01.gte(25) && player.tier01.lt(63)">在63式风单元，将使1/2/5/10式风单元奖励也对9~16式风灵生效，但效果倍率降低。</span>
      <span v-if="player.tier01.gte(63) && player.tier01.lt(200)">在200式风单元，将使扩散升级5~8的效果对1~8式风灵生效。</span>
    </div>
    
    <div class="upg" id="tier_02">
      {{ tscale(2) }}{{ notatint(player.tier02) }}式风模块
      <button class="wscbt2bl" @click="abTier02Switch" v-if="player.PL1upg[1]">自动：{{ player.autobuytier02 ? "开" : "关" }}</button>
      <button class="wscbt1bl" @click="incTier2">需要：{{ notation(v.tierc02) }}式风单元</button>
      重置能量、1~8式风灵和风单元，但提升风模块。
      <span v-if="player.tier02.lt(1)">在1式风模块，将风灵每次作成乘数增加0.05，并解锁第一个升级。</span>
      <span v-if="player.tier02.gte(1) && player.tier02.lt(2)">在2式风模块，将基于风模块式数^0.25乘以1式风模块的第一个效果，并解锁第二个升级。</span>
      <span v-if="player.tier02.gte(2) && player.tier02.lt(5)">在5式风模块，将1式风模块的第一个效果×5，并将它乘以风单元式数^0.25。</span>
      <span v-if="player.tier02.gte(5) && player.tier02.lt(12)">在12式风模块，将每个风模块将风灵每次作成乘数×1.011，并解锁第三个升级。</span>
      <span v-if="player.tier02.gte(12) && player.tier02.lt(30)">在30式风模块，将使超过1e8的扩散次数增加风之微粒获取，并解锁第四个升级。</span>
    </div>
    
    <div class="upg" id="tier_03" v-if="player.PL2tms.gte(1)">
      {{ tscale(3) }}{{ notatint(player.tier03) }}式风系统
      <button class="wscbt2bl" @click="abTier03Switch" v-if="player.PL2tms.gte(10)">自动：{{ player.autobuytier03 ? "开" : "关" }}</button>
      <button class="wscbt1bl" @click="incTier3">需要：{{ notation(v.tierc03) }}式风模块</button>
      重置能量、1~8式风灵、风单元和风模块，但提升风系统。
      <span v-if="player.tier03.lt(1)">在1式风系统，将基于风灵升级(购买和额外)总和提升17~24式风灵乘数。</span>
      <span v-if="player.tier03.gte(1) && player.tier03.lt(3)">在3式风系统，将基于风系统提升1~16式风灵的指数。</span>
      <span v-if="player.tier03.gte(3) && player.tier03.lt(7)">在7式风系统，将使风之微粒的软上限弱化25%，元素能量获取×累计风元素^2。</span>
    </div>
    
    <div class="upg" id="tier_04" v-if="player.std[6]">
      {{ tscale(4) }}{{ notatint(player.tier04) }}式风四倍系统
      <button class="wscbt2bl" @click="abTier04Switch" v-if="player.alcu[0]">自动：{{ player.autobuytier04 ? "开" : "关" }}</button>
      <button class="wscbt1bl" @click="incTier4">需要：{{ notation(v.tierc04) }}式风系统</button>
      重置能量、1~8式风灵、风单元、风模块和风系统，但提升风四倍系统。
      <span v-if="player.tier04.lt(1)">在1式风四倍系统，将基于风四倍系统提升进阶挑战1~4上限（最多提升12）</span>
      <span v-if="player.tier04.gte(1) && player.tier04.lt(3)">在3式风四倍系统，将使3式风系统也对17~24式风灵生效</span>
      <span v-if="player.tier04.gte(3) && player.tier04.lt(10)">在10式风四倍系统，将基于风四倍系统提高一阶游戏速度</span>
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
  tscale,
  incTier1,
  incTier2,
  incTier3,
  incTier4,
  abTier01Switch,
  abTier02Switch,
  abTier03Switch,
  abTier04Switch,
} = useGameState()
</script>
