<script setup lang="ts">
const config = useRuntimeConfig();

const navigation = {
  profile: {
    name: "profile",
    path: "/dashboard/profile",
  },
};
</script>

<template>
  <aside class="flex flex-col col-span-1 border-2 border-amber-500">
    <span> {{ config.public.name }} </span>
    <span> {{ config.public.version }} </span>
    <SideRoutes />
    <SelectLocale />
    <ButtonLogout />
  </aside>
</template>
