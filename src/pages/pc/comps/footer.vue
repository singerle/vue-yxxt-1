<template>
  <div id="footer">
      <div class="footer-list" v-for="item in data">
      	<div class="footer-list-header"><span>{{item.hjmc}}</span></div>
      	<div class="footer-list-data">
      		<div class="footer-list-data-pie">
      			<div class="footer-list-data-stus">
      				<a class="one">已办理</a>
      				<a class="two">未办理</a>
      			</div>
      			<div class="footer-list-data-pie1">
      				<v-pie :radius="radiusPie" :colors="colorjf" :title="item.hjmc" :name="name.bxbl"></v-pie>
      			</div>
      		</div>
      		<div class="footer-list-data-sj">
      			<table>
      				<tr>
      					<td>状态</td>
      					<td>人数</td>
      					<td>占比</td>
      				</tr>
      				<tr>
      					<td>已办理</td>
                <td>{{item.wcrs}}</td>
                <td>{{item.wcl}}%</td>
      				</tr>
      				<tr>
      					<td>未办理</td>
      					<td>{{item.syrs}}</td>
                <td>{{item.wwcl}}%</td>
      				</tr>
      			</table>
      		</div>
      	</div>
      </div>
      <!-- <div class="footer-list">
      	<div class="footer-list-header"><span>保险办理</span></div>
      	<div class="footer-list-data">
      		<div class="footer-list-data-pie">
      			<div class="footer-list-data-stus">
      				<a class="three">已办理</a>
      				<a class="four">未办理</a>
      			</div>
      			<div class="footer-list-data-pie1">
      				<v-pie :radius="radiusPie" :colors="colorbx" :name="name.bxbl"></v-pie>
      			</div>
      		</div>
      		<div class="footer-list-data-sj">
      			<table>
      				<tr>
      					<td>状态</td>
      					<td>人数</td>
      					<td>占比</td>
      				</tr>
      				<tr>
      					<td>已办理</td>
      					<td>0</td>
      					<td>0%</td>
      				</tr>
      				<tr>
      					<td>未办理</td>
      					<td>7895</td>
      					<td>100%</td>
      				</tr>
      			</table>
      		</div>
      	</div>
      </div>
      <div class="footer-list">
      	<div class="footer-list-header"><span>绿色通道</span></div>
      	<div class="footer-list-data">
      		<div class="footer-list-data-pie">
      			<div class="footer-list-data-stus">
      				<a class="five">已办理</a>
      				<a class="six">未办理</a>
      			</div>
      			<div class="footer-list-data-pie1">
      				<v-pie :radius="radiusPie" :colors="colorls" :name="name.bxbl"></v-pie>
      			</div>
      		</div>
      		<div class="footer-list-data-sj">
      			<table>
      				<tr>
      					<td>状态</td>
      					<td>人数</td>
      					<td>占比</td>
      				</tr>
      				<tr>
      					<td>已办理</td>
      					<td>0</td>
      					<td>0%</td>
      				</tr>
      				<tr>
      					<td>未办理</td>
      					<td>7895</td>
      					<td>100%</td>
      				</tr>
      			</table>
      		</div>
      	</div>
      </div>
      <div class="footer-list">
      	<div class="footer-list-header"><span>钥匙发放</span></div>
      	<div class="footer-list-data">
      		<div class="footer-list-data-pie">
      			<div class="footer-list-data-stus">
      				<a class="eight">已领取</a>
      				<a class="nine">未领取</a>
      			</div>
      			<div class="footer-list-data-pie1">
      				<v-pie :radius="radiusPie" :colors="colorys" :name="name.ysff"></v-pie>
      			</div>
      		</div>
      		<div class="footer-list-data-sj">
      			<table>
      				<tr>
      					<td>状态</td>
      					<td>人数</td>
      					<td>占比</td>
      				</tr>
      				<tr>
      					<td>已领取</td>
      					<td>0</td>
      					<td>0%</td>
      				</tr>
      				<tr>
      					<td>未领取</td>
      					<td>7895</td>
      					<td>100%</td>
      				</tr>
      			</table>
      		</div>
      	</div>
      </div> -->
      <div style="clear:both;"></div>
  </div>
