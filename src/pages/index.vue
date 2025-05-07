<script setup lang="ts">
const stages = [
    resolveComponent("FormStart"),
    resolveComponent("FormTeam"),
    resolveComponent("FormPlayers"),
    resolveComponent("FormSummary"),
    resolveComponent("FormSent")
];
const { stage, next } = useStageManager();
const currentStage = computed(() => stages.at(stage.value ?? 0));
</script>

<template>
    <main>
        <form
            @submit.prevent="next()"
            class="w-full flex flex-col items-center justify-stretch gap-3"
        >
            <component :is="currentStage" />
            <Controls />
        </form>
    </main>
</template>
