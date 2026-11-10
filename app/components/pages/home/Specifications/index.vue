<template>
  <Container class="spec-section">
    <div class="section-header">
      <div class="badge-spec">
        <span class="status-dot" />
        Hardware Architecture & Anatomy
      </div>
      <div class="title-row">
        <h2 class="main-title">硬體規格與構造剖析</h2>
        <h3 class="sub-title">Technical Specifications — LUPA Pro Max</h3>
      </div>
      <p class="section-desc">
        採用高規格西伯利亞狼族流線型骨架，搭載選擇性聲學過濾雷達與高扭力四足驅動系統
      </p>
    </div>

    <!-- 構造剖析圖 (Callout Diagram) -->
    <div class="diagram-wrapper">
      <!-- 左側標註欄 (01 ~ 03) -->
      <div class="callout-col left-col">
        <div
          v-for="item in leftSpecs"
          :key="item.id"
          class="callout-box"
          :class="{ 'is-active': activeId === item.id }"
          @mouseenter="activeId = item.id"
          @mouseleave="activeId = null"
        >
          <div class="callout-header">
            <span class="spec-code">PART {{ item.id }}</span>
            <h4 class="spec-title">{{ item.title }}</h4>
          </div>
          <p class="spec-desc">{{ item.desc }}</p>
          <span class="spec-metric">{{ item.metric }}</span>
        </div>
      </div>

      <!-- 中央：極簡精準線條哈士奇 SVG + 標註引線 -->
      <div class="blueprint-stage">
        <svg
          viewBox="0 0 800 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="husky-svg"
        >
          <defs>
            <!-- 科技藍圖背景格線 -->
            <pattern
              id="blueprint-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                stroke-width="0.7"
                class="grid-line"
              />
            </pattern>

            <!-- 柔和光暈濾鏡 -->
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- 背景座標網格與測量尺規 -->
          <rect
            x="40"
            y="40"
            width="720"
            height="540"
            rx="16"
            fill="url(#blueprint-grid)"
            class="grid-bg"
          />
          <line x1="90" y1="530" x2="710" y2="530" class="ground-axis" />
          <text x="95" y="550" class="blueprint-label">AXIS: LATERAL PROFILE // SCALE 1:10</text>
          <text x="585" y="550" class="blueprint-label">MODEL: HUSKY-2025-LUPA</text>

          <!-- ==================== 哈士奇極簡側面精準輪廓 ==================== -->
          <g class="husky-figure">
            <!-- 後側陰影腳（右後腿 & 右前腿，營造立體景深） -->
            <path
              d="M 520 355 L 542 425 L 526 512 L 502 528 L 485 528 L 492 512 L 508 428 L 485 365"
              class="husky-limb-back"
            />
            <path
              d="M 278 368 L 288 445 L 285 512 L 265 528 L 248 528 L 255 512 L 260 445 L 248 375"
              class="husky-limb-back"
            />

            <!-- 主體輪廓：從鼻尖 -> 額段(Stop) -> 立耳 -> 頸背厚毛 -> 背線 -> 鐮刀狀蓬鬆大尾 -> 臀腿 -> 腹部上收 -> 深胸 -> 前肢 -> 下顎 -->
            <path
              d="
                M 118 202
                C 115 196, 120 190, 128 190
                L 168 184
                C 178 182, 185 168, 196 156
                L 214 148
                L 222 86
                C 224 78, 232 78, 236 85
                L 262 138
                C 278 148, 295 168, 314 196
                C 332 220, 355 236, 392 238
                L 525 238
                C 555 238, 578 242, 598 250
                C 618 210, 642 152, 622 108
                C 665 112, 706 155, 704 218
                C 702 272, 668 315, 616 302
                C 618 332, 605 368, 582 402
                L 596 435
                L 572 514
                L 548 528
                L 526 528
                L 535 512
                L 556 438
                L 526 402
                C 510 385, 498 362, 488 345
                C 442 342, 398 362, 342 372
                C 320 375, 304 374, 292 370
                L 292 448
                L 286 514
                L 266 528
                L 244 528
                L 252 512
                L 258 448
                L 248 362
                C 218 344, 198 312, 195 275
                C 192 252, 196 234, 186 226
                L 134 222
                C 122 220, 118 210, 118 202
                Z
              "
              class="husky-body-main"
            />

            <!-- 第二隻立耳（遠端左耳，增加立體感） -->
            <path
              d="M 204 148 L 204 94 C 205 86, 212 86, 216 92 L 222 115"
              class="husky-ear-back"
            />
            <!-- 耳廓內側幾何折線 -->
            <path
              d="M 228 98 L 223 142 L 252 138 Z"
              class="husky-inner-detail"
            />

            <!-- 哈士奇經典臉部面具線與「假眉毛」標記 -->
            <path
              d="M 192 170 C 206 164, 218 168, 224 178 C 216 192, 202 206, 186 226"
              class="husky-mask-line"
            />
            <!-- 招牌假眉毛 (Fake Eyebrow) -->
            <path
              d="M 186 166 Q 196 159 207 165"
              class="husky-eyebrow"
            />
            <!-- 杏仁形銳利雙眼 -->
            <polygon
              points="186,175 201,172 197,180"
              class="husky-eye"
            />
            <!-- 鼻頭 -->
            <polygon
              points="118,200 128,190 130,202"
              class="husky-nose"
            />
            <!-- 嘴角微笑線 -->
            <path
              d="M 126 212 L 166 210 C 174 210, 180 206, 184 202"
              class="husky-mouth"
            />

            <!-- 頸部蓬鬆圍脖毛流折線 (Neck Ruff) -->
            <path
              d="M 255 162 L 242 208 L 266 202 L 252 252 L 282 244 L 268 292"
              class="husky-fur-line"
            />
            <!-- 胸前與肩胛肌肉結構幾何線 -->
            <path
              d="M 248 362 C 266 335, 282 302, 286 268"
              class="husky-structure-line"
            />
            <!-- 雙色尾巴分界毛流線 -->
            <path
              d="M 610 258 C 645 215, 658 168, 632 118"
              class="husky-tail-marking"
            />
          </g>

          <!-- ==================== 標註引線 (Leader Lines) 與定位錨點 ==================== -->
          <g class="callouts-layer">
            <template v-for="item in allSpecs" :key="item.id">
              <!-- 折線路徑 -->
              <polyline
                :points="item.points"
                class="leader-line"
                :class="{ 'is-active': activeId === item.id }"
              />
              <!-- 終點端點小圓點 -->
              <circle
                :cx="item.endX"
                :cy="item.endY"
                r="3.5"
                class="leader-end-dot"
                :class="{ 'is-active': activeId === item.id }"
              />
              <!-- 狗狗部位上的呼吸外圈與核心錨點 -->
              <g
                class="hotspot-group"
                :class="{ 'is-active': activeId === item.id }"
                @mouseenter="activeId = item.id"
                @mouseleave="activeId = null"
              >
                <circle :cx="item.targetX" :cy="item.targetY" r="12" class="hotspot-pulse" />
                <circle :cx="item.targetX" :cy="item.targetY" r="5" class="hotspot-core" />
              </g>
            </template>
          </g>
        </svg>
      </div>

      <!-- 右側標註欄 (04 ~ 06) -->
      <div class="callout-col right-col">
        <div
          v-for="item in rightSpecs"
          :key="item.id"
          class="callout-box"
          :class="{ 'is-active': activeId === item.id }"
          @mouseenter="activeId = item.id"
          @mouseleave="activeId = null"
        >
          <div class="callout-header">
            <span class="spec-code">PART {{ item.id }}</span>
            <h4 class="spec-title">{{ item.title }}</h4>
          </div>
          <p class="spec-desc">{{ item.desc }}</p>
          <span class="spec-metric">{{ item.metric }}</span>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
