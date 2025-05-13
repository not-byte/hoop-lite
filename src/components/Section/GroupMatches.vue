<template>
  <div class="p-4 ">
    <h3 class="text-xl font-semibold text-crimson text-center mb-4">
      Mecze grupy {{ label }}
    </h3>
    <ul class="grid grid-rows-3 gap-2">
      <li
        v-for="(match, index) in matchups"
        :key="index"
        class="text-center rounded-lg bg-white border-crimson p-2 grid grid-cols-[2fr,1fr,2fr] justify-center gap-2"
      >
        <span class="">{{ match.teamA.name }}</span> 
        <TextImportant class="">vs</TextImportant> 
        <span class="">{{ match.teamB.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Importujemy 'defineProps' i 'computed' z Vue
import { defineProps, computed } from 'vue'

// Określamy właściwości (props) komponentu
const props = defineProps<{
  label: string
  group: Array<{ name: string }>
}>()

// Tworzymy obliczane mecze dla grupy
const matchups = computed(() => {
  const g = props.group
  if (!g || g.length < 3) return []
  return [
    { teamA: g[0], teamB: g[1] },
    { teamA: g[0], teamB: g[2] },
    { teamA: g[1], teamB: g[2] },
  ]
})
</script>
