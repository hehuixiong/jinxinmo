<template>
  <div id="Apply">
    <img src="@/assets/images/banner.png" alt="">
    <div class="container">
      <TheApply :showMore="false"></TheApply>
    </div>
  </div>
</template>
<script>
import TheApply from '@/components/TheApply/TheApply'
export default {
  name: 'ApplyPage',
  components: {
    TheApply
  }
}
</script>
<style lang="scss" scoped>
#Apply{
  overflow: hidden;
  img{
    width: 100%;
  }
}
</style>
