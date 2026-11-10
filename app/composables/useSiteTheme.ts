import {
  defaultThemeId,
  isThemeId,
  themes,
  type ThemeId,
} from "~/theme/themes";

export const useSiteTheme = () => {
  const cookie = useCookie<string | null>("site-theme", {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  // 用 useState 讓 plugin 與切換元件共用同一份狀態（SSR 時也會帶到 client）
  const themeId = useState<ThemeId>("site-theme", () =>
    isThemeId(cookie.value) ? cookie.value : defaultThemeId,
  );

  const theme = computed(() => themes[themeId.value]);

  const setTheme = (id: ThemeId) => {
    themeId.value = id;
    cookie.value = id;
  };

  return { themes, themeId: readonly(themeId), theme, setTheme };
};
