<template>
  <div class="page-p5-7">
    <div class="ftsz2" style="text-align: center">
      你有0(×1=0)式营养餐，0式便携营养袋<br />
      每当冷却时间结束时触发随机一种效果，重复触发刷新持续时间，多个效果可以同时存在<br />
      效果冷却时间：1s 效果持续时间：1s 在0秒后触发下一效果<br />
      效果1：试炼场cps指数+0(剩余0s)<br />
      效果2：1~8式风灵超指数+0(剩余0s)<br />
      效果3：9~16式风灵超指数+0(剩余0s)<br />
      效果4：17~24式风灵超指数+0(剩余0s)<br />
      效果5：25~32式风灵超指数+0(剩余0s)<br />
      效果6：33~40式风灵超指数+0(剩余0s)
    </div>
    <table align="center">
      <tr>
        <td><button class="PL4upgno">将营养餐式数增加1，需要0扬敦点</button></td>
        <td><button class="PL4upgno">将营养袋式数增加1，需要0式营养餐</button></td>
      </tr>
      <tr>
        <td><button class="PL4upgno">冷却时间减少40%，但持续时间减少20%，需要0式营养袋(0/9)</button></td>
        <td><button class="PL4upgno">使营养餐的第一个非永久效果变为永久，但重置计时器和第3个升级的数量，需要0级冷却时间升级(0/3)</button></td>
      </tr>
    </table>
    <div class="ftsz2" style="text-align: center">到达一定式数的营养餐以获得奖励</div>
    <div class="PL4goalno">到达10式营养餐<br />基于营养餐提高扩散、扪敤、扫敥、扬敦能量的指数（+0.002×营养餐，最高为1）</div>
    <div class="PL4goalno">到达39式营养餐<br />使协同的所有粒子都变为聚集状态</div>
    <div class="PL4goalno">到达152式营养餐<br />使试炼场所有技能都以50%总计技能点生效</div>
    <div class="PL4goalno">到达593式营养餐<br />营养餐式数增加风之徱粕获取数量</div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-p5-7 {
  padding: 20px;
}
</style>
