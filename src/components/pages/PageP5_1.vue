<template>
  <div id="p5_1">
    <div class="ftsz2" style="color: #ffffff; text-align: center">扬敦点数目标</div>
    <div :class="player.PL4goal[0]?'PL4goalyes':'PL4goalno'">
      <span>总计获得2扬敦点</span><br /><span>一阶游戏速度×4，重置次数获取×2，甜甜花生长速度×5×扬敦次数。成就40意味着它们的乘积就等于40</span>
    </div>
    <div :class="player.PL4goal[1]?'PL4goalyes':'PL4goalno'">
      <span>总计获得4扬敦点</span><br /><span>您常时完成全部普通挑战，重置次数获取×2，解锁自动购买25~32式风灵，自动第1行进度研究</span>
    </div>
    <div :class="player.PL4goal[2]?'PL4goalyes':'PL4goalno'">
      <span>总计获得8扬敦点</span><br /><span>您常时获得全部扪敤里程碑和扪敤次数升级，解锁自动购买甜甜花升级和提升甜甜花倍数</span>
    </div>
    <div :class="player.PL4goal[3]?'PL4goalyes':'PL4goalno'">
      <span>总计获得16扬敦点</span><br /><span>保留所有药剂升级和所有药剂生效状态，每秒自动获得0.1%特殊甜甜花和声望速率</span>
    </div>
    <div :class="player.PL4goal[4]?'PL4goalyes':'PL4goalno'">
      <span>总计获得64扬敦点</span><br /><span>您常时保留第2行进度研究和解锁催化剂，自动进行反应和购买风之徰粔升级</span>
    </div>
    <div :class="player.PL4goal[5]?'PL4goalyes':'PL4goalno'">
      <span>总计获得256扬敦点</span><br /><span>您常时保留第3行进度研究，常时解锁全部吸引子并保留其所有效果</span>
    </div>
    <div :class="player.PL4goal[6]?'PL4goalyes':'PL4goalno'">
      <span>总计获得4096扬敦点</span><br /><span>您常时保留第4行进度研究，保留全部甜甜花声望升级</span>
    </div>
    <div :class="player.PL4goal[7]?'PL4goalyes':'PL4goalno'">
      <span>总计获得65536扬敦点</span><br /><span>解锁惊奇风盒，开启它们可以获得柏拉图立体</span>
    </div>
    <div :class="player.PL4goal[8]?'PL4goalyes':'PL4goalno'">
      <span>总计获得4.294e9扬敦点</span><br /><span>扩散、扪敤、扫敥能量的效果指数+1，保留转化升级</span>
    </div>
    <div :class="player.PL4goal[9]?'PL4goalyes':'PL4goalno'">
      <span>总计获得1.844e19扬敦点</span><br /><span>所有风灵的超指数+0.001（也就是¶1.001）,保留进阶挑战9~12</span>
    </div>
    <div :class="player.PL4goal[10]?'PL4goalyes':'PL4goalno'">
      <span>总计获得3.4e38扬敦点</span><br /><span>叁叁式风灵可以生产叁贰式风灵</span>
    </div>
    <div :class="player.PL4goal[11]?'PL4goalyes':'PL4goalno'">
      <span>总计获得1.1e77扬敦点</span><br /><span>每秒自动获得100%判定中的扫敥点，直到扫敥点等于判定中的扫敥点为止</span>
    </div>
    <div class="btnrow">
      <span align="center" class="ftsz2">特殊扬敦目标，点击按钮开启/关闭8n+1式风灵产生8n式风灵效果</span><br />
      <button class="ltbutton" @click="swi8n1">当前：{{player.sta8n1?"开启":"关闭"}}</button>
    </div>
    <div :class="player.PL4goal[12]?'PL4goalyes':'PL4goalno'">
      <span>没有生产出的壹式风灵时获得e5.553e18能量</span><br /><span>解锁风五倍系统</span>
    </div>
    <div :class="player.PL4goal[13]?'PL4goalyes':'PL4goalno'">
      <span>扫敥能量为1时获得e5.553e18能量</span><br /><span>解锁风六倍系统</span>
    </div>
    <div :class="player.PL4goal[14]?'PL4goalyes':'PL4goalno'">
      <span>扪敤能量为1时获得e5.553e18能量</span><br /><span>解锁风灵升级5</span>
    </div>
    <div :class="player.PL4goal[15]?'PL4goalyes':'PL4goalno'">
      <span>扩散能量为1时获得e5.553e18能量</span><br /><span>解锁风灵升级6</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { swi8n1 } = useGameState()
</script>