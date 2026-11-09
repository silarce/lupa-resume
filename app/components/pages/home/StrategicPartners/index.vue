<template>
  <Container class="partners-section">
    <div class="header-group">
      <div class="badge-profile">
        <span class="status-dot" />
        Strategic Alliance
      </div>
      <div class="title-row">
        <h2 class="main-title">戰略合作夥伴</h2>
        <h3 class="sub-title">Strategic Partners</h3>
      </div>
    </div>

    <div class="partner-grid">
      <!-- 標準貴賓：全身跑步 -->
      <div class="partner-card">
        <div class="stage">
          <svg
            class="poodle"
            viewBox="0 0 320 220"
            role="img"
            aria-label="奔跑中的標準貴賓犬"
          >
            <g class="speed-lines">
              <line x1="20" y1="95" x2="60" y2="95" />
              <line x1="35" y1="120" x2="70" y2="120" />
              <line x1="15" y1="145" x2="50" y2="145" />
            </g>

            <g class="ground">
              <line x1="10" y1="196" x2="310" y2="196" />
            </g>

            <g class="poodle-body">
              <!-- 後腿（遠側） -->
              <g class="leg leg-back leg-far">
                <line x1="118" y1="118" x2="112" y2="176" />
                <circle cx="112" cy="178" r="8" class="fluff" />
              </g>
              <!-- 前腿（遠側） -->
              <g class="leg leg-front leg-far">
                <line x1="204" y1="124" x2="210" y2="176" />
                <circle cx="210" cy="178" r="8" class="fluff" />
              </g>

              <!-- 尾巴 -->
              <g class="tail">
                <line x1="104" y1="104" x2="86" y2="78" />
                <circle cx="82" cy="72" r="10" class="fluff" />
              </g>

              <!-- 身體：細腰 + 胸前蓬毛 -->
              <path class="torso" d="M112 102 Q160 94 196 100 L196 126 Q160 122 116 124 Z" />
              <path class="neck" d="M196 96 L226 58 L246 66 L220 104 Z" />
              <circle cx="116" cy="112" r="15" class="fluff" />
              <circle cx="206" cy="110" r="24" class="fluff" />

              <!-- 頭 -->
              <g class="head">
                <path d="M248 52 Q270 56 286 64 Q290 72 282 74 L250 74 Z" class="muzzle" />
                <circle cx="287" cy="66" r="3" class="nose" />
                <circle cx="240" cy="52" r="18" class="fluff" />
                <circle cx="252" cy="60" r="2.2" class="eye" />
                <ellipse cx="234" cy="80" rx="9" ry="15" class="fluff ear" />
              </g>

              <!-- 前腿（近側） -->
              <g class="leg leg-front leg-near">
                <line x1="204" y1="124" x2="210" y2="176" />
                <circle cx="210" cy="178" r="8" class="fluff" />
              </g>
              <!-- 後腿（近側） -->
              <g class="leg leg-back leg-near">
                <line x1="118" y1="118" x2="112" y2="176" />
                <circle cx="112" cy="178" r="8" class="fluff" />
              </g>
            </g>
          </svg>
        </div>
        <div class="card-info">
          <div class="info-head">
            <span class="partner-name">標準貴賓</span>
            <span class="partner-tag">Standard Poodle</span>
          </div>
          <span class="partner-role">首席速度顧問 · 遊藝場保全亭駐點</span>
          <p class="partner-desc">
            擁有專業級造型蓬毛與極致敏捷的步伐，負責協助 Lupa 進行晚間巡邏的速度測試與路線規劃。
          </p>
        </div>
      </div>

      <!-- 黃金獵犬：臉部特寫流口水 -->
      <div class="partner-card">
        <div class="stage">
          <svg
            class="golden"
            viewBox="0 0 260 240"
            role="img"
            aria-label="流著口水的黃金獵犬"
          >
            <!-- 耳朵 -->
            <path
              class="ear ear-left"
              d="M80 66 C52 70 34 104 40 144 C44 164 64 164 70 146 C74 126 72 100 80 66 Z"
            />
            <path
              class="ear ear-right"
              d="M180 66 C208 70 226 104 220 144 C216 164 196 164 190 146 C186 126 188 100 180 66 Z"
            />

            <!-- 頭 -->
            <path
              class="face"
              d="M130 40 C180 40 200 76 200 118 C200 162 172 196 130 196 C88 196 60 162 60 118 C60 76 80 40 130 40 Z"
            />

            <!-- 眉毛 -->
            <path class="brow" d="M96 94 Q105 88 114 93" />
            <path class="brow" d="M146 93 Q155 88 164 94" />

            <!-- 眼睛 -->
            <g class="eyes">
              <ellipse cx="106" cy="110" rx="5" ry="6" class="eye" />
              <ellipse cx="154" cy="110" rx="5" ry="6" class="eye" />
            </g>

            <!-- 鼻子與嘴 -->
            <path class="nose" d="M117 136 Q130 128 143 136 Q141 148 130 151 Q119 148 117 136 Z" />
            <path class="mouth" d="M130 151 L130 159 M106 152 Q117 168 130 159 Q143 168 154 152" />

            <!-- 舌頭（喘氣） -->
            <g class="tongue">
              <path d="M119 161 Q117 190 130 194 Q143 190 141 161 Q130 166 119 161 Z" />
              <line x1="130" y1="167" x2="130" y2="183" />
            </g>

            <!-- 口水 -->
            <g class="drool drool-main" transform="translate(136 191)">
              <line class="strand" x1="0" y1="0" x2="0" y2="10" />
              <path class="drop" d="M0 4 C3 9 5 12 5 15 A5 5 0 0 1 -5 15 C-5 12 -3 9 0 4 Z" />
            </g>
            <g class="drool drool-side" transform="translate(107 156)">
              <line class="strand" x1="0" y1="0" x2="0" y2="8" />
              <path class="drop" d="M0 3 C2.4 7 4 9.5 4 12 A4 4 0 0 1 -4 12 C-4 9.5 -2.4 7 0 3 Z" />
            </g>

            <!-- 嚮往的肉乾 -->
            <g class="thought">
              <circle cx="206" cy="46" r="3" />
              <circle cx="216" cy="34" r="4.5" />
              <rect x="222" y="6" width="30" height="16" rx="5" />
            </g>
          </svg>
        </div>
        <div class="card-info">
          <div class="info-head">
            <span class="partner-name">黃金獵犬</span>
            <span class="partner-tag">Golden Retriever</span>
          </div>
          <span class="partner-role">首席美食評鑑顧問 · 遊藝場保全亭駐點</span>
          <p class="partner-desc">
            嗅覺靈敏、情感豐沛，對肉乾與起司條具備高度熱忱，常於保全大哥開啟零食袋前三秒即進入分泌模式。
          </p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts"></script>

