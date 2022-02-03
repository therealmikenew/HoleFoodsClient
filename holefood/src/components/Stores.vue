<template>
  <div @click="selectStore(store.id)">
    <h1>Donut Stores</h1>
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
