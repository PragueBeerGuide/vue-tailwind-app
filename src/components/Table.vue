<script setup>
import TableRow from './TableRow.vue'
</script>

<template>
  <div class="relative overflow-x-auto rounded-lg bg-white whitespace-nowrap">
    <table class="w-full text-sm text-left">
      <thead class="text-baseTit border-b-2">
        <tr>
          <th scope="col" class="p-4">Číslo faktury</th>
          <th scope="col" class="p-4">Číslo objednávky</th>
          <th scope="col" class="p-4 text-center">Cena celkem</th>
          <th scope="col" class="p-4 text-right">Stažení</th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  </div>
</template>
