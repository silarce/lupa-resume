<template>
  <Container class="future-section">
    <div class="section-header">
      <div class="badge-roadmap">
        <span class="status-dot" />
        Strategic Roadmap & Vision
      </div>
      <div class="title-row">
        <h2 class="main-title">未來規劃</h2>
        <h3 class="sub-title">Future Outlook & Career Goals</h3>
      </div>
      <p class="section-desc">
        持續深化居家物理重組技術與社區巡邏版圖，朝全方位高階哈士奇領袖邁進
      </p>
    </div>

    <div class="future-grid">
      <UCard
        v-for="(
          { title, engTitle, subtitle, description, subDescs, tags }, index
        ) in futureItems"
        :key="index"
        :ui="{ body: 'flex flex-col justify-between h-full p-6 sm:p-8' }"
        class="future-card"
      >
        <div class="card-main">
          <div class="card-header">
            <div class="title-group">
              <span class="phase-label">PHASE 0{{ index + 1 }}</span>
              <div class="heading-row">
                <h3 class="item-title">{{ title }}</h3>
                <span class="item-eng-title">{{ engTitle }}</span>
              </div>
            </div>
            <h4 class="item-subtitle">{{ subtitle }}</h4>
          </div>

          <p class="item-description">{{ description }}</p>

          <div class="objectives-section">
            <span class="objectives-title">關鍵執行指標 (Key Objectives)</span>
            <ul class="objectives-list">
              <li
                v-for="(subDesc, subIndex) in subDescs"
                :key="subIndex"
                class="objective-item"
              >
                <span class="objective-bullet" />
                <span class="objective-text">{{ subDesc }}</span>
              </li>
            </ul>
          </div>
        </div>

        <ul class="tags-footer">
          <li v-for="(tag, tagIndex) in tags" :key="tagIndex" class="tag-pill">
            # {{ tag }}
          </li>
        </ul>
      </UCard>
    </div>
  </Container>
</template>

<script setup lang="ts">
type FutureItem = {
  title: string;
  engTitle: string;
  subtitle: string;
  description: string;
  subDescs: string[];
  tags: string[];
};

const futureItems: FutureItem[] = [
  {
    title: "未來願景",
    engTitle: "Future Vision",
    subtitle: "建構全天候零死角的肉乾供應鏈與無障礙拆解生態系",
    description:
      "致力於打破人類對「乖狗狗」的刻板框架，以純粹的哈士奇本能重新定義居家空間美學。期許在未來三年內，達成「散步不牽繩也能自動導航至各大肉乾據點」以及「把家裡每一雙拖鞋都改造成通風開口設計」的宏偉藍圖。",
    subDescs: [
      "推動主食全面去飼料化改革，將手撕雞胸肉、烘烤鴨脖與濃郁起司條納入每日法定基本薪資。",
      "擴大公園羽毛球與高階樹枝之戰略儲備，建立跨街區專屬藏寶庫。",
      "持續優化無辜眼神與飛機耳公關技巧，將拆家後的訓話時間縮短至 30 秒以內。",
    ],
    tags: ["全肉食主義", "空間解構美學", "羽毛球壟斷計畫", "免責聲明優化"],
  },
  {
    title: "職涯發展",
    engTitle: "Career Development",
    subtitle: "晉升跨街區首席巡邏總監與高難度密室拆解技術顧問",
    description:
      "在穩固現有四大超商與保全亭據點的基礎上，積極拓展鄰近里區之商業版圖。同步精進高階物理破壞工藝，從小型日用品升級至精密家電防護測試，並全面深化對家貓的日常戰略威懾力。",
    subDescs: [
      "開發第 5 與第 6 號戰略巡邏據點（鎖定街角肉舖與寵物美容店），實現早中晚三班制無縫投餵。",
      "研發「開門與開抽屜」進階前爪操作技術，突破浴廁反鎖限制，達成自主進出各房間之權限升級。",
      "完成與家貓的領土談判，爭取沙發正中央 80% 以上之永久午睡使用權。",
    ],
    tags: ["版圖擴張", "前爪開鎖工藝", "跨物種談判", "首席巡邏總監"],
  },
];
</script>

<style scoped>
.future-section {
  .section-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;

    .badge-roadmap {
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

  .future-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .future-card {
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;

      &:hover {
        transform: translateY(-3px);
      }

      .card-main {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .card-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--ui-border);

          .title-group {
            display: flex;
            flex-direction: column;
            gap: 4px;

            .phase-label {
              font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.08em;
              color: var(--ui-primary);
            }

            .heading-row {
              display: flex;
              align-items: baseline;
              gap: 10px;
              flex-wrap: wrap;

              .item-title {
                font-size: 24px;
                font-weight: 700;
                color: var(--ui-text-highlighted);
                margin: 0;
              }

              .item-eng-title {
                font-family:
                  ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                  monospace;
                font-size: 13px;
                font-weight: 500;
                color: var(--ui-text-dimmed);
                text-transform: uppercase;
                letter-spacing: 0.04em;
              }
            }
          }

          .item-subtitle {
            font-size: 15px;
            font-weight: 600;
            color: var(--ui-text);
            margin: 0;
            line-height: 1.5;
          }
        }

        .item-description {
          font-size: 14px;
          line-height: 1.8;
          color: var(--ui-text-muted);
          margin: 0;
          text-align: justify;
        }

        .objectives-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          border-radius: 10px;
          background-color: var(--ui-bg-elevated);
          border: 1px solid var(--ui-border);

          .objectives-title {
            font-family:
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 12px;
            font-weight: 600;
            color: var(--ui-text-highlighted);
            letter-spacing: 0.03em;
          }

          .objectives-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;

            .objective-item {
              display: flex;
              align-items: flex-start;
              gap: 10px;
              font-size: 13px;
              line-height: 1.6;
              color: var(--ui-text);

              .objective-bullet {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: var(--ui-primary);
                margin-top: 7px;
                flex-shrink: 0;
              }

              .objective-text {
                flex: 1;
              }
            }
          }
        }
      }

      .tags-footer {
        list-style: none;
        padding: 16px 0 0 0;
        margin: 24px 0 0 0;
        border-top: 1px solid var(--ui-border);
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .tag-pill {
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
          font-weight: 600;
          color: var(--ui-primary);
          padding: 4px 10px;
          border-radius: 6px;
          background-color: color-mix(in srgb, var(--ui-primary) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--ui-primary) 40%, transparent);
        }
      }
    }
  }
}
</style>
