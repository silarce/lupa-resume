import { buildThemeCss, type SiteTheme } from "~/theme/themes";

export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig();
  const { themeId, theme } = useSiteTheme();

  // Nuxt UI 會依 appConfig.ui.colors 產生 --ui-color-primary-50 ~ 950 等色階變數
  const applyColors = (value: SiteTheme) => {
    Object.assign(appConfig.ui.colors, value.colors);
  };

  applyColors(theme.value);
  watch(theme, applyColors);

  useHead({
    htmlAttrs: { "data-theme": themeId },
    style: [
      {
        id: "site-theme",
        tagPriority: "critical",
        innerHTML: computed(() => buildThemeCss(theme.value)),
      },
    ],
  });
});
