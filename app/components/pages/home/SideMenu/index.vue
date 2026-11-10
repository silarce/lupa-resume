<template>
  <aside class="side-menu" aria-label="章節快速導覽">
    <Transition name="menu-panel">
      <nav v-if="isOpen" class="menu-panel">
        <div class="panel-header">
          <span class="panel-badge">QUICK NAV</span>
          <span class="panel-title">章節導覽</span>
        </div>

        <ul class="menu-list">
          <li v-for="(item, index) in sections" :key="item.id">
            <button
              type="button"
              class="menu-item"
              :class="{ 'is-active': activeId === item.id }"
              @click="scrollToSection(item.id)"
            >
              <span class="item-index">{{ String(index + 1).padStart(2, "0") }}</span>
              <UIcon :name="item.icon" class="item-icon" />
              <span class="item-label">{{ item.label }}</span>
            </button>
          </li>
        </ul>
      </nav>
    </Transition>

    <button
      type="button"
      class="burger-trigger"
      :class="{ 'is-open': isOpen }"
      :aria-expanded="isOpen"
      aria-label="切換章節選單"
      @click="isOpen = !isOpen"
    >
      <UIcon
        :name="isOpen ? 'i-lucide-x' : 'i-lucide-menu'"
        class="trigger-icon"
      />
    </button>
  </aside>
</template>

<script setup lang="ts">
type SectionItem = {
  id: string;
  label: string;
  icon: string;
};

const sections: SectionItem[] = [
  { id: "section-carousel", label: "焦點輪播", icon: "i-lucide-sparkles" },
  { id: "section-specifications", label: "硬體構造剖析", icon: "i-lucide-cpu" },
  { id: "section-about", label: "關於 Lupa", icon: "i-lucide-dog" },
  { id: "section-experience", label: "學經歷", icon: "i-lucide-briefcase" },
  { id: "section-achievement", label: "破壞戰績統計", icon: "i-lucide-flame" },
  { id: "section-demolition", label: "拆家紀錄存證", icon: "i-lucide-file-warning" },
  { id: "section-stronghold", label: "四大巡邏據點", icon: "i-lucide-map-pin" },
  { id: "section-timeline", label: "成長時間軸", icon: "i-lucide-history" },
  { id: "section-gallery", label: "生活照藝廊", icon: "i-lucide-images" },
  { id: "section-partners", label: "戰略合作夥伴", icon: "i-lucide-handshake" },
  { id: "section-future", label: "未來規劃", icon: "i-lucide-compass" },
  { id: "section-faq", label: "常見問題 FAQ", icon: "i-lucide-circle-help" },
  { id: "section-contact", label: "聯絡資訊", icon: "i-lucide-mail" },
];

const isOpen = ref(false);
const activeId = ref<string>(sections[0]!.id);

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  activeId.value = id;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  isOpen.value = false;
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id;
        }
      }
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0,
    },
  );

  for (const item of sections) {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<style scoped>
.side-menu {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  .menu-panel {
    width: 240px;
    max-height: min(70vh, 520px);
    overflow-y: auto;
    padding: 12px;
    border-radius: 16px;
    background-color: color-mix(in oklab, var(--ui-bg-elevated) 88%, transparent);
    backdrop-filter: blur(12px);
    border: 1px solid var(--ui-border);
    box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.35);

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 10px 10px;
      margin-bottom: 6px;
      border-bottom: 1px solid var(--ui-border);

      .panel-badge {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.08em;
        color: var(--ui-secondary);
      }

      .panel-title {
        font-size: 12px;
        font-weight: 600;
        color: var(--ui-text-dimmed);
      }
    }

    .menu-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;

      .menu-item {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border-radius: 10px;
        border: none;
        background: transparent;
        color: var(--ui-text-muted);
        font-size: 13px;
        font-weight: 500;
        text-align: left;
        cursor: pointer;
        transition:
          background-color 0.2s ease,
          color 0.2s ease,
          transform 0.2s ease;

        .item-index {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11px;
          color: var(--ui-text-dimmed);
        }

        .item-icon {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          color: var(--ui-text-dimmed);
          transition: color 0.2s ease;
        }

        .item-label {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        &:hover {
          background-color: var(--ui-bg);
          color: var(--ui-text-highlighted);
          transform: translateX(-2px);

          .item-icon {
            color: var(--ui-primary);
          }
        }

        &.is-active {
          background-color: color-mix(in oklab, var(--ui-primary) 14%, var(--ui-bg));
          color: var(--ui-text-highlighted);
          font-weight: 600;

          .item-index,
          .item-icon {
            color: var(--ui-primary);
          }
        }
      }
    }
  }

  .burger-trigger {
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--ui-bg-elevated);
    color: var(--ui-text-highlighted);
    border: 1px solid var(--ui-border);
    box-shadow: 0 10px 25px -6px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease;

    .trigger-icon {
      width: 22px;
      height: 22px;
      transition: transform 0.25s ease;
    }

    &:hover {
      transform: translateY(-2px);
      border-color: var(--ui-primary);
      color: var(--ui-primary);
    }

    &.is-open {
      background-color: var(--ui-primary);
      border-color: var(--ui-primary);
      color: var(--ui-bg);

      .trigger-icon {
        transform: rotate(90deg);
      }
    }
  }
}

.menu-panel-enter-active,
.menu-panel-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  transform-origin: bottom right;
}

.menu-panel-enter-from,
.menu-panel-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
}
</style>
