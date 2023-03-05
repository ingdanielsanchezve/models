<template>
        <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Full Name</p>
            </div>
            <div class="col-sm-9">
              <input
                v-if="isEditing"
                type="text"
                class="form-control"
                id="name"
                v-model="modelData.name"
                placeholder="name"
                @keydown.enter="$emit('updateModelData')"
              >
              <p v-else class="user-data text-muted mb-0" @click="$emit('isInEditionMode', true)">{{model.name}}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Email</p>
            </div>
            <div class="col-sm-9">
              <input
                v-if="isEditing"
                type="email"
                class="form-control"
                id="email"
                v-model="modelData.email"
                placeholder="email"
                @keydown.enter="$emit('updateModelData')"
              >
              <p v-else class="user-data text-muted mb-0" @click="$emit('isInEditionMode', true)">{{model.email}}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Age</p>
            </div>
            <div class="col-sm-9">
              <input
               v-if="isEditing"
               type="text"
               class="form-control"
               id="age"
               v-model="modelData.age"
               placeholder="age"
               @keydown.enter="$emit('updateModelData')"
              >
              <p v-else class="user-data text-muted mb-0" @click="$emit('isInEditionMode', true)">{{model.age}}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Gender</p>
            </div>
            <div class="col-sm-9">
              <span class="text-muted">{{model.gender}}</span>
              <font-awesome-icon v-if="model.gender === 'male'" class="mx-2" icon="fa-solid fa-person" />
              <font-awesome-icon v-if="model.gender === 'female'" class="mx-2" icon="fa-solid fa-person-dress" />
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Eyes</p>
            </div>
            <div class="col-sm-9">
              <div v-if="isEditing" class="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="eyes" id="black" value="black" v-model="modelData.eyes">
                <label class="btn btn-outline-primary" for="black">Black</label>

                <input type="radio" class="btn-check" name="eyes" id="brown" value="brown" v-model="modelData.eyes">
                <label class="btn btn-outline-primary" for="brown">Brown</label>

                <input type="radio" class="btn-check" name="eyes" id="honey" value="honey" v-model="modelData.eyes">
                <label class="btn btn-outline-primary" for="honey">Honey</label>

                <input type="radio" class="btn-check" name="eyes" id="green" value="green" v-model="modelData.eyes">
                <label class="btn btn-outline-primary" for="green">Green</label>

                <input type="radio" class="btn-check" name="eyes" id="gray" value="gray" v-model="modelData.eyes">
                <label class="btn btn-outline-primary" for="gray">Gray</label>

                <input type="radio" class="btn-check" name="eyes" id="blue" value="blue" v-model="modelData.eyes">
                <label class="btn btn-outline-primary" for="blue">Blue</label>
              </div>
              <p v-else class="text-muted mb-0">{{model.eyes}}</p>
            </div>
          </div>
          <div class="row mt-4 justify-content-end">
            <div class="col-sm-9">
              <span v-for="tag in model.tags" :key="tag" class="badge rounded-pill text-bg-primary mx-1">{{tag}}</span>
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
  },
  modelData: {
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
.form-control {
  padding: 0 0.5rem;
}

.user-data:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>