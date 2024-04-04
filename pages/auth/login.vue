<script setup lang="ts">
const routeName = useRouteName();
</script>

<template>
  <section class="relative bg-smoke rounded-outside pt-3 pb-5 px-5">
    <header class="mb-3">
      <h2>
        {{ $t(`routes.${routeName}.content.header.title`) }}
      </h2>
      <p>
        {{ $t(`routes.${routeName}.content.header.description`) }}
      </p>
    </header>
    <FormLogin />
    <aside class="mt-4 px-12">
      <p class="text-high text-sm text-center">
        {{ $t(`routes.${routeName}.content.aside.title`) }}
        <NuxtLink to="/auth/register" class="text-blood underline">
          {{ $t(`routes.${routeName}.content.aside.description`) }}
        </NuxtLink>
      </p>
    </aside>
    <!--    <footer>-->
    <!--      All rights reserved ©-->
    <!--      {{ new Date().getUTCFullYear() }}-->
    <!--      <NuxtLink :to="useRuntimeConfig().public.authorUrl" external target="_blank" rel="noopener">-->
    <!--        {{ useRuntimeConfig().public.authorName }}-->
    <!--      </NuxtLink>-->
    <!--    </footer>-->
  </section>
</template>
