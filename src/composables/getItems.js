import { ref } from 'vue'
import axios from 'axios'
const getItems = () => {

  const items = ref([])
  const error = ref(null)

  const load = async (params) => {
    try {
      let data = await 
        axios.get("http://localhost:3000/items", {
                params: {
                 ...params,
                 _sort:"added",
                 _order:"asc"
                },
                headers:  { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
            })
      console.log(data)
      if(data.status != 200) {
        throw Error('no available data')
      }
      items.value = await data.data;
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { items, error, load }
}

export default getItems