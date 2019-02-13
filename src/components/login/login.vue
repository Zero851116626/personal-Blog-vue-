<template>
    <div id="login">
      <div class="log-content">
        <div class="logo"></div>
        <div class="Info">
          <div><i></i><el-input v-model="input" placeholder="请输入用户名" width="230" height="30" name="username"></el-input></div>
          <div><i></i><el-input v-model="psw" type="password" placeholder="请输入密码" width="230" height="30" name="password"></el-input></div>
          <el-button type="primary" round @click="getInfo">登录按钮</el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "admin",
        data() {
          return {
            input: '',
            psw:'',
            path:{
              username: "",
              password:"",
            }
          }
        },
        methods:{
          getInfo(){
            let state = 0;
            //暂时这样表示，实际过程中，肯定是把用户输入的东西直接加密送到后台去验证
            if(this.input.length===0){
              alert("请输入用户名")
            }else if(this.psw.length === 0){
              alert("请输入密码")
            }else {
              this.path = {
                username:this.input,
                password:this.psw
              }
            }
            let {username,password}= this.path;
            if(username==="admin" && password==="admin"){
              state = 200
            }else {
              alert("用户名或密码错误")
            }
            //假装这里发送后台，并且验证成功空
            if(state === 200){
              this.$store.state.logState = true;
              window.location.href="http://localhost:8080/#/admin"
            }
            
          },
          
        },
        beforeCreate() {
            console.log("检查博主登录状态",this.$store.state.logState)
            if(this.$store.state.logState === true){
              window.location.href="http://localhost:8080/#/admin"
            }
        }
    }
</script>

<style scoped lang="less">
  #login{
    width:1140px;
    margin:0 auto;
    .log-content{
      position: relative;
      width:1140px;
      height:599px;
      background: url("./img/bg.jpg") no-repeat center/cover;
      .logo{
        position: absolute;
        top:60px;
        left:50%;
        transform: translateX(-50%);
        width:527px;
        height:147px;
        background: url("./img/logo.jpg") no-repeat center/cover;
        
      }
      .Info{
        position: absolute;
        top:220px;
        left:50%;
        transform: translateX(-50%);
        display: flex;
        width:300px;
        height:150px;
        background-color: transparent;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        
      }
    }
  }
</style>
