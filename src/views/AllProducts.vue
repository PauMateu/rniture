<template>
    <FilterBar />
    <div v-if="error">{{ error }}</div>
    <div v-if="items.length">
        <AllItemsList :items="items" />
    </div>
    <div v-else>
       <Spinner />
    </div>
</template>

<script>
import getItems from '../composables/getItems'
import AllItemsList from "../components/AllItemsList.vue"
import FilterBar from '../components/FilterBar.vue'

export default {
  name: 'Home',
  components: { AllItemsList, FilterBar},
  setup() { 
    const { items, error, load } = getItems()
    load()
    return { items, error }
  },
}
</script>

<style>

</style>