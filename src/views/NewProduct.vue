<template>

  <form @submit.prevent="handleSubmit">
      <h1 class="new-prduct-title">Add new item</h1>
<h3>please fill the form below</h3>
    <label>Name:</label>
    <input type="text" v-model="email" required>

    <label>Description:</label>
    <textarea name="Text1" cols="40" rows="5"></textarea>
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Type:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Tags (press enter to add):</label>
    <input type="text" v-model="tempSkill" v-on:keydown.enter.prevent='addSkill'/>
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

 

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'developer',
      terms: false,
      skills: [],
      tempSkill: '',
      passwordError: null,
    }
  },
  methods: {
    addSkill($event) {
        
      if(this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter(item => {
        return skill !== item
      })
    },
    handleSubmit() {
      // validate password
      this.passwordError = this.password.length > 5 ?
        '' : 'Password must be at least 6 characters long'

      if (!this.passwordError) {
        // make request to database to save user
        console.log('email: ', this.email)
        console.log('password: ', this.password)
        console.log('role: ', this.role)
        console.log('skills: ', this.skills)
        console.log('terms accepted: ', this.terms)
      }
    }
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