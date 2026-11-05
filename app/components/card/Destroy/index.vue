<template>
  <UCard :ui="{ body: 'flex flex-col h-full p-4 sm:p-5' }" class="kpi-card">
    <!-- 頂部項目名稱與指示點 -->
    <div class="card-header">
      <span class="card-label">
        <slot name="label" />
      </span>
      <span class="status-dot" />
    </div>

    <!-- 中間統計數據 -->
    <div class="card-body">
      <div class="metric-wrapper">
        <CountUp
          :end-val="amount"
          :duration="2"
          :options="{ enableScrollSpy: true, scrollSpyOnce: true }"
          class="metric-amount"
        />
        <span class="metric-unit">
          <slot name="unit" />
        </span>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";

defineProps<{ amount: number }>();
</script>

<style scoped>
.kpi-card {
  height: 170px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    .status-dot {
      background-color: var(--ui-primary);
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .card-label {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0.05em;
      color: var(--ui-text-muted);
      text-transform: uppercase;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      background-color: var(--ui-text-dimmed);
      border-radius: 50%;
      transition: background-color 0.2s ease;
    }
  }

  .card-body {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .metric-wrapper {
      display: flex;
      align-items: baseline;
      justify-content: center;

      .metric-amount {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 48px;
        line-height: 1;
        font-weight: 800;
        letter-spacing: -0.03em;
        color: var(--ui-text-highlighted);
      }

      .metric-unit {
        margin-left: 6px;
        font-size: 14px;
        font-weight: 500;
        color: var(--ui-text-muted);
      }
    }
  }
}
</style>
