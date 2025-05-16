<script lang="ts" setup>
definePageMeta({
  middleware: "auth"
});

const {
  teams,
  loading,
  error,
  addTeam,
  updateTeam,
  deleteTeam
} = useTeamsManager();

const newTeam = ref({
  team: {
    name: "",
    category: 1,
    email: "",
    phone: ""
  },
  players: Array.from({ length: 4 }, () => ({
    first_name: "",
    last_name: "",
    age: null
  })),
  accepted: true
});

const editingIndex = ref<number | null>(null);
const editedTeam = ref<any>(null);

function startEditing(index: number) {
  editingIndex.value = index;
  editedTeam.value = JSON.parse(JSON.stringify(teams.value[index]));
}

async function submitEdit(index: number) {
  if (editedTeam.value) {
    await updateTeam(index, editedTeam.value);
    editingIndex.value = null;
  }
}

function cancelEdit() {
  editingIndex.value = null;
}
</script>

<template>
  <main class="space-y-6 p-6 max-w-7xl mx-auto">
    <div class="flex justify-center">
      <IconLogo class="w-40 h-40" />
    </div>

    <h1 class="text-center text-3xl font-bold text-crimson">
      {{ $t("pages.admin.title") }}
    </h1>

    <p class="text-center text-mid max-w-2xl mx-auto">
      {{ $t("pages.admin.description") }}
    </p>

    <!-- Lista drużyn -->
    <section v-if="!loading && !error" class="space-y-4">
      <ul class="space-y-4 grid grid-flow-row sm:grid-cols-3 grid-cols-1 gap-4">
        <li
          v-for="(entry, index) in teams"
          :key="index"
          class="p-4 border rounded shadow-sm space-y-2"
        >
          <template v-if="editingIndex === index">
            <!-- Edycja drużyny -->
            <input
              v-model="editedTeam.team.name"
              placeholder="Nazwa drużyny"
              class="w-full px-3 py-2 border rounded"
            />
            <input
              v-model="editedTeam.team.email"
              placeholder="Email"
              class="w-full px-3 py-2 border rounded"
            />
            <input
              v-model="editedTeam.team.phone"
              placeholder="Telefon"
              class="w-full px-3 py-2 border rounded"
            />

            <!-- Edycja zawodników -->
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="(player, pIndex) in editedTeam.players"
                :key="pIndex"
                class="space-y-1 border p-2 rounded"
              >
                <input
                  v-model="player.first_name"
                  placeholder="Imię"
                  class="w-full px-2 py-1 border rounded"
                />
                <input
                  v-model="player.last_name"
                  placeholder="Nazwisko"
                  class="w-full px-2 py-1 border rounded"
                />
                <input
                  v-model="player.age"
                  type="number"
                  placeholder="Wiek"
                  class="w-full px-2 py-1 border rounded"
                />
              </div>
            </div>

            <div class="flex gap-2 mt-2">
              <button @click="submitEdit(index)" class="bg-green-600 text-white px-4 py-2 rounded">
                Zapisz
              </button>
              <button @click="cancelEdit" class="bg-gray-400 text-white px-4 py-2 rounded">
                Anuluj
              </button>
            </div>
          </template>

          <template v-else>
            <h2 class="text-xl font-semibold text-crimson">
              {{ entry.team.name || "Unnamed Team" }}
            </h2>
            <p><strong>Email:</strong> {{ entry.team.email }}</p>
            <p><strong>Telefon:</strong> {{ entry.team.phone }}</p>
            <p><strong>Kategoria:</strong> {{ entry.team.category }}</p>

            <ul class="grid grid-cols-2 gap-2">
              <li
                v-for="player in entry.players"
                :key="player.first_name + player.last_name"
                class="p-2 border border-gray-200 rounded"
              >
                <p>{{ player.first_name }} {{ player.last_name }}</p>
                <p class="text-sm text-gray-600">{{ player.age }} lat</p>
              </li>
            </ul>

            <div class="flex gap-2 mt-2">
              <button @click="startEditing(index)" class="bg-blue-500 text-white px-4 py-2 rounded">
                Edytuj
              </button>
              <button @click="deleteTeam(index)" class="bg-red-500 text-white px-4 py-2 rounded">
                Usuń
              </button>
            </div>
          </template>
        </li>
      </ul>
    </section>

    <!-- Dodawanie drużyny -->
    <section class="mt-10 p-4 border rounded shadow-sm space-y-4 bg-white">
      <h3 class="text-lg font-semibold">Dodaj nową drużynę</h3>

      <input
        v-model="newTeam.team.name"
        placeholder="Nazwa drużyny"
        class="w-full px-3 py-2 border rounded"
      />
      <input
        v-model="newTeam.team.email"
        placeholder="Email"
        class="w-full px-3 py-2 border rounded"
      />
      <input
        v-model="newTeam.team.phone"
        placeholder="Telefon"
        class="w-full px-3 py-2 border rounded"
      />

      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="(player, index) in newTeam.players"
          :key="index"
          class="space-y-1 border p-2 rounded"
        >
          <input
            v-model="player.first_name"
            placeholder="Imię"
            class="w-full px-2 py-1 border rounded"
          />
          <input
            v-model="player.last_name"
            placeholder="Nazwisko"
            class="w-full px-2 py-1 border rounded"
          />
          <input
            v-model="player.age"
            type="number"
            placeholder="Wiek"
            class="w-full px-2 py-1 border rounded"
          />
        </div>
      </div>

      <button @click="addTeam(newTeam)" class="bg-crimson text-white px-6 py-2 rounded mt-4">
        Dodaj drużynę
      </button>
    </section>
  </main>
</template>

