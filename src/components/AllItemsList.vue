<template>
    <div v-if="items.length!=0">
        <div class="item-list">
            <div v-for="item in items" :key="item.id">
                <SingleItem :item="item" />
            </div>
        </div>
  </div>
    <div v-else>
        <h2>Sorry no items found</h2>
    </div>
</template>

<script>

import SingleItem from './SingleItem.vue'
import RoundButton from './RoundButton.vue'

export default {
  props: ['items'],
  components: { SingleItem, RoundButton},
}
</script>

<style>
.item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>