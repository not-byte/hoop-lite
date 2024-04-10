<script setup lang="ts">
const routes = [
  "teams",
  "standings",
  "liv",
  "schedule",
  "leaderboard",
  "players",
];
</script>

<template>
  <nav class="flex-grow">
    <ul>
      <li>
        <NuxtLink to="/dashboard">
          {{ $t(`routes.dashboard.name`) }}
        </NuxtLink>
      </li>
      <li v-for="route in routes" :key="route">
        <NuxtLink :to="`/dashboard/${route}`">
          {{ $t(`routes.dashboard.children.${route}.name`) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
