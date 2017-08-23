<template>
	<div class="chartpie">
		<canvas :id="pieid" ref="pchart" :width="pwidth" :height="pheight" style="width:90%;font-size:16px;margin-left:calc(40% - 60px);"></canvas>
	</div>
</template>
 <script>
 export default {
  name: 'pie',
  data:function(){
    return {
    }
  },
  props: ['pieid','pwidth','pheight','data'],
  methods:{
      toPoint:function(percent){
          if(percent){
                var str = (parseFloat(percent)*0.01).toFixed(4);
                return str;
            }else{
                return 0;
	        }
      },
  createPie:function(){
    let pre = this.data+'%';
    if(!this.data>0){
    	pre = 0;
    }
    var canvas = document.getElementById(this.pieid);
	if (canvas == null) {
         return false;
     }
	 var width = canvas.width,
    	height=canvas.height;
	    canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        canvas.height = height * window.devicePixelRatio;
        canvas.width = width * window.devicePixelRatio;
//	$("#gaugechart").css("width",canvas.width*2);
//	$("#gaugechart").css("height",canvas.height*4);
	 var ctx = canvas.getContext("2d");  
        ctx.translate(0.5, 0.5);
	    //开始一个新的绘制路径
	    ctx.beginPath();
	    //设置弧线的颜色为蓝色
	    ctx.strokeStyle = "#e5eff9";
	    var circle = {
	        x : canvas.width/2,    //圆心的x轴坐标值
	        y : canvas.height/2,    //圆心的y轴坐标值
	        r : canvas.width/2.2      //圆的半径

	    };
	    //沿着坐标点(100,100)为圆心、半径为50px的圆的顺时针方向绘制弧线
	    if(!pre || pre==" "){
	    	pre="0%";
	    }
	    var txt="签到率高于全校";
	    var txt1=pre.replace('%','');
	    var txt2 = "%";
	    ctx.font = "6px Arial";
	    ctx.fillStyle = "#88b5ee";
	    ctx.lineWidth = "12";
	    //弧线
	    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI*2 , false);  
	    //百分比
		 ctx.font = "24px Arial";
		 var width1 = ctx.measureText(txt1).width;
		var width2 = ctx.measureText(txt2).width;
		var widthAll = width1+width2/3;
		 ctx.fillText(txt1,(canvas.width - widthAll)/2 ,(canvas.height + 18)/2);
		ctx.font = "12px Arial";
	    ctx.fillText(txt2,(canvas.width+width2/2)/2 + ctx.measureText(txt1).width/2,(canvas.height +18)/2);
	    //按照指定的路径绘制弧线
	    ctx.stroke();
	    ctx.closePath();
	    //绘制灰线
	    ctx.beginPath();
	    ctx.strokeStyle = "#88b5ee";
	    pre = this.toPoint(pre);
	   	pre =  - 2*pre;
	   	console.log(pre);
	    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI*pre , true);
	    //按照指定的路径绘制弧线
	    ctx.stroke();
	    ctx.closePath();
      }
  },
  created:function() {
        this.$nextTick(function() {
             this.createPie();
        });
      
    }
}
</script>
<style>
.chartpie{
    height:100%;
}
</style>
