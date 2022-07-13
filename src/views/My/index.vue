<template>
  <div>
    <!-- 背景图 -->
    <div class="myTitle">
      <!-- 有token -->
      <!-- <div class="personal" v-if="isLoginShow">
        <img :src="`http://liufusong.top:8080${userObj.avatar}`" alt="" />
        <p>{{ userObj.nickname }}</p>
        <span @click="loginOut">退出</span>
      </div> -->
      <!-- 没有token -->
      <div class="personal">
        <img src="@/imges/avatar.png" alt="" />
        <p>游客</p>
        <span v-if="user" @click="logout">退出</span>
        <span v-else @click="$router.push({ path: 'login' })">去登录</span>
      </div>
    </div>
    <van-grid clickable :border="false" :column-num="3">
      <van-grid-item icon="home-o" text="我的收藏" to="/favorite" />
      <van-grid-item icon="home-o" text="路由跳转" to="/" />
      <van-grid-item icon="home-o" text="路由跳转" to="/" />
      <van-grid-item icon="home-o" text="路由跳转" to="/" />
      <van-grid-item icon="home-o" text="路由跳转" to="/" />
      <van-grid-item icon="home-o" text="路由跳转" to="/" />
    </van-grid>
    <div class="join"></div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState } from 'vuex'
export default {
  name: 'my',
  created () {
    if (this.user) {
      this.loadUser()
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    async logout () {
      await this.$dialog.confirm({
        title: '确认退出吗？'
      }).then(() => {
        this.$store.commit('setUser', null)
      }).catch(() => {
        console.log('取消退出')
      })
    },
    async loadUser () {
      try {
        const data = await getUserInfo()
        console.log('data', data)
        this.userInfo = data.data
        console.log(this.userInfo)
      } catch (err) {
        console.log(err)
        this.$toast('获取数据失败')
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {
  },
  filters: {},
  components: {},
  mounted () {

  }
}
</script>

<style scoped lang="less">
.myTitle {
  position: relative;
  height: 600px;
  background: url("@/imges/bg.png") no-repeat top;
  background-size: 100%;
  .personal {
    text-align: center;
    position: absolute;
    left: 54px;
    bottom: 0;
    width: 640px;
    height: 332px;
    background-color: #fff;
    font-size: 26px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px 3px #dddddd;
    p {
      margin-top: 100px;
    }
    span {
      width: 110px;
      display: block;
      margin: 0 auto;
      background-color: #21b97a;
      font-size: 26px;
      height: 60px;
      line-height: 60px;
      padding: 0 30px;
      border-radius: 110px;
      color: #fff;
    }
    img {
      position: absolute;
      top: -60px;
      right: 264px;
      width: 120px;
      height: 120px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
}
.join {
  width: 708x;
  height: 200px;
  background: url("@/imges/join.png") no-repeat top;
  background-size: 100%;
  margin-left: 24px;
}
</style>
