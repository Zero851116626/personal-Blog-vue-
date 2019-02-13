<template>
  <div id="admin">
    <p class="title">博客后台管理系统</p>
    <div class="admin-nav">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        style="background-color:rgba(64,158,255,.2);"
      >
        <router-link to="/admin/personinfo">
          <el-menu-item index="1">
            <i class="el-icon-edit"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
        </router-link>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span slot="title">作品列表管理</span>
          </template>
          <el-menu-item-group>
            <span slot="title">作品列表管理</span>
            <router-link :to="{name:'jswork'}">
              <el-menu-item index="1-1">纯javascript</el-menu-item>
            </router-link>
            <router-link :to="{name:'framework'}">
              <el-menu-item index="1-2">框架类作品</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        
        
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-picture"></i>
            <span slot="title">慢生活管理</span>
          </template>
          <el-menu-item-group>
            <span slot="title">慢生活管理</span>
            <router-link :to="{name:'ad-photo'}">
              <el-menu-item index="1-1">照片</el-menu-item>
            </router-link>
            <router-link :to="{name:'ad-diary'}">
              <el-menu-item index="1-2">日记</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        
        <router-link :to="{name:'ad-vip'}">
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">会员管理</span>
          </el-menu-item>
        </router-link>
        
      </el-menu>
    </div>
    <div class="admin-content">
      <router-view/>
    </div>
    <div class="bloger">
      <router-link to="/">
        <div class="backhome">返回首页</div>
      </router-link>
      <router-link to="/">
        <div class="logout" @click="logout">登出</div>
      </router-link>
    </div>
    
    
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
          return {
            isCollapse: true
          };
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          //登出账户
          logout(){
            this.$store.state.logState = false;
          }
          
        }
    }
</script>

<style scoped lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  #admin{
    position: relative;
    width:100vw;
    height:100vh;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .title{
      position: absolute;
      top:0;
      left:50%;
      transform: translateX(-50%);
      font-size: 30px;
    }
    .admin-nav{
      width:200px;
      height:460px;
    }
    .admin-content{
      min-width: 400px;
      width:calc(100vw - 300px);
      height:80vh;
    }
    .bloger{
      width:120px;
      height:60px;
      line-height: 30px;
      text-align: center;
      color:#000;
      position:absolute;
      right:50px;
      bottom:50px;
      background-color: rgba(64,158,255,.2);
    }
  }
</style>
