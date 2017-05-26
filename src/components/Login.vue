<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <br><br>
    <el-label class="col-md-1">Enter Username</el-label>
    <el-input class="col-md-5" placeholder="Please enter UserName" v-model="input"></el-input><br><br><br> <br>
    <el-label class="col-md-1">Enter Password</el-label>
    <el-input class="col-md-5" placeholder="Please enter Password" v-model="input"></el-input><br> <br><br>
    <el-button class="button" type="primary">Login</el-button>
    <a href="http://localhost:8080/#/forgot">Forgot Passowrd </a> <br>
    <el-button v-on:click="warn('Form cannot be submitted yet.', $event)" class="button" type="primary">Register</el-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: '',
      msg: 'Welcome!',
      input: ''
    }
  },
  methods: {
    warn: function (message, event) {
      // now we have access to the native event
      window.location.href = 'http://localhost:8080/#/register'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello{
  margin: 15px;
}
.button{
  margin: 10px;
}

a {
  color: #42b983;
  margin-left: 355px;
}
</style>
