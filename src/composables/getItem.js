import { ref } from 'vue'

const getItem= (id) => {

  const item = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch(`${process.env.VUE_APP_SERVER_ENDPOINT}items/${id}`)
      if (!data.ok) {
        throw Error('That item does not exist')
      }
      item.value =  await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { item, error, load } 
}

export default getItem