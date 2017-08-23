<template>
    <div class="gaugecharts" >
        <a ref="menu-wrapper1" style="height:100%;display:block;"></a>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'gaugecharts',
  data () {
    return {
      gy: {},
      qyfb: []
    }
  },
  props:['radius','colors'],
  created () {
    this.$nextTick(function () {
      var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            series: [
                {
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 5
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length:10,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length:12,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width:3
                    },
                    title:{
                        offsetCenter:[0,'-20%'],
                        textStyle:{
                            fontSize:12,
                            fontWeight:'bold'
                        }
                    },
                    center:['40%',70],
                    radius:'80%',
                    name: '业务指标',
                    type: 'gauge',
                    detail: {
                        formatter:'{value}%',
                        textStyle:{
                            fontSize:12
                        }
                        },
                    data: [{value: 50, name: '完成率'}]
                }
            ]
        };
        // setInterval(function () {
        //     option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        //     myChart.setOption(option, true);
        // },2000);
      this.chart = echarts.init(this.$refs['menu-wrapper1']);
      this.chart.setOption(option)
    })
  },
  metheds: {
  }
}
</script>
<style>
.gaugecharts{
    height:100%;
}
</style>
