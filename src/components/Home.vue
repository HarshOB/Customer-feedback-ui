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
  <br>
  <div class="main">
    <div class="profile">
      <center><img src="../assets/image.jpg" alt="User Image"/></center>
    </div>
    <div class="profile2">
      <el-button v-on:click="editDetails($event)" class="button" type="primary"><span id="span">Edit Profile</span></el-button><br>
      <el-button v-on:click="CreateFeedback($event)" class="button" type="primary"><span id="span">Create FeedBack</span></el-button><br>
      <el-button v-on:click="MyFeedback($event)" class="button" type="primary"><span id="span">My FeedBack</span></el-button>
    </div>
    <div class="profile3">
      <p>Hello There,</p>
      <p>This is little description about my self. I am currently working with Office Beacon with the post as Trainee Full-Stack Developer</p>
      <p>Apart from coding, I love chess and music.</p>
    </div>
  </div>
  <br><br><br><br>
  <div class="details">
    <p id="details">Details</p>
    <div class="sub_details">
      <p><span class="details_name">User Name:</span> jos_12</p>
      <p><span class="details_name">Email-id:</span> jos_12@gmail.com</p>
      <p><span class="details_name">Date Of Birth:</span> 12/12/1996</p>
      <p><span class="details_name">Gender:</span> Female</p>
      <p><span class="details_name">Company:</span> Office Beacon</p>
    </div>
    <div class="sub_details_right">
      <p><span class="details_name">Address:</span> C-302, Status Enclave, Makarpura Road</p>
      <p><span class="details_name">Contry:</span> India</p>
      <p><span class="details_name">State:</span> Gujarat</p>
      <p><span class="details_name">city:</span> Vadodara</p>
      <p><span class="details_name">ZipCode:</span> 190002</p>
    </div>
  </div>
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
    editDetails: function (event) {
      window.location.href = '/#/editDetails'
    },
    CreateFeedback: function (event) {
      window.location.href = '/#/CreateFeedback'
    },
    MyFeedback: function (event) {
      window.location.href = '/#/MyFeedback'
    }
  }
}
</script>

<style scoped>
  *{
    color: #30A9DE;
  }
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
    float: left;
    padding-top: 20px;
    width:100%;
    border-top:2px dotted black;
    margin:0 auto;
  }
  .sub_details{
    float:left;
    width:50%;
    font-size: 15px;
    height:270px;
    border-right:2px solid black;
    margin:0 auto;
  }
  .sub_details_right{
    float:left;
    width:50%;
    font-size: 15px;
    height:270px;
    margin:0 auto;
  }
  .details_name{
    font-size: 15px;
    color: #58C9B9;
    font-weight: 100px
  }
  img{
    margin-left: 50% auto;
    margin-top: 5%;
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
  @media only screen and (max-width: 1200px) {
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
      border-right:2px solid black;
      border-left:2px solid black;
      margin:0 auto;
    }
    p {
      margin: 0 0 -5px;
    }
    .details[data-v-955a4de2] {
      float: left;
      padding-top: 0px;
      width: 100%;
      border-top: 2px dotted black;
      margin: 0 auto;
    }
  }
</style>
