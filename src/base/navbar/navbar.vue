<template>
  <div class="myTab">
    <div class="myTab_header" ref="myTab_header">
      <div>
        <a @click="toActive(i,item.path,$event)" v-for="(item,i) in types">
          <span>{{item.name}}</span>
        </a>
      </div>
    </div>
    <div class="myTab_container" ref="myTab_container">

      <slot name="tabnr" ref="tabnr"></slot>
      <!-- <div v-else class="myTab_nonr">还没有相关活动哦,快去看看别的吧</div> -->
    </div>
    <!-- <slot name="tab-btn"></slot> -->
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'myTab',
  data () {
    return {
      selected:'1',
    }
  },
  props:['data','types','active','type','cls'],
  watch:{
    selected(val,old){
      this.getData();
    }
  },
  created(){
    var vm = this;
    // vm.getData();
    vm.$nextTick(function(){
      vm.$addClass(vm.$refs.myTab_header.childNodes[0].childNodes[vm.active-1],vm.cls?vm.cls:'active');
    })
  },
  methods:{
    getData(){
      var vm = this;
      vm.$emit('getData',vm.selected);
    },
    toActive(i,path,e){
      var vm = this;
      vm.path = path;
      vm.selected = i+1;
      var doms = vm.$refs.myTab_header.childNodes[0].childNodes;
      for(var i=0;i<doms.length;i++){
        if(vm.$hasClass(doms[i],(vm.cls?vm.cls:'active'))){
          vm.$delClass(doms[i],(vm.cls?vm.cls:'active'));
        }
      }
      vm.$addClass(e.currentTarget,(vm.cls?vm.cls:'active'));
    },
    initBtn(){
      var vm = this;
      vm.selected = 1;
      var doms = vm.$refs.myTab_header.childNodes[0].childNodes;
      for(var i=0;i<doms.length;i++){
        if(vm.$hasClass(doms[i],(vm.cls?vm.cls:'active'))){
          vm.$delClass(doms[i],(vm.cls?vm.cls:'active'));
        }
      }
      vm.$addClass(doms[0],(vm.cls?vm.cls:'active'));
    }
  },
  mounted(){
    var vm = this;
    if(vm.type=='jf'){
      var d = vm.$refs.myTab_header.clientWidth;
      var domA = vm.$refs.myTab_header.childNodes[0].childNodes;
      for(var i=0;i<domA.length;i++){
        domA[i].style.width = (d/domA.length) - 6 + 'px';
        if(i<=(domA.length - 2)){
          domA[i].childNodes[0].style.borderRight = "1px solid #ececec";
        }
      }
      var b = new BScroll(vm.$refs.myTab_header,{scrollX:true,eventPassthrough: 'vertical',bounce: false});      
    }else{
      var d = vm.$refs.myTab_header.clientWidth;
      var domA = vm.$refs.myTab_header.childNodes[0].childNodes;
      for(var i=0;i<domA.length;i++){
        domA[i].style.width = (d/4) - 6 + 'px';
      }
      var b = new BScroll(vm.$refs.myTab_header,{scrollX:true,eventPassthrough: 'vertical',bounce: false});      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myTab{
  height: 100%;
  overflow: hidden;
}
/*header*/
.myTab_header{
  position: relative;
  width: 100%;
  font-size: .14rem;
  height: .45rem;
  background: white;
  border-bottom: 1px solid #ececec;
  white-space: nowrap;
  z-index: 1;
}
.myTab_header >div{
  display: inline-block;
}
.myTab_header >div> a{
  display: inline-block;
  /*width: calc(20% - 0.06rem);*/
  height: .45rem;
  line-height: .45rem;
  margin: 0 0.03rem;
  color: rgb(153,153,153);
  text-align: center;
}
.myTab_header >div> a > span{
  display: inline-block;
  width: 100%;
  height: .3rem;
  line-height: .3rem;
  margin: 0.1rem 0;
}
/*通用*/
.myTab_header >div> a.active{
  color: black!important;
  border-bottom: 1px solid black;
}
/*定制绿色*/
.myTab_header >div> a.active1{
  color: #009688!important;
  border-bottom: 1px solid #009688;
}
/*定制蓝色*/
.myTab_header >div> a.active2{
  color: #3da8f5!important;
  border-bottom: 1px solid #3da8f5;
}
.myTab_header >div> a.active3{
  color: #333333!important;
  border-bottom: 1px solid #333333;
}
.myTab_container{
  height: calc(100% - .45rem);
  background: white;
  padding: 0 .12rem;
}
.myTab_container > div{
  height: 100%;
}
.mint-navbar{
  border-bottom: 1px solid #ececec;
}
.mint-tab-item{
  margin: 0 .2rem;
  color: #999999;
}
.myTab_nonr{
  position: absolute;
  font-size: .14rem;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  white-space: nowrap;
  z-index: 999;
}

.ft14{
  font-size: .14rem;
}
</style>
