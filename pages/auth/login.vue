<script setup lang="ts">
const routeName = useRouteName();
</script>

<template>
  <section>
    <HeaderForm />
    <FormLogin />
    <aside class="mt-3">
      <p class="text-high text-sm text-center">
        {{ $t(`routes.${routeName}.content.aside.title`) }}
        <NuxtLink to="/auth/register" class="text-blood underline">
          {{ $t(`routes.${routeName}.content.aside.description`) }}
        </NuxtLink>
      </p>
    </aside>
  </section>
</template>
