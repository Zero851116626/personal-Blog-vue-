<template>
  <div class="home">
    <HeadNav></HeadNav>
    <router-view />
    
  </div>
  
</template>

<script>
  import HeadNav from "./head/head";
  import Home from "./home/index";
  
  export default {
    name: 'index',
    components: {
      HeadNav,Home
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    width:1140px;
    margin:0 auto;
  }
</style>
