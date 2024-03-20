<script setup lang="ts">
import SideNavigation from "~/components/navigation/SideNavigation.vue";
import LogoutButton from "~/components/buttons/LogoutButton.vue";

useLoadingIndicator().start();

if (!useDevice().isMobileOrTablet) {
  setPageLayout("default");
}
</script>

<template>
  <main class="w-screen h-screen grid place-content-center overflow-hidden box-border">
    <ClientOnly>
      <LazyNuxtLoadingIndicator/>
    </ClientOnly>
    <section class="w-screen h-screen grid grid-rows-7">
      <aside class="flex flex-col col-span-1 bg-amber-500">
        <SideNavigation/>
        <LogoutButton/>
      </aside>
      <slot/>
    </section>
  </main>
</template>