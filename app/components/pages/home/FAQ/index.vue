<template>
  <Container class="faq-section">
    <div class="header-group">
      <div class="badge-profile">
        <span class="status-dot" />
        Executive Due Diligence &amp; Q&amp;A
      </div>
      <div class="title-row">
        <h2 class="main-title">FAQ</h2>
        <h3 class="sub-title">Frequently Asked Questions</h3>
      </div>
      <p class="section-desc">
        針對企業主、人類室友與鄰里民眾最常提出的四大核心疑問，由 Lupa
        執行官辦公室統一發布官方澄清與技術說明。
      </p>
    </div>

    <div class="accordion-wrapper">
      <UAccordion
        :items="faqItems"
        type="multiple"
        :default-value="['0']"
        class="faq-accordion"
        :ui="{ header: 'accordion-header' }"
      >
        <template #body="{ item }">
          <div class="answer-content">
            {{ item.content }}
          </div>
        </template>
      </UAccordion>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const faqItems: AccordionItem[] = [
  {
    label: "Q1. Lupa 真的什麼都能拆嗎？",
    icon: "i-lucide-hammer",
    content:
      "這是一項嚴重的業界誤解。Lupa 始終恪守「絕不破壞大型家具」的最高職業道德底線——舉凡沙發、床架、衣櫃等核心不動產皆不在業務範圍內。本汪專攻的是「無人監管環境下的中小型物件物理重組」，實績涵蓋實體書籍（物理性飽讀詩書，肚子裡真有墨水）、未開封之家用監視器（反偵察預防性拆解）、涼拖鞋、公仔、發泡地墊與奇亞籽包裝；生涯巔峰代表作則是將自己反鎖於浴廁密室中，並憑一己之力將牆上的浴室掛鏡完整卸除。這不叫亂咬，這叫「高精準度選擇性結構壓力測試」。",
  },
  {
    label: "Q2. Lupa 為什麼對羽毛球這麼執著呢？",
    icon: "i-lucide-wind",
    content:
      "在哈士奇的空氣動力學與狩獵本能中，羽毛球兼具「真實禽鳥羽毛氣味」與「不規則拋物線飛行軌跡」，屬於最高等級的戰術攔截目標。每當公園球友揮拍擊球、羽毛球落地的瞬間，Lupa 便會啟動「瞬移劫持協議（Stealth Interception Protocol）」，以迅雷不及掩耳的速度刁走場上的羽毛球，並在球友錯愕的目光中瀟灑離場。對 Lupa 而言，別人的羽毛球永遠比較好玩，這是一場結合速度、敏捷與心理戰的極限運動。",
  },
  {
    label: "Q3. 聽說 Lupa 會挑食，是真的嗎？",
    icon: "i-lucide-utensils-crossed",
    content:
      "我們更傾向將其定義為「米其林級別的嚴選美食品鑑標準」。面對毫無靈魂的工業化普通乾飼料，Lupa 一律採取堅定的絕食抗議，絕不向無聊的碳水化合物妥協。唯有符合『純肉與天然香氣指標』的頂級食材——包含手撕原肉乾、濃郁起司條、酥脆風乾鴨脖子，以及巷口藥局每日早中晚限量進貢的特製小饅頭——才具備進入本汪食道的榮譽資格。這不是挑食，這是對狗生品質的極致堅持。",
  },
  {
    label: "Q4. Lupa 最喜歡啃的東西是什麼？",
    icon: "i-lucide-trees",
    content:
      "答案是「大自然孕育的頂級原木——樹枝」！儘管家中有數十種人類花錢進貢的潔牙骨與耐咬玩具，在 Lupa 眼中都比不上公園草地上隨手撿來的一根野生樹枝。本汪是資深的「原木咬感品鑑大師」，從樹皮的粗糙剝離感、木質纖維的回彈韌性，到咬斷瞬間清脆的『咔嚓』聲響，每一根樹枝都擁有獨一無二的風味與年輪層次。散步途中只要發現長相奇特的樹枝，無論體積多龐大，都必須原地趴下進行長達半小時的去皮拋光與木屑分解工程，堪稱行走的行動碎木機！",
  },
];
</script>

<style scoped>
.faq-section {
  .header-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 20px;
    margin-bottom: 36px;
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
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 16px;
        font-weight: 500;
        color: var(--ui-text-dimmed);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 0;
      }
    }

    .section-desc {
      font-size: 15px;
      color: var(--ui-text-muted);
      margin: 0;
    }
  }

  .accordion-wrapper {
    border: 1px solid var(--ui-border);
    border-radius: 16px;
    background-color: var(--ui-bg);
    padding: 8px 24px;
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.12);

    .answer-content {
      font-size: 15px;
      line-height: 1.85;
      color: var(--ui-text-muted);
      padding: 4px 0 16px 28px;
    }
  }
}
:deep(.accordion-header) {
  > button {
    cursor: pointer !important;
  }
}
</style>
