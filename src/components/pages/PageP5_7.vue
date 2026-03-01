<template>
  <div id="p5_7">
    <div v-if="player.shdwrc.gte(1000)">
      <div class="btnrow">
        <div align="center" class="ftsz2">你有{{notatint(player.ntmv)}}(×{{notation(v.ntmm)}}={{notation(v.ntma)}})式营养餐，{{notatint(player.nrev)}}式便携营养袋</div>
        <div align="center" class="ftsz2">每当冷却时间结束时触发随机一种效果，重复触发刷新持续时间，多个效果可以同时存在</div>
        <div align="center" class="ftsz2">效果冷却时间：{{notation(v.ntmecd)}}s 效果持续时间：{{notation(v.ntmels)}}s 在{{notation(player.ntmtmr)}}秒后触发下一效果</div>
        <div align="center" class="ftsz2">效果1：试炼场cps指数+{{notation(v.ntme01)}}(剩余{{notation(player.ntmr01)}}s)</div>
        <div align="center" class="ftsz2">效果2：1~8式风灵超指数+{{notation(v.ntme02)}}(剩余{{notation(player.ntmr02)}}s)</div>
        <div align="center" class="ftsz2">效果3：9~16式风灵超指数+{{notation(v.ntme03)}}(剩余{{notation(player.ntmr03)}}s)</div>
        <div align="center" class="ftsz2">效果4：17~24式风灵超指数+{{notation(v.ntme04)}}(剩余{{notation(player.ntmr04)}}s)</div>
        <div align="center" class="ftsz2">效果5：25~32式风灵超指数+{{notation(v.ntme05)}}(剩余{{notation(player.ntmr05)}}s)</div>
        <div align="center" class="ftsz2">效果6：33~40式风灵超指数+{{notation(v.ntme06)}}(剩余{{notation(player.ntmr06)}}s)</div>
      </div>
      <table align="center">
        <tr>
          <td><button class="PL4upgno" @click="buyntmu(1)">{{player.ntmv.gte(300)?"一阶折算|":""}}将营养餐式数增加1，需要{{notatint(v.ntmc01)}}扬敦点</button></td>
          <td><button class="PL4upgno" @click="buyntmu(2)">将营养袋式数增加1，需要{{notatint(v.ntmc02)}}式营养餐</button></td>
        </tr>
        <tr>
          <td><button class="PL4upgno" @click="buyntmu(3)">冷却时间减少40%，但持续时间减少20%，需要{{notatint(v.ntmc03)}}式营养袋({{notatint(player.ntmu03)}}/9)</button></td>
          <td><button class="PL4upgno" @click="buyntmu(4)">使营养餐的第一个非永久效果变为永久，但重置计时器和第3个升级的数量，需要{{notatint(v.ntmc04)}}级冷却时间升级({{notatint(player.ntmu04)}}/3)</button></td>
        </tr>
      </table>
      <div align="center" class="ftsz2">到达一定式数的营养餐以获得奖励</div>
      <div :class="v.ntma.gte(10)?'PL4goalyes':'PL4goalno'">到达10式营养餐<br />基于营养餐提高扩散、扪敤、扫敥、扬敦能量的指数（+0.002×营养餐，最高为1）</div>
      <div :class="v.ntma.gte(39)?'PL4goalyes':'PL4goalno'">到达39式营养餐<br />使协同的所有粒子都变为聚集状态</div>
      <div :class="v.ntma.gte(152)?'PL4goalyes':'PL4goalno'">到达152式营养餐<br />使试炼场所有技能都以50%总计技能点生效</div>
      <div :class="v.ntma.gte(593)?'PL4goalyes':'PL4goalno'">到达593式营养餐<br />营养餐式数增加风之徱粕获取数量</div>
    </div>
    <div v-else align="center" class="ftsz2">需要到达1024征标值</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, buyntmu } = useGameState()
</script>