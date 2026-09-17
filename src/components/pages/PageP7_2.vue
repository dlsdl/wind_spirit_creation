<template>
  <div id="p7_2">
    <br />
    <div v-if="!player.hasUnlockedPL6">
      <div align="center" class="ftsz2">需要解锁扮敨层级才能使用砖形升级</div>
    </div>
    <div v-if="player.hasUnlockedPL6">
      <div align="center" class="ftsz2" style="color: #ff00ff">
        扮敨胾釐：{{notation(player.PL6brickpts)}} / 总计：{{notation(player.PL6brickptsttl)}}
      </div>
      <br />
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.PL6brick[0]?'PL6brickyes':'PL6brickno'" @click="buyPL6Brick(1)" style="border: 4px solid #ff00ff">
                砖形升级一<br />基于扮敨胾釐增加1~8式风灵指数<br />当前：+{{notation(player.PL6brickptsttl.root(1073741824).floor().mul(0.01).min(1))}}<br />花费：{{notation(v.PL6brickc01)}}扮敨胾釐
              </button>
            </td>
            <td>
              <button :class="player.PL6brick[1]?'PL6brickyes':'PL6brickno'" @click="buyPL6Brick(2)" style="border: 4px solid #ff00ff">
                砖形升级二<br />基于扮敨胾釐增加9~16式风灵指数<br />当前：+{{notation(player.PL6brickptsttl.root(1073741824).floor().mul(0.01).min(1))}}<br />花费：{{notation(v.PL6brickc02)}}扮敨胾釐
              </button>
            </td>
            <td>
              <button :class="player.PL6brick[2]?'PL6brickyes':'PL6brickno'" @click="buyPL6Brick(3)" style="border: 4px solid #ff00ff">
                砖形升级三<br />基于扮敨胾釐增加17~24式风灵指数<br />当前：+{{notation(player.PL6brickptsttl.root(1073741824).floor().mul(0.01).min(1))}}<br />花费：{{notation(v.PL6brickc03)}}扮敨胾釐
              </button>
            </td>
            <td>
              <button :class="player.PL6brick[3]?'PL6brickyes':'PL6brickno'" @click="buyPL6Brick(4)" style="border: 4px solid #ff00ff">
                砖形升级四<br />基于扮敨胾釐增加25~32式风灵指数<br />当前：+{{notation(player.PL6brickptsttl.root(1073741824).floor().mul(0.01).min(1))}}<br />花费：{{notation(v.PL6brickc04)}}扮敨胾釐
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.PL6brick[4]?'PL6brickyes':'PL6brickno'" @click="buyPL6Brick(5)" style="border: 4px solid #ff00ff">
                砖形升级五<br />基于扮敨胾釐增加33~40式风灵指数<br />当前：+{{notation(player.PL6brickptsttl.root(1073741824).floor().mul(0.01).min(1))}}<br />花费：{{notation(v.PL6brickc05)}}扮敨胾釐
              </button>
            </td>
            <td>
              <button :class="player.PL6brick[5]?'PL6brickyes':'PL6brickno'" @click="buyPL6Brick(6)" style="border: 4px solid #ff00ff">
                砖形升级六<br />基于扮敨胾釐增加41~48式风灵指数<br />当前：+{{notation(player.PL6brickptsttl.root(1073741824).floor().mul(0.01).min(1))}}<br />花费：{{notation(v.PL6brickc06)}}扮敨胾釐
              </button>
            </td>
            <td>
              <button :class="player.PL6brick[6]?'PL6brickyes':'PL6brickno'" @click="buyPL6Brick(7)" style="border: 4px solid #ff00ff">
                砖形升级七<br />基于扮敨胾釐增加49~56式风灵指数<br />当前：+{{notation(player.PL6brickptsttl.root(1073741824).floor().mul(0.01).min(1))}}<br />花费：{{notation(v.PL6brickc07)}}扮敨胾釐
              </button>
            </td>
            <td>
              <button :class="player.PL6brick[7]?'PL6brickyes':'PL6brickno'" @click="buyPL6Brick(8)" style="border: 4px solid #ff00ff">
                砖形升级八<br />基于扮敨胾釐提升扮敨能量效果指数<br />当前：+{{notation(player.PL6brickptsttl.root(1073741824).floor().mul(0.001).min(0.1))}}<br />花费：{{notation(v.PL6brickc08)}}扮敨胾釐
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.PL6brick[8]?'PL6brickyes':'PL6brickno'" @click="buyPL6Brick(9)" style="border: 4px solid #ff00ff">
                砖形升级九<br />基于扮敨胾釐提升扮敨能量效果乘数<br />当前：×{{notation(player.PL6brickptsttl.root(1073741824).floor().add(1).min(2))}}<br />花费：{{notation(v.PL6brickc09)}}扮敨胾釐
              </button>
            </td>
            <td>
              <button :class="player.PL6brick[9]?'PL6brickyes':'PL6brickno'" @click="buyPL6Brick(10)" style="border: 4px solid #ff00ff">
                砖形升级十<br />基于扮敨胾釐提升一阶游戏速度<br />当前：×{{notation(player.PL6brickptsttl.root(1073741824).floor().add(1).pwb(1.1).min(2))}}<br />花费：{{notation(v.PL6brickc10)}}扮敨胾釐
              </button>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  player: Object,
  v: Object
})

const { buyPL6Brick, notation } = useGameState()
</script>
