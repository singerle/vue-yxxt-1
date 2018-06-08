<template>
	<div class="wrap">
		<div class="notice-list">
	    	<ul class="list">
	    		<li>
	    			<div class="left">
	    				<p class="default">通知</p>
	    				<img src="../../../../static/student-index-pictures/notice-show.png">
	    			</div>
	    			<div class="right">
	    				<div class="biaoti">
	    					<h4>英语四级考试咨询</h4>
	    					<span>刚刚</span>
	    				</div>
	    				<p class="jianjie">根据学校规定，今年英语四级考试出了最新的规定，面对这些新的规定与的 ...</p>
	    				<p class="showtime">
	    					<span>
	    						<span>05-21</span>&nbsp;<span>09:36</span>
	    					</span>
	    					<span class="viewer">1285</span>
	    				</p>
	    			</div>
	    		</li>
	    		<li>
	    			<div class="left">
	    				<p class="default">通知</p>
	    			</div>
	    			<div class="right">
	    				<div class="biaoti">
	    					<h4>学校图书馆整修</h4>
	    					<span>21分钟前</span>
	    				</div>
	    				<p class="jianjie">根据学校建设计划，于今天开始整修图书馆内部设施，给同学们带来的不变...</p>
	    				<p class="showtime">
	    					<span>
	    						<span>05-21</span>&nbsp;<span>09:36</span>
	    					</span>
	    					<span class="viewer">1285</span>
	    				</p>
	    			</div>
	    		</li>
	    		<li>
	    			<div class="left">
	    				<p class="default">通知</p>
	    				<img src="../../../../static/student-index-pictures/notice-naxin.png">
	    			</div>
	    			<div class="right">
	    				<div class="biaoti">
	    					<h4>学生会干部选拔会议</h4>
	    					<span>2天前</span>
	    				</div>
	    				<p class="jianjie">北京大学，学生会主席团选拔会议于明天下要有清晰的影像、准确的曝光。</p>
	    				<p class="showtime">
	    					<span>
	    						<span>05-21</span>&nbsp;<span>09:36</span>
	    					</span>
	    					<span class="viewer">1285</span>
	    				</p>
	    			</div>
	    		</li>
	    		<li>
	    			<div class="left">
	    				<p class="default">通知</p>
	    				<img src="../../../../static/student-index-pictures/notice-schoolbus.png">
	    			</div>
	    			<div class="right">
	    				<div class="biaoti">
	    					<h4>关于学校校车接送通知</h4>
	    					<span>5天前</span>
	    				</div>
	    				<p class="jianjie">摄影是一门对技术要求很高的艺术，一幅照片要有清晰的影像、准确的曝光、良好。</p>
	    				<p class="showtime">
	    					<span>
	    						<span>05-21</span>&nbsp;<span>09:36</span>
	    					</span>
	    					<span class="viewer">1285</span>
	    				</p>
	    			</div>
	    		</li>
	    	</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'notice-list'
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.wrap
		position:fixed
		top:0
		bottom:0
		width:100%
		background:#f7f7f7
		border-top:0.01rem solid #ECECEC
		.notice-list
			.list
				li
					overflow:hidden
					margin-bottom:0.1rem
					padding:0.15rem 0.12rem
					background:#fff
					.left
						float:left
						width:0.72rem
						height:0.72rem
						border:0.01rem solid #F3F3F3
						border-radius:0.03rem
						display:flex
						justify-content:center
						align-items:center
						position:relative
						.default
							position:absolute
							font-size:0.16rem
							line-height:0.16rem
							font-family:PingFang-SC-Bold
							font-weight:bold
							color:#999
							z-index:2
						img
							position:absolute
							z-index:5
							width:0.72rem
							height:0.72rem
					.right
						float:right
						margin-left:0.15rem	
						.biaoti	
							display:flex
							justify-content:space-between
							h4
								font-size:0.16rem
								font-family:PingFang-SC-Bold
								font-weight:bold
								color:#333
							span
								font-size:0.12rem
								color:#999999
								font-family:PingFang-SC-Regular;
						.jianjie
							width:2.46rem
							font-size:0.13rem
							color:#333
							line-height:0.18rem
							margin-top:0.05rem
							margin-bottom:0.08rem
							font-family:PingFang SC
							font-weight:Regular
						.showtime
							font-size:0.12rem
							font-family:PingFang-SC-Medium
							color:#999
							line-height:0.12rem
							display:flex
							justify-content:left  
							.viewer
								margin-left:0.25rem
								text-indent:0.18rem
								background:url(../../../../static/student-index-pictures/eye.png) no-repeat left center  		
</style>
