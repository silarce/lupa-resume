<template>
  <Container class="experience-section">
    <div class="section-header">
      <div class="badge-career">
        <span class="status-dot" />
        Professional Experience & Education
      </div>
      <div class="title-row">
        <h2 class="main-title">學經歷</h2>
        <h3 class="sub-title">Career Progression</h3>
      </div>
      <p class="section-desc">
        從基層幼犬培育所到企業級室內破壞專家，具備完整的實戰歷練與職涯晉升軌跡
      </p>
    </div>

    <div class="experience-list">
      <Motion
        v-for="(
          { title, institution, startDate, endDate, description }, index
        ) in experiences"
        :key="index"
        class="experience-item"
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :in-view-options="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }"
      >
        <div class="left">
          <div class="period-badge">
            <span class="period-dot" :class="{ 'is-current': !endDate }" />
            <span>{{ startDate }} — {{ endDate || "PRESENT" }}</span>
          </div>
          <div class="role-title">{{ title }}</div>
          <div class="institution-name">{{ institution }}</div>
        </div>

        <div class="timeline-divider">
          <span class="timeline-node" :class="{ 'is-active': !endDate }" />
        </div>

        <div class="right">
          <p class="description-text">{{ description }}</p>
        </div>
      </Motion>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";

type Experience = {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
};

const experiences: Experience[] = [
  {
    title: "小奶狗（初階幼犬培育生）",
    institution: "XX犬舍",
    startDate: "2025-09",
    endDate: "2025-10",
    description:
      "主修液態營養高頻率攝取與全天候深度睡眠管理，奠定扎實的哈士奇體能基礎。在學期間積極參與同胎手足之無差別摔角與肢體碰撞實務演練，成功培育出不服輸的狼族鬥志與宏亮的嗷嗚嗓音，最終以優異的圓潤體態順利結業。",
  },
  {
    title: "小小狗（儲備賣萌與啃咬專員）",
    institution: "包吃包睡企業社",
    startDate: "2025-10",
    endDate: "2025-12",
    description:
      "正式入職家庭核心部門，負責每日定時定量清空飯碗及高強度午睡專案。同步展開初階齒力機能測試，針對人類腳趾、室內拖鞋及絨毛玩具進行全方位咬合耐受度評估，憑藉無辜眼神多次豁免紀律處分，為日後的大型拆解業務奠定深厚根基。",
  },
  {
    title: "拆家實習生（室內空間解構助理）",
    institution: "包吃包睡企業社",
    startDate: "2025-12",
    endDate: "2026-05",
    description:
      "晉升實務執行部門，將業務範疇由小型配件拓展至木質椅腳、發泡地墊與實體藏書之物理性粉碎工程。兼任跨物種公關測試員，定期對家貓發起高頻率追逐與單方面社交騷擾；同時建立社區四大核心據點的定點巡邏SOP，精準掌握各街角冷氣出風口與肉乾補給時段。",
  },
  {
    title: "拆家專家（首席空間重組與巡邏執行官）",
    institution: "包吃包睡企業社",
    startDate: "2026-05",
    endDate: "",
    description:
      "全面主導居家無人時段之自主拆解專案，具備獨立反鎖浴廁並完整卸除牆面掛鏡、拆毀全新未拆封監視器等高難度指標性戰績。現任社區特約定點巡邏長，維持每日對家貓的例行性精神壓制，並持續針對鞋類、織品與各式生活雜物進行高規格的去中心化物理重組。",
  },
];
</script>

<style scoped>
.experience-section {
  .section-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 48px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--ui-border);

    .badge-career {
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

  .experience-list {
    display: flex;
    flex-direction: column;
  }

  .experience-item {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 28px 0;
    border-bottom: 1px solid var(--ui-border);
    transition: background-color 0.2s ease;

    &:first-child {
      padding-top: 8px;
    }

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    @media (min-width: 768px) {
      grid-template-columns: 260px 32px 1fr;
      gap: 24px;
      padding: 32px 16px;
      border-radius: 12px;
      border-bottom: 1px solid var(--ui-border);

      &:hover {
        background-color: var(--ui-bg-elevated);
      }
    }

    .left {
      display: flex;
      flex-direction: column;
      gap: 6px;

      .period-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.04em;
        color: var(--ui-text-dimmed);
        margin-bottom: 2px;

        .period-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--ui-text-dimmed);

          &.is-current {
            background-color: var(--ui-primary);
            box-shadow: 0 0 0 3px
              color-mix(in srgb, var(--ui-primary) 20%, transparent);
          }
        }
      }

      .role-title {
        font-size: 18px;
        font-weight: 700;
        color: var(--ui-text-highlighted);
        line-height: 1.4;
      }

      .institution-name {
        font-size: 14px;
        font-weight: 500;
        color: var(--ui-primary);
      }
    }

    .timeline-divider {
      display: none;

      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          top: -32px;
          bottom: -32px;
          width: 1px;
          background-color: var(--ui-border);
        }

        .timeline-node {
          position: relative;
          z-index: 1;
          margin-top: 6px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--ui-bg);
          border: 2px solid var(--ui-border-accented, var(--ui-text-dimmed));

          &.is-active {
            border-color: var(--ui-primary);
            background-color: var(--ui-primary);
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      .description-text {
        font-size: 15px;
        line-height: 1.8;
        color: var(--ui-text-muted);
        margin: 0;
        text-align: justify;
      }
    }
  }
}
</style>
