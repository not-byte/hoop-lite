export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxt/ui", "@nuxtjs/device", "@nuxtjs/i18n"],
  app: {
    baseURL: "/",
    rootId: "tournament-app",
    rootTag: "main",
    pageTransition: {
      name: "page",
      mode: "in-out",
    },
  },
  i18n: {
    baseUrl: "/",
    defaultLocale: "en",
    langDir: "locales",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      redirectOn: "root",
    },
    locales: [
      {
        code: "en",
        iso: "en",
        file: "en-EN.json",
        name: "English",
      },
      {
        code: "pl",
        iso: "pl-PL",
        file: "pl-PL.json",
        name: "Polski",
      },
    ],
  },
});
