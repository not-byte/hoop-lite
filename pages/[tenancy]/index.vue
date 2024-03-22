<script setup lang="ts">
import { useParamPath } from "~/composables/paramPath";

const route = useRoute();
const url = useRequestURL();
const names = {
  knury: "Knury Knurów",
};
</script>

<template>
  <section class="w-screen h-screen grid place-content-center">
    <h1>Welcome {{ names[route.params.tenancy] || "Error" }}!</h1>
    <NuxtLink :to="`${useParamPath()}/dashboard`">Dashboard</NuxtLink>
  </section>
</template>
