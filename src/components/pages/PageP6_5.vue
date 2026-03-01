<template>
  <div id="p6_5">
    <div class="btnrow" v-if="player.magstobest.gte(4000)">
      <div align="center" class="ftsz2">遗传育种模拟 - 选择植物进行杂交培育</div>
      
      <!-- 游戏控制按钮 -->
      <div class="game-controls">
        <button class="control-btn" @click="crossSelectedPlants" :disabled="selectedPlants.length !== 2">
          杂交选中植物
        </button>
        <button class="control-btn" @click="selfCrossSelectedPlant" :disabled="selectedPlants.length !== 1">
          自交选中植物
        </button>
        <button class="control-btn" @click="resetBreedingGame">重置</button>
      </div>

      <!-- 育种条件控制 -->
      <div class="conditions-section">
        <div class="conditions-grid">
          <div class="condition-item">
            <label>育种速度: {{ breedingSpeed.toFixed(1) }}</label>
            <input type="range" v-model.number="breedingSpeed" min="0.1" max="5" step="0.1" />
          </div>
          <div class="condition-item">
            <label>突变率: {{ mutationRate.toFixed(2) }}%</label>
            <input type="range" v-model.number="mutationRate" min="0" max="10" step="0.1" />
          </div>
          <div class="condition-item">
            <label>选择压力: {{ selectionPressure.toFixed(1) }}</label>
            <input type="range" v-model.number="selectionPressure" min="0" max="5" step="0.1" />
          </div>
        </div>
      </div>

      <!-- 资源显示 -->
      <div class="resources-section">
        <h3 style="color: #ffffff; text-align: center;">育种资源</h3>
        <div class="resources-grid">
          <div class="resource-card" style="border-color: #4CAF50;">
            <div class="resource-header">
              <h4>纯合亲本</h4>
              <div class="resource-color" style="background-color: #4CAF50;"></div>
            </div>
            <div class="resource-amount">
              <span class="amount-value">{{ notatint(player.parents) }}</span>
            </div>
            <button @click="buyAlchemyParent()" class="resource-btn">购买<br />花费：{{notation(v.parentPrice)}}扭敧点</button>
          </div>
          <div class="resource-card" style="border-color: #2196F3;">
            <div class="resource-header">
              <h4>育种工具</h4>
              <div class="resource-color" style="background-color: #2196F3;"></div>
            </div>
            <div class="resource-amount">
              <span class="amount-value">{{ notatint(player.tools) }}</span>
            </div>
            <button @click="buyAlchemyTool()" class="resource-btn">购买<br />花费：{{notation(v.toolPrice)}}扭敧能量</button>
          </div>
          <div class="resource-card" style="border-color: #FF9800;">
            <div class="resource-header">
              <h4>优良基因</h4>
              <div class="resource-color" style="background-color: #FF9800;"></div>
            </div>
            <div class="resource-amount">
              <span class="amount-value">{{ notation(player.goodGenes) }}</span>
              <span class="amount-effect">太阳风灵×{{notation(v.bioalceff)}}</span>
            </div>
          </div>
          <div class="resource-card" style="border-color: #9C27B0;">
            <div class="resource-header">
              <h4>遗传稳定性</h4>
              <div class="resource-color" style="background-color: #9C27B0;"></div>
            </div>
            <div class="resource-amount">
              <span class="amount-value">{{ notation(player.stability.mul(100)) }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 当前植物状态 -->
      <div class="plant-status-section">
        <h3 style="color: #ffffff; text-align: center;">当前植物状态</h3>
        <div class="status-grid">
          <div class="status-card">
            <span class="status-label">世代</span>
            <span class="status-value">第{{ notatint(player.generation) }}代</span>
          </div>
          <div class="status-card">
            <span class="status-label">表型</span>
            <span class="status-value">
              <span v-if="player.phenotype === 'dominant'">显性性状</span>
              <span v-else-if="player.phenotype === 'recessive'">隐性性状</span>
              <span v-else>未选择</span>
            </span>
          </div>
          <div class="status-card">
            <span class="status-label">纯合度</span>
            <span class="status-value">{{ notation(player.homozygosity.mul(100)) }}%</span>
          </div>
        </div>
      </div>

      <!-- 育种操作 -->
      <div class="operations-section">
        <h3 style="color: #ffffff; text-align: center;">育种操作</h3>
        <div class="operations-grid">
          <div class="operation-card" @click="startHybridization()">
            <div class="operation-icon">🌱</div>
            <div class="operation-title">开始杂交</div>
            <div class="operation-desc">P代 × P代 → F1代</div>
            <div class="operation-detail">使用两个纯合亲本杂交，获得杂合子一代</div>
          </div>
          <div class="operation-card" @click="selfPollinate()">
            <div class="operation-icon">🌿</div>
            <div class="operation-title">自交繁殖</div>
            <div class="operation-desc">F{{ notatint(player.generation) }}代 → F{{ notatint(player.generation.add(1)) }}代</div>
            <div class="operation-detail">让子一代进行自交，增加纯合度</div>
          </div>
          <div class="operation-card" @click="selectDominant()">
            <div class="operation-icon">🌳</div>
            <div class="operation-title">选择显性性状</div>
            <div class="operation-desc">筛选显性植株</div>
            <div class="operation-detail">选择显性性状的植株，继续自交获得稳定遗传类型</div>
          </div>
          <div class="operation-card" @click="selectRecessive()">
            <div class="operation-icon">🌾</div>
            <div class="operation-title">选择隐性性状</div>
            <div class="operation-desc">育种完成</div>
            <div class="operation-detail">选择隐性性状的植株，育种过程完成</div>
          </div>
        </div>
      </div>

      <!-- 植物卡片显示 -->
      <div class="plants-section">
        <h3 style="color: #ffffff; text-align: center;">植物种群</h3>
        <p class="section-desc">选择两棵植物进行杂交，或选择一棵植物进行自交</p>
        <div class="plants-grid">
          <div 
            v-for="plant in displayPlants" 
            :key="plant.id"
            class="plant-card"
            :class="{ selected: selectedPlants.includes(plant.id) }"
            @click="selectPlant(plant.id)"
          >
            <div class="plant-header">
              <h4>植物 #{{ plant.id }}</h4>
              <div class="plant-generation">第 {{ plant.generation }} 代</div>
            </div>
            <div class="plant-yield">
              <span class="yield-label">产量:</span>
              <span class="yield-value">{{ plant.yield.toFixed(2) }}</span>
            </div>
            <div class="plant-genotype">
              <div class="genotype-grid">
                <div v-for="gene in genes" :key="gene.name" class="genotype-item">
                  <span class="gene-name">{{ gene.name }}:</span>
                  <span class="gene-alleles">{{ plant.genotype[gene.name] || '??' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 育种历史 -->
      <div class="history-section">
        <h3 style="color: #ffffff; text-align: center;">育种历史</h3>
        <div class="history-container">
          <div v-for="(record, index) in getAlchemyHistory()" :key="index" class="history-item">
            <span class="history-gen">第{{ record.generation }}代：</span>
            <span class="history-action">{{ record.action }}</span>
            <span class="history-result">{{ record.result }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else align="center" class="ftsz2">需要电磁暴指数到达4000</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, buyAlchemyParent, buyAlchemyTool, startHybridization, selfPollinate, selectDominant, selectRecessive, getAlchemyHistory } = useGameState()

// 遗传育种游戏状态
const breedingSpeed = ref(1)
const mutationRate = ref(0.5)
const selectionPressure = ref(1)
const selectedPlants = ref([])

// 基因定义
const genes = [
  { name: 'A', alleles: ['A', 'a'], effect: 0.5 },
  { name: 'B', alleles: ['B', 'b'], effect: 0.5 },
  { name: 'C', alleles: ['C', 'c'], effect: 0.5 },
  { name: 'D', alleles: ['D', 'd'], effect: 0.5 },
  { name: 'E', alleles: ['E', 'e'], effect: 0.5 }
]

// 模拟植物数据
const displayPlants = ref([
  { id: 1, generation: 0, yield: 2.5, genotype: { A: 'Aa', B: 'BB', C: 'cc', D: 'Dd', E: 'EE' } },
  { id: 2, generation: 0, yield: 3.0, genotype: { A: 'AA', B: 'bb', C: 'Cc', D: 'DD', E: 'ee' } }
])

// 选择植物
const selectPlant = (plantId) => {
  const index = selectedPlants.value.indexOf(plantId)
  if (index > -1) {
    selectedPlants.value.splice(index, 1)
  } else if (selectedPlants.value.length < 2) {
    selectedPlants.value.push(plantId)
  }
}

// 杂交选中的植物
const crossSelectedPlants = () => {
  if (selectedPlants.value.length !== 2) return
  // 杂交逻辑
  selectedPlants.value = []
}

// 自交选中的植物
const selfCrossSelectedPlant = () => {
  if (selectedPlants.value.length !== 1) return
  // 自交逻辑
  selectedPlants.value = []
}

// 重置育种游戏
const resetBreedingGame = () => {
  selectedPlants.value = []
  breedingSpeed.value = 1
  mutationRate.value = 0.5
  selectionPressure.value = 1
}
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

.control-btn:disabled {
  background-color: #666;
  cursor: not-allowed;
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

.resources-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.resource-card {
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid;
  border-radius: 8px;
  padding: 10px;
}

.resource-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.resource-header h4 {
  margin: 0;
  color: #ffffff;
  font-size: 12px;
}

.resource-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.resource-amount {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
}

.amount-value {
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
}

.amount-effect {
  font-size: 10px;
  color: #aaaaaa;
}

.resource-btn {
  width: 100%;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 5px;
  font-size: 10px;
  cursor: pointer;
  border-radius: 3px;
}

.resource-btn:hover {
  background-color: #45a049;
}

.plant-status-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.status-card {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.status-label {
  display: block;
  font-size: 12px;
  color: #aaaaaa;
  margin-bottom: 5px;
}

.status-value {
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}

.operations-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.operations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
}

.operation-card {
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid #4CAF50;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.operation-card:hover {
  background-color: rgba(76, 175, 80, 0.2);
  transform: translateY(-3px);
}

.operation-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.operation-title {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 5px;
}

.operation-desc {
  font-size: 12px;
  color: #4CAF50;
  margin-bottom: 5px;
}

.operation-detail {
  font-size: 10px;
  color: #aaaaaa;
}

.plants-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.section-desc {
  text-align: center;
  color: #aaaaaa;
  font-size: 12px;
  margin-bottom: 15px;
}

.plants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.plant-card {
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid #4CAF50;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s;
}

.plant-card:hover {
  border-color: #2196F3;
  transform: translateY(-3px);
}

.plant-card.selected {
  border-color: #2196F3;
  background-color: rgba(33, 150, 243, 0.2);
}

.plant-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.plant-header h4 {
  margin: 0;
  color: #ffffff;
  font-size: 14px;
}

.plant-generation {
  background-color: #4CAF50;
  color: white;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 10px;
}

.plant-yield {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.yield-label {
  font-size: 12px;
  color: #aaaaaa;
}

.yield-value {
  font-size: 18px;
  font-weight: bold;
  color: #4CAF50;
}

.genotype-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
}

.genotype-item {
  text-align: center;
}

.gene-name {
  display: block;
  font-size: 10px;
  color: #aaaaaa;
}

.gene-alleles {
  display: block;
  font-size: 12px;
  font-weight: bold;
  color: #2196F3;
  font-family: monospace;
}

.history-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.history-container {
  max-height: 200px;
  overflow-y: auto;
}

.history-item {
  display: flex;
  gap: 10px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 5px;
  font-size: 12px;
}

.history-gen {
  color: #4CAF50;
}

.history-action {
  color: #ffffff;
}

.history-result {
  color: #aaaaaa;
}
</style>
