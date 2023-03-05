<template>
  <div class="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="row mt-4">
            <div class="input-group">
              <div class="input-group-text" id="sortBy">Sort By:</div>
                <input type="radio" class="btn-check" v-model="sort" id="name" value="name">
                <label class="btn btn-outline-primary" for="name">Name</label>

                <input type="radio" class="btn-check" v-model="sort" id="age" value="age">
                <label class="btn btn-outline-primary" for="age">Age</label>
            </div>
            <div class="input-group mt-3">
              <div class="input-group-text" id="orderBy">Order:</div>
                  <input type="radio" class="btn-check" v-model="order" id="asc" value="asc">
                  <label class="btn btn-outline-primary" for="asc">Asc <font-awesome-icon icon="fa-solid fa-arrow-down-a-z" /></label>

                  <input type="radio" class="btn-check" v-model="order" id="desc" value="desc">
                  <label class="btn btn-outline-primary" for="desc"> Desc <font-awesome-icon icon="fa-solid fa-arrow-down-z-a" /></label>
              </div>
          </div>
      </nav>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="row mt-4">
          <div class="btn-toolbar justify-content-between">
              <div class="btn-group" role="group" aria-label="First group">
                <a class="btn btn-outline-primary" @click.prevent="previousPage" :class="{'disabled': isFirstPage}">&lt;&lt; Previous</a>
                <a class="btn btn-outline-primary" @click.prevent="nextPage" :class="{'disabled': isLastPage}">Next >></a>
              </div>
              <div class="input-group">
                <div class="input-group-text" id="btnGroupAddon2">Search </div>
                <input type="text" class="form-control" data-bs-toggle="tooltip" data-bs-placement="top"
                  data-bs-custom-class="custom-tooltip"
                  data-bs-title="Enter name and press Enter."
                  placeholder="Enter name and press Enter" aria-label="Enter name and press Enter" v-model="query" @keydown.enter="filterQuery">
                <span class="input-group-text"><font-awesome-icon icon="fa-solid fa-search" /></span>
              </div>
          </div>
          <div v-for="model in models" :key="model.id" class="col-md-3 col-sm-6">
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
        </div>
      </main>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const page = ref(1)
const query = ref('')
const sort = ref('')
const order = ref('')
const models = ref([])

onMounted(() => {
  loadModels();
})

const loadModels = async () => {
  models.value = await $fetch( `/models`,
  {
    method: 'GET',
    baseURL: config.public.apiBase,
    params: {
      _limit: 20,
      _page: page.value,
      _sort: sort.value,
      _order: order.value
    }
  })
}

const filterQuery = async () => {
  const modelsData = await $fetch( `/models`,
  {
    method: 'GET',
    baseURL: config.public.apiBase,
    params: {
      _q: query.value
    }
  })

  // I have to add this filter because the _q is not working on json server filtering the records
  // it returns all records so i added this small function to filter locally, is not the proper behaviour but
  // is a fix because the json-server doesnt work properly
  models.value = modelsData.filter(model => model.name.toLowerCase().includes(query.value.toLowerCase()))
}

watch(sort, () => {
  loadModels()
})

watch(order, () => {
  console.log("🚀 ~ file: index.vue:104 ~ watch ~ order:", order.value)
  loadModels()
})

watch(query, (newVal) => {
  if (newVal.length === 0) {
    loadModels()
  }
})


const sortData = (sortBy) => {
  sort.value = sortBy
  orderData('asc')
  loadModels()
}

const orderData = (orderBy) => {
  order.value = orderBy
  loadModels()
}

const isFirstPage = computed(() => {
  return page.value === 1
})

const isLastPage = computed(() => {
  return models.value?.length < 20
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