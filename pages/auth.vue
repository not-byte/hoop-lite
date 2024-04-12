<script setup lang="ts">
const token = useCookie<string>("token", { sameSite: true }).value;

if (token) navigateTo("/dashboard");
</script>

<template>
  <section class="w-screen h-screen grid place-content-center">
    <NuxtPage />
  </section>
</template>
