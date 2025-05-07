<script lang="ts" setup>
const { stage, data, previous, next } = useStageManager();

const errors = ref(
  Array.from({ length: data.value.players?.length || 4 }, () => ({
    first_name: false,
    last_name: false,
    age: false
  }))
);

const validate = () => {
  let valid = true;

  data.value.players?.forEach((player, index) => {
    if (index === 3) return;

    const first = !!player.first_name?.trim();
    const last = !!player.last_name?.trim();
    const age = typeof player.age === "number" && player.age >= 10 && player.age <= 99;

    errors.value[index].first_name = !first;
    errors.value[index].last_name = !last;
    errors.value[index].age = !age;

    if (!first || !last || !age) {
      valid = false;
    }
  });

  return valid;
};

const handleNext = () => {
  if (validate()) {
    next();
  }
};
<script lang="js" setup>
const { stage, data } = useStageManager();
</script>



<template>
<<<<<<< HEAD
  <h2 class="text-center">
    <span>{{ stage }}/3</span>
    {{ $t(`pages.index.content.form.players.title`) }}
  </h2>

  <fieldset
    v-for="(player, index) in data.players"
    :key="index"
    class="w-full flex flex-col gap-3"
  >
    <label>
      {{ $t(`components.input.player.label`) }} {{ index + 1 }}
    </label>

    <InputBase
      v-model="player.first_name"
      complete="given-name"
      :placeholder="$t(`components.input.player.first_name`)"
    />
    <p v-if="errors[index].first_name" class="text-red-600 text-sm">
      Imię jest wymagane.
    </p>

    <InputBase
      v-model="player.last_name"
      complete="family-name"
      :placeholder="$t(`components.input.player.last_name`)"
    />
    <p v-if="errors[index].last_name" class="text-red-600 text-sm">
      Nazwisko jest wymagane.
    </p>

    <InputNumber
      v-model="player.age"
      complete="age"
      :placeholder="$t(`components.input.player.age`)"
      :min="10"
      :max="99"
      pattern="^[1-9][0-9]$"
    />
    <p v-if="errors[index].age" class="text-red-600 text-sm">
      Wiek musi być liczbą od 10 do 99.
    </p>
  </fieldset>

  <aside class="w-full grid grid-cols-2 gap-3">
    <ButtonBase type="button" @click="previous()" >
      {{ $t(`components.button.previous`) }}
    </ButtonBase>
    <ButtonBase type="button" @click="handleNext()" >
      {{ $t(`components.button.next`) }}
    </ButtonBase>
  </aside>
=======
    <h2 class="text-center">
        <span>{{ stage }}/3</span>
        {{ $t(`pages.index.content.players.title`) }}
    </h2>

    <fieldset
        v-for="index in Object.keys(data.players)"
        :key="index"
        class="w-full grid grid-flow-row gap-3"
    >
        <label :for="`player-${index}`">
            {{ $t(`components.input.player.label`) }}
            {{ parseInt(index) + 1 }}
        </label>
        <InputBase
            v-model="data.players[index].first_name"
            autocomplete="given-name"
            name="given-name"
            :id="`player-${index}`"
            :placeholder="$t(`components.input.player.first_name`)"
        />
        <InputBase
            v-model="data.players[index].last_name"
            autocomplete="family-name"
            name="family-name"
            :placeholder="$t(`components.input.player.last_name`)"
        />
        <InputNumber
            v-model="data.players[index].age"
            autocomplete="age"
            name="age"
            :placeholder="$t(`components.input.player.age`)"
            :min="10"
            :max="99"
            pattern="^[1-9][0-9]$"
        />
    </fieldset>
>>>>>>> 6a9e8a0354d360735a8287f07607076eca8e834b
</template>
