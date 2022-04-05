<template>
  <div id="Serves">
    <img class="banner-image" src="@/assets/images/banner.png" alt="">
    <MenuLayout
      title="服务能力"
      desc="server"
      :menu="menu"
      @menu-click="handlerClick"
    >
      <template slot="content">
        <div class="solution-container" style="height: 1000px;">服务能力</div>
      </template>
    </MenuLayout>
  </div>
</template>
<script>
import MenuLayout from '@/components/MenuLayout/MenuLayout'
export default {
  name: 'ServesPage',
  components: {
    MenuLayout
  },
  data () {
    return {
      menu: [
        {
          label: '工程设计',
          sub: [
            { label: '方案设计' },
            { label: '结构设计与计算' },
            { label: '节点受力分析' },
            { label: '审核设计与施工图' },
            { label: '膜裁剪分析' },
            { label: '风洞模拟' }
          ]
        },
        {
          label: '制作加工',
          sub: [
            { label: '测试工程' }
          ]
        },
        { label: '施工安装' },
        { label: '服务流程' }
      ],
      activeMenu: '1-1'
    }
  },
  methods: {
    handlerClick (activeMenu) {
      this.activeMenu = activeMenu
    }
  }
}
</script>
<style lang="scss" scoped>
#Serves{
}
</style>
