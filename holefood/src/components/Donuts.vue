<template>
  <div @click="selectDonut(donut.id)">
    <h1>Donuts</h1>
    <button>Delete Donuts</button>
    <button>Update Donuts</button>
    <button>Add Donuts</button>
  </div>
</template>

<script>

export default {
  name: 'Donuts',
  props: {
    donut: {}
  },
  methods: {
    //add function to delete and update and add donuts
    selectDonut(donutId) {
      this.$emit('selectDonut', donutId)
    }
  }
}
</script>
