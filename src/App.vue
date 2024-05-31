<script setup>
import NavMenu from './components/NavMenu.vue'
import Orders from './components/Orders.vue'
import ContactForm from './components/ContactForm.vue'
import { store } from './store/store'
</script>

<template>
  <div class="px-4 sm:px-8 md:px-16">
    <h1 class="sm:sticky sm:top-0 text-2xl sm:text-4xl font-semibold py-4 sm:py-8">
      {{ store.activeMenuTab }}
    </h1>
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-8">
      <NavMenu :items="menuItems" />
      <div class="w-full max-w-3xl">
        <Orders />
        <ContactForm />
      </div>
    </div>
  </div>
</template>
