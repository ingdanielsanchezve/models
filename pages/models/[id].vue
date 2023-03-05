<template>
  <section class="w-100 p-4" style="background-color: #eee; border-radius: 0.5rem 0.5rem 0 0;">
    <Breadcrumb />

  <div class="row">
    <div class="col-lg-4">
      <ModelProfile
        :model="model"
        :is-editing="isEditing"
        @isInEditionMode="isInEditionMode"
        @updateModelData="updateModelData"
      />

    </div>
    <div class="col-lg-8">
      <ModelProfileDetails
        :model="model"
        :model-data="modelData"
        :is-editing="isEditing"
        @isInEditionMode="isInEditionMode"
        @updateModelData="updateModelData"
      />
    </div>
  </div>

</section>
</template>

<script setup>
const config = useRuntimeConfig()
const route=useRoute()
const model = ref([])
const modelData = ref([])
const isEditing = ref(false)

onMounted(() => {
  loadModel();
})

const loadModel = async () => {
  model.value = await $fetch(`/models/${route.params.id}`,
  {
    method: 'GET',
    baseURL: config.public.apiBase
  })
}

const isInEditionMode = (editing) => {
  isEditing.value = editing
  modelData.value = {...model.value}
}

const updateModelData = async () => {
  try {
    const response = await $fetch(`/models/${route.params.id}`,
    {
      method: 'PUT',
      baseURL: config.public.apiBase,
      body: JSON.stringify(modelData.value)
    })
    if (response) {
      model.value = {...modelData.value}
      isEditing.value = false
    }
  }catch(error) {
    console.log(error)
  }

}


</script>

<style scoped>
.form-control {
  padding: 0 0.75rem;
}
</style>