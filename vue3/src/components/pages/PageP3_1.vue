<template>
  <div id="p3_1">
    <div class="ftsz2" style="color: #ffffff; text-align: center">总计扪敤次数：{{ notatint(player.PL2tms) }}次</div>
    <div :class="player.PL2tms.gte(1) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤1次</span><br /><span>扪敤重置时保留第一行扩散升级，在元素生命选项卡中解锁"风系统"</span>
    </div>
    <div :class="player.PL2tms.gte(2) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤2次</span><br /><span>扪敤重置时保留第二行扩散升级，并完成全部普通挑战</span>
    </div>
    <div :class="player.PL2tms.gte(3) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤3次</span><br /><span>扪敤重置时保留第三行扩散升级，保留全部购买项</span>
    </div>
    <div :class="player.PL2tms.gte(4) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤4次</span><br /><span>扪敤重置时保留第四行扩散升级，解锁自动单次购买9~16次风灵</span>
    </div>
    <div :class="player.PL2tms.gte(5) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤5次</span><br /><span>扪敤重置后直接解锁风之晶球</span>
    </div>
    <div :class="player.PL2tms.gte(6) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤6次</span><br /><span>扪敤重置时保留风之晶球升级</span>
    </div>
    <div :class="player.PL2tms.gte(7) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤7次</span><br /><span>解锁自动购买风灵升级3</span>
    </div>
    <div :class="player.PL2tms.gte(8) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤8次</span><br /><span>解锁自动购买风灵升级4</span>
    </div>
    <div :class="player.PL2tms.gte(9) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤9次</span><br /><span>扪敤重置时保留进阶挑战1~4</span>
    </div>
    <div :class="player.PL2tms.gte(10) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤10次</span><br /><span>解锁自动获得风系统</span>
    </div>
    <div :class="player.PL2tms.gte(11) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤11次</span><br /><span>风系统不再重置任何东西</span>
    </div>
    <div :class="player.PL2tms.gte(12) ? 'PL2mlstyes' : 'PL2mlstno'">
      <span>扪敤12次</span><br /><span>解锁扪敤次数商店</span>
    </div>
    <div id="PL2tmshop" v-if="player.PL2tms.gte(12)">
      <div class="ftsz2" style="color: #ffffff; text-align: center" id="PL2tms2">
        你有{{ notatint(player.PL2tmsc) }}可用扪敤次数（通过扪敤获取），升级1到达8级后作成9~16式风灵不再消耗扩散点。
      </div>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.PL2upg01.gte(8) ? 'PL2upgyes' : 'PL2upgno'" @click="buyPL2upg(1)">
                解锁自动最大化作成9~16风灵({{ notation(player.PL2upg01) }}/8)<br />需要：{{ notatint(v.PL2upgc01) }}可用扪敤次数
              </button>
            </td>
            <td>
              <button :class="player.PL2upg02.gte(8) ? 'PL2upgyes' : 'PL2upgno'" @click="buyPL2upg(2)">
                双倍扪敤次数获取({{ notation(player.PL2upg02) }}/8)<br />需要：{{ notatint(v.PL2upgc02) }}可用扪敤次数
              </button>
            </td>
            <td>
              <button :class="player.PL2upg03.gte(4) ? 'PL2upgyes' : 'PL2upgno'" @click="buyPL2upg(3)">
                解锁风之微粒升级的自动购买({{ notation(player.PL2upg03) }}/4)<br />需要：{{ notatint(v.PL2upgc03) }}可用扪敤次数
              </button>
            </td>
            <td>
              <button :class="player.PL2upg04.gte(4) ? 'PL2upgyes' : 'PL2upgno'" @click="buyPL2upg(4)">
                扪敤次数^4n乘以17~24式风灵({{ notation(player.PL2upg04) }}/4)<br />需要：{{ notatint(v.PL2upgc04) }}可用扪敤次数
              </button>
            </td>
          </tr>
        </tbody> 
      </table>
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

const { notation, notatint, buyPL2upg } = useGameState()
</script>