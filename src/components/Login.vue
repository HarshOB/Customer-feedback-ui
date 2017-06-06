<template>
  <div class="container" id="div_login">
    <h1 id="div2">{{ msg }}</h1>
    <br><br>
    <form @submit.prevent="validateBeforeSubmit">
    <label class="col-md-1">Enter Username</label>
    <i v-show="errors.has('name')" class="fa fa-warning"></i>
    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
    <el-input class="col-md-5" type="text" name="name" v-validate="'required|alpha'" placeholder="Please enter UserName" v-model="input" required></el-input><br><br><br> <br>
    <label class="col-md-1">Enter Password</label>
    <i v-show="errors.has('password')" class="fa fa-warning"></i>
    <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
    <el-input class="col-md-5" name="password" type="password" v-validate="'required|min:6'" placeholder="Please enter Password" v-model="password"></el-input><br> <br><br>
        <button v-on:click="home($event)" class="button" type="submit"><span id="span">Login</span></button>
        <el-button v-on:click="register('Form cannot be sumitted yet.', $event)" class="button" type="primary"><span id="span">Register</span></el-button>
        <a href="/#/forgot">Forgot Password </a>
      </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: '',
      password: '',
      msg: 'Welcome to FeedBack System!',
      input: ''
    }
  },
  methods: {
    register: function (event) {
      window.location.href = '/#/register'
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then(() => {
        window.location.href = '/#/home'
      }).catch(() => {
          // eslint-disable-next-line
          alert('Correct errors!');
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  font-weight: bold;
  position: relative;
  animation: mymove 3s;
  -webkit-animation-fill-mode: forwards;
}

/* Standard syntax */
@keyframes mymove {
  from {left: -100px;}
  to {left: 0px;}
  -webkit-animation-fill-mode: forwards;
}

*{
  color: #30A9DE;
}

h1{
  color: #AF4034;
  text-decoration: underline;
  font-weight: bold;
}

.hello{
  margin: 15px;
}

.button{
  display: inline-block;
  margin: 10px;
  color: #f9c00c;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    margin: 0;
    padding: 10px 15px;
    border-radius: 4px;
    background-color: #20a0ff;
        border-color: #20a0ff;
}

#span{
  display: inline-block;
  color: #f9c00c;
}

a {
  color: #42b983;
  float:right;
  margin-right:50%;
}



</style>
