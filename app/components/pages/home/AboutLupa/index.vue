<template>
  <Container class="about-section">
    <div class="theContainer">
      <!-- 左側：形象照區 -->
      <div class="left">
        <div class="photo-frame">
          <img src="/img/aboutLupa/01.webp" alt="Lupa 形象照" class="avatar-img" >
          <div class="photo-caption">
            <span class="caption-name">Lupa</span>
            <span class="caption-role">首席拆家與巡邏執行官 (Chief Husky Officer)</span>
          </div>
        </div>
      </div>

      <!-- 右側：關於 Lupa 履歷自傳 -->
      <div class="right">
        <div class="header-group">
          <div class="badge-profile">
            <span class="status-dot" />
            Executive Profile
          </div>
          <div class="title-row">
            <h2 class="main-title">關於 Lupa</h2>
            <h3 class="sub-title">About Lupa</h3>
          </div>
        </div>

        <div ref="bioRef">
          <pre
            v-if="!isAnimationDone"
            class="bio-content"
            :class="{ 'is-visible': isInView }"
          ><span
            v-for="(char, index) in bioChars"
            :key="index"
            class="bio-char"
            :style="{ transitionDelay: `${index * 10}ms` }"
            @transitionend="onCharTransitionEnd(index)"
          >{{ char }}</span></pre>
          <pre v-else class="bio-content">{{ bioText }}</pre>
        </div>

        <!-- <div class="highlight-tags">
          <UBadge color="neutral" variant="subtle"># 飽讀詩書（物理）</UBadge>
          <UBadge color="neutral" variant="subtle"># 羽毛球大盜</UBadge>
          <UBadge color="neutral" variant="subtle"># 密室拆鏡專家</UBadge>
          <UBadge color="neutral" variant="subtle"># 純肉主義者</UBadge>
        </div> -->
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { useInView } from "motion-v";

const bioRef = useTemplateRef<HTMLElement>("bioRef");
const isInView = useInView(bioRef, { once: true, amount: 0.2 });
const isAnimationDone = ref(false);

const bioText = `Lupa 是一隻血統純正、氣質出眾的標準哈士奇，天生自帶偶像光環，完全不用刻意裝可愛就已經足夠迷人。

在居家行為準則上，Lupa 堅守「絕不破壞大型家具」的職業底線；然而只要察覺家中無人看管，便會立即啟動自主拆解專案，將各類生活雜物進行高規格的物理性重組。目前已累計啃閱了數本實體書籍，肚子裡實打實地裝了不少墨水，氣質與智商似乎也隨著閱讀量（物理）與日俱增。

戶外休閒方面，熱衷於品鑑各類天然樹枝的咬感，並具備極高的敏捷度，擅長在公園裡神不知鬼不覺地偷走別人的羽毛球。生涯迄今最具代表性的巔峰成就，是某次設法將自己反鎖在浴廁密室中，並憑一己之力把牆上的浴室掛鏡完整拆卸下來。

在飲食標準上極為講究，奉行嚴格的美食主義——面對普通乾飼料一律採取絕食抗議，唯有手撕原肉、香濃起司條與街坊鄰居進貢的特製點心，才能獲得牠的青睞。`;

const bioChars = Array.from(bioText);

const onCharTransitionEnd = (index: number) => {
  if (index === bioChars.length - 1) {
    isAnimationDone.value = true;
  }
};
</script>

<style scoped>
.about-section {
  .theContainer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: center;

    @media (min-width: 1024px) {
      grid-template-columns: 440px 1fr;
      gap: 64px;
    }

    .left {
      .photo-frame {
        position: relative;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid var(--ui-border);
        background-color: var(--ui-bg-elevated);
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.15);

        .avatar-img {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        &:hover .avatar-img {
          transform: scale(1.03);
        }

        .photo-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background-color: var(--ui-bg-elevated);
          border-top: 1px solid var(--ui-border);

          .caption-name {
            font-size: 15px;
            font-weight: 700;
            color: var(--ui-text-highlighted);
          }

          .caption-role {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 11px;
            color: var(--ui-text-dimmed);
          }
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .header-group {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--ui-border);

        .badge-profile {
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
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 16px;
            font-weight: 500;
            color: var(--ui-text-dimmed);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin: 0;
          }
        }
      }

      .bio-content {
        font-family: inherit;
        white-space: pre-line;
        font-size: 15px;
        line-height: 1.85;
        color: var(--ui-text-muted);
        margin: 0;

        .bio-char {
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        &.is-visible {
          .bio-char {
            opacity: 1;
          }
        }
      }

      .highlight-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding-top: 8px;
      }
    }
  }
}
</style>
