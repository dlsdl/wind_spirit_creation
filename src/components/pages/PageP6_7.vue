<template>
  <div id="p6_7">
    <div class="btnrow" v-if="player.PL5ptsttl.gte('1e1000000')">
      <div align="center" class="ftsz2">一共有5种碱基，花费扭敧点增加碱基每秒获得数量，碱基数量提供强力加成。</div>

      <!-- 长方型长条 + 长方形纯色按钮：每种碱基 -->
      <div v-for="b in bases" :key="b.key">
        <div class="PL6bar">
          {{b.name}}：{{notation(b.amount)}} (+{{notation(b.prod)}}/秒)
          <span v-if="!b.unlocked">［解锁条件：{{b.req}} 总计扭敧点］</span>
        </div>
        <div class="btnrow">
          <button class="PL6btn" @click="buyBase(b.key)" :disabled="!canBuyBase(b.key)">
            {{b.unlocked ? '购买' + b.name + '（消耗' + notation(getBaseCost(b.key)) + '扭敧点）' : b.name + '未解锁'}}
          </button>
        </div>
      </div>

      <!-- 长方形框按钮：碱基升级 -->
      <div align="center" class="ftsz2">碱基升级</div>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button class="PL6upgno" @click="buyBaseUpgrade1All()">
                碱基产量升级1<br />
                等级{{notation(player.baseA_upg1.add(player.baseG_upg1).add(player.baseC_upg1).add(player.baseT_upg1).add(player.baseU_upg1))}}<br />
                效果：碱基产量 ×{{notation(getBaseUpgrade1Effect())}}<br />
                消耗：{{notation(getBaseUpgrade1Cost())}} 对应资源
              </button>
            </td>
            <td>
              <button class="PL6upgno" @click="buyBaseUpgrade2All()">
                碱基产量升级2<br />
                等级{{notation(player.baseA_upg2.add(player.baseG_upg2).add(player.baseC_upg2).add(player.baseT_upg2).add(player.baseU_upg2))}}<br />
                效果：碱基产量 ×{{notation(getBaseUpgrade2Effect())}}<br />
                消耗：{{notation(getBaseUpgrade2Cost())}} 扭敧点
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 长方型长条：总效果 -->
      <div class="PL6baryes">碱基总产量：{{notation(v.baseprd)}}/秒</div>
      <div class="PL6baryes">碱基效果：能量产量 ×{{notation(v.baseprd.add(1))}}</div>
    </div>
    <div v-else align="center" class="ftsz2">需要e1.000e6累计扭敧点解锁碱基</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGameState } from '../../composables/useGameState'

const props = defineProps({
  player: Object,
  v: Object
})

const {
  notation,
  getBaseCost,
  buyBase,
  canBuyBase,
  getBaseUpgrade1Cost,
  getBaseUpgrade2Cost,
  getBaseUpgrade1Effect,
  getBaseUpgrade2Effect,
  buyBaseUpgrade1All,
  buyBaseUpgrade2All
} = useGameState()

const bases = computed(() => [
  { key: 'baseA', name: '腺嘌呤(A)', req: 'e1.00e6', amount: props.player.baseA, prod: props.player.baseA_prod, unlocked: !!props.player.baseA_unlocked?.[0] },
  { key: 'baseG', name: '鸟嘌呤(G)', req: 'e2.00e6', amount: props.player.baseG, prod: props.player.baseG_prod, unlocked: !!props.player.baseG_unlocked?.[0] },
  { key: 'baseC', name: '胞嘧啶(C)', req: 'e4.00e6', amount: props.player.baseC, prod: props.player.baseC_prod, unlocked: !!props.player.baseC_unlocked?.[0] },
  { key: 'baseT', name: '胸腺嘧啶(T)', req: 'e8.00e6', amount: props.player.baseT, prod: props.player.baseT_prod, unlocked: !!props.player.baseT_unlocked?.[0] },
  { key: 'baseU', name: '尿嘧啶(U)', req: 'e1.600e7', amount: props.player.baseU, prod: props.player.baseU_prod, unlocked: !!props.player.baseU_unlocked?.[0] },
])
</script>
