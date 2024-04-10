<script setup lang="ts">
const routeName = (useRouter().currentRoute.value.name as string).split("___")[0] || "default";
</script>

<template>
  <section class="bg-smoke p-4 rounded-xl hover:shadow-inset hover:shadow-light ease-out duration-500">
    <section>
      <h1 class="text-center">
        {{ $t(`routes.${routeName}.content.header.title`) }}
      </h1>
      <p class="text-center">
        {{ $t(`routes.${routeName}.content.header.description`) }}
      </p>
    </section>
    <section class="grid grid-cols-3 gap-4 place-content-center">
      <section
        v-for="i in 3"
        :key="i"
        class="relative bg-light p-4 rounded-xl hover:shadow-inset hover:shadow-light ease-out duration-500"
      >
        <h3>Instagram</h3>
        <p>Zobacz nasze najnowsze zdjęcia!</p>
        <NuxtLink
          external
          target="_blank"
          rel="noopener"
          :to="`https://www.instagram.com/knury.knurow`"
          class="w-full h-full absolute z-50 inset-0"
        ></NuxtLink>
      </section>
    </section>
  </section>
</template>
