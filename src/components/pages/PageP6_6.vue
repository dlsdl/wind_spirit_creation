<template>
  <div id="p6_6">
    <div class="btnrow" v-if="player.hasunlockedanm5">
      <div align="center" class="ftsz2">生态系统模拟 - 观察能量在食物链中的流动</div>
      
      <!-- 游戏控制按钮 -->
      <div class="game-controls">
        <button class="control-btn" @click="toggleEcosystem">
          {{ isEcosystemRunning ? '暂停' : '开始' }}
        </button>
        <button class="control-btn" @click="resetEcosystem">重置</button>
      </div>

      <!-- 生态系统条件控制 -->
      <div class="conditions-section">
        <div class="conditions-grid">
          <div class="condition-item">
            <label>模拟速度: {{ ecosystemSpeed.toFixed(1) }}</label>
            <input type="range" v-model.number="ecosystemSpeed" min="0.1" max="5" step="0.1" />
          </div>
          <div class="condition-item">
            <label>能量传递效率: {{ energyTransferRate.toFixed(1) }}%</label>
            <input type="range" v-model.number="energyTransferRate" min="5" max="20" step="0.5" />
          </div>
          <div class="condition-item">
            <label>环境承载力: {{ carryingCapacity.toFixed(0) }}</label>
            <input type="range" v-model.number="carryingCapacity" min="50" max="500" step="10" />
          </div>
        </div>
      </div>

      <!-- 生态系统描述 -->
      <div class="ecosystem-description">
        <p>构建复杂的生态系统，通过生产者-消费者的能量流动获得风之徲粖获取，数量每到达1e6解锁下一级消费者</p>
      </div>

      <!-- 生物种群显示 -->
      <div class="organisms-section">
        <h3 style="color: #ffffff; text-align: center;">生物种群</h3>
        <div class="organisms-grid">
          <div class="organism-card" style="border-color: #4CAF50;">
            <div class="organism-header">
              <h4>生产者</h4>
              <div class="organism-icon">🌱</div>
            </div>
            <div class="organism-content">
              <div class="organism-stats">
                <div class="stat-row">
                  <span class="stat-label">数量:</span>
                  <span class="stat-value">{{ notation(player.producer) }}</span>
                </div>
                <div class="stat-row">
                  <span class="stat-label">产量:</span>
                  <span class="stat-rate" style="color: #80ff00;">+{{ notation(v.producerps) }}/秒</span>
                </div>
              </div>
              <div class="organism-bar">
                <div class="bar-fill" :style="{ width: getBarWidth(player.producer), backgroundColor: '#4CAF50' }"></div>
              </div>
              <div class="organism-desc">利用光能制造有机物的生物，如植物</div>
            </div>
            <button class="organism-btn" @click="buyecou(1)">
              升级 (×2) - {{ notation(v.ecou01c) }} 生产者
            </button>
          </div>

          <div class="organism-card" style="border-color: #FF9800;">
            <div class="organism-header">
              <h4>一级消费者</h4>
              <div class="organism-icon">🐰</div>
            </div>
            <div class="organism-content">
              <div class="organism-stats">
                <div class="stat-row">
                  <span class="stat-label">数量:</span>
                  <span class="stat-value">{{ notation(player.consumer1) }}</span>
                </div>
                <div class="stat-row">
                  <span class="stat-label">产量:</span>
                  <span class="stat-rate" style="color: #ffff00;">+{{ notation(v.consumer1ps) }}/秒</span>
                </div>
              </div>
              <div class="organism-bar">
                <div class="bar-fill" :style="{ width: getBarWidth(player.consumer1), backgroundColor: '#FF9800' }"></div>
              </div>
              <div class="organism-desc">以生产者为食的生物，如草食动物</div>
            </div>
            <button class="organism-btn" @click="buyecou(2)">
              升级 (×2) - {{ notation(v.ecou02c) }} 一级消费者
            </button>
          </div>

          <div class="organism-card" style="border-color: #F44336;">
            <div class="organism-header">
              <h4>二级消费者</h4>
              <div class="organism-icon">🦊</div>
            </div>
            <div class="organism-content">
              <div class="organism-stats">
                <div class="stat-row">
                  <span class="stat-label">数量:</span>
                  <span class="stat-value">{{ notation(player.consumer2) }}</span>
                </div>
                <div class="stat-row">
                  <span class="stat-label">产量:</span>
                  <span class="stat-rate" style="color: #ff8000;">+{{ notation(v.consumer2ps) }}/秒</span>
                </div>
              </div>
              <div class="organism-bar">
                <div class="bar-fill" :style="{ width: getBarWidth(player.consumer2), backgroundColor: '#F44336' }"></div>
              </div>
              <div class="organism-desc">以一级消费者为食的生物，如小型肉食动物</div>
            </div>
            <button class="organism-btn" @click="buyecou(3)">
              升级 (×2) - {{ notation(v.ecou03c) }} 二级消费者
            </button>
          </div>

          <div class="organism-card" style="border-color: #9C27B0;">
            <div class="organism-header">
              <h4>三级消费者</h4>
              <div class="organism-icon">🦁</div>
            </div>
            <div class="organism-content">
              <div class="organism-stats">
                <div class="stat-row">
                  <span class="stat-label">数量:</span>
                  <span class="stat-value">{{ notation(player.consumer3) }}</span>
                </div>
                <div class="stat-row">
                  <span class="stat-label">产量:</span>
                  <span class="stat-rate" style="color: #ff0000;">+{{ notation(v.consumer3ps) }}/秒</span>
                </div>
              </div>
              <div class="organism-bar">
                <div class="bar-fill" :style="{ width: getBarWidth(player.consumer3), backgroundColor: '#9C27B0' }"></div>
              </div>
              <div class="organism-desc">以二级消费者为食的生物，如顶级肉食动物</div>
            </div>
            <button class="organism-btn" @click="buyecou(4)">
              升级 (×2) - {{ notation(v.ecou04c) }} 三级消费者
            </button>
          </div>

          <div class="organism-card" style="border-color: #795548;">
            <div class="organism-header">
              <h4>分解者</h4>
              <div class="organism-icon">🍄</div>
            </div>
            <div class="organism-content">
              <div class="organism-stats">
                <div class="stat-row">
                  <span class="stat-label">数量:</span>
                  <span class="stat-value">{{ notation(player.decomposer || 0) }}</span>
                </div>
                <div class="stat-row">
                  <span class="stat-label">作用:</span>
                  <span class="stat-rate">分解有机物</span>
                </div>
              </div>
              <div class="organism-bar">
                <div class="bar-fill" :style="{ width: getBarWidth(player.decomposer || 0), backgroundColor: '#795548' }"></div>
              </div>
              <div class="organism-desc">分解动植物遗体的生物，如细菌和真菌</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 系统效果 -->
      <div class="effect-section">
        <div class="effect-display">
          <span style="color: #8000ff;">系统效果：基于生态系统复杂度提供{{notation(v.anm5ps)}}基础风之徲粖产量</span>
        </div>
      </div>

      <!-- 风之徲粖状态 -->
      <div class="resource-section">
        <h3 style="color: #ffffff; text-align: center;">风之徲粖</h3>
        <div class="resource-display">
          <div class="resource-main">
            <span class="resource-value" style="color: #8000ff;">{{ notation(player.anm5) }}</span>
            <span class="resource-rate" style="color: #8000ff;">(+{{ notation(v.anm5ps) }}/s)</span>
          </div>
          <div class="resource-effect">
            以log2(log2(x+1)+1)^{{notation(player.anm5u03.div(64).add(0.0625).min(player.anm5u03.div(64).add(0.0625).root(4)))}}的效果使风之徱粕获取^{{notation(player.anm5.add(1).log(2).add(1).log(2).max(1).pow(player.anm5u03.div(64).add(0.0625).min(player.anm5u03.div(64).add(0.0625).root(4))))}}
          </div>
        </div>
      </div>

      <!-- 升级表格 -->
      <div class="upgrades-section">
        <h3 style="color: #ffffff; text-align: center;">生态系统升级</h3>
        <div class="upgrades-grid">
          <div class="upgrade-card">
            <button class="upgrade-btn" @click="buyanm5u(1)">
              <div class="upgrade-title">双倍风之徲粖产量</div>
              <div class="upgrade-scale">{{ascale(player.anm5u01,1)}}等级{{notatint(player.anm5u01)}}</div>
              <div class="upgrade-effect">当前：×{{notation(player.anm5u01.pwb(2))}}</div>
              <div class="upgrade-cost">花费：{{notation(v.anm5c01)}}风之徲粖</div>
            </button>
          </div>
          <div class="upgrade-card">
            <button class="upgrade-btn" @click="buyanm5u(2)">
              <div class="upgrade-title">风之徲粖提升41~48式风灵乘数</div>
              <div class="upgrade-scale">{{ascale(player.anm5u02,2)}}等级{{notatint(player.anm5u02)}}</div>
              <div class="upgrade-effect">当前：×{{notation(player.anm5.pow(player.anm5u02.mul(67108864)).max(1))}}</div>
              <div class="upgrade-cost">花费：{{notation(v.anm5c02)}}风之徲粖</div>
            </button>
          </div>
          <div class="upgrade-card">
            <button class="upgrade-btn" @click="buyanm5u(3)">
              <div class="upgrade-title">增加风之徲粖效果指数</div>
              <div class="upgrade-scale">{{ascale(player.anm5u03,3)}}等级{{notatint(player.anm5u03)}}</div>
              <div class="upgrade-effect">当前：+{{notation(player.anm5u03.div(64).min(player.anm5u03.div(64).add(0.0625).root(4).sub(0.0625)))}}{{player.anm5u03.gte(60)?"(受软上限限制)":""}}</div>
              <div class="upgrade-cost">花费：{{notation(v.anm5c03)}}风之徲粖</div>
            </button>
          </div>
          <div class="upgrade-card">
            <button class="upgrade-btn" @click="buyanm5u(4)">
              <div class="upgrade-title">增加二阶游戏速度</div>
              <div class="upgrade-scale">{{ascale(player.anm5u04,4)}}等级{{notatint(player.anm5u04)}}</div>
              <div class="upgrade-effect">当前：×{{notation(player.anm5u04.div(7).add(1))}}</div>
              <div class="upgrade-cost">花费：{{notation(v.anm5c04)}}风之徲粖</div>
            </button>
          </div>
        </div>
      </div>

      <!-- 能量流动图示 -->
      <div class="energy-flow-section">
        <h3 style="color: #ffffff; text-align: center;">能量流动</h3>
        <div class="energy-flow-diagram">
          <div class="flow-item">
            <div class="flow-icon">☀️</div>
            <div class="flow-label">太阳光能</div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-item">
            <div class="flow-icon">🌱</div>
            <div class="flow-label">生产者</div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-item">
            <div class="flow-icon">🐰</div>
            <div class="flow-label">一级消费者</div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-item">
            <div class="flow-icon">🦊</div>
            <div class="flow-label">二级消费者</div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-item">
            <div class="flow-icon">🦁</div>
            <div class="flow-label">三级消费者</div>
          </div>
        </div>
        <div class="decomposer-flow">
          <div class="flow-item">
            <div class="flow-icon">🍄</div>
            <div class="flow-label">分解者（循环利用）</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="btnrow">
      <button align="center" class="xxButton" @click="ulAnm5()" style="background-color:#8000ff">解锁生态系统<br />花费：1e200000扭敧点</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, ascale, buyecou, buyanm5u, ulAnm5 } = useGameState()

