<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="item" class="item">
    <h3>{{ item.title }}</h3>
    <p class="pre">{{ item.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getItem from '@/composables/getItem'

// component imports
import Spinner from '../components/Spinner.vue'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const { error, item, load } = getItem(props.id)

    load()

    return { error, item }
  },
}
</script>

<style scoped>
  .tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>