<template>
  <div id="Notice">
    <div class="notice">
      <span class="notice-title">新闻动态：</span>
      <div class="notice-swiper">
        <div class="notice-ul">
          <div class="notice-li" style="height: 38px;">
            <a title="总经理参加国际标准化组织铸造机械技术委员会（ISO/TC306）成立大会">
            总经理参加国际标准化组织铸造机械技术委员会（ISO/TC306）成立大会<span class="time">2018-03-19</span>
            </a>
          </div>
        </div>
      </div>
      <a class="notice-more">
        <i class="el-icon-s-promotion"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheNotice',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
#Notice{
  position: relative;
  background-color: #ffffff;
  padding: 10px 0;
  .notice{
    height: 48px;
    line-height: 48px;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 2px;
    border: 1px solid;
    border-color: #666666;
    border-color: #e7eaf1;
    box-shadow: 0 1px 3px rgb(0 37 55 / 5%);
    padding: 5px 0;
    .notice-ul{
      .notice-li{
        line-height: 36px;
        a{
          font-size: 12px;
          color: #666666;
        }
      }
    }
    .notice-title {
      color: #333333;
      float: left;
      padding-left: 15px;
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 38px;
    }
    .notice-swiper {
      float: left;
      height: 38px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .notice-more{
      font-size: 18px;
      line-height: 38px;
      padding: 0 30px;
      color: #333333;
      float: right;
      cursor: pointer;
      &:hover{
        color: $--color-primary;
      }
    }
  }
  &::after{
    display: table;
    clear: both;
    content: '';
  }
}
</style>
