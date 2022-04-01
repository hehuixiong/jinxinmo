<template>
  <div id="Contact">
    <img src="@/assets/images/banner.png" alt="">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card shadow="never" class="mapBox">
          <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map">
            <!-- <el-button class="button" @click="setScreenfull" icon="el-icon-zoom-in" circle></el-button> -->
            <!-- 控件将定位到地图的右上角 -->
            <!-- <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale> -->
            <!-- 平移缩放组件 -->
            <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> -->
            <!-- 缩略图 -->
            <!-- <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map> -->
            <!-- 定位 -->
            <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true" :autoLocation="true"></bm-geolocation> -->
            <!-- <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type> -->
            <!-- 示例位置 -->
            <bm-marker :position="center"></bm-marker>
            <bm-info-window :width="260" :title="infoWindow.contents" :position="center" :show="infoWindow.show"></bm-info-window>
          </baidu-map>
        </el-card>
      </el-col>
    </el-row>
    <div class="container">
    </div>
  </div>
</template>
<script>
import screenfull from 'screenfull'
import BaiduMap from 'vue-baidu-map'
import Vue from 'vue'
Vue.use(BaiduMap, {
  ak: 'F5Bl0fr3p5chVmb2VgjP87PxFjj8Iwlf'
})
export default {
  name: 'ContactPage',
  data () {
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
            <div>邮箱：2359025166@qq。com</div>
            <div>电话：18820181513</div>
            <div>座机：0755-32916782</div>
          </div>
        `
      }
    }
  },
  methods: {
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
    handler ({
      BMap,
      map
    }) {
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
  .container{
    margin: 20px 0;
  }
  img{
    width: 100%;
  }
  ::v-deep .el-card__body{
    padding: 0!important;
  }
  .mapBox {
    line-height: 550px;
  }
  .map {
    opacity: 0.9;
    height: 550px;
  }
  .button {
    z-index: 2;
    position: absolute;
    top: 30%;
    left: 88%;
  }
}
@media screen and (max-width:576px) {
  .mapBox {
    line-height: 400px!important;
  }
  .map{
    height: 400px!important;
  }
}
</style>
