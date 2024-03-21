<script setup lang="ts">
import SideNavigation from "~/components/navigation/SideNavigation.vue";

useLoadingIndicator().start();

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <section class="w-screen h-screen grid grid-cols-7">
    <SideNavigation v-if="!useDevice().isMobileOrTablet" />
    <section class="grid grid-flow-row col-start-2 col-end-8 border-2 border-fuchsia-500">
      <NuxtPage />
    </section>
  </section>
</template>