// 生态系统游戏状态
const isEcosystemRunning = ref(false)
const ecosystemSpeed = ref(1)
const energyTransferRate = ref(10)
const carryingCapacity = ref(200)

// 切换生态系统运行状态
const toggleEcosystem = () => {
  isEcosystemRunning.value = !isEcosystemRunning.value
}

// 重置生态系统
const resetEcosystem = () => {
  isEcosystemRunning.value = false
  ecosystemSpeed.value = 1
  energyTransferRate.value = 10
  carryingCapacity.value = 200
}

// 计算进度条宽度
const getBarWidth = (value) => {
  if (!value) return '0%'
  const maxVal = carryingCapacity.value
  const percentage = Math.min(100, (value.toNumber ? value.toNumber() : value) / maxVal * 100)
  return `${percentage}%`
}

// 生态系统模拟定时器
let ecosystemTimer = null

onMounted(() => {
  ecosystemTimer = setInterval(() => {
    if (isEcosystemRunning.value) {
      // 生态系统模拟逻辑
    }
  }, 1000)
})

onUnmounted(() => {
  if (ecosystemTimer) {
    clearInterval(ecosystemTimer)
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

.ecosystem-description {
  text-align: center;
  padding: 10px;
  color: #aaaaaa;
  font-size: 14px;
}

.organisms-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.organisms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.organism-card {
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid;
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.3s;
}

.organism-card:hover {
  transform: translateY(-3px);
}

.organism-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.organism-header h4 {
  margin: 0;
  color: #ffffff;
  font-size: 14px;
}

.organism-icon {
  font-size: 24px;
}

.organism-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.organism-stats {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-label {
  font-size: 12px;
  color: #aaaaaa;
}

.stat-value {
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
}

.stat-rate {
  font-size: 12px;
}

.organism-bar {
  width: 100%;
  height: 6px;
  background-color: #333;
  border-radius: 3px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  transition: width 0.5s;
  border-radius: 3px;
}

.organism-desc {
  font-size: 10px;
  color: #888;
}

.organism-btn {
  width: 100%;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px;
  font-size: 11px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.organism-btn:hover {
  background-color: #45a049;
}

.effect-section {
  background-color: rgba(128, 0, 255, 0.2);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
  text-align: center;
}

.effect-display {
  font-size: 14px;
}

.resource-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.resource-display {
  text-align: center;
}

.resource-main {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 10px;
}

.resource-value {
  font-size: 24px;
  font-weight: bold;
}

.resource-rate {
  font-size: 14px;
}

.resource-effect {
  font-size: 12px;
  color: #aaaaaa;
}

.upgrades-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.upgrades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.upgrade-card {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.upgrade-btn {
  width: 100%;
  background-color: transparent;
  border: 2px solid #8000ff;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  color: #ffffff;
}

.upgrade-btn:hover {
  background-color: rgba(128, 0, 255, 0.2);
}

.upgrade-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #ffffff;
}

.upgrade-scale {
  font-size: 12px;
  color: #aaaaaa;
  margin-bottom: 5px;
}

.upgrade-effect {
  font-size: 12px;
  color: #8000ff;
  margin-bottom: 5px;
}

.upgrade-cost {
  font-size: 11px;
  color: #888;
}

.energy-flow-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.energy-flow-diagram {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.flow-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.flow-icon {
  font-size: 28px;
}

.flow-label {
  font-size: 10px;
  color: #aaaaaa;
}

.flow-arrow {
  font-size: 20px;
  color: #4CAF50;
}

.decomposer-flow {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  border-top: 1px dashed #555;
}
</style>
