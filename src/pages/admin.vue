<script lang="ts" setup>
definePageMeta({
    middleware: (_, { query: { token } }) => {
        if (token === "KlubowyRudzielec123") {
            return;
        }

        return navigateTo("/");
    }
});

const { data: teams } = await useFetch("/api/form");
</script>

<template>
    <main>
        <IconLogo width="200" height="200" />

        <h1 class="text-center">
            {{ $t("pages.admin.title") }}
        </h1>

        <p class="text-justify max-w-2xl">
            {{ $t("pages.admin.description") }}
        </p>

        <section
            class="w-full max-w-6xl grid gap-6 grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 grid-cols-1 sm:grid-cols-3"
        >
            <div
                v-for="(team, index) in teams"
                :key="index"
                class="bg-white shadow rounded-xl p-4 border border-gray-200"
            >
                <h2 class="text-lg font-bold text-blue-700">
                    {{ team.name || "Unnamed Team" }}
                </h2>
                <p class="text-sm text-gray-600">
                    <strong>Email:</strong> {{ team.email }}<br />
                    <strong>Phone:</strong> {{ team.phone || "N/A" }}<br />
                    <strong>Category:</strong> {{ team.category || "N/A" }}
                </p>

                <div class="mt-4">
                    <span
                        class="inline-block px-3 py-1 text-xs font-medium rounded-full"
                        :class="{
                            'bg-green-100 text-green-800': team.accepted,
                            'bg-red-100 text-red-800': !team.accepted
                        }"
                    >
                        {{ team.accepted ? "Accepted" : "Not Accepted" }}
                    </span>
                </div>

                <div class="mt-3">
                    <h3 class="text-md font-semibold mb-1">Players</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div
                            v-for="(player, pIndex) in team.players"
                            :key="pIndex"
                            class="p-2 bg-gray-50 rounded border"
                        >
                            <p>
                                <strong>Name:</strong>
                                {{ player.first_name || "—" }}
                                {{ player.last_name || "—" }}
                            </p>
                            <p>
                                <strong>Age:</strong>
                                {{ player.age || "N/A" }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
