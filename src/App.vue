<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
  name: 'App',
}
</script>

<style lang="less">
  *{
    margin:0;
    padding:0;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color:#000;
  }
  body{
    background-color: #f6f6f6;
  }
  #app{
    margin: 0 auto;
    width:100vw;
    height:100vh;
  }
</style>
