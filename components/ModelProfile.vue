<template>
  <div class="card mb-4">
    <div class="card-body text-center">
      <img :src="model.avatar" alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
      <h5 class="my-3">
        {{model.name}}
      </h5>
      <p class="text-muted mb-4">
        {{model.email}}
      </p>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button
         v-if="!isEditing"
         type="button"
         class="btn btn-primary"
         @click="$emit('isInEditionMode', true)"
        >
          Edit <font-awesome-icon icon="fa-solid fa-pencil" />
        </button>
        <button
         v-if="isEditing"
         type="button"
         class="btn btn-success"
         @click="$emit('updateModelData')"
        >
          Save <font-awesome-icon icon="fa-solid fa-check" />
        </button>
        <button
         v-if="isEditing"
         type="button"
         class="btn btn-warning"
         @click="$emit('isInEditionMode', false)"
        >
          Cancel <font-awesome-icon icon="fa-solid fa-circle-xmark" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  model: {
    type: Object,
    default: () => ({})
  },
  isEditing: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.btn-warning {
  color: white;
}
</style>