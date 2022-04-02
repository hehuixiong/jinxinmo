<template>
  <div id="Apply">
    <div class="apply-title">
      <strong>应用领域</strong>
      <span>Apply</span>
    </div>
    <div class="apply-content">
      <el-row>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6" v-for="(item, index) in apply" :key="index">
          <div class="apply-image">
            <img :src="item.image" alt="">
            <div class="zhezhao">
              <div class="desc">{{item.desc}}</div>
            </div>
          </div>
          <div class="apply-con">
            <em><i class="el-icon-arrow-right"></i></em>
            <b><span>{{item.con}}</span></b>
            <p>&nbsp;</p>
          </div>
        </el-col>
      </el-row>
      <div class="more" v-if="showMore">
        <router-link to="/apply">
          <span>
            MORE
            <i class="el-icon-arrow-right"></i>
          </span>
        </router-link>
      </div>
      <div class="pages" v-else>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="30"
          :pager-count="5"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ApplyCom',
  props: {
    showMore: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      apply: [
        {
          image: require('@/assets/images/case1.png'),
          desc: '金鑫膜-膜结构设计-顶尖膜结构设计-金鑫膜结构建筑设计院',
          con: '环保设施'
        },
        {
          image: require('@/assets/images/case1.png'),
          desc: '金鑫膜-膜结构设计-顶尖膜结构设计-金鑫膜结构建筑设计院',
          con: '体育设施'
        },
        {
          image: require('@/assets/images/case1.png'),
          desc: '金鑫膜-膜结构设计-顶尖膜结构设计-金鑫膜结构建筑设计院',
          con: '商业设施'
        },
        {
          image: require('@/assets/images/case1.png'),
          desc: '金鑫膜-膜结构设计-顶尖膜结构设计-金鑫膜结构建筑设计院',
          con: '充气设施'
        },
        {
          image: require('@/assets/images/case1.png'),
          desc: '金鑫膜-膜结构设计-顶尖膜结构设计-金鑫膜结构建筑设计院',
          con: '交通设施'
        },
        {
          image: require('@/assets/images/case1.png'),
          desc: '金鑫膜-膜结构设计-顶尖膜结构设计-金鑫膜结构建筑设计院',
          con: '景观设施'
        },
        {
          image: require('@/assets/images/case1.png'),
          desc: '金鑫膜-膜结构设计-顶尖膜结构设计-金鑫膜结构建筑设计院',
          con: '仓储设施'
        },
        {
          image: require('@/assets/images/case1.png'),
          desc: '金鑫膜-膜结构设计-顶尖膜结构设计-金鑫膜结构建筑设计院',
          con: '景观设施'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
#Apply{
  .apply-title{
    padding-bottom: 16px;
    line-height: 1;
    padding-top: 30px;
    strong{
      display: block;
      font-size: 26px;
      font-weight: normal;
      padding-bottom: 10px;
      color: #4d4d4d;
      transition: .3s .1s;
    }
    span{
      display: block;
      font-size: 15px;
      font-family: Times;
      color: #8f8f8f;
    }
  }
  .apply-content{
    margin-top: 10px;
    .el-row{
      margin: 0 -10px;
      .el-col{
        cursor: pointer;
        padding: 0 10px 20px;
        .apply-image{
          position: relative;
          overflow: hidden;
          img{
            display: block;
            width: 100%;
            transform: scale(1);
            transition: .3s;
          }
          .zhezhao{
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            opacity: 0;
            transition: .15s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
            .desc{
              margin: 14px;
              color: #ffffff;
              font-size: 14px;
            }
          }
        }
        .apply-con{
          display: block;
          position: relative;
          padding: 16px 0 16px 20px;
          line-height: 22px;
          overflow: hidden;
          em{
            display: block;
            float: right;
            margin: 6px 0 0 16px;
            overflow: hidden;
            i{
              font-size: 24px;
              transform: translateX(100%);
              line-height: 40px;
              border-left: 1px solid #4d4d4d;
              color: #4d4d4d;
              padding: 0 20px;
              transition: .35s ease-out;
            }
          }
          b{
            display: block;
            font-size: 16px;
            margin-bottom: 3px;
            color: #4d4d4d;
            transition: .3s .1s;
            transform: translateX(0);
            >span{
              display: -webkit-box;
              overflow: hidden;
              transition: .3s .1s;
              transform: translateX(0);
            }
          }
          p{
            font-size: 14px;
            color: #8f8f8f;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin: 0;
            transition: .3s;
          }
          &::before{
            content: '';
            border-bottom: 1px solid #4d4d4d;
            width: 0%;
            position: absolute;
            bottom: 1px;
            left: 0;
            right: 0;
            transition: .35s ease-in-out;
            box-sizing: inherit;
          }
        }
        &:hover{
          .apply-image{
            img{
              transform: scale(1.2)
            }
            .zhezhao{
              background: rgba(0, 0, 0, 0.8);
              opacity: 1;
            }
          }
          .apply-con{
            em{
              i{
                transform: translateX(0);
              }
            }
            &::before{
              width: 100%;
            }
          }
        }
      }
    }
    .more{
      text-align: center;
      padding: 30px 0;
      a{
        display: inline-block;
        font-family: Times;
        color: #4d4d4d;
        letter-spacing: 1px;
        font-size: 16px;
        font-weight: bold;
        span{
          &:hover{
            color: $--color-primary;
            i{
              padding-left: 10px;
            }
          }
        }
        i{
          display: inline-block;
          font: normal normal normal 14px/1 'metinfo-icon1';
          font-size: inherit;
          text-rendering: auto;
          transition: .3s;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
