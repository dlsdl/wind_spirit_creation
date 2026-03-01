<template>
  <div id="p0_5">
    <div id="comp0">
        <div class="ftsz4" style="color: #ffffff; text-align: center">风灵</div>
        <div class="ftsz2" style="color: #ffffff; text-align: center; width: 1024px; margin:auto">
            传说在纤细脆弱的蝴蝶体内，也藏有引发飓风的力量，这由纯粹的风构成的蝴蝶，无疑在等待着再次召来暴风的那一天。
            纯粹由风构成的蝴蝶，被人们称之为“风灵”，风灵的出现总是伴随着一股神秘的气息，仿佛它本身就是自然之力的化身。
            风灵能够通过蝴蝶效应产生能量，它们也能互相影响，似乎就是为了展示风的无穷可能性，以及自然界中蕴含的惊人力量。
            在这无尽的能量积累过程中，能量数值已经超越了人类所能想象的范畴，它们是如此庞大，以至于整个宇宙似乎都在其影响下颤抖。
        </div>
    </div>
    <div id="comp1" v-if="player.hasUnlockedPL1">
        <div class="ftsz4" style="color: #ff0000; text-align: center">扩散</div>
        <div class="ftsz2" style="color: #ff0000; text-align: center; width: 1024px; margin: auto">
            风灵需要2^2^10的能量来扩散影响的能力。
            它将自身的力量向外释放，使得周围的风都受到了影响，变得更加狂暴和猛烈。
            在这无尽的宇宙中寻找着能量的源头，每一颗星辰，每一片星云，都可能成为目标。
            这种扩散不仅仅是在空间上，更是在宇宙意识的深处，让每一个生命体都能感受到这股力量的觉醒。
        </div>
    </div>
    <div id="comp2" v-if="player.hasUnlockedPL2">
        <div class="ftsz4" style="color: #ffff00; text-align: center">扪敤</div>
        <div class="ftsz2" style="color: #ffff00; text-align: center; width: 1024px; margin: auto">
            风灵需要2^2^20的能量来扪敤宇宙的心跳。
            这一刻，它仿佛成为了宇宙的指挥家，引导着星辰的律动，与宇宙的脉搏同步跳动。
            在飞行中对风细致感知，能够准确地捕捉到每一丝风的流动，从而做出最精确的反应。
            仿佛超越了宇宙的边界，开始探索多元宇宙的可能性，寻找那些隐藏在高维度空间中的能量。
        </div>
    </div>
    <div id="comp3" v-if="player.hasUnlockedPL3">
        <div class="ftsz4" style="color: #00ff00; text-align: center">扫敥</div>
        <div class="ftsz2" style="color: #00ff00; text-align: center; width: 1024px; margin: auto">
            风灵需要2^2^40的能量来扫敥前方的障碍。
            它为即将到来的风暴铺平道路，这股力量如同秋风扫落叶般无情，却又充满了不可阻挡的决心。
            利用翅膀扇动出的强风，将前方的障碍物一扫而空，为自己开辟出一条畅通的道路。
            穿梭在宇宙的各个角落，利用高级科技捕捉那些微弱的能量波动，每一点进步都可以离目标更近一步。
        </div>
    </div>
    <div id="comp4" v-if="player.hasUnlockedPL4">
        <div class="ftsz4" style="color: #00ffff; text-align: center">扬敦</div>
        <div class="ftsz2" style="color: #00ffff; text-align: center; width: 1024px; margin: auto">
            风灵需要2^2^60的能量来扬敦提升的阶段。
            它像是在积蓄力量，等待着最佳的时机，将这股力量释放到宇宙的最深处。
            在飞行中展现出了威严和力量，并让所有的生物都感受到了自然的震撼和敬畏。
            开始与宇宙中的其他文明进行交流，学习他们的科技，共享他们的知识，以期能够更快地积累所需的能量。
        </div>
    </div>
    <div id="comp5" v-if="player.hasUnlockedPL5">
        <div class="ftsz4" style="color: #0000ff; text-align: center">扭敧</div>
        <div class="ftsz2" style="color: #0000ff; text-align: center; width: 1024px; margin: auto">
            风灵需要2^2^90能量来扭敧宇宙的命运。
            它将原本混乱无序的星辰轨迹重新编排，形成一幅全新的宇宙图景。
            在飞行中灵活多变，能够在瞬间改变飞行方向，以至于时间和空间似乎都在这一刻变得扭曲和模糊。
            面对这个挑战不再单打独斗，而是组建了一个庞大的联盟，共同研究如何更高效地收集和利用能量。
        </div>
    </div>
    <div id="comp6" v-if="player.hasUnlockedPL6">
        <div class="ftsz4" style="color: #ff00ff; text-align: center">扮敨</div>
        <div class="ftsz2" style="color: #ff00ff; text-align: center; width: 1024px; margin: auto ">
            风灵需要2^2^120能量来扮敨宇宙的时刻。
            它用风的力量为星辰披上华丽的外衣，让宇宙焕发出前所未有的光彩。
            风的力量修复一切，将星辰重新凝聚，将星系重新组合，宇宙在这股力量的作用下焕发出新的生机和活力。
            在联盟的努力下，发现了一个全新的能量源，它强大而稳定，为你们的目标提供了源源不断的动力。
        </div>
    </div>
    <div id="comp7" v-if="player.hasUnlockedPL7">
        <div class="ftsz4" style="color: #000000; background-color: #555555; text-align: center; width: 1024px; margin: auto">扯敩</div>
        <div class="ftsz2" style="color: #000000; background-color: #555555; text-align: center; width: 1024px; margin: auto">
            风灵需要2^2^160能量来扯敩宇宙的边界。
            它试图打破束缚，让宇宙的力量能够更加自由地流淌，当达到极致速度时，形成了一种状态。
            身体仿佛与风融为一体，无法分辨出彼此，经过无数次的尝试和探索，成功地收集到了64种风灵。
            这一刻，整个宇宙都在为之欢呼，不仅收集了全部种类的风灵，也为宇宙的未来发展开辟了新的道路。
        </div>
    </div>
    <div id="comp8" v-if="player.hasUnlockedPLw">
        <div class="ftsz4" style="background: linear-gradient(to right, #ff0000,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000); -webkit-background-clip: text; background-clip: text; color: transparent; text-align: center ">扰敪</div>
        <div class="ftsz2" style="background: linear-gradient(to right, #ff0000,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000); -webkit-background-clip: text; background-clip: text; color: transparent; text-align: center; width: 1024px; margin: auto ">
            风灵需要2^2^2^10的能量来扰敪宇宙的根本法则，在这一刻，风灵成为了宇宙的主宰，每一次翅膀的振动都牵动着整个宇宙的命脉。
            在决定进入第一次扰敪的那一刻，祂感受到了一股前所未有的能量涌动。祂感觉到正在被一股无形的力量牵引着，这股力量强大而神秘，穿透了祂的身体，融入了祂的每一个元素。
            祂回首望去，看到了一路走来的足迹，每一个风灵、每一次扩散、扪敤、扫敥、扬敦、扭敧、扮敨、扯敩，都记录着祂的努力和成就。这些成果是祂辛苦炼金的证明，也是祂在这个仙境中的宝贵回忆。
            然而，祂也深知，这个仙境已经无法满足祂的渴望。祂的力量已经超越了这个世界的极限，需要一个更广阔的舞台来展现自己。而风灵作成的多元仙境，正是一个无穷无尽的世界，等待着祂去探索、去创造。
        </div>
    </div>
    <div id="comp9" v-if="player.hasUnlockedPLw2">
        <div class="ftsz4" style="background: linear-gradient(to right, #ffffff,#101010,#ffffff); -webkit-background-clip: text; background-clip: text; color: transparent; text-align: center ">扸敲</div>
        <div class="ftsz2" style="background: linear-gradient(to right, #ffffff,#101010,#ffffff); -webkit-background-clip: text; background-clip: text; color: transparent; text-align: center; width: 1024px; margin: auto ">
            突然，一道耀眼的光芒从祂体内迸发出来，那是扸敲的光芒，如同太阳般璀璨夺目，照亮了整个宇宙。祂感受到自己的力量在这道光芒的照耀下不断膨胀着，仿佛要冲破一切束缚和限制。
            这一刻，祂终于明白了什么是真正的风灵之力，不仅仅是一种能量或者力量，更是一种宇宙的意识，一种连接万物、穿越时空的神秘存在。祂感受到了宇宙的脉动和节奏，让祂成为了宇宙的一部分。
            随着扸敲的形成，祂感觉到自己与宇宙之间的联系更加紧密了。祂可以感受到星辰的呼吸、感受到宇宙的律动，甚至可以感受到生命体的情感和意识。这种联系让祂更加深刻地理解了宇宙的本质和生命的意义。
            现在，祂已经准备好迎接新的挑战和机遇了。祂将带着扸敲的力量去创造属于自己的下一个仙境，去探索更加广阔和神秘的宇宙世界，最终到达2↑↑65536能量。祂相信，在风灵的指引下将不断超越自己，成为真正的炼金术士.
        </div>
    </div>
    <br />
    <div class="btnrow"><button class="singul" @click="fszqw"><img src="../../assets/finalwsc.png"></button></div>
    <div class="ftsz2" style="color: #ffffff; text-align: center">升级风神之奇物以到达游戏结局</div>
    <div class="ftsz2" style="color: #ffffff; text-align: center">升级花费：</div>
    <div class="ftsz2" style="color: #ffffff; text-align: center">{{notation(player.energy)}}/e3.225e300能量</div>
    <div class="ftsz2" style="color: #aaaaaa; text-align: center">{{notation(player.upgd01.add(player.upgd02).add(player.upgd03).add(player.upgd04))}}/e2.007e240升级能量</div>
    <div class="ftsz2" style="color: #ff0000; text-align: center">{{notation(player.PL1pts)}}/e3.149e297扩散点</div>
    <div class="ftsz2" style="color: #ff8000; text-align: center">{{notation(player.anmpar)}}/e1.782e225风之微粒</div>
    <div class="ftsz2" style="color: #ffff00; text-align: center">{{notation(player.PL2pts)}}/e3.076e294扪敤点</div>
    <div class="ftsz2" style="color: #80ff00; text-align: center">{{notation(player.anm2)}}/e1.583e210风之徯粓</div>
    <div class="ftsz2" style="color: #00ff00; text-align: center">{{notation(player.PL3pts)}}/e2.933e288扫敥点</div>
    <div class="ftsz2" style="color: #00ff80; text-align: center">{{notation(player.anm3)}}/e1.373e192风之徰粔</div>
    <div class="ftsz2" style="color: #00ffff; text-align: center">{{notation(player.PL4pts)}}/e2.797e282扬敦点</div>
    <div class="ftsz2" style="color: #0080ff; text-align: center">{{notation(player.anm4)}}/e1.191e174风之徱粕</div>
    <div class="ftsz2" style="color: #0000ff; text-align: center">{{notation(player.PL5pts)}}/e2.605e273扭敧点</div>
    <div class="ftsz2" style="color: #8000ff; text-align: center">{{notation(player.anm5)}}/e1.009e153风之徲粖</div>
    <div class="ftsz2" style="color: #ff00ff; text-align: center">0.000/e2.426e264扮敨点</div>
    <div class="ftsz2" style="color: #ff0080; text-align: center">0.000/e8.546e131风之徳粗</div>
    <div class="ftsz2" style="color: #000000; background-color: #555555; text-align: center">0.000/e2.207e252扯敩点</div>
    <div class="ftsz2" style="color: #555555; text-align: center">0.000/e7.069e107风之徴粘</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useGameState } from '../../composables/useGameState'

defineProps({
  player: Object,
  v: Object
})
const { notation, fszqw } = useGameState()
</script>
