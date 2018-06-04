<template>
  <div class="myTitle">
  	<span class="title_text">{{title}}</span>
  	<slot></slot>
  </div>
</template>

<script>
export default {
  name: 'myTitle',
  data () {
    return {
    }
  },
  props:['title']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~studentCommon/stylus/variable"
.myTitle
	position: relative
	height: .4rem;
	line-height: .4rem;
	background: $color-background
.title_text
	display: inline-block;
	position: relative;
	font-size: .15rem;
	padding-left: .1rem;
	font-weight:bold;
	float: left;
.title_text::before
	content: "";
	display: block;
	position: absolute;
	width: 0.04rem;
	background: #2097e9;
	height: .16rem;
	top:48%;
	left: 0;
	transform: translate(0,-50%);
.title_btn_more
	color: #999999;
	margin-right: .12rem;
	float: right;
</style>
