<template>
  <div class="item-list">
      <div class="item-list-text">
          <h3 class="item-list-title">Latest furniture additions</h3>
          <p class="item-list-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae nam animi quidem eveniet perspiciatis sed porro dicta earum, accusantium quia qui. Qui esse eum ullam, commodi vero cumque dolorum?</p>
          <router-link :to="{ name:'AllProducts'}" class="item-list-browse">
            <round-button :name="'AllProducts'">➔</round-button>
            <h4 class="item-list-browse-label">Browse all products</h4>
          </router-link>
      </div>
    <div v-for="item in items" :key="item.id">
      <SingleItem :item="item" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
// component imports
import SingleItem from './SingleItem.vue'
import RoundButton from './RoundButton.vue'
export default {
  props: ['items'],
  components: { SingleItem, RoundButton},
  setup() {
  }
}
</script>

<style>
.item-list-browse {
display: flex;
align-items: center;
}
.item-list-browse-label{
    font-size: 20px;
    margin-left: 15px;
    color: #f83a26;
        border-bottom: 3px solid #2d2942;
}
.item-list {
    display: flex;
}
.item-list-title {
    font-size: 35px;
    font-weight: 100;
}
.item-list-text{
    width: 35%;
    margin-right: 20px;
}
</style>