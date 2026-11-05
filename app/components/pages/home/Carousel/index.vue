<template>
  <div
    class="w-full px-16 h-125 flex items-center mycontainer"
    :class="`i0${activeIndex}`"
  >
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      v-model="activeIndex"
      :items="projects"
      :ui="{ item: 'basis-full' }"
      arrows
      dots
      class="w-150"
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

watchEffect(() => {
  console.log(activeIndex.value);
});

const projects: Project[] = [
  {
    title: "經歷 A",
    tag: "前端開發",
    // badgeColor: "primary",
    description: "使用 Nuxt 4 與 Tailwind CSS 開發高效能網站。",
  },
  {
    title: "經歷 B",
    tag: "後端開發",
    // badgeColor: "success",
    description: "設計 RESTful API 與微服務架構。",
  },
  {
    title: "經歷 C",
    tag: "UI/UX 設計",
    // badgeColor: "neutral",
    description: "使用 Figma 設計響應式網頁介面。",
  },
];
</script>

<style scoped>
.mycontainer {
  background-size: cover;
  transition: 0.3s;

  &.i00 {
    background-image: url("/img/carousel/carousel-01.webp");
    background-position: 50% 50%;
  }
  &.i01 {
    background-image: url("/img/carousel/carousel-02.webp");
    background-position: 50% 20%;
  }
  &.i02 {
    background-image: url("/img/carousel/carousel-03.webp");
    background-position: 50% 40%;
  }
}
</style>
