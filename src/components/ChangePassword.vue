<template>
  <div class="container">
    <div class="header-user-dropdown" style="box-shadow: 0 4px 32px #ab1a1a;">
      <div class="header-limiter">
        <h1><span style="color:#C16200">logo</span></h1>
        <nav style="color: #AF4034">
          Josena Doe
        </nav>
        <div class="header-user-menu">
          <ul>
            <li><a href="#changepassword">Change Passowrd</a></li>
            <li><a href="#" class="highlight">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
    <h1>{{ msg }}</h1>
    <br><br>
    <label class="col-md-1">Old password</label>
    <el-input class="col-md-5" placeholder="Please enter old password" v-model="input"></el-input><br><br><br> <br>
    <label class="col-md-1">New password</label>
    <el-input class="col-md-5" placeholder="Please enter new password" v-model="input"></el-input><br><br><br> <br>
    <label class="col-md-1">Re-enter password</label>
    <el-input class="col-md-5" placeholder="Please enter new password again" v-model="input"></el-input><br><br><br> <br>
    <el-button v-on:click="change('Your password is changes, Please re-login!.', $event)" class="button" type="primary"><span id="span">Change</span></el-button>
    <el-button v-on:click="home($event)" class="button" type="primary"><span id="span">Cancel</span></el-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: '',
      msg: 'Change Your Passowrd!',
      input: ''
    }
  },
  methods: {
    change: function (message, event) {
      // now we have access to the native event
      alert(message)
      window.location.href = '/#/'
    },
    home: function (message, event) {
      window.location.href = '/#/home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: #AF4034
}
html{
  background-color: white;
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
@media only screen and (min-width: 900px) {
  .profile{
    float:left;
    width:20%;
    height:200px;
    border-right:2px solid black;
  }
  img{
    border-radius: 50%;
    text-align: center;
    width: 150px;
  }
  .profile2{
    padding-top: 20px;
    text-align: center;
    float:left;
    width:40%;
    height:200px;
    border-right:2px solid black;
    margin:0 auto;
  }
  .profile3{
    padding-top: 2  0px;
    text-align: center;
    float:left;
    width:40%;
    height:200px;
    border-right:2px solid black;
    margin:0 auto;
  }
}
</style>
