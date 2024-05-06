<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const config = useRuntimeConfig();
const routes = [
  "teams",
  "standings",
  "live",
  "schedule",
  "leaderboard",
  "players",
];

const logout = (to?: string) => {
  useCookie("token", { sameSite: true }).value = null;

  navigateTo(to ? to : "/auth/login");
};
</script>

<template>
  <section class="relative w-screen h-screen grid grid-rows-1 grid-cols-8 gap-4">
    <aside class="flex flex-col col-span-1 gap-4 bg-high/10">
      <header class="w-full bg-blood">
        <h3>
          {{ config.public.name }}
        </h3>
        <NuxtLink
          external
          target="_blank"
          rel="noreferrer"
          to="https://github.com/not-byte/tournament-app"
        >
          {{ config.public.version }}
        </NuxtLink>
      </header>
      <nav class="flex-grow">
        <ul class="flex flex-col gap-4">
          <li class="flex flex-row gap-2 bg-mid/25">
            <IconUser/>
            <NuxtLink to="/dashboard" class="text-white font-bold">
              {{ $t(`routes.dashboard.name`) }}
            </NuxtLink>
          </li>
          <li v-for="route in routes" :key="route" class="flex flex-row gap-2">
            <IconUser/>
            <NuxtLink :to="`/dashboard/${route}`">
              {{ $t(`routes.dashboard.children.${route}.name`) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <ButtonAccount/>
    </aside>
    <section class="w-full h-full grid grid-flow-row col-start-2 col-end-9">
      <NuxtPage />
    </section>
  </section>
</template>
