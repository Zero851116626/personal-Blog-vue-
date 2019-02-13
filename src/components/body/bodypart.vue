<template>
    <div class="body">
      <div class="personal-introduce">
        <div class="info-box">
          <h2>个人简介</h2>
          <p>姓名：张一帆</p>
          <p>性别：男</p>
          <p class="recommend">热爱生活，喜欢摄影，正在努力成为全栈工程师！</p>
        </div>
        <div class="pho-box">
          <ul class="photos">
            <li><img src="./img/1.jpg" alt=""></li>
            <li><img src="./img/2.jpg" alt=""></li>
            <li><img src="./img/3.jpg" alt=""></li>
            <li><img src="./img/1.jpg" alt=""></li>
          </ul>
        </div>
      </div>
      <div class="guanzhu" id="follow-us">
        <h2 class="hometitle">关注我 么么哒！</h2>
        <ul>
          <li class="sina"><a href="https://www.weibo.com/u/3189416894?refer_flag=1001030103_" target="_blank"><span>新浪微博</span>JRNC</a></li>
          <li class="qq"><a href="#" target="_blank"><span>QQ号</span>851116626</a></li>
          <li class="email"><a href="#" target="_blank"><span>邮箱帐号</span>851116626@qq.com</a></li>
          <li class="wxgzh"><a href="#" target="_blank"><span>微信号</span>18734856198</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "bodypart",
        mounted() {
          //个人简介的图片轮播
          function play(time) {
            let oUl = document.querySelector(".photos");
            let index = 0;
            let timer = setInterval(()=>{
              index++;
              index = index%4;
              oUl.style.transition = "left 0.3s";
              oUl.style.left = - index *300 + "px";
              setTimeout(()=>{
                if(index === 3){
                  index = 0;
                  oUl.style.transition = "";
                  oUl.style.left = - index *300 + "px";
                }else{
                  oUl.style.transition = "left 0.3s";
                  oUl.style.left = - index *300 + "px";
                }
              },400)
            },time)
          }
          play(3000);
        }
    }
</script>

<style scoped lang="less">
  .body{
    width:1140px;
    height:450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F6F6F6;
    .personal-introduce{
      width:750px;
      height:451px;
      display: flex;
      justify-content: space-around;
      background-color: #F6F6F6;
      .info-box{
        width:55%;
        height:100%;
        background-color: #FFF;
        h2{
          font-size: 36px;
          margin-top: 50px;
        }
        p{
          height:30px;
          line-height:30px;
          font-size: 24px;
        }
        .recommend{
          text-indent: 2em;
        }
      }
      .pho-box{
        position: relative;
        width:40%;
        height:100%;
        overflow: hidden;
        .photos{
          position: absolute;
          width:500%;
          height:100%;
          li{
            float:left;
            width:300px;
            height:100%;
            background-color: #EEE;
            display: flex;
            align-items: center;
            img{
              width:300px;
            }
          }
        }
      }
    }
  }
  .guanzhu{
    width:35%;
    height:100%;
    background-color: #fff;
    h2{
      margin-top:20px;
    }
  }
  
  .guanzhu ul li { width:70%; font-size: 12px; margin-left:20px;margin-bottom: 10px; background: #fff; color: #525252; line-height: 40px; padding: 0 0 0 34px; border: 1px solid #DDD; border-radius: 2px; position: relative; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
  .guanzhu .sina { border: #ec3d51 1px solid; background: url(./img/gzbg.jpg) no-repeat 0 10px }
  .guanzhu .tencent { border: #68a6d6 1px solid; background: url(./img/gzbg.jpg) no-repeat 0 -43px }
  .guanzhu .qq { border: #2ab39a 1px solid; background: url(./img/gzbg.jpg) no-repeat 0 -98px }
  .guanzhu .email { border: #12aae8 1px solid; background: url(./img/gzbg.jpg) no-repeat 0 -150px }
  .guanzhu .wxgzh { border: #199872 1px solid; background: url(./img/gzbg.jpg) no-repeat 0 -200px }
  .guanzhu .wx { overflow: hidden; padding: 0 }
  .guanzhu .wx img { width: 100%; }
  .guanzhu ul li span { float: right; text-align: center; width: 100px; -moz-transition: all .5s ease; -webkit-transition: all .5s ease; -ms-transition: all .5s ease; -o-transition: all .5s ease; transition: all .5s ease; transition: all 0.5s; }
  .guanzhu .sina span { background: #ec3d51; }
  .guanzhu .tencent span { background: #68a6d6; }
  .guanzhu .qq span { background: #2ab39a; }
  .guanzhu .email span { background: #12aae8; }
  .guanzhu .wxgzh span { background: #199872; }
  .guanzhu a span { color: #FFF }
  .guanzhu ul li:hover span { width: 120px; }
</style>
