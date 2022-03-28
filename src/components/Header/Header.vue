<template>
  <div id="Header">
    <div class="header-bg">
      <div class="wrap">
        <div class="header-logo" @click="$router.push('/')">
          <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="header-nav">
          <ul>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/apply">应用领域</router-link>
            </li>
            <li>
              <router-link to="/serves">服务能力</router-link>
            </li>
            <li>
              <router-link to="/solution">解决方案</router-link>
            </li>
            <li>
              <router-link to="/introduce">膜材介绍</router-link>
            </li>
            <li>
              <router-link to="/news">新闻中心</router-link>
            </li>
            <li>
              <router-link to="/about">关于金鑫</router-link>
            </li>
            <li>
              <router-link to="/contact">联系我们</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheHeader'
}
</script>
<style lang="less" scoped>
#Header{
  position: relative;
  .header-bg{
    position: absolute;
    left: 0;
    top: 0;
    right: 0px;
    width: 100%;
    height: 100px;
    padding-bottom: 11px;
    z-index: 9999999;
    background: url(./images/bg-header.png) repeat-x left bottom;
    background: rgba(0, 0, 0, 0.6);
    .wrap{
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
  .header-logo{
    cursor: pointer;
    width: 88px;
    height: 88px;
    margin-top: 10px;
    img{
      width: 88px;
      height: 88px;
    }
  }
  .header-nav{
    margin-left: 230px;
    ul{
      margin-top: 30px;
      display: flex;
      li{
        margin-right: 40px;
        a{
          color: #ffffff;
          padding: 20px 0;
          display: inline-block;
        }
        a:hover{
          color: #d1b02c;
        }
      }
    }
  }
}
</style>
