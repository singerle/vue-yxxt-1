<template>
    <div class="map">
        <a id="mapconent" style="width:100%;height:28.125em;" ref="menu-wrapper1" class="mapsize"></a>
        <div class="map-ms">
          <a v-for="item in option.series[0].data">{{item.name}}:{{item.value}}</a>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import china from '../../../assets/china'
export default {
  name: 'map',
  data () {
    return {
      chart: {},
      mapData: {},
      datav:'',
      itemData:'',
      valueTotal:'',
      maxValue:'',
      option: {
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          min: 0,
          max: 2500,
          left: 'right',
          top: 90,
          text: ['高', '低'],           // 文本，默认为数值文本
          calculable: true,
          itemWidth: 5,
          itemHeight: 80,
          inRange: {
            color: ['#e0ffff', '#006edd']
          }
        },
        toolbox: {
          show: false,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        series: [{
          name: '生源情况',
          type: 'map',
          mapType: 'china',
          roam: false,
          layoutSize: 10000,
          aspectScale: 0.75,
          scaleLimit: {min: 0.8, max: 1.1},
          top: 15,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#F06C00',
              borderColor: '#63d4fc'
            }
          },
          data: ''
        }]
      }
    }
  },
  props: ['data'],
  watch: {
    datav:function(val,oldval){
      val = [{name: '天津', value: 887},
                {name: '上海', value: 587},
                {name: '重庆', value: 187},
                {name: '河北', value: 953},
                {name: '河南', value:334},
                {name: '云南', value: 554},
                {name: '辽宁', value: 142},
                {name: '黑龙江', value: 42}]
      this.option.series[0].data = val;
      this.itemData = this.itemDataMethod();
      this.valueTotal = this.valueTotalMethod();
      this.maxValue = this.maxValueMethod();
      setTimeout(() => {
        this.createMap();
      },0)
    }
  },
  created () {
     var _this = this;
     this.data.then(function(rs){
        _this.datav = rs.seriesData;
     })
  },
  computed: {
  },
  methods: {
    randomData: function () {
      return Math.round(Math.random() * 1000)
    },
    createMap: function () {
       this.mapData = china.china;
          echarts.registerMap('china', this.mapData);
          this.chart = echarts.init(this.$refs['menu-wrapper1']);
          this.chart.setOption(this.option);
    },
    itemDataMethod: function () {
      return this.option.series[0].data
    },
    createItem: function () {
      var arr = this.$refs['mapData']
      var oneP = 4 / this.maxValue
      for (var i = 0; i < arr.length; i++) {
        arr[i].getElementsByTagName('span')[0].style.height = arr[i].attributes['value'].value * oneP + 'em'// 修改dom样式
      }
    },
    valueTotalMethod: function () {
      var total = 0
      for (var i = 0; i < this.itemData.length; i++) {
        total += this.itemData[i].value
      }
      return total
    },
    maxValueMethod: function () {
      var arrValue = []
      for (var n = 0; n < this.itemData.length; n++) {
        arrValue.push(this.itemData[n].value)
      }
      return Math.max.apply(null, arrValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map{
  /*font-size:14px;*/
}
#mapconent{
    display:inline-block;
}
.mapData{
    font-size: 14px;
    height:9em;
    padding:.1em 0em;
/*    overflow-y: hidden;
    overflow-x: scroll;*/
    white-space:nowrap ;
}
.mapData a{
    display: inline-block;
    position: relative;
    width:.6em;
    height:3em;
    line-height:3em;
    margin:0em .5em 3em .5em;
    white-space:nowrap; 
}
.mapData a span:nth-child(2n-1){
    display: inline-block;
    width:.6em;
    height:4em;  
    line-height: 4em;
    border-radius: .5em;
    background: #00b6f8;
}
.mapData a span:nth-child(2n){
    display: block;
    position: absolute;
    left:40%;
    font-size: 10px;
    width:10px;
    height:3em;
    line-height:1.2em;
    vertical-align: bottom;
    /*transform:rotate(90deg); */
    white-space: normal;
    transform: translate(-50%,0);
}
.map-ms{
  padding:0em 5em;
}
.map-ms > a{
  margin-left:1em;
}
</style>
