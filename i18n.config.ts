<script setup lang="ts">
errorRedirect(`/`)

import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <section>
<!--    <header class="mb-3">-->
<!--      <h2>-->
<!--        {{ error?.statusCode }}-->
<!--        - -->
<!--        {{ $t(`routes.error.content.header.${error?.statusCode}.title`) }}-->
<!--      </h2>-->
<!--      <p>-->
<!--        {{ $t(`routes.error.content.header.${error?.statusCode}.description`) }}-->
<!--      </p>-->
<!--    </header>-->
<!--    <ButtonBase @click="errorRedirect(`/`)">-->
<!--      {{ $t(`routes.error.content.button`) }}-->
<!--    </ButtonBase>-->
  </section>
</template>
