<script setup lang="ts">
const routeName = getPath();
const data = ref<ResetPayload>({
  email: "",
});

const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);

const reset = async () => {
  if (!validateData(data.value)) return;

  const response = await $fetch("/api/auth/reset", {
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
      <p class="text-high text-sm text-right">
        {{ $t(`routes.${routeName}.content.form.forgot`) }}
        <NuxtLink to="/auth/login" class="text-blood underline">
          {{ $t(`routes.${routeName}.content.form.reset`) }}
        </NuxtLink>
      </p>
      <ButtonLink @click="reset()">
        {{ $t(`routes.${routeName}.content.form.submit`) }}
      </ButtonLink>
    </form>
  </section>
</template>
