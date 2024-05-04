<script setup lang="ts">
const time = ref<string[]>(
    formatHours(new Date("2024-05-05T12:00:00.000+02:00"))
)
// const routeName = getPath();
// const data = ref<FormPayload>({
//   email: "",
// });
//
// const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);
//
// const registration = async () => {
//   if (!validateData(data.value)) return;
//
//   const response = await $fetch("/api/data/teams", {
//     method: "PUT",
//     body: data.value,
//   });
//
//   if (!response) return;
//
//   return navigateTo("/dashboard");
// };
onMounted(() => {
  setInterval(() => {
    time.value = formatHours(new Date("2024-05-05T12:00:00.000+02:00"))
  }, 60 * 1000)
})
</script>

<template>
  <section class="w-screen h-screen grid place-content-center font-body uppercase">
    <aside class="relative w-full h-20">
      <IconHeader class="h-fit"/>
      <IconLogo class="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-16 h-48"/>
      <span class="absolute top-0 left-[24%] -translate-x-1/2 translate-y-3 font-bold text-white text-[3rem]">
        {{ time[0] }}H
      </span>
      <span class="absolute top-0 right-[23%] translate-x-1/2 translate-y-3 font-bold text-white text-[3rem]">
        {{ time[1] }}M
      </span>
    </aside>
    <h1 class="text-[2rem] font-bold text-center mt-12">
      Do otwarcia rejestracji
    </h1>
    <span class="text-3xl text-white tracking-widest bg-blood p-3 text-center mt-4">
      Knurowski Streetball
    </span>
  </section>
<!--  <section class="w-screen h-screen grid place-content-center">-->
<!--    <form @submit.prevent="registration()">-->
<!--      <InputBase/>-->
<!--    </form>-->
<!--    Knurowski Streetball-->
<!--    <br />-->
<!--    Rejestracja drużyny-->
<!--    <br />-->
<!--    Nazwa-->
<!--    <br />-->
<!--    Kategoria-->
<!--    <br />-->
<!--    Miasto-->
<!--    <br />-->
<!--    Gracz 1-->
<!--    <br />-->
<!--    Imię-->
<!--    <br />-->
<!--    Nazwisko-->
<!--    <br />-->
<!--    Pseudonim-->
<!--    <br />-->
<!--    Wiek-->
<!--    <br />-->
<!--    Gracz 2-->
<!--    <br />-->
<!--    Imię-->
<!--    <br />-->
<!--    Nazwisko-->
<!--    <br />-->
<!--    Pseudonim-->
<!--    <br />-->
<!--    Wiek-->
<!--    <br />-->
<!--    Gracz 3-->
<!--    <br />-->
<!--    Imię-->
<!--    <br />-->
<!--    Nazwisko-->
<!--    <br />-->
<!--    Pseudonim-->
<!--    <br />-->
<!--    Wiek-->
<!--    <br />-->
<!--    Adres e-mail kapitana-->
<!--    <br />-->
<!--    Numer telefonu kapitana-->
<!--    <br />-->
<!--    <ButtonBase>-->
<!--      Zatwierdź-->
<!--    </ButtonBase>-->
<!--  </section>-->
</template>
