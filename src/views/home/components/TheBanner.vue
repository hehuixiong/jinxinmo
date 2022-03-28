<template>
  <div id="Banner">
    <el-carousel :interval="3000" arrow="always" height="920px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../images/banner.png" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'TheBanner',
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
#Banner{
  img{
    height: 100%;
  }
}
</style>
