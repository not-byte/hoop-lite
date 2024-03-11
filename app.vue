<script setup>
if (useDevice().isMobileOrTablet) {
  setPageLayout("mobile");
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
