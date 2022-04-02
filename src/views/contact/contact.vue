<template>
  <div id="Contact">
    <el-card shadow="never" class="mapBox">
      <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map">
        <!-- <el-button class="button" @click="setScreenfull" icon="el-icon-zoom-in" circle></el-button> -->
        <!-- 控件将定位到地图的右上角 -->
        <!-- <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale> -->
        <!-- 平移缩放组件 -->
        <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
        <!-- 缩略图 -->
        <!-- <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map> -->
        <!-- 定位 -->
        <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true" :autoLocation="true"></bm-geolocation> -->
        <!-- <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type> -->
        <!-- 示例位置 -->
        <bm-marker :position="center"></bm-marker>
        <bm-info-window :width="250" :title="infoWindow.contents" :position="center" :show="infoWindow.show"></bm-info-window>
      </baidu-map>
    </el-card>
    <div class="container">
      <el-row class="contact-wrapper">
        <el-col :xs="24" :sm="14" :md="15" :lg="16" :xl="17">
          <div class="contact-we">
            <el-card class="box-card">
              <div class="cw-title">
                <h2 class="title">联系我们</h2>
              </div>
              <div class="cw-form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                  <el-row>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                      <el-form-item label="姓名" prop="name">
                        <el-input size="small" placeholder="姓名（必填）" v-model="ruleForm.name"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                      <el-form-item label="手机号码" prop="mobile">
                        <el-input size="small" placeholder="手机号码（必填）" v-model="ruleForm.mobile"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                      <el-form-item label="邮箱">
                        <el-input size="small" placeholder="邮箱" v-model="ruleForm.email"></el-input>
                      </el-form-item>
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                      <el-form-item label="设计领域">
                        <el-input size="small" placeholder="设计领域" v-model="ruleForm.domain"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24">
                      <el-form-item label="内容" prop="desc">
                        <el-input size="small" rows="8" resize="none" placeholder="请在此输入留言内容，我们会尽快与您联系。（必填）" type="textarea" v-model="ruleForm.desc"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24">
                      <el-form-item>
                        <el-button size="small" type="primary" @click="submitForm('ruleForm')">立即联系</el-button>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :xs="24" :sm="10" :md="9" :lg="8" :xl="7">
          <div class="contact-other">
            <el-card class="box-card">
              <div class="co-title">
                <h2 class="title">其他联系方式</h2>
              </div>
              <div class="co-content">
                <p><i class="iconfont icon-dingwei"></i> 公司地址</p>
                <p>深圳市光明区马田街道松柏路 5059号启航大厦13楼13C、13D</p>
                <p><i class="iconfont icon-youxiang"></i> 邮箱：2359025166@qq.com</p>
                <p><i class="iconfont icon-rexian"></i> 业务热线：18820181513</p>
                <p><i class="iconfont icon-zuoji"></i> 座机：0755-32916782</p>
                <p><i class="iconfont icon-gongzhonghao"></i> 关注金鑫公众号</p>
                <p>
                  <img src="@/assets/images/jxgzhewm.png" alt="">
                </p>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { isvalidMobile } from '@/utils/validate.js'
import screenfull from 'screenfull'
import BaiduMap from 'vue-baidu-map'
import Vue from 'vue'

Vue.use(BaiduMap, {
  ak: 'F5Bl0fr3p5chVmb2VgjP87PxFjj8Iwlf'
})
export default {
  name: 'ContactPage',
  data () {
    const validMobile = (rule, value, callback) => {
      if (!value) {
        callback(new Error('手机号码不能为空'))
      } else if (!isvalidMobile(value)) {
        callback(new Error('请输入正确的手机号码'))
      } else {
        callback()
      }
    }
    return {
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 3,
      infoWindow: {
        show: true,
        contents: `
          <div>
            <div style="font-weight: 900;color: red;font-size: 15px;">深圳市金鑫空间膜结构建筑设计院</div>
            <div>地址：深圳市光明区马田街道松柏路<br />5059号启航大厦13楼13C、13D</div>
            <div>邮箱：2359025166@qq.com</div>
            <div>电话：18820181513</div>
            <div>座机：0755-32916782</div>
          </div>
        `
      },
      ruleForm: {},
      rules: {
        name: [
          { required: true, message: '姓名不可为空', trigger: ['blur', 'change'] }
        ],
        desc: [
          { required: true, message: '留言内容不可为空', trigger: ['blur', 'change'] }
        ],
        mobile: [
          { required: true, validator: validMobile, trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    setScreenfull () {
      const element = document.querySelector('.map')
      if (!screenfull.isEnabled) {
        // 如果不允许进入全屏，发出不允许提示
        this.$message({
          message: '暂不不支持全屏',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle(element)
    },
    // 百度地图
    handler ({ BMap, map }) {
      // map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      this.pt = new BMap.Point(113.887372, 22.787335)
      // 中心点
      this.center.lng = 113.887372
      this.center.lat = 22.787335
      this.zoom = 16
    }
  }
}
</script>
<style lang="scss" scoped>
#Contact{
  overflow: hidden;
  .banner{
    width: 100%;
  }
  ::v-deep .el-card__body{
    padding: 0!important;
  }
  .mapBox {
    line-height: 650px;
    .map {
      opacity: 0.9;
      height: 650px;
    }
    .button {
      z-index: 2;
      position: absolute;
      top: 30%;
      left: 88%;
    }
  }
  .contact-wrapper{
    margin: 0 -15px;
    padding: 50px 0;
  }
  .box-card{
    padding: 20px;
  }
  .title{
    color: $--color-primary;
    font-size: 22px;
    position: relative;
    &::before{
      position: absolute;
      content: '';
      bottom: -6px;
      left: 0;
      border-bottom: 3px solid $--color-primary;
      width: 40px;
    }
  }
  .contact-we{
    margin: 0 15px 20px;
    .cw-form{
      margin-top: 30px;
      .el-row{
        margin: 0 -5px;
        .el-col{
          padding: 0 5px;
        }
      }
    }
  }
  .contact-other{
    margin: 0 15px;
    .co-content{
      margin-top: 25px;
      p{
        color: #000000;
        font-size: 18px;
        font-weight: 500;
        margin-top: 18px;
        .iconfont{
          font-size: 20px;
        }
        img{
          width: 160px;
        }
      }
    }
  }
  @media screen and (max-width:576px) {
    .mapBox {
      line-height: 420px!important;
    }
    .map{
      height: 420px!important;
    }
  }
}
</style>
