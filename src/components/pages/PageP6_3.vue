<template>
  <div id="p6_3">
    <div class="btnrow" v-if="player.quau[8]">
      <div align="center" class="ftsz2">光合作用模拟 - 点击收集光能</div>

      <!-- 长方形纯色按钮 -->
      <div class="btnrow">
        <button class="PL6btn" @click="togglePhotosynthesis">{{ isPhotosynthesisRunning ? '暂停' : '开始' }}</button>
        <button class="PL6btn" @click="resetPhotosynthesis">重置</button>
      </div>

      <!-- 长方型长条：环境条件 -->
      <div class="PL6bar">
        模拟速度：<input type="range" class="PL6slider" v-model.number="photosynthesisSpeed" min="0.1" max="5" step="0.1" /> {{ photosynthesisSpeed.toFixed(1) }}
        温度：<input type="range" class="PL6slider" v-model.number="temperature" min="0" max="50" step="1" /> {{ temperature }}°C
        光照强度：<input type="range" class="PL6slider" v-model.number="lightIntensity" min="0" max="100" step="1" /> {{ lightIntensity }}%
      </div>

      <!-- 长方形框按钮：收集光能 -->
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.Rlitengp?'phsupgy':'phsupg'" @click="colRlit()">
                点击收集红橙光能量<br />（每秒增加1并乘以2，直到它等于扩散时间^1/4）
              </button>
            </td>
            <td>
              <button :class="player.Blitengp?'phsupgy':'phsupg'" @click="colBlit()">
                点击收集蓝紫光能量<br />（每秒增加1并乘以2，直到它等于扭敧时间）
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div align="center" class="ftsz2">正在收集{{notation(v.Rlitpd)}}红橙光能量<br />你收集了{{notation(player.Rliteng)}}红橙光能量</div>
            </td>
            <td>
              <div align="center" class="ftsz2">正在收集{{notation(v.Blitpd)}}蓝紫光能量<br />你收集了{{notation(player.Bliteng)}}蓝紫光能量</div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 长方型长条：物质状态 -->
      <div align="center" class="ftsz2">物质状态</div>
      <div class="PL6bar">红橙光能量：{{notation(player.Rliteng)}}</div>
      <div class="PL6bar">蓝紫光能量：{{notation(player.Bliteng)}}</div>
      <div class="PL6bar">葡萄糖：{{notation(player.glucam)}} (+{{notation(v.glucps)}}/s)</div>
      <div class="PL6bar">果糖：{{notation(player.frucam)}} (+{{notation(v.frucps)}}/s)</div>
      <div class="PL6bar">淀粉：{{notation(player.staram)}} (+{{notation(v.starps)}}/s)</div>
      <div class="PL6bar">蔗糖：{{notation(player.sucram)}} (+{{notation(v.sucrps)}}/s)</div>

      <!-- 长方型长条 + 长方形框按钮：里程碑奖励 -->
      <div align="center" class="ftsz2">里程碑奖励</div>
      <table align="center">
        <tbody>
          <tr>
            <td><button :class="player.glucam.gte(1e6)?'PL6upgyes':'PL6upgno'">到达1e6葡萄糖：基于葡萄糖数量提升风之微粒升级1的基数(×2→×{{notation(v.gluce1)}})</button></td>
            <td><button :class="player.frucam.gte(1e6)?'PL6upgyes':'PL6upgno'">到达1e6果糖：基于果糖数量提升风之徯粓升级1的基数(×2→×{{notation(v.fruce1)}})</button></td>
            <td><button :class="player.staram.gte(1e6)?'PL6upgyes':'PL6upgno'">到达1e6淀粉：基于淀粉数量提升风之徰粔升级1的基数(×2→×{{notation(v.stare1)}})</button></td>
            <td><button :class="player.sucram.gte(1e6)?'PL6upgyes':'PL6upgno'">到达1e6蔗糖：基于蔗糖数量提升风之徱粕升级1的基数(×2→×{{notation(v.sucre1)}})</button></td>
          </tr>
          <tr>
            <td><button :class="player.glucam.gte(1e16)?'PL6upgyes':'PL6upgno'">到达1e16葡萄糖：使甜甜花种子效果对33~40式风灵生效</button></td>
            <td><button :class="player.frucam.gte(1e16)?'PL6upgyes':'PL6upgno'">到达1e16果糖：使甜甜花种子效果对41~48式风灵生效</button></td>
            <td><button :class="player.staram.gte(1e16)?'PL6upgyes':'PL6upgno'">到达1e16淀粉：在惊奇风盒解锁3∞面体波，增加41~48式风灵的每2倍作成指数</button></td>
            <td><button :class="player.sucram.gte(1e16)?'PL6upgyes':'PL6upgno'">到达1e16蔗糖：解锁太阳风选项卡和4种太阳风灵</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else align="center" class="ftsz2">需要购买量子升级26</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, colRlit, colBlit } = useGameState()

// 光合作用模拟参数（目前只影响展示用的速率计算）
const isPhotosynthesisRunning = ref(false)
const photosynthesisSpeed = ref(1)
const temperature = ref(25)
const lightIntensity = ref(50)

const togglePhotosynthesis = () => {
  isPhotosynthesisRunning.value = !isPhotosynthesisRunning.value
}

const resetPhotosynthesis = () => {
  isPhotosynthesisRunning.value = false
  photosynthesisSpeed.value = 1
  temperature.value = 25
  lightIntensity.value = 50
}
</script>
