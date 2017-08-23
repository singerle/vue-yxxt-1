<template>
    <div class="map" >
       <div ref="warpper" style="height:500px;width:200px;">
         <div style="width:300px;">
           <a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a><a>1</a>
           <a>1</a>
         </div>
       </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'map',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      chart: {},
      mapData: {}
      }
  },
   mounted () {
    var _this = this;
    _this.$nextTick(function () {
      console.log(_this.$refs.warpper)
      var scroll = new BScroll(_this.$refs.warpper,{scrollX:true,startX: 0,startY: 0,bounce: true});
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  overflow-y: hidden;
  overflow-x: scroll;
}
.map{
  overflow-x: hidden;
  overflow-y: hidden;
}
.map div{
 white-space:nowrap; 
}
ul{
  list-style: none;
}
li{
  display: inline-block;
}
</style>
