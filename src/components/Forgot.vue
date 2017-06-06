<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <br><br>
    <label class="col-md-1">Enter Email id</label>
    <el-input class="col-md-5" placeholder="Please enter Email" v-model="input"></el-input><br><br><br> <br>
    <el-button v-on:click="reset('Reset link is send to your emailId.', $event)" class="button" type="primary"><span id="span">Get Reset Link</span></el-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: '',
      msg: 'Get your password back!',
      input: ''
    }
  },
  methods: {
    reset: function (message, event) {
      // now we have access to the native event
      alert(message)
      window.location.href = '/#/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html{
  background-color: white;
}
div {
  animation: mymove 3s;
  -webkit-animation-fill-mode: forwards;
}

/* Standard syntax */
@keyframes mymove {
  from {left: -100px;}
  to {left: 0px;}
  -webkit-animation-fill-mode: forwards;
}
.hello{
  margin: 15px;
}
.button{
  display: inline-block;
  margin: 10px;
  color: #f9c00c;
}

#span{
  display: inline-block;
  color: #f9c00c;
}
 h2 {
  font-weight: normal;
}

h1{
  color: #AF4034;
  text-decoration: underline;
  font-weight: bold;
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
