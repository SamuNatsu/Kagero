<script setup>
// Components
import HeaderVue from './components/Header.vue'
import GridGalleryVue from './components/gallery/GridGallery.vue'
import SwiperGalleryVue from './components/gallery/SwiperGallery.vue'
</script>

<template>
  <!-- Header -->
  <header-vue/>

  <!-- Sections -->
  <section class="bg-red-50 mt-24 py-8">
    <h1 class="font-bold text-center text-3xl">Grid gallery</h1>
    <grid-gallery-vue name="example" class="m-auto" style="max-width: 80%"/>
  </section>
  <section class="bg-orange-50 mt-12 py-8">
    <h1 class="font-bold text-center text-3xl">Swiper gallery</h1>
    <swiper-gallery-vue name="example" height="50vh" class="my-10"/>
  </section>
</template>
