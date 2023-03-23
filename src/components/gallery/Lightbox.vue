<script setup>
// Properties
defineProps({
  name: String,
  link: String,
  description: String
})

// Emits
const emit = defineEmits(['close'])
</script>

<template>
  <!-- Wrapper -->
  <div class="flex flex-col fixed inset-0 items-center justify-center z-50 md:flex-row">
    <!-- Background -->
    <div class="backdrop-brightness-50 fixed inset-0" @click="emit('close')"/>

    <!-- Lightbox -->
    <div class="h-5/6 w-11/12 z-50 md:w-2/5" @click="emit('close')">
      <img class="h-full object-contain w-full" loading="lazy" :src="link"/>
    </div>
    <div class="md:w-1/12"/>
    <div class="bg-white break-all h-1/6 p-4 overflow-y-auto w-full z-50 md:h-auto md:p-8 md:rounded-xl md:max-w-2/5">
      <h1 class="font-bold mb-4 text-xl">{{ name }}</h1>
      <div v-html="description"/>
    </div>
  </div>
</template>
