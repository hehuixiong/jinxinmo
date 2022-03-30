<template>
  <header id="Header" :class="{fixed}">
    <div class="header-bg">
      <div class="wrap">
        <div class="header-logo">
          <img @click="$router.push('/')" src="@/assets/images/logo.png" alt="">
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
  </header>
</template>
<script>
export default {
  name: 'TheHeader',
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
      this.fixed = scrollTop > 110
    }
  }
}
</script>
<style lang="scss" scoped>
#Header{
  position: relative;
  z-index: 99999;
  .header-bg{
    position: fixed;
    left: 0;
    top: 0;
    right: 0px;
    width: 100%;
    height: 100px;
    z-index: 99999;
    transition: 0.3s ease-out;
    background: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    .wrap{
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
  &.fixed .header-bg{
    background: #ffffff;
    border-bottom: 1px solid #f1f1f1;
    height: 60px!important;
    .header-logo{
      img{
        transform: scale(0.6);
      }
    }
  }
  .header-logo{
    width: 400px;
    position: relative;
    z-index: 0;
    img{
      width: 90px;
      height: 90px;
      cursor: pointer;
      transition: 0.3s ease-out;
    }
  }
  .header-nav{
    ul{
      display: flex;
      li{
        margin-right: 40px;
        a{
          color: #184369;
          display: inline-block;
          position: relative;
          font-size: 16px;
          &::before{
            position: absolute;
            content: '/';
            right: -20px;
            top: 0;
            color: #184369;
          }
        }
        .router-link-exact-active,
        a:hover{
          color: $--color-primary;
        }
        &:last-child{
          a::before{
            display: none;
          }
        }
      }
    }
  }
}
</style>
