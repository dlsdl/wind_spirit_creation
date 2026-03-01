<template>
  <div id="p6_8">
    <div class="btnrow" v-if="player.PL5ptsttl.gte('1e10000000')">
      <div align="center" class="ftsz2">CRISPR-Cas9 基因编辑模拟</div>
      
      <!-- 游戏控制按钮 -->
      <div class="game-controls">
        <button class="control-btn" @click="resetCrispr">重置</button>
      </div>

      <!-- CRISPR条件控制 -->
      <div class="conditions-section">
        <div class="conditions-grid">
          <div class="condition-item">
            <label>编辑精度: {{ editingPrecision.toFixed(1) }}%</label>
            <input type="range" v-model.number="editingPrecision" min="50" max="100" step="1" />
          </div>
          <div class="condition-item">
            <label>脱靶率: {{ offTargetRate.toFixed(2) }}%</label>
            <input type="range" v-model.number="offTargetRate" min="0" max="10" step="0.1" />
          </div>
          <div class="condition-item">
            <label>修复效率: {{ repairEfficiency.toFixed(1) }}%</label>
            <input type="range" v-model.number="repairEfficiency" min="10" max="100" step="1" />
          </div>
        </div>
      </div>

      <!-- CRISPR描述 -->
      <div class="crispr-description">
        <p>CRISPR-Cas9基因编辑技术，通过生成引导RNA来编辑目标DNA序列。选择一个DNA序列，生成或输入引导RNA，然后执行编辑。</p>
      </div>

      <!-- DNA序列列表 -->
      <div class="dna-section">
        <h3 style="color: #ffffff; text-align: center;">DNA序列</h3>
        <div class="dna-grid">
          <div 
            v-for="sequence in dnaSequences" 
            :key="sequence.id"
            class="dna-card"
            :class="{ selected: selectedSequence === sequence.id, edited: sequence.isEdited }"
            @click="selectSequence(sequence.id)"
          >
            <div class="dna-header">
              <h4>序列 #{{ sequence.id }}</h4>
              <div class="dna-status" :class="{ edited: sequence.isEdited }">
                {{ sequence.isEdited ? '已编辑' : '未编辑' }}
              </div>
            </div>
            <div class="dna-content">
              <div class="dna-display">
                <span class="dna-label">序列:</span>
                <span class="dna-sequence">{{ formatSequence(sequence.sequence) }}</span>
              </div>
              <div class="dna-target">
                <span class="target-label">目标:</span>
                <span class="target-sequence">{{ sequence.targetSequence }}</span>
              </div>
              <div class="dna-grna" v-if="sequence.guideRNA">
                <span class="grna-label">引导RNA:</span>
                <span class="grna-sequence">{{ sequence.guideRNA }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CRISPR编辑控制 -->
      <div class="edit-section" v-if="selectedSequence">
        <h3 style="color: #ffffff; text-align: center;">CRISPR编辑</h3>
        <div class="edit-controls">
          <div class="control-group">
            <label>引导RNA序列:</label>
            <div class="input-row">
              <input 
                type="text" 
                v-model="customGuideRNA"
                placeholder="输入引导RNA序列 (如: UAGC)"
                maxlength="20"
                class="grna-input"
              />
              <button class="control-btn" @click="setCustomGuideRNA">设置</button>
            </div>
          </div>
          
          <div class="button-group">
            <button class="control-btn primary" @click="generateGuideRNA">
              自动生成引导RNA
            </button>
            <button class="control-btn success" @click="performEdit">
              执行CRISPR编辑
            </button>
          </div>
          
          <div v-if="message" class="message" :class="{ success: editSuccess === true, error: editSuccess === false }">
            {{ message }}
          </div>
        </div>
      </div>
      <div v-else class="no-selection-section">
        <p>请选择一个DNA序列开始编辑</p>
      </div>

      <!-- 编辑结果 -->
      <div class="result-section" v-if="editSuccess !== null && selectedSequence">
        <h3 style="color: #ffffff; text-align: center;">编辑结果</h3>
        <div class="result-display">
          <div class="result-item">
            <span class="result-label">原始序列:</span>
            <div class="result-sequence original">
              {{ formatSequence(getCurrentSequence()?.sequence || '') }}
            </div>
          </div>
          <div class="result-item" v-if="editSuccess">
            <span class="result-label">编辑后序列:</span>
            <div class="result-sequence edited">
              {{ formatSequence(getCurrentSequence()?.editedSequence || '') }}
            </div>
          </div>
          <div class="result-status" :class="{ success: editSuccess, error: !editSuccess }">
            {{ editSuccess ? '✓ 编辑成功！目标序列已被修改。' : '✗ 编辑失败！引导RNA与目标序列不匹配。' }}
          </div>
        </div>
      </div>

      <!-- 基因编辑技术说明 -->
      <div class="info-section">
        <h3 style="color: #ffffff; text-align: center;">CRISPR-Cas9 技术原理</h3>
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">🔬</div>
            <div class="info-title">识别目标</div>
            <div class="info-desc">Cas9蛋白与引导RNA结合，识别目标DNA序列</div>
          </div>
          <div class="info-card">
            <div class="info-icon">✂️</div>
            <div class="info-title">切割DNA</div>
            <div class="info-desc">Cas9在目标位置切割DNA双链</div>
          </div>
          <div class="info-card">
            <div class="info-icon">🧬</div>
            <div class="info-title">修复编辑</div>
            <div class="info-desc">细胞修复机制引入新的基因序列</div>
          </div>
          <div class="info-card">
            <div class="info-icon">✅</div>
            <div class="info-title">验证结果</div>
            <div class="info-desc">检测编辑是否成功完成</div>
          </div>
        </div>
      </div>

      <!-- 碱基配对参考 -->
      <div class="reference-section">
        <h3 style="color: #ffffff; text-align: center;">碱基配对规则</h3>
        <div class="reference-grid">
          <div class="reference-item">
            <span class="base dna">A</span>
            <span class="pair-arrow">↔</span>
            <span class="base rna">U</span>
          </div>
          <div class="reference-item">
            <span class="base dna">T</span>
            <span class="pair-arrow">↔</span>
            <span class="base rna">A</span>
          </div>
          <div class="reference-item">
            <span class="base dna">C</span>
            <span class="pair-arrow">↔</span>
            <span class="base rna">G</span>
          </div>
          <div class="reference-item">
            <span class="base dna">G</span>
            <span class="pair-arrow">↔</span>
            <span class="base rna">C</span>
          </div>
        </div>
        <p class="reference-note">DNA碱基 → 对应的RNA碱基（引导RNA需要与目标DNA互补）</p>
      </div>
    </div>
    <div v-else align="center" class="ftsz2"> 需要e1.000e7累计扭敧点解锁CRISPR-Cas9基因编辑模拟 </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, checkCRISPRUnlock, getCRISPRDnaGeneration, unlockCRISPRGeneSlot, editCRISPRGene, upgradeCRISPRGene, getCRISPREditingCost, getCRISPRGeneEffect, upgradeCRISPREditingTech } = useGameState()

