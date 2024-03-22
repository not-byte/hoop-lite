<script setup lang="ts">
import LoginForm from "~/components/forms/LoginForm.vue";
</script>

<template>
  <section>
    <LoginForm />
    <NuxtLink to="/auth/register"> Register </NuxtLink>
  </section>
</template>
