<script setup lang="ts">
const toast = useToast();
const { locale } = useI18n();

onMounted(() => {
  toast.add({
    id: "update_downloaded",
    title: "Hello world!",
    description: "Welcome to our panel, do you want a introduction?",
    icon: "i-heroicons-arrow-to-down",
    timeout: 0,
    actions: [
      {
        label: "Let's go!",
        click: () => {},
      },
    ],
  });
});
</script>

<template>
  <section class="grid place-content-center p-4 bg-fuchsia-500">
    <h1>{{ $t("welcome") }}</h1>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="pl">pl</option>
    </select>
    <UButton
      label="Show toast"
      @click="
        toast.add({
          title: 'This is an <u>underlined</u> and <b>bold</b> notification.',
        })
      "
    />
  </section>
</template>
