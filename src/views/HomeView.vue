<template>
  <main>
    <Search @submit="log" />
    <Cards ref="list" :query="query"></Cards>
  </main>
</template>

<script>
import Search from '../components/Input.vue'
import Cards from '../components/Cards.vue'

export default {
  // Component data
  components: {
    Search,
    Cards
  },
  data() {
    return {}
  },

  // Component methods
  methods: {
    // Your methods go here
    log(value) {
      console.log(value)
      this.$refs.list.log(value)
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
