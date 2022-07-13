<template>
  <div class="findList">
    <div class="left">
      <img :src="`http://liufusong.top:8080${item.houseImg}`" alt="" />
    </div>
    <div class="right">
      <div class="biaoti">{{ item.title }}</div>
      <div class="info">{{ item.desc }}</div>
      <div class="ditie">
        <span v-for="(item1, index) in item.tags" :key="index">{{
          item1
        }}</span>
      </div>
      <div class="money">
        <span>{{ item.price }}</span
        >元一月
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindList',
  props: {
    item: {
      type: Object,
      required: true
    }
  }

}
</script>

<style lang="less" scoped>
.findList {
  display: flex;
  height: 240px;
  padding: 36px 32px 0;
  border-bottom: 1px solid #bbbbbb;
  div {
    margin-bottom: 10px;
  }
  .left {
    float: left;
    margin-right: 20px;
    img {
      width: 212px;
    }
  }
  .right {
    float: left;
    width: 454px;
    .biaoti {
      margin-top: 5px;
      font-weight: 700;
      font-size: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
    .info {
      color: #bbbbbb;
      font-size: 26px;
    }
    .ditie {
      padding-top: 5px;
      padding-bottom: 5px;
      // padding-left: 10px;
      // width: 90px;
      font-size: 26px;
      color: #39becd;
      // background-color: ;
      span {
        padding: 4px 6px;
        background: #e1f5f8;
        margin-right: 10px;
      }
      :nth-child(2) {
        color: #3fc28c;
        background: #e1f5ed;
      }
      :nth-child(3) {
        color: #5aabfd;
        background: #e6f2ff;
      }
    }
    .money {
      color: #fa5741;
      font-size: 24px;
      span {
        font-weight: 700;
        font-size: 32px;
      }
    }
  }
}
</style>>
