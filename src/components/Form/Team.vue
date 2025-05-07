<script lang="ts" setup>
const { Category, stage, data, previous, next } = useStageManager();
const test = ref("");
</script>

<template>
    <h2 class="text-center">
        <span>{{ stage }}/3</span>
        {{ $t(`pages.index.content.form.team.title`) }}
    </h2>

    <fieldset class="w-full flex flex-col gap-3">
        <InputBase
            v-model="data.name"
            complete="username"
            :placeholder="$t(`components.input.team.name`)"
            type="text"
        />
        <aside
            class="w-full h-12 rounded-lg py-2 px-4 border-1 border-mid placeholder:text-mid"
        >
            <select
                required
                v-model="data.category"
                :placeholder="$t(`components.select.category.0`)"
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
        <InputBase
            v-model="data.email"
            complete="email"
            :placeholder="$t(`components.input.team.email`)"
            type="email"
        />
        <InputBase
            v-model="data.phone"
            complete="tel"
            :placeholder="$t(`components.input.team.phone`)"
            type="tel"
        />
    </fieldset>

    <aside class="w-full grid grid-cols-2 gap-3">
        <ButtonBase @click="previous()" type="button">
            {{ $t(`components.button.previous`) }}
        </ButtonBase>
        <ButtonBase @click="next()" type="button">
            {{ $t(`components.button.next`) }}
        </ButtonBase>
    </aside>
</template>
