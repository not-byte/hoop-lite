<script setup lang="ts">
const routeName = getPath(); 
const { data: leaderboards } = await useFetch("/api/data/leaderboards");
</script>

<template>
  <div class="w-full h-fit bg-smoke rounded-outside p-4">
    <HeaderDashboard />
    <p v-for="players, key in leaderboards">
      <h2>
        {{ $t(`routes.${routeName}.content.sections.${key}`) }}
      </h2>
      <aside class="grid grid-cols-3">
        <p v-for="{ first_name, last_name, value} in players">
        {{  first_name }} {{ last_name }}
        <span class="font-bold">
          {{ value }}
        </span>
      </p>
      </aside>
    </p>
  </div>
</template>