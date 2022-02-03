<template>
  <div @click="selectStore(store.id)">
    <h1>Donut Stores</h1>
    {{store.name}}
    <h2>{{store.name}}</h2>
    <h3>{{store.location}}</h3>
    <img :src="store.photo_url" />

    <button>Delete Store</button>
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
