<script setup lang="ts">
const model = defineModel({ required: true });
const {
    autocomplete = "off",
    name,
    placeholder,
    type = "text"
} = defineProps<{
    autocomplete?: string;
    name: string;
    placeholder: string;
    type?: InputType;
}>();
</script>

<template>
    <input
        v-model="model"
        :autocomplete="autocomplete"
        :name="name"
        :placeholder="placeholder"
        :type="type"
        required
        class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border border-mid placeholder:text-mid focus:border-crimson focus:text-crimson focus:placeholder:text-crimson"
    />
</template>
