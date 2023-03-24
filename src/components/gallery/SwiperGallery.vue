<script setup>
import { ref } from 'vue'
import { register } from 'swiper/element/bundle'
import config from '../../assets/config.json'

// Components
import LightboxVue from './Lightbox.vue'

// Properties
defineProps({
  name: String,
  height: String,
  noResponse: Boolean,
  navigation: Boolean | Object,
  pagination: Boolean | Object,
  autoplay: Boolean | Object
})

// Register swiper
register()

// Reactive
const showName = ref(false)
const lightbox = ref(false)
</script>

<template>
  <!-- Wrapper -->
  <div>
    <!-- Swiper -->
    <swiper-container
      :navigation="navigation === undefined ? true : navigation" 
      :pagination="pagination === undefined ? { clickable: true } : pagination" 
      :autoplay="autoplay === undefined ? {
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      } : autoplay"
      class="relative"
    >
      <swiper-slide
        v-for="i in config.galleries[name]"
        lazy="true"
        @mouseenter="showName = true"
        @mouseleave="showName = false"
      >
        <div class="relative" :style="{ height }">
          <!-- Name -->
          <transition>
            <div 
              v-if="showName && noResponse === false"
              class="absolute backdrop-brightness-50 cursor-pointer flex inset-0 items-center justify-center select-none"
              @click="lightbox = { name: i.name, link: i.link, description: i.description }"
            >
              <h1 class="text-3xl text-white">{{ i.name }}</h1>
            </div>
          </transition>

          <!-- Picture -->
          <img class="object-cover w-full" :style="{ height }" :src="i.link" loading="lazy">
        </div>
      </swiper-slide>
    </swiper-container>

    <!-- Lightbox -->
    <lightbox-vue
      v-if="lightbox !== false && noResponse === false"
      :name="lightbox.name"
      :link="lightbox.link"
      :description="lightbox.description"
      @close="lightbox = false"
    />
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity .2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
