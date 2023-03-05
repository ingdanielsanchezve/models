<template>
   <div class="row mt-4">
      <div class="input-group">
        <div class="input-group-text" id="sortBy">Sort By:</div>
          <input type="radio" class="btn-check" id="name" value="name" :checked="sort === 'name'" @click="$emit('update:sort', $event.target.value)">
          <label class="btn btn-outline-primary" for="name">Name</label>

          <input type="radio" class="btn-check" id="age" value="age" :checked="sort === 'age'" @click="$emit('update:sort', $event.target.value)">
          <label class="btn btn-outline-primary" for="age">Age</label>
      </div>
      <div class="input-group mt-3">
        <div class="input-group-text" id="orderBy">Order:</div>
            <input type="radio" class="btn-check" id="asc" value="asc" :checked="order === 'asc'" @click="$emit('update:order', $event.target.value)">
            <label class="btn btn-outline-primary" for="asc">Asc <font-awesome-icon icon="fa-solid fa-arrow-down-a-z" /></label>

            <input type="radio" class="btn-check" id="desc" value="desc" :checked="order === 'desc'" @click="$emit('update:order', $event.target.value)">
            <label class="btn btn-outline-primary" for="desc"> Desc <font-awesome-icon icon="fa-solid fa-arrow-down-z-a" /> </label>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  sort: {
    type: String,
    default: ''
  },
  order: {
    type: String,
    default: ''
  }
})
</script>