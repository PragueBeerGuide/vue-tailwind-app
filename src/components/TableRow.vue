<script setup>
import DownloadIcon from './icons/DownloadIcon.vue'
</script>

<template>
  <tr class="text-neutral-500">
    <td class="px-6 pt-6 pb-3.5">121548784515487</td>
    <td class="px-6 pt-6 pb-3.5">121548784515487</td>
    <td class="px-6 pt-6 pb-3.5 text-center">-1500 Kč</td>
    <td class="px-6 pt-6 pb-3.5">
      <a
        href="#"
        class="font-medium text-btn text-blue-500 hover:underline flex gap-2 justify-end whitespace-nowrap group"
        ><DownloadIcon
          class="group-hover:text-white transition-transform duration-150 group-hover:-translate-y-1 group-hover:scale-110"
        />
        Stáhnout</a
      >
    </td>
  </tr>
</template>
