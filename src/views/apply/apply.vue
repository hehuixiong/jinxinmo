<template>
  <div id="Apply">
    <img class="banner-image" src="@/assets/images/banner.png" alt="">
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
}
</style>
