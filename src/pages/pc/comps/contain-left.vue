<template>
  <div id="contain-left">
      <div class="contain-left-header">
        <div class="contain-left-header-logo">
          <a class="logo"></a>
          <div class="contain-left-header-logo-data">
            <div>
              <p>重庆理工大学</p>
              <h1>迎新系统大数据平台</h1>
            </div>
          </div>
        </div>
        <div class="contain-left-header-data">
          <a style="position:relative;">
            <span style="color:#68cca0" >{{data.bdl}}</span>
            <div style="position:absolute;bottom:.8em;left:50%;transform:translate(-50%,0);">新生报到率(%)</div>
          </a>
          <a style="position:relative;">
            <span style="color:#84b7e9;">{{data.ydrs}}</span>
            <div style="position:absolute;bottom:.8em;left:50%;transform:translate(-50%,0);">应到人数</div>
          </a>
          <a style="position:relative;">
            <span style="color:#f57e82">{{data.sdrs}}</span>
            <div style="position:absolute;bottom:.8em;left:50%;transform:translate(-50%,0);">实到人数</div>
          </a>
        </div>
        <div class="clear"></div>
      </div>
      <div class="contain-left-nr">
        <div class="contain-left-left">
          <div class="contain-left-left-list" v-for="(item,index) in lblist">
            <div class="contain-left-left-list-data">
              <p>{{item.mc}}</p>
              <p style="margin-top:.8em;">
                <span style="font-size:24px;" v-if="item.ybdrs>0">{{item.ybdrs}}</span>
                <span style="font-size:24px;" v-else>0</span>/
                <span style="color:#999999;" v-if="item.zrs>0">{{item.zrs}}</span>
                <span style="color:#999999;" v-else>{{item.zrs}}</span>
              </p>
              <p style="margin-top:1.5em;" v-if="item.wbdrs>0">未到人数：{{item.wbdrs}}(人)
                <span v-if="item.wbdl>0">占比：{{item.wbdl}}%</span>
                <span v-else>占比：0%</span>
              </p>
              <p style="margin-top:1.5em;" v-else>未到人数：0(人)
                <span v-if="item.wbdl>0">占比：{{item.wbdl}}%</span>
                <span v-else>占比：0%</span>
              </p>
            </div>
            <div class="contain-left-left-list-pie"><v-pie :pieid="'pieid1'+index" :pwidth="pwidth" :pheight="pheight" :data="item.bdl"></v-pie></div>
          </div>
         <!--<div class="contain-left-left-list">
            <div class="contain-left-left-list-data">
              <p>本科提前批</p>
              <p style="margin-top:.8em;"><span style="font-size:24px;">0</span>/<span style="color:#999999;">83</span></p>
              <p style="margin-top:1.5em;">未到人数：83(人)<span>占比：100%</span></p>
            </div>
            <div class="contain-left-left-list-pie"><v-pie :pieid="'pieid2'" :pwidth="pwidth" :pheight="pheight"></v-pie></div>
          </div>
           <div class="contain-left-left-list">
            <div class="contain-left-left-list-data">
              <p>普通本科批</p>
              <p style="margin-top:.8em;"><span style="font-size:24px;">0</span>/<span style="color:#999999;">131</span></p>
              <p style="margin-top:1.5em;">未到人数：131(人)<span>占比：100%</span></p>
            </div>
            <div class="contain-left-left-list-pie"><v-pie :pieid="'pieid3'" :pwidth="pwidth" :pheight="pheight"></v-pie></div>
          </div>
          <div class="contain-left-left-list">
            <div class="contain-left-left-list-data">
              <p>本科第一批</p>
              <p style="margin-top:.8em;"><span style="font-size:24px;">0</span>/<span style="color:#999999;">4233</span></p>
              <p style="margin-top:1.5em;">未到人数：4233(人)<span>占比：100%</span></p>
            </div>
            <div class="contain-left-left-list-pie"><v-pie :pieid="'pieid4'" :pwidth="pwidth" :pheight="pheight"></v-pie></div>
          </div>
           <div class="contain-left-left-list">
            <div class="contain-left-left-list-data">
              <p>本科第二批</p>
              <p style="margin-top:.8em;"><span style="font-size:24px;">0</span>/<span style="color:#999999;">1706</span></p>
              <p style="margin-top:1.5em;">未到人数：1706(人)<span>占比：100%</span></p>
            </div>
            <div class="contain-left-left-list-pie"><v-pie :pieid="'pieid5'" :pwidth="pwidth" :pheight="pheight"></v-pie></div>
          </div>
          <div class="contain-left-left-list">
            <div class="contain-left-left-list-data">
              <p>贫困专项本科</p>
              <p style="margin-top:.8em;"><span style="font-size:24px;">0</span>/<span style="color:#999999;">150</span></p>
              <p style="margin-top:1.5em;">未到人数：150(人)<span>占比：100%</span></p>
            </div>
            <div class="contain-left-left-list-pie"><v-pie :pieid="'pieid6'" :pwidth="pwidth" :pheight="pheight"></v-pie></div>
          </div>
           <div class="contain-left-left-list">
            <div class="contain-left-left-list-data">
              <p>农村专项计划</p>
              <p style="margin-top:.8em;"><span style="font-size:24px;">0</span>/<span style="color:#999999;">116</span></p>
              <p style="margin-top:1.5em;">未到人数：116(人)<span>占比：100%</span></p>
            </div>
            <div class="contain-left-left-list-pie"><v-pie :pieid="'pieid7'" :pwidth="pwidth" :pheight="pheight"></v-pie></div>
          </div>
           <div class="contain-left-left-list">
            <div class="contain-left-left-list-data">
              <p>专升本</p>
              <p style="margin-top:.8em;"><span style="font-size:24px;">0</span>/<span style="color:#999999;">690</span></p>
              <p style="margin-top:1.5em;">未到人数：690(人)<span>占比：100%</span></p>
            </div>
            <div class="contain-left-left-list-pie"><v-pie :pieid="'pieid8'" :pwidth="pwidth" :pheight="pheight"></v-pie></div>
          </div>
           <div class="contain-left-left-list">
            <div class="contain-left-left-list-data">
              <p>艺术_本科(美术)</p>
              <p style="margin-top:.8em;"><span style="font-size:24px;">0</span>/<span style="color:#999999;">31</span></p>
              <p style="margin-top:1.5em;">未到人数：31(人)<span>占比：100%</span></p>
            </div>
            <div class="contain-left-left-list-pie"><v-pie :pieid="'pieid9'" :pwidth="pwidth" :pheight="pheight"></v-pie></div>
          </div> -->
           
        </div>
        <!-- 右边 -->
        <div class="contain-left-right">
          <div class="contain-left-right-header">地区分布</div>
          <div>
            <v-map :data="mapdata"></v-map>
          </div>
        </div>
        <div class="clear"></div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import pie from '../tool/pie.vue'