<style scoped>
.partners-section {
  .header-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 20px;
    margin-bottom: 40px;
    border-bottom: 1px solid var(--ui-border);

    .badge-profile {
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
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 16px;
        font-weight: 500;
        color: var(--ui-text-dimmed);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 0;
      }
    }
  }

  .partner-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .partner-card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    overflow: hidden;
    background-color: var(--ui-bg);

    .stage {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 260px;
      padding: 16px;
      border-bottom: 1px solid var(--ui-border);
      background-image: radial-gradient(var(--ui-border) 1px, transparent 1px);
      background-size: 16px 16px;

      svg {
        width: 100%;
        max-width: 320px;
        height: 100%;
        overflow: visible;
      }
    }

    .card-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 20px 24px 24px;

      .info-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;

        .partner-name {
          font-size: 18px;
          font-weight: 700;
          color: var(--ui-text-highlighted);
        }

        .partner-tag {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
          color: var(--ui-text-dimmed);
        }
      }

      .partner-role {
        font-size: 13px;
        font-weight: 500;
        color: var(--ui-primary);
      }

      .partner-desc {
        font-size: 14px;
        line-height: 1.75;
        color: var(--ui-text-muted);
        margin: 0;
      }
    }
  }

  /* ---------- 標準貴賓：跑步 ---------- */
  .poodle {
    fill: none;
    stroke: var(--ui-text-highlighted);
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;

    .fluff {
      fill: var(--ui-bg);
    }

    .torso,
    .neck,
    .muzzle {
      fill: var(--ui-bg);
    }

    .nose,
    .eye {
      fill: var(--ui-text-highlighted);
      stroke: none;
    }

    .ground line {
      stroke: var(--ui-border);
      stroke-dasharray: 14 10;
      animation: ground-move 0.5s linear infinite;
    }

    .speed-lines line {
      stroke: var(--ui-primary);
      stroke-width: 2;
      animation: speed-line 0.6s linear infinite;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }

    .poodle-body {
      animation: body-bob 0.5s ease-in-out infinite;
    }

    .leg {
      transform-box: view-box;
    }

    .leg-front {
      transform-origin: 204px 124px;
    }

    .leg-back {
      transform-origin: 118px 118px;
    }

    .leg-far {
      opacity: 0.45;
    }

    .leg {
      animation: leg-swing 0.5s ease-in-out infinite;
    }

    /* 負延遲讓各腿錯開半個週期，形成交替步伐 */
    .leg-front.leg-far,
    .leg-back.leg-near {
      animation-delay: -0.25s;
    }

    .tail {
      transform-box: view-box;
      transform-origin: 104px 104px;
      animation: tail-wag 0.25s ease-in-out infinite alternate;
    }

    .ear {
      transform-box: fill-box;
      transform-origin: 50% 0;
      animation: ear-flap 0.5s ease-in-out infinite;
    }
  }

  /* ---------- 黃金獵犬：流口水 ---------- */
  .golden {
    fill: none;
    stroke: var(--ui-text-highlighted);
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;

    .face {
      fill: var(--ui-bg);
    }

    .ear {
      fill: var(--ui-bg);
      transform-box: fill-box;
      transform-origin: 50% 0;
      animation: ear-sway 3s ease-in-out infinite;
    }

    .ear-right {
      animation-direction: reverse;
    }

    .brow {
      stroke-width: 2;
    }

    .eyes {
      transform-box: fill-box;
      transform-origin: 50% 50%;
      animation: blink 4s ease-in-out infinite;
    }

    .eye,
    .nose {
      fill: var(--ui-text-highlighted);
      stroke: none;
    }

    .tongue {
      transform-box: fill-box;
      transform-origin: 50% 0;
      animation: pant 0.4s ease-in-out infinite alternate;

      path {
        fill: var(--ui-bg);
      }

      line {
        stroke-width: 1.8;
      }
    }

    .drool {
      .strand {
        stroke: var(--ui-primary);
        stroke-width: 1.6;
        transform-box: fill-box;
        transform-origin: 50% 0;
        animation: strand-stretch 2.4s ease-in infinite;
      }

      .drop {
        fill: var(--ui-bg);
        stroke: var(--ui-primary);
        stroke-width: 1.4;
        animation: drop-fall 2.4s ease-in infinite;
      }
    }

    .drool-side {
      .strand,
      .drop {
        animation-delay: 1.1s;
        animation-duration: 3s;
      }
    }

    .thought {
      stroke: var(--ui-text-dimmed);
      stroke-width: 1.8;
      animation: thought-float 2.4s ease-in-out infinite;

      rect {
        fill: var(--ui-bg);
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .poodle *,
    .golden * {
      animation: none !important;
    }
  }
}

@keyframes body-bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes leg-swing {
  0%,
  100% {
    transform: rotate(32deg);
  }
  50% {
    transform: rotate(-32deg);
  }
}

@keyframes tail-wag {
  from {
    transform: rotate(-10deg);
  }
  to {
    transform: rotate(12deg);
  }
}

@keyframes ear-flap {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(22deg);
  }
}

@keyframes ground-move {
  to {
    stroke-dashoffset: 24;
  }
}

@keyframes speed-line {
  0% {
    transform: translateX(20px);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    transform: translateX(-30px);
    opacity: 0;
  }
}

@keyframes ear-sway {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(4deg);
  }
}

@keyframes blink {
  0%,
  92%,
  100% {
    transform: scaleY(1);
  }
  95% {
    transform: scaleY(0.1);
  }
}

@keyframes pant {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(1.08);
  }
}

@keyframes strand-stretch {
  0% {
    transform: scaleY(0.3);
    opacity: 1;
  }
  55% {
    transform: scaleY(1.6);
    opacity: 1;
  }
  60%,
  100% {
    transform: scaleY(0.3);
    opacity: 0.6;
  }
}

@keyframes drop-fall {
  0% {
    transform: translateY(0) scale(0.6);
    opacity: 1;
  }
  55% {
    transform: translateY(8px) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(46px) scale(1);
    opacity: 0;
  }
}

@keyframes thought-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
</style>
