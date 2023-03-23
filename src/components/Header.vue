<script setup>
import { ref } from 'vue'
import config from '../assets/config.json'

// Reactive
const showPopup = ref(false)
</script>

<template>
  <!-- Header -->
  <header>
    <div class="flex items-center">
      <!-- Title -->
      <h1 class="font-bold transition-colors text-2xl hover:text-gray-600">
        <a href="/">{{ config.header.title }}</a>
      </h1>

      <!-- Navigations -->
      <nav class="hidden mx-4 md:flex">
        <a
          v-for="i in config.header.navigations"
          class="inline-block mx-2 transition-colors hover:text-gray-600"
          :href="'#' + i.anchor"
        >
          {{ i.name }}
        </a>
      </nav>
    </div>

    <!-- Links -->
    <div class="hidden items-center md:flex">
      <a 
        v-for="i in config.header.links"
        class="inline-flex items-center mx-2 transition-colors hover:text-gray-600" 
        :href="i.link"
        target="_blank"
      >
        <div>{{ i.name }}</div>
        <img class="h-4 w-4" src="../assets/img/arrow.svg"/>
      </a>
    </div>

    <!-- Responsive button -->
    <div class="cursor-pointer inline-block md:hidden" @click="showPopup = true">
      <img class="h-8 w-8" src="../assets/img/menu.svg"/>
    </div>
  </header>

  <!-- Pop-up menu -->
  <div v-if="showPopup" class="fixed inset-0 z-50">
    <!-- Background -->
    <div class="backdrop-blur-sm backdrop-brightness-75 fixed inset-0" @click="showPopup = false"/>

    <!-- Side bar -->
    <aside class="bg-white flex flex-col fixed px-4 py-2 right-2 rounded top-2">
      <!-- Close -->
      <div class="absolute cursor-pointer right-2 top-2" @click="showPopup = false">
        <img class="h-6 w-6" src="../assets/img/x.svg"/>
      </div>

      <!-- Navigations -->
      <a
        v-for="i in config.header.navigations"
        class="inline-block mr-12 my-2 transition-colors hover:text-gray-600"
        :href="'#' + i.anchor"
        @click="showPopup = false"
      >
        {{ i.name }}
      </a>

      <hr/>

      <!-- Links -->
      <a 
        v-for="i in config.header.links"
        class="inline-flex items-center mr-12 my-2 transition-colors hover:text-gray-600" 
        :href="i.link"
        target="_blank"
        @click="showPopup = false"
      >
        <div>{{ i.name }}</div>
        <img class="h-4 w-4" src="../assets/img/arrow.svg"/>
      </a>
    </aside>
  </div>
</template>

<style lang="postcss" scoped>
header {
  @apply bg-white border-b-2 border-gray-200 border-solid
    flex fixed items-center justify-between
    left-0 px-4 py-2 top-0 w-full z-40
}
</style>