// CRISPR游戏状态
const editingPrecision = ref(85)
const offTargetRate = ref(1)
const repairEfficiency = ref(70)
const selectedSequence = ref(null)
const customGuideRNA = ref('')
const editSuccess = ref(null)
const message = ref('')

// DNA序列数据
const dnaSequences = ref([
  {
    id: 1,
    sequence: 'ATCGATCGATCGATCGATCGATCGATCGATCG',
    targetSequence: 'ATCG',
    guideRNA: '',
    isEdited: false,
    editedSequence: ''
  },
  {
    id: 2,
    sequence: 'GCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTA',
    targetSequence: 'GCTA',
    guideRNA: '',
    isEdited: false,
    editedSequence: ''
  },
  {
    id: 3,
    sequence: 'TACGTACGTACGTACGTACGTACGTACGTAC',
    targetSequence: 'TACG',
    guideRNA: '',
    isEdited: false,
    editedSequence: ''
  }
])

// 选择DNA序列
const selectSequence = (id) => {
  selectedSequence.value = id
  customGuideRNA.value = ''
  editSuccess.value = null
  message.value = ''
}

// 获取当前选中的序列
const getCurrentSequence = () => {
  return dnaSequences.value.find(s => s.id === selectedSequence.value)
}

// 格式化序列显示
const formatSequence = (seq) => {
  if (!seq) return ''
  return seq.match(/.{1,4}/g)?.join(' ') || seq
}

// 生成引导RNA
const generateGuideRNA = () => {
  if (!selectedSequence.value) return
  
  const sequence = getCurrentSequence()
  if (sequence) {
    const complementMap = {
      'A': 'U',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    }
    
    sequence.guideRNA = sequence.targetSequence.split('').map(base => complementMap[base]).join('')
    customGuideRNA.value = sequence.guideRNA
    message.value = `已生成引导RNA: ${sequence.guideRNA}`
    editSuccess.value = null
  }
}

// 设置自定义引导RNA
const setCustomGuideRNA = () => {
  if (!selectedSequence.value) return
  
  const sequence = getCurrentSequence()
  if (sequence) {
    sequence.guideRNA = customGuideRNA.value.toUpperCase().replace(/T/g, 'U')
    message.value = `已设置引导RNA: ${sequence.guideRNA}`
    editSuccess.value = null
  }
}

// 执行CRISPR编辑
const performEdit = () => {
  if (!selectedSequence.value) return
  
  const sequence = getCurrentSequence()
  if (sequence) {
    const complementMap = {
      'A': 'U',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    }
    
    const expectedGuideRNA = sequence.targetSequence.split('').map(base => complementMap[base]).join('')
    
    if (sequence.guideRNA === expectedGuideRNA) {
      const editedBase = 'X'
      const editedSequence = sequence.sequence.replace(sequence.targetSequence, editedBase.repeat(sequence.targetSequence.length))
      sequence.editedSequence = editedSequence
      sequence.isEdited = true
      editSuccess.value = true
      message.value = 'CRISPR编辑成功！目标序列已被修改。'
    } else {
      editSuccess.value = false
      message.value = 'CRISPR编辑失败！引导RNA与目标序列不匹配。'
    }
  }
}

