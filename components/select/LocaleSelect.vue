<script setup lang="ts">
const { locale, locales } = useI18n();
</script>

<template>
  <select v-model="locale">
    <option v-for="locale in locales" :key="locale.code" :value="locale.code">
      {{ locale.name }}
    </option>
  </select>
</template>