import map from '../tool/chinaMap'
export default {
  name: 'contain-left',
  data () {
    return {
      pwidth:100,
      pheight:100,
      promise:'',
      data:'',
      lblist:'',
      mapdata:''
    }
  },
  created:function(){
    var _this = this;
    this.promise = new Promise((resolve,reject) => {
      axios.get('http://192.168.0.101:80/ydyx/yxtj/yxtj_xsbdl.action').then((response) => {
          if(response.data.code == 40001){
            _this.data = response.data.content[0];
          }
        })
    });
    new Promise((resolve,reject) => {
      axios.get('http://192.168.0.101:80/ydyx/yxtj/yxtj_xslbxxtj.action').then((response) => {
          if(response.data.code == 40001){
            _this.lblist = response.data.content;
          }
        })
    });
    this.mapdata = new Promise((resolve,reject) => {
        axios.get('http://192.168.0.101:80/ydyx/yxtj/yxtj_dqbdl.action').then((response) => {
          if(response.data.code == 40001){
            resolve(response.data.content);
          }
        })
      });
  },
  components:{'v-pie':pie,'v-map':map}
}
</script>
<style scoped>
.contain-left-header{
  height:9.75em;
  background: white;
}
.contain-left-header-logo{
  width:calc(40% - 1px);
  float: left;
  text-align: left;
}
.contain-left-header-logo a.logo{
  display: inline-block;
  position: relative;
  width:6em;
  height:9.75em;
  line-height: 9.75em;
  color:#555555;
  float: left;
}
p,h1{
  margin:0px;
  color:#555555;
}
div.contain-left-header-logo-data{
  height:9.75em;
  float:left;
}
div.contain-left-header-logo-data>div{
  margin-top: 2.78125em;
}
.contain-left-header-logo a.logo::before{
  content: "";
  width: 4em;
  height:4em;
  display: block;
  position: absolute;
  left:50%;
  top: 50%;
  background: url("../../../assets/lglogo.png");
  background-size: contain;
  background-position: center;
  transform: translate(-50%,-50%);
}
.contain-left-header-data{
  width: calc(60% - 1px);
  margin-left: 1px;
  float: left;
}
.contain-left-header-data > a{
  display: block;
  position: relative;
  height:9.75em;
  line-height: 9.75em;
  width:calc(33.33% - 1px);
  float: left;
  text-align: center;
}
.contain-left-header-data > a >div{
  line-height: 1em;
}
.contain-left-left-list-data{
  width:calc(60% - 1px);
  float: left;
}
.contain-left-left-list-pie{
  width:calc(40% - 1px);
  float: left;
}
.contain-left-header-data > a>span:first-child{
  font-size:3em;
}
.contain-left-left{
  height:37.375em;
  width: calc(33.33% - .4375em - 1px);
  overflow: auto;
  float: left;
}
.contain-left-right{
  width: calc(66.67% - .4375em - 1px);
  background: white;
  height:37.375em;
  margin-left:calc(.875em);
  text-align: left;
  float: left;
}
.contain-left-right-header{
  border-bottom: 1px solid #cccccc;
  padding:.3em .8em;
}
.contain-left-nr{
  margin-top: .875em;
}
.contain-left-left-list{
  background: white;
  height:7.875em;
  text-align: left;
  padding:.5em;
}
.contain-left-left > div:nth-child(n+2){
  margin-top: .625em;
}
.clear{
  clear:both;
}
</style>
