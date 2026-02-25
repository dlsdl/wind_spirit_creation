<template>
  <div id="p0_1">
    <br />
    <p align="center" class="ftsz2">存档管理</p>
    <table align="center">
      <tbody>
        <tr>
          <td><button class="ltbutton" @click="handleSave">保存游戏</button></td>
          <td><button class="ltbutton" @click="handleLoad">读取游戏</button></td>
          <td><button class="ltbutton" @click="handleExport">导出存档</button></td>
          <td><button class="ltbutton" @click="handleImport">导入存档</button></td>
          <td><button class="ltbutton" @click="confirmHardReset" style="background-color: #ff0000; color: #ffffff">硬重置</button></td>
        </tr>
      </tbody>
    </table>
    <p v-if="saveMessage" align="center" style="color: #00ff00">{{ saveMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { hardReset, save, load, exportSave, importSave } = useGameState()

const saveMessage = ref('')

function handleSave() {
  save()
  saveMessage.value = '游戏已保存！'
  setTimeout(() => { saveMessage.value = '' }, 2000)
}

function handleLoad() {
  load()
  saveMessage.value = '游戏已读取！'
  setTimeout(() => { saveMessage.value = '' }, 2000)
}

function handleExport() {
  const saveString = exportSave()
  navigator.clipboard.writeText(saveString).then(() => {
    saveMessage.value = '存档已复制到剪贴板！'
    setTimeout(() => { saveMessage.value = '' }, 2000)
  }).catch(() => {
    saveMessage.value = '导出存档: ' + saveString
    setTimeout(() => { saveMessage.value = '' }, 5000)
  })
}

function handleImport() {
  const saveString = prompt('请粘贴存档：')
  if (saveString) {
    const success = importSave(saveString)
    if (success) {
      saveMessage.value = '存档已导入！'
    } else {
      saveMessage.value = '存档导入失败，请检查存档格式！'
    }
    setTimeout(() => { saveMessage.value = '' }, 2000)
  }
}

function confirmHardReset() {
  if (confirm('确定要硬重置吗？这将清除所有游戏进度！')) {
    hardReset()
    saveMessage.value = '游戏已重置！'
    setTimeout(() => { saveMessage.value = '' }, 2000)
  }
}
</script>
