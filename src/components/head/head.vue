<template>
  <div id="head-nav">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="#ffd04b">
      <h1><a href="#"><img src="./img/logo.jpg" alt=""></a></h1>
      <el-menu-item index="0"><router-link to="/">博客首页</router-link></el-menu-item>
      <el-submenu index="1">
        <template slot="title">学无止境</template>
        <router-link  to="/work/js"><el-menu-item index="1-1">纯javascript作品</el-menu-item></router-link>
        <router-link to="/work/frame"><el-menu-item index="1-2">前端框架类作品</el-menu-item></router-link>
      </el-submenu>
      <el-submenu index="2" >
        <template slot="title">慢生活</template>
        <router-link  to="/life/photo"><el-menu-item index="2-1">照片</el-menu-item></router-link>
        <router-link  to="/life/diary"><el-menu-item index="2-2">日志</el-menu-item></router-link>
      </el-submenu>
      <el-menu-item index="3"><router-link to="/me">关于我</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/login">博主登录</router-link></el-menu-item>
      <div class="search">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "HeadNav",
    data() {
      return {
        input: '',
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style scoped lang="less">
  #head-nav{
    width:1140px;
    margin:0 auto;
    .search{
      position:absolute;
      right:20px;
      top:50%;
      transform: translateY(-50%);
      display: flex;
    }
    a{
      display: block;
      width:100%;
      height:100%;
    }
  }
  h1{
    float: left;
    width:100px;
    height:60px;
    a{
      display: block;
      width:100%;
      height:100%;
      img{
        width:100%;
        height:100%;
      }
    }
  }
  
</style>
