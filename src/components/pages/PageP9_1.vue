<template>
  <div id="p9_1">
    <div id="wscstat">
        <div class="ftsz3" style="color: #ffffff; text-align: center">风灵</div>
        <div class="ftsz1" style="color: #ffffff; text-align: center">
            {{"游玩时间：" + player.days.toFixed(0) + "d " + player.hours.toFixed(0) + "h " + player.minuts.toFixed(0) + "m " + player.seconds.toFixed(0) + "s " + player.milliseconds.toFixed(0) + "ms"}}<br />
            {{"总计秒数（现实时间）：" + notatint(player.totalSeconds)}}<br />
            {{"总计秒数（游戏时间）：" + notatint(player.gameseconds)}}<br />
            {{"总计能量：" + notation(player.energyttl)}}<br />
            {{energyshow()}}<br />
        </div>
    </div>
    <div id="PL1stat" v-if="player.hasUnlockedPL1">
        <div class="ftsz3" style="color: #ff0000; text-align: center">扩散</div>
        <div class="ftsz1" style="color: #ffffff; text-align: center">
            {{"您扩散了" + notatint(player.PL1tms) + "次"}}<br />
            {{"总计扩散点：" + notatint(player.PL1ptsttl)}}<br />
            {{"上次扩散到现在过了" + notatint(player.PL1sec) + "秒(游戏时间)"}}<br />
            {{"上次扩散到现在过了" + notatint(player.PL1secrl) + "秒(现实时间)"}}<br />
        </div>
    </div>
    <div id="PL2stat" v-if="player.hasUnlockedPL2">
        <div class="ftsz3" style="color: #ffff00; text-align: center">扪敤</div>
        <div class="ftsz1" style="color: #ffffff; text-align: center">
            {{"您扪敤了" + notatint(player.PL2tms) + "次"}}<br />
            {{"总计扪敤点：" + notatint(player.PL2ptsttl)}}<br />
            {{"上次扪敤到现在过了" + notatint(player.PL2sec) + "秒(游戏时间)"}}<br />
            {{"上次扪敤到现在过了" + notatint(player.PL2secrl) + "秒(现实时间)"}}<br />
        </div>
    </div>
    <div id="PL3stat" v-if="player.hasUnlockedPL3">
        <div class="ftsz3" style="color: #00ff00; text-align: center">扫敥</div>
        <div class="ftsz1" style="color: #ffffff; text-align: center">
            {{"您扫敥了" + notatint(player.PL3tms) + "次"}}<br />
            {{"总计扫敥点：" + notatint(player.PL3ptsttl)}}<br />
            {{"上次扫敥到现在过了" + notatint(player.PL3sec) + "秒(游戏时间)"}}<br />
            {{"上次扫敥到现在过了" + notatint(player.PL3secrl) + "秒(现实时间)"}}<br />
        </div>
    </div>
    <div id="PL4stat" v-if="player.hasUnlockedPL4">
        <div class="ftsz3" style="color: #00ffff; text-align: center">扬敦</div>
        <div class="ftsz1" style="color: #ffffff; text-align: center">
            {{"您扬敦了" + notatint(player.PL4tms) + "次"}}<br />
            {{"总计扬敦点：" + notatint(player.PL4ptsttl)}}<br />
            {{"上次扬敦到现在过了" + notatint(player.PL4sec) + "秒(游戏时间)"}}<br />
            {{"上次扬敦到现在过了" + notatint(player.PL4secrl) + "秒(现实时间)"}}<br />
        </div>
    </div>
    <div id="PL5stat" v-if="player.hasUnlockedPL5">
        <div class="ftsz3" style="color: #0000ff; text-align: center">扭敧</div>
        <div class="ftsz1" style="color: #ffffff; text-align: center">
            {{"您扭敧了" + notatint(player.PL5tms) + "次"}}<br />
            {{"总计扭敧点：" + notatint(player.PL5ptsttl)}}<br />
            {{"上次扭敧到现在过了" + notatint(player.PL5sec) + "秒(游戏时间)"}}<br />
            {{"上次扭敧到现在过了" + notatint(player.PL5secrl) + "秒(现实时间)"}}<br />
        </div>
    </div>
    <div id="PL6stat" v-if="player.hasUnlockedPL6">
        <div class="ftsz3" style="color: #0000ff; text-align: center">扮敨</div>
        <div class="ftsz1" style="color: #ffffff; text-align: center">
            {{"您扮敨了" + notatint(player.PL6tms) + "次"}}<br />
            {{"总计扮敨点：" + notatint(player.PL6ptsttl)}}<br />
            {{"上次扮敨到现在过了" + notatint(player.PL6sec) + "秒(游戏时间)"}}<br />
            {{"上次扮敨到现在过了" + notatint(player.PL6secrl) + "秒(现实时间)"}}<br />
        </div>
    </div>
  </div>
</template>

<script setup>
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const { notation, notatint, energyshow } = useGameState()
</script>
