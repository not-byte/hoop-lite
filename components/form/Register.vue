<script setup lang="ts">
const routeName = useRouteName();
const data = ref<RegisterPayload>({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  repeated_password: "",
});
const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);
</script>

<template>
  <form @submit.prevent class="bg-light rounded-outside pt-3 pb-4 px-4 grid grid-flow-row">
    <InputForm
      v-for="(value, key) in data"
      :key="key"
      @typing="onTyping"
      :type="useInputType(key)"
      :route="routeName"
      :placeholder="key"
    />
    <button @click="useRegisterRedirect(data)" class="bg-blood py-2 px-4 rounded-full mt-2 font-bold text-light">
      {{ $t(`routes.${routeName}.content.form.submit`) }}
    </button>
  </form>
</template>
