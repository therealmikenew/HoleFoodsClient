<template>
  <div class="store-container" @click="selectStore(store.id)">
    <div class="stores">
    <h1>Donut Stores</h1>

    {{store.name}}
    <h2>{{store.name}}</h2>
    <h3>{{store.location}}</h3>
    <img class="photo-url" :src="store.photo_url" />

    <button class="dlt-btn" >Delete Store</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Stores',
  props: {
    store: {}
  },
  methods: {
    //delete store function
    selectStore(storeId) {
      this.$emit('selectStore', storeId)
    }
  }
}
</script>
