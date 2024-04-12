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
  <form @submit.prevent class="w-full grid grid-flow-row gap-3">
    <InputBase
      v-for="(value, key) in data"
      :key="key"
      @typing="onTyping"
      :route="routeName"
      :placeholder="key"
    />
    <ButtonBasic @click="register()">
      {{ $t(`routes.${routeName}.content.form.submit`) }}
    </ButtonBasic>
  </form>
</template>
