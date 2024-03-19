<script setup lang="ts">
import MobileHeader from "~/components/header/MobileHeader.vue";
import MobileFooter from "~/components/footer/MobileFooter.vue";

useLoadingIndicator().start();

if (!useDevice().isMobileOrTablet) {
  setPageLayout("default");
}
</script>

<template>
  <main>
    <MobileHeader />
    <slot />
    <MobileFooter />
  </main>
</template>