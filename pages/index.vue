<script setup lang="ts">
const routeName = getPath();
</script>

<template>
  <section class="w-screen h-screen grid place-content-center">
    <section class="flex flex-col sm:max-w-48 md:max-w-[18rem] lg:max-w-[48rem]">
      <HeaderForm />
      <section class="grid grid-cols-3 gap-4 place-content-center">
        <section
          v-for="i in 3"
          :key="i"
          class="relative bg-blood p-4 rounded-xl hover:shadow-inset hover:shadow-light ease-out duration-500"
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
  </section>
</template>
