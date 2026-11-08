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
    date: "2025-09-15",
  },
  {
    title: "帶回家",
    description: "",
    date: "2025-10-21",
    image: "/img/timeline/20251021.webp",
    ui: {
      image: "object-[50%_40%]",
    },
  },
  {
    title: "看醫生",
    description: "第一次看醫生",
    date: "2025-10-25",
    image: "/img/timeline/20251027.webp",
    ui: {
      image: "object-[50%_40%]",
    },
  },
];
</script>

<style scoped>
:deep(.v20251021) {
  object-position: 50% 40%;
}
</style>
