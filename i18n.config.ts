<script setup async lang="ts">
definePageMeta({
  middleware: ["query"],
});

const routeName = getPath();
const data = ref<RecoveryPayload>({
  password: "",
  repeated_password: "",
});
const { token } = useRoute().query;

const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);

if (Array.isArray(token)) navigateTo("/auth/register");

const recovery = async () => {
  if (!validateData(data.value)) return;

  const response = await $fetch("/api/auth/recovery", {
      method: "POST",
      body: data.value,
    }
  );

  console.table(response);

  return navigateTo("/auth/login");
};
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
      <ButtonBase @click="recovery()">
        {{ $t(`routes.${routeName}.content.form.submit`) }}
      </ButtonBase>
    </form>
  </section>
</template>