type SpecCallout = {
  id: string;
  title: string;
  desc: string;
  metric: string;
  targetX: number;
  targetY: number;
  endX: number;
  endY: number;
  points: string;
};

const activeId = ref<string | null>(null);

const leftSpecs: SpecCallout[] = [
  {
    id: "01",
    title: "選擇性聲學過濾立耳",
    desc: "對「洗澡、不准動」具備 100% 物理降噪屏蔽；但對 50 公尺外撕開肉乾包裝袋之高頻聲波擁有毫秒級鎖定能力。",
    metric: "靈敏度：肉乾袋 99.9% / 訓話 0%",
    targetX: 234,
    targetY: 96,
    endX: 20,
    endY: 96,
    points: "234,96 110,96 20,96",
  },
  {
    id: "02",
    title: "高戲劇張力假眉毛與雙眸",
    desc: "自幼長出的招牌雙弧線假眉毛（亦稱黑眼圈），搭配無辜眼神可在闖禍後瞬間瓦解人類 80% 的怒氣值。",
    metric: "公關防禦力：MAX 級豁免光環",
    targetX: 196,
    targetY: 168,
    endX: 20,
    endY: 295,
    points: "196,168 115,295 20,295",
  },
  {
    id: "03",
    title: "液壓級精密粉碎咬合顎",
    desc: "專為拆解拖鞋、書籍、浴廁掛鏡與羽毛球而生，同時內建挑食雷達，遇普通乾飼料會自動拒絕開啟。",
    metric: "最大咬合對象：全新未拆封監視器",
    targetX: 145,
    targetY: 212,
    endX: 20,
    endY: 480,
    points: "145,212 95,480 20,480",
  },
];

