<script setup lang="ts">
useLoadingIndicator().start();
</script>

<template>
  <main class="w-screen h-screen grid place-content-center overflow-hidden box-border">
    <NuxtPage/>
    <UNotifications/>
  </main>
</template>