<template>
  <div id="FixedTopHeader" v-if="fixed">
    <scroll-fixed-header :fixed.sync="fixed">
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
    </scroll-fixed-header>
  </div>
</template>
<script>
export default {
  name: 'FixedTopHeader',
  data () {
    return {
      fixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll)
  },
  methods: {
    scroll () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0
      this.fixed = scrollTop > 200
    }
  }
}
</script>
<style lang="less" scoped>
#FixedTopHeader{
  position: relative;
  .header-bg{
    position: absolute;
    left: 0;
    top: 0;
    right: 0px;
    width: 100%;
    height: 60;
    z-index: 9999999;
    background: #fff;
    border-bottom: 1px solid #ddd;
    .wrap{
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
  .header-logo{
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-top: 10px;
    img{
      width: 50px;
      height: 50px;
    }
  }
  .header-nav{
    margin-left: 268px;
    ul{
      display: flex;
      li{
        margin-right: 40px;
        a{
          color: #333333;
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
