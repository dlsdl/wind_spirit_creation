<template>
  <div id="p5_6">
    <div v-if="player.hasunlockedanm4">
      <div align="center" class="ftsz2" style="color:#0080ff">
        选择谜影才可进入刺影征标，除第一行外，上一行的谜影被选择，才能选择下一行的谜影，进入刺影征标将进行扬敦重置。<br />
        在刺影征标中无法更改谜影，到达e1e15能量以获得征标值，谜影越多，获得的征标值越多，基于征标值生成风之徱粕。<br />
        征标值纪录：{{notatint(player.shdwrc)}}，完成此次刺影征标的征标值：{{notatint(v.shdwpd)}} {{player.incyzb?"(当前你在刺影征标中)":""}}
      </div>
      <table align="center">
        <tr>
          <td><button class="batu2" @click="reshsl">重置谜影选择</button></td>
          <td><button class="batu2" @click="encyzb">进入/退出刺影征标</button></td>
        </tr>
      </table>
      <table align="center">
        <tr>
          <td><button :class="player.shdwsl[0]?'PL4upgyes':'PL4upgno'" @click="shsl(1)">所有风灵的超指数减去0.05<br />(征标值×4)</button></td>
        </tr>
      </table>
      <table align="center">
        <tr>
          <td><button :class="player.shdwsl[1]?'PL4upgyes':'PL4upgno'" @click="shsl(2)">甜甜花种子效果被禁用<br />(征标值×8)</button></td>
          <td><button :class="player.shdwsl[2]?'PL4upgyes':'PL4upgno'" @click="shsl(3)">转化升级效果被禁用<br />(征标值×8)</button></td>
        </tr>
      </table>
      <table align="center">
        <tr>
          <td><button :class="player.shdwsl[3]?'PL4upgyes':'PL4upgno'" @click="shsl(4)">多面体波效果除以4<br />(征标值×16)</button></td>
          <td><button :class="player.shdwsl[4]?'PL4upgyes':'PL4upgno'" @click="shsl(5)">能量软上限^1/65536<br />(征标值×16)</button></td>
          <td><button :class="player.shdwsl[5]?'PL4upgyes':'PL4upgno'" @click="shsl(6)">金币效果除以1.5<br />(征标值×16)</button></td>
        </tr>
      </table>
      <table align="center">
        <tr>
          <td><button :class="player.shdwsl[6]?'PL4upgyes':'PL4upgno'" @click="shsl(7)">所有能量效果指数乘以{{notation(v.shdb01)}}<br />等级{{notatint(player.shdwlv01)}}/5<br />(征标值×4^等级)</button></td>
          <td><button :class="player.shdwsl[7]?'PL4upgyes':'PL4upgno'" @click="shsl(8)">每次作成乘数指数乘以{{notation(v.shdb02)}}<br />等级{{notatint(player.shdwlv02)}}/5<br />(征标值×4^等级)</button></td>
          <td><button :class="player.shdwsl[8]?'PL4upgyes':'PL4upgno'" @click="shsl(9)">一阶游戏速度乘以{{notation(v.shdb03)}}<br />等级{{notatint(player.shdwlv03)}}/5<br />(征标值×4^等级)</button></td>
          <td><button :class="player.shdwsl[9]?'PL4upgyes':'PL4upgno'" @click="shsl(10)">所有风灵指数乘以{{notation(v.shdb04)}}<br />等级{{notatint(player.shdwlv04)}}/5<br />(征标值×4^等级)</button></td>
        </tr>
      </table>
      <table align="center">
        <tr>
          <td><button class="batu" @click="shad(1)">-1</button></td>
          <td><button class="batu" @click="shad(2)">+1</button></td>
          <td><button class="batu" @click="shad(3)">-1</button></td>
          <td><button class="batu" @click="shad(4)">+1</button></td>
          <td><button class="batu" @click="shad(5)">-1</button></td>
          <td><button class="batu" @click="shad(6)">+1</button></td>
          <td><button class="batu" @click="shad(7)">-1</button></td>
          <td><button class="batu" @click="shad(8)">+1</button></td>
        </tr>
      </table>
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block; color: #0080ff">你有{{notation(player.anm4)}}风之徱粕(+{{notation(v.anm4ps)}}/s)，它以log2(log2(x+1)+1)^{{notation(player.anm4u03.div(64).add(0.0625).min(player.anm4u03.div(64).add(0.0625).root(4)))}}的效果使风之徰粔获取^{{notation(player.anm4.add(1).log(2).add(1).log(2).max(1).pow(player.anm4u03.div(64).add(0.0625).min(player.anm4u03.div(64).add(0.0625).root(4))))}}</div><br />
      </div>
      <table align="center">
        <tr>
          <td><button class="PL4bab" id="anm4u1" @click="buyanm4u(1)">双倍风之徱粕产量<br />{{ascale(player.anm4u01,1)}}等级{{notatint(player.anm4u01)}}<br />当前：×{{notation(player.anm4u01.pwb(2))}}<br />花费：{{notation(v.anm4c01)}}风之徱粕</button></td>
          <td><button class="PL4bab" id="anm4u2" @click="buyanm4u(2)">风之徱粕提升33~40式风灵乘数<br />{{ascale(player.anm4u02,2)}}等级{{notatint(player.anm4u02)}}<br />当前：×{{notation(player.anm4.pow(player.anm4u02.mul(1048576)).max(1))}}<br />花费：{{notation(v.anm4c02)}}风之徱粕</button></td>
          <td><button class="PL4bab" id="anm4u3" @click="buyanm4u(3)">增加风之徱粕效果指数<br />{{ascale(player.anm4u03,3)}}等级{{notatint(player.anm4u03)}}<br />当前：+{{notation(player.anm4u03.div(64).min(player.anm3u03.div(64).add(0.0625).root(4).sub(0.0625)))}}{{player.anm4u03.gte(60)?"(受软上限限制)":""}}<br />花费：{{notation(v.anm4c03)}}风之徱粕</button></td>
          <td><button class="PL4bab" id="anm4u4" @click="buyanm4u(4)">增加1~40式风灵的超指数<br />{{ascale(player.anm4u04,4)}}等级{{notatint(player.anm4u04)}}<br />当前：+{{notation(player.anm4u04.pow(0.5).div(2500))}}<br />花费：{{notation(v.anm4c04)}}风之徱粕</button></td>
        </tr>
      </table>
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block; color: #0080ff">到达1024征标值后解锁营养餐</div><br />
      </div>
    </div>
    <div v-else>
      <div class="btnrow">
        <button align="center" class="xxButton" @click="ulAnm4" style="background-color:#0080ff">解锁刺影征标<br />花费：6e666666扬敦点</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, ascale, reshsl, encyzb, shsl, shad, buyanm4u, ulAnm4 } = useGameState()
</script>