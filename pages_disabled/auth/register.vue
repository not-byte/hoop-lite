<script setup lang="ts">
const routeName = getPath();
const data = ref<RegisterPayload>({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  repeated_password: "",
});

const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);

const register = async () => {
  if (!validateData(data.value)) return;

  const response = await $fetch("/api/auth/register", {
    method: "POST",
    body: data.value,
  });

  if (!response) return;

  return navigateTo("/auth/login");
}
</script>

<template>
  <section  class="flex flex-col sm:max-w-48 md:max-w-[18rem] lg:max-w-[24rem]">
    <HeaderForm />
    <form @submit.prevent class="w-full grid grid-flow-row gap-3">
      <InputBase
        v-for="(value, key) in data"
        :key="key"
        @typing="onTyping"
        :route="routeName"
        :placeholder="key"
      />
      <ButtonBase @click="register()">
        {{ $t(`routes.${routeName}.content.form.submit`) }}
      </ButtonBase>
    </form>
    <aside class="mt-4 px-12">
      <p class="text-high text-sm text-center">
        {{ $t(`routes.${routeName}.content.aside.title`) }}
        <NuxtLink to="/auth/login" class="text-blood underline">
          {{ $t(`routes.${routeName}.content.aside.description`) }}
        </NuxtLink>
      </p>
    </aside>
  </section>
</template>
