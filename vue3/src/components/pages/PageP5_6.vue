<template>
  <div class="page-p5-6">
    <div v-if="true" class="ftsz2" style="color: #0080ff; text-align: center">
      选择谜影才可进入刺影征标，除第一行外，上一行的谜影被选择，才能选择下一行的谜影，进入刺影征标将进行扬敦重置。<br />
      在刺影征标中无法更改谜影，到达e1e15能量以获得征标值，谜影越多，获得的征标值越多，基于征标值生成风之徱粕。<br />
      征标值纪录：0，完成此次刺影征标的征标值：0
    </div>
    <table align="center">
      <tr>
        <td><button class="batu2">重置谜影选择</button></td>
        <td><button class="batu2">进入/退出刺影征标</button></td>
      </tr>
    </table>
    <table align="center">
      <tr>
        <td><button class="PL4upgno">所有风灵的超指数减去0.05<br />(征标值×4)</button></td>
      </tr>
    </table>
    <table align="center">
      <tr>
        <td><button class="PL4upgno">甜甜花种子效果被禁用<br />(征标值×8)</button></td>
        <td><button class="PL4upgno">转化升级效果被禁用<br />(征标值×8)</button></td>
      </tr>
    </table>
    <table align="center">
      <tr>
        <td><button class="PL4upgno">多面体波效果除以4<br />(征标值×16)</button></td>
        <td><button class="PL4upgno">能量软上限提前65536倍<br />(征标值×16)</button></td>
        <td><button class="PL4upgno">金币效果除以1.5<br />(征标值×16)</button></td>
      </tr>
    </table>
    <div class="ftsz2" style="color: #0080ff; text-align: center">
      你有0风之徱粕(+0/s)，它以log2(log2(x+1)+1)^0.0625的效果使风之徰粔获取^1
    </div>
    <table align="center">
      <tr>
        <td><button class="PL4bab">双倍风之徱粕产量<br />等级0<br />当前：×1<br />花费：100风之徱粕</button></td>
        <td><button class="PL4bab">风之徱粕提升33~40式风灵乘数<br />等级0<br />当前：×1<br />花费：100风之徱粕</button></td>
        <td><button class="PL4bab">增加风之徱粕效果指数<br />等级0<br />当前：+0<br />花费：100风之徱粕</button></td>
        <td><button class="PL4bab">增加1~40式风灵的超指数<br />等级0<br />当前：+0<br />花费：100风之徱粕</button></td>
      </tr>
    </table>
    <div class="ftsz2" style="color: #0080ff; text-align: center">
      到达1024征标值后解锁营养餐
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-p5-6 {
  padding: 20px;
}
</style>
