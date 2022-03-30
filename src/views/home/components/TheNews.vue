<template>
  <div id="News">
    <div class="container">
      <div class="news">
        <div class="news-images">
          <div class="image"><img src="../images/case2.png" alt=""></div>
          <div class="news-content">
            <div class="title">
              <strong>新闻资讯</strong>
              <span>
                <em>更多</em><i class="el-icon-arrow-right"></i>
              </span>
            </div>
            <ul>
              <li>
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </li>
              <li>
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </li>
              <li>
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </li>
              <li>
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="news-wrapper">
          <div class="title">
            <strong>金鑫专栏</strong>
            <span>
              <em>更多</em><i class="el-icon-arrow-right"></i>
            </span>
          </div>
          <ul>
            <li>
              <div class="desc">环保局：14省市将在今年底前完成...</div>
              <div class="time">03-02</div>
            </li>
            <li>
              <div class="desc">环保局：14省市将在今年底前完成...</div>
              <div class="time">03-02</div>
            </li>
            <li>
              <div class="desc">环保局：14省市将在今年底前完成...</div>
              <div class="time">03-02</div>
            </li>
            <li>
              <div class="desc">环保局：14省市将在今年底前完成...</div>
              <div class="time">03-02</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 30px;">
      <div class="news">
        <div class="news-images">
          <div class="image"><img src="../images/case3.png" alt=""></div>
          <div class="news-content">
            <div class="title">
              <strong>行业动态</strong>
              <span>
                <em>更多</em><i class="el-icon-arrow-right"></i>
              </span>
            </div>
            <ul>
              <li>
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </li>
              <li>
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </li>
              <li>
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </li>
              <li>
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="news-wrapper">
          <div class="title">
            <strong>应用领域</strong>
            <span>
              <em>更多</em><i class="el-icon-arrow-right"></i>
            </span>
          </div>
          <ul>
            <li>
              <div class="desc">环保局：14省市将在今年底前完成...</div>
              <div class="time">03-02</div>
            </li>
            <li>
              <div class="desc">环保局：14省市将在今年底前完成...</div>
              <div class="time">03-02</div>
            </li>
            <li>
              <div class="desc">环保局：14省市将在今年底前完成...</div>
              <div class="time">03-02</div>
            </li>
            <li>
              <div class="desc">环保局：14省市将在今年底前完成...</div>
              <div class="time">03-02</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheNews',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
#News{
  .container{
    margin-top: 10px;
    .news{
      display: flex;
      .news-images{
        width: calc(60% - 10px);
        border: 1px solid #e8eaf0;
        display: flex;
        .image{
          width: 50%;
          height: 252px;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            transition: .3s ease-out;
          }
        }
        .news-content{
          width: 50%;
        }
        &:hover{
          .image img{
            transform: scale(1.2);
          }
        }
      }
      .news-wrapper{
        width: calc(40% - 10px);
        border: 1px solid #e8eaf0;
        margin-left: 20px;
      }
      .title{
        line-height: 54px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        border-bottom: 1px solid #e8eaf0;
        strong{
          color: $--color-primary;
          font-size: 18px;
        }
        span{
          cursor: pointer;
          display: flex;
          align-items: center;
          color: #999999;
          &:hover{
            color: $--color-primary;
          }
        }
        em{
          font-style: initial;
        }
        i{
          font-size: 14px;
          margin-top: -1px;
          margin-left: 2px;
        }
      }
      ul{
        padding: 10px 20px 0;
        li{
          display: flex;
          color: #666666;
          justify-content: space-between;
          align-items: center;
          line-height: 46px;
          .desc{
            cursor: pointer;
            &:hover{
              color: $--color-primary;
            }
          }
          .time{}
        }
      }
    }
  }
}
</style>
