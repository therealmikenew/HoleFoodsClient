<template>
  <div>
    <h1>HoleFoods</h1>
    <Stores v-for="store in stores" :key="store.id" 
    :store="store" @selectStore="selectStore" />
    <button>Add Store</button>
  </div>
</template>

<script>
import Stores from '../components/Stores.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Stores
  },
  data: () => ({
    stores: []
  }),
  mounted() {
    this.getStores()
  },
  methods: {
    async getStores(){
      const res = await axios.get('http://localhost:8000/shops/')
      this.stores = res.data
    },
    //axios call & define stores
    //add adding store function
    selectStore(storeId) {
      this.$router.push(`/storeDetails/${storeId}`)
    }
  }
}

</script>
