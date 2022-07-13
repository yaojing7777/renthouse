<template>
  <div class="main">
    <div class="header">
      <van-icon name="arrow-left" @click="$router.back()" />
      <span>发布房源</span>
    </div>
    <div class="asdf"></div>
    <van-cell title="房源信息" class="title-information" />
    <div class="describe">
      <!-- 小区名称 -->
      <van-cell
        title="小区名称"
        is-link
        :value="$store.state.sreaName"
        @click="$router.push({ name: 'housesearch' })"
      >
      </van-cell>
      <!-- 租金 -->
      <van-field
        label="租 金"
        placeholder="请输入租金/月"
        v-model.number="lease.price"
      >
        <template #extra> ￥/月 </template>
      </van-field>
      <!-- 建筑面积 -->
      <van-field
        label="建筑面积"
        v-model.number="lease.Architecture"
        placeholder="请输入建筑面积"
      >
        <template #extra>m²</template>
      </van-field>
      <!-- 户型 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="value1"
        label="户 型"
        input-align="right"
        placeholder="请选择"
        @click="showPicker1 = true"
        ><template #ringht-icon> <van-icon name="arrow" /> </template>
      </van-field>
      <van-popup v-model="showPicker1" position="bottom">
        <van-picker
          show-toolbar
          :columns="roomTypeList"
          @confirm="onConfirm1"
          @cancel="showPicker = false"
        />
      </van-popup>
      <!-- 所在楼层 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="value2"
        label="楼 层"
        input-align="right"
        placeholder="请选择"
        @click="showPicker2 = true"
        ><template #ringht-icon> <van-icon name="arrow" /> </template>
      </van-field>
      <van-popup v-model="showPicker2" position="bottom">
        <van-picker
          show-toolbar
          :columns="foolList"
          @confirm="onConfirm2"
          @cancel="showPicker = false"
        />
      </van-popup>
      <!-- 朝向 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="value3"
        label="朝 向"
        input-align="right"
        placeholder="请选择"
        @click="showPicker3 = true"
        class="resources-title"
        ><template #ringht-icon> <van-icon name="arrow" /> </template>
      </van-field>
      <van-popup v-model="showPicker3" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm3"
          @cancel="showPicker = false"
        />
      </van-popup>
    </div>

    <span>房屋标题</span>
    <div class="content">
      <van-field placeholder="请输入标题 (列如：整租 小区名 2室 5000元)">
      </van-field>
    </div>
    <span>房屋图像</span>
    <div class="house-content">
      <van-uploader multiple />
    </div>
    <span>房屋配置</span>
    <div class="to-configure">
      <div
        class="configure"
        v-for="(item, index) in getParamsList.supporting"
        :key="index"
      >
        <van-icon name="balance-list-o" />
        <p>{{ item.label }}</p>
      </div>
    </div>
    <div class="describe">
      <div class="top">
        <h2>房屋描述</h2>
      </div>
      <div class="bottom">
        <van-cell-group>
          <van-field placeholder="亲输入房屋描述信息" />
        </van-cell-group>
      </div>
    </div>
    <div class="footer">
      <van-button type="default" class="left">取消</van-button>
      <van-button type="primary">提交</van-button>
    </div>
  </div>
</template>

<script>
import { getParams } from '@/api/houses'
// console.log(123)
export default {
  created () {
    this.getParams()
  },
  data () {
    return { // 租金
      getParamsList: {},
      lease: { // 发布房屋配置
        title: '',
        description: '',
        oriented: '', // 楼层
        supporting: [], //
        price: '', // 租金
        roomType: '', // 户型
        size: '', // 面积
        floor: '', // 楼层
        community: ''
      },
      value1: '',
      value2: '',
      value3: '',
      showPicker1: false,
      showPicker2: false,
      showPicker3: false,
      columns: [],
      foolList: [],
      roomTypeList: []
    }
  },
  methods: {
    async getParams () {
      try {
        const res = await getParams()
        console.log(res)
        // 楼层
        this.getParamsList = res.data.body
        this.getParamsList.floor.forEach(item => {
          this.foolList.push(item.label)
        })
        // 户型
        this.getParamsList.roomType.forEach(item => {
          this.roomTypeList.push(item.label)
        })
        // console.log(this.foolList)
        // 朝向
        this.getParamsList.oriented.forEach(item => {
          this.columns.push(item.label)
        })
      } catch (err) {
        console.log(err)
      }
    },
    onConfirm1 (value) {
      this.value1 = value
      this.showPicker1 = false
    },
    onConfirm2 (value) {
      this.value2 = value
      this.showPicker2 = false
    },
    onConfirm3 (value) {
      this.value3 = value
      this.showPicker3 = false
    },
    onCancel () {
      //
    },
    onChange () {
      //
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.asdf {
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
.van-cell {
  border-bottom: 1px solid #eee;
  color: #888;
}

.title-information {
  color: #21b97a;
  font-size: 15px;
  font-weight: 500;
}
/deep/.van-nav-bar__title {
  font-size: 18px;
}
.van-icon {
  margin-left: 10px;
}
.van-cell {
  font-size: 14px;
}
.describe {
  position: relative;
  .resources-title {
    height: 84px;
  }
  h6 {
    font-size: 15px;
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-weight: normal;
  }
}
.content {
  position: relative;
  .van-cell {
    height: 84px;
  }
  span {
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-size: 15px;
  }
}
.mian {
  background-color: pink;
  padding-bottom: 45px;
}
.house-content {
  height: 150px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  h5 {
    font-weight: normal;
    font-size: 15px;
  }
  .van-uploader {
    margin-bottom: 20px;
  }
}
.to-configure {
  display: flex;
  flex-flow: wrap;

  .configure {
    flex: 20%;
    width: 75px;
    height: 51px;
    font-size: 14px;
    text-align: center;
    margin: 10px 0;
    .van-icon {
      margin-right: 7px;
    }
  }
}
.describe {
  //   background-color: #f6f5f6;
  .top {
    padding-top: 20px;
    h2 {
      font-size: 15px;
      font-weight: normal;
      padding: 10px 10px 9px;
      background-color: #fff;
    }
  }
  .bottom {
    height: 174px;
    .van-cell-group {
      height: 140px;
    }
  }
}
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  .van-button {
    width: 50%;
  }
  .left {
    color: #21b97a;
  }
}
/deep/.van-picker__toolbar {
  border-bottom: 1px solid #888888;
  .van-picker__confirm,
  .van-picker__cancel {
    color: #108ee9;
  }
}
</style>
