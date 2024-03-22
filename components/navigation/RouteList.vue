<script setup lang="ts">
const route = useRoute();
const routes = [
  {
    name: "home",
    path: "./",
  },
  {
    name: "teams",
    path: "./teams",
  },
  {
    name: "live",
    path: "./live",
  },
  {
    name: "leaderboard",
    path: "./leaderboard",
  },
  {
    name: "schedule",
    path: "./schedule",
  },
];
</script>

<template>
  <nav class="flex-grow">
    <ul>
      <li v-for="child in routes" :key="child.name">
        <NuxtLink :to="child.path">
          {{ $t(`navigation.routes.${child.name}`) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
