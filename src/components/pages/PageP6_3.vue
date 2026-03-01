<template>
  <div id="p6_3">
    <div class="btnrow" v-if="player.quau[8]">
      <div align="center" class="ftsz2">光合作用模拟 - 点击收集光能</div>
      
      <!-- 游戏控制按钮 -->
      <div class="game-controls">
        <button class="control-btn" @click="togglePhotosynthesis">
          {{ isPhotosynthesisRunning ? '暂停' : '开始' }}
        </button>
        <button class="control-btn" @click="resetPhotosynthesis">重置</button>
      </div>

      <!-- 环境条件控制 -->
      <div class="conditions-section">
        <div class="conditions-grid">
          <div class="condition-item">
            <label>模拟速度: {{ photosynthesisSpeed.toFixed(1) }}</label>
            <input type="range" v-model.number="photosynthesisSpeed" min="0.1" max="5" step="0.1" />
          </div>
          <div class="condition-item">
            <label>温度: {{ temperature }}°C</label>
            <input type="range" v-model.number="temperature" min="0" max="50" step="1" />
          </div>
          <div class="condition-item">
            <label>光照强度: {{ lightIntensity }}%</label>
            <input type="range" v-model.number="lightIntensity" min="0" max="100" step="1" />
          </div>
        </div>
      </div>

      <!-- 光能收集按钮 -->
      <table align="center">
        <tr>
          <td><button align="center" :class="player.Rlitengp?'phsupgy':'phsupg'" @click="colRlit()">点击收集红橙光能量（每秒增加1并乘以2，直到它等于扩散时间^1/4）</button></td>
          <td></td>
          <td></td>
          <td><button align="center" :class="player.Blitengp?'phsupgy':'phsupg'" @click="colBlit()">点击收集蓝紫光能量（每秒增加1并乘以2，直到它等于扭敧时间）</button></td>
        </tr>
        <tr>
          <td><div align="center" class="ftsz2">正在收集{{notation(v.Rlitpd)}}红橙光能量<br />你收集了{{notation(player.Rliteng)}}红橙光能量</div></td>
          <td><div align="center"></div></td>
          <td><div align="center"></div></td>
          <td><div align="center" class="ftsz2">正在收集{{notation(v.Blitpd)}}蓝紫光能量<br />你收集了{{notation(player.Bliteng)}}蓝紫光能量</div></td>
        </tr>
      </table>

      <!-- 物质状态显示 -->
      <div class="substances-section">
        <h3 style="color: #ffffff; text-align: center;">物质状态</h3>
        <div class="substances-grid">
          <div class="substance-card" style="border-color: #FF6B6B;">
            <div class="substance-header">
              <h4>红橙光能量</h4>
              <div class="substance-color" style="background-color: #FF6B6B;"></div>
            </div>
            <div class="substance-amount">
              <span class="amount-value">{{ notation(player.Rliteng) }}</span>
            </div>
            <div class="substance-bar">
              <div class="bar-fill" style="background-color: #FF6B6B; width: 50%;"></div>
            </div>
          </div>
          <div class="substance-card" style="border-color: #4ECDC4;">
            <div class="substance-header">
              <h4>蓝紫光能量</h4>
              <div class="substance-color" style="background-color: #4ECDC4;"></div>
            </div>
            <div class="substance-amount">
              <span class="amount-value">{{ notation(player.Bliteng) }}</span>
            </div>
            <div class="substance-bar">
              <div class="bar-fill" style="background-color: #4ECDC4; width: 50%;"></div>
            </div>
          </div>
          <div class="substance-card" style="border-color: #FFA07A;">
            <div class="substance-header">
              <h4>葡萄糖</h4>
              <div class="substance-color" style="background-color: #FFA07A;"></div>
            </div>
            <div class="substance-amount">
              <span class="amount-value">{{ notation(player.glucam) }}</span>
              <span class="amount-rate">(+{{ notation(v.glucps) }}/s)</span>
            </div>
            <div class="substance-bar">
              <div class="bar-fill" style="background-color: #FFA07A; width: 50%;"></div>
            </div>
          </div>
          <div class="substance-card" style="border-color: #98D8C8;">
            <div class="substance-header">
              <h4>果糖</h4>
              <div class="substance-color" style="background-color: #98D8C8;"></div>
            </div>
            <div class="substance-amount">
              <span class="amount-value">{{ notation(player.frucam) }}</span>
              <span class="amount-rate">(+{{ notation(v.frucps) }}/s)</span>
            </div>
            <div class="substance-bar">
              <div class="bar-fill" style="background-color: #98D8C8; width: 50%;"></div>
            </div>
          </div>
          <div class="substance-card" style="border-color: #FFE66D;">
            <div class="substance-header">
              <h4>淀粉</h4>
              <div class="substance-color" style="background-color: #FFE66D;"></div>
            </div>
            <div class="substance-amount">
              <span class="amount-value">{{ notation(player.staram) }}</span>
              <span class="amount-rate">(+{{ notation(v.starps) }}/s)</span>
            </div>
            <div class="substance-bar">
              <div class="bar-fill" style="background-color: #FFE66D; width: 50%;"></div>
            </div>
          </div>
          <div class="substance-card" style="border-color: #C9B1FF;">
            <div class="substance-header">
              <h4>蔗糖</h4>
              <div class="substance-color" style="background-color: #C9B1FF;"></div>
            </div>
            <div class="substance-amount">
              <span class="amount-value">{{ notation(player.sucram) }}</span>
              <span class="amount-rate">(+{{ notation(v.sucrps) }}/s)</span>
            </div>
            <div class="substance-bar">
              <div class="bar-fill" style="background-color: #C9B1FF; width: 50%;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 里程碑奖励 -->
      <table align="center">
        <tr>
          <td><button align="center" :class="player.glucam.gte(1e6)?'phsupgy':'phsupg'">到达1e6葡萄糖：基于葡萄糖数量提升风之微粒升级1的基数(×2→×{{notation(v.gluce1)}})</button></td>
          <td><button align="center" :class="player.frucam.gte(1e6)?'phsupgy':'phsupg'">到达1e6果糖：基于果糖数量提升风之徯粓升级1的基数(×2→×{{notation(v.fruce1)}})</button></td>
          <td><button align="center" :class="player.staram.gte(1e6)?'phsupgy':'phsupg'">到达1e6淀粉：基于淀粉数量提升风之徰粔升级1的基数(×2→×{{notation(v.stare1)}})</button></td>
          <td><button align="center" :class="player.sucram.gte(1e6)?'phsupgy':'phsupg'">到达1e6蔗糖：基于蔗糖数量提升风之徱粕升级1的基数(×2→×{{notation(v.sucre1)}})</button></td>
        </tr>
        <tr>
          <td><button align="center" :class="player.glucam.gte(1e16)?'phsupgy':'phsupg'">到达1e16葡萄糖：使甜甜花种子效果对33~40式风灵生效</button></td>
          <td><button align="center" :class="player.frucam.gte(1e16)?'phsupgy':'phsupg'">到达1e16果糖：使甜甜花种子效果对41~48式风灵生效</button></td>
          <td><button align="center" :class="player.staram.gte(1e16)?'phsupgy':'phsupg'">到达1e16淀粉：在惊奇风盒解锁3∞面体波，增加41~48式风灵的每2倍作成指数</button></td>
          <td><button align="center" :class="player.sucram.gte(1e16)?'phsupgy':'phsupg'">到达1e16蔗糖：解锁太阳风选项卡和4种太阳风灵</button></td>
        </tr>
      </table>
    </div>
    <div v-else align="center" class="ftsz2">需要购买量子升级26</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, colRlit, colBlit } = useGameState()

