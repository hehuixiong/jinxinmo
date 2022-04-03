<template>
  <div id="NewBridge" class="noselect">
    <div class="nb-nodeboard-base" ref="nbNodeboardBase" v-if="showNodeboard">
      <div class="nb-nodeboard-contain-base">
        <div class="nb-nodeboard-top" :class="{showForm}">
          <div class="nb-head-title">留言板</div>
          <div class="nb-nodeboard-close" @click="show">
            <span class="el-icon-chat-square" v-if="!showForm"></span>
            <span class="el-icon-minus" v-else></span>
          </div>
        </div>
        <div class="nb-nodeboard-form" v-if="showForm">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="desc">
              <el-input size="small" rows="3" resize="none" placeholder="请在此输入留言内容，我们会尽快与您联系。（必填）" type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input size="small" placeholder="姓名" v-model="ruleForm.name">
                <i
                  class="el-icon-user-solid el-input__icon"
                  slot="prefix"
                >
                </i>
              </el-input>
            </el-form-item>
            <el-form-item prop="mobile">
              <el-input size="small" placeholder="电话（必填）" v-model="ruleForm.mobile">
                <i
                  class="el-icon-phone el-input__icon"
                  slot="prefix"
                >
                </i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button size="small" type="primary" @click="submitForm('ruleForm')">发送</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="nb-icon-wrap" @click="onShowNodeboard">
      <div class="nb-icon-inner-wrap">
        <div class="nb-icon-bridge-base">
          <span class="ch">在线咨询 <i class="iconfont icon-zaixianzixun"></i></span>
          <span class="en">ONLINE &nbsp;CONSULTATION</span>
        </div>
      </div>
    </div>
    <div class="nb-icon-wrap-mobile" @click="onShowNodeboard">
      <div class="nb-icon-inner-wrap">
        <span class="iconfont icon-zaixianzixun"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { isvalidMobile, isvalidPhone } from '@/utils/validate.js'
export default {
  data () {
    const validPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('电话不能为空'))
      } else if (!isvalidPhone(value) && !isvalidMobile(value)) {
        callback(new Error('请输入正确的电话号码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {},
      rules: {
        desc: [
          { required: true, message: '留言内容不可为空', trigger: ['blur', 'change'] }
        ],
        mobile: [
          { required: true, validator: validPhone, trigger: ['blur', 'change'] }
        ]
      },
      showForm: false,
      showNodeboard: false
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onShowNodeboard () {
      this.showNodeboard = true
      this.showForm = true
      this.$nextTick(() => {
        const nbNodeboardBase = this.$refs.nbNodeboardBase
        nbNodeboardBase.style.inset = '50% auto auto 50%'
        nbNodeboardBase.style.transform = 'translate(-50%, -50%)'
      })
    },
    show () {
      this.showForm = !this.showForm
      this.$nextTick(() => {
        const nbNodeboardBase = this.$refs.nbNodeboardBase
        nbNodeboardBase.style.inset = 'auto auto 10px 20px'
        nbNodeboardBase.style.transform = 'translate(0, 0)'
      })
    }
  }
}
</script>
<style lang="scss">
#NewBridge{
  .nb-nodeboard-form{
    .el-form-item{
      margin-bottom: 0!important;
      &:last-child{
        margin-bottom: 0!important;
        display: flex;
        justify-content: flex-end;
      }
      .el-textarea{
        margin-bottom: 4px;
      }
      &.is-error{
        margin-bottom: 14px!important;
      }
    }
    .el-form-item__error{
      padding-top: 0px!important;
    }
  }
}
</style>
<style lang="scss" scoped>
#NewBridge{
  .nb-nodeboard-base{
    display: block;
    inset: auto auto 10px 20px;
    margin-left: 0px;
    margin-top: 0px;
    height: auto;
    position: fixed;
    width: 240px;
    border-radius: 8px;
    z-index: 999999999;
    box-shadow: 0 8px 40px 0 rgb(0 0 0 / 40%);
    .nb-nodeboard-contain-base{
      color: #000;
      border-radius: 8px;
      background-color: #fff;
      .nb-nodeboard-top{
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%);
        border-radius: 8px;
        height: 46px;
        line-height: 46px;
        font-size: 14px;
        background-color: $--color-primary;
        display: flex;
        justify-content: space-between;
        .nb-head-title{
          font-size: 14px;
          color: #fff;
          margin-left: 12px;
          line-height: 46px;
          padding-left: 2px;
        }
        .nb-nodeboard-close{
          height: 46px;
          width: 34px;
          cursor: pointer;
          display: flex;
          align-items: center;
          .el-icon-minus,
          .el-icon-chat-square{
            font-size: 20px;
            color: #fff;
            font-weight: bold;
          }
        }
        &.showForm{
          border-radius: 5px 5px 0 0;
        }
      }
      .nb-nodeboard-form{
        padding: 10px;
      }
    }
  }
  .nb-icon-wrap-mobile{
    position: fixed;
    right: 20px;
    bottom: 100px;
    border-radius: 50%;
    z-index: 99999;
    width: 40px;
    height: 40px;
    display: none;
    .nb-icon-inner-wrap{
      background-color: $--color-primary;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: flex;
      .iconfont{
        margin: auto;
        font-size: 24px;
        color: #fff;
      }
    }
  }
  .nb-icon-wrap{
    position: fixed;
    right: 2px;
    top: 50%;
    left: auto;
    bottom: auto;
    transform: translateY(-50%);
    border-radius: 5px;
    z-index: 99999;
    width: 144px;
    display: block;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    .nb-icon-inner-wrap{
      position: relative;
      border-radius: 5px;
      overflow: hidden;
      background-color: $--color-primary;
      width: 144px;
      height: 52px;
      cursor: pointer;
      .nb-icon-bridge-base{
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 52px;
        .ch{
          font-size: 20px;
          margin-left: 4px;
          text-shadow:rgb(0, 0, 0) 2px 4px 5px;
          letter-spacing: 2px;
          i{
            border-radius: 50%;
            width: 26px;
            height: 26px;
            display: inline-flex;
            background: #fff;
            color: $--color-primary;
            justify-content: center;
            align-items: center;
            transform: translate(-6px, -3px);
            text-shadow: none;
            font-size: 18px;
            &::before{
              margin-left: 2px;
            }
          }
        }
        .en{
          font-family: Times;
          font-size: 12px;
          margin-top: -6px;
          font-weight: 100;
          letter-spacing : -1px;
          text-shadow:rgb(0, 0, 0) 1px 2px 3px;
          margin-left: -6px;
          transform: scale(0.9);
        }
      }
    }
  }
}
@media screen and (max-width:576px) {
  .nb-icon-wrap-mobile{
    display: block!important;
  }
  .nb-icon-wrap{
    display: none!important;
  }
}
</style>
