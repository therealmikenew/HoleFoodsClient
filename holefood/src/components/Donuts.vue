<template>
  <div>
    <h1>{{donut.name}}</h1>
    <h1>{{donut.details}}</h1>
    <h1>{{donut.image_url}}</h1>
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
  }
}
</script>
