<script setup lang="ts">
const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);
const routeName = getPath();
const data = ref<ResetPayload>({
  email: "",
});
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
    <p class="text-high text-sm text-right">
      {{ $t(`routes.${routeName}.content.form.forgot`) }}
      <NuxtLink to="/contact" class="text-blood underline">
        {{ $t(`routes.${routeName}.content.form.reset`) }}
      </NuxtLink>
    </p>
    <ButtonLink @click="useResetRedirect(data.email)">
      {{ $t(`routes.${routeName}.content.form.submit`) }}
    </ButtonLink>
  </form>
</template>
