<template>
    <div id="photo">
      <div class="top">
        <p class="item">生活照片</p>
        <p class="sgined">点滴生活，记录每一天</p>
      </div>
      <div id="wrap" class="bottom" ref="wrap">
      
      </div>
    </div>
</template>

<script>
   import {loadImg} from "./js/loading.js";
  export default {
        name: "photo",
        mounted() {
          function load(){
              let loading = new loadImg(5,"#wrap",1140);
              //注意地址的问题，做好后台，就从后台获取数据,直接数组遍历出图片就好了
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549871557441&di=5de9c7783f2cd9dbfd6e429efab488b6&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Fbmiddle%2F005vK3IXgw1fb5g48seljj30rs0gkth8.jpg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550466301&di=ee528cfe04b68f7ca31fac0f77838b6c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg845.ph.126.net%2FklXTYJ9BOH8khV_ddj7_tw%3D%3D%2F902971725288163960.jpg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549884024532&di=48d695475e28b1246f9a96b03680cd74&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1717519849%2C1133172882%26fm%3D214%26gp%3D0.jpg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549871575432&di=c5bb8b00b4b6e235d4d37d2191eaa46f&imgtype=0&src=http%3A%2F%2Fpic2.52pk.com%2Ffiles%2F130605%2F1283568_110805_9322.jpg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549871575433&di=090d095460dd1897554fcec54581d114&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Forignal%2F4a19099f5c1e07e92ad72")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549871575436&di=aec2bcf502c4a2cc425c28a3615cf8c0&imgtype=0&src=http%3A%2F%2Fimage5.92bizhi.com%2Funclassified_unclassified--278_01-1024x768.jpg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550032455255&di=2d7d50447703d88b6218f94ff3416b8a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180219%2Fda5e0b314a5a47b693e73bfe19ecef4c.jpeg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550032455255&di=1daf3b8a8fc38fd922bf63634dae1062&imgtype=0&src=http%3A%2F%2Fimg1.178.com%2Fnews%2F201610%2F271839032469%2F271911293186.jpg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550032455255&di=2aa39ff238131831f16d6a7f6fd8e770&imgtype=0&src=http%3A%2F%2Ftu.hbzimg.pw%2Fdownload%2Fpic%2F000%2F326%2F3fbb7eb6aeaf29a2d83aff216bc4483c.jpg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550032455255&di=7dc21341df1c3e3e96b8e93878d93e3b&imgtype=0&src=http%3A%2F%2Fi5.pdim.gs%2F3da81feab112811694f27d98b37393d7.jpeg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550032455255&di=aeb59d81772c49ceb334ff62a909b4fe&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017b9957e389920000018c1b9820ca.jpg%401280w_1l_2o_100sh.jpg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550032455254&di=76dab552f9a95f89649bf32ac9a7e608&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F623c807f2c7545a1bda066191eaa8fb00e24322f.jpg")
              loading.addImg("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550032455254&di=51b48dc998baa771faca026d3642aa42&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F28%2F20140628143219_QSCxf.jpeg")
          }
          load()
        }
  }
</script>

<style scoped lang="less">
#photo {
  width: 100%;
  .top {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid #DDD;
    
    .item {
      height: 40px;
      padding-left: 15px;
      line-height: 40px;
    }
    
    .sgined {
      height: 40px;
      padding-right: 15px;
      line-height: 40px;
    }
  }
  .bottom{
    width:100%;
    min-height:600px;
  }
}

</style>
