<template>
  <div class="theme-switcher">
    <UColorModeButton color="neutral" variant="ghost" />

    <UPopover :content="{ align: 'end', sideOffset: 8 }">
      <UButton
        icon="i-lucide-palette"
        color="neutral"
        variant="ghost"
        aria-label="切換主題色"
      />

      <template #content>
        <div class="theme-panel">
          <span class="panel-title">主題色</span>
          <button
            v-for="(item, id) in themes"
            :key="id"
            type="button"
            class="theme-option"
            :class="{ 'is-active': themeId === id }"
            @click="setTheme(id)"
          >
            <span
              class="swatch"
              :style="{ backgroundColor: item.swatch.background }"
            >
              <span :style="{ backgroundColor: item.swatch.primary }" />
              <span :style="{ backgroundColor: item.swatch.secondary }" />
            </span>
            <span class="option-label">{{ item.label }}</span>
            <UIcon
              v-if="themeId === id"
              name="i-lucide-check"
              class="check-icon"
            />
          </button>
        </div>
      </template>
    </UPopover>
  </div>
</template>

<script setup lang="ts">
const { themes, themeId, setTheme } = useSiteTheme();
</script>

<style scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  gap: 2px;
}

.theme-panel {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 200px;
  padding: 10px;

  .panel-title {
    padding: 2px 8px 6px;
    font-size: 12px;
    font-weight: 600;
    color: var(--ui-text-dimmed);
  }

  .theme-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    border: none;
    border-radius: calc(var(--ui-radius) * 1.5);
    background: transparent;
    color: var(--ui-text);
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s ease;

    .swatch {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      padding: 4px;
      border-radius: 9999px;
      border: 1px solid var(--ui-border);

      span {
        width: 14px;
        height: 14px;
        border-radius: 50%;
      }
    }

    .option-label {
      flex: 1;
    }

    .check-icon {
      width: 16px;
      height: 16px;
      color: var(--ui-primary);
    }

    &:hover {
      background-color: var(--ui-bg-elevated);
    }

    &.is-active {
      font-weight: 600;
      color: var(--ui-text-highlighted);
    }
  }
}
</style>
