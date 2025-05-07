<script setup lang="ts">
const stages = [
    resolveComponent("FormStart"),
    resolveComponent("FormTeam"),
    resolveComponent("FormPlayers"),
    resolveComponent("FormSummary"),
    resolveComponent("FormSent")
];
const { stage, data, next } = useStageManager();
const currentStage = computed(() => stages.at(stage.value ?? 0));

async function register() {
    useFetch("/api/form", { method: "POST", body: data.value });

    next();
}
</script>

<template>
    <main>
        <form
            @submit.prevent="register()"
            class="w-full flex flex-col items-center justify-stretch gap-3"
        >
            <component :is="currentStage" />
        </form>
    </main>
</template>
