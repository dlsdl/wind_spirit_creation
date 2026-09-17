<template>
  <div id="p6_8">
    <div class="btnrow" v-if="player.PL5ptsttl.gte('1e10000000')">
      <div align="center" class="ftsz2">CRISPR-Cas9 基因编辑模拟</div>

      <!-- 长方形纯色按钮 -->
      <div class="btnrow">
        <button class="PL6btn" @click="resetCrispr">重置</button>
      </div>

      <!-- 长方型长条：编辑条件 -->
      <div class="PL6bar">
        编辑精度：<input type="range" class="PL6slider" v-model.number="editingPrecision" min="50" max="100" step="1" /> {{ editingPrecision.toFixed(1) }}%
        脱靶率：<input type="range" class="PL6slider" v-model.number="offTargetRate" min="0" max="10" step="0.1" /> {{ offTargetRate.toFixed(2) }}%
        修复效率：<input type="range" class="PL6slider" v-model.number="repairEfficiency" min="10" max="100" step="1" /> {{ repairEfficiency.toFixed(1) }}%
      </div>

      <div class="PL6bar">CRISPR-Cas9基因编辑技术，通过生成引导RNA来编辑目标DNA序列。选择一个DNA序列，生成或输入引导RNA，然后执行编辑。</div>

      <!-- 长方形框按钮：DNA序列 -->
      <div align="center" class="ftsz2">DNA序列</div>
      <table align="center">
        <tbody>
          <tr>
            <td v-for="sequence in dnaSequences" :key="sequence.id">
              <button
                :class="selectedSequence === sequence.id ? 'PL6upgyes' : 'PL6upgno'"
                @click="selectSequence(sequence.id)">
                序列 #{{sequence.id}}：{{sequence.isEdited ? '已编辑' : '未编辑'}}<br />
                序列：{{formatSequence(sequence.sequence)}}<br />
                目标：{{sequence.targetSequence}}<br />
                引导RNA：{{sequence.guideRNA || '（未设置）'}}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 长方型长条：CRISPR编辑 -->
      <div align="center" class="ftsz2">CRISPR编辑</div>
      <div v-if="selectedSequence">
        <div class="PL6bar">
          引导RNA序列：
          <input
            type="text"
            v-model="customGuideRNA"
            placeholder="输入引导RNA序列 (如: UAGC)"
            maxlength="20"
            class="PL6input" />
        </div>
        <div class="btnrow">
          <button class="PL6btn" @click="setCustomGuideRNA">设置引导RNA</button>
          <button class="PL6btn" @click="generateGuideRNA">自动生成引导RNA</button>
          <button class="PL6btn" @click="performEdit">执行CRISPR编辑</button>
        </div>
        <div v-if="message" :class="editSuccess === true ? 'PL6baryes' : 'PL6bar'">{{message}}</div>
      </div>
      <div v-else class="PL6bar">请选择一个DNA序列开始编辑</div>

      <!-- 长方型长条：编辑结果 -->
      <div v-if="editSuccess !== null && selectedSequence">
        <div align="center" class="ftsz2">编辑结果</div>
        <div class="PL6bar">原始序列：{{formatSequence(getCurrentSequence()?.sequence || '')}}</div>
        <div v-if="editSuccess" class="PL6bar">编辑后序列：{{formatSequence(getCurrentSequence()?.editedSequence || '')}}</div>
        <div :class="editSuccess ? 'PL6baryes' : 'PL6bar'">
          {{editSuccess ? '编辑成功！目标序列已被修改。' : '编辑失败！引导RNA与目标序列不匹配。'}}
        </div>
      </div>

      <!-- 长方形框按钮：技术原理 -->
      <div align="center" class="ftsz2">CRISPR-Cas9 技术原理</div>
      <table align="center">
        <tbody>
          <tr>
            <td><button class="PL6upgno">识别目标<br />Cas9蛋白与引导RNA结合，识别目标DNA序列</button></td>
            <td><button class="PL6upgno">切割DNA<br />Cas9在目标位置切割DNA双链</button></td>
            <td><button class="PL6upgno">修复编辑<br />细胞修复机制引入新的基因序列</button></td>
            <td><button class="PL6upgno">验证结果<br />检测编辑是否成功完成</button></td>
          </tr>
        </tbody>
      </table>

      <!-- 长方型长条：碱基配对规则 -->
      <div align="center" class="ftsz2">碱基配对规则</div>
      <div class="PL6bar">A ↔ U　T ↔ A　C ↔ G　G ↔ C</div>
      <div class="PL6bar">DNA碱基 → 对应的RNA碱基（引导RNA需要与目标DNA互补）</div>
    </div>
    <div v-else align="center" class="ftsz2">需要e1.000e7累计扭敧点解锁CRISPR-Cas9基因编辑模拟</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  player: Object,
  v: Object
})

