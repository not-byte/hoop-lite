<script setup lang="ts">
import LogoutIcon from "~/components/icons/LogoutIcon.vue";
</script>

<template>
  <UButton @click="logoutRedirect()" label="Logout" variant="solid" block>
    <template #leading>
      <LogoutIcon/>
    </template>
  </UButton>
</template>