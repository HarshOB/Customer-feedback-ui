<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <br><br>

    <label class="col-md-1">First Name</label>
    <el-input class="col-md-5" placeholder="Enter your name" v-model="fname"></el-input>

    <label class="col-md-1">Last Name</label>
    <el-input class="col-md-5" placeholder="Enter last name" v-model="lname"></el-input>
    <br><br><br><br>
    <label class="col-md-1">UserName</label>
    <el-input class="col-md-5" placeholder="Pick a username" v-model="uname"></el-input>

    <label class="col-md-1" for="email">Email-id</label>
    <el-input class="col-md-5" placeholder="Enter emailid" v-model="eid"></el-input>
    <br><br><br><br>
    <label class="col-md-1">Password</label>
    <el-input type="password" class="col-md-5" placeholder="Enter password" v-model="password"></el-input>
    <br><br><br><br>
    <label class="col-md-1">BirthDate</label>
    <div class="col-md-5">
      <el-date-picker placeholder="Pick a date" v-model="date1" style="width: 100%"></el-date-picker>
    </div>
    <label class="col-md-1">Gender</label>
    <el-select class="col-md-5" v-model="value" clearable placeholder="Select">
      <el-option v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <br><br><br><br>
    <label class="col-md-1">Address1</label>
    <el-input class="col-md-5"
      type="textarea"
      :rows="2"
      placeholder="Address1"
      v-model="address1">
    </el-input>
    <label class="col-md-1">Address2</label>
    <el-input class="col-md-5"
      type="textarea"
      :rows="2"
      placeholder="Address2"
      v-model="address2">
    </el-input>
    <br><br><br><br>
    <label class="col-md-1">Country</label>
    <el-input class="col-md-5" placeholder="Enter your country" v-model="country"></el-input>

    <label class="col-md-1">State</label>
    <el-input class="col-md-5" placeholder="Enter last state" v-model="state"></el-input>
    <br><br><br><br>
    <label class="col-md-1">City</label>
    <el-input class="col-md-5" placeholder="Enter your city" v-model="city"></el-input>

    <label class="col-md-1">ZipCode</label>
    <el-input class="col-md-5" placeholder="Enter ZipCode" v-model="zipcode"></el-input>
    <br><br><br><br>
    <label class="col-md-1">Photo</label>
    <!-- <el-input class="col-md-5" type="file" v-model="photo"></el-input> -->
    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList">
      <el-button class="button" size="small" type="primary">Click to upload</el-button>
      <div slot="tip" class="el-upload__tip">Upload image file only</div>
    </el-upload>
    <br><br><br>
    <div class="but-sub">
      <el-button v-on:click="register('registration successfully!.', $event)" class="button" type="primary" style="text-align: center">Register</el-button>
      <el-button v-on:click="home($event)" class="button" type="primary" style="text-align: center">Cancel</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      name: '',
      msg: 'Welcome to Registration Page!',
      fname: '',
      lname: '',
      uname: '',
      eid: '',
      password: '',
      date1: '',
      options: [{
        value: 'Male',
        label: 'Male'
      }, {
        value: 'Female',
        label: 'Female'
      }],
      value: '',
      address1: '',
      address2: '',
      country: '',
      state: '',
      city: '',
      zipcode: ''
    }
  },
  methods: {
    register: function (message, event) {
      // now we have access to the native eventh
      alert(message)
      window.location.href = '/#/'
    },
    home: function (event) {
      window.location.href = '/#/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  /*background-color: url('../assets/stardust.png');*/
  color: #30A9DE;

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
.button{
  display: inline-block;
  margin: 10px;
  color: #f9c00c;
}
.but-sub{
  text-align: center;
}
.hello{
  margin: 15px;
}
.button{
  margin: 10px;
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
