<script setup lang="ts">
const routes = [
  {
    name: "home",
    path: "/dashboard",
  },
  {
    name: "teams",
    path: "/dashboard/teams",
  },
  {
    name: "live",
    path: "/dashboard/live",
  },
  {
    name: "leaderboard",
    path: "/dashboard/leaderboard",
  },
  {
    name: "schedule",
    path: "/dashboard/schedule",
  },
];
</script>

<template>
  <nav class="flex-grow">
    <ul>
      <li v-for="route in routes" :key="route.name">
        <NuxtLink :to="route.path">
          {{ $t(`navigation.routes.${route.name}`) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
