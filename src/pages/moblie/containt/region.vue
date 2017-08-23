<template>
  <div id="other-region">
     <div class="other-region">
        <v-map v-if="childmap" :data="data"></v-map>
        <v-tableVue v-if="childtable" :data="data"></v-tableVue>
     </div>
     
 </div>
</template>
 <script>
 import axios from 'axios';
 import map from '../tool/chinaMap';
 import tableVue from '../tool/tableVue';
 import store from '../vuex/store';
 export default {
  name: 'other-region',
  data:function(){
    return {
      childmap:false,
      childtable:false,
      data:''
    }
    },
    created(){
      this.data = new Promise((resolve,reject) => {
        axios.get('http://192.168.0.101:80/ydyx/yxtj/yxtj_dqbdl.action').then((response) => {
          if(response.data.code == 40001){
            resolve(response.data.content);
          }
        })
      });
      setTimeout(() => {
        this.childmap = true ;
      },0)
      setTimeout(() => {
        this.childtable = true ;
      },0)
      this.$store.dispatch('set_historypath','/home').then(res => {});
      // this.$store.dispatch('set_goback','true').then(res => {});
      sessionStorage.setItem('goback',true);
    },
  components:{
      'v-map':map,
      'v-tableVue':tableVue
  }
}
</script>
<style>
</style>
