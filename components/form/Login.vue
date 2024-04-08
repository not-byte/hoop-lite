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
  <form @submit.prevent class="bg-light rounded-inside pt-3 pb-4 px-4 grid grid-flow-row">
    <InputForm
      v-for="(value, key) in data"
      :key="key"
      @typing="onTyping"
      :type="useInputType(key)"
      :route="routeName"
      :placeholder="key"
    />
    <p class="text-high text-sm text-right mb-2">
      {{ $t(`routes.${routeName}.content.form.forgot`) }}
      <NuxtLink to="/auth/register" class="text-blood underline">
        {{ $t(`routes.${routeName}.content.form.reset`) }}
      </NuxtLink>
    </p>
    <button @click="useLoginRedirect(data)" class="bg-blood py-2 px-4 rounded-full mb-2 font-bold text-light">
      {{ $t(`routes.${routeName}.content.form.submit`) }}
    </button>
  </form>
</template>
