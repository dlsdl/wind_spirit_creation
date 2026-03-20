<template>
  <div id="p0_3">
    <div align="center" style="color: #ffffff">
      <br />
      风灵作成(wind-spirit-creation)  作者：6左爷6  当前版本：v6.0.0<br />
      本增量游戏参考了《反物质维度》、《FE000000》、《能量发生器》、《质量增量重制版》、《香料放置》、《协同放置》等<br />
      使用break_eternity.js来处理大数字<br />
      <br />
      快捷键：1：最大作成1~8风灵，2：最大作成9~16风灵，以此类推。q：获得风单元，w：获得风模块，以此类推。<br />
      a：购买风灵升级1，s：购买风灵升级2，以此类推。z：扩散，x：扪敤，以此类推。空格：全部最大。<br />
      <br />
      支持所有序数增量吧吧友，你可以点击链接来游玩吧友们自制的增量游戏：<br />
      <a href="https://seanxlx2011.github.io/" target="_blank" style="color: #00ff80">数据增量重制版</a>、
      <a href="https://aster131072.github.io/incremental_evolution/" target="_blank" style="color: #00ff80">增量进化</a>、
      <a href="https://veryrrdefine.github.io/MdVI-rewritten/" target="_blank" style="color: #00ff80">多维体积增量</a>、
      <a href="https://veryrrdefine.github.io/mdvi4/" target="_blank" style="color: #00ff80">多维体积增量v4.0</a>、
      <a href="https://qqqe308.github.io/The-Rhythm-Game-Tree/" target="_blank" style="color: #00ff80">音乐游戏树</a>、
      <a href="https://qqqe308.github.io/Anti-Anti-Softcap-Tree/111" target="_blank" style="color: #00ff80">反反软上限树</a>、
      <br />
      <a href="https://rbn-rewrite-team.github.io/RBNR/" target="_blank" style="color: #00ff80">大数之路重制版</a>、
      <a href="https://rbn-rewrite-team.github.io/RBNC/" target="_blank" style="color: #00ff80">大数之路基数版</a>、
      <a href="https://a262537412640768744.github.io/homework-incremental/main.html" target="_blank" style="color: #00ff80">作业增量</a>、
      <a href="https://a262537412640768744.github.io/EnergyReset/" target="_blank" style="color: #00ff80">能源重置</a>、
      <a href="https://a262537412640768744.github.io/merge_bitter_melon/" target="_blank" style="color: #00ff80">合成大苦瓜</a>、
      <a href="https://hypcos.github.io/too-many-layers/" target="_blank" style="color: #00ff80">太多层级</a>、
      <br />
      <a href="https://veryrrdefine.github.io/Xiaopengyou-Tree/" target="_blank" style="color: #00ff80">小朋友树</a>、
      <a href="https://hydrogenated233.github.io/TI/" target="_blank" style="color: #00ff80">植树增量</a>、
      <a href="https://zlyxj.github.io/coding-incremental/" target="_blank" style="color: #00ff80">编程增量</a>、
      <a href="https://zlyxj.github.io/fx-incremental/" target="_blank" style="color: #00ff80">fx增量</a>、
      <a href="https://xhyadofai.github.io/matteridle/" target="_blank" style="color: #00ff80">物质增量</a>
      <br /><br />
      <a @click="goToChangelog" style="color: #ffffff; cursor: pointer">点击这里查看更新日志</a><br /><br />
      <a @click="goToSavebank" style="color: #ffffff; cursor: pointer">点击这里前往存档银行</a><br /><br />
      <div class="ftsz2" align="center">彩蛋：<input type="checkbox" v-model="v.caidan"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  player: Object,
  v: Object
})

const emit = defineEmits(['switchPage'])

function goToChangelog() {
  emit('switchPage', 'changelog')
}

function goToSavebank() {
  emit('switchPage', 'savebank')
}
</script>
