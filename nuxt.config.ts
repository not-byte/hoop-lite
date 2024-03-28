export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  imports: {
    dirs: ["types"],
  },
  runtimeConfig: {
    public: {
      name: "Knury Knurów",
      version: "0.1.0",
    },
  },
  modules: ["@nuxtjs/device", "@nuxtjs/i18n", "@nuxtjs/tailwindcss", "nuxt-simple-sitemap", "@vite-pwa/nuxt"],
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
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Strona drużyny koszykarskiej Knury Knurów. Inicjatywa wytrwałej młodzieży z ambicjami. Nasza społeczność wciąż się rozrasta, co pozwala nam cieszyć się z gry na boisku i poza nim.",
        },
        {
          name: "author",
          content: "notbyte.com",
        },
        {
          name: "robots",
          content: "index, nofollow",
        },
        {
          name: "theme-color",
          content: "currentColor",
        },
        {
          name: "color-scheme",
          content: "dark",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
      ],
      link: [
        {
          rel: "theme-color",
          color: "#1d1d1d",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
          href: "/favicon/favicon-16x16.png",
        },
      ],
    },
  },
  pwa: {
    registerType: "autoUpdate",
    strategies: "generateSW",
    manifest: {
      name: "Knury Knurów",
      short_name: "Knury",
      description:
        "Strona drużyny koszykarskiej Knury Knurów. Inicjatywa wytrwałej młodzieży z ambicjami. Nasza społeczność wciąż się rozrasta, co pozwala nam cieszyć się z gry na boisku i poza nim.",
      lang: "pl",
      display: "standalone",
      background_color: "#1d1d1d",
      theme_color: "#f23535",
      icons: [
        {
          src: "/favicon/favicon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/favicon/favicon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/favicon/favicon-512x512-maskable.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ["**/*.{js,css,html,svg,png,ico,webp}"],
      navigateFallback: null,
    },
  },
});
