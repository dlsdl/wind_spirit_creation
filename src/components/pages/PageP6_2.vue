<template>
  <div id="p6_2">
    <div class="btnrow">
      <div align="center" class="ftsz2">扭敧机器可以进行时空扭敧，用来加快不同的速度，每个扭敧机器都有一个速度函数，可以对它们进行升级</div>
      <div align="center" class="ftsz2">你有<span class="ftsz3" style="color:#ff0000">{{notation(player.PL1sec)}}</span>扩散时间，<span class="ftsz3" style="color:#0000ff">{{notation(player.PL5sec)}}</span>扭敧时间</div>
    </div>
    <table align="center">
      <tr>
        <td>
          <div align="center" class="xbmch">
            <br />
            壹式时空扭敧机器<br />
            将一阶游戏速度乘以现实扩散时间^{{notation(player.xbmu01.add(1))}}<br />
            一阶游戏速度×{{notation(player.PL5secrl.pow(player.xbmu01.add(1)))}}<br />
          </div>
        </td>
        <td>
          <div align="center" class="xbmch">
            <br />
            贰式时空扭敧机器<br />
            将一阶游戏速度乘以现实扭敧时间^{{notation(player.xbmu03.add(1).div(4))}}<br />
            二阶游戏速度×{{notation(player.PL5secrl.pow(player.xbmu03.add(1).mul(0.25)))}}<br />
          </div>
        </td>
      </tr>
    </table>
    <table align="center">
      <tr>
        <td><button class="xbupg" @click="buyxbmu(1)">壹式时空扭敧机器的指数增加1<br />当前：+{{notation(player.xbmu01)}}{{player.xbmu01.gte(10)?"(已满级)":""}}<br />花费：{{notation(v.xbmc01)}}扭敧点</button></td>
        <td><button class="xbupg" @click="buyxbmu(2)">使一阶游戏速度翻倍<br />当前：×{{notation(player.xbmu02.pwb(2))}}<br />花费：{{notation(v.xbmc02)}}扩散时间</button></td>
        <td><button class="xbupg" @click="buyxbmu(3)">贰式时空扭敧机器的指数增加0.25<br />当前：+{{notation(player.xbmu03.div(4))}}{{player.xbmu03.gte(11)?"(已满级)":""}}<br />花费：{{notation(v.xbmc03)}}扭敧点</button></td>
        <td><button class="xbupg" @click="buyxbmu(4)">使二阶游戏速度翻倍<br />当前：×{{notation(player.xbmu04.pwb(2))}}<br />花费：{{notation(v.xbmc04)}}扭敧时间</button></td>
      </tr>
      <tr>
        <td><button class="xbupg" @click="buyxbmu(5)">基于扩散时间，提升风灵升级1的效果指数<br />当前：×{{notation(v.xbme05)}}<br />花费：{{notation(v.xbmc05)}}扩散时间</button></td>
        <td><button class="xbupg" @click="buyxbmu(6)">基于扩散时间，提升风灵升级2的效果指数<br />当前：×{{notation(v.xbme06)}}<br />花费：{{notation(v.xbmc06)}}扩散时间</button></td>
        <td><button class="xbupg" @click="buyxbmu(7)">基于扭敧时间，提升甜甜花种子获取数量的指数<br />当前：×{{notation(v.xbme07)}}<br />花费：{{notation(v.xbmc07)}}扭敧时间</button></td>
        <td><button class="xbupg" @click="buyxbmu(8)">基于扭敧时间，提升多面体波获取数量的指数<br />当前：×{{notation(v.xbme08)}}<br />花费：{{notation(v.xbmc08)}}扭敧时间</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, buyxbmu } = useGameState()
</script>