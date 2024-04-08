<script setup lang="ts">
let teamName = Array.isArray(useRoute().params.team)
  ? useRoute().params.team[0]
  : useRoute().params.team;

const { data: team } = useFetch(`/api/data/teams/${teamName}`, {
  transform: team => team[0]
});
</script>

<template>
  <section>
    <p v-for="item in team">
      {{ item }}
    </p>
  </section>
</template>
