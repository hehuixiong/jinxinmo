<template>
  <div id="Home">
    <TheBanner ref="banner"></TheBanner>
    <div class="container">
      <TheNotice></TheNotice>
      <TheNews></TheNews>
      <TheApply></TheApply>
    </div>
  </div>
</template>
<script>
import TheBanner from './components/TheBanner'
import TheApply from './components/TheApply'
import TheNotice from './components/TheNotice'
import TheNews from './components/TheNews'
export default {
  name: 'HomePage',
  components: {
    TheBanner,
    TheApply,
    TheNotice,
    TheNews
  }
}
</script>
<style>
#Home{
}
</style>