// 重置CRISPR游戏
const resetCrispr = () => {
  dnaSequences.value = [
    {
      id: 1,
      sequence: 'ATCGATCGATCGATCGATCGATCGATCGATCG',
      targetSequence: 'ATCG',
      guideRNA: '',
      isEdited: false,
      editedSequence: ''
    },
    {
      id: 2,
      sequence: 'GCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTA',
      targetSequence: 'GCTA',
      guideRNA: '',
      isEdited: false,
      editedSequence: ''
    },
    {
      id: 3,
      sequence: 'TACGTACGTACGTACGTACGTACGTACGTAC',
      targetSequence: 'TACG',
      guideRNA: '',
      isEdited: false,
      editedSequence: ''
    }
  ]
  selectedSequence.value = null
  customGuideRNA.value = ''
  editSuccess.value = null
  message.value = ''
  editingPrecision.value = 85
  offTargetRate.value = 1
  repairEfficiency.value = 70
}

// 解锁CRISPR
const unlockCrispr = () => {
  // 调用游戏状态中的解锁函数
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

.control-btn.primary {
  background-color: #2196F3;
}

.control-btn.primary:hover {
  background-color: #1976D2;
}

.control-btn.success {
  background-color: #e91e63;
}

.control-btn.success:hover {
  background-color: #c2185b;
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

.crispr-description {
  text-align: center;
  padding: 10px;
  color: #aaaaaa;
  font-size: 14px;
}

.dna-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.dna-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
}

.dna-card {
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid #555;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s;
}

.dna-card:hover {
  border-color: #e91e63;
  transform: translateY(-3px);
}

.dna-card.selected {
  border-color: #2196F3;
  background-color: rgba(33, 150, 243, 0.1);
}

.dna-card.edited {
  border-color: #4CAF50;
}

.dna-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.dna-header h4 {
  margin: 0;
  color: #ffffff;
  font-size: 14px;
}

.dna-status {
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 10px;
  background-color: #555;
  color: #aaa;
}

.dna-status.edited {
  background-color: #4CAF50;
  color: white;
}

.dna-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dna-display, .dna-target, .dna-grna {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.dna-label, .target-label, .grna-label {
  font-size: 10px;
  color: #888;
}

.dna-sequence {
  font-family: monospace;
  font-size: 11px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px;
  border-radius: 3px;
  word-break: break-all;
}

.target-sequence {
  font-family: monospace;
  font-size: 14px;
  color: #e91e63;
  font-weight: bold;
  background-color: rgba(233, 30, 99, 0.2);
  padding: 3px 8px;
  border-radius: 3px;
}

.grna-sequence {
  font-family: monospace;
  font-size: 14px;
  color: #2196F3;
  font-weight: bold;
}

.edit-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.edit-controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 0 auto;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-group label {
  color: #ffffff;
  font-size: 14px;
}

.input-row {
  display: flex;
  gap: 10px;
}

.grna-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-family: monospace;
  font-size: 14px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.message {
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
}

.message.success {
  background-color: rgba(76, 175, 80, 0.2);
  color: #4CAF50;
  border: 1px solid #4CAF50;
}

.message.error {
  background-color: rgba(244, 67, 54, 0.2);
  color: #F44336;
  border: 1px solid #F44336;
}

.no-selection-section {
  text-align: center;
  padding: 30px;
  color: #888;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin: 15px 0;
}

.result-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.result-display {
  max-width: 600px;
  margin: 0 auto;
}

.result-item {
  margin-bottom: 15px;
}

.result-label {
  display: block;
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
}

.result-sequence {
  font-family: monospace;
  font-size: 12px;
  padding: 10px;
  border-radius: 5px;
  word-break: break-all;
}

.result-sequence.original {
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
}

.result-sequence.edited {
  background-color: rgba(76, 175, 80, 0.2);
  color: #4CAF50;
  border-left: 4px solid #4CAF50;
}

.result-status {
  text-align: center;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
}

.result-status.success {
  background-color: rgba(76, 175, 80, 0.2);
  color: #4CAF50;
}

.result-status.error {
  background-color: rgba(244, 67, 54, 0.2);
  color: #F44336;
}

.info-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.info-card {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.info-icon {
  font-size: 28px;
  margin-bottom: 8px;
}

.info-title {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 5px;
}

.info-desc {
  font-size: 11px;
  color: #888;
}

.reference-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.reference-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 15px;
}

.reference-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.base {
  font-family: monospace;
  font-size: 20px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.base.dna {
  background-color: #e91e63;
  color: white;
}

.base.rna {
  background-color: #2196F3;
  color: white;
}

.pair-arrow {
  color: #888;
  font-size: 16px;
}

.reference-note {
  text-align: center;
  font-size: 12px;
  color: #888;
}
</style>
