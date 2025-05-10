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
        database:
            "postgresql://postgres.oxjsfwlkzewsgozwenwd:Klubowyrudzielec123@aws-0-eu-central-1.pooler.supabase.com:5432/postgres",
        token: "Klubowyrudzielec123",
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
        }
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
        }
    }
});
