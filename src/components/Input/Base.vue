<script setup lang="ts">
const model = defineModel({ required: true });
const {
    placeholder,
    type = "text",
    complete = "off"
} = defineProps<{
    placeholder: string;
    type?: InputType;
    complete?: string;
}>();
</script>

<template>
    <input
        v-model="model"
        :autocomplete="complete"
        :placeholder="placeholder"
        :type="type"
        required
        class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-crimson focus:text-crimson focus:placeholder:text-crimson"
    />
</template>
