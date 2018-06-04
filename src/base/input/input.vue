<template>
  <div class="vue_input">
  	<div class="vue_input_content">
  		<span class="vue_input_hook">
  			<input placeholder="搜索" v-model="text" @focus="focus" @blur="blur" ref="ssText">
  			<a class="vue_input_del_img" @click="del"><img src="./del.png"></a>
  		</span>
  		<slot></slot>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'vue_input',
  data () {
    return {
    	text: ''
    }
  },
  watch: {
  	text(val,old){
  		this.$emit('getData',val);
  	}
  },
  methods: {
  	del(){
  		this.text = "";
  	},
  	refresh(){
  		this.$emit('getData',this.text);
  	},
  	focus(){
  		this.$emit('focus')
  	},
  	blur(){
  		this.$emit('blur')
  	},
  	toBlur(){
  		this.$refs.ssText.blur()
  	},
  	toFocus(){
  		this.$refs.ssText.focus()
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue_input{
	/*background: #f7f7f7;*/
	/*padding: 0.08rem .12rem;*/
}
.vue_input_content{
	display: flex;
}
.vue_input_content input{
	padding: 0 0.08rem 0 .28rem;
	height: 100%;
	width: calc(100% - .36rem - 0.02rem);
	border-radius: 0.03rem;
	outline: none;
	opacity: 0.7;
	border:1px solid #dddddd;
}
.vue_input_hook{
	position: relative;
	flex: 1;
	height: .26rem;
	vertical-align: middle;
}
.vue_input_hook::before{
	content: "";
	display: block;
	position: absolute;
	height: 0.12rem;
	width: 0.12rem;
	background: url('search_icon.png') no-repeat;
	background-size: contain;
	left: 0.08rem;
	top: 50%;
	margin-top: 0.01rem;
	transform: translate(0,-50%);
	z-index: 666
}
.vue_input_del_img{
	display: inline-block;
	position: absolute;
	width: 0.15rem;
	height: 0.15rem;
	top: 50%;
	right: 0.08rem;
	margin-top: 0.01rem;
	transform: translate(0,-50%);
}
.vue_input_del_img > img{
	width: 100%;
}

</style>
