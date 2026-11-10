<template>
  <Container class="demolition-section">
    <div class="section-wrapper">
      <!-- 頂部標題區 -->
      <div class="up">
        <div class="badge-record">
          <span class="status-dot" />
          Project Portfolio & Case Studies
        </div>
        <div class="title-group">
          <h2 class="main-title">哈士奇的驕傲!!</h2>
          <h3 class="sub-title">拆家紀錄 (Demolition Archives)</h3>
        </div>
        <p class="section-desc">
          點擊各專案卡片可檢視高解析度現場存證照片與完整拆解清單
        </p>
      </div>

      <!-- 底部紀錄卡片網格 -->
      <div class="down">
        <UModal
          v-for="({ date, items, img }, index) in demolitionRecords"
          :key="index"
          :title="`現場存證紀錄 — ${formatDate(date)}`"
          :description="`共計拆解 ${items.length} 項標的物`"
        >
          <!-- 觸發器：整張卡片可點擊開啟 Modal -->
          <UCard
            :ui="{ body: 'p-0 sm:p-0 flex flex-col h-full overflow-hidden' }"
            class="record-card"
          >
            <div class="img-wrapper">
              <img :src="img" :alt="`拆家紀錄 ${date}`" class="record-img" >
              <div class="img-overlay">
                <span class="zoom-hint">
                  <UIcon name="i-lucide-zoom-in" class="zoom-icon" />
                  點擊放大存證
                </span>
              </div>
              <span class="case-badge">CASE #0{{ index + 1 }}</span>
            </div>

            <div class="card-content">
              <div class="date-row">
                <span class="date-label">執行日期</span>
                <span class="date-value">{{ formatDate(date) }}</span>
              </div>

              <div class="items-section">
                <span class="items-title"
                  >受災標的清單 ({{ items.length }})</span
                >
                <ul class="items-list">
                  <li v-for="(item, i) in items" :key="i" class="item-row">
                    <span class="item-bullet" />
                    <span class="item-name">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </UCard>

          <!-- Modal 彈窗內容 -->
          <template #body>
            <div class="modal-body-content">
              <img :src="img" :alt="`拆家紀錄 ${date}`" class="modal-img" >
              <div class="modal-meta">
                <span class="modal-meta-label">受災標的清單：</span>
                <ul class="modal-list">
                  <li
                    v-for="(item, i) in items"
                    :key="i"
                    class="modal-list-item"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </UModal>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
const baseURL = useRuntimeConfig().app.baseURL;

type DemolitionRecord = {
  date: string;
  items: string[];
  img: string;
};

const formatDate = (raw: string) => {
  if (raw.length !== 8) return raw;
  return `${raw.slice(0, 4)}.${raw.slice(4, 6)}.${raw.slice(6, 8)}`;
};

const demolitionRecords: DemolitionRecord[] = [
  {
    date: "20260209",
    items: ["兩包奇亞籽", "涼拖鞋", "衛生紙", "襪子"],
    img: `${baseURL}img/demolitionRecord/20260209.webp`,
  },
  {
    date: "20260427",
    items: ["公仔", "發泡地墊", "布鞋"],
    img: `${baseURL}img/demolitionRecord/20260427.webp`,
  },
  {
    date: "20260505",
    items: ["清潔海綿", "衛生紙", "涼拖鞋", "棉繩"],
    img: `${baseURL}img/demolitionRecord/20260505.webp`,
  },
  {
    date: "20260513",
    items: ["未開封的監視器", "書", "筆記本", "包包", "布鞋", "襪子"],
    img: `${baseURL}img/demolitionRecord/20260513.webp`,
  },
];
</script>

<style scoped>
.demolition-section {
  width: 100%;

  .section-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .up {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .badge-record {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        width: fit-content;
        padding: 4px 12px;
        border-radius: 9999px;
        font-size: 12px;
        font-weight: 500;
        background-color: var(--ui-bg);
        color: var(--ui-text);
        border: 1px solid var(--ui-border);

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--ui-primary);
        }
      }

      .title-group {
        display: flex;
        align-items: baseline;
        gap: 14px;
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
          font-size: 16px;
          font-weight: 500;
          color: var(--ui-secondary);
          margin: 0;
        }
      }

      .section-desc {
        font-size: 14px;
        color: var(--ui-text-dimmed);
        margin: 0;
      }
    }

    .down {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
      }

      .record-card {
        cursor: pointer;
        transition:
          transform 0.25s ease,
          box-shadow 0.25s ease;

        &:hover {
          transform: translateY(-4px);

          .img-wrapper {
            .record-img {
              transform: scale(1.06);
            }

            .img-overlay {
              opacity: 1;
            }
          }
        }

        .img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background-color: var(--ui-bg);
          border-bottom: 1px solid var(--ui-border);

          .record-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.4s ease;
          }

          .img-overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.45);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.25s ease;

            .zoom-hint {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              padding: 6px 12px;
              border-radius: 9999px;
              font-size: 12px;
              font-weight: 600;
              color: #ffffff;
              background-color: rgba(0, 0, 0, 0.65);
              border: 1px solid rgba(255, 255, 255, 0.25);
              backdrop-filter: blur(4px);

              .zoom-icon {
                width: 15px;
                height: 15px;
              }
            }
          }

          .case-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 3px 8px;
            border-radius: 6px;
            font-family:
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.05em;
            color: #ffffff;
            background-color: rgba(0, 0, 0, 0.65);
            backdrop-filter: blur(4px);
          }
        }

        .card-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;

          .date-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--ui-border);

            .date-label {
              font-size: 12px;
              color: var(--ui-text-dimmed);
            }

            .date-value {
              font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
              font-size: 13px;
              font-weight: 700;
              color: var(--ui-text-highlighted);
            }
          }

          .items-section {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .items-title {
              font-size: 12px;
              font-weight: 600;
              color: var(--ui-text-muted);
            }

            .items-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 6px;

              .item-row {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 13px;
                line-height: 1.4;
                color: var(--ui-text);

                .item-bullet {
                  width: 5px;
                  height: 5px;
                  border-radius: 50%;
                  background-color: var(--ui-text-dimmed);
                  flex-shrink: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}

.modal-body-content {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .modal-img {
    width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 8px;
    background-color: var(--ui-bg-elevated);
  }

  .modal-meta {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .modal-meta-label {
      font-size: 13px;
      font-weight: 600;
      color: var(--ui-text-muted);
    }

    .modal-list {
      margin: 0;
      padding-left: 18px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 6px 16px;

      .modal-list-item {
        font-size: 13px;
        color: var(--ui-text);
      }
    }
  }
}
</style>
