<script setup lang="ts">
const routeName = getPath();
const data = ref<FormPayload>({
  email: "",
});

const onTyping = (key: string, value: any) => (data.value[key as keyof Object] = value);

const registration = async () => {
  if (!validateData(data.value)) return;

  const response = await $fetch("/api/data/teams", {
    method: "PUT",
    body: data.value,
  });

  if (!response) return;

  return navigateTo("/dashboard");
};
</script>

<template>
  <section class="w-screen h-screen grid place-content-center">
    <form @submit.prevent="registration()">
      <InputBase/>
    </form>
    Knurowski Streetball
    <br />
    Rejestracja drużyny
    <br />
    Nazwa
    <br />
    Kategoria
    <br />
    Miasto
    <br />
    Gracz 1
    <br />
    Imię
    <br />
    Nazwisko
    <br />
    Pseudonim
    <br />
    Wiek
    <br />
    Gracz 2
    <br />
    Imię
    <br />
    Nazwisko
    <br />
    Pseudonim
    <br />
    Wiek
    <br />
    Gracz 3
    <br />
    Imię
    <br />
    Nazwisko
    <br />
    Pseudonim
    <br />
    Wiek
    <br />
    Adres e-mail kapitana
    <br />
    Numer telefonu kapitana
    <br />
    <ButtonBase>
      Zatwierdź
    </ButtonBase>
  </section>
</template>
