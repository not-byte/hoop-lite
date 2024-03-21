<script setup lang="ts">
import LogoutButton from "~/components/buttons/LogoutButton.vue";
import RouteList from "~/components/navigation/RouteList.vue";
import LocaleSelect from "~/components/select/LocaleSelect.vue";

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
    <RouteList />
    <LocaleSelect />
    <LogoutButton />
  </aside>
</template>
