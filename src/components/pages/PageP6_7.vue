<template>
  <div id="p6_7">
    <div class="btnrow" v-if="player.PL5ptsttl.gte('1e1000000')">
      <div class="ftsz2" style="text-align: center">
      一共有5种碱基，花费扭敧点增加碱基每秒获得数量，碱基数量提供强力加成。<br/>
      </div><br/>
      <div class="bases-container">
      <div class="base-row">
        <div class="base-info">
          <span class="base-name">腺嘌呤(A)：</span>
          <span class="base-amount">{{notation(player.baseA)}}</span>
          <span class="base-production">(+{{notation(player.baseA_prod)}}/秒)</span>
          <span class="base-threshold" v-if="!player.baseA_unlocked?.[0]">
            [解锁条件：e1.00e6 总计扭敧点]
          </span>
        </div>
        <div class="base-actions">
          <button class="base-buy-btn" @click="buyBase('baseA')" :disabled="!canBuyBase('baseA')">购买腺嘌呤</button>
          <span class="base-cost" v-if="player.baseA_unlocked?.[0]">消耗：{{notation(getBaseCost('baseA'))}} 扭敧点</span>
          <span class="base-locked" v-else>未解锁</span>
        </div>
      </div>
      
      <div class="base-row">
        <div class="base-info">
          <span class="base-name">鸟嘌呤(G)：</span>
          <span class="base-amount">{{notation(player.baseG)}}</span>
          <span class="base-production">(+{{notation(player.baseG_prod)}}/秒)</span>
          <span class="base-threshold" v-if="!player.baseG_unlocked?.[0]">
            [解锁条件：e2.00e6 总计扭敧点]
          </span>
        </div>
        <div class="base-actions">
          <button class="base-buy-btn" @click="buyBase('baseG')" :disabled="!canBuyBase('baseG')">购买鸟嘌呤</button>
          <span class="base-cost" v-if="player.baseG_unlocked?.[0]">消耗：{{notation(getBaseCost('baseG'))}} 扭敧点</span>
          <span class="base-locked" v-else>未解锁</span>
        </div>
      </div>
      
      <div class="base-row">
        <div class="base-info">
          <span class="base-name">胞嘧啶(C)：</span>
          <span class="base-amount">{{notation(player.baseC)}}</span>
          <span class="base-production">(+{{notation(player.baseC_prod)}}/秒)</span>
          <span class="base-threshold" v-if="!player.baseC_unlocked?.[0]">
            [解锁条件：e4.00e6 总计扭敧点]
          </span>
        </div>
        <div class="base-actions">
          <button class="base-buy-btn" @click="buyBase('baseC')" :disabled="!canBuyBase('baseC')">购买胞嘧啶</button>
          <span class="base-cost" v-if="player.baseC_unlocked?.[0]">消耗：{{notation(getBaseCost('baseC'))}} 扭敧点</span>
          <span class="base-locked" v-else>未解锁</span>
        </div>
      </div>
      
      <div class="base-row">
        <div class="base-info">
          <span class="base-name">胸腺嘧啶(T)：</span>
          <span class="base-amount">{{notation(player.baseT)}}</span>
          <span class="base-production">(+{{notation(player.baseT_prod)}}/秒)</span>
          <span class="base-threshold" v-if="!player.baseT_unlocked?.[0]">
            [解锁条件：e8.00e6 总计扭敧点]
          </span>
        </div>
        <div class="base-actions">
          <button class="base-buy-btn" @click="buyBase('baseT')" :disabled="!canBuyBase('baseT')">购买胸腺嘧啶</button>
          <span class="base-cost" v-if="player.baseT_unlocked?.[0]">消耗：{{notation(getBaseCost('baseT'))}} 扭敧点</span>
          <span class="base-locked" v-else>未解锁</span>
        </div>
      </div>
      
      <div class="base-row">
        <div class="base-info">
          <span class="base-name">尿嘧啶(U)：</span>
          <span class="base-amount">{{notation(player.baseU)}}</span>
          <span class="base-production">(+{{notation(player.baseU_prod)}}/秒)</span>
          <span class="base-threshold" v-if="!player.baseU_unlocked?.[0]">
            [解锁条件：e1.600e7 总计扭敧点]
          </span>
        </div>
        <div class="base-actions">
          <button class="base-buy-btn" @click="buyBase('baseU')" :disabled="!canBuyBase('baseU')">购买尿嘧啶</button>
          <span class="base-cost" v-if="player.baseU_unlocked?.[0]">消耗：{{notation(getBaseCost('baseU'))}} 扭敧点</span>
          <span class="base-locked" v-else>未解锁</span>
        </div>
      </div>
    </div>
    
    <br/>
    <div class="upgrades-section">
      <div class="ftsz2" style="color: #0000ff; text-align: center">碱基升级</div>
      <div class="upgrade-row">
        <div class="upgrade-info">
          <span class="upgrade-name">碱基产量升级1：</span>
          <span class="upgrade-level">等级 {{notation(player.baseA_upg1.add(player.baseG_upg1).add(player.baseC_upg1).add(player.baseT_upg1).add(player.baseU_upg1))}}</span>
          <span class="upgrade-effect">效果：碱基产量 ×{{notation(getBaseUpgrade1Effect())}}</span>
        </div>
        <div class="upgrade-actions">
          <button class="upgrade-buy-btn" @click="buyBaseUpgrade1All()">购买升级1</button>
          <span class="upgrade-cost">消耗：{{notation(getBaseUpgrade1Cost())}} 对应资源</span>
        </div>
      </div>
      
      <div class="upgrade-row">
        <div class="upgrade-info">
          <span class="upgrade-name">碱基产量升级2：</span>
          <span class="upgrade-level">等级 {{notation(player.baseA_upg2.add(player.baseG_upg2).add(player.baseC_upg2).add(player.baseT_upg2).add(player.baseU_upg2))}}</span>
          <span class="upgrade-effect">效果：碱基产量 ×{{notation(getBaseUpgrade2Effect())}}</span>
        </div>
        <div class="upgrade-actions">
          <button class="upgrade-buy-btn" @click="buyBaseUpgrade2All()">购买升级2</button>
          <span class="upgrade-cost">消耗：{{notation(getBaseUpgrade2Cost())}} 扭敧点</span>
        </div>
      </div>
      
      <div class="effect-section">
        <div class="ftsz2" style="color: #00ff00; text-align: center">
          碱基总产量：{{notation(v.baseprd)}}/秒<br/>
          碱基效果：能量产量 ×{{notation(v.baseprd.add(1))}}
        </div>
      </div>
      </div>
    </div>
    <div v-else align="center" class="ftsz2">需要e1.000e6累计扭敧点解锁碱基</div>
  </div>
