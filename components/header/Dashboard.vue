<script setup lang="ts">
const routeName = getPath();
</script>

<template>
  <header class="mb-3">
    <h2>
      {{ $t(`routes.${routeName}.content.header.title`) }}
    </h2>
    <p>
      {{ $t(`routes.${routeName}.content.header.description`) }}
    </p>
  </header>
</template>