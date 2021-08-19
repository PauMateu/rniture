import { ref } from 'vue'

const getItems = () => {

  const items = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/items')
      if(!data.ok) {
        throw Error('no available data')
      }
      items.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { items, error, load }
}

export default getItems