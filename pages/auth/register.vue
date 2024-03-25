<script setup lang="ts">
import RegisterForm from "~/components/form/Register.vue";
</script>

<template>
  <section>
    <RegisterForm/>
    <NuxtLink to="/auth/login">
      Login
    </NuxtLink>
  </section>
</template>