<script setup lang="ts">
const model = defineModel({ required: true });
const { placeholder, pattern, min, max } = defineProps<{
    placeholder: string;
    pattern?: string;
    min?: number;
    max?: number;
}>();
</script>

<template>
    <input
        v-model="model"
        :placeholder="placeholder"
        :pattern="pattern"
        :min="min"
        :max="max"
        type="number"
        required
        class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-blood focus:text-blood focus:placeholder:text-blood"
    />
</template>
