<template>
  <div>
    <!-- <h1 class="home-title">HoleFoods</h1> -->
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
    //somefunction to call all the stores.
    this.getStores()
  },
  methods: {
    //axios call & define stores
    async getStores(){
      const res = await axios.get('http://127.0.0.1:8000/shops/')
      this.stores = res.data
    },
    //add adding store function
    selectStore(storeId) {
      this.$router.push(`/storeDetails/${storeId}`)
    }
  }
}

</script>
