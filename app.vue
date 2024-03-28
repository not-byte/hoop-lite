<script setup async lang="ts">
const config = useRuntimeConfig();
const { t, locale } = useI18n({ useScope: "global" });
const routeName = (useRouter().currentRoute.value.name as string).split("___")[0] || "default";

useLoadingIndicator().start();

useHeadSafe({
  htmlAttrs: {
    lang: locale.value,
    meta: [
      {
        name: "description",
        content: `${t(`route.${routeName}.description`)} · ${config.public.name}`,
      },
    ],
  },
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} · ${config.public.name}`
      : `${t(`routes.${routeName}.name`)} · ${config.public.name}`;
  },
});

useSeoMeta({
  ogTitle: `${t(`routes.${routeName}.name`)} · ${config.public.name}`,
  ogDescription: `${t(`routes.${routeName}.description`)}`,
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});
</script>

<template>
  <main class="w-screen h-screen">
    <VitePwaManifest />
    <ClientOnly>
      <LazyNuxtLoadingIndicator />
    </ClientOnly>
    <NuxtPage />
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
