<template>
  <div class="w-full px-16 h-125 flex items-center mycontainer">
    <div
      v-for="(_, index) in projects"
      :key="index"
      class="carousel-background"
      :class="[`background-${index}`, { 'is-active': activeIndex === index }]"
      aria-hidden="true"
    />

    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      v-model="activeIndex"
      :items="projects"
      :ui="{ item: 'basis-full' }"
      arrows
      dots
      class="relative z-10 w-150"
      loop
      :prev="{ class: 'cursor-pointer' }"
      :next="{ class: 'cursor-pointer' }"
      @select="(index) => (activeIndex = index)"
    >
      <UCard
        class="m-2 flex flex-col justify-between h-48 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 shadow-lg ring-0 rounded-2xl"
      >
        <div>
          <div class="flex items-center justify-between mb-2">
            <span
              class="font-bold text-lg text-gray-900 dark:text-white drop-shadow-xs"
              >{{ item.title }}</span
            >
            <UBadge
              variant="outline"
              class="bg-black/40 text-white border-white/20 backdrop-blur-md shadow-xs ring-0"
            >
              {{ item.tag }}
            </UBadge>
          </div>
          <p class="text-sm text-gray-800 dark:text-gray-200">
            {{ item.description }}
          </p>
        </div>

        <!-- <UButton
          size="sm"
          color="primary"
          variant="soft"
          class="self-start mt-4"
        >
          查看詳情
        </UButton> -->
      </UCard>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
// import type { BadgeProps } from "@nuxt/ui";

type Project = {
  title: string;
  tag: string;
  // badgeColor: BadgeProps["color"];
  description: string;
};

const activeIndex = ref(0);

const projects: Project[] = [
  {
    title: "首席拆家與物理重組執行官",
    tag: "居家結構壓力測試",
    // badgeColor: "primary",
    description:
      "堅守「絕不破壞大型家具」之職業底線，專精於無人監管環境下的書籍墨水吸收、未開封監視器拆解，以及浴廁密室掛鏡完整卸除工程。",
  },
  {
    title: "里民外交與戰略據點巡邏長",
    tag: "轄區公關與資源開發",
    // badgeColor: "success",
    description:
      "每日定時巡視四大核心據點（7-11、全家、遊藝場保全亭、巷口藥局），透過高頻率賣萌與吹冷氣外交，穩定維持高規格點心進貢鏈。",
  },
  {
    title: "極限敏捷追逐與野生品鑑師",
    tag: "敏捷運動與嚴選美食",
    // badgeColor: "neutral",
    description:
      "擅長公園羽球瞬移劫持、天然樹枝咬感鑑定與家貓日常戰術性騷擾；飲食奉行純肉主義，僅接受原肉乾、起司條、鴨脖子與小饅頭。",
  },
];
</script>

<style scoped>
.mycontainer {
  position: relative;
  isolation: isolate;
}

.carousel-background {
  position: absolute;
  z-index: 0;
  inset: 0;
  background-size: cover;
  opacity: 0; /* 預設透明（但圖片會在背景先載入好） */
  transition: opacity 0.3s ease;
}

.carousel-background.is-active {
  opacity: 1; /* 當前這張顯示出來 */
}

.background-fade-enter-active,
.background-fade-leave-active {
  transition: opacity 0.3s ease;
}

.background-fade-enter-from,
.background-fade-leave-to {
  opacity: 0;
}

.background-0 {
  background-image: url("/img/carousel/carousel-01.webp");
  background-position: 50% 50%;
}

.background-1 {
  background-image: url("/img/carousel/carousel-02.webp");
  background-position: 50% 20%;
}

.background-2 {
  background-image: url("/img/carousel/carousel-03.webp");
  background-position: 50% 40%;
}
</style>
