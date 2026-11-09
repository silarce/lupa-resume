<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp>
      <UHeader>
        <template #title> Lupa簡史 </template>
        <UNavigationMenu :items="navItem" />
        <template #right>
          <UIcon name="i-lucide-facebook" class="size-5" />
          <UIcon name="i-lucide-instagram" class="size-5" />
        </template>
      </UHeader>

      <UMain>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UMain>

      <UFooter class="lupa-footer">
        <template #left>
          <div class="footer-brand">
            <div class="brand-row">
              <UIcon name="i-lucide-paw-print" class="brand-icon" />
              <span class="brand-title">Lupa Heavy Industries &amp; Demolition Corp.</span>
            </div>
            <p class="copyright">
              © 2025–2026 Lupa 首席拆家與巡邏執行官辦公室 · All Treats Reserved.（保留一切肉乾所有權）
            </p>
            <p class="disclaimer">
              免責聲明：本履歷由人類奴才代為維護，任何因瀏覽本站而導致之拖鞋失蹤、書籍缺頁或肉乾短缺，本汪一概不負法律責任。
            </p>
          </div>
        </template>

        <template #right>
          <div class="status-badge">
            <span class="status-dot" />
            <span class="status-label">執勤狀態：</span>
            <span class="status-text">待命中 — 隨時接受原肉乾與起司條投餵</span>
          </div>
        </template>
      </UFooter>
    </UApp>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const navItem = ref<NavigationMenuItem[]>([
  { label: "HOME", icon: "i-lucide-paw-print", to: "/" },
  {
    label: "Github",
    icon: "akar-icons:github-fill",
    to: "https://github.com/silarce/lupa-resume",
  },
]);
</script>

<style scoped>
.lupa-footer {
  border-top: 1px solid var(--ui-border);
  background-color: var(--ui-bg);

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px 0;

    .brand-row {
      display: flex;
      align-items: center;
      gap: 8px;

      .brand-icon {
        width: 18px;
        height: 18px;
        color: var(--ui-primary);
      }

      .brand-title {
        font-size: 14px;
        font-weight: 700;
        color: var(--ui-text-highlighted);
        letter-spacing: 0.02em;
      }
    }

    .copyright {
      font-size: 13px;
      color: var(--ui-text-muted);
      margin: 0;
    }

    .disclaimer {
      font-size: 12px;
      color: var(--ui-text-dimmed);
      margin: 0;
    }
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 9999px;
    background-color: var(--ui-bg-elevated);
    border: 1px solid var(--ui-border);
    font-size: 13px;

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--ui-primary);
      box-shadow: 0 0 0 0 var(--ui-primary);
      animation: status-pulse 2s infinite;
    }

    .status-label {
      color: var(--ui-text-dimmed);
      font-weight: 500;
    }

    .status-text {
      color: var(--ui-text-highlighted);
      font-weight: 600;
    }
  }
}

@keyframes status-pulse {
  0% {
    box-shadow: 0 0 0 0 color-mix(in oklab, var(--ui-primary) 60%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}
</style>
