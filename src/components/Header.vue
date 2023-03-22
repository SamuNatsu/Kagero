<script setup>
import links from '../assets/links.json'
import navigations from '../assets/navigations.json'
</script>

<template>
  <header>
    <div class="flex items-center">
      <!-- Name -->
      <h1 class="font-bold transition-colors text-2xl hover:text-gray-600">
        <a href="/">Kagero</a>
      </h1>

      <!-- Navigations -->
      <nav class="flex mx-4">
        <a
          v-for="i in navigations"
          class="inline-block mx-2 transition-colors hover:text-gray-600"
          :href="'#' + i.anchor"
        >
          {{ i.name }}
        </a>
      </nav>
    </div>

    <!-- Links -->
    <div class="links flex items-center">
      <a 
        v-for="i in links"
        class="inline-flex items-center mx-2 transition-colors hover:text-gray-600" 
        :href="i.link"
        target="_blank"
      >
        <div>{{ i.name }}</div>
        <img class="h-4 w-4" src="../assets/arrow.svg"/>
      </a>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
header {
  @apply bg-white border-b-2 border-gray-200 border-solid
    flex fixed items-center justify-between
    left-0 px-4 py-2 top-0 w-full
}
</style>
