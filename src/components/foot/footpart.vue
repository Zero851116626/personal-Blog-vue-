<template>
    <div class="footpart">
        <div class="image">
            <h4>照片墙</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
        <div class="diary">
            <h4>我的日志</h4>
            <ul class="diarylist">
              <li>title1</li>
              <li>title2</li>
              <li>title3</li>
              <li>title4</li>
              <li>title5</li>
              <li>title6</li>
            </ul>
        </div>
        <div class="work">
            <h4>我的作品</h4>
            <ul class="worklist">
              <li>title1</li>
              <li>title2</li>
              <li>title3</li>
              <li>title4</li>
              <li>title5</li>
              <li>title6</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footpart"
    }
</script>

<style scoped lang="less">
  .footpart{
    width:100%;
    height:300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div{
      width:360px;
      height:100%;
      background-color: #FFF;
    }
    .image{
      ul{
        width:100%;
        height:calc(100% - 21px);
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        li{
          width:100px;
          height:80px;
          background-color: red;
        }
      }
    }
    .diary{
       ul{
         margin-top: 25px;
         li{
           height:25px;
           line-height: 25px;
           font-size: 22px;
           padding-left: 20px;
         }
       }
    }
    .work{
      ul{
        margin-top: 25px;
        li{
          height:25px;
          line-height: 25px;
          font-size: 22px;
          padding-left: 20px;
        }
      }
    }
  }
</style>
