<template>
  <div id="collegePeos">
    <div class="listobj" v-for="item in collegePeosdata">
      <a class="college_mc">{{item.bmmc}}</a>
      <a class="college_style"></a>
      <v-progress class="progress" :data="item"></v-progress>
      <div style="clear:both;"></div>
    </div>
 </div>
</template>
 <script>
 import progress from '../tool/Progress'
 export default {
  name: 'collegePeos',
  data:function(){
    return {
      collegePeosdata:'',
      type:''
    }
  },
  props:['data'],
  created(){
    var _this = this;
     this.data.then(function(rs){
      _this.collegePeosdata = rs;
    })
  },
  components:{'v-progress':progress}
}
</script>
<style>
#collegePeos{
  font-size: 14px;
}
.listobj:nth-child(n+2){
  text-align: left;
  margin:1.2em auto;
}
.listobj:last-child{
  text-align: left;
  margin:auto;
}
.listobj > a{
  display: inline-block;
  vertical-align: middle;
}
a.college_mc{
  width:calc(50% - .5em);
  text-align: right;
}
a.college_style{
  position: relative;
  width:.3em;
  height:.3em;
  border:1px solid #a6d8ff;
  border-radius: 50%;
}
.progress{
  width: calc(50% - 1em);
  /*margin-left: .1em;*/
  /*margin-left: .25em;*/
}
div.listobj:not(:last-child)> a.college_style::after{
  content: "";
  display: block;
  position: absolute;
  height:2.1em;
  width:1px;
  left:50%;
  top:.4em;
  margin-left: 1px;
  margin-left:.5px;
  border-left:1px solid #e5e5e5;
  transform: translate(-50%,0);
}
</style>
