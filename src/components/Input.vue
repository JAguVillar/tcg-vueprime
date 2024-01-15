<template>
  <div>
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <Prime-TextInput v-model="query" @keyup.enter="log" placeholder="Search" />
    </span>
  </div>
</template>

<script>
export default {
  // Component data
  data() {
    return {
      query: null
    }
  },

  // Component methods
  methods: {
    // Your methods go here
    log() {
      console.log(this.query)
      this.$emit('submit', this.query)
    }
  },

  // Component lifecycle hooks
  beforeCreate() {
    // Executed before the component is created
  },
  created() {
    // Executed after the component is created
  },
  beforeMount() {
    // Executed before the component is mounted to the DOM
  },
  mounted() {
    // Executed after the component is mounted to the DOM
  },

  // Component computed properties
  computed: {
    // Your computed properties go here
  },

  // Component watch options
  watch: {
    // Your watched properties go here
  }
}
</script>

<style scoped>
/* Your component styles go here */
</style>
