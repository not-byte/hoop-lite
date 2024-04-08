<script setup lang="ts">
let { data: teams } = await useFetch("/api/data/teams");
</script>

<template>
  <section class="w-full h-full flex flex-col overflow-hidden">
    <h1>Teams</h1>
    <section class="grid grid-cols-4 w-full h-full overflow-y-scroll gap-4 box-content">
      <NuxtLink v-for="{ name, city, created, players } in teams" :key="name" :to="`/dashboard/teams/${name.replaceAll(` `, `-`).toLowerCase()}`" class="h-full p-4 rounded-inside">
        <h2>
          {{ name }}
        </h2>
        <p>
          {{ city }} - {{ new Date(created).getFullYear() }}
        </p>
        <h3>
          Players
        </h3>
        <aside v-for="{ first_name, last_name, number } in players" :key="number">
          <h4>
            {{ first_name }} {{ last_name }} #{{ number }}
          </h4>
        </aside>
      </NuxtLink>
    </section>
  </section>
</template>