<template>
  <div id="Tabs">
    <div class="tabs-title">
      <span class="ch">{{title}}</span><span class="en" v-if="desc"> / {{desc}}</span>
    </div>
    <ul>
      <li v-for="(tab, index) in tabs" :key="index" :class="{active: active === index}" @click="toggle(index)">
        <a href="javascript:;">{{tab.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TabsCom',
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    active: {
      type: [Number, String]
    },
    title: {
      type: String
    },
    desc: {
      type: String
    }
  },
  mounted () {
    this.$route.query.active && this.$emit('update:active', +this.$route.query.active)
  },
  methods: {
    toggle (active) {
      this.$emit('update:active', active)
      this.$emit('toggle')
    }
  }
}
</script>
<style lang="scss" scoped>
#Tabs{
  .tabs-title{
    background: $--color-primary;
    height: 46px;
    line-height: 46px;
    padding: 0 20px;
    color: #ffffff;
    .ch{
      font-weight: bold;
      font-size: 20px;
    }
    .en{
      font-size: 16px;
    }
  }
  ul{
    display: flex;
    flex-direction: column;
    li{
      line-height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: -webkit-linear-gradient(top,#ffffff 0%,#f5f5f5 72%,#edecec 100%);
      cursor: pointer;
      padding: 0 20px;
      a{
        font-size: 15px;
        color: #3d3c3c;
      }
      &.active a,
      &:hover a{
        color: $--color-primary;
        font-weight: bold;
      }
    }
  }
}
</style>
