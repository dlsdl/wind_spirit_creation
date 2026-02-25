<template>
  <div class="page-p6-8">
    <div class="btnrow">
      <h2 style="color: #00ff00; text-align: center;">CRISPR-Cas9基因编辑系统</h2>
      <div class="ftsz2" style="text-align: center">
        <p>使用CRISPR-Cas9基因编辑技术进行精确的基因改造。需要足够的DNA资源来执行基因编辑操作。</p>
        <p style="color: #ff6666;">解锁条件：拥有至少100个碱基</p>
      </div>
      <div style="text-align: center">
        <h3 style="color: #ffffff;">DNA资源</h3>
        <p>DNA数量：0</p>
        <p>DNA产量：0/秒</p>
        <p>累计获得DNA：0</p>
      </div>
      <div style="text-align: center">
        <h3 style="color: #ffffff;">基因槽位</h3>
        <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
          <div v-for="i in 4" :key="i" style="border: 2px solid #00ff00; padding: 10px; width: 200px;">
            <div style="color: #ffffff;">基因槽位 {{ i }}</div>
            <div style="color: #ff6666;">未解锁</div>
            <button style="margin-top: 10px;">解锁槽位 (成本: {{ Math.pow(100, i) }} DNA)</button>
          </div>
        </div>
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <h3 style="color: #ffffff;">编辑技术</h3>
        <p>技术等级：0</p>
        <p>效率加成：×1</p>
        <button>升级编辑技术 (成本: 50 DNA)</button>
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <h3 style="color: #ffffff;">基因功能说明</h3>
        <table style="margin: auto; border-collapse: collapse;">
          <tr style="border: 1px solid #ffffff;">
            <th style="border: 1px solid #ffffff; padding: 5px;">基因类型</th>
            <th style="border: 1px solid #ffffff; padding: 5px;">功能描述</th>
            <th style="border: 1px solid #ffffff; padding: 5px;">效果倍率</th>
          </tr>
          <tr style="border: 1px solid #ffffff;">
            <td style="border: 1px solid #ffffff; padding: 5px;">基因1：风灵增强</td>
            <td style="border: 1px solid #ffffff; padding: 5px;">增加41~48式风灵产量</td>
            <td style="border: 1px solid #ffffff; padding: 5px;">×1.1^等级</td>
          </tr>
          <tr style="border: 1px solid #ffffff;">
            <td style="border: 1px solid #ffffff; padding: 5px;">基因2：多面体增强</td>
            <td style="border: 1px solid #ffffff; padding: 5px;">增加多面体获取效率</td>
            <td style="border: 1px solid #ffffff; padding: 5px;">×1.05^等级</td>
          </tr>
          <tr style="border: 1px solid #ffffff;">
            <td style="border: 1px solid #ffffff; padding: 5px;">基因3：量子增强</td>
            <td style="border: 1px solid #ffffff; padding: 5px;">增加量子获取效率</td>
            <td style="border: 1px solid #ffffff; padding: 5px;">×1.02^等级</td>
          </tr>
          <tr style="border: 1px solid #ffffff;">
            <td style="border: 1px solid #ffffff; padding: 5px;">基因4：太阳风灵增强</td>
            <td style="border: 1px solid #ffffff; padding: 5px;">增加太阳风灵产量</td>
            <td style="border: 1px solid #ffffff; padding: 5px;">×1.15^等级</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-p6-8 {
  padding: 20px;
}
</style>
