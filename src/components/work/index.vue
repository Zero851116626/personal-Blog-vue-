<template>
    <div id="worklist">
      <div class="bg">
        <img src="./img/bg.jpg" alt="">
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
  #worklist{
    width:1140px;
    margin:0 auto;
    .bg{
      width:100%;
      height:200px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
</style>
