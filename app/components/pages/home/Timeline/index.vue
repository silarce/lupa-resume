<template>
  <Container>
    <div>
      <!-- <UChangelogVersions :versions="versions" /> -->
      <UChangelogVersions :versions="versions">
        <!-- <template #image="{ version }">
          <img
            v-if="version.image"
            :src="
              typeof version.image === 'string'
                ? version.image
                : version.image.src
            "
            class="my-timeline-img"
          >
        </template> -->
      </UChangelogVersions>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { ChangelogVersionProps } from "@nuxt/ui";

const versions: ChangelogVersionProps[] = [
  {
    title: "出生",
    description: "可愛的小狗出生了",
    date: "2025-09",
  },
  {
    title: "帶回家",
    description: "",
    date: "2025-10",
    image: "/img/timeline/20251021.webp",
    ui: {
      image: "object-[50%_40%]",
    },
  },
  {
    title: "三個月大",
    description: "最可愛的時候",
    date: "2025-11",
    image: "/img/timeline/20251107.webp",
    ui: {
      image: "object-[50%_15%]",
    },
  },
  {
    title: "長出假眉毛",
    description: "也像黑眼圈",
    date: "2025-12",
    image: "/img/timeline/20251215.webp",
    ui: {
      image: "object-[50%_30%]",
    },
  },
  {
    title: "現在",
    description: "喜歡咬球",
    date: "2026-10",
    image: "/img/timeline/202610.webp",
    ui: {
      image: "object-[50%_10%]",
    },
  },
];
</script>

<style scoped>
:deep(.v20251021) {
  object-position: 50% 40%;
}
</style>
