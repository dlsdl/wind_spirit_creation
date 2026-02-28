<template>
  <div id="p0_2">
    <div class="ftsz2" align="center">
        重置确认
        风单元确认：<input type="checkbox" v-model="player.tier01conf">
        风模块确认：<input type="checkbox" v-model="player.tier02conf"><br />
        扩散时确认：<input type="checkbox" v-model="player.PL1conf">
        扪敤时确认：<input type="checkbox" v-model="player.PL2conf">
        扫敥时确认：<input type="checkbox" v-model="player.PL3conf"><br />
        扬敦时确认：<input type="checkbox" v-model="player.PL4conf">
        扭敧时确认：<input type="checkbox" v-model="player.PL5conf"><br />
        <!--扮敨时确认：<input type="checkbox" v-model="player.PL6conf"-->
        <!--扯敩时确认：<input type="checkbox" v-model="player.PL7conf"-->
        <!--扰敪时确认：<input type="checkbox" v-model="player.PLwconf"-->
        显示滚动新闻：<input type="checkbox" v-model="player.news">
        启用快捷键：<input type="checkbox" v-model="player.hotk">
    </div><br />
    <div class="ftsz2" align="center">
        自动购买开关<br />
        1~8式风灵：<button class="button" onclick="autobuyon(1)">开启</button><button class="button" onclick="autobuyoff(1)">关闭</button>
        9~16式风灵：<button class="button" onclick="autobuyon(2)">开启</button><button class="button" onclick="autobuyoff(2)">关闭</button><br />
        17~24式风灵：<button class="button" onclick="autobuyon(3)">开启</button><button class="button" onclick="autobuyoff(3)">关闭</button>
        25~32式风灵：<button class="button" onclick="autobuyon(4)">开启</button><button class="button" onclick="autobuyoff(4)">关闭</button><br />
        33~40式风灵：<button class="button" onclick="autobuyon(5)">开启</button><button class="button" onclick="autobuyoff(5)">关闭</button>
        41~48式风灵：<button class="button" onclick="autobuyon(6)">开启</button><button class="button" onclick="autobuyoff(6)">关闭</button><br />
    </div><br />
    <div align="center">
        <span class="ftsz3">风隐急进</span><br />
        <input type="range" style="width:400px" v-model="player.oflnpw"><br />
        <span class="ftsz2">
            你有{{player.oflntm.toFixed(3)}}秒离线时间，当你离线或游戏处于暂停状态时，你将获取离线时间<br />
            当风隐急进激活时，游戏速度将被加快至原来的{{(Math.pow(2, player.oflnpw/10)).toFixed(3)}}倍，但离线时间每秒减少{{(Math.pow(2, player.oflnpw/10) - 1).toFixed(3)}}秒<br />
            当离线时间超过86400秒时，需要将离线时间的超出倍数^0.655用于缴睡<br />
            睡收还将你的离线时间上限限制在1.000e6秒
        </span><br />
        <button class="xxButton" onclick="swfyjj()">切换风隐急进状态<br />当前：{{player.fyjj?"开":"关"}}</button>
        <button class="xxButton" onclick="swgmrn()">切换游戏运行状态<br />当前：{{player.gmrn?"开":"关"}}</button>
    </div>
    <button class="button" onclick="mainLoop()">mainLoop+1</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  player: Object,
  v: Object
})
</script>
