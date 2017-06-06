<template>
  <div id="app">
    <router-view></router-view>
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  /**{
     animation: 1s ease-out 0s 1 slideInFromLeft;
  }
  @keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}*/

  .bg{
    background: url("./assets/stardust.png");
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  body {
    background-color: transparent;color: #30A9DE;
  }


  .header-user-dropdown .header-limiter .header-user-menu {
      height: 0px;
  }
</style>
