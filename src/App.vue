<template>
  <div id="app">

    <!-- 头部 -->
    <TheHeader></TheHeader>

    <!-- 内容 -->
    <router-view></router-view>

    <!-- 尾部 -->
    <TheFooter></TheFooter>

    <el-backtop></el-backtop>
  </div>
</template>

<script>
import TheHeader from '@/components/Header/Header'
import TheFooter from '@/components/Footer/Footer'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
