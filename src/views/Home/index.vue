<template>
  <div>
    <div class="location">
      <div class="location1" @click="changeCity">{{ city }}▼</div>
      <van-search v-model="value" placeholder="请输入搜索关键词"> </van-search>
      <van-icon name="like-o" @click="$router.push('/list')" />
    </div>
    <div class="swipers">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="@/imges/1.png" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/imges/2.png" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/imges/3.png" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
    <van-grid clickable :border="false" :column-num="4">
      <van-grid-item icon="home-o" text="整租" to="/find" />
      <van-grid-item icon="search" text="合租" to="/find" />
      <van-grid-item icon="home-o" text="地图找房" to="/list" />
      <van-grid-item icon="home-o" text="去出租" to="/rent/add" />
    </van-grid>
    <div class="grouping">
      <div class="top">
        <h6>租房小组</h6>
        <span>更多</span>
      </div>

      <div class="am-grid-item">
        <ul class="choose">
          <li v-for="item in groupsList" :key="item.id">
            <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
            <div>
              <p>{{ item.title }}</p>

              <p>{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getSmallZu } from '@/api/home'
export default {
  created () {
    this.getSmallZu()
    const city = localStorage.getItem('city')
    if (city) {
      this.city = city
    }
  },
  data () {
    return {
      value: '',
      city: '北京',
      groupsList: []
    }
  },
  methods: {
    changeCity () {
      this.$router.push('/city')
    },
    async getSmallZu () {
      try {
        const res = await getSmallZu()
        console.log(res)
        this.groupsList = res.data.body
        console.log(this.groupsList)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped lang='less'>
.location {
  position: absolute;
  display: flex;
  align-items: center;
  top: 40px;
  left: 40px;
  z-index: 2;
  .location1 {
    padding-left: 20px;
    background-color: #fff;
    line-height: 68px;
    font-size: 28px;
    padding-right: 20px;
  }
  .van-icon {
    margin-left: 25px;
  }
}

.my-swipe .van-swipe-item img {
  width: 100%;
}

.swipers {
  position: relative;
}

.van-search {
  padding: 0 20px 0;
  width: 500px;
}
.van-grid {
  border-bottom: 1px solid #f6f5f6;
}

/deep/ .van-grid .van-icon {
  color: #00ae66;
}

.grouping {
  background-color: #f6f5f6;
  padding: 15px 20px;
  height: 376px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    h6 {
      font-size: 30px;
      color: #333;
      font-weight: 600;
    }
    span {
      font-size: 28px;
      color: #787d72;
    }
  }
}
.am-grid-item {
  .choose {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    li {
      padding-bottom: 14px;
      border-radius: 8px;
      margin: 10px;
      width: 310px;
      height: 120px;
      background-color: #fff;
      display: flex;
      img {
        width: 100px;
        height: 100%;
        margin-right: 30px;
      }
      p {
        font-size: 24px;
      }
      div {
        margin-top: 20px;
      }
    }
  }
}
</style>
