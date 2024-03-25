<script setup lang="ts">
const props = defineProps<LoginPayload>()
</script>

<template>
  <button @click="loginRedirect(props)">
    {{ $t("button.login") }}
  </button>
</template>