export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    srcDir: "src/",
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },
    modules: [
        "@nuxtjs/seo",
        "@nuxtjs/i18n",
        "@nuxtjs/tailwindcss",
        "@nuxt/eslint",
        "@nuxt/test-utils/module",
        "@nuxt/image"
    ],
    runtimeConfig: {
        public: {
            author: "notbyte.com",
            name: "3X3",
            url: "https://3x3.notbyte.com/"
        }
    },
    app: {
        rootAttrs: {
            id: "notbyte-root"
        },
        rootTag: "body",
        teleportAttrs: {
            id: "notbyte-teleports"
        },
        teleportTag: "aside",
        pageTransition: {
            name: "page",
            mode: "out-in"
        },
        scrollBehavior(to, from, savedPosition) {
            if (to.hash) {
                return new Promise((resolve) => {
                setTimeout(() => {
                    const el = document.querySelector(to.hash)
                        if (el) {
                            el.scrollIntoView({ behavior: 'smooth' })
                        }
                        resolve({ left: 0, top: 0 })
                    }, 300) // opóźnienie, żeby DOM zdążył się pojawić
                })
            }
                return savedPosition || { left: 0, top: 0 }
        },
    },
    i18n: {
        baseUrl: process.env.NUXT_PUBLIC_URL,
        bundle: {
            optimizeTranslationDirective: false
        },
        customRoutes: "page",
        defaultLocale: "pl",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "notbyte-lang",
            redirectOn: "root"
        },
        locales: [
            {
                code: "pl",
                name: "Polski",
                language: "pl-PL",
                file: "pl-PL.ts"
            }
        ],
        strategy: "prefix_except_default"
    },
    // TESTING
    nitro: {
        storage: {
            db: {
                driver: "fs",
                base: "./.data/db"
            }
        },
    
    }
});
