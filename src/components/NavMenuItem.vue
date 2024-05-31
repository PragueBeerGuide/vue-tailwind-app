<script setup>
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
import { HomeIcon, UserIcon } from '@heroicons/vue/24/outline'
import IconComponent from './IconComponent.vue'
</script>

<template>
  <li class="grow">
    <a
      href="#"
      class="flex p-3 sm:py-4 sm:px-[15px] group bg-gray-100 hover:text-white hover:bg-blue-500 rounded"
    >
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center">
          <IconComponent :icon="HomeIcon" class="group-hover:text-white mr-2" />
          <span class="text-sm sm:text-base">{{ name }}</span>
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
    components: {
      IconComponent
    },
    data() {
      return {
        HomeIcon,
        UserIcon
      }
    }
  }
}
</script>
