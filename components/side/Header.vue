<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <header>
    <h4>
      {{ config.public.name }}
      <br/>
      {{ config.public.version }}
    </h4>
  </header>
</template>
