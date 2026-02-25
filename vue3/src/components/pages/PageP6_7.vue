<template>
  <div class="page-p6-7">
    <div class="ftsz2" style="text-align: center">
      一共有5种碱基，花费扭敧点增加碱基每秒获得数量，碱基数量提供强力加成。
    </div>
    <div class="bases-container">
      <div class="base-row">
        <div class="base-info">
          <span class="base-name">腺嘌呤(A)：</span>
          <span class="base-amount">0</span>
          <span class="base-production">(+0/秒)</span>
        </div>
        <div class="base-actions">
          <button class="base-buy-btn">购买腺嘌呤 (+1)</button>
          <span class="base-cost">消耗：1 扭敧点</span>
        </div>
      </div>
      <div class="base-row">
        <div class="base-info">
          <span class="base-name">鸟嘌呤(G)：</span>
          <span class="base-amount">0</span>
          <span class="base-production">(+0/秒)</span>
        </div>
        <div class="base-actions">
          <button class="base-buy-btn">购买鸟嘌呤 (+1)</button>
          <span class="base-cost">消耗：1 扭敧点</span>
        </div>
      </div>
      <div class="base-row">
        <div class="base-info">
          <span class="base-name">胞嘧啶(C)：</span>
          <span class="base-amount">0</span>
          <span class="base-production">(+0/秒)</span>
        </div>
        <div class="base-actions">
          <button class="base-buy-btn">购买胞嘧啶 (+1)</button>
          <span class="base-cost">消耗：1 扭敧点</span>
        </div>
      </div>
      <div class="base-row">
        <div class="base-info">
          <span class="base-name">胸腺嘧啶(T)：</span>
          <span class="base-amount">0</span>
          <span class="base-production">(+0/秒)</span>
        </div>
        <div class="base-actions">
          <button class="base-buy-btn">购买胸腺嘧啶 (+1)</button>
          <span class="base-cost">消耗：1 扭敧点</span>
        </div>
      </div>
      <div class="base-row">
        <div class="base-info">
          <span class="base-name">尿嘧啶(U)：</span>
          <span class="base-amount">0</span>
          <span class="base-production">(+0/秒)</span>
        </div>
        <div class="base-actions">
          <button class="base-buy-btn">购买尿嘧啶 (+1)</button>
          <span class="base-cost">消耗：1 扭敧点</span>
        </div>
      </div>
    </div>
    <br />
    <div class="upgrades-section">
      <div class="ftsz2" style="color: #0000ff; text-align: center">碱基升级</div>
      <div class="upgrade-row">
        <div class="upgrade-info">
          <span class="upgrade-name">碱基产量升级1：</span>
          <span class="upgrade-level">等级 0</span>
          <span class="upgrade-effect">效果：碱基产量 × </span>
        </div>
        <div class="upgrade-actions">
          <button class="upgrade-buy-btn">购买升级1</button>
          <span class="upgrade-cost">消耗：扭敧点</span>
        </div>
      </div>
      <div class="upgrade-row">
        <div class="upgrade-info">
          <span class="upgrade-name">碱基产量升级2：</span>
          <span class="upgrade-level">等级 0</span>
          <span class="upgrade-effect">效果：碱基产量 × </span>
        </div>
        <div class="upgrade-actions">
          <button class="upgrade-buy-btn">购买升级2</button>
          <span class="upgrade-cost">消耗：扭敧点</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-p6-7 {
  padding: 20px;
}
</style>
