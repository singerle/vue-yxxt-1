<!-- 学生个人信息 -->
<template>
	<div class="bgcolor">
		<div class="header">
			<div class="pic"></div>
			<div class="student-info">
				<h3 class="student-name">
					<span class="xingming">李吱吱</span>
				</h3>
				<p class="yuan">
					<span class="yuan-name">理学院</span>
					<span class="ico-4"></span>
				</p>
				<p class="xi">
					<span>信息与计算科学&nbsp;&nbsp;(<span>工程计算与数据处理</span>)</span>
				</p>
			</div>
		</div>
		<div class="content">
			<p><span>出生日期</span><span>19930205</span></p>
			<p><span>班级</span><span>11601010</span></p>
			<p><span>考生号</span><span>16340801153055</span></p>
			<p><span>学号</span><span>1160101010101</span></p>
			<p><span>身份证号</span><span>500233199004132314</span></p>
			<p><span>录取省份</span><span>安徽省</span></p>
			<p><span>政治面貌</span><span>中国共产主义青年团</span></p>
			<p><span>民族</span><span>汉族</span></p>
			<p><span>学制&nbsp;（年）</span><span>4</span></p>
			<p><span>录取校区</span><span>主校区</span></p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return {

			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.bgcolor
		background:#f7f7f7
		position:fixed
		top:0
		bottom:0
		width:100%
		.header //头部显示的学生详细信息
			overflow:hidden
			font-family:PingFang-SC-Medium
			color:#333333
			font-size:0.13rem
			background-color:#fff
			padding-bottom:0.07rem
			margin-bottom:0.1rem
			border-top:0.01rem solid #ECECEC 
			padding-top:0.09rem
			.pic //学生头像
				float:left
				margin-left:0.14rem
				background:url(../../../../static/student-index-pictures/pic.png)
				width:0.75rem
				height:0.75rem
			.student-info //学生信息栏
				float:left
				width:2.76rem
				margin-top:0.03rem
				margin-left:0.10rem
				.student-name //学生基本信息
					font-size:0
					.xingming //学生姓名
						display:inline-block
						font-size:0.17rem
						font-family:PingFang-SC-Bold
						margin-top:0.04rem
						vertical-align:top
				.yuan //学生所在学院
					font-size:0.14rem
					margin-top:0.08rem
					margin-bottom:0.06rem
					padding-left:0.2rem
					background:url(../../../../static/student-index-pictures/yuan-hui.png) no-repeat
					.ico-4
						float:right
						margin-right:0.12rem
						width:0.08rem
						height:0.13rem
						background:url(../../../../static/student-index-pictures/more.png)
				.xi //学生所在系
					font-size:0.13rem
					padding-left:0.2rem
					background:url(../../../../static/student-index-pictures/xi-hui.png) no-repeat
		.content
			padding:0 0.12rem
			background:#fff
			p
				border-bottom:0.01rem solid #e9e9e9
				font-size:0.16rem
				font-family:PingFang-SC-Medium
				color:#333
				line-height:0.44rem
				display:flex
				justify-content:space-between
				span
					text-align:right
				span:last-child
					font-size:0.14rem
					font-family:PingFang-SC-Medium
					color:#999
			p:last-child
				border-bottom:0
</style>