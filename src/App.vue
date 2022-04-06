<template>
  <div id="app">

    <!-- 头部 -->
    <TheHeader></TheHeader>

    <!-- 内容 -->
    <router-view></router-view>

    <!-- 尾部 -->
    <TheFooter></TheFooter>

    <!-- 在线咨询 -->
    <NewBridge></NewBridge>

    <el-backtop></el-backtop>
  </div>
</template>

<script>
import TheHeader from '@/components/Header/Header'
import TheFooter from '@/components/Footer/Footer'
import NewBridge from '@/components/NewBridge/NewBridge'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    NewBridge
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  overflow: hidden;
}
@media screen and (max-width:576px) {
  .el-backtop{ right: 20px!important; }
}
</style>
