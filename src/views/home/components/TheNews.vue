<template>
  <div id="News">
    <div class="news-wrap">
      <el-row>
        <el-col :xs="24" :sm="12" :md="14" :lg="14" :xl="14">
          <div class="news-images">
            <div class="image"><img src="../images/case2.png" alt=""></div>
            <div class="news-content">
              <div class="title">
                <strong>新闻资讯</strong>
                <span>
                  <em>更多</em><i class="el-icon-arrow-right"></i>
                </span>
              </div>
              <div class="news-list">
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="10" :lg="10" :xl="10">
          <div class="news-wrapper">
            <div class="title">
              <strong>金鑫专栏</strong>
              <span>
                <em>更多</em><i class="el-icon-arrow-right"></i>
              </span>
            </div>
            <div class="news-list">
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
              </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="news-wrap" style="margin-top: 20px;">
      <el-row>
        <el-col :xs="24" :sm="12" :md="14" :lg="14" :xl="14">
          <div class="news-images">
            <div class="image"><img src="../images/case3.png" alt=""></div>
            <div class="news-content">
              <div class="title">
                <strong>行业动态</strong>
                <span>
                  <em>更多</em><i class="el-icon-arrow-right"></i>
                </span>
              </div>
              <div class="news-list">
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
                <div class="news-item">
                  <div class="desc">环保局：14省市将在今年底前完成...</div>
                  <div class="time">03-02</div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="10" :lg="10" :xl="10">
          <div class="news-wrapper">
            <div class="title">
              <strong>应用领域</strong>
              <span>
                <em>更多</em><i class="el-icon-arrow-right"></i>
              </span>
            </div>
            <div class="news-list">
              <div class="news-item">
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </div>
              <div class="news-item">
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </div>
              <div class="news-item">
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </div>
              <div class="news-item">
                <div class="desc">环保局：14省市将在今年底前完成...</div>
                <div class="time">03-02</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
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
  .news-wrap{
    .el-row{
      margin: 0 -10px;
      .el-col{
        padding: 0 10px;
      }
    }
    .news-images{
      border: 1px solid #e8eaf0;
      display: flex;
      margin-top: 10px;
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
      border: 1px solid #e8eaf0;
      margin-top: 10px;
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
    .news-list{
      padding: 10px 20px 0;
      .news-item{
        display: flex;
        color: #666666;
        justify-content: space-between;
        align-items: center;
        line-height: 46px;
        .desc{
          cursor: pointer;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          &:hover{
            color: $--color-primary;
          }
        }
        .time{
          flex: 0 0 auto;
        }
      }
    }
  }
}
</style>
