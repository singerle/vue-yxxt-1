<template>
  <div id="home-containt1">
     <div class="home-containt1-list">
         <div class="home-containt1-header"><h3 class="ft-13">新生男女比例</h3></div>
         <div class="home-containt1-cont">
             <div class="chart">
                 <span><span :style="backgroundman"></span>男生</span>
                 <span><span :style="backgroundwoman"></span>女生</span>
                 <div style="clear:both;"></div>
                 <div class="home-containt1-cont-chart">
                     <div><span v-for="n in mancount" class="backgroundman"></span><div style="clear:both;"></div></div>
                     <div><span v-for="n in womancount" class="backgroundwoman"></span><div style="clear:both;"></div></div>
                 </div>
             </div>
             <div class="table">
                 <div>
                    <span>性别</span>
                    <span>人数</span>
                    <span>占比</span>
                    <div style="clear:both;"></div>
                 </div>
                 <div v-for="item in nvbl">
                    <span>{{item.xbmc}}</span>
                    <span>{{item.rs}}</span>
                    <span>{{item.bl}}%</span>
                    <div style="clear:both;"></div>
                 </div>
             </div>
         </div>
     </div>
     <div class="home-containt1-list" v-for="(item,i) in data">
         <div class="home-containt1-header"><h3 class="ft-13">{{item.hjmc}}</h3></div>
         <div class="home-containt1-cont">
             <div class="chart">
                 <span><span :style="backgroundyj"></span>已办理</span>
                 <span><span :style="backgroundwj"></span>未办理</span>
                 <div style="clear:both;"></div>
                     <!-- <v-piecharts :radius="radiusPie" :colors="colorjf"></v-piecharts> -->
                 <v-piecharts :radius="radiusPie" :colors="colorjf" v-if="i==0" :data="item"></v-piecharts>
                 <v-piecharts :radius="radiusPie1" :colors="colorbx" v-if="i==1" :data="item"></v-piecharts>
                 <v-gaugechart v-if="i==2" :data="item"></v-gaugechart>
                 <v-pie :pieid="'pieid'+i" pwidth="120%" v-if="i==3" :data="item.wwcl"></v-pie>
             </div>
             <div class="table">
                 <div>
                    <span>状态</span>
                    <span>人数</span>
                    <span>占比</span>
                    <div style="clear:both;"></div>
                 </div>
                 <div>
                    <span>已办理</span>
                    <span>{{item.syrs}}</span>
                    <span>{{item.wwcl}}%</span>
                    <div style="clear:both;"></div>
                 </div>
                <div>
                    <span>未办理</span>
                    <span>{{item.wcrs}}</span>
                    <span>{{item.wcl}}%</span>
                    <div style="clear:both;"></div>
                 </div>
             </div>
         </div>
     </div>
          <!-- <div class="home-containt1-list">
         <div class="home-containt1-header"><h3 class="ft-13">{{databxgm.hjmc}}</h3></div>
         <div class="home-containt1-cont">
             <div class="chart">
                 <span><span :style="backgroundym"></span>已办理</span>
                 <span><span :style="backgroundwm"></span>未办理</span>
                 <div style="clear:both;"></div>
                 <v-piecharts :radius="radiusPie1" :colors="colorbx"></v-piecharts>
             </div>
             <div class="table">
                 <div>
                    <span>状态</span>
                    <span>人数</span>
                    <span>占比</span>
                    <div style="clear:both;"></div>
                 </div>
                 <div>
                    <span>已办理</span>
                    <span>{{databxgm.syrs}}</span>
                    <span>{{datacwjf.wwcl}}%%</span>
                    <div style="clear:both;"></div>
                 </div>
                 <div>
                    <span>未办理</span>
                    <span>{{datacwjf.wcrs}}</span>
                    <span>{{datacwjf.wcl}}%</span>
                    <div style="clear:both;"></div>
                 </div>
             </div>
         </div>
     </div>
          <div class="home-containt1-list">
         <div class="home-containt1-header"><h3 class="ft-13">{{datalstd.hjmc}}</h3></div>
         <div class="home-containt1-cont">
             <div class="chart">
                 <v-gaugechart></v-gaugechart>
             </div>
             <div class="cont">
                 <div class="ml10" style="line-height:0.5em;">
                     <div><span class="mark">{{datalstd.syrs}}</span><span>(人)</span></div>
                     <span class="dp-block color-gray">已办理人数</span>
                 </div>
                 <div class="ml10 mt10 color-gray" >
                     <span class="dp-block">未办理人数</span>
                     <span class="dp-block"><a style="margin-right:2em;">{{datalstd.wcrs}}(人)</a>占比：{{datacwjf.wcl}}%</span>
                 </div>
             </div>
         </div>
     </div>
          <div class="home-containt1-list">
         <div class="home-containt1-header"><h3 class="ft-13">{{dataysff.hjmc}}</h3></div>
         <div class="home-containt1-cont">
             <div class="chart">
                <v-pie :pieid="pieid1" pwidth="120%"></v-pie>
             </div>
             <div class="cont">
                 <div class="ml10" style="line-height:0.5em;">
                     <div><span class="mark">{{dataysff.syrs}}</span><span>(人)</span></div>
                     <span class="dp-block color-gray">已办理人数</span>
                 </div>
                 <div class="ml10 mt10 color-gray" >
                     <span class="dp-block">未办理人数</span>
                     <span class="dp-block"><a style="margin-right:2em;">{{dataysff.wcrs}}(人)</a>占比：{{dataysff.wcl}}%</span>
                 </div>
             </div>
         </div> -->
     </div>
 </div>
