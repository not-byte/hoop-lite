<script setup lang="ts">
setTimeout(() => navigateTo("/dashboard"), 3000)
</script>

<template>
  <h1>{{ $t('welcome') }}</h1>
</template>