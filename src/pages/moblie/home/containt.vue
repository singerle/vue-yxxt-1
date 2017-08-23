<template>
  <div id="home-containt">
      <div class="home-containt">
        <ul>
            <li v-for="(item,index) in containtData">
                <div>
                <h3>{{item.mc}}</h3>
                <a class="mt05em"><span class="ft-52">{{item.ybdrs}}/</span><span class="ft-12 color-gray">{{item.zrs}}</span></a>
                <a class="mt1em ft-13 Wrap">
                    <span class="mr1em">未到人数:{{item.wbdrs}}(人)</span>
                    <span>占比:<span class="color-gray">{{item.bdl}}%</span></span>
                </a>
                </div>
                <div class="piechart" ref="pie">
                    <piechart :pieid="'pieid'+index" :pwidth="pwidth" :pheight="pheight" :data="item.bdl"></piechart>
                </div>
            </li>
        </ul>
    </div>
 </div>
</template>
 <script>
 import piechart from '../tool/pie';
 export default {
  name: 'home-containt',
  data:function(){
    return {
      pieid1:'001',
      pieid2:'002',
      pieid3:'003',
      pieid4:'004',
      pwidth:'90%',
      pheight:'100%'
    }
    },
    props:['containtData'],
    created(){
      
    },
  components:{
    'piechart':piechart
  }
}
</script>
<style>
#home-containt h3{
  margin:0px;
  text-align:left;
  font-size:14px;
}
ul{
  margin:0px;
  padding:0px;
}
/*内容区*/
.home-containt{
  background:#f2f2f2;
  padding:.16em .24em;
}
.home-containt ul li{
  display:flex;
  height:2.26em;
  border-radius: .2em;
  background:white;
}
.home-containt ul li:nth-child(n+2){
  display:flex;
  height:2.26em;
  border-radius: .2em;
  margin-top:.16em;
  background:white;
}
.home-containt ul li > div:first-child{
  padding:0.24em 0 0em .3em;
  flex:7;
}
.home-containt ul li > div:first-child a{
 display:block;
 text-align:left;
 font-size: 0.52em;
}
.home-containt ul li > div:last-child{
  padding:0em .3em 0em 0em;
  flex:3;
}
.piechart{
    height:100%;
    line-height:100%;
}
.color-gray{
    color:#b9b9b9;
}
.ft-13{
  font-size: 0.26em!important;
}
.mt05em{
  margin-top:.5em;
}
.mr1em{
  margin-right: 0.5em;
}
.Wrap > span{
  display: block;
  float: left;
}
</style>
