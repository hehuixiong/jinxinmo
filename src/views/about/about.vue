<template>
  <div id="About">
    <img class="banner" id="banner" src="@/assets/images/banner.png" alt="">
    <div class="container">
      <div id="Breadcrumb">
        <Breadcrumb></Breadcrumb>
      </div>
      <el-row>
        <el-col :xs="24" :sm="15" :md="16" :lg="18" :xl="18" style="float: right;">
          <div class="about-wrapper">
            <div class="aw-title">
              <h1>金鑫简介</h1>
            </div>
            <div class="aw-container">
              <el-row>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <div class="text" style="margin-bottom: 30px;">
                    <p>深圳市金鑫空间膜结构建筑设计院是国内顶尖的膜结构建筑设计单位，是一家专注于膜结构建筑设计与研究的建筑设计院。我们的业务涉及张拉膜结构、骨架式膜结构、充气膜结构、钢结构；对PVC、PTFE、ETFE膜材有着丰富的设计使用经验。我们尤其擅长大跨度结构、异型空间结构、索结构、封闭式建筑以及开启结构的设计与研究。我们的设计范围以膜结构、钢结构为核心，包括技术咨询，方案设计，可行性分析，造价估算，结构受力分析与计算，施工过程分析及相关结构计算，吊装及卸载方案研究，施工图、加工图深化设计，膜裁剪设计等。</p>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                  <img src="./images/logo.png" alt="">
                </el-col>
              </el-row>
              <el-row>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="float: right;">
                  <div class="text">
                    <p>金鑫膜结构设计院的前身为金鑫膜结构设计工作室，一路风雨兼程，一路砥砺奋进，我们先后经历了设计工作室、工程公司、设计公司直至今天的膜结构设计研究院。发展至今十余年，我们已累计为国内三百余家专业膜结构公司提供过设计及咨询服务，每年的工程项目案例约800余项，累计项目案例3000余项，其中包括数座大型体育场馆等重点项目。我们的项目案例遍布国内34个省、市、自治区及港澳台地区，以及以色列、文莱、埃及、南非、马来西亚等十多个国家。作为中国膜结构建筑行业的先锋，我们始终秉承“技术创新、合作共赢、品质至上、务实高效”的理念，携手国内膜结构施工单位共同攻坚克难、锐意进取，以建造更优质、更完美的膜结构建筑为目标，不断地在实践中探索，在探索中进步，引领着中国膜结构不断迈上新台阶。</p>
                    <p>展望未来，我们有志于与广大同仁一道携手并进、共创辉煌，不断探索膜结构建筑新高度！</p>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="float: left;">
                  <div class="about-iamge">
                    <img src="./images/about1.png" alt="">
                    <div class="bg"></div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="9" :md="8" :lg="6" :xl="6" style="float: left;">
          <div class="about-tabs">
            <Tabs title="关于金鑫" desc="about" :tabs="tabs" @toggle="toggle" :active.sync="active"></Tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Tabs from '@/components/Tabs/Tabs'
export default {
  name: 'AboutPage',
  components: {
    Breadcrumb,
    Tabs
  },
  data () {
    return {
      tabs: [
        { title: '金鑫简介' },
        { title: '企业文化' },
        { title: '发展历程' },
        { title: '社会责任' }
      ],
      active: 0
    }
  },
  methods: {
    toggle () {
      document.getElementById('Breadcrumb').scrollIntoView()
    }
  }
}
</script>
<style lang="scss" scoped>
#About{
  overflow: hidden;
  .banner{
    width: 100%;
  }
  .el-row{
    margin: 0 -15px;
  }
  .about-tabs{
    margin: 0 15px 15px;
  }
  .about-wrapper{
    margin: 0 15px;
    padding-bottom: 50px;
    .aw-title{
      border-bottom: 3px solid #333333;
      margin-bottom: 30px;
      h1{
        padding-bottom: 17px;
        font-size: 25px;
        line-height: 25px;
      }
    }
    .aw-container{
      padding: 0 15px;
      img{
        width: 90%;
        transition: .7s;
        &:hover{
          transform: scale(1.15);
        }
      }
      .about-iamge{
        position: relative;
        transition: .7s;
        cursor: pointer;
        margin-top: 50px;
        &:hover{
          transform: scale(1.15);
          .bg{
            display: block;
          }
        }
        .bg{
          width: 90%;
          height: 100%;
          background: rgba($color: #000000, $alpha: 0.6);
          position: absolute;
          left: 0;
          top: 0;
          display: none;
        }
      }
      p{
        font-size: 16px;
        color: #666666;
        line-height: 30px;
        text-indent: 2em;
      }
    }
  }
}
</style>
