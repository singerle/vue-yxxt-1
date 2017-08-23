<template>
  <div id="contain-right">
      <div class="contain-right-header">
      	学院统计
      </div>
      <div class="contain-right-nr">
      	<v-collegePeos v-if="childcollege" :data="data"></v-collegePeos>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import collegePeos from '../tool/collegePeos'
export default {
  name: 'contain-right',
  data () {
    return {
      data:'',
      childcollege:''
    }
  },
  created:function(){
  	var _this = this
  	_this.data = new Promise((resolve,reject) => {
      axios.get('http://192.168.0.101:80/ydyx/yxtj/yxtj_xybdl.action').then((response) => {
          if(response.data.code == 40001){
            resolve(response.data.content);
          }
        })
    });
    setTimeout(() => {
    	_this.childcollege = true;
    },0)
  },
  components:{'v-collegePeos':collegePeos}
}
</script>
<style scoped>
#contain-right{
	background:white;
	height:48em;
}
.contain-right-header{
    border-bottom: 1px solid #cccccc;
    padding:.3em .8em;
    text-align: left;
}
.contain-right-nr{
	height:48em;
	padding:.3em 2em;
	/*overflow: hidden;*/
	overflow:auto
}
.contain-right-nr ul{
	list-style: none;
	font-size: 14px;
	padding:0;
}
.contain-right-nr ul p{
	margin:0;
}
.contain-right-nr ul li:nth-child(n+2){
	margin-top:2em;
}
.contain-right-list-left,.contain-right-list-right{
	display: inline-block;
	vertical-align: middle;
}
.contain-right-list-left{
	width:8.5em;
}
.contain-right-list-left p{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap; 
}
.contain-right-list-right a:first-child{
	display: inline-block;
	position: relative;
	width:10em;
	height:.8em;
	line-height: .8em;
	/*background:red;*/
	border:1px solid #cccccc;
	vertical-align: middle;
	margin-left: 1em;
}
.contain-right-list-right a.frist::before{
	content:"";
	display:block;
	position: absolute;
	width:.3em;
	height:.3em;
	border:1px solid #3da8f5;
	border-radius: 50%;
	top:50%;
	left:-.9em;
	transform: translate(0,-50%);
}
.contain-right-list-right a:last-child{
	display: inline-block;
	height:1em;
	line-height: 1em;
	vertical-align: middle;
	margin-left:.2em;
}
li:nth-last-child(n+2) .contain-right-list-right a.frist::after{
	content: "";
	display:block;
	position: absolute;
	width:1px;
	height:3em;
	border-left:1px solid #cccccc;
	border-radius: 50%;
	top:.8em;
	left:-.7em;
	transform: translate(0,0);
}
</style>
