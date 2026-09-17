<template>
  <div id="app">
    <div v-if="player.news" class="news">
      <span class="newsContent" id="newsText"></span>
    </div>
    
    <button class="PL1button" @click="PL1reset">
      扩散重置：
      <span v-if="player.energy.gte('1.797694e308')">获得{{ notation(player.energy.root(1024).floor()) }}扩散点</span>
      <span v-if="player.energy.gte('1.797694e308') && player.energy.lt('1e6144')">，下一扩散点在{{ notation(player.energy.root(1024).floor().add(1).pow(1024)) }}能量</span>
      <span v-if="player.energy.lt('1.797694e308')">需要1.797e308能量</span>
    </button>
    
    <button v-if="player.hasUnlockedPL1" class="PL2button" @click="PL2reset">
      扪敤重置：
      <span v-if="player.PL1pts.gte('1.797694e308')">获得{{ notation(player.PL1pts.root(1024).floor()) }}扪敤点</span>
      <span v-if="player.PL1pts.gte('1.797694e308') && player.PL1pts.lt('1e6144')">，下一扪敤点在{{ notation(player.PL1pts.root(1024).floor().add(1).pow(1024)) }}扩散点</span>
      <span v-if="player.PL1pts.lt('1.797694e308')">需要1.797e308扩散点</span>
    </button>
    
    <button v-if="player.hasUnlockedPL2" class="PL3button" @click="PL3reset">
      扫敥重置：
      <span v-if="player.PL2pts.gte('6.742e315652')">获得{{ notation(player.PL2pts.root(1048576).floor()) }}扫敥点</span>
      <span v-if="player.PL2pts.gte('6.742e315652') && player.PL2pts.lt('e6291456')">，下一扫敥点在{{ notation(player.PL2pts.root(1048576).floor().add(1).pow(1048576)) }}扪敤点</span>
      <span v-if="player.PL2pts.lt('6.742e315652')">需要6.742e315652扪敤点</span>
    </button>
    
    <button v-if="player.hasUnlockedPL3" class="PL4button" @click="PL4reset">
      扬敦重置：
      <span v-if="player.PL3pts.gte('6.742e315652')">获得{{ notation(player.PL3pts.root(1048576).floor()) }}扬敦点</span>
      <span v-if="player.PL3pts.gte('6.742e315652') && player.PL3pts.lt('e6291456')">，下一扬敦点在{{ notation(player.PL3pts.root(1048576).floor().add(1).pow(1048576)) }}扫敥点</span>
      <span v-if="player.PL3pts.lt('6.742e315652')">需要6.742e315652扫敥点</span>
    </button>
    
    <button v-if="player.hasUnlockedPL4" class="PL5button" @click="PL5reset">
      扭敧重置：
      <span v-if="player.PL4pts.gte('5e323228496')">获得{{ notation(player.PL4pts.root(1073741824).floor()) }}扭敧点</span>
      <span v-if="player.PL4pts.gte('5e323228496') && player.PL4pts.lt('e6442450944')">，下一扭敧点在{{ notation(player.PL4pts.root(1073741824).floor().add(1).pow(1073741824)) }}扬敦点</span>
      <span v-if="player.PL4pts.lt('5e323228496')">需要e3.232e8扬敦点</span>
    </button>
    
    <button v-if="player.hasUnlockedPL5" class="PL6button" @click="PL6reset">
      扮敨重置：
      <span v-if="player.PL5pts.gte('5e323228496')">获得{{ notation(player.PL5pts.root(1073741824).floor()) }}扮敨点</span>
      <span v-if="player.PL5pts.gte('5e323228496') && player.PL5pts.lt('e6442450944')">，下一扮敨点在{{ notation(player.PL5pts.root(1073741824).floor().add(1).pow(1073741824)) }}扭敧点</span>
      <span v-if="player.PL5pts.lt('5e323228496')">需要e3.232e8扭敧点</span>
    </button>
    
    <button v-if="player.hasUnlockedPL6" class="PL7button" @click="PL7reset">
      扯敩重置：需要e3.309e11扮敨点
    </button>
    
    <button v-if="player.hasUnlockedPL7" class="PLwbutton" @click="PLwreset">
      第1次风灵坍缩需要e3.309e11扯敩点 扰敪重置：需要购买风神之奇物 进入第1次扰敪，风神将赐予您1024金色风灵
    </button>
    
    <br />
    
    <p align="center" class="ftsz2">
      你当前{{ player.innormcha == 0 && player.incha == 0 && !player.infytx && !player.incyzb ? "不在任何挑战" : "在 " }}
      <span v-if="player.innormcha != 0">普通挑战{{ player.innormcha }} </span>
      <span v-if="player.incha != 0">进阶挑战{{ player.incha }} </span>
      <span v-if="player.infytx">风压坍陷 </span>
      <span v-if="player.incyzb">刺影征标 </span>中
    </p>
    
    <p align="center" class="ftsz3">
      你有 <span class="ftsz4">{{ notation(player.energy) }}</span> 能量
    </p>
    
    <p align="center" class="ftsz2">
      你的能量每秒增加 {{ epsdisp() }}
    </p>
    
    <p align="center" class="textct">
      全局速度：×{{ v.glbspd.toFixed(3) }} {{ player.gmrn ? "" : "(游戏已暂停)" }}
    </p>
    
    <p align="center" class="textct" v-if="player.energy.gte(getsoftcap())">
      (由于能量超过{{ notation(getsoftcap()) }}，受软上限限制，变为{{ notation(v.softcap) }}次方根)
    </p>
    
    <p align="center" class="textct">
      一阶游戏速度(影响第0~3层内容)：×{{ notation(v.gamespd1) }}
    </p>
    
    <p align="center" class="textct" v-if="player.hasUnlockedPL4">
      二阶游戏速度(影响第4~7层内容)：×{{ notation(v.gamespd2) }}
    </p>
    
    <p align="center" class="ftsz4" v-if="player.energy.gte('1.797694e308') && !player.hasUnlockedPL1">
      仙境由于能量过多，坍塌了。
    </p>
    
    <p align="center" class="textct" style="color: #ff0000" v-if="player.hasUnlockedPL1">
      你有{{ notatint(player.PL1pts) }}扩散点,{{ notation(player.PL1energy) }}扩散能量,它以{{ notation(v.PL1engpow) }}的指数将1~8式风灵的效果乘以{{ notation(v.PL1engmul) }}倍。
    </p>
    
    <p align="center" class="textct" style="color: #ffff00" v-if="player.hasUnlockedPL2">
      你有{{ notatint(player.PL2pts) }}扪敤点,{{ notation(player.PL2energy) }}扪敤能量,它以{{ notation(v.PL2engpow) }}的指数将1~16式风灵的效果乘以{{ notation(v.PL2engmul) }}倍。
    </p>
    
    <p align="center" class="textct" style="color: #00ff00" v-if="player.hasUnlockedPL3">
      你有{{ notatint(player.PL3pts) }}扫敥点,{{ notation(player.PL3energy) }}扫敥能量,它以{{ notation(v.PL3engpow) }}的指数将1~24式风灵的效果乘以{{ notation(v.PL3engmul) }}倍。
    </p>
    
    <p align="center" class="textct" style="color: #00ffff" v-if="player.hasUnlockedPL4">
      你有{{ notatint(player.PL4pts) }}扬敦点,{{ notation(player.PL4energy) }}扬敦能量,它以{{ notation(v.PL4engpow) }}的指数将1~32式风灵的效果乘以{{ notation(v.PL4engmul) }}倍。
    </p>
    
    <p align="center" class="textct" style="color: #0000ff" v-if="player.hasUnlockedPL5">
      你有{{ notatint(player.PL5pts) }}扭敧点,{{ notation(player.PL5energy) }}扭敧能量,它以{{ notation(v.PL5engpow) }}的指数将1~40式风灵的效果乘以{{ notation(v.PL5engmul) }}倍。
    </p>
    
    <p align="center" class="textct" style="color: #ff00ff" v-if="player.hasUnlockedPL6">
      你有{{ notatint(player.PL6pts) }}扮敨点,{{ notation(player.PL6energy) }}扮敨能量,它以{{ notation(v.PL6engpow) }}的指数将1~48式风灵的效果乘以{{ notation(v.PL6engmul) }}倍。
    </p>
    
    <!-- ===== 顶部「行标签」按钮：数据驱动，自动跳过未解锁的行 ===== -->
    <div class="btnrow" id="btnrowm">
      <template v-for="row in shownRows" :key="row.id">
        <button
          :class="{ slbutton: isCurrentRow(row.id), button: !isCurrentRow(row.id) }"
          :style="row.tabStyle"
          @click="handleChangeBt(row.id)">{{ row.label }}</button>
      </template>
    </div>

    <!-- ===== 行内「页面按钮」：dev 页面仅在 npm run dev 下渲染 ===== -->
    <div
      v-for="row in shownRows"
      :key="row.id"
      class="btnrow"
      :id="row.id"
      v-show="currentRow === row.id">
      <template v-for="p in navPagesOf(row)" :key="p.id">
        <button
          :class="p.fixedClass || (isCurrentPage(p.id) ? 'slbutton' : 'button')"
          :style="row.pageStyle"
          :title="p.dev ? '仅开发环境可见' : ''"
          @click="changePg(p.id)">{{ p.label }}</button>
      </template>
    </div>
    
    <PageContent :currentPage="v.currentPage" :player="player" :v="v" @switchPage="handleSwitchPage" />
    <NotificationToast />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useGameState } from './composables/useGameState'
