<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <br><br>
    <el-label class="col-md-1">First Name</el-label>
    <el-input class="col-md-5" placeholder="Enter your name" v-model="input"></el-input>
    <br><br><br><br>
    <el-label class="col-md-1">Last Name</el-label>
    <el-input class="col-md-5" placeholder="Enter last name" v-model="input"></el-input>
    <br><br><br><br>
    <el-label class="col-md-1">UserName</el-label>
    <el-input class="col-md-5" placeholder="Pick a username" v-model="input"></el-input>
    <br><br><br><br>
    <el-label class="col-md-1">Email-id</el-label>
    <el-input class="col-md-5" placeholder="Enter emailid" v-model="input"></el-input>
    <br><br><br><br>
    <el-label class="col-md-1">Password</el-label>
    <el-input class="col-md-5" placeholder="Enter password" v-model="input"></el-input>
    <br><br><br><br>
    <el-label class="col-md-1">BirthDate</el-label>
    <el-date-picker class="col-md-5" type="date" placeholder="Pick a date" v-model="date1"></el-date-picker>
    <br><br><br><br>
    <el-label class="col-md-1">Gender</el-label>
    <el-select class="col-md-5" v-model="value" placeholder="Select">
      <el-option v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <br><br><br><br>
    <el-button class="button" type="primary">Get Reset Link</el-button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: '',
      msg: 'Welcome To Register Page!',
      input: '',
      date1: '',
      options: [{
        value: 'Male',
        label: 'Male'
      }, {
        value: 'Female',
        label: 'Female'
      }],
      value: ''
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
