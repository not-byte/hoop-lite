<script setup lang="ts">
const routeName = useRouteName();
const data = ref<LoginPayload>({
  email: "info@botprzemek.pl",
  password: "Test123",
});
</script>

<template>
  <form @submit.prevent class="bg-light rounded-outside pt-3 pb-4 px-4 grid grid-flow-row">
    <input
      v-model="data.email"
      type="email"
      :placeholder="$t(`routes.${routeName}.content.form.email`)"
      class="bg-transparent border-1 border-mid py-2 px-4 rounded-full mt-2 mb-2 outline-1 outline-transparent focus:outline-blood focus:ring-0"
    />
    <input
      v-model="data.password"
      type="password"
      :placeholder="$t(`routes.${routeName}.content.form.password`)"
      class="bg-transparent border-1 border-mid py-2 px-4 rounded-full mt-2 mb-2 outline-1 outline-transparent focus:outline-blood focus:ring-0"
    />
    <p class="text-high text-sm text-right mb-2">
      {{ $t(`routes.${routeName}.content.form.forgot`) }}
      <NuxtLink to="/auth/register" class="text-blood underline">
        {{ $t(`routes.${routeName}.content.form.reset`) }}
      </NuxtLink>
    </p>
    <button @click="useLoginRedirect(data)" class="bg-blood py-2 px-4 rounded-full font-bold text-light">
      {{ $t(`routes.${routeName}.content.form.submit`) }}
    </button>
  </form>
</template>
