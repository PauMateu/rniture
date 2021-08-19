import { ref } from 'vue'

const getItem= (id) => {

  const item = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      // simulate delay
      await new Promise(resolve => {
        setTimeout(resolve, 2000)
      })

      let data = await fetch('http://localhost:3000/items/' + id)
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