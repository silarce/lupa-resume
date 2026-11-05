<template>
  <section class="achievement-section">
    <div class="achievement-layout">
      <!-- 左側：履歷標題與專業說明 -->
      <div class="profile-column">
        <div class="badge-kpi">
          <span class="pulsing-dot"/>
          Key Performance Indicators
        </div>

        <div class="title-group">
          <h2 class="main-title">標準的哈士奇</h2>
          <p class="sub-title">理所當然的專案交付與破壞成果</p>
        </div>

        <p class="description">
          具備高度專注的咬合力與拆解執行力，善於將各類生活用品分解至最小原子單位，並在無人看管環境下持續自動化推進專案指標。
        </p>

        <!-- 履歷特色 Metadata 欄位 -->
        <div class="meta-grid">
          <div class="meta-item">
            <span class="meta-label">專業年資1年</span>
            <span class="meta-value">全天候 24/7 在線</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">執行效率100%</span>
            <span class="meta-value">即時瞬斷響應</span>
          </div>
        </div>
      </div>

      <!-- 右側：數據指標卡片列表 -->
      <div class="metrics-column">
        <div class="metrics-header">
          <span class="metrics-title"
            >破壞成果與拆解指標 (Destruction Metrics)</span
          >
          <span class="metrics-summary"
            >累積總項目：{{ destroy.length }} 類</span
          >
        </div>

        <div class="card-grid">
          <CardDestroy
            v-for="({ label, amount, unit }, index) in destroy"
            :key="index"
            :amount="amount"
          >
            <template #label>{{ label }}</template>
            <template #unit>{{ unit }}</template>
          </CardDestroy>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type DestroyItem = {
  label: string;
  amount: number;
  unit: string;
};

const destroy: DestroyItem[] = [
  {
    label: "鞋子",
    amount: 2,
    unit: "雙",
  },
  {
    label: "襪子",
    amount: 11,
    unit: "隻",
  },
  {
    label: "書",
    amount: 5,
    unit: "本",
  },
  {
    label: "公仔",
    amount: 1,
    unit: "只",
  },
  {
    label: "被單",
    amount: 3,
    unit: "床",
  },
  {
    label: "浴室掛鏡",
    amount: 1,
    unit: "個",
  },
];
</script>

<style scoped>
.achievement-section {
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  .achievement-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: start;

    @media (min-width: 1024px) {
      grid-template-columns: 360px 1fr;
      gap: 64px;
    }

    /* 左側欄位 */
    .profile-column {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .badge-kpi {
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

        .pulsing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--ui-primary);
        }
      }

      .title-group {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .main-title {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--ui-text-highlighted);
          margin: 0;
        }

        .sub-title {
          font-size: 18px;
          font-weight: 500;
          color: var(--ui-text-muted);
          margin: 0;
        }
      }

      .description {
        font-size: 14px;
        line-height: 1.7;
        color: var(--ui-text-muted);
        margin: 0;
      }

      .meta-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        padding-top: 20px;
        border-top: 1px solid var(--ui-border);

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 4px;

          .meta-label {
            font-size: 12px;
            color: var(--ui-text-dimmed);
          }

          .meta-value {
            font-size: 13px;
            font-weight: 600;
            color: var(--ui-text-highlighted);
          }
        }
      }
    }

    /* 右側欄位 */
    .metrics-column {
      display: flex;
      flex-direction: column;

      .metrics-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 16px;
        margin-bottom: 24px;
        border-bottom: 1px solid var(--ui-border);

        .metrics-title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--ui-text-highlighted);
          text-transform: uppercase;
        }

        .metrics-summary {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
          color: var(--ui-text-dimmed);
        }
      }

      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 20px;
      }
    }
  }
}
</style>