</template>

<script>
import axios from 'axios'
import pie from '../tool/piecharts'
export default {
  name: 'footer',
  data () {
    return {
      radiusPie: ['50%', '80%'],
      radiusPie1: '90%',
      data:'',
      yj:'#ceb5db',
      wj:'#ffb1b4',
      bx1:'#78cddc',
      bx2:'#ffdd8b',
      ls1:'#80bdf6',
      ls2:'#68cca0',
      ys1:'#cef48c',
      ys2:'#facd89',
      name:{'bxbl':['已办理','未办理']}
    }
  },
  created:function(){
    var _this = this;
    new Promise((resolve,reject) => {
      axios.get('http://192.168.0.101:80/ydyx/yxtj/yxtj_xsnvbltj.action').then((response) => {
          if(response.data.code == 40001){
            _this.data = response.data.content.hjblqk;
          }
        })
    });
  },
  components:{
  	'v-pie':pie
  },
  computed:{
  	 colorjf:function(){
            var arr = [];
            arr.push(this.yj);
            arr.push(this.wj);
            return arr;
        },
     colorbx:function(){
     		var arr = [];
            arr.push(this.bx1);
            arr.push(this.bx2);
            return arr;
     },
     colorls:function(){
     		var arr = [];
            arr.push(this.ls1);
            arr.push(this.ls2);
            return arr;
     },
     colorys:function(){
     		var arr = [];
            arr.push(this.ys1);
            arr.push(this.ys2);
            return arr;
     }
  }
}
</script>
<style scoped>
/* footer */
#footer{
  margin: .875em 0em;
  /*height:13em;*/
}
.footer-list{
  width:calc(25% - .6em);
  background: white;
  float: left;
}
.footer-list:nth-child(n+2){
  margin-left:.8em;
}
.footer-list-header{
  border-bottom: 1px solid #cccccc;
  padding:.3em 0em;
  text-align: left;
}
.footer-list-header span{
	margin-left:.5em;
}
.footer-list-data-pie{
	width:calc(45% - 1px);
	height:9em;
	float: left;
}
.footer-list-data-sj{
	width:calc(55% - 1px);
	height:9em;
	float: left;
}
.footer-list-data-stus{
	text-align: left;
}

.footer-list-data-stus > a{
	display: inline-block;
	position: relative;
	height: 1em;
	line-height: 1em;
	margin-left:2em;
	margin-top:1em;
}
.footer-list-data-stus > a.two::before,.footer-list-data-stus > a.one::before,
.footer-list-data-stus > a.three::before,.footer-list-data-stus > a.four::before,
.footer-list-data-stus > a.five::before,.footer-list-data-stus > a.six::before,
.footer-list-data-stus > a.eight::before,.footer-list-data-stus > a.nine::before
{
	content:"";
	position: absolute;
	display: block;
	width:1em;
	height:.6em;
	top:50%;
	left:-1.2em;
	background: #ceb5db;
	transform: translate(0,-50%);
}
.footer-list-data-stus > a.one::before{
	background: #ceb5db;
}
.footer-list-data-stus > a.two::before{
	background: #fdafb2;
}
.footer-list-data-stus > a.three::before{
	background: #78cddc;
}
.footer-list-data-stus > a.four::before{
	background: #ffdd8b;
}
.footer-list-data-stus > a.five::before{
	background: #80bdf6;
}
.footer-list-data-stus > a.six::before{
	background: #68cca0;
}
.footer-list-data-stus > a.eight::before{
	background: #cef48c;
}
.footer-list-data-stus > a.nine::before{
	background: #facd89;
}
.footer-list-data-pie1{
	width:100%;
}
.footer-list-data-sj > table{
	width:100%;
	margin-top: .65em;
	padding:0px;
}
.footer-list-data-sj > table tr td{
	padding:0em 0em 1em 0em;
}
</style>
