<script setup lang="ts">
const { route, type, placeholder } = defineProps(["route", "type", "placeholder"]);
const emit = defineEmits(["typing"]);
const onInput = (event: any) => emit("typing", placeholder, event.target.value);
</script>

<template>
  <input
    @input="onInput($event)"
    :name="placeholder"
    :type="type"
    :placeholder="$t(`routes.${route}.content.form.${placeholder}`)"
    class="bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid focus:border-blood placeholder:text-mid"
  />
</template>