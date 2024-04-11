<script setup lang="ts">
const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);
const routeName = useRouteName();
const data = ref<PasswordPayload>({
  password: "",
  repeated_password: "",
});
</script>

<template>
  <form @submit.prevent class="w-full grid grid-flow-row gap-3">
    <InputForm
      v-for="(value, key) in data"
      :key="key"
      @typing="onTyping"
      :type="useInputType(key)"
      :route="routeName"
      :placeholder="key"
    />
    <p class="text-high text-sm text-right">
      {{ $t(`routes.${routeName}.content.form.forgot`) }}
      <NuxtLink to="/contact" class="text-blood underline">
        {{ $t(`routes.${routeName}.content.form.reset`) }}
      </NuxtLink>
    </p>
    <ButtonBasic @click="usePasswordRedirect(data)">
      {{ $t(`routes.${routeName}.content.form.submit`) }}
    </ButtonBasic>
  </form>
</template>