const rightSpecs: SpecCallout[] = [
  {
    id: "04",
    title: "高情緒轉速螺旋槳尾翼",
    desc: "採用黑白雙色高蓬鬆毛量設計，進入全家與藥局巡邏時會自動切換至高頻率搖擺模式，創造極佳公關效益。",
    metric: "擺動頻率：見肉乾可達 300 RPM",
    targetX: 675,
    targetY: 175,
    endX: 780,
    endY: 105,
    points: "675,175 725,105 780,105",
  },
  {
    id: "05",
    title: "飽讀詩書大容量儲能胃袋",
    desc: "除了消化手作肉乾、起司條、鴨脖子與小饅頭外，亦曾物理性收納多本實體書籍與奇亞籽，墨水含量極高。",
    metric: "燃料需求：100% 純肉與特約點心",
    targetX: 425,
    targetY: 315,
    endX: 780,
    endY: 300,
    points: "425,315 640,300 780,300",
  },
  {
    id: "06",
    title: "全地形四足暴衝傳動爪",
    desc: "配備高抓地力肉球與精密前爪機構，兼具公園草皮高速巡航、追逐家貓以及反鎖浴廁門之多用途機能。",
    metric: "驅動模式：全時四輪暴衝 AWD",
    targetX: 272,
    targetY: 515,
    endX: 780,
    endY: 495,
    points: "272,515 620,495 780,495",
  },
];

const allSpecs = computed(() => [...leftSpecs, ...rightSpecs]);
</script>

