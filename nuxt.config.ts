export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxtjs/device", "@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  buildModules: ["@nuxtjs/pwa"],
  runtimeConfig: {
    public: {
      name: "Tournament App",
      version: "0.1.0",
    },
  },
  app: {
    baseURL: "/",
    rootId: "tournament-app",
    rootTag: "main",
    teleportTag: "aside",
    pageTransition: {
      name: "page",
      mode: "in-out",
    },
    head: {
      bodyAttrs: {
        class: "w-screen h-screen",
      },
    },
  },
  i18n: {
    baseUrl: "/",
    strategy: "no_prefix",
    vueI18n: "./i18n.config.ts",
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
