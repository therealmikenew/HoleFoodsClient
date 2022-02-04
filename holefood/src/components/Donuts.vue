<template>
  <div>
    <h1>{{donut.name}}</h1>
    <h1>{{donut.details}}</h1>
   

     <img class="photo-url" :src="donut.image_url" />
    <button class='main-btn' v-on:click='deleteDonut'>Delete Donut</button>
    <button class='main-btn'>Update Donut</button>
    <button class='main-btn'>Add Donuts</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Donuts',
  props: {
    donut: {}
  },
  methods: {
    //add function to delete and update and add donuts

    async deleteDonut() {
    
      await axios.delete(`http://127.0.0.1:8000/donuts/${this.donut.id}`)
      this.$router.push('/')
      
    },


  }
}
</script>