</template>

<script setup>
import { useGameState } from '../../composables/useGameState'

defineProps({
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
</script>

<style scoped>
.bases-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0;
}

.base-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #555;
}

.base-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.base-name {
  color: #00ff00;
  font-weight: bold;
  font-size: 14px;
}

.base-amount {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
}

.base-production {
  color: #888;
  font-size: 12px;
}

.base-threshold {
  color: #ff6600;
  font-size: 11px;
}

.base-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.base-buy-btn {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 16px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.base-buy-btn:hover:not(:disabled) {
  background-color: #45a049;
}

.base-buy-btn:disabled {
  background-color: #666;
  cursor: not-allowed;
}

.base-cost {
  color: #888;
  font-size: 11px;
}

.base-locked {
  color: #ff0000;
  font-size: 11px;
}

.upgrades-section {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}

.upgrade-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.upgrade-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.upgrade-name {
  color: #0000ff;
  font-weight: bold;
  font-size: 14px;
}

.upgrade-level {
  color: #ffffff;
  font-size: 12px;
}

.upgrade-effect {
  color: #00ff00;
  font-size: 12px;
}

.upgrade-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.upgrade-buy-btn {
  background-color: #0000ff;
  border: none;
  color: white;
  padding: 8px 16px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.upgrade-buy-btn:hover {
  background-color: #0000cc;
}

.upgrade-cost {
  color: #888;
  font-size: 11px;
}

.effect-section {
  background-color: rgba(0, 255, 0, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}
</style>
