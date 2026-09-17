<template>
  <div id="p6_6">
    <div class="btnrow" v-if="player.hasunlockedanm5">
      <div align="center" class="ftsz2">生态系统模拟 - 观察能量在食物链中的流动</div>

      <!-- 长方形纯色按钮 -->
      <div class="btnrow">
        <button class="PL6btn" @click="toggleEcosystem">{{ isEcosystemRunning ? '暂停' : '开始' }}</button>
        <button class="PL6btn" @click="resetEcosystem">重置</button>
      </div>

      <!-- 长方型长条：模拟条件 -->
      <div class="PL6bar">
        模拟速度：<input type="range" class="PL6slider" v-model.number="ecosystemSpeed" min="0.1" max="5" step="0.1" /> {{ ecosystemSpeed.toFixed(1) }}
        能量传递效率：<input type="range" class="PL6slider" v-model.number="energyTransferRate" min="5" max="20" step="0.5" /> {{ energyTransferRate.toFixed(1) }}%
        环境承载力：<input type="range" class="PL6slider" v-model.number="carryingCapacity" min="50" max="500" step="10" /> {{ carryingCapacity.toFixed(0) }}
      </div>

      <div class="PL6bar">构建复杂的生态系统，通过生产者-消费者的能量流动获得风之徲粖获取，数量每到达1e6解锁下一级消费者</div>

      <!-- 长方型长条：生物种群（含进度长条） -->
      <div align="center" class="ftsz2">生物种群</div>
      <div v-for="o in organisms" :key="o.key">
        <div class="PL6bar">
          {{o.name}}：{{notation(o.amount)}}<span v-if="o.rate"> (+{{notation(o.rate)}}/秒)</span>
        </div>
        <div class="PL6barcon">
          <div class="PL6barfill" :style="{ width: getBarWidth(o.amount) }"></div>
        </div>
        <table align="center" v-if="o.buyId">
          <tbody>
            <tr>
              <td>
                <button class="PL6upgno" @click="buyecou(o.buyId)">
                  升级 (×2)<br />需要{{notation(o.cost)}}{{o.name}}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 长方型长条：系统效果 -->
      <div class="PL6bar">系统效果：基于生态系统复杂度提供{{notation(v.anm5ps)}}基础风之徲粖产量</div>

      <!-- 风之徲粖：与 p5_6 的「风之徱粕」写法一致（btnrow + ftsz2 inline-block），配色 #8000FF -->
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block; color: #8000FF">你有{{notation(player.anm5)}}风之徲粖(+{{notation(v.anm5ps)}}/s)，它以log2(log2(x+1)+1)^{{notation(exp)}}的效果使风之徱粕获取^{{notation(eff)}}</div><br />
      </div>

      <!-- 风之徲粖升级（原「生态系统升级」）：与 p5_6 的「风之徱粕升级」一致，
           一行 4 个按钮，用 .PL5bab（184×184、4px #0000FF 描边，与 .PL4bab 同几何） -->
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block; color: #8000FF">风之徲粖升级</div><br />
      </div>
      <table align="center">
        <tbody>
          <tr>
            <td><button class="PL5bab" @click="buyanm5u(1)">双倍风之徲粖产量<br />{{ascale(player.anm5u01,1)}}等级{{notatint(player.anm5u01)}}<br />当前：×{{notation(player.anm5u01.pwb(2))}}<br />花费：{{notation(v.anm5c01)}}风之徲粖</button></td>
            <td><button class="PL5bab" @click="buyanm5u(2)">风之徲粖提升41~48式风灵乘数<br />{{ascale(player.anm5u02,2)}}等级{{notatint(player.anm5u02)}}<br />当前：×{{notation(player.anm5.pow(player.anm5u02.mul(67108864)).max(1))}}<br />花费：{{notation(v.anm5c02)}}风之徲粖</button></td>
            <td><button class="PL5bab" @click="buyanm5u(3)">增加风之徲粖效果指数<br />{{ascale(player.anm5u03,3)}}等级{{notatint(player.anm5u03)}}<br />当前：+{{notation(player.anm5u03.div(64).min(player.anm5u03.div(64).add(0.0625).root(4).sub(0.0625)))}}{{player.anm5u03.gte(60)?"(受软上限限制)":""}}<br />花费：{{notation(v.anm5c03)}}风之徲粖</button></td>
            <td><button class="PL5bab" @click="buyanm5u(4)">增加二阶游戏速度<br />{{ascale(player.anm5u04,4)}}等级{{notatint(player.anm5u04)}}<br />当前：×{{notation(player.anm5u04.div(7).add(1))}}<br />花费：{{notation(v.anm5c04)}}风之徲粖</button></td>
          </tr>
        </tbody>
      </table>

      <!-- 长方型长条：能量流动 -->
      <div align="center" class="ftsz2">能量流动</div>
      <div class="PL6bar">太阳光能 → 生产者 → 一级消费者 → 二级消费者 → 三级消费者</div>
      <div class="PL6bar">分解者（循环利用）</div>
    </div>
    <div v-else class="btnrow">
      <button align="center" class="xxButton" @click="ulAnm5()" style="background-color:#8000ff">解锁生态系统<br />花费：1e200000扭敧点</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameState } from '../../composables/useGameState'

const props = defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, ascale, buyecou, buyanm5u, ulAnm5 } = useGameState()

// 生态系统模拟参数（目前只影响展示）
const isEcosystemRunning = ref(false)
const ecosystemSpeed = ref(1)
const energyTransferRate = ref(10)
const carryingCapacity = ref(200)

const toggleEcosystem = () => {
  isEcosystemRunning.value = !isEcosystemRunning.value
}

const resetEcosystem = () => {
  isEcosystemRunning.value = false
  ecosystemSpeed.value = 1
  energyTransferRate.value = 10
  carryingCapacity.value = 200
}

// 生物种群列表（分解者没有对应数值字段，故只在"能量流动"中作为示意出现）
const organisms = computed(() => [
  { key: 'producer', name: '生产者', amount: props.player.producer, rate: props.v.producerps, cost: props.v.ecou01c, buyId: 1 },
  { key: 'consumer1', name: '一级消费者', amount: props.player.consumer1, rate: props.v.consumer1ps, cost: props.v.ecou02c, buyId: 2 },
  { key: 'consumer2', name: '二级消费者', amount: props.player.consumer2, rate: props.v.consumer2ps, cost: props.v.ecou03c, buyId: 3 },
  { key: 'consumer3', name: '三级消费者', amount: props.player.consumer3, rate: props.v.consumer3ps, cost: props.v.ecou04c, buyId: 4 },
])

const exp = computed(() => props.player.anm5u03.div(64).add(0.0625).min(props.player.anm5u03.div(64).add(0.0625).root(4)))
const eff = computed(() => props.player.anm5.add(1).log(2).add(1).log(2).max(1).pow(exp.value))

// 进度条宽度：Decimal 转 number 可能得到 Infinity（超大数），需要钳制
const getBarWidth = (value) => {
  if (value === null || value === undefined) return '0%'
  const n = typeof value === 'number' ? value : (value.toNumber ? value.toNumber() : Number(value))
  if (!Number.isFinite(n) || n <= 0) return '0%'
  const pct = (n / carryingCapacity.value) * 100
  if (!Number.isFinite(pct)) return '100%'
  return Math.min(100, Math.max(0, pct)).toFixed(2) + '%'
}
</script>
