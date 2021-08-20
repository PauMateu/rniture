<template>
  <FrontBanner />
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="items.length">
      <ItemsList :items="items" />
    </div>
    <div v-else>
       <Spinner />
    </div>
  </div>
</template>

<script>
import getItems from '../composables/getItems'

// component imports
import ItemsList from '../components/ItemsList.vue'
import FrontBanner from '../components/FrontBanner.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  components: { ItemsList, FrontBanner, Spinner },
  setup() { 
    const { items, error, load } = getItems()
    load({_limit: 3})
    return { items, error }
  },
}
</script>