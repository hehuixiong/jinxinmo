<template>
  <div id="News">
    <img class="banner-image" src="@/assets/images/banner.png" alt="">
    <MenuLayout
      :hide-vessel-title="false"
      title="新闻中心"
      desc="news"
      :menu="menu"
      @menu-click="handlerClick"
      :activeMenu.sync="activeMenu"
    >
      <template slot="content">
        <div class="news-container">
          <div class="nc-news-list">
            <el-card class="box-card" v-for="item in 20" :key="item">
              <el-row>
                <el-col :xs="24" :sm="6" :md="6" :lg="4" :xl="4">
                  <div class="nc-nl-image" @click="$router.push('/news-details')">
                    <img src="./20220402155441.png" alt="">
                  </div>
                </el-col>
                <el-col :xs="24" :sm="18" :md="18" :lg="20" :xl="20">
                  <div class="nc-nl-container">
                    <div class="nc-nl-container__title">
                      <router-link to="/news-details">环保部：14省市将在今年底前完成生态红线划定</router-link>
                    </div>
                    <div class="nc-nl-container__desc">
                      昨天(18日)，环保部联合国家发改委、林业局、气象局、海洋局、测绘地理信息局等部门联合举行视频会议，部署生态保护红线的划定工作。生态保护红线是指为维护国家或区域生态安全和可持续发展，而划定的需要实施特殊保护的区域，是国家生态安全的底线和生命线。根据计划，全国生态保护红线划定工作将分步进行。今明两年，按照《生态保护红线划定指南》指导各地进行生态保护红线划定。其中京津冀和长江经济带14个省(市)将在今
                    </div>
                    <div class="nc-nl-container__time">
                      2019-03-08
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </div>
          <div class="pages">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="30"
              :pager-count="5"
            >
            </el-pagination>
          </div>
        </div>
      </template>
    </MenuLayout>
  </div>
</template>
<script>
import MenuLayout from '@/components/MenuLayout/MenuLayout'
export default {
  name: 'NewsPage',
  components: {
    MenuLayout
  },
  data () {
    return {
      activeMenu: '1-1',
      menu: [
        { label: '新闻资讯' },
        { label: '金鑫专栏' },
        { label: '行业动态' },
        { label: '应用领域' }
      ]
    }
  },
  methods: {
    handlerClick () {
    }
  }
}
</script>
<style lang="scss" scoped>
#News{
  .nc-news-list{
    .box-card{
      margin-bottom: 20px;
      &:last-child{
        margin-bottom: 0;
      }
      .nc-nl-image{
        margin-bottom: 10px;
        cursor: pointer;
        img{
          max-width: 150px;
          width: 100%;
          margin: 0 auto;
        }
      }
      .nc-nl-container{
        padding-left: 20px;
        .nc-nl-container__title{
          @include ell();
          a{
            font-size: 22px;
            color: #333333;
            &:hover{
              text-decoration: underline;
              color: $--color-primary;
            }
          }
        }
        .nc-nl-container__desc{
          font-size: 16px;
          color: #666666;
          margin-top: 6px;
          @include ell(5);
          margin-bottom: 4px;
        }
        .nc-nl-container__time{
          font-size: 16px;
          color: #a3afb7;
        }
      }
    }
  }
  @media screen and (max-width:767px) {
    .nc-nl-container__title a{
      font-size: 18px!important;
    }
    .nc-nl-container__desc,
    .nc-nl-container__time{
      font-size: 14px!important;
    }
    .nc-nl-container{
      padding-left: 0!important;
    }
  }
}
</style>
