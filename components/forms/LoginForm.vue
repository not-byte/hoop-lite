<script setup lang="ts">
import loginRedirect from "~/composables/loginRedirect";

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
    <UInput v-model="data.email" type="email"/>

    <label>
      Password
    </label>
    <UInput v-model="data.password" type="password"/>

    <UButton @click="loginRedirect(data)">
      Submit
    </UButton>
  </form>
</template>