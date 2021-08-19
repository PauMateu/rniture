<template>
  <div class="item">
    <router-link :to="{ name: 'Details', params: { id: item.id }}">
      <h3>{{ item.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>

  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['item'],
  setup(props) {
    const snippet = computed(() => {
      return props.item.body.substring(0, 100) + '...'
    })

    return { snippet }
  }
}
</script>

<style>

</style>