</template>
 <script>
 import piecharts from '../tool/piecharts'
 import gaugechart from '../tool/gaugechart'
 import pie from '../tool/pie'
 export default {
  name: 'home-containt1',
  data:function(){
    return {
      pieid1:'005',
      pieid2:'006',
      pieid3:'007',
      pieid4:'008',
      background:'background:',
      womancolor:'#ffabbf',
      mancolor:'#408edb',
      yj:'#ceb5db',
      wj:'#ffb1b4',
      ym:'#68cca0',
      wm:'#80bdf6',
      radiusPie: ['50%', '65%'],
      radiusPie1: '70%',
      womancount:'',
      mancount:'',
      data:'',
      nvbl:'',
      datacwjf:'',
      databxgm:'',
      datalstd:'',
      dataysff:''
    }
    },
    props:['containtDatab'],
    computed:{
        colorjf:function(){
            var arr = [];
            arr.push(this.yj);
            arr.push(this.wj);
            return arr;
        },
        colorbx:function(){
            var arr = [];
            arr.push(this.ym);
            arr.push(this.wm);
            return arr;
        },
        backgroundman:function(){
            return this.background+this.mancolor;
        },
        backgroundwoman:function(){
            return this.background+this.womancolor;
        },
        backgroundyj:function(){
            return this.background+this.yj;
        },
        backgroundwj:function(){
            return this.background+this.wj;
        },
        backgroundym:function(){
            return this.background+this.ym;
        },
        backgroundwm:function(){
             return this.background+this.wm;
        }
    },
    created(){
        var _this = this;
           _this.containtDatab.then(function(rs){
            _this.data = rs;
            _this.nvbl = rs.nvbltj;
            _this.data = rs.hjblqk;
            _this.nvbl.forEach(function(r,i){
                if(r.xbmc == '女'){
                    _this.womancount = Math.round(r.bl/10)
                    _this.mancount = 10 - _this.womancount;
                }
            });
            rs.hjblqk.forEach(function(r,i){
                if(r.hjmc == '财务交费'){
                    _this.datacwjf = r
                }
                if(r.hjmc == '统一报到'){
                    _this.databxgm = r
                }
                if(r.hjmc == '绿色通道'){
                    _this.datalstd = r
                }
                if(r.hjmc == '宿舍分配'){
                    _this.dataysff = r
                }
            })
           });
    },
    components:{
        'v-piecharts':piecharts,
        'v-gaugechart':gaugechart,
        'v-pie':pie
    }
}
</script>
<style>
#home-containt1{
    background: #f2f2f2;
    padding:0 0.24em .3em 0.24em;
}
#home-containt1 h3{
    font-size: 0.48em;
}
#home-containt1 ul li{
    height:8em;
}
.home-containt1-list{
    background: #ffffff;
    padding: 0 .3em;
    height:4em;
    border-radius: .2em;
    text-align:left;
}
h3{
    margin-top: 0px;
}
.home-containt1-list:nth-child(n+2){
    margin-top:0.16em;
}
.home-containt1-cont span{
    font-size:0.26em;
}
.home-containt1-header{
    height:0.62em;
    border-bottom:1px solid #ececec;
}
.home-containt1-header a,.home-containt1-header h3{
    display: block;
    height:2.214em;
    line-height:2.214em;
}
.home-containt1-cont{
    height:1.86em;
    display: flex;
    clear: both;
}
.home-containt1-cont > div:first-child{
    flex: 2;
    margin-top:0.25em;
}
.home-containt1-cont > div:last-child{
    flex: 2;
    margin-top:0.25em;
}
.home-containt1-cont > div > span{
    display: block;
    font-size:0.26em;
    height: 1em;
    line-height: 1em;
    float: left;
}
.home-containt1-cont > div > span:nth-child(1){
    margin-right:1.285em;
}
.home-containt1-cont > div.table > div:nth-child(n+2){
    margin-top:.6em;
}
.home-containt1-cont > div > span > span{
    display: block;
    width:1em;
    height: 1em;
    float: left;
    margin-right: 0.5em;
}
.home-containt1-cont-chart{
    margin-top: .8em;
    height:1.24em;
    width:2.19em;
}
.home-containt1-cont-chart > div{
    margin-top:0.32em; 
}
.backgroundman,.backgroundwoman{
    display: block;
    width: .5em;
    height: 1.25em;
    margin:0 .2em;
    float:left;
}
.backgroundman{
    background: url('../../../assets/yxtj-man.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.backgroundwoman{
    background: url('../../../assets/yxtj-women.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.table div span{
    /*width:4.23em;*/
    width:calc(33.3% - .2em);
    margin-left:.1em;
    height:1em;
    line-height: 1em;
    float: left;
}
.mark{
    display: inline-table;
    position: relative;
    font-size:0.48em!important;
}
.mark::before{
    content: "";
    position:absolute;
    width:.5em;
    height:.5em;
    left:-1em;
    top:.25em;
    border-radius: 50%;
    background:#40abe9;
    font-size:0.26em!important;
}
.chart,.table,.cont{
    height:3.13em;
}
.ml10{
    margin-left: .2em;
}
.mt10{
    margin-top:.2em;
}
.dp-block{
    display: block;
}
.color-gray{
    color:#888888;
}
.mt0{
    margin-top: 0px;
}
</style>
