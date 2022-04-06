<template>
  <header id="Header" :class="{fixed}">
    <div class="header-bg hidden-sm-and-down">
      <div class="container">
        <el-row>
          <el-col :xs="24" :sm="12" :md="4" :lg="6" :xl="8">
            <div class="header-logo">
              <img @click="$router.push('/')" src="@/assets/images/logo.png" alt="">
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="20" :lg="18" :xl="16">
            <div class="header-nav">
              <div class="item" :class="{'active': item.path === parentPath}" v-for="(item, index) in nav" :key="index">
                <router-link :to="item.path">{{item.name}}</router-link>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="header-menu hidden-md-and-up">
      <div class="header-placeholder"></div>
      <div class="header-wrapper">
        <div class="logo">
          <img @click="$router.push('/')" src="@/assets/images/logo.png" alt="">
        </div>
        <div class="menu" :class="{ 'menu-closeable': drawer }" @click="drawer = !drawer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <el-drawer
      :visible.sync="drawer"
      direction="ttb"
      :before-close="close"
      :show-close="false"
      :with-header="false"
      custom-class="drawer-wrapper hidden-md-and-up"
      :modal="false"
    >
      <div class="drawer-nav">
        <div class="item" @click="close" :class="{'active': item.path === parentPath}" v-for="(item, index) in nav" :key="index">
          <router-link :to="item.path"> <span>{{item.name}}</span> <i class="el-icon-arrow-right"></i></router-link>
        </div>
      </div>
    </el-drawer>
  </header>
</template>
<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      fixed: false,
      drawer: false,
      nav: [
        { name: '首页', path: '/' },
        { name: '应用领域', path: '/apply' },
        { name: '服务能力', path: '/serves' },
        { name: '解决方案', path: '/solution' },
        { name: '膜材介绍', path: '/introduce' },
        { name: '新闻中心', path: '/news' },
        { name: '关于金鑫', path: '/about' },
        { name: '联系我们', path: '/contact' }
      ]
    }
  },
  computed: {
    parentPath ({ $route }) {
      return $route.meta.parentPath
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
    },
    close () {
      this.drawer = false
    }
  }
}
</script>
<style lang="scss" scoped>
$menu-size: 22px;
$menu-stroke: 2px;
$menu-stroke-color: #000000;
$menu-animation-duration: .3s;
#Header{
  position: relative;
  z-index: 99999;
  .header-bg{
    position: fixed;
    left: 0;
    top: 0;
    right: 0px;
    width: 100%;
    z-index: 99999;
    transition: 0.3s ease-out;
    background: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    height: 100px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
  &.fixed .header-bg{
    background: #ffffff;
    height: 60px!important;
    .header-logo{
      width: 60px!important;
      height: 60px!important;
    }
    .header-nav{
      height: 60px!important;
    }
  }
  .header-logo{
    position: relative;
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: 0.3s ease-out;
    img{
      width: calc(100% - 8px);
      height: calc(100% - 8px);
    }
  }
  .header-nav{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100px;
    .item{
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
          font-weight: 500;
        }
      }
      &:last-child{
        margin-right: 0;
      }
      &.active a,
      .router-link-exact-active,
      a:hover{
        color: $--color-primary;
        font-weight: bold;
      }
      &:last-child{
        a::before{
          display: none;
        }
      }
    }
  }
  .header-menu{
    width: 100%;
    .header-placeholder{
      padding-top: 70px;
    }
    .header-wrapper{
      background: #fff;
      height: 70px;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 999999;
      padding: 0 20px;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    img{
      width: 62px;
      height: 62px;
    }
    .logo{
      cursor: pointer;
    }
    .menu{
      display: inline-flex;
      flex-direction: column;
      justify-content: space-around;
      height: $menu-size;
      cursor: pointer;
      span {
        width: $menu-size;
        height: $menu-stroke;
        display: block;
        transition-property: opacity transform top;
        transition-duration: $menu-animation-duration;
        background-color: $menu-stroke-color;
      }
      span:nth-child(2){
        transition-duration: .1s;
      }
    }
    .menu-closeable {
      position: relative;
      span:nth-child(1) {
        position: absolute;
        transform: rotateZ(45deg);
        top: $menu-size / 2;
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        position: absolute;
        transform: rotateZ(-45deg);
        top: $menu-size / 2;
      }
    }
  }
}
.drawer-nav{
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  .item{
    line-height: 46px;
    padding-left: 20px;
    padding-right: 20px;
    a{
      color: #333333;
      display: flex;
      width: 100%;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      &::before{
        position: absolute;
        content: '';
        border-bottom: 0.8px solid #eee;
        width: 100%;
        bottom: 0;
        left: 0;
      }
      i{
        font-size: 18px;
      }
    }
    &.active a,
    .router-link-exact-active,
    a:hover{
      color: $--color-primary;
    }
  }
}
</style>
<style>
.drawer-wrapper {
  height: auto!important;
}
</style>
