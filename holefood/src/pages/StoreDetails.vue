<template>
  <div>
    <h1>Store Details</h1>
    <Donuts v-for="donut in donuts" :key="donut.id"
    :donut="donut" @selectDonut="selectDonut" />
  </div>
</template>

<script>
import Donuts from '../components/Donuts.vue'

export default {
  name: 'StoreDetails',
  components: {
    Donuts
  },
  data: () => ({
    donuts: []
  }),
  mounted() {
    //function to call all donuts
  },
  methods: {
    //axios call and define stores
    selectDonut(donutId) {
      this.$router.push(`/donutDetails/${donutId}`)
    }
  }
}
</script>
