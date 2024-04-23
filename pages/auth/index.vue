<script setup async lang="ts">
definePageMeta({
  middleware: ["query"],
});

const routeName = getPath();
const { token } = useRoute().query;
let status = false;

status = Array.isArray(token);

const { data: response } = await useFetch("/api/auth/verify", {
    headers: {
      authorization: token as string,
    },
  },
);

status = response.value ? response.value.authorized : false;
</script>

<template>
  <section class="flex flex-col sm:max-w-48 md:max-w-[18rem] lg:max-w-[24rem]">
    <header class="place-content-center mb-6 text-center">
      <h1>
        {{ $t(`routes.${routeName}.content.${status}.content.header.title`) }}
      </h1>
      <p>
        {{ $t(`routes.${routeName}.content.${status}.content.header.description`) }}
      </p>
    </header>
    <ButtonLink link="/auth/register">
      {{ $t(`routes.${routeName}.content.${status}.content.button`) }}
    </ButtonLink>
    <aside class="mt-3">
      <p class="text-high text-sm text-center">
        {{ $t(`routes.${routeName}.content.${status}.content.aside.title`) }}
        <NuxtLink to="/auth/register" class="text-blood underline">
          {{ $t(`routes.${routeName}.content.${status}.content.aside.description`) }}
        </NuxtLink>
      </p>
    </aside>
  </section>
</template>
