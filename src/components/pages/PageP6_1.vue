<template>
  <div id="p6_1">
    <div align="center" class="ftsz2" style="color:#0000ff">扭敧重置时能量坍缩了！看起来就像是蒸发了一样，不知道代价又是什么？别担心，新机制就要来了！</div>
    <div class="btnrow">
      <div align="center" class="ftsz3" style="display:inline-block; margin:auto">你来到了量子之海! 选择深度：</div>
      <div class="selector">
        <button @click="chdepth(1)" :class="player.depth==1?'slctyes':'slctno'">1</button>
        <button @click="chdepth(2)" :class="player.depth==2?'slctyes':'slctno'">2</button>
        <button @click="chdepth(3)" :class="player.depth==3?'slctyes':'slctno'">3</button>
        <button @click="chdepth(4)" :class="player.depth==4?'slctyes':'slctno'">4</button>
      </div>
    </div>
    <div align="center" class="ftsz2">你有{{notation(player.quant)}}量子({{notation(v.quantps)}}/s,基于扭敧次数和扭敧能量)，部分升级需要满足要求，标记为"连续"的升级需要长按填充升级</div><br />
    <table align="center" v-if="player.depth==1">
      <tbody>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[0]?'PL5upgyes':'PL5upgno'" @click="buyquau(0)">11<br />基于量子提升1~48式风灵产量<br />当前：×{{notation(v.quae11)}}<br />花费：100量子<br /></button></td>
        <td><button :class="player.quau[1]?'PL5upgyes':'PL5upgno'" @click="buyquau(1)">12<br />获得并保留1~32式风灵自动作成，并解锁自动作成33~40式风灵<br />花费：10000量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[2]?'PL5upgyes':'PL5upgno'" @click="buyquau(2)">13<br />获得并保留风之xx升级自动购买和风之xx解锁状态，并解锁自动购买风之徱粕升级<br />花费：1e6量子<br /></button></td>
        <td><button class="PL5upgno" @mousedown="fillqua(1)">F1<br />(连续)基于填充数量提升41~48式风灵的指数<br />当前：+{{notation(v.quaef1)}}<br />已填充：{{notation(player.quafil01)}}量子</button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      </tbody>
    </table>
    <table align="center" v-if="player.depth==2">
      <tbody>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[3]?'PL5upgyes':'PL5upgno'" @click="buyquau(3)">21<br />获得并保留扬敦目标1~16，扭敧重置时保留进阶挑战1~16(要求：购买升级11)<br />花费：1e8量子<br /></button></td>
        <td><button :class="player.quau[4]?'PL5upgyes':'PL5upgno'" @click="buyquau(4)">22<br />保留并解锁自动获得前四层重置次数，扬敦次数乘以扫敥次数^1/16(要求：购买升级12)<br />花费：1e10量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[5]?'PL5upgyes':'PL5upgno'" @click="buyquau(5)">23<br />扭敧重置时保留扬敦碎片升级、最终立体波升级、最后一行协同升级(要求：扭敧重置2次)<br />花费：1e12量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[6]?'PL5upgyes':'PL5upgno'" @click="buyquau(6)">24<br />扭敧重置时保留2000试炼场阶段、1024征标值、300式营养餐及升级(要求：扭敧重置2次)<br />花费：1e13量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[7]?'PL5upgyes':'PL5upgno'" @click="buyquau(7)">25<br />解锁自动购买惊奇风盒、协同升级、营养餐和营养袋(要求：购买升级13)<br />花费：1e11量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgno" @mousedown="fillqua(2)">F2<br />(连续)基于填充数量提升41~48式风灵的超指数<br />已填充：{{notation(player.quafil02)}}量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[8]?'PL5upgyes':'PL5upgno'" @click="buyquau(8)">26<br />解锁光合作用(要求：扭敧重置10次)<br />花费：1e18量子<br /></button></td>
        <td><button class="PL5upgno" @mousedown="fillqua(3)">F3<br />(连续)基于填充数量和扭敧能量提升1~40式风灵的指数<br />已填充：{{notation(player.quafil03)}}量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      </tbody>
    </table>
    <table align="center" v-if="player.depth==3">
      <tbody>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[9]?'PL5upgyes':'PL5upgno'" @click="buyquau(9)">31<br />解锁自动获得风五倍系统和风六倍系统，它们不再重置任何东西(要求：购买升级21)<br />花费：1e20量子<br /></button></td>
        <td><button :class="player.quau[10]?'PL5upgyes':'PL5upgno'" @click="buyquau(10)">32<br />解锁自动购买风灵升级5和6，自动获得技能点(要求：购买升级22)<br />花费：1e22量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[11]?'PL5upgyes':'PL5upgno'" @click="buyquau(11)">33<br />肆壹式风灵可以生产肆零式风灵(要求：购买升级23)<br />花费：1e24量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[12]?'PL5upgyes':'PL5upgno'" @click="buyquau(12)">34<br />保留征标值记录，超过e3e26的能量增加风之徱粕获取(要求：购买升级24)<br />花费：1e26量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button :class="player.quau[13]?'PL5upgyes':'PL5upgno'" @click="buyquau(13)">35<br />每秒自动获得0.1%扬敦时将要获得的扬敦碎片(要求：拥有e5e27能量)<br />花费：1e28量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[14]?'PL5upgyes':'PL5upgno'" @click="buyquau(14)">36<br />每秒自动获得扬敦点，直到等于100%判定中的扬敦点(要求：拥有e1e28能量)<br />花费：1e30量子<br /></button></td>
      </tr>
      <tr>
        <td><button :class="player.quau[15]?'PL5upgyes':'PL5upgno'" @click="buyquau(15)">37<br />解锁电磁暴,在太阳风选项卡内(要求：解锁太阳风灵)<br />花费：1e40量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[16]?'PL5upgyes':'PL5upgno'" @click="buyquau(16)">38<br />解锁进阶挑战17~20<br />花费：1e60量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button :class="player.quau[17]?'PL5upgyes':'PL5upgno'" @click="buyquau(17)">39<br />进阶挑战1~4、5~8、9~12、13~16次数上限分别增加36、28、20、12<br />花费：1e80量子<br /></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      </tbody>
    </table>
    <table align="center" v-if="player.depth==4">
      <tbody>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      <tr>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
        <td><button class="PL5upgem"></button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, chdepth, buyquau, fillqua } = useGameState()
</script>