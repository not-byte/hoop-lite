<script lang="js" setup>
const { stage, data, errors } = useStageManager();
</script>

<template>
    <h2 class="text-center">
        <span>{{ stage }}/3</span>
        {{ $t(`pages.index.content.players.title`) }}
    </h2>

    <fieldset
        v-for="index in Object.keys(data.players)"
        :key="index"
        class="w-full grid grid-flow-row gap-3"
    >
        <label :for="`player-${index}`">
            {{ $t(`components.input.player.label`) }}
            {{ parseInt(index) + 1 }}
        </label>

        <InputBase
            v-model="data.players[index].first_name"
            autocomplete="given-name"
            name="given-name"
            :id="`player-${index}`"
            :placeholder="$t(`components.input.player.first_name`)"
        />
        <TextImportant v-if="errors.players[index].first_name" class="text-sm">
            {{ $t(`requirements.field`) }}
        </TextImportant>

        <InputBase
            v-model="data.players[index].last_name"
            autocomplete="family-name"
            name="family-name"
            :placeholder="$t(`components.input.player.last_name`)"
        />
        <TextImportant v-if="errors.players[index].last_name" class="text-sm">
            {{ $t(`requirements.field`) }}
        </TextImportant>

        <InputNumber
            v-model="data.players[index].age"
            autocomplete="age"
            name="age"
            :placeholder="$t(`components.input.player.age`)"
            :min="10"
            :max="99"
            pattern="^[1-9][0-9]$"
        />
        <TextImportant v-if="errors.players[index].age" class="text-sm">
            {{ $t(`requirements.age`) }}
        </TextImportant>
    </fieldset>
</template>
