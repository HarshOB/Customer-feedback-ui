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
      <el-button v-on:click="editProfile($event)" class="button" type="primary"><span id="span">Edit Profile</span></el-button><br>
      <el-button v-on:click="CreateFeedback($event)" type="primary" class="button"><span id="span">Create FeedBack</span></el-button><br>
    </div>
    <div class="profile3">
      <p>Hello There,</p>
      <p>This is little description about my self. I am from Office Beacon with the post as Trainee Full-Stack Developer</p>
      <p>Apart from coding, I love chess and music.</p>
    </div>
  </div>
  <br><br><br>
  <div class="details">
    <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item style="color: #f9c00c;" title="Feedback of Car" name="1">
    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback of PC" name="2">
    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback of Home" name="3">
    <div>Simplify the process: keep operating process simple and intuitive;</div>
    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
  </el-collapse-item>
  <el-collapse-item title="Feedback of Fridge " name="4">
    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
  </el-collapse-item>
</el-collapse>
  </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    ViewDetails: function (event) {
      window.location.href = '/#/home'
    },
    CreateFeedback: function (event) {
      window.location.href = '/#/CreateFeedback'
    },
    editProfile: function (event) {
      window.location.href = '/#/editDetails'
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
  color: #30A9DE;
}

.el-collapse-item__header {
  text-align: center;
    height: 43px;
    line-height: 43px;
    padding-left: 15px;
    background-color: #444349;
    color: #f9c00c;
    cursor: pointer;
    border-bottom: 1px solid #dfe6ec;
    font-size: 13px;
}

  html{
    background-color: transparent;
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
    text-align: center;
    padding-top: 20px;
    width:100%;
    height:200px;
    border-top:2px dotted black;
    margin:0 auto;
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
    text-align: center;
    font-size: 30px;
    text-decoration: underline;
  }
  span{
    font-weight: bold;
  }
  .el-collapse-item__header {
    color:#f9c00c;
  }
  @media only screen and (max-width: 1200px) {
    img{
      border-radius: 50%;
      text-align: center;
      width: 150px;
    }
  }
  @media only screen and (max-width: 1000px) {

    img{
      border-radius: 50%;
      text-align: center;
      width: 130px;
    }
  }
</style>
