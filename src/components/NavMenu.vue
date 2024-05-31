<script setup>
import { store } from '../store/store'
import NavMenuItem from './NavMenuItem.vue'
</script>

<template>
  <div class="md:sticky md:top-[104px]">
    <div
      class="w-full md:w-[304px] sticky top-0 flex flex-col bg-white rounded-lg p-2 md:px-6 pt-3 md:pt-8 md:pb-5"
    >
      <h2 class="hidden md:block text-xl text-center font-semibold mb-1">Daniil Filatov</h2>
      <p class="hidden md:block font-light text-center text-neutral-500 mb-6">
        daniil.filatov@newlogic.cz
      </p>
      <nav>
        <ul class="grid grid-cols-2 md:flex md:flex-col gap-2">
          <NavMenuItem name="Moje objednávky" iconName="HeartIcon" />
          <NavMenuItem name="Faktury" iconName="HeartIcon" />
          <NavMenuItem name="Seznam přání" iconName="HeartIcon" />
          <NavMenuItem name="Slevové kódy" iconName="HeartIcon" />
          <NavMenuItem name="Věrnostní program" iconName="HeartIcon" />
          <NavMenuItem name="Nastavení účtu" iconName="HeartIcon" />
        </ul>
      </nav>
      <div class="flex mb-2 md:mb-auto items-center justify-between order-first md:order-last">
        <div class="md:hidden w-10 text-center font-bold p-2 rounded-full bg-gray-200">DF</div>
        <p class="md:hidden font-light text-neutral-500">daniil.filatov@newlogic.cz</p>
        <button class="flex md:mt-8 items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 4.25C17 3.00736 15.9926 2 14.75 2H9.25C8.00736 2 7 3.00736 7 4.25V6.25C7 6.66421 7.33579 7 7.75 7C8.16421 7 8.5 6.66421 8.5 6.25V4.25C8.5 3.83579 8.83579 3.5 9.25 3.5H14.75C15.1642 3.5 15.5 3.83579 15.5 4.25V15.75C15.5 16.1642 15.1642 16.5 14.75 16.5H9.25C8.83579 16.5 8.5 16.1642 8.5 15.75V13.75C8.5 13.3358 8.16421 13 7.75 13C7.33579 13 7 13.3358 7 13.75V15.75C7 16.9926 8.00736 18 9.25 18H14.75C15.9926 18 17 16.9926 17 15.75V4.25Z"
              fill="#171717"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14 10C14 9.58579 13.6642 9.25 13.25 9.25H3.70447L4.75172 8.30747C5.05961 8.03038 5.08457 7.55616 4.80747 7.24828C4.53038 6.94039 4.05616 6.91543 3.74828 7.19253L1.24828 9.44253C1.09024 9.58476 1 9.78738 1 10C1 10.2126 1.09024 10.4152 1.24828 10.5575L3.74828 12.8075C4.05616 13.0846 4.53038 13.0596 4.80747 12.7517C5.08457 12.4438 5.05961 11.9696 4.75172 11.6925L3.70447 10.75H13.25C13.6642 10.75 14 10.4142 14 10Z"
              fill="#171717"
            />
          </svg>
          <div class="hidden md:block ml-2">Odhlásit se</div>
        </button>
      </div>
    </div>
  </div>
</template>
