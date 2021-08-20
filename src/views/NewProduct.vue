<template>

  <form @submit.prevent="handleSubmit">

    <h1 class="new-prduct-title">Add new item</h1>
    <h3>Please fill the form below</h3>

    <label>Name:</label>
    <input type="text" v-model="name" required>

    <label>Designer:</label>
    <input type="text" v-model="designer" required>


    <label>Price:</label>
    <input type="number" v-model="price" required>

    <label>Description:</label>
    <textarea name="Text1" cols="40" rows="5" v-model="description"></textarea>
    

    <label>Type:</label>
    <select v-model="type">
      <option value="chair">Chairs</option>
      <option value="sofa">Sofas</option>
      <option value="table">Tables</option>
      <option value="lamp">Lamps</option>
    </select>

    <label>Tags (press enter to add):</label>
    <input type="text" v-model="tempTag" @keydown.enter.prevent='addTag'/>
    <div v-for="tag in tags" :key="tag" class="pill">
      <span @click="deleteTag(tag)">{{ tag }}</span>
    </div>
    <br>

    <label>Image:</label>
    <input type="file" required>
    
    <div class="submit">
      <button>Create new item</button>
    </div>
  </form>
  <div v-if="loading"><Spinner /></div>
  <p v-if="postError" class="error">{{postError}}</p>
</template>

<script>
import { ref } from '@vue/reactivity';
import postItem from '../composables/postItem'
import { watch } from '@vue/runtime-core';
import Spinner from '../components/Spinner.vue'
import { useRouter, useRoute } from 'vue-router'
export default {
    components: { Spinner },
    setup() { 
    const name = ref("");
    const description = ref ("");
    const type = ref("chair");
    const tags = ref([]);
    const tempTag = ref("");
    const designer = ref("")
    const price = ref(0);
    const imageError = ref(false);
    const postResponse = ref("");
    const {response, error, post} = postItem();
    const loading = ref(false);
    const router = useRouter()
    const postError = ref("")

    //logic to add a taf when the user presses enter
    const addTag = () =>{
      if(tempTag.value) {
        if (!tags.value.includes(tempTag.value)) 
            tags.value.push(tempTag.value)
        tempTag.value = ''
      }
    }
    //delete the tag when user clicks on it
    const deleteTag = (tag) => {
      tags.value = tags.value.filter(item => {
        return tag !== item
      })
    }
    //handle the creation of the item
    const handleSubmit = () => {
        // transform image to base 64
        loading.value=true;
        let imageSrc = "";
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        let item = {
                name: name.value,
                description: description.value,
                type: type.value,
                tags: tags.value,
                designer: designer.value,
                price: price.value,
                added: Date.now(),
            }
        reader.onload = function(e) {
            imageSrc = e.target.result 
            if (!this.imageError && imageSrc != "") {
                item = {
                    ...item,
                    image: imageSrc
                }
                // make request to database to save item
                post(item);  
            }   
        }    
        reader.onerror = function(error) {
            imageError = true;
        };
        reader.readAsDataURL(file);
    } 
    //watch the response to react to POST response.
    watch(response, () => {
        loading.value=false;
        if(response.value.status === 201 && response.value.data.id){
            //change the route to the details page of the item
            router.push({ name: 'Details', params: { id: response.value.data.id} })
        }
        else{
            postError.value = "Sorry, an error occurred while creating the item."
        }
    })
    
    return {postError, loading, addTag, deleteTag, handleSubmit, name, description, type, tags, tempTag, designer, price, imageError, postResponse}
  }
}
</script>

<style>
  form {
    max-width: 700px;
    margin: 0px auto;
    text-align: left;
    padding: 0px 40px;
    border-radius: 10px;
  }
  label {
    color: #2d2942;
    display: inline-block;
    margin: 25px 0 15px;    
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select, textarea {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #f83a26;
    color: #2d2942;;
  }
  textarea:focus, input:focus{
    outline: none;
}
 
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #f83a26;
    border-radius: 20px;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
  button {
      font-size: 20px;
    cursor:pointer;
    background: #2d2942;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  
  .submit {
    text-align: center;
  }

  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
    text-align: center;
  }
</style>