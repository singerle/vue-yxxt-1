<template>
  <div id="other-college">
     <div class="other-region">
        <v-collegePeos v-if="childcollege" :data="data"></v-collegePeos>
        <v-tableVue  v-if="childtable" :data="data"></v-tableVue>
     </div>
     
 </div>
</template>
 <script>
 import axios from 'axios';
 import collegePeos from '../tool/collegePeos'
 import tableVue from '../tool/tableVue';
 export default {
  name: 'other-college',
  data:function(){
    return {
     data:'',
     childtable:false,
     childcollege:false
    }
    },
    created(){
      this.data = new Promise((resolve,reject) => {
        axios.get('http://192.168.0.101:80/ydyx/yxtj/yxtj_xybdl.action').then((response) => {
          if(response.data.code == 40001){
            var rs = [{"bdl":"50%","sdrs":"1","ydrs":"232","bmmc":"城市与环境科学学院"},{"bdl":"50%","sdrs":"0","ydrs":"245","bmmc":"体育学院"},{"bdl":"50%","sdrs":"0","ydrs":"96","bmmc":"法学院"},{"bdl":"0","sdrs":"0","ydrs":"362","bmmc":"文学院"},
{"bdl":"50%","sdrs":"0","ydrs":"226","bmmc":"教育学院"},{"bdl":"50%","sdrs":"0","ydrs":"183","bmmc":"音乐学院"},{"bdl":"50%","sdrs":"0","ydrs":"250","bmmc":"经济与工商管理学院"},{"bdl":"50%","sdrs":"0","ydrs":"92","bmmc":"公共管理学院"},
{"bdl":"50%","sdrs":"0","ydrs":"183","bmmc":"计算机学院"},{"bdl":"50%","sdrs":"0","ydrs":"258","bmmc":"生命科学学院"},{"bdl":"50%","sdrs":"0","ydrs":"196","bmmc":"美术学院"},{"bdl":"0","sdrs":"0","ydrs":"111","bmmc":"社会学院"},
{"bdl":"50%","sdrs":"0","ydrs":"123","bmmc":"马克思主义学院"},{"bdl":"50%","sdrs":"0","ydrs":"273","bmmc":"化学学院"},{"bdl":"50%","sdrs":"0","ydrs":"133","bmmc":"教育信息技术学院"},{"bdl":"50%","sdrs":"0","ydrs":"402","bmmc":"数学与统计学学院"},{"bdl":"50%","sdrs":"0","ydrs":"100","bmmc":"心理学院"},{"bdl":"50%","sdrs":"0","ydrs":"347","bmmc":"物理科学与技术学院"},{"bdl":"50%","sdrs":"0","ydrs":"97","bmmc":"信息管理学院"},{"bdl":"50%","sdrs":"0","ydrs":"132","bmmc":"新闻传播学院"},{"bdl":"50%","sdrs":"0","ydrs":"181","bmmc":"历史文化学院"},{"bdl":"50%","sdrs":"0","ydrs":"321","bmmc":"外国语学院"}]
resolve(rs);
            // resolve(response.data.content);
          }
        })
      });
      setTimeout(() => {
        this.childtable = true ;
      },0)
      setTimeout(() => {
        this.childcollege = true ;
      },0)
      this.$store.dispatch('set_historypath','/home').then(res => {});
      // this.$store.dispatch('set_goback','true').then(res => {});
      sessionStorage.setItem('goback',true);
    },
  components:{
      'v-collegePeos':collegePeos,
      'v-tableVue':tableVue
  }
}
</script>
<style>
</style>
