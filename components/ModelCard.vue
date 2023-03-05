<template>
  <div class="col-lg-3 col-md-6 col-sm-6">
      <div class="box">
          <img class="pic" :src="model.avatar" :alt="model.name">
          <div class="box-content">
              <h3 class="title">{{model.name}}</h3>
              <div class="social">
                <NuxtLink class="btn btn-primary" :to="`/models/${model.id}`">More</NuxtLink>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  model: {
    type: Object,
    default: () => ({})
  }
})
</script>