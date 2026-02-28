<template>
  <div id="p2_3" v-if="v.currentPage=='p2_3'">
    <div class="btnrow">
      <div align="center" class="ftsz2" style="display: inline-block">点击挑战框以进入普通挑战（将进行一次无奖励的扩散重置），完成普通挑战需要1.797e308能量。</div>
      <button class="ltbutton" @click="quitCha()">退出挑战</button>
    </div>
    <div id="normchal" v-if="player.PL1upg[3]">
      <table align="center">
        <tr>
          <td><button id="normchal01" :class="player.innormcha==1?'normchalin':player.normchacom[0]?'normchalyes':'normchalno'" @click="entNormCha(1)">普通挑战1<br />壹式风灵指数强制为2.1，但2~7式风灵指数强制为0.1<br />奖励：自动最大化作成壹式风灵</button></td>
          <td><button id="normchal02" :class="player.innormcha==2?'normchalin':player.normchacom[1]?'normchalyes':'normchalno'" @click="entNormCha(2)">普通挑战2<br />1~8式风灵的价格增长倍数变为1.25次方，且禁用全部最大<br />奖励：自动最大化作成贰式风灵</button></td>
          <td><button id="normchal03" :class="player.innormcha==3?'normchalin':player.normchacom[2]?'normchalyes':'normchalno'" @click="entNormCha(3)">普通挑战3<br />1~8式风灵的指数在1秒内从0增加到1，作成1~8式风灵后重置<br />奖励：自动最大化作成叁式风灵</button></td>
          <td><button id="normchal04" :class="player.innormcha==4?'normchalin':player.normchacom[3]?'normchalyes':'normchalno'" @click="entNormCha(4)">普通挑战4<br />你只能作成前6式风灵（无法作成7~8式风灵）<br />奖励：自动最大化作成肆式风灵</button></td>
        </tr>
        <tr>
          <td><button id="normchal05" :class="player.innormcha==5?'normchalin':player.normchacom[4]?'normchalyes':'normchalno'" @click="entNormCha(5)">普通挑战5<br />作成1~8式风灵将重置它的之前一种风灵作成，且禁用全部最大<br />奖励：自动最大化作成伍式风灵</button></td>
          <td><button id="normchal06" :class="player.innormcha==6?'normchalin':player.normchacom[5]?'normchalyes':'normchalno'" @click="entNormCha(6)">普通挑战6<br />你的1~8式风灵作成总数限制在666，超过将退出挑战<br />奖励：自动最大化作成陆式风灵</button></td>
          <td><button id="normchal07" :class="player.innormcha==7?'normchalin':player.normchacom[6]?'normchalyes':'normchalno'" @click="entNormCha(7)">普通挑战7<br />作成1~8式风灵将重置已作成1~8式风灵的加数到0.001<br />奖励：自动最大化作成柒式风灵</button></td>
          <td><button id="normchal08" :class="player.innormcha==8?'normchalin':player.normchacom[7]?'normchalyes':'normchalno'" @click="entNormCha(8)">普通挑战8<br />风灵乘数每1/8秒除以8，作成风灵时重置<br />奖励：自动最大化作成捌式风灵</button></td>
        </tr>
        <tr>
          <td><button id="normchal09" :class="player.innormcha==9?'normchalin':player.normchacom[8]?'normchalyes':'normchalno'" @click="entNormCha(9)">普通挑战9<br />你无法获得风单元，1~8式风灵作成次数降低1~8式风灵指数<br />奖励：自动最大化获得风单元</button></td>
          <td><button id="normchal10" :class="player.innormcha==10?'normchalin':player.normchacom[9]?'normchalyes':'normchalno'" @click="entNormCha(10)">普通挑战10<br />你无法获得风单元，1~8式风灵作成次数降低1~8式风灵乘数<br />奖励：自动最大化获得风模块</button></td>
          <td><button id="normchal11" :class="player.innormcha==11?'normchalin':player.normchacom[10]?'normchalyes':'normchalno'" @click="entNormCha(11)">普通挑战11<br />扩散能量指数总是为0<br />奖励：自动最大化购买风灵升级1</button></td>
          <td><button id="normchal12" :class="player.innormcha==12?'normchalin':player.normchacom[11]?'normchalyes':'normchalno'" @click="entNormCha(12)">普通挑战12<br />每次作成乘数总是为1<br />奖励：自动最大化购买风灵升级2</button></td>
        </tr>
      </table>
      <div class="ftsz2" align="center">完成所有普通挑战后，将解锁进阶挑战，进阶挑战的完成目标随完成次数增加</div>
    </div>
    <div v-else>
      <div align="center" class="ftsz2">需要购买扩散升级1</div>
    </div>
    <div id="chal" v-if="v.baseprd.gte(1)">
      <table align="center">
        <tr>
          <td>
            <button id="chal01" :class="player.incha==1?'chalin':player.chacom01.gte(v.PL1chacap)?'chalyes':'chalno'" @click="entCha(1)">
              进阶挑战1<br />扩散能量对1~8式风灵的乘数在指数之前总是1e-100<br />
              目标：{{notation(v.chagoa01)}}能量<br />完成次数：{{notatint(player.chacom01)}}/{{notatint(v.PL1chacap)}}<br />奖励：提升扩散能量效果指数（+{{notation(v.charew01)}}）
            </button>
          </td>
          <td>
            <button id="chal02" :class="player.incha==2?'chalin':player.chacom02.gte(v.PL1chacap)?'chalyes':'chalno'" @click="entCha(2)">
              进阶挑战2<br />基于能量降低所有风灵产量的指数，这个指数总是小于1<br />
              目标：{{notation(v.chagoa02)}}能量<br />完成次数：{{notatint(player.chacom02)}}/{{notatint(v.PL1chacap)}}<br />奖励：阿列夫、贝特、基末尔获取数量(×{{notation(v.charew02)}})
            </button>
          </td>
          <td>
            <button id="chal03" :class="player.incha==3?'chalin':player.chacom03.gte(v.PL1chacap)?'chalyes':'chalno'" @click="entCha(3)">
              进阶挑战3<br />你无法购买风灵升级<br />
              目标：{{notation(v.chagoa03)}}能量<br />完成次数：{{notatint(player.chacom03)}}/{{notatint(v.PL1chacap)}}<br />奖励：1~8式风灵指数增加(+{{notation(v.charew03)}})
            </button>
          </td>
          <td>
            <button id="chal04" :class="player.incha==4?'chalin':player.chacom04.gte(v.PL1chacap)?'chalyes':'chalno'" @click="entCha(4)">
              进阶挑战4<br />1~16式风灵的乘数变为0.25次方<br />
              目标：{{notation(v.chagoa04)}}能量<br />完成次数：{{notatint(player.chacom04)}}/{{notatint(v.PL1chacap)}}<br />奖励：风之微粒获取数量(×{{notation(v.charew04)}})
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div id="chal2" v-if="player.std[17]">
      <table align="center">
        <tr>
          <td>
            <button id="chal05" :class="player.incha==5?'chalin':player.chacom05.gte(v.PL2chacap)?'chalyes':'chalno'" style="border: 4px solid #ffff00" @click="entCha(5)">
              进阶挑战5<br />无法生产扩散能量和扪敤能量<br />
              目标：{{notation(v.chagoa05)}}能量<br />完成次数：{{notatint(player.chacom05)}}/{{notatint(v.PL2chacap)}}<br />奖励：提升扪敤能量效果指数(+{{notation(v.charew05)}})
            </button>
          </td>
          <td>
            <button id="chal06" :class="player.incha==6?'chalin':player.chacom06.gte(v.PL2chacap)?'chalyes':'chalno'" style="border: 4px solid #ffff00" @click="entCha(6)">
              进阶挑战6<br />风之微粒没有任何效果<br />
              目标：{{notation(v.chagoa06)}}能量<br />完成次数：{{notatint(player.chacom06)}}/{{notatint(v.PL2chacap)}}<br />奖励：9~16式风灵指数增加(+{{notation(v.charew06)}})
            </button>
          </td>
          <td>
            <button id="chal07" :class="player.incha==7?'chalin':player.chacom07.gte(v.PL2chacap)?'chalyes':'chalno'" style="border: 4px solid #ffff00" @click="entCha(7)">
              进阶挑战7<br />元素获得的额外风灵升级数量^0.25<br />
              目标：{{notation(v.chagoa07)}}能量<br />完成次数：{{notatint(player.chacom07)}}/{{notatint(v.PL2chacap)}}<br />奖励：提升元素每次分配乘数(×{{notation(v.charew07)}})
            </button>
          </td>
          <td>
            <button id="chal08" :class="player.incha==8?'chalin':player.chacom08.gte(v.PL2chacap)?'chalyes':'chalno'" style="border: 4px solid #ffff00" @click="entCha(8)">
              进阶挑战8<br />无法进行扩散，也无法获得扩散点，16式风灵加数为0<br />
              目标：{{notation(v.chagoa08)}}能量<br />完成次数：{{notatint(player.chacom08)}}/{{notatint(v.PL2chacap)}}<br />奖励：风之徯粓获取数量(×{{notation(v.charew08)}})
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div id="chal3" v-if="player.resa13.gte(1)">
      <table align="center">
        <tr>
          <td>
            <button id="chal09" :class="player.incha==9?'chalin':player.chacom09.gte(v.PL3chacap)?'chalyes':'chalno'" style="border: 4px solid #00ff00" @click="entCha(9)">
              进阶挑战9<br />同时运行进阶挑战1~8，且强制进入风压坍陷<br />
              目标：{{notation(v.chagoa09)}}能量<br />完成次数：{{notatint(player.chacom09)}}/{{notatint(v.PL3chacap)}}<br />奖励：提升扫敥能量效果指数(+{{notation(v.charew09)}})
            </button>
          </td>
          <td>
            <button id="chal10" :class="player.incha==10?'chalin':player.chacom10.gte(v.PL3chacap)?'chalyes':'chalno'" style="border: 4px solid #00ff00" @click="entCha(10)">
              进阶挑战10<br />一阶游戏速度变为1e-300<br />
              目标：{{notation(v.chagoa10)}}能量<br />完成次数：{{notatint(player.chacom10)}}/{{notatint(v.PL3chacap)}}<br />奖励：一阶游戏速度乘以(×{{notation(v.charew10)}})
            </button>
          </td>
          <td>
            <button id="chal11" :class="player.incha==11?'chalin':player.chacom11.gte(v.PL3chacap)?'chalyes':'chalno'" style="border: 4px solid #00ff00" @click="entCha(11)">
              进阶挑战11<br />扩散时间、扪敤时间、扫敥时间降低对应风灵指数<br />
              目标：{{notation(v.chagoa11)}}能量<br />完成次数：{{notatint(player.chacom11)}}/{{notatint(v.PL3chacap)}}<br />奖励：提升药剂效果(×{{notation(v.charew11)}})
            </button>
          </td>
          <td>
            <button id="chal12" :class="player.incha==12?'chalin':player.chacom12.gte(v.PL3chacap)?'chalyes':'chalno'" style="border: 4px solid #00ff00" @click="entCha(12)">
              进阶挑战12<br />只有1、9、17、25式风灵生产资源<br />
              目标：{{notation(v.chagoa12)}}能量<br />完成次数：{{notatint(player.chacom12)}}/{{notatint(v.PL3chacap)}}<br />奖励：风之徰粔获取数量(×{{notation(v.charew12)}})
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div id="chal4" v-if="player.stgmx.gte(500)">
      <table align="center">
        <tr>
          <td>
            <button :class="player.incha==13?'chalin':player.chacom13.gte(v.PL4chacap)?'chalyes':'chalno'" style="border: 4px solid #00ffff" @click="entCha(13)">
              进阶挑战13<br />能量的软上限从2能量开始<br />
              目标：{{notation(v.chagoa13)}}能量<br />完成次数：{{notatint(player.chacom13)}}/{{notatint(v.PL4chacap)}}<br />奖励：提升扬敦能量效果指数(+{{notation(v.charew13)}})
            </button>
          </td>
          <td>
            <button :class="player.incha==14?'chalin':player.chacom14.gte(v.PL4chacap)?'chalyes':'chalno'" style="border: 4px solid #00ffff" @click="entCha(14)">
              进阶挑战14<br />风灵基础值指数除以2，风灵指数除以4<br />
              目标：{{notation(v.chagoa14)}}能量<br />完成次数：{{notatint(player.chacom14)}}/{{notatint(v.PL4chacap)}}<br />奖励：扬敦碎片获取乘以(×{{notation(v.charew14)}})
            </button>
          </td>
          <td>
            <button :class="player.incha==15?'chalin':player.chacom15.gte(v.PL4chacap)?'chalyes':'chalno'" style="border: 4px solid #00ffff" @click="entCha(15)">
              进阶挑战15<br />无法购买甜甜花升级，甜甜花速度倍率为1，第8个特殊甜甜花升级被禁用<br />
              目标：{{notation(v.chagoa15)}}能量<br />完成次数：{{notatint(player.chacom15)}}/{{notatint(v.PL4chacap)}}<br />奖励：atk和cps乘数(×{{notation(v.charew15)}})
            </button>
          </td>
          <td>
            <button :class="player.incha==16?'chalin':player.chacom16.gte(v.PL4chacap)?'chalyes':'chalno'" style="border: 4px solid #00ffff" @click="entCha(16)">
              进阶挑战16<br />无法获得扫敥点与扫敥次数<br />
              目标：{{notation(v.chagoa16)}}能量<br />完成次数：{{notatint(player.chacom16)}}/{{notatint(v.PL4chacap)}}<br />奖励：风之徱粕获取数量(×{{notation(v.charew16)}})
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div id="chal5" style="display: none;">
      <table align="center">
        <tr>
          <td>
            <button :class="player.incha==17?'chalin':player.chacom17.gte(v.PL5chacap)?'chalyes':'chalno'" style="border: 4px solid #0000ff" @click="entCha(17)">
              进阶挑战17<br />进阶挑战1~16同时运行，并开启风压坍陷和刺影征标的第一个效果<br />
              目标：{{notation(v.chagoa17)}}能量<br />完成次数：{{notatint(player.chacom17)}}/{{notatint(v.PL5chacap)}}<br />奖励：提升扭敧能量效果指数(+{{notation(v.charew17)}})
            </button>
          </td>
          <td>
            <button :class="player.incha==18?'chalin':player.chacom18.gte(v.PL5chacap)?'chalyes':'chalno'" style="border: 4px solid #0000ff" @click="entCha(18)">
              进阶挑战18<br />立体波和锻造的立体被禁用<br />
              目标：{{notation(v.chagoa18)}}能量<br />完成次数：{{notatint(player.chacom18)}}/{{notatint(v.PL5chacap)}}<br />奖励：(×{{notation(v.charew18)}})
            </button>
          </td>
          <td>
            <button :class="player.incha==19?'chalin':player.chacom19.gte(v.PL5chacap)?'chalyes':'chalno'" style="border: 4px solid #0000ff" @click="entCha(19)">
              进阶挑战19<br />试炼场中无法获得金币<br />
              目标：{{notation(v.chagoa19)}}能量<br />完成次数：{{notatint(player.chacom19)}}/{{notatint(v.PL5chacap)}}<br />奖励：(×{{notation(v.charew19)}})
            </button>
          </td>
          <td>
            <button :class="player.incha==20?'chalin':player.chacom20.gte(v.PL5chacap)?'chalyes':'chalno'" style="border: 4px solid #0000ff" @click="entCha(20)">
              进阶挑战20<br />扬敦碎片升级或营养餐，最多只能购买20次<br />
              目标：{{notation(v.chagoa20)}}能量<br />完成次数：{{notatint(player.chacom20)}}/{{notatint(v.PL5chacap)}}<br />奖励：风之徲粖获取数量(×{{notation(v.charew20)}})
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div id="chal6" style="display: none;">
      <table align="center">
        <tr>
          <td>
            <button :class="player.incha==21?'chalin':player.chacom17.gte(v.PL5chacap)?'chalyes':'chalno'" style="border: 4px solid #ff00ff" @click="entCha(21)">
              进阶挑战21<br /><br />
              目标：{{notation(v.chagoa21)}}能量<br />完成次数：{{notatint(player.chacom17)}}/{{notatint(v.PL5chacap)}}<br />奖励：提升扮敨能量效果指数(+{{notation(v.charew17)}})
            </button>
          </td>
          <td>
            <button :class="player.incha==22?'chalin':player.chacom18.gte(v.PL5chacap)?'chalyes':'chalno'" style="border: 4px solid #ff00ff" @click="entCha(22)">
              进阶挑战22<br /><br />
              目标：{{notation(v.chagoa22)}}能量<br />完成次数：{{notatint(player.chacom18)}}/{{notatint(v.PL5chacap)}}<br />奖励：(×{{notation(v.charew18)}})
            </button>
          </td>
          <td>
            <button :class="player.incha==23?'chalin':player.chacom19.gte(v.PL5chacap)?'chalyes':'chalno'" style="border: 4px solid #ff00ff" @click="entCha(23)">
              进阶挑战23<br /><br />
              目标：{{notation(v.chagoa23)}}能量<br />完成次数：{{notatint(player.chacom19)}}/{{notatint(v.PL5chacap)}}<br />奖励：(×{{notation(v.charew19)}})
            </button>
          </td>
          <td>
            <button :class="player.incha==24?'chalin':player.chacom20.gte(v.PL5chacap)?'chalyes':'chalno'" style="border: 4px solid #ff00ff" @click="entCha(24)">
              进阶挑战24<br /><br />
              目标：{{notation(v.chagoa24)}}能量<br />完成次数：{{notatint(player.chacom20)}}/{{notatint(v.PL5chacap)}}<br />奖励：风之徳粗获取数量(×{{notation(v.charew20)}})
            </button>
          </td>
        </tr>
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

const { notation, notatint, entNormCha, entCha, quitCha } = useGameState()
</script>