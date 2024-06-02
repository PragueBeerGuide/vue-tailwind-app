<script setup>
import DownloadIcon from './icons/DownloadIcon.vue'
</script>

<template>
  <tr class="text-neutral-500" v-for="item in invoices" :key="item.id">
    <td class="px-6 pt-6 pb-3.5">{{ item.invoiceID }}</td>
    <td class="px-6 pt-6 pb-3.5">{{ item.orderID }}</td>
    <td class="px-6 pt-6 pb-3.5 text-center">{{ item.totalPrice }} Kč</td>
    <td class="px-6 pt-6 pb-3.5">
      <div
        class="font-medium text-btn text-blue-500 hover:underline flex gap-2 justify-end whitespace-nowrap group"
      >
        <DownloadIcon
          class="group-hover:text-white cursor-pointer transition-transform duration-150 group-hover:-translate-y-1 group-hover:scale-110"
        />
        <span class="cursor-pointer">Stáhnout</span>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      invoices: [
        { id: 1, invoiceID: 121548784515487, orderID: 121548784515487, totalPrice: -1500 },
        { id: 2, invoiceID: 121548784515487, orderID: 121548784515487, totalPrice: -1500 },
        { id: 3, invoiceID: 121548784515487, orderID: 121548784515487, totalPrice: -1500 },
        { id: 4, invoiceID: 121548784515487, orderID: 121548784515487, totalPrice: -1500 },
        { id: 5, invoiceID: 121548784515487, orderID: 121548784515487, totalPrice: -1500 },
        { id: 6, invoiceID: 121548784515487, orderID: 121548784515487, totalPrice: -1500 },
        { id: 7, invoiceID: 121548784515487, orderID: 121548784515487, totalPrice: -1500 },
        { id: 8, invoiceID: 121548784515487, orderID: 121548784515487, totalPrice: -1500 },
        { id: 9, invoiceID: 121548784515487, orderID: 121548784515487, totalPrice: -1500 }
      ]
    }
  }
}
</script>
