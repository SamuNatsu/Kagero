<script setup>
// Components
import HeaderVue from './components/Header.vue'
import FooterVue from './components/Footer.vue'
import GridGalleryVue from './components/gallery/GridGallery.vue'
import SwiperGalleryVue from './components/gallery/SwiperGallery.vue'
</script>

<template>
  <!-- Header -->
  <header-vue/>

  <!-- Custom sections -->
  <a name="introduction"/>
  <section class="bg-yellow-50 mt-24 py-8">
    <h1 class="font-bold text-center text-3xl">Introduction</h1>
    <h2 class="animate-bounce font-bold my-12 text-center text-2xl">A Static Personal Porfolio</h2>
  </section>
  <section class="bg-green-50 mt-12 relative">
    <div class="absolute flex items-center justify-center inset-0 z-10">
      <div class="absolute backdrop-brightness-50 inset-0 z-10"/>
      <div class="z-20">
        <h1 class="animate-bounce font-bold text-5xl text-white">Another Introduction</h1>
      </div>
    </div>
    <swiper-gallery-vue
      name="example" 
      height="100vh" 
      :no-response="true"
      :pagination="false"
      :navigation="false"
      :autoplay="true"
    /> 
  </section>

  <a name="gallery-components"/>
  <section class="bg-red-50 mt-12 py-8">
    <h1 class="font-bold text-center text-3xl">Grid gallery</h1>
    <grid-gallery-vue name="example" class="m-auto" style="max-width: 80%"/>
  </section>
  <section class="bg-orange-50 mt-12 py-8">
    <h1 class="font-bold text-center text-3xl">Swiper gallery</h1>
    <swiper-gallery-vue name="example" height="50vh" class="my-10"/>
  </section>
  
  <a name="footer"/>
  <!-- Footer -->
  <footer-vue>
    <p>Make with Love</p>
  </footer-vue>
</template>
