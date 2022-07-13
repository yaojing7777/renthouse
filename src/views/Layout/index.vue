<template>
  <div>
    <router-view class="main"></router-view>
    <van-tabbar v-model="active" route>
    <van-tabbar-item  replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item  replace to="/find" icon="search">找房</van-tabbar-item>
    <van-tabbar-item  replace to="/news" icon="friends-o">资讯</van-tabbar-item>
    <van-tabbar-item  replace to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.main {
  padding-bottom: 1.3333rem;
}
</style>
