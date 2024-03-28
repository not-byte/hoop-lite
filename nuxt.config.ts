export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  imports: {
    dirs: ["types"],
  },
  runtimeConfig: {
    public: {
      name: "Tournament App",
      version: "0.1.0",
    },
  },
  modules: ["@nuxtjs/device", "@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  // @ts-ignore
  buildModules: ["@nuxtjs/pwa"],
  app: {
    baseURL: "/",
    rootId: "tournament-app",
    rootTag: "main",
    teleportTag: "aside",
    pageTransition: {
      name: "page",
      mode: "in-out",
    },
  },
  i18n: {
    baseUrl: "/",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      redirectOn: "root",
    },
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "pl",
        name: "Polski",
      },
    ],
  },
});
