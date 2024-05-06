<script setup lang="ts">
const { locale, locales, setLocaleCookie } = useI18n();
</script>

<template>
  <select @change="setLocaleCookie(locale)" v-model="locale">
    <option v-for="locale in locales" :key="locale.code" :value="locale.code">
      {{ locale.name }}
    </option>
  </select>
</template>
