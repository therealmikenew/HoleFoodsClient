<template>
  <div>
    <form class="crt-str" v-on:submit="handleSubmit">
      <input
        @input="handleFormChange($event)"
        placeholder="name"
        :value="name"
        name="name"
        type="name"
      />
      <input
        @input="handleFormChange($event)"
        placeholder="location"
        :value="location"
        name="location"
        type="location"
      />
      <input
        @input="handleFormChange"
        placeholder="photo_url"
        :value="photo_url"
        name="photo_url"
        type="photo_url"
      />
      <button class="crt-btn" :disabled="!name || !location || !photo_url">Create Store</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    form: Boolean,
    name: String,
    location: String,
    photo_url: String
  },
  methods: {
    handleFormChange(e) {
      this.$emit('handleFormChange', e.target.name, e.target.value)
    },
    handleSubmit(e) {
      e.preventDefault()
      this.$emit('handleSubmit')
    }
  }
}
</script>
