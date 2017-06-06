<template>
<div class="container">
    <div class="header-user-dropdown" style="box-shadow: 0 4px 32px #ab1a1a;">
    <div class="header-limiter">
      <h1><span style="color:#C16200">logo</span></h1>
      <nav style="color: #AF4034">
        Josena Doe
      </nav>
      <div class="header-user-menu">
        <!-- <img src="../assets/2.jpg" alt="User Image"/> -->
        <ul>
          <li><a href="#changepassword">Change Passowrd</a></li>
          <li><a href="#" class="highlight">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  <br>
  <div class="main">
    <div class="profile">
      <center><img src="../assets/image.jpg" alt="User Image"/></center>
    </div>
    <div class="profile2">
      <el-button v-on:click="ViewDetails($event)" type="primary" class="button"><span id="span">View Profile</span></el-button><br>
      <el-button v-on:click="CreateFeedback($event)" type="primary" class="button"><span id="span">Create FeedBack</span></el-button><br>
      <el-button v-on:click="MyFeedback($event)" type="primary" class="button"><span id="span">My FeedBack</span></el-button>
    </div>
    <div class="profile3">
      <p>Hello There,</p>
      <p>This is little description about my self. I am currently working with Office Beacon with the post as Trainee Full-Stack Developer</p>
      <p>Apart from coding, I love chess and music.</p>
    </div>
  </div>
  <br><br><br>
  <div class="details">
    <div class="subclass">
      <p id="details">Details</p>
      <br><br>
      <div class="col-md-12">
        <div class="col-md-3">
          <label>Enter new username</label>
        </div>
        <div class="col-md-3">
          <el-input placeholder="jos_12"></el-input>
        </div>
        <div class="col-md-3">
          <label>update emailId </label>
        </div>
        <div class="col-md-3">
          <el-input placeholder="jos_12@gmail.com"></el-input>
        </div>
      </div>
      <br><br>
      <div class="col-md-12">
        <div class="col-md-3">
          <label>Enter new DOB</label>
        </div>
        <div class="col-md-3">
          <el-input placeholder="12/12/1996"></el-input>
        </div>
        <div class="col-md-3">
          <label>Change Gender</label>
        </div>
        <div class="col-md-3">
          <el-input placeholder="Female"></el-input>
        </div>
      </div>
      <br><br>
      <div class="col-md-12">
        <div class="col-md-3">
          <label>Change Company</label>
        </div>
        <div class="col-md-3">
          <el-input placeholder="Office Beacon"></el-input>
        </div>
        <div class="col-md-3">
          <label>Change Address:</label>
        </div>
        <div class="col-md-3">
          <el-input placeholder="C-302, Status Enclave, Makarpura Road"></el-input>
        </div>
      </div>
      <br><br>
      <div class="col-md-12">
        <div class="col-md-3">
          <label>Change Contry:</label>
        </div>
        <div class="col-md-3">
          <el-input placeholder="India"></el-input>
        </div>
        <div class="col-md-3">
          <label>Change State:</label>
        </div>
        <div class="col-md-3">
          <el-input placeholder="Guajrat"></el-input>
        </div>
      </div>
      <br><br>
      <div class="col-md-12">
        <div class="col-md-3">
          <label>Change City:</label>
        </div>
        <div class="col-md-3">
          <el-input placeholder="Vadodara"></el-input>
        </div>
        <div class="col-md-3">
          <label>Change Zipcode:</label>
        </div>
        <div class="col-md-3">
          <el-input placeholder="190002"></el-input>
        </div>
      </div>
    </div><br><br><br>
    <center><el-button style="text-align:center" v-on:click="updated('Your Details is updated.', $event)" type="primary" class="button"><span id="span">Update Details</span></el-button><br></center>
  </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  methods: {
    ViewDetails: function (event) {
      window.location.href = '/#/home'
    },
    CreateFeedback: function (event) {
      window.location.href = '/#/CreateFeedback'
    },
    MyFeedback: function (event) {
      window.location.href = '/#/MyFeedback'
    },
    updated: function (message, event) {
      // now we have access to the native event
      alert(message)
      window.location.href = '/#/home'
    }
  }
}
</script>
<style scoped>

*{
  /*background-color: url('../assets/stardust.png');*/
  color: #30A9DE;

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
  html{
    background-color: white;
  }
  .main{
    width:100%;
    margin:0 auto;
  }
  .profile{
    float:left;
    width:20%;
    height:200px;
    border-right:2px solid black;
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
  .details {
    padding-top: 20px;
    width:100%;
    height:300px;
    border-top:2px dotted black;
    margin:0 auto;
  }
  .button_sub{
    padding-top: 20px;
    width:100%;
    height:200px;
    border-top:2px dotted black;
    margin:0 auto;
  }
  .button{
    display: inline-block;
    margin: 10px;
    color: #f9c00c;
  }
  img{
    margin-left: 50% auto;
    margin-top: 0%;
    border-radius: 50%;
    text-align: center;
  }
  img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
  .button_submit{
    text-align: center;
  }
  .subclass{
    font-size: 20px;
    margin: auto;
  }
  p{
    text-align: center;
    padding-top: 20px;
  }
  #details{
    color: #58C9B9;
    text-align: center;
    font-size: 30px;
    text-decoration: underline;
  }
  span{
    font-weight: bold;
  }
  /*Media Query*/
  @media only screen and (max-width: 1000px) {
    .profile{
      float:left;
      width:20%;
      height:200px;
      border-right:2px solid black;
    }
    img{
      border-radius: 50%;
      text-align: center;
      width: 130px;
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
  @media only screen and (max-width: 700px) {
    .profile{
      float:left;
      width:20%;
      height:200px;
      border-right:2px solid black;
    }
    img{
      border-radius: 50%;
      text-align: center;
      width: 100%;
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
      text-align: center;
      float:left;
      width:40%;
      height:200px;
      border-right:2px solid black;
      margin:0 auto;
    }
    p {
      margin: 0 0 -5px;
    }
  }
  @media only screen and (max-width: 550px) {
    .profile{
      float:left;
      width:50%;
      height:200px;
      border:2px solid black;

    }
    img{
      border-radius: 50%;
      text-align: center;
      width: 70%;
    }
    .profile2{
      padding-top: 20px;
      text-align: center;
      width:50%;
      height:200px;
      border:2px solid black;

      margin:0 auto;
    }
    .profile3{
      text-align: center;
      width:100%;
      height:150px;
      border:2px solid black;
      border-left:2px solid black;
      margin:0 auto;
    }
    .details {
      border-top:none;
    }
    .button_sub{
      border-top:none;
    }
  }
</style>
