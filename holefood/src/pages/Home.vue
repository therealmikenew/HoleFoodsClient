<template>
  <div>
    <div>
      <button class='main-btn' @click='togglePage'>{{buttonText}}</button>
      <div v-if="form">
       
      <Stores v-for="store in stores" :key="store.id" 
      :store="store" @selectStore="selectStore" />
      </div>
      <div v-else>
        <Form :form="form"  :name="name" :location="location" 
      :photo_url="photo_url" @handleFormChange="handleFormChange" @createStore="createStore" @handleSubmit="handleSubmit"
      />
      </div>

      
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
    photo_url: '',
    storeId: null,
    buttonText: 'Add Store'
  }),
  mounted() {
    this.storeId = parseInt(this.$route.params.store_id)
    this.getStores()
  },
  methods: {
    handleFormChange(name, value) {
      this[name] = value
    },

    togglePage() {
      this.form = !this.form
      if (this.form) {
        this.buttonText = 'Add Store'
      } else this.buttonText = 'View Stores'
      
      

    },
    
    handleSubmit() {

      alert('form submitted')
    
      this.createStore()
    },
    async createStore() {
    
    await axios.post('http://localhost:8000/shops/', {
        name: this.name,
        location: this.location,
        photo_url: this.photo_url
      })
      window.location.reload()
      
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
