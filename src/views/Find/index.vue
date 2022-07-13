<template>
  <div>
    <div class="location">
      <van-icon name="arrow-left" @click="$router.back()" />
      <div class="location1" @click="$router.push('/city')">{{ city }}▼</div>
      <van-search placeholder="请输入搜索关键词"> </van-search>
      <van-icon name="like-o" @click="$router.push('/list')" />
    </div>
    <!-- //区域 -->
    <div class="address">
      <van-dropdown-menu>
        <van-dropdown-item title="区域" ref="item">
          <van-picker show-toolbar title="标题" :columns="columns" />
        </van-dropdown-item>
        <van-dropdown-item title="户型" ref="item">
          <van-picker
            title="标题"
            show-toolbar
            :columns="columns1"
          />
        </van-dropdown-item>
        <van-dropdown-item title="租金" ref="item">
          <van-picker
            title="标题"
            show-toolbar
            :columns="columns1"
          />
        </van-dropdown-item>
        <van-dropdown-item title="筛选" ref="item" @open="show=!show" is-link>

        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <!-- //内容 -->
    <FindList
      :housesList="housesList"
      v-for="(item, index) in housesList"
      :key="index"
      :item="item"

    ></FindList>
    <van-popup v-model="show" position="right" :style="{ height: '100%',width: '70%' }" />
  </div>
</template>

<script>
import { getHouseInfo } from '@/api/user'
import FindList from './components/FindList'
export default {
  name: 'Find',
  created () {
    this.getHouseInfo()
    const city = localStorage.getItem('city')
    if (city) {
      this.city = city
    }
  },
  data () {
    return {
      housesList: [],
      city: '广州',
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ],
      columns1: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      show: false
    }
  },
  components: {
    FindList
  },
  methods: {
    async getHouseInfo () {
      try {
        const res = await getHouseInfo()
        console.log(res)
        this.housesList = res.data.body.list
        console.log(this.housesList)
      } catch (err) {
        console.log(err)
      }
    }

  }

}
</script>

<style scoped lang="less">
.location {
  position: relative;
  display: flex;
  align-items: center;
  // top: 0px;
  // left: 0px;
  background-color: #21b97a;
  z-index: 2;
  .location1 {
    transform: translateX(27px);
    padding-left: 10px;
    background-color: #fff;
    line-height: 68px;
    font-size: 28px;
    padding-right: 10px;
  }
  .van-icon {
    margin-left: 25px;
    color: #fff;
  }
  .van-search {
    background-color: #21b97a;
  }
}

.address {
  position: sticky;
  top: 0;
  background-color: #fff;
}

.address .van-row {
  border-bottom: 1px solid #000;
}

.address .van-col {
  padding-left: 30px;
  // border-bottom: 1px solid #bbbbbb;
  height: 70px;
  line-height: 70px;
  font-size: 40px;
  .van-icon {
    color: #bbbbbb;
  }
}
</style>
