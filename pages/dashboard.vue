<script setup lang="ts">
import LogoutButton from "~/components/buttons/LogoutButton.vue";
import SideNavigation from "~/components/navigation/SideNavigation.vue";

definePageMeta({
  middleware: [
    "auth",
  ],
});
</script>

<template>

  <section class="w-screen h-screen grid grid-cols-7">
    <aside class="flex flex-col col-span-1 bg-amber-500">
      <SideNavigation/>
      <LogoutButton/>
    </aside>
    <section class="grid grid-flow-row col-start-2 col-end-8">
      <NuxtPage/>
    </section>
  </section>
</template>