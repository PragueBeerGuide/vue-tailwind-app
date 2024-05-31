<script setup>
import ArrowUTurnLeftIcon from './icons/ArrowUTurnLeftIcon.vue'
</script>

<template>
  <div class="flex flex-col justify-center max-w-3xl p-6 bg-white rounded-xl">
    <div class="flex flex-col lg:flex-row gap-2 font-semibold max-md:flex-wrap">
      <div class="flex-1 text-xl leading-7 text-neutral-900 max-md:max-w-full">
        Číslo objednávky: 2200245834
      </div>
      <div class="my-auto text-xs leading-5 lg:text-right text-green-600">Zaplaceno</div>
    </div>
    <div class="flex gap-5 mt-6 text-base leading-6">
      <div class="flex flex-col lg:flex-row w-full gap-2">
        <div class="flex flex-col gap-1 w-full">
          <div>
            Datum objednávky: <span class="text-neutral-500 whitespace-nowrap">6. 12. 2022</span>
          </div>
          <div>Cena celkem: <span class="text-neutral-500 whitespace-nowrap">1 500 Kč</span></div>
        </div>
        <div class="flex flex-col gap-1 w-full lg:text-right">
          <div class="text-blue-500">Potřebujete poradit?</div>
          <div>314 004 540 <span class="md:whitespace-nowrap">(po-pá 8:00-16:00)</span></div>
        </div>
      </div>
    </div>
    <div class="flex gap-3 justify-between self-start mt-6 whitespace-nowrap">
      <button
        class="justify-center px-6 py-3 text-base font-semibold leading-6 text-white bg-blue-500 hover:bg-blue-600 rounded-lg max-md:px-5"
      >
        Detail
      </button>
      <button
        class="flex gap-2 px-6 py-3 my-auto text-sm rounded-lg font-medium leading-6 hover:bg-neutral-200"
      >
        <div>Zopakovat</div>
        <ArrowUTurnLeftIcon class="shrink-0 my-auto w-5 aspect-square" />
      </button>
    </div>
  </div>
</template>
