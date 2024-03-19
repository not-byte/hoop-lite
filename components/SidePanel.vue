<script setup lang="ts">
import LogoutButton from "~/components/buttons/LogoutButton.vue";
</script>

<template>
  <aside class="flex flex-col col-span-1 bg-amber-500">
    <slot/>
    <LogoutButton/>
  </aside>
</template>