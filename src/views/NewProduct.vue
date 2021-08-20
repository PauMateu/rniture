<template>

  <form @submit.prevent="handleSubmit">
    <h1 class="new-prduct-title">Add new item</h1>
    <h3>please fill the form below</h3>

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
    <input type="text" v-model="tempTag" v-on:keydown.enter.prevent='addTag'/>
    <div v-for="tag in tags" :key="tag" class="pill">
      <span @click="deleteTag(tag)">{{ tag }}</span>
    </div>

    <label>Image:</label>
    <input type="file" required>
 

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>
</template>

<script>
import postItem from '../composables/postItem'
export default {
  data() {
    return {
      name: '',
      description: '',
      type: 'chair',
      tags: [],
      tempTag: '',
      designer: '',
      price: 0,
      imageError:false,
    }
  },
  methods: {
    addTag($event) {
      if(this.tempTag) {
        if (!this.tags.includes(this.tempTag)) {
          this.tags.push(this.tempTag)
        }
        this.tempTag = ''
      }
    },
    deleteSkill(tag) {
      this.tags = this.tags.filter(item => {
        return tag !== item
      })
    },

    handleSubmit() {
    // transform image to base 64
    console.log("handeling submit")
    let imageSrc = "";
    var file = document
        .querySelector('input[type=file]')
        .files[0];
    var reader = new FileReader();
    let item = {
                name: this.name,
                description: this.description,
                type: this.type,
                tags: this.tags,
                designer:this.designer,
                price:this.price,
            }

    reader.onload = function(e) {
        console.log("loading")
        imageSrc = e.target.result 
        console.log(e.target)
        
         if (!this.imageError && imageSrc != "") {
            console.log("we are heres")
            // make request to database to save user
            item = {...item,
            image: imageSrc}
            console.log(item);
            const {response, error, post} = postItem(item);

        post();  
        }         
    };
    reader.onerror = function(error) {
        console.log("error")
        imageError = true;
    };
    reader.readAsDataURL(file);
    
    }
  },
   
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
  }
</style>