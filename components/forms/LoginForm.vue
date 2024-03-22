<script setup lang="ts">
import loginRedirect from "~/composables/loginRedirect";
import type { LoginPayload } from "~/types";

const data = ref<LoginPayload>({
  email: "",
  password: "",
});
</script>

<template>
  <form @submit.prevent>
    <label> Email </label>
    <input v-model="data.email" type="email" placeholder="Enter your address" />

    <label> Password </label>
    <input v-model="data.password" type="password" placeholder="Enter your password" />

    <button @click="loginRedirect(data)">Submit</button>
  </form>
</template>
