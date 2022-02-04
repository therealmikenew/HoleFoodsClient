<template>
  <div>
    <div v-if="!form">
      <Stores v-for="store in stores" :key="store.id" 
      :store="store" @selectStore="selectStore" />
      <button>Add Store</button>
    </div>
    <div v-else >
      <Form :form="form"  :name="name" :location="location" 
      :photo_url="photo_url" @handleFormChange="handleFormChange" 
      @handleSubmit="handleSubmit" />
    </div>
  </div>
</template>

<script>

import Stores from '../components/Stores.vue'
import axios from 'axios'
import Form from '../components/Form.vue'
export default {
  name: 'Home',
  components: {
    Stores, Form
  },
  data: () => ({
    stores: [],
    form: true,
    name: '',
    location: '',
    photo_url: ''
  }),
  mounted() {
    this.getStores()
  },
  methods: {
    handleFormChange(name, value) {
      this[name] = value
    },
    
    handleSubmit() {
      alert('form submitted')
      this.name=''
      this.location=''
      this.photo_url=''
    },
    async createStore() {
      await axios.post('http://localhost:8000/shops/', {
        name: this.name,
        location: this.location,
        photo_url: this.photo_url
      })
      //this.newStore = res
      //make sure to make the right axios call
    },
    async getStores(){
      const res = await axios.get('http://localhost:8000/shops/')
      this.stores = res.data
    },
    selectStore(storeId) {
      this.$router.push(`/storeDetails/${storeId}`)
    }
  }
}

</script>
