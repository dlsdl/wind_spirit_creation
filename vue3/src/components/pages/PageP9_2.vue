<template>
  <div class="page-p9-2">
    <div class="ftsz3" style="text-align: center">风单元</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier01.gte(1)">1式风单元：基于风单元式数提升1~8式风灵乘数(1+n)²。当前：×{{notation(player.tier01.add(1).pow(2))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier01.gte(2)">2式风单元：基于风灵基础值提升1~8式风灵乘数max(1,n/4)。当前：×{{notation(v.wscbaseValue.div(4).max(1))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier01.gte(5)">5式风单元：基于风模块式数提升1~8式风灵乘数(1+n)³。当前：×{{notation(player.tier02.add(1).pow(3))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier01.gte(10)">10式风单元：基于能量提升1~8式风灵乘数max(1,log2(n+1)^0.2)。当前：×{{notation(player.energy.add(1).log(2).pow(0.2).max(1))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier01.gte(25)">25式风单元：每个风单元使1~8式风灵乘数×2。当前：×{{notation(player.tier01.mul(v.DBpower).pwb(2).max(1))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier01.gte(63)">63式风单元：使1/2/5/10式风单元奖励也对9~16式风灵生效，但效果倍率降低。当前：×{{notation(player.tier01.add(1).pow(2).mul(v.wscbaseValue.div(64).max(1)).mul(player.tier02.add(1).pow(3)).mul(player.energy.add(1).log(2).pow(0.2).max(1)).pow(0.5))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier01.gte(200)">200式风单元：使扩散升级5~8的效果对1~8式风灵生效。<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier01.gte(630)">630式风单元：使捌式风灵增加风之微粒的效果适用于拾陆式风灵。当前：×{{notation(player.wscb16.pwb(1.258925412).max(1))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier01.gte(1995)">1995式风单元：使捌式风灵增加风之微粒的效果适用于贰肆式风灵。当前：×{{notation(player.wscb24.pwb(1.258925412).max(1))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier01.gte(6308)">6308式风单元：使贝特获取数量增加阿列夫和基未尔获取数量。<br /></div>
    <br />
    <div class="ftsz3" style="text-align: center">风模块</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier02.gte(1)">1式风模块：风灵每次作成乘数增加0.05，并解锁第一个升级。当前：+{{notation(player.tier02.max(1).pow(0.25).mul(player.tier01.max(1).pow(0.25)).mul(0.05))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier02.gte(2)">2式风模块：基于风模块式数^0.25乘以1式风模块的第一个效果，并解锁第二个升级。当前：×{{notation(player.tier02.pow(0.25))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier02.gte(5)">5式风模块：1式风模块的第一个效果×5，并将它乘以风单元式数^0.25。当前：×{{notation(player.tier01.pow(0.25))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier02.gte(12)">12式风模块：每个风模块将风灵每次作成乘数×1.011，并解锁第三个升级。当前：×{{notation(v.AGpower.pwb(1.010889286051700).pow(player.tier02))}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier02.gte(30)">30式风模块：使超过1e8的扩散次数增加风之微粒获取，并解锁第四个升级。当前：×{{notation(player.PL1tms.div(1e8).max(1).min(1e8))}}{{player.PL1tms.gte(1e16)?"(已达上限)":""}}<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier02.gte(75)">75式风模块：使1式风模块的第一个效果×4，1~8、9~16式风灵每次作成乘数分别^1.1和^1.05。<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier02.gte(237)">237式风模块：使风灵升级2的效果指数增加0.25<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier02.gte(750)">750式风模块：分别使1~8、9~16、17~24、25~32式风灵每次作成乘数的指数变为16、8、4、2<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier02.gte(2372)">2372式风模块：改变额外升级对风灵升级的效果：a+b→max(a+b,a*b^0.35)<br /></div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier02.gte(7500)">7500式风模块：使2372式风模块的效果指数增加到0.5<br /></div>
    <br />
    <div class="ftsz3" style="text-align: center" v-if="player.tier03.gte(1)">风系统</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier03.gte(1)">1式风系统：基于额外风灵升级数量提升17~24式风灵乘数。当前：×{{notation(v.upgf01.add(v.upgf02.mul(2)).add(v.upgf03.mul(4)).add(v.upgf04.mul(8)).pwb(2))}}</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier03.gte(3)">3式风系统：基于风系统提升1~16式风灵的指数。当前：+{{notation(player.tier03.min(player.tier03.pow(0.5).mul(4)).div(400))}}</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier03.gte(7)">7式风系统：使风之微粒的软上限弱化25%，元素能量获取×累计风元素^3。</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier03.gte(16)">16式风系统：使元素能量的获取数量乘以log2(能量)。当前：×{{notation(player.energy.max(2).log(2))}}</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier03.gte(41)">41式风系统：25式风单元效果×4，12式风模块效果×2。</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier03.gte(106)">106式风系统：使3式风系统也对25~32式风灵生效，但效果倍率降低。</div>
    <br />
    <div class="ftsz3" style="text-align: center" v-if="player.tier04.gte(1)">风四倍系统</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier04.gte(1)">1式风四倍系统：基于风四倍系统提升进阶挑战1~4上限（最多提升12）。当前：+{{notation(player.tier04.mul(2).min(12))}}</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier04.gte(3)">3式风四倍系统：使3式风系统也对17~24式风灵生效。</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier04.gte(10)">10式风四倍系统：基于风四倍系统提升一阶游戏速度。当前：×{{notation(player.tier04.mul(0.25).max(1))}}</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier04.gte(28)">28式风四倍系统：基于风四倍系统提升1~32式风灵指数乘数。当前：×{{notation(player.tier04.add(1).mul(0.001))}}</div>
    <br />
    <div class="ftsz3" style="text-align: center" v-if="player.tier05.gte(1)">风五倍系统</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier05.gte(1)">1式风五倍系统：基于风五倍系统提升扬敦碎片获取。当前：×{{notation(player.tier05.add(1).pow(2))}}</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier05.gte(5)">5式风五倍系统：基于风五倍系统增加所有风灵的超指数。当前：×{{notation(player.tier05.div(10000))}}</div>
    <br />
    <div class="ftsz3" style="text-align: center" v-if="player.tier06.gte(1)">风六倍系统</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier06.gte(1)">1式风六倍系统：基于风六倍系统提升立体波获取。当前：×{{notation(player.tier06.pwb(10))}}</div>
    <div class="ftsz1" style="text-align: center" v-if="player.tier06.gte(5)"></div>
    <br />
    <div class="ftsz3" style="text-align: center; display: none">风七倍系统</div>
    <br />
    <div class="ftsz3" style="text-align: center; display: none">风八倍系统</div>
    <br />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint } = useGameState()
</script>

<style scoped>
.page-p9-2 {
  padding: 20px;
}
</style>
