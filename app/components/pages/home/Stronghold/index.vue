<template>
  <Container class="stronghold-section">
    <div class="section-header">
      <div class="badge-patrol">
        <span class="status-dot" />
        Strategic Patrol Network
      </div>
      <h2 class="main-title">巡邏檢查站</h2>
      <p class="sub-title">四個核心戰略據點，供摸摸、投餵與駐點巡視，版圖持續擴張中</p>
    </div>

    <div class="stronghold-grid">
      <UCard
        v-for="({ title, code, desc, tags }, index) in Stronghold"
        :key="index"
        :ui="{ body: 'flex flex-col justify-between h-full p-6' }"
        class="stronghold-card"
      >
        <div class="card-top">
          <div class="card-header">
            <span class="station-code">{{ code }}</span>
            <h3 class="station-title">{{ title }}</h3>
          </div>
          <p class="station-desc">{{ desc }}</p>
        </div>

        <div class="tag-list">
          <UBadge
            v-for="(tag, tagIndex) in tags"
            :key="tagIndex"
            color="neutral"
            variant="subtle"
            size="sm"
            class="tag-item"
          >
            # {{ tag }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </Container>
</template>

<script setup lang="ts">
type StrongholdItem = {
  code: string;
  title: string;
  desc: string;
  tags: string[];
};

const Stronghold: StrongholdItem[] = [
  {
    code: "STATION 01",
    title: "轉角的 7-11",
    desc: "距離大本營最近的第一線冷氣補給站。擁有全街區最涼爽的開放式冰櫃與自動門冷風，是夏日散步途中調節體溫、趴地納涼並順便展示毛皮光澤的首選據點。",
    tags: ["冰櫃", "距離近", "夏日避暑"],
  },
  {
    code: "STATION 02",
    title: "遊藝場保全亭",
    desc: "五星級VIP高規格伙食補給站！每日中午與晚上固定時段精準投餵，從手作肉乾、濃郁起司條到酥脆鴨脖子應有盡有。此外更是重要社交樞紐，不時會有兩位狗朋友現身交流情報。",
    tags: ["投餵", "原肉", "最愛", "狗社交"],
  },
  {
    code: "STATION 03",
    title: "路口的全家",
    desc: "全體員工皆為高度親狗人士的核心公關據點。老闆愛狗、店員也愛狗，每天例行散步都必須進店串門子巡視一圈，在冷櫃旁享受雙手摸摸與熱情稱讚的尊榮禮遇。",
    tags: ["冷櫃", "玩伴", "串門子", "摸摸"],
  },
  {
    code: "STATION 04",
    title: "巷口藥局",
    desc: "近期成功開發的最新戰略據點！主打每日限量供應的香甜小饅頭，不論早、中、晚哪個班次經過都能獲得穩定投餵，目前已列入每日必訪的重點巡邏路線。",
    tags: ["投餵", "小饅頭", "最新據點"],
  },
];
</script>

<style scoped>
.stronghold-section {
  width: 100%;

  .section-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;

    .badge-patrol {
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

    .main-title {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--ui-text-highlighted);
      margin: 0;
    }

    .sub-title {
      font-size: 16px;
      color: var(--ui-text-muted);
      margin: 0;
    }
  }

  .stronghold-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .stronghold-card {
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-3px);
      }

      .card-top {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .card-header {
          display: flex;
          flex-direction: column;
          gap: 4px;

          .station-code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            color: var(--ui-primary);
          }

          .station-title {
            font-size: 20px;
            font-weight: 700;
            color: var(--ui-text-highlighted);
            margin: 0;
          }
        }

        .station-desc {
          font-size: 14px;
          line-height: 1.75;
          color: var(--ui-text-muted);
          margin: 0;
        }
      }

      .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 20px;
        padding-top: 16px;
        border-top: 1px solid var(--ui-border);

        .tag-item {
          font-weight: 500;
        }
      }
    }
  }
}
</style>
