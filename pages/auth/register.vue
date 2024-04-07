<script setup lang="ts">
const routeName = useRouteName();
</script>

<template>
  <section class="relative bg-smoke rounded-outside pt-3 pb-5 px-5">
    <HeaderForm />
    <FormRegister />
    <aside class="mt-4 px-12">
      <p class="text-high text-sm text-center">
        {{ $t(`routes.${routeName}.content.aside.title`) }}
        <NuxtLink to="/auth/login" class="text-blood underline">
          {{ $t(`routes.${routeName}.content.aside.description`) }}
        </NuxtLink>
      </p>
    </aside>
  </section>
</template>
