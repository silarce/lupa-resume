<template>
  <Container class="gallery-section">
    <div class="section-header">
      <div class="badge-gallery">
        <span class="status-dot" />
        Visual Archives & Daily Life
      </div>
      <div class="title-row">
        <h2 class="main-title">生活照</h2>
        <h3 class="sub-title">Daily Life & Portrait Gallery</h3>
      </div>
      <p class="section-desc">
        收錄非執勤時段之日常形象側拍與情緒表情包，點擊照片可開啟全螢幕檢視與縮放
      </p>
    </div>

    <div class="gallery-grid">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="gallery-item"
        @click="() => handleShow(index)"
      >
        <img :src="img" :alt="`Lupa 生活照 0${index + 1}`" class="gallery-img" >
        <div class="item-overlay">
          <span class="preview-btn">
            <UIcon name="i-lucide-zoom-in" class="preview-icon" />
            檢視大圖
          </span>
        </div>
        <!-- <span class="photo-index">PHOTO #0{{ index + 1 }}</span> -->
      </div>
    </div>

    <ClientOnly>
      <VueEasyLightbox
        :imgs="images"
        :visible="visible"
        :index="currentIndex"
        @hide="visible = false"
      />
    </ClientOnly>
  </Container>
</template>

<script setup lang="ts">
import VueEasyLightbox from "vue-easy-lightbox";
import "vue-easy-lightbox/external-css/vue-easy-lightbox.css";

const baseURL = useRuntimeConfig().app.baseURL;

const visible = ref(false);
const currentIndex = ref(0);

const handleShow = (index: number) => {
  currentIndex.value = index;
  visible.value = true;
};

const images = [
  `${baseURL}img/gallery/01.webp`,
  `${baseURL}img/gallery/02.webp`,
  `${baseURL}img/gallery/03.webp`,
  `${baseURL}img/gallery/04.webp`,
  `${baseURL}img/gallery/05.webp`,
  `${baseURL}img/gallery/06.webp`,
  `${baseURL}img/gallery/07.webp`,
  `${baseURL}img/gallery/08.webp`,
];
</script>

<style scoped>
.gallery-section {
  .section-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;

    .badge-gallery {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: fit-content;
      padding: 4px 12px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 500;
      background-color: var(--ui-bg-elevated);
      color: var(--ui-text);
      border: 1px solid var(--ui-border);

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--ui-primary);
      }
    }

    .title-row {
      display: flex;
      align-items: baseline;
      gap: 12px;
      flex-wrap: wrap;

      .main-title {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--ui-text-highlighted);
        margin: 0;
      }

      .sub-title {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 15px;
        font-weight: 500;
        color: var(--ui-secondary);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin: 0;
      }
    }

    .section-desc {
      font-size: 15px;
      color: var(--ui-text-muted);
      margin: 0;
    }
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }

    .gallery-item {
      position: relative;
      aspect-ratio: 1 / 1;
      border-radius: 14px;
      overflow: hidden;
      cursor: pointer;
      background-color: var(--ui-bg-elevated);
      border: 1px solid var(--ui-border);
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        border-color 0.25s ease;

      &:hover {
        transform: translateY(-4px);
        border-color: var(--ui-primary);
        box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.2);

        .gallery-img {
          transform: scale(1.06);
        }

        .item-overlay {
          opacity: 1;
        }
      }

      .gallery-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }

      .item-overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.25s ease;

        .preview-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(4px);

          .preview-icon {
            width: 15px;
            height: 15px;
          }
        }
      }

      .photo-index {
        position: absolute;
        bottom: 10px;
        left: 10px;
        padding: 3px 8px;
        border-radius: 6px;
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.04em;
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        pointer-events: none;
      }
    }
  }
}
</style>
