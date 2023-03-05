<template>
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ListFilters
          v-model:sort="sort"
          v-model:order="order"
        />
      </div>
    </nav>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="row mt-4">
        <ToolBar
          v-model:searchTerm="searchTerm"
          :is-first-page="isFirstPage"
          :is-last-page="isLastPage"
          @previous-page="previousPage"
          @next-page="nextPage"
          @filterQuery="filterQuery"
        />

        <ModelsList
          :models-data="models"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
  const config = useRuntimeConfig()
  const page = ref(1)
  const limit = ref(20)
  const searchTerm = ref('')
  const sort = ref('')
  const order = ref('')
  const models = ref([])

  onMounted(() => {
    loadModels();
  })

  const loadModels = async () => {
    models.value = await $fetch( '/models',
    {
      method: 'GET',
      baseURL: config.public.apiBase,
      params: {
        _limit: limit.value,
        _page: page.value,
        _sort: sort.value,
        _order: order.value
      }
    })
  }

  const filterQuery = async () => {
    models.value = await $fetch( '/models',
    {
      method: 'GET',
      baseURL: config.public.apiBase,
      params: {
        q: searchTerm.value
      }
    })
  }

  watch(sort, () => {
    order.value = 'asc'
    loadModels()
  })

  watch(order, () => {
    loadModels()
  })

  watch(searchTerm, (newVal) => {
    if (newVal.length === 0) {
      loadModels()
    }
  })

  const isFirstPage = computed(() => {
    return page.value === 1
  })

  const isLastPage = computed(() => {
    return models.value?.length < limit.value
  })

  const previousPage = () => {
    page.value--
    loadModels()
  }

  const nextPage = () => {
    page.value++
    loadModels()
  }
</script>

<style scoped>
.sidebar{
  height: 100vh;
}
</style>