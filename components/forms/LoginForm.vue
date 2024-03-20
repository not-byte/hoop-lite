<script setup lang="ts">
import loginRedirect from "~/composables/loginRedirect";
// import { Index } from "~/types/loginData";

const data = ref({
  email: "",
  password: "",
});
</script>

<template>
  <form @submit.prevent>
    <label>
      Email
    </label>
    <UInput v-model="data.email" type="email" placeholder="Enter your address"/>

    <label>
      Password
    </label>
    <UInput v-model="data.password" type="password" placeholder="Enter your password"/>

    <UButton @click="loginRedirect(data, `/dashboard`)" label="Submit"/>
  </form>
</template>