// CRISPR 编辑参数（目前只影响展示）
const editingPrecision = ref(85)
const offTargetRate = ref(1)
const repairEfficiency = ref(70)
const selectedSequence = ref(null)
const customGuideRNA = ref('')
const editSuccess = ref(null)
const message = ref('')

const COMPLEMENT = { 'A': 'U', 'T': 'A', 'C': 'G', 'G': 'C' }

const createSequences = () => [
  { id: 1, sequence: 'ATCGATCGATCGATCGATCGATCGATCGATCG', targetSequence: 'ATCG', guideRNA: '', isEdited: false, editedSequence: '' },
  { id: 2, sequence: 'GCTAGCTAGCTAGCTAGCTAGCTAGCTAGCTA', targetSequence: 'GCTA', guideRNA: '', isEdited: false, editedSequence: '' },
  { id: 3, sequence: 'TACGTACGTACGTACGTACGTACGTACGTAC', targetSequence: 'TACG', guideRNA: '', isEdited: false, editedSequence: '' },
]

const dnaSequences = ref(createSequences())

const selectSequence = (id) => {
  selectedSequence.value = id
  customGuideRNA.value = ''
  editSuccess.value = null
  message.value = ''
}

const getCurrentSequence = () => dnaSequences.value.find((s) => s.id === selectedSequence.value)

const formatSequence = (seq) => (seq ? (seq.match(/.{1,4}/g) || [seq]).join(' ') : '')

const generateGuideRNA = () => {
  const sequence = getCurrentSequence()
  if (!sequence) return
  sequence.guideRNA = sequence.targetSequence.split('').map((base) => COMPLEMENT[base]).join('')
  customGuideRNA.value = sequence.guideRNA
  message.value = `已生成引导RNA: ${sequence.guideRNA}`
  editSuccess.value = null
}

const setCustomGuideRNA = () => {
  const sequence = getCurrentSequence()
  if (!sequence) return
  sequence.guideRNA = customGuideRNA.value.toUpperCase().replace(/T/g, 'U')
  message.value = `已设置引导RNA: ${sequence.guideRNA}`
  editSuccess.value = null
}

const performEdit = () => {
  const sequence = getCurrentSequence()
  if (!sequence) return
  const expectedGuideRNA = sequence.targetSequence.split('').map((base) => COMPLEMENT[base]).join('')
  if (sequence.guideRNA === expectedGuideRNA) {
    sequence.editedSequence = sequence.sequence.replace(sequence.targetSequence, 'X'.repeat(sequence.targetSequence.length))
    sequence.isEdited = true
    editSuccess.value = true
    message.value = 'CRISPR编辑成功！目标序列已被修改。'
  } else {
    editSuccess.value = false
    message.value = 'CRISPR编辑失败！引导RNA与目标序列不匹配。'
  }
}

const resetCrispr = () => {
  dnaSequences.value = createSequences()
  selectedSequence.value = null
  customGuideRNA.value = ''
  editSuccess.value = null
  message.value = ''
  editingPrecision.value = 85
  offTargetRate.value = 1
  repairEfficiency.value = 70
}
</script>