<style scoped>
.spec-section {
  .section-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;

    .badge-spec {
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

  .diagram-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    align-items: center;

    @media (min-width: 1024px) {
      grid-template-columns: 260px 1fr 260px;
      gap: 16px;
    }

    .callout-col {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .callout-box {
        padding: 16px;
        border-radius: 12px;
        background-color: var(--ui-bg);
        border: 1px solid var(--ui-border);
        transition:
          transform 0.25s ease,
          border-color 0.25s ease,
          box-shadow 0.25s ease;
        cursor: pointer;

        &:hover,
        &.is-active {
          transform: translateY(-2px);
          border-color: var(--ui-primary);
          box-shadow: 0 8px 24px -8px color-mix(in srgb, var(--ui-primary) 30%, transparent);

          .spec-code {
            background-color: var(--ui-primary);
            color: var(--ui-bg);
          }
        }

        .callout-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;

          .spec-code {
            font-family:
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 11px;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 4px;
            color: var(--ui-primary);
            background-color: color-mix(in srgb, var(--ui-primary) 15%, transparent);
            transition: all 0.2s ease;
          }

          .spec-title {
            font-size: 15px;
            font-weight: 700;
            color: var(--ui-text-highlighted);
            margin: 0;
          }
        }

        .spec-desc {
          font-size: 13px;
          line-height: 1.65;
          color: var(--ui-text-muted);
          margin: 0 0 10px 0;
        }

        .spec-metric {
          display: block;
          padding-top: 8px;
          border-top: 1px dashed var(--ui-border);
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11px;
          font-weight: 600;
          color: var(--ui-primary);
        }
      }
    }

    .blueprint-stage {
      width: 100%;
      overflow: hidden;

      .husky-svg {
        width: 100%;
        height: auto;
        display: block;

        .grid-bg {
          color: var(--ui-border);
          opacity: 0.45;
        }

        .ground-axis {
          stroke: var(--ui-border);
          stroke-width: 1.5;
          stroke-dasharray: 6 6;
        }

        .blueprint-label {
          fill: var(--ui-text-dimmed);
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
        }

        /* 哈士奇本體線條樣式 */
        .husky-figure {
          .husky-limb-back {
            fill: color-mix(in srgb, var(--ui-text-muted) 12%, transparent);
            stroke: var(--ui-text-muted);
            stroke-width: 2;
            stroke-linejoin: round;
            stroke-linecap: round;
          }

          .husky-ear-back {
            fill: color-mix(in srgb, var(--ui-text-muted) 15%, transparent);
            stroke: var(--ui-text-muted);
            stroke-width: 2.2;
            stroke-linejoin: round;
          }

          .husky-body-main {
            fill: color-mix(in srgb, var(--ui-bg-elevated) 85%, transparent);
            stroke: var(--ui-text-highlighted);
            stroke-width: 3;
            stroke-linejoin: round;
            stroke-linecap: round;
          }

          .husky-inner-detail {
            fill: color-mix(in srgb, var(--ui-primary) 15%, transparent);
            stroke: var(--ui-text-muted);
            stroke-width: 1.8;
            stroke-linejoin: round;
          }

          .husky-mask-line,
          .husky-fur-line,
          .husky-structure-line,
          .husky-tail-marking {
            fill: none;
            stroke: var(--ui-text-muted);
            stroke-width: 1.8;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 2 0;
          }

          .husky-eyebrow {
            fill: none;
            stroke: var(--ui-primary);
            stroke-width: 3.2;
            stroke-linecap: round;
          }

          .husky-eye {
            fill: var(--ui-primary);
          }

          .husky-nose {
            fill: var(--ui-text-highlighted);
          }

          .husky-mouth {
            fill: none;
            stroke: var(--ui-text-highlighted);
            stroke-width: 2;
            stroke-linecap: round;
          }
        }

        /* 引線與錨點樣式 */
        .callouts-layer {
          .leader-line {
            fill: none;
            stroke: var(--ui-border-accented, var(--ui-text-dimmed));
            stroke-width: 1.5;
            stroke-dasharray: 4 4;
            transition: all 0.25s ease;

            &.is-active {
              stroke: var(--ui-primary);
              stroke-width: 2.2;
              stroke-dasharray: none;
            }
          }

          .leader-end-dot {
            fill: var(--ui-text-dimmed);
            transition: all 0.25s ease;

            &.is-active {
              fill: var(--ui-primary);
              r: 5;
            }
          }

          .hotspot-group {
            cursor: pointer;

            .hotspot-pulse {
              fill: color-mix(in srgb, var(--ui-primary) 22%, transparent);
              stroke: var(--ui-primary);
              stroke-width: 1;
              opacity: 0.6;
              transition: all 0.25s ease;
            }

            .hotspot-core {
              fill: var(--ui-primary);
              transition: all 0.25s ease;
            }

            &:hover,
            &.is-active {
              .hotspot-pulse {
                r: 16;
                opacity: 1;
                fill: color-mix(in srgb, var(--ui-primary) 35%, transparent);
              }

              .hotspot-core {
                r: 6.5;
              }
            }
          }
        }
      }
    }
  }
}
</style>
