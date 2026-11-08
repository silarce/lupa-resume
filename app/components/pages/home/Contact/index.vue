<template>
  <Container class="contact-section">
    <div class="contact-layout">
      <!-- 左側：聯絡資訊與合作說明 -->
      <div class="info-column">
        <div class="badge-contact">
          <span class="status-dot" />
          Business Inquiry & Booking
        </div>

        <div class="title-group">
          <div class="title-row">
            <h2 class="main-title">聯絡 Lupa</h2>
            <h3 class="sub-title">Contact</h3>
          </div>
          <p class="section-desc">
            歡迎提交肉乾投餵申請、社區駐點巡邏邀約，或高難度室內雜物物理性拆解專案委託。
          </p>
        </div>

        <div class="contact-highlights">
          <div class="highlight-card">
            <div class="highlight-icon">
              <UIcon name="i-lucide-clock" />
            </div>
            <div class="highlight-body">
              <span class="highlight-label">服務時段 (Service Hours)</span>
              <span class="highlight-value">每日散步時段 & 無人看管空檔</span>
            </div>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">
              <UIcon name="i-lucide-bone" />
            </div>
            <div class="highlight-body">
              <span class="highlight-label">顧問報酬標準 (Compensation)</span>
              <span class="highlight-value"
                >手撕原肉、起司條、鴨脖子或小饅頭</span
              >
            </div>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">
              <UIcon name="i-lucide-map-pin" />
            </div>
            <div class="highlight-body">
              <span class="highlight-label">主要駐點範圍 (Patrol Zone)</span>
              <span class="highlight-value"
                >7-11、遊藝場保全亭、全家與巷口藥局</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 右側：聯絡表單卡片 -->
      <div class="form-column">
        <UCard class="form-card" :ui="{ body: 'p-6 sm:p-8' }">
          <div class="form-header">
            <span class="form-header-title">線上預約單 (Booking Form)</span>
            <span class="form-header-code">FORM #LP-2026</span>
          </div>

          <UForm :state="stateForm" :validate="validate" class="contact-form">
            <div class="form-row-two">
              <UFormField label="姓名" name="name" class="name-field" required>
                <UInput
                  v-model="stateForm.name"
                  placeholder="請輸入您的稱呼"
                  icon="i-lucide-user"
                  size="lg"
                  class="w-full"
                />
              </UFormField>

              <UFormField
                label="E-MAIL"
                name="email"
                required
                class="email-field"
              >
                <UInput
                  v-model="stateForm.email"
                  type="email"
                  placeholder="請輸入您的電子郵件"
                  icon="i-lucide-mail"
                  size="lg"
                  class="w-full"
                />
              </UFormField>
            </div>

            <UFormField
              label="預約事由"
              name="reason"
              class="reason-field"
              required
            >
              <USelect
                v-model="stateForm.reason"
                :items="reasonOptions"
                placeholder="請選擇預約或委託項目"
                icon="i-lucide-briefcase"
                size="lg"
                class="w-full"
              />
            </UFormField>

            <UFormField
              label="訊息內容"
              name="content"
              class="content-field"
              required
            >
              <UTextarea
                v-model="stateForm.content"
                placeholder="請詳細說明您準備的零食種類、欲巡視據點，或預計拆解之家具型號..."
                :rows="5"
                size="lg"
                class="w-full"
                style="resize: none"
              />
            </UFormField>

            <div class="form-actions">
              <UButton
                color="neutral"
                variant="outline"
                size="lg"
                icon="i-lucide-rotate-ccw"
                class="action-btn"
                @click="handleClear"
              >
                清除
              </UButton>
              <UButton
                color="primary"
                variant="solid"
                size="lg"
                icon="i-lucide-send"
                class="action-btn submit-btn"
                @click="handleSubmit"
              >
                送出
              </UButton>
            </div>
          </UForm>
        </UCard>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import type { FormError } from "@nuxt/ui";

