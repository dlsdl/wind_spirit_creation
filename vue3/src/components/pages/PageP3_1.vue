<template>
  <div id="p3_1">
    <br />
    <p align="center" class="ftsz2">扪敤里程碑</p>
    <table align="center">
      <tbody>
        <tr>
          <td><button :class="player.PL2tms.gte(1) ? 'PL2mlstyes' : 'PL2mlstno'">1次扪敤：解锁风系统</button></td>
          <td><button :class="player.PL2tms.gte(2) ? 'PL2mlstyes' : 'PL2mlstno'">2次扪敤：解锁元素系统</button></td>
          <td><button :class="player.PL2tms.gte(3) ? 'PL2mlstyes' : 'PL2mlstno'">3次扪敤：解锁研究系统</button></td>
          <td><button :class="player.PL2tms.gte(5) ? 'PL2mlstyes' : 'PL2mlstno'">5次扪敤：解锁炼金系统</button></td>
        </tr>
        <tr>
          <td><button :class="player.PL2tms.gte(7) ? 'PL2mlstyes' : 'PL2mlstno'">7次扪敤：解锁自动购买风灵升级3</button></td>
          <td><button :class="player.PL2tms.gte(8) ? 'PL2mlstyes' : 'PL2mlstno'">8次扪敤：解锁自动购买风灵升级4</button></td>
          <td><button :class="player.PL2tms.gte(10) ? 'PL2mlstyes' : 'PL2mlstno'">10次扪敤：解锁自动购买风系统</button></td>
          <td><button :class="player.PL2tms.gte(15) ? 'PL2mlstyes' : 'PL2mlstno'">15次扪敤：解锁风压坍陷</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  player: Object,
  v: Object
})
</script>
