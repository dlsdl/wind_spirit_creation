<template>
  <div id="p5_3">
    <div id="bogglebox" v-if="player.PL4goal[7]">
      <div align="center" class="ftsz2">你有{{notatint(player.bogglebox)}}惊奇!风盒，开启它们可以随机获得柏拉图!立体，可以将柏拉图!立体锻造为物品<br />当拥有的柏拉图!立体数量大于0时，将会产生立体波，否则立体波会衰减<br />每2倍作成指数的效果为使风灵指数乘以1+max(0,log2(作成次数)-0.5)×每2倍作成指数</div>
      <table align="center">
        <tbody>
        <tr>
          <td><button class="boggle" @click="getbox1">从扬敦点中获取惊奇!风盒<br />花费：{{notation(v.boxc1)}}扬敦点<br />总计获取{{notatint(player.boxa1)}}</button></td>
          <td><button class="boggle" @click="getbox2">从扬敦碎片中获取惊奇!风盒<br />花费：{{notation(v.boxc2)}}扬敦碎片<br />总计获取{{notatint(player.boxa2)}}</button></td>
          <td><button class="boggle" @click="openbox1">开启1个惊奇!风盒</button></td>
          <td><button class="boggle" @click="openbox2">开启80%惊奇!风盒</button></td>
          <td><button class="boggle" @click="resbox">返还惊奇!风盒，但进行扬敦重置</button></td>
        </tr>
      </tbody>
      </table>
      <div align="center" class="ftsz2">
        你有<span class="ftsz3">{{notatint(player.hdrn4)}}</span>柏拉图!四面体, 每秒产生{{notation(v.hdrn4wps)}}四面体波,
        你的{{notation(player.hdrn4w)}}四面体波将1~8式风灵的每2倍作成指数+{{notation(v.hdrn4e)}}
      </div>
      <div align="center" class="ftsz2" style="color:#ff0000">
        你有<span class="ftsz3" style="color:#ff0000">{{notatint(player.hdrn6)}}</span>柏拉图!六面体, 每秒产生{{notation(v.hdrn6wps)}}六面体波,
        你的{{notation(player.hdrn6w)}}六面体波将9~16式风灵的每2倍作成指数+{{notation(v.hdrn6e)}}
      </div>
      <div align="center" class="ftsz2" style="color:#ffff00">
        你有<span class="ftsz3" style="color:#ffff00">{{notatint(player.hdrn8)}}</span>柏拉图!八面体, 每秒产生{{notation(v.hdrn8wps)}}八面体波,
        你的{{notation(player.hdrn8w)}}八面体波将17~24式风灵的每2倍作成指数+{{notation(v.hdrn8e)}}
      </div>
      <div align="center" class="ftsz2" style="color:#00ff00">
        你有<span class="ftsz3" style="color:#00ff00">{{notatint(player.hdrn12)}}</span>柏拉图!十二面体, 每秒产生{{notation(v.hdrn12wps)}}十二面体波,
        你的{{notation(player.hdrn12w)}}十二面体波将25~32式风灵的每2倍作成指数+{{notation(v.hdrn12e)}}
      </div>
      <div align="center" class="ftsz2" style="color:#00ffff">
        你有<span class="ftsz3" style="color:#00ffff">{{notatint(player.hdrn20)}}</span>柏拉图!二十面体, 每秒产生{{notation(v.hdrn20wps)}}二十面体波,
        你的{{notation(player.hdrn20w)}}二十面体波将33~40式风灵的每2倍作成指数+{{notation(v.hdrn20e)}}
      </div>
      <div align="center" class="ftsz2" style="color:#0000ff" v-if="player.staram.gte(1e16)">
        你的<span class="ftsz3" style="color:#0000ff">3∞</span>面体每秒产生{{notation(v.hdrn30wps)}} 3∞面体波,
        你的{{notation(player.hdrn30w)}} 3∞面体波将41~48式风灵的每2倍作成指数+{{notation(v.hdrn30e)}}
      </div>
      <table align="center">
        <tbody>
        <tr>
          <td><button class="boggle" @click="forge(1)">锻造1无相之风晶核：<br />需要1六面体+1八面体</button></td>
          <td><button class="boggle" @click="forge(2)">锻造1赫耀多方面体：<br />需要1四面体+1二十面体</button></td>
          <td><button class="boggle" @click="forge(3)">锻造1星形十二面体：<br />需要1惊奇风盒+1十二面体</button></td>
          <td><button class="boggle" @click="forge(4)">锻造1最终立体：<br />需要1无相之风晶核+1赫耀多方面体+1星形十二面体</button></td>
          <td><button class="boggle" @click="resforge">重置锻造，但进行扬敦重置</button></td>
        </tr>
      </tbody>
      </table>
      <div align="center" class="ftsz2" style="color:#ff8000">你有<span class="ftsz3" style="color:#ff8000">{{notatint(player.wxzf)}}</span>无相之风晶核，风灵升级1和3效果^{{notation(v.wxzfe)}}</div>
      <div align="center" class="ftsz2" style="color:#80ff00">你有<span class="ftsz3" style="color:#80ff00">{{notatint(player.hydf)}}</span>赫耀多方面体，风灵升级2和4效果^{{notation(v.hydfe)}}</div>
      <div align="center" class="ftsz2" style="color:#00ff80">你有<span class="ftsz3" style="color:#00ff80">{{notatint(player.xkwz)}}</span>星形十二面体，额外的风灵升级数量+{{notatint(v.xkwze)}}%</div>
      <div align="center" class="ftsz2" style="color:#33cccc">你有<span class="ftsz3" style="color:#33cccc">{{notatint(player.zzlt)}}</span>最终立体，每秒产生{{notatint(v.zzltwps)}}最终立体波</div>
      <div align="center" class="ftsz2" style="color:#669999">你有<span class="ftsz3" style="color:#669999">{{notatint(player.zzltw)}}</span>最终立体波，用来购买下面的升级</div>
      <table align="center">
        <tbody>
        <tr>
          <td><button :class="player.zzltu[0]?'boggleyes':'boggle'" @click="buyltwu(0)">自动获得扫敥次数，最终立体波增益扫敥次数获取×{{notation(v.ltwum1)}}<br />需要：1000最终立体波</button></td>
          <td><button :class="player.zzltu[1]?'boggleyes':'boggle'" @click="buyltwu(1)">最终立体波增益扬敦碎片获取×{{notation(v.ltwum2)}}<br />需要：1e6最终立体波</button></td>
          <td><button :class="player.zzltu[2]?'boggleyes':'boggle'" @click="buyltwu(2)">最终立体波增益一阶游戏速度×{{notation(v.ltwum3)}}<br />需要：1e9最终立体波</button></td>
          <td><button :class="player.zzltu[3]?'boggleyes':'boggle'" @click="buyltwu(3)">最终立体波增益33~40式风灵×{{notation(v.ltwum4)}}<br />需要：1e12最终立体波</button></td>
          <td><button :class="player.zzltu[4]?'boggleyes':'boggle'" @click="buyltwu(4)">解锁试炼场<br />需要：1e15最终立体波</button></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div v-else align="center" class="ftsz2">需要累计获得65536扬敦点</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, getbox1, getbox2, openbox1, openbox2, resbox, forge, resforge, buyltwu } = useGameState()
</script>