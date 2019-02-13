<template>
    <div id="about-me">
      <div class="bg"><img src="./img/blank.jpg" alt=""></div>
      <div class="content">
        <div class="top">
          <p class="item">关于我</p>
          <p class="sgined">漂若浮萍，无惧生死</p>
        </div>
        <div class="bottom">
          <div class="left">
            <p>张一帆，男，95后社会主义接班人。</p>
            <p>2018年8月，一个偶然的机会，我接触到了网页设计，刚开始只是懵懂的兴趣和完成学生会的差事，但是随着学习的深入，我越发的喜欢上了前端</p>
            <p>我的专业本是电子信息工程，大四才开始学习web前端，好像有些为时过晚，但是兴趣是最好的老师，五个月来，通过学习网课，自主练习等多种途径，终于算是入了门。</p>
            <p>学习HTML+CSS阶段，我很快掌握了布局，样式等前端工程师掌握的基础，并且纯手写了一份京东商城的主页，那只是一个静态页面，没有任何的交互，功能，即便如此，也让当时的我费了一番心思，光一个头部导航，就能让人崩溃。</p>
            <p>再下来学习javascript阶段，由于有C语言基础，又因为javascript是一款弱类型的脚本语言，本身使用起来就很容易，所以掌握javascript并非难事。我认为，学语言，最终要的是学思想，一个功能如何实现，先从其逻辑入手，再根据现实的需求不断改写重构，最终写出易维护，结构简介的代码。我个人的弱项，应该是算法方面，但是通过接触更多的项目和逻辑，算法方面已经有所提高，以后还是会有意识的着重提高自己的算法思维能力。</p>
            <p>学完了基础，然后就开始学习html5，以及react，vue等前端框架。不得不说，框架真是一个伟大的发明，不仅可以加快开发，而且增强了代码的可维护性。现在我已经将Vue和React框架的原理和基础基本掌握了，接下来很长一段时间，就是要不断提高自己的熟练度，多做一些项目开发，希望自己能学习到更多更精更深的前端技术。</p>
            <p>我应该不会满足于此，我的目标是成为一名出色的全栈工程师，不仅能做前端，还要对后端知识有所涉猎。所以我已经学习了node.js以及最常用的express包，希望自己的博客，能早日实现vue+node.js+mongodb的结构。</p>
            <p>虽然起步比较晚，但只要努力，就一定会有所收获。</p>
          </div>
          <div class="right">
            <Persontip></Persontip>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Persontip from "../persontip/persontip";
  
  export default {
        name: "Me",
        components:{
          Persontip,
        }
        
    }
</script>

<style scoped lang="less">
  #about-me{
    width:1140px;
    margin:0 auto;
    img{
      width:100%;
      height:200px;
    }
    .content{
      width:100%;
      .top{
        width:100%;
        height:40px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        border-bottom: 1px solid #DDD;
        .item{
          width:100px;
          height:40px;
          padding-left:15px;
          line-height:40px;
        }
        .sgined{
          height:40px;
          padding-right: 15px;
          line-height:40px;
        }
      }
      .bottom{
        width:100%;
        display: flex;
        justify-content: space-between;
        .left{
          font:15px "Microsoft YaHei", Arial, Helvetica, sans-serif;
          width:60%;
          padding:30px 40px;
          line-height:20px;
          font-size: 18px;
          background-color: #fff;
          p{
            font-size: 16px;
            line-height:20px;
            text-indent: 2em;
            margin:10px 0 ;
          }
        }
        .right{
          width:40%;
        }
      }
    }
  }
</style>
