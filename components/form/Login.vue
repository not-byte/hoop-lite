<script setup lang="ts">
const data = ref<LoginPayload>({
  email: "",
  password: "",
});

const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);

const routeName = useRouteName();
useHeadSafe({
  title: routeName,
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
      <NuxtLink to="/auth/register" class="text-blood underline">
        {{ $t(`routes.${routeName}.content.form.reset`) }}
      </NuxtLink>
    </p>
    <button @click="useLoginRedirect(data)" class="bg-blood rounded-lg py-3 px-6 text-light font-bold">
      {{ $t(`routes.${routeName}.content.form.submit`) }}
    </button>
  </form>
</template>
