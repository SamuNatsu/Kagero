<script setup>
import config from '../assets/config.json'
</script>

<template>
  <footer class="bg-black py-8 text-center text-white">
    <p>Copyright © <a :href="config.footer.copyright.link">{{ config.footer.copyright.name }}</a></p>
    <p>Powered by <a href="https://github.com/SamuNatsu/Kagero" target="_blank">Kagero</a></p>
    <slot/>
  </footer>
</template>

<style lang="postcss" scoped>
a {
  @apply hover:text-blue-300
}
</style>
