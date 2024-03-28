<script setup lang="ts">
const props = defineProps<{
  email: LoginPayload["email"];
  password: LoginPayload["password"];
}>();
</script>

<template>
  <button @click="loginRedirect(props)">
    {{ $t("button.login") }}
  </button>
</template>
