<template>
  <footer id="Footer">
    <div class="footer-nav">
      <div class="wrap">
        <div class="navs-box">
          <div class="list">
            <h4>
              <a href="javascript;">最新动态</a>
              <i class="el-icon-caret-right"></i>
            </h4>
            <ul>
              <li>
                <a href="javascript;">新闻资讯</a>
              </li>
              <li>
                <a href="javascript;">金鑫专栏</a>
              </li>
              <li>
                <a href="javascript;">行业动态</a>
              </li>
              <li>
                <a href="javascript;">应用领域</a>
              </li>
            </ul>
          </div>
          <div class="list">
            <h4>
              <a href="javascript;">最新动态</a>
              <i class="el-icon-caret-right"></i>
            </h4>
            <ul>
              <li>
                <a href="javascript;">新闻资讯</a>
              </li>
              <li>
                <a href="javascript;">金鑫专栏</a>
              </li>
              <li>
                <a href="javascript;">行业动态</a>
              </li>
              <li>
                <a href="javascript;">应用领域</a>
              </li>
            </ul>
          </div>
          <div class="list">
            <h4>
              <a href="javascript;">最新动态</a>
              <i class="el-icon-caret-right"></i>
            </h4>
            <ul>
              <li>
                <a href="javascript;">新闻资讯</a>
              </li>
              <li>
                <a href="javascript;">金鑫专栏</a>
              </li>
              <li>
                <a href="javascript;">行业动态</a>
              </li>
              <li>
                <a href="javascript;">应用领域</a>
              </li>
            </ul>
          </div>
          <div class="list">
            <h4>
              <a href="javascript;">最新动态</a>
              <i class="el-icon-caret-right"></i>
            </h4>
            <ul>
              <li>
                <a href="javascript;">新闻资讯</a>
              </li>
              <li>
                <a href="javascript;">金鑫专栏</a>
              </li>
              <li>
                <a href="javascript;">行业动态</a>
              </li>
              <li>
                <a href="javascript;">应用领域</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="about-box">
          <div class="list">
            <h4>
              <a href="javascript;">关注金鑫公众号</a>
              <i class="el-icon-caret-right"></i>
            </h4>
            <ul>
              <li><img width="146" src="./images/ewm.png" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="wrap">
        <span>Copyright  ©2012-2019 深圳金鑫膜结构建筑设计院 &nbsp; 版权所有</span>
        <span><img src="./images/gongan.png" width="20" height="20" alt="">粤公网安备 44031102000362号 &nbsp; 粤ICP备19023340号-1</span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'TheFooter'
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
    .wrap{
      display: flex;
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
      .navs-box{
        display: flex;
        width: 66%;
        .list{
          width: 25%;
          ul{
            display: flex;
            flex-direction: column;
            li{
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
      }
      .about-box{
        width: 34%;
      }
    }
  }
  .footer{
    border-top: 1px solid #f0f2f5;
    background: #171717;
    color: #ffffff;
    line-height: 60px;
    .wrap{
      display: flex;
      align-items: center;
      span{
        display: flex;
        align-items: center;
        margin-right: 30px;
        img{
          margin-top: -2px;
          margin-right: 2px;
        }
      }
    }
  }
}
</style>
