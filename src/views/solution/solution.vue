<template>
  <div id="Solution">
    <img class="banner-image" src="@/assets/images/banner.png">
    <MenuLayout
      title="解决方案"
      desc="solution"
      :menu="menu"
      @menu-click="handlerClick"
      :activeMenu.sync="activeMenu"
    >
      <template slot="content">
        <div class="solution-container">
          <p>开发中...</p>
        </div>
      </template>
    </MenuLayout>
  </div>
</template>
<script>

import MenuLayout from '@/components/MenuLayout/MenuLayout'
export default {
  name: 'SolutionPage',
  components: {
    MenuLayout
  },
  data () {
    return {
      menu: [
        {
          label: '气膜设施',
          sub: [
            { label: '环保设施' },
            { label: '仓库设施' },
            { label: '体育设施' },
            { label: '交通设施' },
            { label: '展览馆' },
            { label: '商业设施' }
          ]
        },
        {
          label: '张拉膜结构',
          sub: [
            { label: '体育设施' },
            { label: '交通设施' },
            { label: '景观设施' },
            { label: '遮阳设施' },
            { label: '商业设施' }
          ]
        },
        {
          label: '案例赏析',
          sub: [
            { label: '金鑫精品工程' },
            { label: '世界著名建筑' }
          ]
        }
      ],
      activeMenu: '1-0'
    }
  },
  methods: {
    handlerClick () {
    }
  }
}
</script>
<style lang="scss" scoped>
#Solution{
  .solution-container{
  }
}
</style>
