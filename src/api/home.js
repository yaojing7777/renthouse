import request from '@/utils/request'

export const getSmallZu = () => {
  return request({
    url: 'home/groups?area=AREA%257C88cff55c-aaa4-e2e0'
  })
}
