/**
 * 全站主題設定檔 —— 想換配色只需要改這個檔案
 *
 * colors：填 Tailwind 色階名稱（如 pink、sky、teal），
 *         或 app/assets/css/palettes.css 中自訂的色階（如 sakura、cornflower）
 * light / dark：淺色、深色模式各自的背景、邊框，以及主副色要取哪一個色階
 */

type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export interface ThemeModeTokens {
  /** 主要背景色（頁面底色） */
  background: string;
  /** 次要背景色（偶數區塊、浮層、hover 底色） */
  surface: string;
  /** 邊框色 */
  border: string;
  /** var(--ui-primary) 要取主色的第幾階 */
  primaryShade: Shade;
  /** var(--ui-secondary) 要取副色的第幾階 */
  secondaryShade: Shade;
}

export interface SiteTheme {
  /** 顯示在切換面板上的名稱 */
  label: string;
  colors: {
    primary: string;
    secondary: string;
    /** 文字與灰階元件使用的中性色 */
    neutral: string;
  };
  /** 切換面板上的色票預覽 */
  swatch: { primary: string; secondary: string; background: string };
  /** Nuxt UI 元件的圓角基準 */
  radius: string;
  light: ThemeModeTokens;
  dark: ThemeModeTokens;
}

export const themes = {
  sakura: {
    label: "櫻花奶糖",
    colors: { primary: "sakura", secondary: "cornflower", neutral: "stone" },
    swatch: { primary: "#ffc0cb", secondary: "#6495ed", background: "#dddddd" },
    radius: "0.75rem",
    light: {
      background: "#dddddd",
      surface: "#efe3e6",
      border: "#eeb0bd",
      primaryShade: 600,
      secondaryShade: 500,
    },
    dark: {
      background: "#241d27",
      surface: "#2e2532",
      border: "#4d3b4f",
      primaryShade: 300,
      secondaryShade: 400,
    },
  },
  mint: {
    label: "薄荷汽水",
    colors: { primary: "teal", secondary: "amber", neutral: "stone" },
    swatch: { primary: "#14b8a6", secondary: "#f59e0b", background: "#e8f3f0" },
    radius: "0.75rem",
    light: {
      background: "#e8f3f0",
      surface: "#f6fbf9",
      border: "#a7dccf",
      primaryShade: 600,
      secondaryShade: 500,
    },
    dark: {
      background: "#132320",
      surface: "#1a2e2a",
      border: "#2f4f48",
      primaryShade: 300,
      secondaryShade: 400,
    },
  },
  classic: {
    label: "經典商務",
    colors: { primary: "green", secondary: "blue", neutral: "slate" },
    swatch: { primary: "#22c55e", secondary: "#3b82f6", background: "#ffffff" },
    radius: "0.25rem",
    light: {
      background: "#ffffff",
      surface: "#f1f5f9",
      border: "#e2e8f0",
      primaryShade: 500,
      secondaryShade: 500,
    },
    dark: {
      background: "#0f172a",
      surface: "#1e293b",
      border: "#1e293b",
      primaryShade: 400,
      secondaryShade: 400,
    },
  },
} satisfies Record<string, SiteTheme>;

export type ThemeId = keyof typeof themes;

/** 訪客第一次進站時使用的主題 */
export const defaultThemeId: ThemeId = "sakura";

export const isThemeId = (value: unknown): value is ThemeId =>
  typeof value === "string" && Object.hasOwn(themes, value);

const modeTokens = (tokens: ThemeModeTokens) =>
  [
    `--site-bg: ${tokens.background};`,
    `--site-surface: ${tokens.surface};`,
    `--site-border: ${tokens.border};`,
    `--ui-primary: var(--ui-color-primary-${tokens.primaryShade});`,
    `--ui-secondary: var(--ui-color-secondary-${tokens.secondaryShade});`,
  ].join(" ");

/** 產生注入 <head> 的主題 CSS 變數，對應關係見 app/assets/css/main.css */
export const buildThemeCss = (theme: SiteTheme) =>
  `:root { ${modeTokens(theme.light)} --ui-radius: ${theme.radius}; }
:root.dark { ${modeTokens(theme.dark)} }`;
