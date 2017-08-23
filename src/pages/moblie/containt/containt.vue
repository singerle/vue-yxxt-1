<template>
  <div id="other-containt">
     <div class="other-containt-header">
       <span><a v-bind:class="{'router-link-active':active}" v-on:click="togo('/containt/region',active)">按地区</a></span>
       <span><a v-bind:class="{'router-link-active':!active}" v-on:click="togo('/containt/college',!active)">按学院</a></span>
     </div>
     <router-view></router-view>
 </div>
</template>
 <script>
 import axios from 'axios'
 import store from '../vuex/store'
 export default {
  name: 'other-containt',
  data:function(){
    return {
      pieid1:'001',
      active:true
    }
    },
  created(){
    
    },
  components:{
  },
  methods:{
    togo:function(path,stus){
      var _this = this;
      if(!stus){
        _this.active = !_this.active
      }
      sessionStorage.setItem('goback',false);
      _this.$router.push(path)
  }
}
}
</script>
<style>
#other-containt span{
  font-size:0.26em;
}
.other-containt-header{
  text-align: center;
}
.other-containt-header span{
  font-size:16px!important;
  font-weight: bold;
  color: #999999;
}
a{
  text-decoration: none;
   color: #999999;
}
.router-link-active{
  color:#333333;
}
</style>
