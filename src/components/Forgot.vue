<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <br><br>
    <el-label class="col-md-1">Enter Email id</el-label>
    <el-input class="col-md-5" placeholder="Please enter Email" v-model="input"></el-input><br><br><br> <br>
    <el-button v-on:click="warn('Reset link is send to your emailId.', $event)" class="button" type="primary">Get Reset Link</el-button>
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
      alert(message)
      window.location.href = 'http://localhost:8080/#/'
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
