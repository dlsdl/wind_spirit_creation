<template>
  <div class="notification-container">
    <TransitionGroup name="notification">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="noti"
        :class="{ show: notification.visible }"
      >
        {{ notification.message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const notifications = ref([])
let notificationId = 0

function showNotification(message) {
  const id = notificationId++
  const notification = {
    id,
    message,
    visible: false
  }
  notifications.value.push(notification)
  
  setTimeout(() => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index !== -1) {
      notifications.value[index].visible = true
    }
  }, 10)
  
  setTimeout(() => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index !== -1) {
      notifications.value[index].visible = false
    }
  }, 4000)
  
  setTimeout(() => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index !== -1) {
      notifications.value.splice(index, 1)
    }
  }, 4000)
}

const notificationMessages = {
  '#autosave': '游戏已保存',
  '#export': '已导出存档',
  '#import': '已导入存档',
  '#exportfile': '已导出到文件',
  '#importfile': '已从文件导入',
  '#hardreset': '已全部重置',
  '#notiach00': '完成成就：违反热力学第一定律',
  '#notiach01': '完成成就：100能量不是很多',
  '#notiach02': '完成成就：AD现实版发售了',
  '#notiach03': '完成成就：击掌只要四根手指',
  '#notiach04': '完成成就：五小时能做任何事，除了更新',
  '#notiach05': '完成成就：我们暂时承担不起9',
  '#notiach06': '完成成就：下一次',
  '#notiach07': '完成成就：转90°是X',
  '#notiach08': '完成成就："四风守护"单元',
  '#notiach09': '完成成就：犾',
  '#notiach0a': '完成成就：二↑段↑跳',
  '#notiach0b': '完成成就：我应该告诉他们购买吗…',
  '#notiach0c': '完成成就：醒醒！我们不再需要维度提升了！',
  '#notiach0d': '完成成就：我不到那玩意为啥这么难',
  '#notiach0e': '完成成就：只有8个',
  '#notiach0f': '完成成就：你维度提升了！',
  '#notiach10': '完成成就：扩散和扩散',
  '#notiach11': '完成成就：100万能量很多',
  '#notiach12': '完成成就：百岁珊（？',
  '#notiach13': '完成成就：挑战完成废我一辈子',
  '#notiach14': '完成成就：找到风灵超过了9个',
  '#notiach15': '完成成就：更好更需要DLC',
  '#notiach16': '完成成就：阿莱夫贝特基未尔',
  '#notiach17': '完成成就：浓缩风元素能量安全吗？',
  '#notiach18': '完成成就：无相之风拟造',
  '#notiach19': '完成成就：把它粉~~~~~~~~碎',
  '#notiach1a': '完成成就：出序输倒',
  '#notiach1b': '完成成就：我忘啦……',
  '#notiach1c': '完成成就：只有一个……',
  '#notiach1d': '完成成就：回退按钮是做什么的',
  '#notiach1e': '完成成就：扩散点挑战？',
  '#notiach1f': '完成成就：这就要用到回退按钮',
  '#notiach20': '完成成就：扩散的后继叫扪敤',
  '#notiach21': '完成成就：灌木丛中',
  '#notiach22': '完成成就：里程碑上的一切都有点紧张',
  '#notiach23': '完成成就：研究的本质是……',
  '#notiach24': '完成成就：风灵增强',
  '#notiach25': '完成成就：下一级重置的1/2进度',
  '#notiach26': '完成成就：新型蝴蝶效应',
  '#notiach27': '完成成就：抟风秘道',
  '#notiach28': '完成成就：诡秘之风的虚无',
  '#notiach29': '完成成就：虔诚之风的赐福',
  '#notiach2a': '完成成就：前面忘了，中间忘了',
  '#notiach2b': '完成成就：后面也忘了',
  '#notiach2c': '完成成就：没有实验不值得过',
  '#notiach2d': '完成成就：元素周期表',
  '#notiach2e': '完成成就：套娃多方面体',
  '#notiach2f': '完成成就：炼金的狂怒',
  '#notiach30': '完成成就：欢迎来到扫敥重置的领域',
  '#notiach31': '完成成就：增量进度条',
  '#notiach32': '完成成就：是魔法，我加了魔法',
  '#notiach33': '完成成就：比一个甜甜花更快',
  '#notiach34': '完成成就：甜甜花生命：进化',
  '#notiach35': '完成成就：上面不是有个一样的吗',
  '#notiach36': '完成成就：无相之风重制版',
  '#notiach37': '完成成就：催化反应进程',
  '#notiach38': '完成成就：分子碰撞增量',
  '#notiach39': '完成成就：庙算无遗策',
  '#notiach3a': '完成成就：毫无进展',
  '#notiach3b': '完成成就：无正面效果',
  '#notiach3c': '完成成就：量好试剂',
  '#notiach3d': '完成成就：搅拌置放',
  '#notiach3e': '完成成就：风絮搭配得当',
  '#notiach3f': '完成成就：能掀起巨浪',
  '#notiach40': '完成成就：向上穿过扬敦的高墙',
  '#notiach41': '完成成就：观测自身的观测',
  '#notiach42': '完成成就：我们能承担起8',
  '#notiach43': '完成成就：运变惊奇',
  '#notiach44': '完成成就：第十个仍然免费',
  '#notiach45': '完成成就：系统提升！',
  '#notiach46': '完成成就：巧施协同',
  '#notiach47': '完成成就：谜影',
  '#notiach48': '完成成就：已经走过1/6了？',
  '#notiach49': '完成成就：某种奇怪的炼金产物',
  '#notiach4a': '完成成就：隐藏的目标',
  '#notiach4b': '完成成就：隐藏的目标之二',
  '#notiach4c': '完成成就：这玩意有上限吗',
  '#notiach4d': '完成成就：多面体组合来源于角色技能召唤物',
  '#notiach4e': '完成成就：祭礼残章',
  '#notiach4f': '完成成就：流浪乐章',
  '#notiach50': '完成成就：进进入入扭扭敧敧……',
  '#notiach51': '完成成就：波粒二象性',
  '#notiach52': '完成成就：AD已经告诉你，时间是相对的',
  '#notiach53': '完成成就：实验体玖零伍式',
}

function handleShowNoti(notiname) {
  const message = notificationMessages[notiname] || notiname
  showNotification(message)
}

onMounted(() => {
  window.addEventListener('showNotification', (e) => {
    handleShowNoti(e.detail)
  })
})

onUnmounted(() => {
  window.removeEventListener('showNotification', () => {})
})

defineExpose({
  showNotification,
  handleShowNoti
})
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.noti {
  background-color: #80ffc0;
  border: 1px solid #008040;
  color: #000000;
  padding: 4px 4px;
  border-radius: 4px;
  font-size: 16px;
  opacity: 0;
  transform: translateX(100%);
}

.noti.show {
  opacity: 1;
  transform: translateX(0);
}
</style>
