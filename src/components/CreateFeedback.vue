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
      <el-button v-on:click="ViewProfile($event)" type="primary" class="button"><span id="span">View Profile</span></el-button><br>
      <el-button v-on:click="editDetails($event)" class="button" type="primary"><span id="span">Edit Profile</span></el-button><br>
      <el-button v-on:click="MyFeedback($event)" class="button" type="primary"><span id="span">My FeedBack</span></el-button>

    </div>
    <div class="profile3">
      <p>Hello There,</p>
      <p>This is little description about my self. I am from Office Beacon with the post as Trainee Full-Stack Developer</p>
      <p>Apart from coding, I love chess and music.</p>
    </div>
  </div>
  <br><br><br><br>
  <div class="details">
      <p id="details">Create Feedback</p>
      <p>Create your feedback from here</p>
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
    ViewProfile: function (event) {
      window.location.href = '/#/home'
    },
    editDetails: function (event) {
      window.location.href = '/#/editDetails'
    },
    MyFeedback: function (event) {
      window.location.href = '/#/MyFeedback'
    }
  }
}
</script>
<style scoped>
*{
  /*background-color: url('../assets/stardust.png');*/
  color: #30A9DE;

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
    text-align: center;
    width:100%;
    height:200px;
    border-top:2px dotted black;
    margin:0 auto;
  }
  img{
    margin-left: 50% auto;
    margin-top: 10%;
    border-radius: 50%;
    text-align: center;
  }
  img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
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
  .sub{
    font-size: 20px
  }
  p{
    text-align: center;
    padding-top: 20px;
  }
  #details{
    text-align: center;
    font-size: 30px;
    text-decoration: underline;
  }
  span{
    font-weight: bold;
  }
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
