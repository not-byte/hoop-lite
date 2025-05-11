<script lang="ts" setup>
definePageMeta({
    middleware: "auth"
});

const { data: teams, error } = await useFetch("/api/form");
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

        <ul v-if="!error" class="w-full grid gap-6 grid-rows-1">
            <li
                v-for="({ team, players }, index) in teams"
                :key="index"
                class="grid gap-3"
            >
                <h2 class="text-crimson">
                    {{ team.name || "Unnamed Team" }}
                </h2>
                <ul>
                    <li>
                        <p><strong>Adres e-mail:</strong> {{ team.email }}</p>
                    </li>
                    <li>
                        <p>
                            <strong>Numer telefonu:</strong>
                            {{ team.phone || "N/A" }}
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Kategoria rozgrywek:</strong>
                            {{ team.category || "N/A" }}
                        </p>
                    </li>
                </ul>

                <ul
                    class="grid col-span-1 sm:col-span-2 grid-cols-1 sm:grid-cols-2 gap-2"
                >
                    <div
                        v-for="(player, pIndex) in players"
                        :key="pIndex"
                        class="p-3 rounded border border-mid"
                    >
                        <p>
                            <strong>Imię i nazwisko:</strong>
                            {{ player.first_name || "—" }}
                            {{ player.last_name || "—" }}
                        </p>
                        <p>
                            <strong>Wiek:</strong>
                            {{ player.age || "N/A" }}
                        </p>
                    </div>
                </ul>
            </li>
        </ul>
    </main>
</template>
