// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   baseURL: process.env.NUXT_APP_BASE_URL || "/",
  // },
  modules: ["@nuxt/ui", "@nuxt/eslint"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
});
