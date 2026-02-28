<template>
  <div id="p0_1">
    <div class="btnrow">
        <button align="center" class="xxButton" @click="handleSave">手动保存</button>
        <button align="center" class="xxButton" @click="handleExport">导出存档</button>
        <button align="center" class="xxButton" @click="handleImport">导入存档</button>
        <button align="center" class="xxButton" @click="exportSaveFile">导出到文件</button>
        <button align="center" class="xxButton" @click="importSaveFile">从文件导入</button>
        <button align="center" class="xxButton" @click="handleHardReset">硬重置</button>
    </div>
    <form align="center">
        <span class="ftsz1" style="color: #ffffff">导出或导入存档：</span><br /><textarea style="width: 1024px; height: 1024px" class='input' type="text" id='importExportText' v-model="saveString"></textarea>
    </form>
    <p v-if="saveMessage" align="center" :style="{ color: saveMessageColor }">{{ saveMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { save, exportSave, importSave, exportSaveFile, importSaveFile, trueHardReset } = useGameState()

const saveString = ref('')
const saveMessage = ref('')
const saveMessageColor = ref('#00ff00')

function handleSave() {
  save()
  saveMessage.value = '游戏已保存！'
  saveMessageColor.value = '#00ff00'
  setTimeout(() => { saveMessage.value = '' }, 2000)
}

function handleExport() {
  const exported = exportSave()
  saveString.value = exported
  saveMessage.value = '存档已导出！'
  saveMessageColor.value = '#00ff00'
  setTimeout(() => { saveMessage.value = '' }, 2000)
}

function handleImport() {
  const input = saveString.value.trim()
  if (!input) {
    saveMessage.value = '请输入存档！'
    saveMessageColor.value = '#ff0000'
    return
  }
  const success = importSave(input)
  if (success) {
    saveMessage.value = '存档已导入！'
    saveMessageColor.value = '#00ff00'
  } else {
    saveMessage.value = '存档导入失败，请检查存档格式！'
    saveMessageColor.value = '#ff0000'
  }
  setTimeout(() => { saveMessage.value = '' }, 2000)
}

function handleHardReset() {
  if (confirm('确定要硬重置吗？这将清除所有游戏进度！')) {
    trueHardReset()
    saveMessage.value = '游戏已重置！'
    saveMessageColor.value = '#00ff00'
    setTimeout(() => { saveMessage.value = '' }, 2000)
  }
}
</script>
