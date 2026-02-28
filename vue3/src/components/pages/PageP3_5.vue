<template>
  <div id="p3_5">
    <div v-if="player.hasunlockedanm2">
      <div class="btnrow">
        <button class="fytx" id="jrfytx" align="center" @click="entfytx()">
          <div align="center" class="ftsz4">点击进入/退出风压坍陷<br /><br /></div>
          <div align="center" class="ftsz2" style="color: #80ff00">
            进行扪敤重置，并重置17~24式风灵加数。在风压坍陷中，无法进行扩散，只能被动获得扩散点，并使风灵乘数变为log2(乘数)。<br />
            <span v-if="player.infytx">（当前你在风压坍陷中）</span>
          </div>
        </button>
      </div>
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block; color: #80ff00">
          你有{{ notation(player.anm2) }}风之徯粓(+{{ notation(v.anm2ps) }}/s)，它以log2(log2(x+1)+1)^{{ notation(player.anm2u03.div(64).add(0.0625).min(player.anm2u03.div(64).add(0.0625).root(4))) }}的效果使风之微粒获取^{{ notation(player.anm2.add(1).log(2).add(1).log(2).max(1).pow(player.anm2u03.div(64).add(0.0625).min(player.anm2u03.div(64).add(0.0625).root(4)))) }}
        </div><br />
        <div align="center" class="ftsz2" style="display: inline-block; color: #80ff00">
          你在风压坍陷中获取的最大能量：{{ notation(player.anm2sc) }}，转换为{{notation(player.anm2sc.lte("1e3082")?player.anm2sc.max(2).log(2).div(1024).sub(2).pwb(100):player.anm2sc.max(2).log(2).div(1024).pow(16))}}{{player.anm2sc.gte("1e3082")?"(受软上限限制)":""}}基础风之徯粓每秒
        </div>
      </div>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button class="PL2bab" @click="buyanm2u(1)">
                双倍风之徯粓产量<br />{{ ascale(player.anm2u01, 1) }}等级{{ notatint(player.anm2u01) }}<br />当前：x{{ notation(player.anm2u01.pwb(2)) }}<br />花费：{{ notation(v.anm2c01) }}风之徯粓
              </button>
            </td>
            <td>
              <button class="PL2bab" @click="buyanm2u(2)">
                风之徯粓提升17~24式风灵乘数<br />{{ ascale(player.anm2u02, 2) }}等级{{ notatint(player.anm2u02) }}<br />当前：x{{ notation(player.anm2.pow(player.anm2u02.mul(4)).max(1)) }}<br />花费：{{ notation(v.anm2c02) }}风之徯粓
              </button>
            </td>
            <td>
              <button class="PL2bab" @click="buyanm2u(3)">
                风之徯粓效果指数增加0.015625<br />{{ ascale(player.anm2u03, 3) }}等级{{ notatint(player.anm2u03) }}<br />当前：+{{ notation(player.anm2u03.div(64).min(player.anm2u03.div(64).add(0.0625).root(4).sub(0.0625))) }}{{ player.anm2u03.gte(60) ? "(受软上限限制)" : "" }}<br />花费：{{ notation(v.anm2c03) }}风之徯粓
              </button>
            </td>
            <td>
              <button class="PL2bab" @click="buyanm2u(4)">
                增加1~24式风灵指数<br />{{ ascale(player.anm2u04, 4) }}等级{{ notatint(player.anm2u04) }}<br />当前：+{{ notation(player.anm2u04.min(player.anm2u04.pow(0.5).mul(1.414)).min(player.anm2u04.pow(0.25).mul(2.828)).mul(0.01)) }}<br />花费：{{ notation(v.anm2c04) }}风之徯粓
              </button>
            </td>
          </tr>
        </tbody>
      </table><br />
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block; color: #80ff00">
          在风压坍陷中获得的能量达成下列目标以获得奖励
        </div>
      </div><br />
      <div :class="player.anm2sc.gte('1e616') ? 'PL2mlstyes' : 'PL2mlstno'">
        <span>1e616能量</span><br /><span>风灵升级1的效果指数增加0.25</span>
      </div>
      <div :class="player.anm2sc.gte('1e1233') ? 'PL2mlstyes' : 'PL2mlstno'">
        <span>1e1233能量</span><br /><span>再次使扩散能量的效果指数增加1</span>
      </div>
      <div :class="player.anm2sc.gte('1e1850') ? 'PL2mlstyes' : 'PL2mlstno'">
        <span>1e1850能量</span><br /><span>解锁一行新的风之晶球升级</span>
      </div>
      <div :class="player.anm2sc.gte('1e2466') ? 'PL2mlstyes' : 'PL2mlstno'">
        <span>1e2466能量</span><br /><span>风之微粒的软上限再次弱化25%</span>
      </div><br />
      <div class="btnrow">
        <div align="center" class="ftsz2" style="display: inline-block; color: #80ff00">
          壹式风压坍陷：使风灵乘数变为log2乘数；贰式风压坍陷：使风灵指数变为log2指数(未解锁)；叁式风压坍陷：使风灵超指数变为log2超指数(未解锁)
        </div>
      </div>
    </div>
    <div v-else>
      <div class="btnrow">
        <button align="center" class="xxButton" @click="ulAnm2()" style="background-color:#80ff00">
          解锁风压坍陷<br />花费：1e10000扪敤点
        </button>
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

const { notation, notatint, ascale, buyanm2u, entfytx, ulAnm2 } = useGameState()
</script>