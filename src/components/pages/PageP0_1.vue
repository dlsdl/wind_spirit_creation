<template>
  <div id="p0_1">
    <div class="btnrow">
        <button align="center" class="xxButton" @click="save">手动保存</button>
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


function handleExport() {
  const exported = exportSave()
  saveString.value = exported
}

function handleImport() {
  const input = saveString.value.trim()
  importSave(input)
}

function handleHardReset() {
  if (confirm('您确定要硬重置吗？这将清除所有游戏进度！')) {
    trueHardReset()
  }
}
</script>
