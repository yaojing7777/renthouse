import request from '@/utils/request'
import store from '@/store'
export const getParams = () => {
  return request({
    method: 'GET',
    url: '/houses/params',
    // 发送请求头数据
    headers: {
      // 注意：该接口需要授权才能访问
      //       token的数据格式：Bearer token数据，注意 Bearer 后面有个空格
      Authorization: store.state.user.token
    }
  })
}

export const getHouseAllInfo = () => {
  return request({
    method: 'GET',
    url: '/user/favorites',
    // 发送请求头数据
    headers: {
      // 注意：该接口需要授权才能访问
      //       token的数据格式：Bearer token数据，注意 Bearer 后面有个空格
      Authorization: store.state.user.token
    }
  })
}
