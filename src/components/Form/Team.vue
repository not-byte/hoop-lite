<script lang="ts" setup>
const { Category, stage, data, errors } = useStageManager();
</script>

<template>
    <h2 class="text-center">
        <span>{{ stage }}/3</span>
        {{ $t(`pages.index.content.team.title`) }}
    </h2>

    <fieldset class="w-full flex flex-col gap-3">
        <InputBase
            v-model="data.team.name"
            :placeholder="$t(`components.input.team.name`)"
            autocomplete="username"
            name="username"
            type="text"
        />
        <p v-if="errors.team.name" class="text-red-600 text-sm">
            {{ $t(`requirements.field`) }}
        </p>

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
        <p v-if="errors.team.category" class="text-red-600 text-sm">
            {{ $t(`requirements.category`) }}
        </p>

        <InputBase
            v-model="data.team.email"
            :placeholder="$t(`components.input.team.email`)"
            autocomplete="email"
            name="email"
            type="email"
        />
        <p v-if="errors.team.email" class="text-red-600 text-sm">
            {{ $t(`requirements.email`) }}
        </p>

        <InputBase
            v-model="data.team.phone"
            :placeholder="$t(`components.input.team.phone`)"
            autocomplete="tel"
            name="tel"
            type="tel"
        />
        <p v-if="errors.team.phone" class="text-red-600 text-sm">
            {{ $t(`requirements.tel`) }}
        </p>
    </fieldset>
</template>
