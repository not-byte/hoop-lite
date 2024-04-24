<script setup lang="ts">
const { link } = defineProps([ "link" ]);
</script>

<template>
  <NuxtLink :to="link" class="w-full bg-blood rounded-lg py-3 px-6 text-center">
    <span class="text-white font-bold">
      <slot/>
    </span>
  </NuxtLink>
</template>
