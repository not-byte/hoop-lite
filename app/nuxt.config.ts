export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  imports: {
    dirs: ["types"],
  },
  runtimeConfig: {
    mailUrl: "",
    public: {
      name: "Knury Knurów",
      version: "1.0.0",
      authorName: "notByte",
      authorUrl: "https://notByte.com/",
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/device",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
  ],
  i18n: {
    baseUrl: process.env.NUXT_APP_URL || "http://localhost:3000/",
    strategy: "no_prefix",
    defaultLocale: "en",
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
    ],
  },
  site: {
    url: process.env.NUXT_APP_URL || "http://localhost:3000/",
  },
  app: {
    baseURL: "/",
    rootId: "tournament-app",
    rootTag: "main",
    teleportTag: "aside",
    pageTransition: {
      name: "page",
      mode: "out-in"
    },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
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
        "Do you remember the first edition of the Knurowski Streetball tournament? We do too and we want to share some good news with you 🥳 On May 25th, we are organizing another installment of our basketball event for YOU.",
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
