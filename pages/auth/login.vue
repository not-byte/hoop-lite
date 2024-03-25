<script setup lang="ts">
import LoginForm from "~/components/form/Login.vue";
</script>

<template>
  <section>
    <LoginForm />
    <NuxtLink to="/auth/register"> Register </NuxtLink>
  </section>
</template>
