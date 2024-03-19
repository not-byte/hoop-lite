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
    <label>
      First name
    </label>
    <UInput v-model="data.first_name" type="text"/>

    <label>
      Last name
    </label>
    <UInput v-model="data.last_name" type="text"/>

    <label>
      E-mail
    </label>
    <UInput v-model="data.email" type="email"/>

    <label>
      Password
    </label>
    <UInput v-model="data.password" type="password"/>

    <UButton>
      Submit
    </UButton>
  </form>
</template>