<template>
  <div id="p4_5">
    <div v-if="player.hasunlockedanm3">
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block; color: #00ff80">
          你有{{notation(player.reacm1)}}反应物，{{notation(player.reacm2)}}生成物，{{notation(player.cata)}}催化剂，反应进行了{{getprow3()}}
        </div>
      </div>
      <div class="probarcon">
        <div class="probar" :style="{width:getprow3()}"></div>
      </div>
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block; color: #00ff80">
          你的平衡值为{{notation(v.blcnt)}}，它除以反应速率，并提供{{notation(v.blcnt.sub(0.5).max(0).mul(0.001))}}基础风之徰粔产量
        </div><br />
      </div>
      <table align="center">
        <tbody>
          <tr>
            <td><button class="tthupg2" @click="reastart()">开始/停止反应</button></td>
            <td><button class="tthupg2" @click="reareset()">重置生成物，增加反应物和催化剂（需要反应完成）</button></td>
          </tr>
        </tbody>
      </table>
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block; color: #00ff80">你有{{notation(player.anm3)}}风之徰粔(+{{notation(v.anm3ps)}}/s)，它以log2(log2(x+1)+1)^{{notation(player.anm3u03.div(64).add(0.0625).min(player.anm3u03.div(64).add(0.0625).root(4)))}}的效果使风之徯粓获取^{{notation(player.anm3.add(1).log(2).add(1).log(2).max(1).pow(player.anm3u03.div(64).add(0.0625).min(player.anm3u03.div(64).add(0.0625).root(4))))}}</div><br />
      </div>
      <table align="center">
        <tbody>
          <tr>
            <td><button class="PL3bab" @click="buyanm3u(1)">双倍风之徰粔产量<br />{{ascale(player.anm3u01,1)}}等级{{notatint(player.anm3u01)}}<br />当前：×{{notation(player.anm3u01.pwb(2))}}<br />花费：{{notation(v.anm3c01)}}风之徰粔</button></td>
            <td><button class="PL3bab" @click="buyanm3u(2)">风之徰粔提升25~32式风灵乘数<br />{{ascale(player.anm3u02,2)}}等级{{notatint(player.anm3u02)}}<br />当前：×{{notation(player.anm3.pow(player.anm3u02.mul(1024)).max(1))}}<br />花费：{{notation(v.anm3c02)}}风之徰粔</button></td>
            <td><button class="PL3bab" @click="buyanm3u(3)">增加风之徰粔效果指数<br />{{ascale(player.anm3u03,3)}}等级{{notatint(player.anm3u03)}}<br />当前：+{{notation(player.anm3u03.div(64).min(player.anm3u03.div(64).add(0.0625).root(4).sub(0.0625)))}}{{player.anm3u03.gte(60)?"(受软上限限制)":""}}<br />花费：{{notation(v.anm3c03)}}风之徰粔</button></td>
            <td><button class="PL3bab" @click="buyanm3u(4)">增加一阶游戏速度<br />{{ascale(player.anm3u04,4)}}等级{{notatint(player.anm3u04)}}<br />当前：×{{notation(player.anm3u04.pwb(1.189207115002721))}}<br />花费：{{notation(v.anm3c04)}}风之徰粔</button></td>
          </tr>
          <tr>
            <td><button :class="player.anm3u[0]?'PL3upgyes':'PL3upgno'" @click="buyanm3u2(0)">解锁药剂第二行第四个效果<br />花费：1e8风之徰粔</button></td>
            <td><button :class="player.anm3u[1]?'PL3upgyes':'PL3upgno'" @click="buyanm3u2(1)">扫敥次数提升反应速度(×{{notation(player.PL3tms.max(1))}})<br />花费：1e16风之徰粔</button></td>
            <td><button :class="player.anm3u[2]?'PL3upgyes':'PL3upgno'" @click="buyanm3u2(2)">风之徰粔提升扫敥次数(×{{notation(player.anm3.log(16).max(1))}})<br />花费：1e24风之徰粔</button></td>
            <td><button :class="player.anm3u[3]?'PL3upgyes':'PL3upgno'" @click="buyanm3u2(3)">解锁转化升级<br />花费：1e32风之徰粔</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <div class="btnrow">
        <button align="center" class="xxButton" @click="ulAnm3()" style="background-color:#00ff80">解锁催化剂<br />花费：1e5000扫敥点</button>
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

const { notation, notatint, getprow3, ascale, reastart, reareset, buyanm3u, buyanm3u2, ulAnm3 } = useGameState()
</script>