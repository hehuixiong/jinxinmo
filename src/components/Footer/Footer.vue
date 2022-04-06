<template>
  <footer id="Footer">
    <div class="footer-nav">
      <div class="container">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
            <el-row>
               <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                <h4>
                  <router-link to="/news">最新动态</router-link>
                  <i class="el-icon-caret-right"></i>
                </h4>
                <div class="nav-list">
                  <div class="nav-item">
                    <router-link to="/news?active_menu=1-0">新闻资讯</router-link>
                  </div>
                  <div class="nav-item">
                    <router-link to="/news?active_menu=2-0">金鑫专栏</router-link>
                  </div>
                  <div class="nav-item">
                    <router-link to="/news?active_menu=3-0">行业动态</router-link>
                  </div>
                  <div class="nav-item">
                    <router-link to="/news?active_menu=4-0">应用领域</router-link>
                  </div>
                </div>
              </el-col>
               <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                <h4>
                  <router-link to="/about">关于金鑫</router-link>
                  <i class="el-icon-caret-right"></i>
                </h4>
                <div class="nav-list">
                  <div class="nav-item">
                    <router-link to="/about?active_menu=1-0">金鑫简介</router-link>
                  </div>
                  <div class="nav-item">
                    <router-link to="/about?active_menu=2-0">企业文化</router-link>
                  </div>
                  <div class="nav-item">
                    <router-link to="/about?active_menu=3-0">发展历程</router-link>
                  </div>
                  <div class="nav-item">
                    <router-link to="/about?active_menu=4-0">社会责任</router-link>
                  </div>
                </div>
              </el-col>
               <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <h4>
                  <router-link to="/contact">联系我们</router-link>
                  <i class="el-icon-caret-right"></i>
                </h4>
                <div class="nav-list">
                  <div class="nav-item">
                    <span>地址：深圳市光明区马田街道松柏路5059号启航大厦13楼13C、13D</span>
                  </div>
                  <div class="nav-item">
                    <span>电话：188 2018 1513（王经理）</span>
                  </div>
                  <div class="nav-item">
                    <span>座机：0755-3291 6782</span>
                  </div>
                  <div class="nav-item">
                    <span>座机：0755-2309 6336</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
            <el-row>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <h4>
                  <span>关注金鑫公众号</span>
                </h4>
                <div>
                  <img width="146" src="@/assets/images/jxgzhewm.png" alt="">
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <h4>
                  <span>友情链接</span>
                </h4>
                <div class="nav-list" style="min-height: auto;">
                  <div class="nav-item">
                    <a href="javascript:;" @click="$router.push('/')">金鑫膜结构建筑设计院</a>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
            <span>Copyright  ©2012-{{currentyear}} 深圳金鑫膜结构建筑设计院 &nbsp; 版权所有</span>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
            <span><img src="./images/gongan.png" width="20" height="20" alt="">粤公网安备 44031102000362号 &nbsp; 粤ICP备19023340号-1</span>
          </el-col>
        </el-row>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'TheFooter',
  computed: {
    currentyear () {
      const myDate = new Date()
      const tYear = myDate.getFullYear()
      return tYear
    }
  }
}
</script>
<style lang="scss" scoped>
#Footer{
  .footer-nav{
    background-image: url('./images/footer.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 10px 0px;
    height: 240x;
    h4{
      display: flex;
      align-items: center;
      height: 60px;
      span,
      a{
        color: #ffffff;
        font-size: 18px;
      }
      i{
        margin-left: 4px;
        color: #ffffff;
      }
      &:hover span,
      &:hover a{
        color: $--color-primary;
      }
    }
    .nav-list{
      min-height: 150px;
      .nav-item{
        padding: 8px 20px 8px 0;
        span,
        a{
          color: #ffffff;
        }
        &:hover span,
        &:hover a{
          color: $--color-primary;
        }
      }
    }
  }
  .footer{
    border-top: 1px solid #f0f2f5;
    background: #171717;
    color: #ffffff;
    padding: 20px 0;
    img{
      display: inline-block;
      vertical-align: middle;
      margin-top: -2px;
      margin-right: 2px;
    }
  }
}
</style>
