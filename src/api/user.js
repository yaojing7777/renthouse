/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'
import store from '@/store'
/**
  * 用户登录
  */
export const login = data => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  })
}

// * 获取用户自己的信息
// */
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/user',
    // 发送请求头数据
    headers: {
      // 注意：该接口需要授权才能访问
      //       token的数据格式：Bearer token数据，注意 Bearer 后面有个空格
      Authorization: store.state.user.token
    }
  })
}

// 获取房屋信息
export const getHouseInfo = () => {
  return request({
    url: '/houses?cityId=AREA%7Ca6649a11-be98-b150&stat=1&end=20&rentType=null&price=null&more=CHAR%7C76eb0532-8099-d1f4,CHAR%7Cee11187b-a631-beef'
  })
}

// 获取城市列表
export const getCityInfo = () => {
  return request({
    url: '/area/city?level=1',
    params: {

    }
  })
}

// 热门城市
export const getHotCityInfo = () => {
  return request({
    url: '/area/hot'
  })
}

// 根据城市名称查询该城市信息
