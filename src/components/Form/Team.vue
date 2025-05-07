<script lang="ts" setup>
const { Category, stage, data, previous, next } = useStageManager();

const errors = ref({
  name: false,
  category: false,
  email: false,
  phone: false
});

const isValidEmail = (email?: string) => {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPhone = (phone?: string) => {
  if (!phone) return false;
  return phone.replace(/\D/g, "").length >= 9;
};


const validate = () => {
  const d = data.value;

  errors.value.name = !d.name;
  errors.value.category = !d.category;
  errors.value.email = !isValidEmail(d.email);
  errors.value.phone = !isValidPhone(d.phone);

  return !Object.values(errors.value).includes(true);
};
const handleNext = () => {
  if (validate()) {
    next();
  }
}
</script>

<template>
  <h2 class="text-center">
    <span>{{ stage }}/3</span>
    {{ $t(`pages.index.content.form.team.title`) }}
  </h2>

  <fieldset class="w-full flex flex-col gap-3">
    <!-- Nazwa drużyny -->
    <InputBase
      v-model="data.name"
      complete="username"
      :placeholder="$t(`components.input.team.name`)"
      type="text"
    />
    <p v-if="errors.name" class="text-red-600 text-sm">To pole jest wymagane.</p>

    <!-- Kategoria -->
    <aside
      class="w-full h-12 rounded-lg py-2 px-4 border-1 border-mid placeholder:text-mid"
    >
      <select
        v-model="data.category"
        required
        :placeholder="$t(`components.select.category.0`)"
        class="bg-transparent w-full h-full outline-none"
      >
        <option disabled selected :value="Category.NOT_SELECTED">
          {{ $t(`components.select.category.0`) }}
        </option>
        <option :value="Category.AMATEUR">
          {{ $t(`components.select.category.1`) }}
        </option>
        <option :value="Category.PRO">
          {{ $t(`components.select.category.2`) }}
        </option>
      </select>
    </aside>
    <p v-if="errors.category" class="text-red-600 text-sm">Wybierz kategorię.</p>

    <!-- E-mail -->
    <InputBase
      v-model="data.email"
      complete="email"
      :placeholder="$t(`components.input.team.email`)"
      type="email"
    />
    <p v-if="errors.email" class="text-red-600 text-sm">Podaj poprawny adres e-mail.</p>

    <!-- Telefon -->
    <InputBase
      v-model="data.phone"
      complete="tel"
      :placeholder="$t(`components.input.team.phone`)"
      type="tel"
    />
    <p v-if="errors.phone" class="text-red-600 text-sm">Podaj poprawny numer telefonu (min. 9 cyfr).</p>
  </fieldset>

  <aside class="w-full grid grid-cols-2 gap-3">
    <ButtonBase type="button" @click="previous()">
      {{ $t(`components.button.previous`) }}
    </ButtonBase>
    <ButtonBase type="button" @click="handleNext()">
      {{ $t(`components.button.next`) }}
    </ButtonBase>
  </aside>
</template>
