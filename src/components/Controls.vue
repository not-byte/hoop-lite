<script lang="ts" setup async>
const { Stage, stage, data, previous, next } = useStageManager();

async function register(): Promise<void> {
    if (stage.value !== Stage.SUMMARY) {
        return;
    }

    if (!data.value) {
        return;
    }

    const { data: response } = await useFetch("/api/form", {
        method: "POST",
        body: data.value
    });

    if (!response.value) {
        return;
    }

    if (response.value.status !== 202) {
        return;
    }

    next();
}
</script>

<template>
    <aside class="w-full grid grid-cols-2 gap-3">
        <template v-if="stage === Stage.START">
            <ButtonBase @click="next()" type="button" class="col-span-2">
                {{ $t(`components.button.start`) }}
            </ButtonBase>
        </template>
        <template v-if="Stage.START < stage && stage < Stage.SENT">
            <ButtonBase @click="previous()" type="button">
                {{ $t(`components.button.previous`) }}
            </ButtonBase>
        </template>
    </aside>
</template>
