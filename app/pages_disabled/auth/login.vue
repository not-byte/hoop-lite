<script setup lang="ts">
const routeName = getPath();
const data = ref<LoginPayload>({
  email: "",
  password: "",
});

const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);

const login = async () => {
  if (!validateData(data.value)) return;

  const response = await $fetch("/api/auth/login", {
    method: "POST",
    body: data.value,
  });

  if (!response || !response.token) return;

  const expires: Date = new Date(new Date().getTime() + 1000 * 3600 * 24 * 30);

  useCookie<string>("token", { sameSite: true, expires: expires }).value = response.token;

  return navigateTo("/dashboard");
};
</script>

<template>
  <section class="flex flex-col sm:max-w-48 md:max-w-[18rem] lg:max-w-[24rem]">
    <HeaderForm />
    <form @submit.prevent class="w-full grid grid-flow-row gap-3">
      <InputBase v-for="(value, key) in data" :key="key" @typing="onTyping" :route="routeName" :placeholder="key" />
      <p class="text-high text-sm text-right">
        {{ $t(`routes.${routeName}.content.form.forgot`) }}
        <NuxtLink to="/auth/reset" class="text-blood underline">
          {{ $t(`routes.${routeName}.content.form.reset`) }}
        </NuxtLink>
      </p>
      <ButtonBase @click="login()">
        {{ $t(`routes.${routeName}.content.form.submit`) }}
      </ButtonBase>
    </form>
    <aside class="mt-3">
      <p class="text-high text-sm text-center">
        {{ $t(`routes.${routeName}.content.aside.title`) }}
        <NuxtLink to="/auth/register" class="text-blood underline">
          {{ $t(`routes.${routeName}.content.aside.description`) }}
        </NuxtLink>
      </p>
    </aside>
  </section>
</template>
