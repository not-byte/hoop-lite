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
    class="bg-transparent placeholder:text-mid border-1 border-mid rounded-lg py-2 px-4 outline-1 outline-transparent focus:outline-blood focus:ring-0"
  />
</template>
