<template>
    <div class="xingxing">
    	<span class="mr6 xingxing-bt">{{zb.zbmc}}</span>
    	<a class="xx-list">
    		<span v-for="(item,index) in 5" @click="xz(index,$event)"><img src="./xingxing.png"></span>
    		<div style="clear:both;"></div>
    	</a>
    	<span class="ml8 col9 xingxing-bt">{{result}}</span>
    </div>
</template>

<script type="ecmascript-6">
const xingxing = require('studentBase/xjpj/xingxing.png');
const xingxing1 = require('studentBase/xjpj/xingxing1.png');
export default {
  name: 'xingxing',
  data () {
    return {
    	index: "",
    	result: ""
    }
  },
  props: ['wd','zb'],
  watch: {
  	index(val,old){
  		var result;
  		switch(val){
  			case 0: result = '非常差';
  			break;
  			case 1: result = '差';
  			break;
  			case 2: result = '一般';
  			break;
  			case 3: result = '好';
  			break;
  			case 4: result = '非常好';
  			break;
  		}
  		this.result = result;
  	}
  },
  methods: {
  	xz(i,e){
  		var vm = this;
  		vm.index = i;
  		//所有星星节点
  		var allDoms = e.currentTarget.parentNode.childNodes;
  		for (var n=0;n<allDoms.length-2;n++) {
  			if(n<=i){
  				allDoms[n].childNodes[0].src = xingxing1;
  			}else{
  				allDoms[n].childNodes[0].src = xingxing;
  			}
  		}
  		vm.$emit('getXs',{id: vm.zb.zbbh, pjxs: this.index+1})
  	}
  }
}
</script>

<style rel="stylesheet">
	.xingxing{
		font-size: .12rem;
	}
	.xingxing > span{
		display: inline-block;
		vertical-align: middle;
	}
	.xx-list{
		display: inline-block;
		vertical-align: middle;
	}
    .xx-list > span{
    	display: inline-block;
    	width: .22rem;
    	float: left;
    }
    .xx-list > span:nth-child(n+2){
    	margin-left: .1rem;
    }
    .xx-list > span > img{
    	width: 100%;
    }
    .xingxing-bt{
    	width: .6rem;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow:ellipsis;
    	text-align: center;
    }
    .mr6{
    	margin-right: 0.06rem;
    }
    .ml8{
    	margin-left: 0.08rem;
    }
    .col9{
    	color: #999999;
    }
</style>