<script lang="js" setup>
const { stage, data, previous, next } = useStageManager();
</script>

<template>
    <h2 class="text-center">
        <span>{{ stage }}/3</span>
        {{ $t(`pages.index.content.form.players.title`) }}
    </h2>

    <fieldset
        v-for="index in Object.keys(data.players)"
        :key="index"
        class="w-full flex flex-col gap-3"
    >
        <label>
            {{ $t(`components.input.player.label`) }}
            {{ parseInt(index) + 1 }}
        </label>
        <InputBase
            v-model="data.players[index].first_name"
            complete="given-name"
            :placeholder="$t(`components.input.player.first_name`)"
        />
        <InputBase
            v-model="data.players[index].last_name"
            complete="family-name"
            :placeholder="$t(`components.input.player.last_name`)"
        />
        <InputNumber
            v-model="data.players[index].age"
            complete="age"
            :placeholder="$t(`components.input.player.age`)"
            :min="10"
            :max="99"
            pattern="^[1-9][0-9]$"
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
