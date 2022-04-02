<template>
  <div id="Breadcrumb">
    <span class="position"><span class="el-icon-location-information"></span>您所在的位置：</span>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{currenPosition}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: 'BreadcrumbCom',
  computed: {
    currenPosition ({ $route }) {
      return $route.meta.title
    }
  }
}
</script>
<style lang="scss" scoped>
#Breadcrumb{
  padding: 24px 0;
  display: flex;
  align-items: center;
  .position{
    display: flex;
    align-items: center;
    color: #999999;
    .el-icon-location-information{
      font-size: 18px;
      margin-right: 2px;
    }
  }
}
</style>
