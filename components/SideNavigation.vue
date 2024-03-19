<template>
  <nav class="flex-grow">
    <ul>
      <li v-for="i in 5">
        <ULink>
          Test {{ i }}
        </ULink>
      </li>
    </ul>
  </nav>
</template>