<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="items.length">
      <ItemsList :items="items" />
    </div>
    <div v-else>
      <!-- <Spinner /> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getItems from '../composables/getItems'

// component imports
import ItemsList from '../components/ItemsList.vue'
// import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { ItemsList },
  setup() { 
    const { items, error, load } = getItems()

    load()
    
    return { items, error }
  },
}
</script>