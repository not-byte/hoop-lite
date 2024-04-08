<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const show = ref<boolean>(false);

// onMounted(() => {
//   setInterval(() => show.value = !show.value, 2500);
// });
</script>

<template>
  <section class="relative w-screen h-screen grid grid-rows-1 grid-cols-8 gap-4 p-4">
    <aside class="flex flex-col col-span-1 gap-4 p-4 rounded-outside bg-smoke">
      <SideHeader />
      <SideRoutes />
      <ButtonLogout />
    </aside>
    <section class="w-full h-full grid grid-flow-row col-start-2 col-end-9">
      <NuxtPage />
    </section>
    <aside v-if="show" class="absolute w-screen h-screen z-50 backdrop-blur-sm bg-smoke/50">
      <div></div>
    </aside>
  </section>
</template>
