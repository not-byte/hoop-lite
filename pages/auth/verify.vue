<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
});

const { data: image, status } = useFetch("/api/image", {
  transform: image => image.sprites.front_default,
  lazy: true
});
</script>

<template>
  <section>
    <p>Thank you for verifying your account!</p>
    <p>Status: {{ status }}</p>
    <img :src="image" alt="Image" width="500" height="500">
  </section>
</template>