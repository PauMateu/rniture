import { ref } from 'vue'
import axios from 'axios'
const getItems = () => {

  const items = ref([])
  const error = ref(null)

  const load = async (params) => {
    try {
      let data = await 
        axios.get(`${process.env.VUE_APP_SERVER_ENDPOINT}items`, {
                params: {
                 ...params,
                 _sort:"added",
                 _order:"desc"
                },
                headers:  { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
            })

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