<template>
    <div class="piecharts" >
        <a ref="menu-wrapper1" style="width:100%;height:500px;display:block;"></a>
    </div>
</template>

<script>
import echarts from 'echarts'
var op = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: 10,
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  series: [{
    name: '直接访问',
    type: 'bar',
    stack: '总量',
    label: {
      normal: {
        show: true,
        position: 'insideRight'
      }
    },
    data: [320, 302, 301, 334, 390, 330, 320]
  },
  {
    name: '邮件营销',
    type: 'bar',
    stack: '总量',
    label: {
      normal: {
        show: true,
        position: 'insideRight'
      }
    },
    data: [120, 132, 101, 134, 90, 230, 210]
  },
  {
    name: '联盟广告',
    type: 'bar',
    stack: '总量',
    label: {
      normal: {
        show: true,
        position: 'insideRight'
      }
    },
    data: [220, 182, 191, 234, 290, 330, 310]
  },
  {
    name: '视频广告',
    type: 'bar',
    stack: '总量',
    label: {
      normal: {
        show: true,
        position: 'insideRight'
      }
    },
    data: [150, 212, 201, 154, 190, 330, 410]
  },
  {
    name: '搜索引擎',
    type: 'bar',
    stack: '总量',
    label: {
      normal: {
        show: true,
        position: 'insideRight'
      }
    },
    data: [820, 832, 901, 934, 1290, 1330, 1320]
  }]
}
export default {
  name: 'piecharts',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      gy: {},
      qyfb: [],
      option: op
    }
  },
  created () {
    this.$nextTick(function () {
      this.chart = echarts.init(this.$refs['menu-wrapper1'])
      this.chart.setOption(this.option)
    })
  },
  metheds: {
    createPie: function () {
      console.log(1)
      console.log(this.$refs['menu-wrapper1'])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
