<script setup>
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
</script>

<template>
  <li class="grow">
    <a
      href="#"
      class="flex p-3 sm:py-4 sm:px-[15px] group bg-gray-100 hover:text-white hover:bg-blue-500 rounded"
    >
      <div class="flex justify-between items-center w-full">
        <div class="flex">
          <img :src="imgPath" alt="alt text" height="16" width="16" class="mr-3 sm:mr-1.5" />
          <span class="hidden sm:block">{{ name }}</span>
        </div>

        <ArrowRightIcon
          class="group-hover:text-white transition-transform duration-150 group-hover:translate-x-1 group-hover:scale-125"
        />
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    imgPath: {
      type: String
    }
  }
}
</script>
