<template>
  <div id="News">
    <img class="banner" src="@/assets/images/banner.png" alt="">
    <div class="container">
      <div class="news-tabs">
        <ul>
          <li>
            <a href="#">新闻咨询</a>
          </li>
          <li>
            <a href="#">金鑫专栏</a>
          </li>
          <li>
            <a href="#">行业动态</a>
          </li>
          <li>
            <a href="#">应用领域</a>
          </li>
        </ul>
      </div>
      <div class="news-content">
        <el-row>
          <el-col :xs="24" :sm="15" :md="16" :lg="18" :xl="18">
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
          </el-col>
          <el-col :xs="24" :sm="9" :md="8" :lg="6" :xl="6">
            <div class="nc-news-recommend">
              <el-card class="box-card">
                <div class="nc-nr-title">为你推荐</div>
                <ul>
                  <li v-for="item in 6" :key="item">
                    <router-link to="/news-details">环保部：14省市将在今年底前完成生态红线划定</router-link>
                  </li>
                </ul>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewsPage'
}
</script>
<style lang="scss" scoped>
#News{
  .banner{
    width: 100%;
  }
  .news-tabs{
    padding: 20px 0;
    display: flex;
    justify-content: center;
    ul{
      display: flex;
      li{
        margin: 0 10px;
      }
    }
  }
  .news-content{
    margin: 0 -15px;
    .nc-news-list{
      margin: 0 15px;
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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
    .nc-news-recommend{
      margin: 0 15px;
      .box-card{
        .nc-nr-title{
          font-size: 18px;
        }
        ul{
          li{
            padding: 10px 15px;
            border-bottom: 1px solid #eee;
            &:last-child{
              border: none;
              padding-bottom: 0;
            }
            a{
              font-size: 14px;
              color: #666666;
              &:hover{
                color: $--color-primary;
              }
            }
          }
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
