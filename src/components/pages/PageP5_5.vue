<template>
  <div id="p5_5">
    <div v-if="player.stgmx.gte(2000)">
      <div align="center" class="ftsz2" style="color:#ffffff">你有{{notation(player.syna01)}}壹式粒子(+{{notation(v.synps01)}}/s)，因此四面体波获取乘以{{notation(v.synm01)}}</div>
      <div align="center" class="ftsz2" style="color:#ff0000">你有{{notation(player.syna02)}}贰式粒子(+{{notation(v.synps02)}}/s)，因此六面体波获取乘以{{notation(v.synm02)}}</div>
      <div align="center" class="ftsz2" style="color:#ffff00">你有{{notation(player.syna03)}}叁式粒子(+{{notation(v.synps03)}}/s)，因此八面体波获取乘以{{notation(v.synm03)}}</div>
      <div align="center" class="ftsz2" style="color:#00ff00">你有{{notation(player.syna04)}}肆式粒子(+{{notation(v.synps04)}}/s)，因此十二面体波获取乘以{{notation(v.synm04)}}</div>
      <div align="center" class="ftsz2" style="color:#00ffff">你有{{notation(player.syna05)}}伍式粒子(+{{notation(v.synps05)}}/s)，因此二十面体波获取乘以{{notation(v.synm05)}}</div>
      <div align="center" class="ftsz2">点击聚集其中一种粒子，被聚集的粒子产量^1.05×4，其他粒子产量√1.05÷4。（巧施协同）</div>
      <table align="center">
        <tr>
          <td><button :class="player.synfcs==1?'synuyes':'synu'" @click="fcssyn(1)">聚集壹式粒子</button></td>
          <td><button :class="player.synfcs==2?'synuyes':'synu'" @click="fcssyn(2)">聚集贰式粒子</button></td>
          <td><button :class="player.synfcs==3?'synuyes':'synu'" @click="fcssyn(3)">聚集叁式粒子</button></td>
          <td><button :class="player.synfcs==4?'synuyes':'synu'" @click="fcssyn(4)">聚集肆式粒子</button></td>
          <td><button :class="player.synfcs==5?'synuyes':'synu'" @click="fcssyn(5)">聚集伍式粒子</button></td>
        </tr>
      </table>
      <div align="center" class="ftsz2">协同升级</div>
      <table align="center">
        <tr>
          <td><button class="synu" @click="buysynu(1)">壹式粒子增加其他粒子获取<br />×{{notation(v.synum01)}}<br />花费：{{notation(v.synuc01)}}壹式粒子</button></td>
          <td><button class="synu" @click="buysynu(2)">贰式粒子增加其他粒子获取<br />×{{notation(v.synum02)}}<br />花费：{{notation(v.synuc02)}}贰式粒子</button></td>
          <td><button class="synu" @click="buysynu(3)">叁式粒子增加其他粒子获取<br />×{{notation(v.synum03)}}<br />花费：{{notation(v.synuc03)}}叁式粒子</button></td>
          <td><button class="synu" @click="buysynu(4)">肆式粒子增加其他粒子获取<br />×{{notation(v.synum04)}}<br />花费：{{notation(v.synuc04)}}肆式粒子</button></td>
          <td><button class="synu" @click="buysynu(5)">伍式粒子增加其他粒子获取<br />×{{notation(v.synum05)}}<br />花费：{{notation(v.synuc05)}}伍式粒子</button></td>
        </tr>
        <tr>
          <td><button class="synu" @click="buysynu(6)">其他粒子增加壹式粒子获取<br />×{{notation(v.synum06)}}<br />花费：{{notation(v.synuc06)}}壹式粒子</button></td>
          <td><button class="synu" @click="buysynu(7)">其他粒子增加贰式粒子获取<br />×{{notation(v.synum07)}}<br />花费：{{notation(v.synuc07)}}贰式粒子</button></td>
          <td><button class="synu" @click="buysynu(8)">其他粒子增加叁式粒子获取<br />×{{notation(v.synum08)}}<br />花费：{{notation(v.synuc08)}}叁式粒子</button></td>
          <td><button class="synu" @click="buysynu(9)">其他粒子增加肆式粒子获取<br />×{{notation(v.synum09)}}<br />花费：{{notation(v.synuc09)}}肆式粒子</button></td>
          <td><button class="synu" @click="buysynu(10)">其他粒子增加伍式粒子获取<br />×{{notation(v.synum10)}}<br />花费：{{notation(v.synuc10)}}伍式粒子</button></td>
        </tr>
        <tr>
          <td><button :class="player.synu11.gte(1)?'synuyes':'synu'" @click="buysynu(11)">柏拉图!多面体波的获取基于总计惊奇!风盒数量，而不是各种柏拉图!立体<br />需要1e6壹式粒子<span id="synb11"></span></button></td>
          <td><button :class="player.synu12.gte(1)?'synuyes':'synu'" @click="buysynu(12)">进阶挑战1~4,5~8,9~12的上限分别增加28,20,12<br />需要1e12壹式粒子<span id="synb12"></span></button></td>
          <td><button :class="player.synu13.gte(1)?'synuyes':'synu'" @click="buysynu(13)">锻造物品的效果基于总计惊奇!风盒数量，而不是各种锻造物品<br />需要1e18壹式粒子<span id="synb13"></span></button></td>
        </tr>
      </table>
    </div>
    <div v-else align="center" class="ftsz2">需要通过试炼场阶段2000</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, fcssyn, buysynu } = useGameState()
</script>