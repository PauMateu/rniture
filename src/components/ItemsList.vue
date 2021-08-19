<template>
  <div class="item-list">
    <div v-for="item in items" :key="item.id">
      <SingleItem :item="item" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
// component imports
import SingleItem from './SingleItem.vue'
export default {
  props: ['items'],
  components: { SingleItem },
  setup() {
  }
}
</script>

<style>
</style>