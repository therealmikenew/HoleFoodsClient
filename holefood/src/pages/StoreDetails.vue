<template>
  <div>
    {{this.store.name}}
    
    <Donuts v-for="donut in donuts" :key="donut.id"
    :donut="donut" />
  </div>
</template>

<script>
import Donuts from '../components/Donuts.vue'
import axios from 'axios'

export default {
  name: 'StoreDetails',
  components: {
    Donuts
  },
  data: () => ({
    donuts: [],
    store: [],
    storeId: null
  }),
  mounted() {
    this.storeId = parseInt(this.$route.params.store_id)
    this.getStore(),
    this.getDonut()

  },
  methods: {
    //axios call and define stores
    async getStore(){
      const res = await axios.get(`http://localhost:8000/shops/${this.storeId}`)
      this.store = res.data
    },
    async getDonut(){
      const res = await axios.get('http://localhost:8000/donuts/')
      this.donuts = res.data
      console.log(res.data)
    },
  }
}
</script>
