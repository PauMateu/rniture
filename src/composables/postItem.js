import { ref } from 'vue'
import axios from 'axios'
const postItem = (item) => {

  const response = ref([])
  const error = ref(null)

  const post = async () => {

    try {
        let response = await axios.post('http://localhost:3000/items', 
            item, {
            headers:  { 
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
        console.log(response)
    
    }
    catch(err) {
        console.log(err)
      error.value = err.message
    }
  }

  return { response, error, post }
}

export default postItem