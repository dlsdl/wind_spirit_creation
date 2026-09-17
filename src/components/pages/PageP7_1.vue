<template>
  <div id="p7_1">
    <br />
    <div class="btnrow" v-if="player.hasUnlockedPL6">
      <div align="center" class="ftsz2" style="display: inline-block">扮敨试炼将禁用一些游戏机制，完成试炼可保留自动化。</div>
      <button class="ltbutton" @click="quitPL6Cha()">退出试炼</button>
    </div>
    <div v-if="!player.hasUnlockedPL6">
      <div align="center" class="ftsz2">需要解锁扮敨层级才能进入扮敨试炼</div>
    </div>
    <div v-if="player.hasUnlockedPL6">
      <table align="center">
        <tbody>
          <tr>
            <td>
              <button :class="player.PL6chaIn==1?'PL6chalin':player.PL6chacom[0].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(1)" style="border: 4px solid #ff00ff">
                扮敨试炼一<br />禁止作成1~8式风灵<br />
                目标：{{notation(v.PL6chago01)}}能量<br />完成次数：{{notatint(player.PL6chacom[0])}}<br />奖励：保留自动作成风灵
              </button>
            </td>
            <td>
              <button :class="player.PL6chaIn==2?'PL6chalin':player.PL6chacom[1].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(2)" style="border: 4px solid #ff00ff">
                扮敨试炼二<br />禁止购买风灵升级<br />
                目标：{{notation(v.PL6chago02)}}能量<br />完成次数：{{notatint(player.PL6chacom[1])}}<br />奖励：保留自动购买升级
              </button>
            </td>
            <td>
              <button :class="player.PL6chaIn==3?'PL6chalin':player.PL6chacom[2].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(3)" style="border: 4px solid #ff00ff">
                扮敨试炼三<br />禁止进行扩散<br />
                目标：{{notation(v.PL6chago03)}}能量<br />完成次数：{{notatint(player.PL6chacom[2])}}<br />奖励：保留自动扩散
              </button>
            </td>
            <td>
              <button :class="player.PL6chaIn==4?'PL6chalin':player.PL6chacom[3].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(4)" style="border: 4px solid #ff00ff">
                扮敨试炼四<br />禁止使用扪敤能量<br />
                目标：{{notation(v.PL6chago04)}}能量<br />完成次数：{{notatint(player.PL6chacom[3])}}<br />奖励：保留自动扪敤
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.PL6chaIn==5?'PL6chalin':player.PL6chacom[4].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(5)" style="border: 4px solid #ff00ff">
                扮敨试炼五<br />禁止使用扫敥能量<br />
                目标：{{notation(v.PL6chago05)}}能量<br />完成次数：{{notatint(player.PL6chacom[4])}}<br />奖励：保留自动扫敥
              </button>
            </td>
            <td>
              <button :class="player.PL6chaIn==6?'PL6chalin':player.PL6chacom[5].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(6)" style="border: 4px solid #ff00ff">
                扮敨试炼六<br />禁止使用扬敦能量<br />
                目标：{{notation(v.PL6chago06)}}能量<br />完成次数：{{notatint(player.PL6chacom[5])}}<br />奖励：保留自动扬敦
              </button>
            </td>
            <td>
              <button :class="player.PL6chaIn==7?'PL6chalin':player.PL6chacom[6].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(7)" style="border: 4px solid #ff00ff">
                扮敨试炼七<br />禁止使用扭敧能量<br />
                目标：{{notation(v.PL6chago07)}}能量<br />完成次数：{{notatint(player.PL6chacom[6])}}<br />奖励：保留自动扭敧
              </button>
            </td>
            <td>
              <button :class="player.PL6chaIn==8?'PL6chalin':player.PL6chacom[7].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(8)" style="border: 4px solid #ff00ff">
                扮敨试炼八<br />禁止购买元素<br />
                目标：{{notation(v.PL6chago08)}}能量<br />完成次数：{{notatint(player.PL6chacom[7])}}<br />奖励：保留自动元素
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button :class="player.PL6chaIn==9?'PL6chalin':player.PL6chacom[8].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(9)" style="border: 4px solid #ff00ff">
                扮敨试炼九<br />禁止使用甜甜花<br />
                目标：{{notation(v.PL6chago09)}}能量<br />完成次数：{{notatint(player.PL6chacom[8])}}<br />奖励：保留自动甜甜花
              </button>
            </td>
            <td>
              <button :class="player.PL6chaIn==10?'PL6chalin':player.PL6chacom[9].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(10)" style="border: 4px solid #ff00ff">
                扮敨试炼十<br />禁止使用多面体波<br />
                目标：{{notation(v.PL6chago10)}}能量<br />完成次数：{{notatint(player.PL6chacom[9])}}<br />奖励：保留自动多面体波
              </button>
            </td>
            <td>
              <button :class="player.PL6chaIn==11?'PL6chalin':player.PL6chacom[10].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(11)" style="border: 4px solid #ff00ff">
                扮敨试炼十一<br />禁止使用惊奇风盒<br />
                目标：{{notation(v.PL6chago11)}}能量<br />完成次数：{{notatint(player.PL6chacom[10])}}<br />奖励：保留自动惊奇风盒
              </button>
            </td>
            <td>
              <button :class="player.PL6chaIn==12?'PL6chalin':player.PL6chacom[11].gte(1)?'PL6chayes':'PL6chano'" @click="entPL6Cha(12)" style="border: 4px solid #ff00ff">
                扮敨试炼十二<br />禁止使用试炼场<br />
                目标：{{notation(v.PL6chago12)}}能量<br />完成次数：{{notatint(player.PL6chacom[11])}}<br />奖励：保留自动试炼场
              </button>
            </td>
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

const { entPL6Cha, quitPL6Cha, notation, notatint } = useGameState()
</script>
