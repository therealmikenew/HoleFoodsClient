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
  },
  methods: {
    //axios call & define stores
    //add adding store function
    selectStore(storeId) {
      this.$router.push(`/storeDetails/${storeId}`)
    }
  }
}

</script>
