<template>
  <div id="Banner" :class="{show}">
    <div @mouseenter="show = true" @mouseleave="show = false">
      <el-carousel arrow="always" indicator-position="none" :interval="4000000">
        <el-carousel-item v-for="(item, index) in banner" :key="index">
          <img :src="item" alt="">
          <div class="banner-bg hidden-xs-only hidden-sm-only hidden-md-only" v-show="show" @mouseenter="show = true">
            <div class="container">
              <div class="banner-box">
                <div class="title">景观设施膜结构案例</div>
                <p>金鑫膜-膜结构设计-顶尖膜结构设计-金鑫膜结构建筑设计院</p>
                <div class="more">
                  <span><span>查看更多</span> <i class="el-icon-arrow-right"></i></span>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
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
  .el-carousel{
    img{
      height: 100%;
      width: 100%;
    }
  }
  .banner-bg{
    .container{
      position: absolute;
      top: 23%;
      left: 50%;
      z-index: 1;
      transform: translateX(-50%);
    }
  }
  .banner-box{
    width: 400px;
    height: 270px;
    background: rgba($--color-primary, 0.8);
    color: #ffffff;
    display: inline-flex;
    flex-direction: column;
    padding: 50px 40px;
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
    background: rgba($--color-primary, 0.6);
    i{
      font-weight: bold;
      font-size: 16px;
    }
  }
}
@media (min-width: 375px) {
  .el-carousel__container {
    height: 150px!important;
  }
}

@media (min-width: 576px) {
  .el-carousel__container {
    height: 200px!important;
  }
}

@media (min-width: 768px) {
  .el-carousel__container {
    height: 300px!important;
  }
}

@media (min-width: 992px) {
  .el-carousel__container {
    height: 400px!important;
  }
}

@media (min-width: 1200px) {
  .el-carousel__container {
    height: 600px!important;
  }
}

@media (min-width: 1400px) {
  .el-carousel__container {
    height: 800px!important;
  }
}
</style>
