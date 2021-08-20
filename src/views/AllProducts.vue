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
import {watch} from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'Home',
  components: { AllItemsList, FilterBar},
  setup() { 
    const route = useRoute()
    const { items, error, load } = getItems()
    load()
    //watch the url for changes in params to load the items with the filter applied
    watch(
        () => route.query,
        () => {
        if(route.query.type != 'all')
            load({type: route.query.type})
        else
            load()
        }
    )
    return { items, error}
  },
}
</script>

<style>

</style>