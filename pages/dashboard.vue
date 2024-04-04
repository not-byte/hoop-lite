<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <section class="w-screen h-screen p-4 grid grid-rows-1 grid-cols-8 gap-4">
    <aside class="flex flex-col col-span-1 gap-4 rounded-lg p-4 bg-blood">
      <SideHeader />
      <SideRoutes />
      <SelectLocale />
      <ButtonLogout />
    </aside>
    <section class="w-full h-full grid grid-flow-row col-start-2 col-end-9 rounded-lg p-4">
      <NuxtPage />
    </section>
  </section>
</template>
