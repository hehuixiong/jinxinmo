<template>
  <div id="Banner">
    <el-carousel :interval="3000" arrow="always" height="920px">
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
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
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
#Banner{
  img{
    height: 100%;
  }
}
</style>
