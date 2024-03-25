<script setup lang="ts">
const data = ref<LoginPayload>({
  email: "",
  password: "",
});
</script>

<template>
  <form @submit.prevent>
    <label> Email </label>
    <input v-model="data.email" type="email" placeholder="Enter your address" />
n
    <label> Password </label>
    <input v-model="data.password" type="password" placeholder="Enter your password" />

    <ButtonLogin :email="data.password" :password="data.password" />
  </form>
</template>