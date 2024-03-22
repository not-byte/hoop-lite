<script setup lang="ts">
const route = useRoute();
const names = {
  knury: "Knury Knurów",
};
</script>

<template>
  <section class="w-screen h-screen grid place-content-center">
    <h1>Welcome {{ names[route.params.tenancy] || "Error" }}!</h1>
    <NuxtLink :to="`./dashboard`">Dashboard</NuxtLink>
  </section>
</template>
