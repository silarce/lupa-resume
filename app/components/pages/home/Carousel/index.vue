<template>
  <div class="mycontainer">
    <!-- 背景圖片區（手機版為上方獨立圖片框，桌機版為滿版底圖） -->
    <div class="backgrounds-stage">
      <div
        v-for="(_, index) in projects"
        :key="index"
        class="carousel-background"
        :class="[`background-${index}`, { 'is-active': activeIndex === index }]"
        aria-hidden="true"
      />
    </div>

    <!-- 輪播卡片區（手機版位於圖片下方，桌機版浮於圖片左側） -->
    <div class="carousel-wrapper">
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        v-model="activeIndex"
        :items="projects"
        :ui="{ item: 'basis-full', arrows: 'arrows' }"
        :arrows="isDesktop"
        dots
        class="lupa-carousel"
        loop
        :prev="{ class: 'carousel-arrow' }"
        :next="{ class: 'carousel-arrow' }"
        @select="(index) => (activeIndex = index)"
      >
        <UCard class="carousel-card">
          <div class="card-inner">
            <div class="card-header">
              <span class="card-title">{{ item.title }}</span>
              <UBadge variant="outline" class="card-badge">
                {{ item.tag }}
              </UBadge>
            </div>
            <p class="card-desc">
              {{ item.description }}
            </p>
          </div>
        </UCard>
      </UCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

type Project = {
  title: string;
  tag: string;
  description: string;
};

const isDesktop = useMediaQuery("(min-width: 768px)");

const activeIndex = ref(0);

const projects: Project[] = [
  {
    title: "首席拆家與物理重組執行官",
    tag: "居家結構壓力測試",
    description:
      "堅守「絕不破壞大型家具」之職業底線，專精於無人監管環境下的書籍墨水吸收、未開封監視器拆解，以及浴廁密室掛鏡完整卸除工程。",
  },
  {
    title: "里民外交與戰略據點巡邏長",
    tag: "轄區公關與資源開發",
    description:
      "每日定時巡視四大核心據點（7-11、全家、遊藝場保全亭、巷口藥局），透過高頻率賣萌與吹冷氣外交，穩定維持高規格點心進貢鏈。",
  },
  {
    title: "極限敏捷追逐與野生品鑑師",
    tag: "敏捷運動與嚴選美食",
    description:
      "擅長公園羽球瞬移劫持、天然樹枝咬感鑑定與家貓日常戰術性騷擾；飲食奉行純肉主義，僅接受原肉乾、起司條、鴨脖子與小饅頭。",
  },
];
</script>

<style scoped>
.mycontainer {
  position: relative;
  isolation: isolate;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--ui-bg-elevated);
  border-bottom: 1px solid var(--ui-border);

  /* 手機版：上方獨立圖片舞台，100% 不遮擋 Lupa */
  .backgrounds-stage {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;

    @media (min-width: 640px) {
      height: 380px;
    }
  }

  .carousel-background {
    position: absolute;
    z-index: 0;
    inset: 0;
    background-size: cover;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.is-active {
      opacity: 1;
    }
  }

  .background-0 {
    background-image: url("/img/carousel/carousel-01.webp");
    background-position: 50% 50%;
  }

  .background-1 {
    background-image: url("/img/carousel/carousel-02.webp");
    background-position: 50% 25%;
  }

  .background-2 {
    background-image: url("/img/carousel/carousel-03.webp");
    background-position: 50% 40%;
  }

  /* 手機版：下方獨立卡片區塊 */
  .carousel-wrapper {
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 16px 16px 44px;
  }

  .lupa-carousel {
    width: 100%;

    /* 手機版隱藏左右箭頭，避免壓到文字（可用手勢滑動與下方圓點切換） */
    :deep(.carousel-arrow) {
      display: none;
      cursor: pointer;

      @media (min-width: 768px) {
        display: inline-flex;
      }
    }
  }

  :deep(.carousel-card) {
    margin: 4px;
    border-radius: 16px;
    background-color: var(--ui-bg);
    border: 1px solid var(--ui-border);
    box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.12);
    ring: 0;
  }

  .card-inner {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .card-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      @media (min-width: 640px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .card-title {
        font-size: 18px;
        font-weight: 700;
        color: var(--ui-text-highlighted);
      }

      :deep(.card-badge) {
        background-color: color-mix(
          in oklab,
          var(--ui-primary) 15%,
          var(--ui-bg)
        );
        color: var(--ui-primary);
        border-color: color-mix(
          in oklab,
          var(--ui-primary) 35%,
          var(--ui-border)
        );
        font-weight: 600;
        flex-shrink: 0;
      }
    }

    .card-desc {
      font-size: 14px;
      line-height: 1.75;
      color: var(--ui-text-muted);
      margin: 0;
    }
  }

  /* 桌機版 (>= 768px)：還原為背景滿版 + 毛玻璃卡片浮於左側 */
  @media (min-width: 768px) {
    height: 500px;
    flex-direction: row;
    align-items: center;
    padding: 0 64px;

    .backgrounds-stage {
      position: absolute;
      inset: 0;
      height: 100%;
    }

    .carousel-wrapper {
      width: auto;
      padding: 0;
    }

    .lupa-carousel {
      width: 440px;
    }

    :deep(.carousel-card) {
      margin: 8px;
      height: 192px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.35);
    }

    .card-inner {
      .card-header {
        .card-title {
          color: #ffffff;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        :deep(.card-badge) {
          background-color: rgba(0, 0, 0, 0.5);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
        }
      }

      .card-desc {
        color: #f3f4f6;
      }
    }
  }
}

:deep(.arrows) {
  >button{
    cursor: pointer;
  }
}
</style>
