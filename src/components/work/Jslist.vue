<template>
    <div class="Jslist">
      <div class="work-content">
        <div class="top">
          <p class="item">纯javascript作品列表</p>
          <p class="sgined">往事清零，爱恨随意</p>
        </div>
        <div class="bottom">
          <ul>
            <li>
              <div>
                <img src="./img/toppic01.jpg" alt="">
              </div>
              <p>作品1</p>
            </li>
            <li>
              <div>
                <img src="./img/toppic01.jpg" alt="">
              </div>
              <p>作品1</p>
            </li>
            <li>
              <div>
                <img src="./img/toppic01.jpg" alt="">
              </div>
              <p>作品1</p>
            </li>
            <li>
              <div>
                <img src="./img/toppic01.jpg" alt="">
              </div>
              <p>作品1</p>
            </li>
            <li>
              <div>
                <img src="./img/toppic01.jpg" alt="">
              </div>
              <p>作品1</p>
            </li>
            <li>
              <div>
                <img src="./img/toppic01.jpg" alt="">
              </div>
              <p>作品1</p>
            </li>
            <li>
              <div>
                <img src="./img/toppic01.jpg" alt="">
              </div>
              <p>作品1</p>
            </li>
            <li>
              <div>
                <img src="./img/toppic01.jpg" alt="">
              </div>
              <p>作品1</p>
            </li>
          </ul>
        </div>
        <div class="page">
          <div class="pagelist">
            <a title="Total record">&nbsp;<b>45</b> </a>&nbsp;&nbsp;&nbsp;<b>1</b>&nbsp;<a href="/download/index_2.html">2</a>&nbsp;<a href="/download/index_2.html">下一页</a>&nbsp;<a href="/download/index_2.html">尾页</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Jslist"
    }
</script>

<style scoped lang="less">
  
  .Jslist{
    width:100%;
    height:625px;
    background-color: #fff;
    .work-content{
      width:100%;
      .top{
        width:100%;
        height:40px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        border-bottom: 1px solid #DDD;
        .item{
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
        margin-top:20px;
        width:100%;
        height:626px;
        ul{
          width:100%;
          height:100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          li{
            width:255px;
            height:278px;
            background-color: skyblue;
            img{
              width:255px;
              height:200px;
            }
          }
        }
      }
      .pagelist { text-align: center; color: #666; width: 100%; clear: both; margin: 20px 0; padding-top: 20px }
      .pagelist a { margin: 0 2px; border: 1px solid #000; padding: 5px 10px; }
      .pagelist > b { border: 1px solid #000; padding: 5px 10px; }
      .curPage { font-weight: bold }
      .allpage { }
    }
  }
</style>
