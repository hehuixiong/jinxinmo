<template>
  <div id="Banner" :class="{show}">
    <div class="carousel" @mouseenter="show = true" @mouseleave="show = false">
      <el-carousel :interval="200000" height="800px">
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="banner-bg" v-show="show" @mouseenter="show = true">
      <div class="wrap">
        <div class="banner-box">
          <div class="title">景观设施膜结构案例</div>
          <p>金鑫膜-膜结构设计-顶尖膜结构设计-金鑫膜结构建筑设计院</p>
          <div class="more">
            <span><span>查看更多</span> <i class="el-icon-arrow-right"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheBanner',
  data () {
    return {
      banner: [
        require('../images/banner3.png'),
        require('../images/banner1.png'),
        require('../images/banner2.png'),
        require('../images/banner4.png'),
        require('../images/banner5.png')
      ],
      show: false
    }
  }
}
</script>
<style lang="scss">
#Banner{
  position: relative;
  .carousel{
    width: 100%;
    height: 800px;
  }
  img{
    height: 100%;
    width: 100%;
  }
  .banner-bg{
    position: absolute;
    top: 230px;
    left: 50%;
    transform: translateX(-50%);
  }
  .banner-box{
    width: 430px;
    height: 300px;
    background: rgba(236, 167, 59, 0.8);
    color: #ffffff;
    display: inline-flex;
    flex-direction: column;
    padding: 50px 40px;
    box-sizing: border-box;
    .title{
      font-weight: bold;
      font-size: 30px;
    }
    p{
      margin: 15px 0 20px;
    }
    .more{
      display: inline-flex;
      >span{
        border: 1px solid #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px 6px;
        font-size: 13px;
        cursor: pointer;
      }
    }
  }
  &.show .banner-bg{
    z-index: 99;
  }
  .el-carousel__arrow{
    background: rgba(236, 167, 59, 0.6);
    i{
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
