<script setup>
import NavMenu from './components/NavMenu.vue'
import { store } from './store/store'
</script>

<template>
  <div class="px-4 md:px-8">
    <h1 class="md:sticky md:top-0 text-2xl md:text-4xl font-semibold py-4 md:py-8">
      {{ store.activeMenuTab }}
    </h1>
    <div class="flex flex-col md:flex-row gap-4 md:gap-8">
      <NavMenu />

      <router-view class="w-full max-w-3xl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>
