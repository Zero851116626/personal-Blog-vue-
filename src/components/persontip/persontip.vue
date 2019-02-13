<template>
    <div>
      <div class="about">
        <p class="avatar"> <img src="./img/picture.jpg" alt=""> </p>
        <p class="abname">全栈路上的行者 | 张一帆</p>
        <p class="abposition">Web前端工程师，未来的全栈工程师</p>
        <p class="abtext"> 一个95后草根！一心学习研究web前端技术，一边学习一边积累经验。 </p>
      </div>
      <div class="weixin">
        <h2 class="hometitle">微信关注</h2>
        <ul>
          <li><img src="./img/erweima.jpg" alt=""></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "persontip",
    }
</script>

<style scoped lang="less">
  .about {width:100%; background: #FFF url(./img/bg.png) no-repeat top center; overflow: hidden; }
  .avatar { margin: 40px auto 20px; width: 100px }
  .avatar img { width: 100px; border-radius: 50% }
  .abname { color: #3f3f3f; font-weight: bold; font-size: 16px; margin-bottom: 10px; text-align: center }
  .abposition { color: #595959; text-align: center }
  .abtext { padding: 20px 20px; color: #999; line-height: 26px; text-align: justify; }
  .weixin{
    width:90%;
    padding:5%;
    margin-top:20px;
    background-color: #fff;
    ul{
      width:90%;
      li{
        width:100%;
        img{
          width:100%;
        }
      }
    }
  }
</style>
