<template>
  <div id="Home">
    <TheBanner ref="banner"></TheBanner>
    <div class="wrap">
      <TheNotice></TheNotice>
      <TheNews></TheNews>
      <TheSolution></TheSolution>
    </div>
  </div>
</template>
<script>
import TheBanner from './components/TheBanner'
import TheSolution from './components/TheSolution'
import TheNotice from './components/TheNotice'
import TheNews from './components/TheNews'
export default {
  name: 'HomePage',
  components: {
    TheBanner,
    TheSolution,
    TheNotice,
    TheNews
  }
}
</script>
<style>
#Home{
}
</style>