// 光合作用游戏状态
const isPhotosynthesisRunning = ref(false)
const photosynthesisSpeed = ref(1)
const temperature = ref(25)
const lightIntensity = ref(50)

// 切换光合作用运行状态
const togglePhotosynthesis = () => {
  isPhotosynthesisRunning.value = !isPhotosynthesisRunning.value
}

// 重置光合作用
const resetPhotosynthesis = () => {
  isPhotosynthesisRunning.value = false
  photosynthesisSpeed.value = 1
  temperature.value = 25
  lightIntensity.value = 50
}

// 光合作用模拟定时器
let photosynthesisTimer = null

onMounted(() => {
  photosynthesisTimer = setInterval(() => {
    if (isPhotosynthesisRunning.value) {
      // 光合作用速率受温度和光照强度影响
      const tempFactor = Math.max(0, Math.min(1, (temperature.value - 10) / 30))
      const lightFactor = lightIntensity.value / 100
      const rate = tempFactor * lightFactor * photosynthesisSpeed.value
      // 这里可以添加更多的光合作用逻辑
    }
  }, 1000)
})

onUnmounted(() => {
  if (photosynthesisTimer) {
    clearInterval(photosynthesisTimer)
  }
})
</script>

<style scoped>
.game-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.control-btn {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.control-btn:hover {
  background-color: #45a049;
}

.conditions-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.conditions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.condition-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.condition-item label {
  color: #ffffff;
  font-size: 14px;
}

.condition-item input[type="range"] {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #555;
  outline: none;
}

.substances-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.substances-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.substance-card {
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid;
  border-radius: 8px;
  padding: 10px;
}

.substance-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.substance-header h4 {
  margin: 0;
  color: #ffffff;
  font-size: 12px;
}

.substance-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.substance-amount {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.amount-value {
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
}

.amount-rate {
  font-size: 12px;
  color: #aaaaaa;
}

.substance-bar {
  width: 100%;
  height: 6px;
  background-color: #333;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
}

.bar-fill {
  height: 100%;
  transition: width 0.5s;
  border-radius: 3px;
}
</style>
