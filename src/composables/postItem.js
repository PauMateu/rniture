import { ref } from 'vue'
import axios from 'axios'
const postItem = () => {

  const response = ref([])
  const error = ref(null)

  const post = async (item) => {
    try {
        response.value = await axios.post(`${process.env.VUE_APP_SERVER_ENDPOINT}items`, 
            item, {
            headers:  { 
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
    }
    catch(err) {
        error.value = err.message
    }
  }

  return { response, error, post }
}

export default postItem