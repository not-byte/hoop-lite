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
    <main class="w-full h-full grid place-content-center">
        <form
            @submit.prevent="register()"
            class="w-screen sm:w-[75vw] lg:w-[25vw] flex flex-col gap-4 items-center px-3 mt-6 sm:mt-24 mb-24"
        >
            <component :is="currentStage" />
        </form>
    </main>
</template>
