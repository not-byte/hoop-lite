<script setup lang="ts">
import type { NuxtError } from "#app";
import errorRedirect from "~/composables/errorRedirect";

defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <section>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.statusMessage }}</p>
    <button @click="errorRedirect(`/`)">Back to main page</button>
  </section>
</template>
