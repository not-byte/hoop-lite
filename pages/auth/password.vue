<script setup async lang="ts">
const routeName = useRouteName();
const { token } = useRoute().query;

if (Array.isArray(token)) navigateTo("/auth/register");

const status = await useVerifyRedirect(token as string | string[]);
</script>

<template>
  <section  class="flex flex-col sm:max-w-48 md:max-w-[18rem] lg:max-w-[24rem]">
    <HeaderForm />
    <FormPassword />
  </section>
</template>
