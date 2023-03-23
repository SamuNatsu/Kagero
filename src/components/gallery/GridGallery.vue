<script setup>
import { ref } from 'vue'
import config from '../../assets/config.json'

// Components
import LightboxVue from './Lightbox.vue'

// Properties
defineProps({ name: String })

// Reactive
const lightbox = ref(false)
</script>

<template>
  <!-- Wrapper -->
  <div class="gallery grid gap-4 my-10 px-10">
    <!-- Pictures -->
    <div v-for="i in config.galleries[name]" :title="i.name">
      <img 
        class="cursor-pointer object-cover rounded-xl w-full" 
        style="height: 25vh" 
        :src="i.link"
        loading="lazy"
        @click="lightbox = { 'name': i.name, 'link': i.link, 'description': i.description }"
      />
    </div>

    <!-- Lightbox -->
    <lightbox-vue
      v-if="lightbox !== false" 
      :name="lightbox.name"
      :link="lightbox.link" 
      :description="lightbox.description" 
      @close="lightbox = false"
    />
  </div>
</template>

<style lang="postcss" scoped>
.gallery {
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
}
</style>
