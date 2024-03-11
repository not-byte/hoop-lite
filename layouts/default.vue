<script setup lang="ts">
import DefaultHeader from "~/components/header/DefaultHeader.vue";
import DefaultFooter from "~/components/footer/DefaultFooter.vue";
</script>

<template>
  <main>
    <DefaultHeader />
    <slot />
    <DefaultFooter />
  </main>
</template>