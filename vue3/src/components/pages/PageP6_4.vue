<template>
  <div class="page-p6-4">
    <div class="btnrow">
      <div class="ftsz2">电磁能量每秒乘以壹式太阳风灵的乘数^指数，前一式太阳风灵的乘数每秒乘以后一式太阳风灵的乘数^指数</div>
      <div class="ftsz2">你有<span class="ftsz3">0</span>电磁能量，它使最终能量指数乘以<span class="ftsz3">1</span>。<button class="ltbutton">+1</button></div><br />
      <div class="solarwsc" style="background-color:#ffffff80;">
        <span>壹式太阳风灵作成·0</span>
        <button class="wscbt1">作成1次需要:<br>100电磁能量</button><br />
        <span class="wscdat">×1 ^1</span>
      </div>
      <div class="solarwsc" style="background-color:#ff000080;">
        <span>贰式太阳风灵作成·0</span>
        <button class="wscbt1">作成1次需要:<br>1000电磁能量</button><br />
        <span class="wscdat">×1 ^1</span>
      </div>
      <div class="solarwsc" style="background-color:#ffff0080;">
        <span>叁式太阳风灵作成·0</span>
        <button class="wscbt1">作成1次需要:<br>10000电磁能量</button><br />
        <span class="wscdat">×1 ^1</span>
      </div>
      <div class="solarwsc" style="background-color:#00ff0080;">
        <span>肆式太阳风灵作成·0</span>
        <button class="wscbt1">作成1次需要:<br>100000电磁能量</button><br />
        <span class="wscdat">×1 ^1</span>
      </div>
      <br />
      <button class="stormbtn">
        开启/停止电磁暴（当前状态：未激活）<br />
        开启电磁暴时，将进行扭敧重置并重置1~48式风灵，游戏速度加成失效，<br />
        在电磁暴中风灵的乘数、指数、超指数加成失效，每次作成乘数强制为2。<br />
        电磁暴中的最高能量指数（log2能量）：0<br />
        到达2000指数将解锁5式太阳风灵
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-p6-4 {
  padding: 20px;
}
</style>
