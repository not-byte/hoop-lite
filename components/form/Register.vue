<script setup lang="ts">
const data = ref({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
});
</script>

<template>
  <form>
    <label> First name </label>
    <input v-model="data.first_name" type="text" />

    <label> Last name </label>
    <input v-model="data.last_name" type="text" />

    <label> E-mail </label>
    <input v-model="data.email" type="email" />

    <label> Password </label>
    <input v-model="data.password" type="password" />
    <input v-model="data.password" type="password" />

    <button>Submit</button>
  </form>
</template>
