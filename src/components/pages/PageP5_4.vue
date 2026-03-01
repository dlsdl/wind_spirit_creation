<template>
  <div id="p5_4">
    <div id="batow" v-if="player.zzltu[4]">
      <div align="center" class="ftsz2" style="color:#00ffff">
        在试炼场中需要进行战斗，获得金币进行升级。试炼场有11个难度，每提升一个难度，怪物生命增长速率翻倍。<br />
        前10个难度有1000个阶段，通过当前难度的全部阶段解锁下一难度，最后一个难度有无限个阶段。<br />
      </div>
      <div align="center" class="ftsz2">难度：{{dfstr()}}，阶段：{{notatint(player.stage.sub(player.stage.sub(1).div(1000).min(10).floor().mul(1000)))}}，通过阶段：{{notatint(player.stgcl)}}，金币：{{notation(player.coin)}}(+{{notation(v.cps)}}/s)</div>
      <div align="center" class="ftsz2">你的金币使每一个层级能量效果的{{notation(v.bpmpb)}}次方增幅前一层级8个风灵的每次作成乘数</div>
      <table align="center">
        <tbody>
          <tr>
            <td class="batowc">
              <div align="center" class="ftsz2">
                玩家<br />
                攻击:{{notatint(player.atk)}}，造成{{notation(v.atke)}}伤害每秒<br />
                攼凼:{{notatint(player.btk)}}，使攻击效果×{{notation(v.btke)}}<br />
                攽函:{{notatint(player.ctk)}}，使攼凼效果^{{notation(v.ctke)}}<br />
                放凾:{{notatint(player.dtk)}}，使攽函效果¶{{notation(v.dtke)}}
              </div>
            </td>
            <td class="batowc">
              <div align="center" class="ftsz2">
                怪物<br />
                生命:{{notation(player.rhp)}}/{{notation(v.mhp)}}<br />
                金币/秒:{{notation(v.pcps)}}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table align="center">
        <tr>
          <td><button class="batu" @click="chgstg(1)">难度-1</button></td>
          <td><button class="batu" @click="chgstg(2)">阶段-100</button></td>
          <td><button class="batu" @click="chgstg(3)">阶段-10</button></td>
          <td><button class="batu" @click="chgstg(4)">阶段-1</button></td>
          <td><button class="batu" @click="chgstg(5)">阶段+1</button></td>
          <td><button class="batu" @click="chgstg(6)">阶段+10</button></td>
          <td><button class="batu" @click="chgstg(7)">阶段+100</button></td>
          <td><button class="batu" @click="chgstg(8)">难度+1</button></td>
        </tr>
      </table>
      <table align="center">
        <tr>
          <td><button class="batu2" @click="buybatu(1)">攻击等级+1<br />花费：{{notation(v.atkc)}}金币</button></td>
          <td><button class="batu2" @click="buybatu(2)">攼凼等级+1<br />花费：{{notation(v.btkc)}}金币</button></td>
          <td><button class="batu2" @click="buybatu(3)">攽函等级+1<br />花费：{{notation(v.ctkc)}}金币</button></td>
          <td><button class="batu2" @click="buybatu(4)">放凾等级+1<br />花费：{{notation(v.dtkc)}}金币</button></td>
        </tr>
      </table>
      <div v-if="player.stgmx.gte(1000)">
        <div align="center" class="ftsz2">进行转生（需要通过阶段1000）以获得技能点，你拥有{{notation(player.skpthv)}}/{{notation(player.skptcp)}}技能点</div>
        <table align="center">
          <tr>
            <td><button class="batu3" @click="batpre">转生使技能点上限变为{{notation(v.skptpd)}}(下一个在阶段{{notation(v.skptst)}})</button></td>
            <td><button class="batu3" @click="reskl">返还技能点</button></td>
          </tr>
        </table>
        <table align="center">
          <tr>
            <td><button class="batu" @click="sklv(1)">-1</button></td>
            <td><button class="batu" @click="sklv(2)">+1</button></td>
            <td><button class="batu" @click="sklv(3)">-1</button></td>
            <td><button class="batu" @click="sklv(4)">+1</button></td>
            <td><button class="batu" @click="sklv(5)">-1</button></td>
            <td><button class="batu" @click="sklv(6)">+1</button></td>
            <td><button class="batu" @click="sklv(7)">-1</button></td>
            <td><button class="batu" @click="sklv(8)">+1</button></td>
          </tr>
        </table>
        <table align="center">
          <tr>
            <td><button class="batu2">技能1·等级{{notation(player.sklv01)}}<br />基于扬敦能量乘以atk:×{{notation(v.skef01)}}</button></td>
            <td><button class="batu2">技能2·等级{{notation(player.sklv02)}}<br />基于扬敦能量乘以cps:×{{notation(v.skef02)}}</button></td>
            <td><button class="batu2">技能3·等级{{notation(player.sklv03)}}<br />基于多面体波乘以atk:×{{notation(v.skef03)}}</button></td>
            <td><button class="batu2">技能4·等级{{notation(player.sklv04)}}<br />基于多面体波乘以cps:×{{notation(v.skef04)}}</button></td>
          </tr>
        </table>
      </div>
      <div align="center" class="ftsz2">通过一定阶段数后解锁更多内容</div>
      <div :class="player.stgmx.gte(500)?'PL4goalyes':'PL4goalno'">通过阶段500<br />解锁进阶挑战13~16</div>
      <div :class="player.stgmx.gte(1000)?'PL4goalyes':'PL4goalno'">通过阶段1000<br />解锁转生和自动升级</div>
      <div :class="player.stgmx.gte(1500)?'PL4goalyes':'PL4goalno'">通过阶段1500<br />解锁扬敦碎片升级9~10</div>
      <div :class="player.stgmx.gte(2000)?'PL4goalyes':'PL4goalno'">通过阶段2000<br />解锁"协同"选项卡</div>
    </div>
    <div v-else align="center" class="ftsz2">需要获得最终立体波升级5</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, dfstr, chgstg, buybatu, batpre, reskl, sklv } = useGameState()
</script>