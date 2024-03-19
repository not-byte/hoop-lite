<script setup lang="ts">
import SidePanel from "~/components/SidePanel.vue";
import ViewPanel from "~/components/ViewPanel.vue";
import SideNavigation from "~/components/SideNavigation.vue";

//("auth");
</script>

<template>
  <section class="w-screen h-screen grid grid-cols-7">
    <SidePanel>
      <SideNavigation/>
    </SidePanel>
    <ViewPanel>
      <NuxtPage/>
    </ViewPanel>
  </section>
</template>