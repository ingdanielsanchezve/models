<template>
  <ModelCard v-for="model in modelsData" :key="model.id" :model="model" />
</template>

<script setup>
const props = defineProps({
  modelsData: {
    type: Array,
    default: () => ([])
  }
})
</script>