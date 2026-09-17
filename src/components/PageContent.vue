<template>
  <div>
    <!--
      P1-2：68 个页面组件改为按需异步加载（首屏只下载当前页面）。
      dev 强制解锁开启时，传给页面的 player / v 会被换成"解锁条件恒真"的只读替身，
      从而显示出原本被 v-if 挡住的内容。
    -->
    <component
      v-if="currentComp"
      :is="currentComp"
      :player="shownPlayer"
      :v="shownV"
      @switchPage="$emit('switchPage', $event)" />
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useGameState } from '../composables/useGameState'

const props = defineProps({
  currentPage: String,
  player: Object,
  v: Object
})

defineEmits(['switchPage'])

const { isPageContentUnlocked, devUnlockProxy } = useGameState()

// import.meta.glob 会把每个页面打成独立 chunk，访问到时才下载
const pageLoaders = import.meta.glob('./pages/Page*.vue')

const pageComponents = Object.fromEntries(
  Object.entries(pageLoaders).map(([path, load]) => {
    const id = path.replace('./pages/Page', '').replace('.vue', '').toLowerCase()
    return [id, defineAsyncComponent(load)]
  })
)

const currentComp = computed(() => pageComponents[props.currentPage] || null)

const unlocked = computed(() => isPageContentUnlocked(props.currentPage))

const shownPlayer = computed(() => (unlocked.value ? devUnlockProxy(props.player) : props.player))
const shownV = computed(() => (unlocked.value ? devUnlockProxy(props.v) : props.v))
</script>
