export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    public: {
      name: "Tournament App",
      version: "0.1.0",
    },
  },
  imports: {
    dirs: ["types"],
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
    head: {
      bodyAttrs: {
        class: "w-screen h-screen",
      },
    },
  },
  i18n: {
    baseUrl: "/",
    strategy: "no_prefix",
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