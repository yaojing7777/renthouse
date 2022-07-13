<template>
  <div>
    <div class="header">
      <van-icon name="arrow-left" @click="$router.back()"/>
      <span>我的收藏</span>
    </div>
    <div class="weizhi"></div>
    <FindList
      :houseInfo="houseInfo"
      v-for="(item, index) in houseInfo"
      :key="index"
      :item="item"
    ></FindList>
  </div>
</template>

<script>
import FindList from '../Find/components/FindList'
import { getHouseAllInfo } from '@/api/houses'

export default {
  created () {
    this.getHouseAllInfo()
  },
  data () {
    return {
      houseInfo: []
    }
  },
  components: {
    FindList
  },
  methods: {
    async getHouseAllInfo () {
      try {
        const res = await getHouseAllInfo()
        console.log(res)
        this.houseInfo = res.data.body
        console.log(this.houseInfo)
      } catch (err) {
        console.log(err)
      }
    }
  }

}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 90px;
  display: flex;
  z-index: 5;
  // line-height: 90px;
  background-color: #21b97a;
  text-align: center;
  color: #fff;
  span {
    line-height: 90px;
    margin: 0 auto;
    transform: translateX(-16px);
  }
  .van-icon {
    padding-top: 22px;
    transform: translateX(20px);
  }
}

.weizhi{
    height: 1.2rem;
}

</style>
