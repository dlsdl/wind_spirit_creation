<template>
  <div id="p4_1">
    <div align="center" class="ftsz2">进度研究需要时间进行研究，当前每秒研究速度为{{notation(v.resped)}}，<br />你扫敥了{{notatint(player.PL3tms)}}次，保留扪敤次数并将它乘以{{notatint(v.PL3tef1)}}，研究速度乘以{{notatint(v.PL3tef2)}}</div>
    <div class="probarcon">
      <div class="probar" :style="{width:getprow1()}"></div>
    </div>
    <div align="center" class="ftsz2">研究进度：{{getprow1()}}</div>
    <table align="center">
      <tbody>
        <tr>
          <td><button :class="player.inres==1?'resin':'resno'" @click="research(1)">使25~32式风灵乘数乘以能量¶0.25^等级^0.25<br />进度：{{notation(player.resp01)}}/{{notation(v.resr01)}}<br />次数：{{notatint(player.resa01)}}<br />当前：×{{notation(v.rese01)}}</button></td>
          <td><button :class="player.inres==2?'resin':'resno'" @click="research(2)">使元素的每次分配乘数乘以1.044^等级^0.5<br />进度：{{notation(player.resp02)}}/{{notation(v.resr02)}}<br />次数：{{notatint(player.resa02)}}<br />当前：×{{notation(v.rese02)}}</button></td>
          <td><button :class="player.inres==3?'resin':'resno'" @click="research(3)">使1~32式风灵的指数乘以1.011^等级^0.25<br />进度：{{notation(player.resp03)}}/{{notation(v.resr03)}}<br />次数：{{notatint(player.resa03)}}<br />当前：×{{notation(v.rese03)}}</button></td>
          <td><button :class="player.inres==4?'resin':'resno'" @click="research(4)">使额外的风灵升级数量增加(10×等级^0.5)%<br />进度：{{notation(player.resp04)}}/{{notation(v.resr04)}}<br />次数：{{notatint(player.resa04)}}<br />当前：+{{notation(v.rese04)}}%</button></td>
        </tr>
        <tr>
          <td><button :class="player.inres==5?'resin':player.resa05.gte(1)?'resyes':'resno'" @click="research(5)">解锁自动作成17~24式风灵，风灵基础值指数+0.1<br />进度：{{notation(player.resp05)}}/{{notation(v.resr05)}}<br />次数：{{notatint(player.resa05)}}/1</button></td>
          <td><button :class="player.inres==6?'resin':player.resa06.gte(1)?'resyes':'resno'" @click="research(6)">扫敥重置后保留扪敤次数及其升级和进阶挑战5~8<br />进度：{{notation(player.resp06)}}/{{notation(v.resr06)}}<br />次数：{{notatint(player.resa06)}}/1</button></td>
          <td><button :class="player.inres==7?'resin':player.resa07.gte(1)?'resyes':'resno'" @click="research(7)">扫敥重置后保留烧瓶和研究<br />进度：{{notation(player.resp07)}}/{{notation(v.resr07)}}<br />次数：{{notatint(player.resa07)}}/1</button></td>
          <td><button :class="player.inres==8?'resin':player.resa08.gte(1)?'resyes':'resno'" @click="research(8)">扫敥重置后保留炼金生命<br />进度：{{notation(player.resp08)}}/{{notation(v.resr08)}}<br />次数：{{notatint(player.resa08)}}/1</button></td>
        </tr>
        <tr>
          <td><button :class="player.inres==9?'resin':player.resa09.gte(1)?'resyes':'resno'" @click="research(9)">扫敥后直接解锁风压坍陷，并基于能量提升研究速度（×{{notation(player.energy.max(1).log(2).div(1099511627776).pow(8).max(1).min(1e8))}}）<br />{{notation(player.resp09)}}/{{notation(v.resr09)}}<br />次数：{{notatint(player.resa09)}}/1</button></td>
          <td><button :class="player.inres==10?'resin':player.resa10.gte(1)?'resyes':'resno'" @click="research(10)">扫敥后保留已分配元素，并且扫敥能量的效果指数增加1<br />{{notation(player.resp10)}}/{{notation(v.resr10)}}<br />次数：{{notatint(player.resa10)}}/1</button></td>
          <td><button :class="player.inres==11?'resin':player.resa11.gte(1)?'resyes':'resno'" @click="research(11)">解锁自动风之徯粓升级，并保留风压坍陷中获取的最高能量<br />{{notation(player.resp11)}}/{{notation(v.resr11)}}<br />次数：{{notatint(player.resa11)}}/1</button></td>
          <td><button :class="player.inres==12?'resin':player.resa12.gte(1)?'resyes':'resno'" @click="research(12)">解锁"种甜甜花"选项卡<br />{{notation(player.resp12)}}/{{notation(v.resr12)}}<br />次数：{{notatint(player.resa12)}}/1</button></td>
        </tr>
        <tr>
          <td><button :class="player.inres==13?'resin':player.resa13.gte(1)?'resyes':'resno'" @click="research(13)">解锁进阶挑战9~12<br />{{notation(player.resp13)}}/{{notation(v.resr13)}}<br />次数：{{notatint(player.resa13)}}/1</button></td>
          <td><button :class="player.inres==14?'resin':player.resa14.gte(1)?'resyes':'resno'" @click="research(14)">解锁2个新的药剂升级<br />{{notation(player.resp14)}}/{{notation(v.resr14)}}<br />次数：{{notatint(player.resa14)}}/1</button></td>
          <td><button :class="player.inres==15?'resin':player.resa15.gte(1)?'resyes':'resno'" @click="research(15)">超过5e315652的扫敥能量增加甜甜花生长速度<br />{{notation(player.resp15)}}/{{notation(v.resr15)}}<br />次数：{{notatint(player.resa15)}}/1</button></td>
          <td><button :class="player.inres==16?'resin':player.resa16.gte(1)?'resyes':'resno'" @click="research(16)">风压坍陷获取的最高能量基于当前能量自动更新<br />{{notation(player.resp16)}}/{{notation(v.resr16)}}<br />次数：{{notatint(player.resa16)}}/1</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, getprow1, research } = useGameState()
</script>