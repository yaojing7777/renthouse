<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
// https://lbsyun.baidu.com/jsdemo.htm#eAddMarker
export default {
  created () {},
  mounted () {
    const { BMapGL } = window
    const map = new BMapGL.Map('container')
    // 创建地图实例
    const point = new BMapGL.Point(116.404, 39.915)
    // 创建点坐标
    map.centerAndZoom(point, 15)
    // 初始化地图，设置中心点坐标和地图级别

    map.centerAndZoom(new BMapGL.Point(116.404, 39.928), 15)
    map.enableScrollWheelZoom(true)
    const scaleCtrl = new BMapGL.ScaleControl() // 添加比例尺控件
    map.addControl(scaleCtrl)
    const zoomCtrl = new BMapGL.ZoomControl() // 添加缩放控件
    map.addControl(zoomCtrl)
    // 创建点标记
    const marker1 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.925))
    const marker2 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915))
    const marker3 = new BMapGL.Marker(new BMapGL.Point(116.395, 39.935))
    const marker4 = new BMapGL.Marker(new BMapGL.Point(116.415, 39.931))
    // 在地图上添加点标记
    map.addOverlay(marker1)
    map.addOverlay(marker2)
    map.addOverlay(marker3)
    map.addOverlay(marker4)
  },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
#container {
  width: 100vw;
  height: 100vh;
}
</style>
