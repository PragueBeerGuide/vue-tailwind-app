<template>
  <component :is="icon" class="w-4 h-4 text-neutral-900" />
</template>

<script>
export default {
  props: {
    icon: {
      type: Function,
      required: true
    }
  }
}
</script>
