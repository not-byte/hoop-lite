<script lang="ts" setup>
const { Category, data } = useStageManager();
</script>

<template>
    <aside
        class="w-full h-12 rounded-lg py-2 px-4 border border-mid placeholder:text-mid"
    >
        <select
            v-model="data.team.category"
            :placeholder="$t(`components.select.category.0`)"
            name="category"
            required
            class="bg-transparent w-full h-full outline-none"
        >
            <option disabled selected :value="Category.NOT_SELECTED">
                {{ $t(`components.select.category.0`) }}
            </option>
            <option :value="Category.AMATEUR">
                {{ $t(`components.select.category.1`) }}
            </option>
            <option :value="Category.PRO">
                {{ $t(`components.select.category.2`) }}
            </option>
        </select>
    </aside>
</template>
