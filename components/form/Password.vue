<script setup lang="ts">
const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);
const routeName = getPath();
const data = ref<PasswordPayload>({
  password: "",
  repeated_password: "",
});
</script>

<template>
</template>
