<script setup lang="ts">
import LogoutIcon from "~/components/icons/LogoutIcon.vue";
</script>

<template>
  <button @click="logoutRedirect()">
    <LogoutIcon />
    {{ $t("navigation.logout") }}
  </button>
</template>
