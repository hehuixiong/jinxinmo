<template>
  <footer id="Footer">
    <div class="footer-nav">
      <div class="container">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="14" :xl="14">
            <el-row>
               <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                <h4>
                  <a href="javascript;">最新动态</a>
                  <i class="el-icon-caret-right"></i>
                </h4>
                <div class="nav-list">
                  <div class="nav-item">
                    <a href="#">金鑫专栏</a>
                  </div>
                  <div class="nav-item">
                    <a href="#">行业动态</a>
                  </div>
                  <div class="nav-item">
                    <a href="#">应用领域</a>
                  </div>
                </div>
              </el-col>
               <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                <h4>
                  <a href="javascript;">最新动态</a>
                  <i class="el-icon-caret-right"></i>
                </h4>
                <div class="nav-list">
                  <div class="nav-item">
                    <a href="#">新闻资讯</a>
                  </div>
                  <div class="nav-item">
                    <a href="#">金鑫专栏</a>
                  </div>
                </div>
              </el-col>
               <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                <h4>
                  <a href="javascript;">最新动态</a>
                  <i class="el-icon-caret-right"></i>
                </h4>
                <div class="nav-list">
                  <div class="nav-item">
                    <a href="#">新闻资讯</a>
                  </div>
                  <div class="nav-item">
                    <a href="#">金鑫专栏</a>
                  </div>
                  <div class="nav-item">
                    <a href="#">行业动态</a>
                  </div>
                  <div class="nav-item">
                    <a href="#">应用领域</a>
                  </div>
                </div>
              </el-col>
               <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                <h4>
                  <a href="javascript;">最新动态</a>
                  <i class="el-icon-caret-right"></i>
                </h4>
                <div class="nav-list">
                  <div class="nav-item">
                    <a href="#">新闻资讯</a>
                  </div>
                  <div class="nav-item">
                    <a href="#">金鑫专栏</a>
                  </div>
                  <div class="nav-item">
                    <a href="#">行业动态</a>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
            <el-row>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <h4>
                  <a href="javascript;">关注金鑫公众号</a>
                  <i class="el-icon-caret-right"></i>
                </h4>
                <div>
                  <img width="146" src="./images/ewm.png" alt="">
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                <h4>
                  <a href="javascript;">友情链接</a>
                  <i class="el-icon-caret-right"></i>
                </h4>
                <div class="nav-list">
                  <div class="nav-item">
                    <a href="#">金鑫膜结构建筑设计院</a>
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
    padding: 10px 0px;
    height: 240x;
    h4{
      display: flex;
      align-items: center;
      height: 60px;
      a{
        color: #ffffff;
        font-size: 18px;
      }
      i{
        margin-left: 4px;
        color: #ffffff;
      }
      &:hover a{
        color: $--color-primary;
      }
    }
    .nav-list{
      min-height: 150px;
      .nav-item{
        line-height: 38px;
        a{
          color: #ffffff;
        }
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