type StateForm = {
  name: string;
  email: string;
  reason: string;
  content: string;
};

const stateForm = ref<StateForm>({
  name: "",
  email: "",
  reason: "",
  content: "",
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (state: StateForm): FormError[] => {
  const errors: FormError[] = [];
  if (!state.email) {
    errors.push({ name: "email", message: "請輸入 Email" });
  } else if (!emailRegex.test(state.email)) {
    errors.push({ name: "email", message: "Email 格式不正確" });
  }

  if (!state.name) {
    errors.push({ name: "name", message: "請輸入姓名" });
  }
  if (!state.reason) {
    errors.push({ name: "reason", message: "請選擇預約事由" });
  }
  if (!state.content) {
    errors.push({ name: "content", message: "請輸入訊息內容" });
  }

  return errors;
};

const handleClear = () => {
  stateForm.value.name = "";
  stateForm.value.email = "";
  stateForm.value.reason = "";
  stateForm.value.content = "";
};

const handleSubmit = () => {
  alert(`
  姓名: ${stateForm.value.name}
  E-MAIL: ${stateForm.value.email}
  聯絡事由: ${getReasonLabel(stateForm.value.reason)}
  訊息內容: ${stateForm.value.content}
  沒有送出
  `);
};

const getReasonLabel = (value: string) => {
  const option = reasonOptions.find((item) => item.value === value);
  return option ? option.label : "";
};

const reasonOptions = [
  { value: "0", label: "投餵預約" },
  { value: "1", label: "巡邏申請" },
  { value: "2", label: "拆家委託" },
];
</script>

<style scoped>
.contact-section {
  .contact-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: start;

    @media (min-width: 1024px) {
      grid-template-columns: 400px 1fr;
      gap: 64px;
    }

    /* 左側資訊欄 */
    .info-column {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .badge-contact {
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
        flex-direction: column;
        gap: 12px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--ui-border);

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
          line-height: 1.75;
          color: var(--ui-text-muted);
          margin: 0;
        }
      }

      .contact-highlights {
        display: flex;
        flex-direction: column;
        gap: 14px;

        .highlight-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 12px;
          background-color: var(--ui-bg);
          border: 1px solid var(--ui-border);

          .highlight-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background-color: var(--ui-bg-elevated);
            color: var(--ui-primary);
            font-size: 18px;
            flex-shrink: 0;
          }

          .highlight-body {
            display: flex;
            flex-direction: column;
            gap: 2px;

            .highlight-label {
              font-size: 12px;
              font-weight: 500;
              color: var(--ui-text-dimmed);
            }

            .highlight-value {
              font-size: 14px;
              font-weight: 600;
              color: var(--ui-text-highlighted);
            }
          }
        }
      }
    }

    /* 右側表單欄 */
    .form-column {
      .form-card {
        border-radius: 16px;
        box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.12);

        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--ui-border);

          .form-header-title {
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.04em;
            color: var(--ui-text-highlighted);
          }

          .form-header-code {
            font-family:
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 12px;
            color: var(--ui-text-dimmed);
          }
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 30px;

          .form-row-two {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            /* height: 64px; */

            .name-field {
              min-height: 88px;
            }
            .email-field {
              min-height: 88px;
            }

            @media (min-width: 640px) {
              grid-template-columns: 1fr 1fr;
            }
          }

          .reason-field {
            height: 70px;
            @media (min-width: 640px) {
              height: 70px;
            }
          }
          .content-field {
            min-height: 145px;
            @media (min-width: 640px) {
              min-height: 145px;
            }
          }

          .form-actions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 12px;
            padding-top: 12px;
            border-top: 1px solid var(--ui-border);

            .action-btn {
              cursor: pointer;
              min-width: 100px;
              justify-content: center;
            }

            .submit-btn {
              min-width: 128px;
            }
          }
        }
      }
    }
  }
}
</style>
