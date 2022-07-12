<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
<div class="pl-4 pr-4 pt-2 pb-2">
    <input 
    type="email" 
    name="email" 
    v-model="email" 
    placeholder="email" />
    <br>
    <input 
    type="text" 
    name="firstname" 
    v-model="firstname" 
    placeholder="FirstName" />
    <br>
    <input 
    type="text" 
    name="lastname" 
    v-model="lastname" 
    placeholder="LastName" />
    <br>
    <input 
    type="password" 
    name="password" 
    v-model="password" 
    placeholder="password" />
    <br>
    <div class="error" v-html="error" ></div>
    <br>
    <v-btn
    class="cyan" 
    @click="register">Register
    </v-btn>
    <!-- test -->
</div>
</div>
  </v-flex> 
</v-layout>
</template>
<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  data () {
    return {
      email:'',
      firstname:'',
      lastname:'', 
      password:''
    }
  },
  methods: {
    async register () {
      try {
       await AuthentificationService.register({
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password
      })
      } catch (error) {
        this.error = error.response.data.error
      }
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
