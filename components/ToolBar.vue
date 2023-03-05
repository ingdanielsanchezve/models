<template>

    <div class="btn-toolbar justify-content-between">
      <div class="btn-group" role="group" aria-label="First group">
        <a
         class="btn btn-outline-primary"
         @click="$emit('previousPage')"
         :class="{'disabled': isFirstPage}"
        >
          <font-awesome-icon icon="fa-solid fa-backward" />
        </a>
        <a
         class="btn btn-outline-primary"
         @click="$emit('nextPage')"
         :class="{'disabled': isLastPage}"
        >
          <font-awesome-icon icon="fa-solid fa-forward" />
        </a>
      </div>
      <div class="input-group">
        <div class="input-group-text" id="btnGroupAddon2">Search </div>
        <input
          type="text"
          class="form-control"
          :value="searchTerm"
          @input="$emit('update:searchTerm', $event.target.value)"
          @keydown.enter="$emit('filterQuery')"
        >
        <span class="input-group-text">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </span>
      </div>
    </div>
</template>


<script setup>
const props = defineProps({
  searchTerm: {
    type: String,
    default: ''
  },
  isFirstPage: {
    type: Boolean,
    default: false
  },
  isLastPage: {
    type: Boolean,
    default: false
  },
})

</script>