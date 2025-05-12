<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useFetch } from '#app'

const { data, error } = await useFetch('/api/teams')

const openedTeam = ref<string | null>(null)
function togglePlayers(teamName: string) {
  openedTeam.value = openedTeam.value === teamName ? null : teamName
}

function getPlayers(teamName: string) {
  const teamData = (data.value || []).find(t => t.team.name === teamName)
  return teamData?.players || []
}

const filteredTeams = computed(() =>
  (data.value || [])
    .filter(t => t.accepted && [1, 2].includes(t.team.category))
    .map(t => t.team)
)

const shuffled = ref([])
if (filteredTeams.value.length >= 12) {
  shuffled.value = [...filteredTeams.value].sort(() => Math.random() - 0.5)
}

const groupLabels = ['A', 'B', 'C', 'D']
const groups = computed(() => {
  const result = {}
  groupLabels.forEach((label, i) => {
    result[label] = shuffled.value.slice(i * 3, i * 3 + 3)
  })
  return result
})

function generateMatchups(group) {
  return [
    { teamA: group[0], teamB: group[1] },
    { teamA: group[0], teamB: group[2] },
    { teamA: group[1], teamB: group[2] },
  ]
}
</script>

<template>
  <main class="px-4 md:px-8 max-w-[1600px] mx-auto">
    <div class="flex justify-center mb-6">
      <IconLogo width="120" height="120" />
    </div>

    <h1 class="text-4xl font-bold text-center text-crimson mb-6">
      {{ $t('pages.bracket.title') }}
    </h1>

    <i18n-t
      tag="p"
      keypath="pages.bracket.description"
      scope="global"
      class="text-justify mb-8"
    >
      <template #about>
        <TextLink to="/about">
          {{ $t('pages.bracket.about') }}
        </TextLink>
      </template>
    </i18n-t>

    <div v-if="error" class="text-red-500 text-center mb-4">
      {{ $t('pages.bracket.error') }}
    </div>

    <div v-if="Object.keys(groups).length">
      <h2 class="text-2xl font-semibold text-crimson text-center mb-4">
        {{ $t('pages.bracket.groups') }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div
          v-for="(group, label) in groups"
          :key="label"
          class="bg-white border-2 border-crimson rounded-2xl p-6 shadow transition duration-300 hover:shadow-lg"
        >
          <h3 class="text-2xl font-semibold text-crimson text-center mb-4">
            Grupa {{ label }}
          </h3>
          <ul class="space-y-2">
            <li
              v-for="team in group"
              :key="team.name"
              class="cursor-pointer text-lg font-medium text-dark"
            >
              <div @click="togglePlayers(team.name)" class="flex justify-between items-center">
                {{ team.name }}
                <span class="text-crimson text-sm">
                  {{ openedTeam === team.name ? '▲' : '▼' }}
                </span>
              </div>
              <ul
                v-if="openedTeam === team.name"
                class="ml-4 mt-2 text-mid text-sm space-y-1"
              >
                <li
                  v-for="player in getPlayers(team.name)"
                  :key="player.first_name + player.last_name"
                >
                  {{ player.first_name }} {{ player.last_name }}, {{ player.age }} lat
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-semibold text-crimson text-center mb-4">
        {{ $t('pages.bracket.groupAndElimination') }}
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 items-start w-full justify-center mb-12">
        <!-- Lewa kolumna z grupami A i C -->
        <div class="space-y-8">
          <div
            v-for="label in ['A', 'C']"
            :key="'group-left-' + label"
            class="bg-white border-2 border-crimson rounded-2xl p-4 shadow"
          >
            <h3 class="text-xl font-semibold text-crimson text-center mb-2">
              Grupa {{ label }}
            </h3>
            <div class="grid grid-cols-1 gap-2">
              <div
                v-for="(match, idx) in generateMatchups(groups[label])"
                :key="idx"
                class="flex flex-col items-center bg-white px-3 py-2 rounded-xl border border-gray-300"
              >
                <span class="font-medium text-dark text-center">{{ match.teamA.name }}</span>
                <span class="text-mid text-sm">vs</span>
                <span class="font-medium text-dark text-center">{{ match.teamB.name }}</span>
              </div>
            </div>
            <div class="mt-2 border-t pt-1 text-center text-xs text-mid italic">
              {{ $t('pages.bracket.groupWinner') }}: <span class="text-dark font-semibold">?</span>
            </div>
          </div>
        </div>

        <!-- Środkowa kolumna z drabinką -->
        <div class="flex flex-col justify-center items-center gap-8 h-full">


          <!-- Półfinał A vs B -->
          <div class="flex flex-col items-center bg-white px-2 py-1 rounded-lg border border-gray-300 w-full max-w-[180px]">
            <span class="text-sm text-dark">Grupa A</span>
            <div class="flex items-center w-full my-1">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="px-2 text-crimson text-sm">vs</span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <span class="text-sm text-dark">Grupa B</span>
          </div>

          <!-- Finał -->
          <div class="flex flex-col items-center bg-yellow-400 px-2 py-1 rounded-lg border border-gray-300 w-full max-w-[180px]">
            <span class="text-sm text-white">Zwycięzca A/B</span>
            <div class="flex items-center w-full my-1">
              <div class="flex-grow border-t border-white"></div>
              <span class="px-2 text-white text-sm">vs</span>
              <div class="flex-grow border-t border-white"></div>
            </div>
            <span class="text-sm text-white">Zwycięzca C/D</span>
          </div>

          <!-- Półfinał C vs D -->
          <div class="flex flex-col items-center bg-white px-2 py-1 rounded-lg border border-gray-300 w-full max-w-[180px]">
            <span class="text-sm text-dark">Grupa C</span>
            <div class="flex items-center w-full my-1">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="px-2 text-crimson text-sm">vs</span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <span class="text-sm text-dark">Grupa D</span>
          </div>
        </div>

        <!-- Prawa kolumna z grupami B i D -->
        <div class="space-y-8">
          <div
            v-for="label in ['B', 'D']"
            :key="'group-right-' + label"
            class="bg-white border-2 border-crimson rounded-2xl p-4 shadow"
          >
            <h3 class="text-xl font-semibold text-crimson text-center mb-2">
              Grupa {{ label }}
            </h3>
            <div class="grid grid-cols-1 gap-2">
              <div
                v-for="(match, idx) in generateMatchups(groups[label])"
                :key="idx"
                class="flex flex-col items-center bg-white px-3 py-2 rounded-xl border border-gray-300"
              >
                <span class="font-medium text-dark text-center">{{ match.teamA.name }}</span>
                <span class="text-mid text-sm">vs</span>
                <span class="font-medium text-dark text-center">{{ match.teamB.name }}</span>
              </div>
            </div>
            <div class="mt-2 border-t pt-1 text-center text-xs text-mid italic">
              {{ $t('pages.bracket.groupWinner') }}: <span class="text-dark font-semibold">?</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-mid">
      {{ $t('pages.bracket.noTeams') }}
    </div>
  </main>
</template>
