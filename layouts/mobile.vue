<script setup lang="ts">
import MobileHeader from "~/components/header/MobileHeader.vue";
import MobileFooter from "~/components/footer/MobileFooter.vue";
</script>

<template>
  <main>
    <MobileHeader />
    <slot />
    <MobileFooter />
  </main>
</template>