<template>
  <div id="p0_630875" dxfl>
    <div class="ftsz1" style="color:#ffffff; text-align: center">changePg('p0_630875')</div>
    <div class="btnrow">
      <div class="ftsz2">金色能量：</div>
      <input type="text" placeholder="能量=2^2^金色能量" v-model="inputVal" @keyup.enter="goldenEnergy" value="" />
      <div class="ftsz2">
        1.798e308
        6.742e315652
        4.198e323228496
        8.058e330985980541
      </div>
    </div>
    <div class="btnrow">
      <span style="color: rgb(255, 0, 0)">You have been trapped in Menshish, the celestial of 原神，启动！'s reality! You have encountered 7/7 Menshish strikes and rifts:</span><br />
      <span style="color: rgb(255, 0, 0)">掌握风元素的力量:penalty:敌人无法被牵引或打断:reward:unlock {{ wordCycle(["acedia", "sloth", "indolence"]) }} :填充风元素0.000%</span><br />
      <span style="color: rgb(255, 0, 0)">掌握岩元素的力量:penalty:所有抗打断都失去效果:reward:unlock {{ wordCycle(["excess", "gluttony", "surfeit"]) }} :填充岩元素0.000%</span><br />
      <span style="color: rgb(255, 0, 0)">掌握雷元素的力量:penalty:料理失去效果且无法复苏:reward:unlock {{ wordCycle(["avarice", "greed", "cupidity"]) }} :填充雷元素0.000%</span><br />
      <span style="color: rgb(255, 0, 0)">掌握草元素的力量:penalty:元素反应的效果被削弱:reward:unlock {{ wordCycle(["spare", "envy", "begrudge"]) }} :填充草元素0.000%</span><br />
      <span style="color: rgb(255, 0, 0)">掌握水元素的力量:penalty:神明的力量被禁用(天赋lv1):reward:unlock {{ wordCycle(["ire", "wrath", "tantrum"]) }} :填充水元素0.000%</span><br />
      <span style="color: rgb(255, 0, 0)">掌握火元素的力量:penalty:记忆的力量被禁用(命之座=0):reward:unlock {{ wordCycle(["desire", "lust", "crave"]) }} :填充火元素0.000%</span><br />
      <span style="color: rgb(255, 0, 0)">掌握冰元素的力量:penalty:真实游戏速度减慢到原来的0.4倍:reward:unlock {{ wordCycle(["superbe", "pride", "arrogance"]) }} :填充冰元素0.000%</span><br />
      <a href="https://ys.mihoyo.com/" target="_blank"><button align="center" class="xxButton">解锁白屏生成器<br />要求：填充全部元素到100%</button></a>
    </div>
    <div class="btnrow">
      <button align="center" class="csButton" @click="speedrun(1)">1倍速度</button>
      <button align="center" class="csButton" @click="speedrun(10)">10倍速度</button>
      <button align="center" class="csButton" @click="speedrun(100)">100倍速度</button>
      <button align="center" class="csButton" @click="speedrun(1000)">1000倍速度</button>
    </div>
    <div class="btnrow">
      <button align="center" class="csButton" @click="resete">重置能量</button>
      <button align="center" class="csButton" @click="reseta">重置风灵加数</button>
      <button align="center" class="csButton" @click="showall">显示全部声望层</button>
      <button align="center" class="csButton" @click="hideall">隐藏全部声望层</button>
    </div>
    <div class="btnrow">
      <button align="center" class="csButton" @click="zhadang">114514</button>
      <button align="center" class="csButton" @click="pasgen">被动生成点数</button>
      <button align="center" class="csButton" @click="nc0">清空普通挑战</button>
      <button align="center" class="csButton" @click="nc1">完成普通挑战</button>
    </div>
    <div class="btnrow">
      <button align="center" class="csButton" @click="timewarp(1000)">时间扭曲1e3</button>
      <button align="center" class="csButton" @click="timewarp(10000)">时间扭曲1e4</button>
      <button align="center" class="csButton" @click="timewarp(100000)">时间扭曲1e5</button>
      <button align="center" class="csButton" @click="timewarp(1000000)">时间扭曲1e6</button>
    </div>
    <div class="btnrow">
      <button align="center" class="csButton" @click="test11">扩散qol</button>
      <button align="center" class="csButton" @click="test12">扩散解锁</button>
      <button align="center" class="csButton" @click="test21">扪敤qol</button>
      <button align="center" class="csButton" @click="test22">扪敤解锁</button>
    </div>
    <div class="btnrow">
      <button align="center" class="csButton" @click="test31">扫敥qol</button>
      <button align="center" class="csButton" @click="test32">扫敥解锁</button>
      <button align="center" class="csButton" @click="test41">扬敦qol</button>
      <button align="center" class="csButton" @click="test42">扬敦解锁</button>
    </div>
    <div class="btnrow">
      <span class="ftsz4">您已解锁糖类合成器，在这里你可以合成自然界不存在的非法糖类</span><br />
      <span>--合成阶层1--</span><br />
      <span>你有 0 D-甘油醛</span><br />
      <span>你有 0 L-甘油醛</span><br />
      <span>--合成阶层2--</span><br />
      <span>你有 0 D-赤藓糖</span><br />
      <span>你有 0 L-赤藓糖</span><br />
      <span>你有 0 D-苏糖</span><br />
      <span>你有 0 L-苏糖</span><br />
      <span>--合成阶层3--</span><br />
      <span>你有 0 D-核糖</span><br />
      <span>你有 0 L-核糖</span><br />
      <span>你有 0 D-阿拉伯糖</span><br />
      <span>你有 0 L-阿拉伯糖</span><br />
      <span>你有 0 D-木糖</span><br />
      <span>你有 0 L-木糖</span><br />
      <span>你有 0 D-来苏糖</span><br />
      <span>你有 0 L-来苏糖</span><br />
      <span>--合成阶层4--</span><br />
      <span>你有 0 D-阿洛糖</span><br />
      <span>你有 0 L-阿洛糖</span><br />
      <span>你有 0 D-阿卓糖</span><br />
      <span>你有 0 L-阿卓糖</span><br />
      <span>你有 0 D-葡萄糖</span><br />
      <span>你有 0 L-葡萄糖</span><br />
      <span>你有 0 D-甘露糖</span><br />
      <span>你有 0 L-甘露糖</span><br />
      <span>你有 0 D-古洛糖</span><br />
      <span>你有 0 L-古洛糖</span><br />
      <span>你有 0 D-艾杜糖</span><br />
      <span>你有 0 L-艾杜糖</span><br />
      <span>你有 0 D-半乳糖</span><br />
      <span>你有 0 L-半乳糖</span><br />
      <span>你有 0 D-塔洛糖</span><br />
      <span>你有 0 L-塔洛糖</span><br />
    </div>
    <div class="btnrow">
      <div>宇宙浩瀚无垠，智识包罗万象；天才有天才的活法，庸人也有庸人的自足。</div>
      <div class="quanto">你有01234567890123456789012345678901234567890123456789量子元素能量</div>
      <div class="imago">你有01234567890123456789012345678901234567890123456789虚数元素能量</div>
      <div class="staro">你有01234567890123456789012345678901234567890123456789星尘元素能量</div>
      <div class="etho">你有01234567890123456789012345678901234567890123456789以太元素能量</div>
      <span style="animation: a-game-header__antimatter--glow 1s infinite" @click="animationBigCrunch">
        这是由至纯的风元素组成的文字，触摸将导致仙境坍塌
      </span><br />
      <span id="softcap1" style="color: rgb(255, 0, 0)">
        超过 1.797e308 点数后，点数获取速度将被软上限限制!
      </span><br />
      <span id="softcap2" style="color: rgb(128, 0, 0)">
        超过 4e315652 点数后，点数获取速度将被二重软上限限制!
      </span><br />
      <span id="softcap3" style="color: rgb(128, 0, 86)">
        超过 e3e11 点数后，点数获取速度将被三重软上限限制!
      </span><br />
      <span style="color: rgb(255, 94, 0)">
        超过 e3e17 点数后，点数获取速度将被四重软上限限制!
      </span><br />
      <span style="color: rgb(255, 238, 0)">
        超过 e3e26 点数后，点数获取速度将被五重软上限限制!
      </span><br />
      <span style="color: rgb(166, 255, 0)">
        超过 e3e35 点数后，点数获取速度将被六重软上限限制!
      </span><br />
      <span style="color: rgb(0, 255, 149)">
        超过 e3e47 点数后，点数获取速度将被七重软上限限制!
      </span><br />
      <span style="color: rgb(0, 255, 255)">
        超过 e3e59 点数后，点数获取速度将被八重软上限限制!
      </span><br />
      <span style="color: rgb(255, 255, 255)">
        超过 e3.485e76 点数后，点数获取速度将溢出!
      </span><br />
      <span style="color: rgb(255, 195, 215)">
        超过 ee19727 点数后，点数获取速度将二重溢出!
      </span><br />
      <span style="color: rgb(255, 135, 175)">
        超过 ee1e9 点数后，点数获取速度将三重溢出!
      </span><br />
      <span style="color: rgb(255, 75, 135)">
        超过 ee1e18 点数后，点数获取速度将四重溢出!
      </span><br />
      <span style="color: rgb(192, 180, 255)">
        超过 2^^8 点数后，点数获取速度将溣击!
      </span><br />
      <span style="color: rgb(192, 130, 215)">
        超过 2^^16 点数后，点数获取速度将二重溣击!
      </span><br />
      <span style="color: rgb(192, 80, 175)">
        超过 2^^64 点数后，点数获取速度将三重溣击!
      </span><br />
      <span style="color: rgb(192, 30, 135)">
        超过 2^^256 点数后，点数获取速度将四重溣击!
      </span><br />
      <span style="color: rgb(128, 128, 255)">
        超过 2^^^4 点数后，点数获取速度将溤凼!
      </span><br />
      <span style="color: rgb(128, 64, 215)">
        超过 2^^^16 点数后，点数获取速度将二重溤凼!
      </span><br />
      <span style="color: rgb(64, 80, 255)">
        超过 2^^^^4 点数后，点数获取速度将溥函!
      </span><br />
      <span style="color: rgb(64, 40, 215)">
        超过 2^^^^16 点数后，点数获取速度将二重溥函!
      </span><br />
      <span style="color: rgb(0, 120, 255)">
        超过 2{5}4 点数后，点数获取速度将溦凾!
      </span><br />
      <span style="color: rgb(0, 80, 215)">
        超过 2{5}16 点数后，点数获取速度将二重溦凾!
      </span><br />
      <span style="color: rgb(0, 180, 255)">
        超过 2{6}4 点数后，点数获取速度将溧凿!
      </span><br />
      <span style="color: rgb(0, 120, 215)">
        超过 2{6}16 点数后，点数获取速度将二重溧凿!
      </span><br />
      <span style="color: rgb(0, 180, 255)">
        超过 2{8}4 点数后，点数获取速度将溨刀!
      </span><br />
      <span style="color: rgb(20, 180, 225)">
        超过 2{16}4 点数后，点数获取速度将溩刁!
      </span><br />
      <span style="color: rgb(40, 180, 180)">
        超过 2{256}4 点数后，点数获取速度将溪刂!
      </span><br />
      <span style="color: rgb(60, 180, 135)">
        超过 2{65536}4 点数后，点数获取速度将溫刃!
      </span><br />
      <span style="color: rgb(90, 180, 90)">
        超过 2{2^^^4}4 点数后，点数获取速度将溬刄!
      </span><br />
      <span style="color: rgb(128, 160, 128)">
        超过 2{2^^^^4}4 点数后，点数获取速度将溭刅!
      </span><br />
      <span style="color: rgb(128, 128, 128)">
        超过 2{2{8}4}4 点数后，点数获取速度将溮分!
      </span><br />
      <span style="color: rgb(128, 128, 96)">
        超过 2{2{16}4}4 点数后，点数获取速度将溯切!
      </span><br />
      <span style="color: rgb(128, 96, 64)">
        超过 2K4 点数后，点数获取速度将溰刈!
      </span><br />
      <span style="color: rgb(128, 64, 0)">
        超过 2K16 点数后，点数获取速度将溱刉!
      </span><br />
      <span style="-webkit-text-stroke: 1px #c0c0c0"> 点数在达到K65536后将锁定为K65536!</span><br />
      <span style="-webkit-text-stroke: 2px #ffffff"> 点数在达到K1.844e19后将二重锁定为K1.844e19！</span><br />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})

const inputVal = ref('')

const {
  speedrun,
  resete,
  reseta,
  showall,
  hideall,
  zhadang,
  pasgen,
  nc0,
  nc1,
  timewarp,
  test11,
  test12,
  test21,
  test22,
  test31,
  test32,
  test41,
  test42,
  goldenEnergy,
  animationBigCrunch,
  wordCycle,
  randomCrossWords,
  blendWords
} = useGameState()
</script>
