<template>
  <div id="MenuLayout">
    <div class="container">
      <div id="Breadcrumb">
        <Breadcrumb></Breadcrumb>
      </div>
      <el-row>
        <el-col :xs="24" :sm="15" :md="16" :lg="18" :xl="18" style="float: right;">
          <div class="menu-layout-wrapper">
            <div class="menu-layout-wrapper__title" v-if="hideVesselTitle">
              <h1>{{title}}</h1>
            </div>
            <slot name="content"></slot>
          </div>
        </el-col>
        <el-col :xs="24" :sm="9" :md="8" :lg="6" :xl="6" style="float: left;">
          <div class="menu-layout-vertical">
            <div class="menu-layout-vertical__title">
              <span class="menu-layout-vertical__title-ch">{{title}}</span><span class="menu-layout-vertical__title-en" v-if="desc"> / {{desc}}</span>
            </div>
            <ul>
              <li
                v-for="(item, index) in menu"
                :key="index" :class="{'is-active': menuIndex === index}"
                @click="menuClick(item.sub, index, 0, 'mainMenu')"
              >
                <div class="menu-layout-item">
                  <a href="javascript:;">{{item.label}}</a>
                  <template v-if="item.sub && item.sub.length">
                    <i class="el-icon-arrow-right" v-if="!tempMenu[index].switch"></i>
                    <i class="el-icon-arrow-down" v-else></i>
                  </template>
                </div>
                <template v-if="tempMenu[index].sub && tempMenu[index].sub.length && tempMenu[index].switch">
                  <ul>
                    <li class="sub-item"
                      :class="{'is-active': subIndex === sIndex}"
                      v-for="(sub, sIndex) in tempMenu[index].sub"
                      :key="sIndex"
                      @click.stop="menuClick(null, index, sIndex)"
                    >
                      <span>{{sub.label}}</span>
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </div>
          <div class="menu-layout-hotline" v-if="false">
            <p>全国免费热线</p>
            <p>0755-32916782</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { _deepClone } from '@/utils/index'
const DEFAULT_INDEX = 0
const NULL_INDEX = null
export default {
  name: 'MenuLayout',
  components: {
    Breadcrumb
  },
  props: {
    hideVesselTitle: {
      type: Boolean,
      default: true
    },
    menu: {
      type: Array,
      default: () => []
    },
    title: {
      type: String
    },
    desc: {
      type: String
    }
  },
  data () {
    return {
      tempMenu: _deepClone(this.menu.map(item => item.label)),
      menuIndex: DEFAULT_INDEX,
      subIndex: NULL_INDEX
    }
  },
  watch: {
    menu: {
      handler: function (newMenu) {
        if (newMenu[DEFAULT_INDEX].sub && newMenu[DEFAULT_INDEX].sub.length) {
          this.$set(this.tempMenu, DEFAULT_INDEX, { sub: newMenu[DEFAULT_INDEX].sub, switch: true })
          this.subIndex = DEFAULT_INDEX
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    menuClick (sub, index, sunIndex, type) {
      this.menuIndex = index
      this.subIndex = sunIndex
      const isSub = sub && sub.length > 0
      if (type === 'mainMenu') {
        if (isSub) {
          this.tempMenu = this.tempMenu.map(item => Object.assign(item, { switch: false }))
          this.$set(this.tempMenu, index, { sub, switch: !this.tempMenu[index].switch })
        } else {
          this.tempMenu = this.tempMenu.map(item => Object.assign(item, { switch: false }))
        }
      }
      document.getElementById('Breadcrumb').scrollIntoView()
      const currentMenuRender = !isSub && type === 'mainMenu' ? (`${++index}-0`).toString() : (`${++index}-${++sunIndex}`).toString()
      this.$emit('menu-click', currentMenuRender)
      this.$emit('update:activeMenu', currentMenuRender)
      console.log('当前菜单：', currentMenuRender)
    }
  }
}
</script>
<style lang="scss" scoped>
#MenuLayout{
  .el-row{
    margin: 0 -15px;
  }
  .menu-layout-hotline{
    margin: 0 15px 15px;
    background: $--color-primary;
    padding: 20px;
    p{
      color: #fff;
      &:nth-child(1){
        font-size: 18px;
      }
      &:nth-child(2){
        font-size: 24px;
      }
    }
  }
  .menu-layout-vertical{
    margin: 0 15px 15px;
    .menu-layout-vertical__title{
      background: $--color-primary;
      height: 46px;
      line-height: 46px;
      padding: 0 20px;
      color: #ffffff;
      .menu-layout-vertical__title-ch{
        font-weight: bold;
        font-size: 20px;
      }
      .menu-layout-vertical__title-en{
        font-size: 16px;
      }
    }
    ul{
      display: flex;
      flex-direction: column;
      li{
        .menu-layout-item{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: -webkit-linear-gradient(top,#ffffff 0%,#f5f5f5 72%,#edecec 100%);
          cursor: pointer;
          padding: 0 20px;
          line-height: 44px;
        }
        a{
          font-size: 15px;
          color: #3d3c3c;
        }
        &.is-active a,
        &:hover a{
          color: $--color-primary;
          font-weight: bold;
        }
        .sub-item{
          display: flex;
          align-items: center;
          line-height: 40px;
          font-size: 14px;
          padding: 0 30px;
          border-bottom: 1px solid #ededed;
          cursor: pointer;
          color: #3d3c3c;
          &.is-active,
          &:hover{
            color: $--color-primary;
            font-weight: bold;
          }
        }
      }
    }
  }
  .menu-layout-wrapper{
    margin: 0 15px;
    .menu-layout-wrapper__title{
      border-bottom: 3px solid #333333;
      margin-bottom: 30px;
      h1{
        padding-bottom: 17px;
        font-size: 25px;
        line-height: 25px;
        color: #333333;
      }
    }
  }
}
</style>
