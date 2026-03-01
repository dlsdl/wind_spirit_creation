<template>
  <div>
    <div v-if="currentPage === 'pb_1'">
      <PagePb_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'pa_1'">
      <PagePa_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'pa_2'">
      <PagePa_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p1_1'">
      <PageP1_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p1_2'">
      <PageP1_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p1_3'">
      <PageP1_3 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p2_1'">
      <PageP2_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p2_2'">
      <PageP2_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p2_3'">
      <PageP2_3 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p2_4'">
      <PageP2_4 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p3_1'">
      <PageP3_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p3_2'">
      <PageP3_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p3_3'">
      <PageP3_3 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p3_4'">
      <PageP3_4 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p3_5'">
      <PageP3_5 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p4_1'">
      <PageP4_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p4_2'">
      <PageP4_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p4_3'">
      <PageP4_3 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p4_4'">
      <PageP4_4 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p4_5'">
      <PageP4_5 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p4_6'">
      <PageP4_6 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p5_1'">
      <PageP5_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p5_2'">
      <PageP5_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p5_3'">
      <PageP5_3 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p5_4'">
      <PageP5_4 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p5_5'">
      <PageP5_5 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p5_6'">
      <PageP5_6 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p5_7'">
      <PageP5_7 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p6_1'">
      <PageP6_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p6_2'">
      <PageP6_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p6_3'">
      <PageP6_3 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p6_4'">
      <PageP6_4 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p6_5'">
      <PageP6_5 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p6_6'">
      <PageP6_6 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p6_7'">
      <PageP6_7 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p6_8'">
      <PageP6_8 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p7_1'">
      <PageP7_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p7_2'">
      <PageP7_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p7_3'">
      <PageP7_3 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p7_4'">
      <PageP7_4 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p7_5'">
      <PageP7_5 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p7_6'">
      <PageP7_6 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p7_7'">
      <PageP7_7 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p7_8'">
      <PageP7_8 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p7_9'">
      <PageP7_9 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p8_1'">
      <PageP8_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p8_2'">
      <PageP8_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p8_3'">
      <PageP8_3 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p8_4'">
      <PageP8_4 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p8_5'">
      <PageP8_5 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p8_6'">
      <PageP8_6 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p8_7'">
      <PageP8_7 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p8_8'">
      <PageP8_8 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p8_9'">
      <PageP8_9 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p8_0'">
      <PageP8_0 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p9_1'">
      <PageP9_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p9_2'">
      <PageP9_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p9_3'">
      <PageP9_3 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p9_4'">
      <PageP9_4 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p0_1'">
      <PageP0_1 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p0_2'">
      <PageP0_2 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p0_3'">
      <PageP0_3 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p0_4'">
      <PageP0_4 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p0_5'">
      <PageP0_5 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p9_59330'">
      <PageP9_59330 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'p0_630875'">
      <PageP0_630875 :player="player" :v="v" />
    </div>
    <div v-if="currentPage === 'changelog'">
      <PageChangelog :player="player" :v="v" @switchPage="$emit('switchPage', $event)" />
    </div>
    <div v-if="currentPage === 'savebank'">
      <PageSavebank :player="player" :v="v" @switchPage="$emit('switchPage', $event)" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import PagePb_1 from './pages/PagePb_1.vue'
import PagePa_1 from './pages/PagePa_1.vue'
import PagePa_2 from './pages/PagePa_2.vue'
import PageP1_1 from './pages/PageP1_1.vue'
import PageP1_2 from './pages/PageP1_2.vue'
import PageP1_3 from './pages/PageP1_3.vue'
import PageP2_1 from './pages/PageP2_1.vue'
import PageP2_2 from './pages/PageP2_2.vue'
import PageP2_3 from './pages/PageP2_3.vue'
import PageP2_4 from './pages/PageP2_4.vue'
import PageP3_1 from './pages/PageP3_1.vue'
import PageP3_2 from './pages/PageP3_2.vue'
import PageP3_3 from './pages/PageP3_3.vue'
import PageP3_4 from './pages/PageP3_4.vue'
import PageP3_5 from './pages/PageP3_5.vue'
import PageP4_1 from './pages/PageP4_1.vue'
import PageP4_2 from './pages/PageP4_2.vue'
import PageP4_3 from './pages/PageP4_3.vue'
import PageP4_4 from './pages/PageP4_4.vue'
import PageP4_5 from './pages/PageP4_5.vue'
import PageP4_6 from './pages/PageP4_6.vue'
import PageP5_1 from './pages/PageP5_1.vue'
import PageP5_2 from './pages/PageP5_2.vue'
import PageP5_3 from './pages/PageP5_3.vue'
import PageP5_4 from './pages/PageP5_4.vue'
import PageP5_5 from './pages/PageP5_5.vue'
import PageP5_6 from './pages/PageP5_6.vue'
import PageP5_7 from './pages/PageP5_7.vue'
import PageP6_1 from './pages/PageP6_1.vue'
import PageP6_2 from './pages/PageP6_2.vue'
import PageP6_3 from './pages/PageP6_3.vue'
import PageP6_4 from './pages/PageP6_4.vue'
import PageP6_5 from './pages/PageP6_5.vue'
import PageP6_6 from './pages/PageP6_6.vue'
import PageP6_7 from './pages/PageP6_7.vue'
import PageP6_8 from './pages/PageP6_8.vue'
import PageP7_1 from './pages/PageP7_1.vue'
import PageP7_2 from './pages/PageP7_2.vue'
import PageP7_3 from './pages/PageP7_3.vue'
import PageP7_4 from './pages/PageP7_4.vue'
import PageP7_5 from './pages/PageP7_5.vue'
import PageP7_6 from './pages/PageP7_6.vue'
import PageP7_7 from './pages/PageP7_7.vue'
import PageP7_8 from './pages/PageP7_8.vue'
import PageP7_9 from './pages/PageP7_9.vue'
import PageP8_1 from './pages/PageP8_1.vue'
import PageP8_2 from './pages/PageP8_2.vue'
import PageP8_3 from './pages/PageP8_3.vue'
import PageP8_4 from './pages/PageP8_4.vue'
import PageP8_5 from './pages/PageP8_5.vue'
import PageP8_6 from './pages/PageP8_6.vue'
import PageP8_7 from './pages/PageP8_7.vue'
import PageP8_8 from './pages/PageP8_8.vue'
import PageP8_9 from './pages/PageP8_9.vue'
import PageP8_0 from './pages/PageP8_0.vue'
import PageP9_1 from './pages/PageP9_1.vue'
import PageP9_2 from './pages/PageP9_2.vue'
import PageP9_3 from './pages/PageP9_3.vue'
import PageP9_4 from './pages/PageP9_4.vue'
import PageP0_1 from './pages/PageP0_1.vue'
import PageP0_2 from './pages/PageP0_2.vue'
import PageP0_3 from './pages/PageP0_3.vue'
import PageP0_4 from './pages/PageP0_4.vue'
import PageP0_5 from './pages/PageP0_5.vue'
import PageP9_59330 from './pages/PageP9_59330.vue'
import PageP0_630875 from './pages/PageP0_630875.vue'
import PageChangelog from './pages/PageChangelog.vue'
import PageSavebank from './pages/PageSavebank.vue'

defineProps({
  currentPage: String,
  player: Object,
  v: Object
})

defineEmits(['switchPage'])
</script>
