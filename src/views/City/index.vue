<template>
  <div class="city">
    <div class="header">
      <van-icon name="arrow-left" @click="backFn"/>
      <span>城市列表</span>
    </div>
    <div class="asdf"></div>
    <van-index-bar :index-list="listArr" sticky >
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell   @click="newCityFn" >{{ city }}</van-cell>

      <div>
        <van-index-anchor index="热">热门城市</van-index-anchor>
        <van-cell v-for="(item, index) in hotCityInfo" :key="index" @click="newCityFn(item)">{{
          item.label
        }}</van-cell>
      </div>

      <template v-for="(item, index) in newIndex">
        <van-index-anchor :index="item.name" :key="index" />
        <van-cell :title="item1.label" v-for="item1 in item.data" :key="item1.value" @click="newCityFn"></van-cell>
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityInfo, getHotCityInfo } from '@/api/user'
export default {
  name: 'City',
  created () {
    const city = localStorage.getItem('city')
    if (city) {
      this.city = city
    }
    this.getAllInfo()
  },
  data () {
    return {
      cityInfo: [],
      hotCityInfo: [],
      newIndex: [],
      listArr: ['#', '热'],
      city: '广州'
    //   oldArr: []
    }
  },
  methods: {
    async getAllInfo () {
      try {
        const res = await getCityInfo()
        const req = await getHotCityInfo()
        this.cityInfo = res.data.body
        this.hotCityInfo = req.data.body
        const cityIndex = []
        const dataList = []
        const indexList = []
        for (let i = 65; i <= 90; i++) {
          cityIndex.push(String.fromCharCode(i))
        }
        cityIndex.forEach(name => {
          const tmpArr = this.cityInfo.filter(item => name.toLowerCase() === item.pinyin.substr(0, 1))
          if (tmpArr.length > 0) {
            indexList.push(name)
            dataList.push({
              name,
              data: tmpArr
            })
          }
        })
        this.listArr = this.listArr.concat(indexList)
        this.newIndex = dataList
      } catch (err) {
        console.log(err)
      }
    },
    newCityFn (item) {
      console.log(item)
      // console.log('event', e)
      //   console.log(event.target.innerText)
      localStorage.setItem('city', item.label)

      this.$router.back()
    },
    backFn () {
      this.$router.back()
    }
  }

}
</script>

<style lang="less" scoped>
.asdf{
  height: 1.2rem;
}
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

/deep/ .van-index-anchor {
  color: #bbb;
}

/deep/ .van-index-bar__index {
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