import PageContent from './components/PageContent.vue'
import NotificationToast from './components/NotificationToast.vue'

// dev 专有入口（p9_59330 / p0_630875）只在 `npm run dev` 下出现。
// Vite 会把 import.meta.env.DEV 静态替换为常量，生产构建下相关分支会被 tree-shake 掉。
const isDev = import.meta.env.DEV

const {
  player,
  v,
  notation,
  notatint,
  epsdisp,
  getsoftcap,
  changePg,
  PL1reset,
  PL2reset,
  PL3reset,
  PL4reset,
  PL5reset,
  PL6reset,
  //PL7reset,
  //PLwreset,
  startGameLoop,
  stopGameLoop,
  startNewsTicker,
  // 页面导航配置表
  navRows,
} = useGameState()

const currentRow = ref('row1')

// 单行内实际渲染的页面：非开发环境过滤掉 dev 页
function navPagesOf(row) {
  if (!row || !row.pages) return []
  return row.pages.filter((p) => !p.dev || isDev)
}

// 未解锁的行不出现在导航栏
const shownRows = computed(() =>
  navRows.filter((row) => !row.unlockKey || player[row.unlockKey])
)

function getNavRow(rowId) {
  return navRows.find((r) => r.id === rowId)
}

function handleChangeBt(rowId) {
  currentRow.value = rowId
  const first = navPagesOf(getNavRow(rowId))[0]
  v.currentPage = first ? first.id : 'p1_1'
}

function isCurrentRow(rowId) {
  return currentRow.value === rowId
}

function isCurrentPage(pageName) {
  return v.currentPage === pageName
}

function handleSwitchPage(pageName) {
  v.currentPage = pageName
  const row = navRows.find((r) => r.pages.some((p) => p.id === pageName))
  if (row) currentRow.value = row.id
  else if (pageName === 'changelog' || pageName === 'savebank' || pageName.startsWith('p0_')) {
    currentRow.value = 'row0'
  }
}

onMounted(() => {
  startGameLoop()
  startNewsTicker()
})

// P2/P3：卸载时停掉主循环、自动存档与滚动新闻（旧代码这三个定时器都没有清理）
onUnmounted(() => {
  stopGameLoop()
})
</script>

<style scoped>
</style>
