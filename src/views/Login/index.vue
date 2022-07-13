<template>
  <div>
    <van-nav-bar title="账号登录" @click-left="$router.back()">
        <van-icon name="cross" slot="left"/>
    </van-nav-bar>

  <van-form @submit="onSubmit" ref='form'>
  <van-field
    v-model.trim="user.username"
    name="username"
    placeholder="请输入账号"
    :rules="[
    { required: true, message: '请填写账号' },
    ]"
  >
    <i class="toutiao toutiao-shouji" slot="left-icon"></i>
  </van-field>
  <van-field
    v-model.trim="user.password"
    type="password"
    name="password"
    placeholder="请输入密码"
    :rules="[
    { required: true, message: '请输入密码' },
    ]"
  >
    <i class="toutiao toutiao-yanzhengma" slot="left-icon"></i>
    <!-- <MyIcon :name='yanzhengma'></MyIcon> -->
  </van-field>
  <div style="margin: 16px;">
    <van-button round block class="login-btn" native-type="submit">登录</van-button>
  </div>
</van-form>

  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const user = this.user
      try {
        const res = await login(user)
        if (res.data.status === 200) {
          console.log('成功', res)
          this.$store.commit('setUser', res.data.body)
          this.$router.push({ name: 'my' })
        } else {
          this.$toast.fail('登录失败，手机号或验证码错误')
        }

        // token有效期2小时， 两种思路
        // this.$store.commit('setUser', res.data.data)
        // this.$router.push({ name: 'my' })
      } catch (err) {
        console.log(123)
        if (err.data.status === 400) {
          console.log('登录失败', err)
          this.$toast.fail('登录失败，账号或密码错误')
        }
      }
    }
    // async onSendSms () {
    //   try {
    //     await this.$refs.form.validate('mobile')
    //     this.isShow = true
    //     try {
    //       await getSmsCode(this.mobile)
    //       this.$toast.success('发送失败')
    //     } catch (err) {
    //       console.log(err)
    //       this.$toast.fail('发送失败，请重试')
    //     }
    //     // console.log('校验通过')
    //   } catch (err) {
    //     // console.log('校验失败')
    //     this.$toast.fail('手机格式不对')
    //   }
    // }
  }
}
</script>

<style scoped lang='less'>
.toutiao {
    font-size: 37px;
}

.van-icon{
  color: #ffffff;
}
// /deep/ .van-field__label {
//     width: 70px !important;
// }

.login-btn{
    width: 694px;
    height: 88px;
    background-color: #21b97a;
    border-radius: 10px;
    color: #ffffff;
    font-size: 30px;
}

/deep/ .van-nav-bar__content {
  background-color: #21b97a;
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
