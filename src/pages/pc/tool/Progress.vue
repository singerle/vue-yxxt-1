<template>
  <div id="Progress">
    <a class="default_progress" ref="progress"><span></span></a>
    <a class="progress_value">{{data.bdl}}</a>
 </div>
</template>
 <script>
 export default {
  name: 'tableVue',
  data:function(){
    return {
      Progress:'',
      type:'',
      datas:''
    }
  },
  props:['data'],
  computed:{
    width:function(){
      return this.data.bdl.replace("%","");
    }
  },
  methods:{
    getRandomColor:function(){
      return '#'+(Math.random()*0xffffff<<0).toString(16);  
    }
  },
  mounted () {
    var _this = this;
    this.$nextTick(function () {
      _this.$refs.progress.getElementsByTagName('span')[0].style.width = _this.width+"%";
      var color = _this.getRandomColor();
      _this.$refs.progress.getElementsByTagName('span')[0].style.background = color;
    })
  }
}
</script>
<style>
#Progress{
  display: inline-block;
}
#Progress a.default_progress{
  display: inline-block;
  position: relative;
  width:calc(70% - 1em);
  height:.8em;
  border:1px solid yellowgreen;
  vertical-align: middle;
}
#Progress a.default_progress >span{
  display: block;
  height:100%;
  position: absolute;
  top: 50%;
  left:0;
  width:0%;
  background: red;
  transform: translate(0,-50%);
  z-index:999;
}
.progress_value{
  display: inline-block;
  vertical-align: middle;
}
</style>
