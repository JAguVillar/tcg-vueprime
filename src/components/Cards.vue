<template>
  <!-- Your component template goes here -->
  <div class="layout">
    <div v-for="card in cards" :key="card.id">
      <!-- {{ card.name }}
      <div>
        {{ card.set.name }}
        <Prime-Image :src="card.set.images.symbol" alt="Image" width="24"></Prime-Image>
      </div>

      <div v-for="types in card.types" :key="types">0 {{ types }}</div>
      <div v-for="subTypes in card.subtypes" :key="subTypes">
        {{ subTypes }}
      </div> -->
      <Prime-Image
        class="item"
        :src="card.images.small"
        alt="Image"
        width="250"
        preview
      ></Prime-Image>
    </div>
  </div>
</template>

<script>
export default {
  // Component data
  props: {
    query: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      cards: []
    }
  },

  // Component methods
  methods: {
    // Your methods go here
    async log(query) {
      console.log(query)
      try {
        const fetched = await this.fetchData(query)
        this.cards = fetched.data
      } catch (error) {
        console.error('Error:', error)
      }
    },
    async fetchData(q) {
      const apiUrl = `https://api.pokemontcg.io/v2/cards?q=name:${q}&pageSize=10`

      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      // Handle the data received from the API

      return data // Return the data if needed
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
.layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg);
  gap: var(--space-md);
}

.item {
  width: 20%; /* Adjust based on your design */
  text-align: center;
  margin-bottom: 10px; /* Optional: Add margin between items */
}
</style>