<script setup lang="ts">
const routeName = getPath();
</script>

<template>
  <header class="place-content-center mb-6 text-center">
    <h1>
      {{ $t(`routes.${routeName}.content.header.title`) }}
    </h1>
    <p>
      {{ $t(`routes.${routeName}.content.header.description`) }}
    </p>
  </header>
</template>
