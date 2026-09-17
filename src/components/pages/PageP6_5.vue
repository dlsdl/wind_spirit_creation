<template>
  <div id="p6_5">
    <div class="btnrow" v-if="player.magstobest.gte(4000)">
      <div align="center" class="ftsz2">遗传育种模拟 - 选择植物进行杂交培育</div>

      <!-- 长方形纯色按钮 -->
      <div class="btnrow">
        <button class="PL6btn" @click="crossSelectedPlants" :disabled="selectedPlants.length !== 2">杂交选中植物</button>
        <button class="PL6btn" @click="selfCrossSelectedPlant" :disabled="selectedPlants.length !== 1">自交选中植物</button>
        <button class="PL6btn" @click="resetBreedingGame">重置</button>
      </div>

      <!-- 长方型长条：育种条件 -->
      <div class="PL6bar">
        育种速度：<input type="range" class="PL6slider" v-model.number="breedingSpeed" min="0.1" max="5" step="0.1" /> {{ breedingSpeed.toFixed(1) }}
        突变率：<input type="range" class="PL6slider" v-model.number="mutationRate" min="0" max="10" step="0.1" /> {{ mutationRate.toFixed(2) }}%
        选择压力：<input type="range" class="PL6slider" v-model.number="selectionPressure" min="0" max="5" step="0.1" /> {{ selectionPressure.toFixed(1) }}
      </div>

      <!-- 长方型长条：育种资源 -->
      <div align="center" class="ftsz2">育种资源</div>
      <div class="PL6bar">纯合亲本：{{notatint(player.parents)}}</div>
      <div class="PL6bar">育种工具：{{notatint(player.tools)}}</div>
      <div class="PL6bar">优良基因：{{notation(player.goodGenes)}}（太阳风灵×{{notation(v.bioalceff)}}）</div>
      <div class="PL6bar">遗传稳定性：{{notation(player.stability.mul(100))}}%</div>

      <!-- 长方形框按钮：购买资源 -->
      <table align="center">
        <tbody>
          <tr>
            <td><button class="PL6upgno" @click="buyAlchemyParent()">购买纯合亲本<br />花费：{{notation(v.parentPrice)}}扭敧点</button></td>
            <td><button class="PL6upgno" @click="buyAlchemyTool()">购买育种工具<br />花费：{{notation(v.toolPrice)}}扭敧能量</button></td>
          </tr>
        </tbody>
      </table>

      <!-- 长方型长条：当前植物状态 -->
      <div align="center" class="ftsz2">当前植物状态</div>
      <div class="PL6bar">
        世代：第{{notatint(player.generation)}}代
        表型：{{player.phenotype === 'dominant' ? '显性性状' : player.phenotype === 'recessive' ? '隐性性状' : '未选择'}}
        纯合度：{{notation(player.homozygosity.mul(100))}}%
      </div>

      <!-- 长方形框按钮：育种操作 -->
      <div align="center" class="ftsz2">育种操作</div>
      <table align="center">
        <tbody>
          <tr>
            <td><button class="PL6upgno" @click="startHybridization()">开始杂交<br />P代 × P代 → F1代<br />使用两个纯合亲本杂交，获得杂合子一代</button></td>
            <td><button class="PL6upgno" @click="selfPollinate()">自交繁殖<br />F{{notatint(player.generation)}}代 → F{{notatint(player.generation.add(1))}}代<br />让子一代进行自交，增加纯合度</button></td>
            <td><button class="PL6upgno" @click="selectDominant()">选择显性性状<br />筛选显性植株<br />继续自交获得稳定遗传类型</button></td>
            <td><button class="PL6upgno" @click="selectRecessive()">选择隐性性状<br />育种完成<br />选择隐性性状的植株，育种过程完成</button></td>
          </tr>
        </tbody>
      </table>

      <!-- 长方形框按钮：植物种群（选中态用 yes） -->
      <div align="center" class="ftsz2">植物种群（选择两棵植物杂交，或选择一棵自交）</div>
      <table align="center">
        <tbody>
          <tr>
            <td v-for="plant in displayPlants" :key="plant.id">
              <button
                :class="selectedPlants.includes(plant.id)?'PL6upgyes':'PL6upgno'"
                @click="selectPlant(plant.id)">
                植物 #{{plant.id}}（第{{plant.generation}}代）<br />
                产量：{{plant.yield.toFixed(2)}}<br />
                <span v-for="gene in genes" :key="gene.name">{{gene.name}}:{{plant.genotype[gene.name] || '??'}} </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 长方型长条：育种历史 -->
      <div align="center" class="ftsz2">育种历史</div>
      <div v-for="(record, index) in getAlchemyHistory()" :key="index" class="PL6bar">
        第{{record.generation}}代：{{record.action}} {{record.result}}
      </div>
      <div v-if="getAlchemyHistory().length === 0" class="PL6bar">暂无育种记录</div>
    </div>
    <div v-else align="center" class="ftsz2">需要电磁暴指数到达4000</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, buyAlchemyParent, buyAlchemyTool, startHybridization, selfPollinate, selectDominant, selectRecessive, getAlchemyHistory } = useGameState()

// 育种参数（目前只影响展示）
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
  selectedPlants.value = []
}

// 自交选中的植物
const selfCrossSelectedPlant = () => {
  if (selectedPlants.value.length !== 1) return
  selectedPlants.value = []
}

// 重置育种
const resetBreedingGame = () => {
  selectedPlants.value = []
  breedingSpeed.value = 1
  mutationRate.value = 0.5
  selectionPressure.value = 1
}
</script>
