<script setup async lang="ts">
const config = useRuntimeConfig();
const routeName = getPath();
const { t, locale } = useI18n({ useScope: "global" });

useHeadSafe({
  titleTemplate: (titleChunk) =>
    titleChunk
      ? `${t(`routes.${titleChunk}.name`)} · ${config.public.name}`
      : `${t(`routes.${routeName}.name`)} · ${config.public.name}`,
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: "description",
      content: `${t(`routes.${routeName}.description`)}`,
    },
  ],
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
  <VitePwaManifest />
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 500ms ease-in-out,
    transform 750ms;
}

.page-enter-active {
  transition-delay: 250ms;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-from {
  transform: translateY(-2rem);
}
</style>