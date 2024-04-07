<script setup async lang="ts">
definePageMeta({
  pageTransition: {
    name: "rotate",
  },
});

// const {
//   data: image,
//   pending,
//   status,
// } = useFetch("https://api.waifu.pics/sfw/neko", {
//   transform: (image) => image.url,
//   lazy: true,
// });

const data = ref({
  image: "",
  pending: true,
});
</script>

<template>
  <section>
    <p>Thank you for verifying your account!</p>
    ee
  </section>
</template>
