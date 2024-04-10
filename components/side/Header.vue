<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <header>
    <h3>
      {{ config.public.name }}
    </h3>
    <NuxtLink
      external
      target="_blank"
      rel="noreferrer"
      to="https://github.com/not-byte/tournament-app">
      {{ config.public.version }}
    </NuxtLink>
  </header>
</template>
