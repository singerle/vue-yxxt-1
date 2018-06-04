<template>
    <div class="xSlider" ref="xSlider">
	    <div class="slider-group" ref="sliderGroup">
        <div class="slider-content">
  	      <slot name="slider-content">
  	      </slot>
        </div>
        <div class="slider-group-btn"><slot name="slider-btn"></slot></div>
	    </div>
    </div>
</template>

<script type="ecmascript-6">
import {addClass} from 'studentCommon/js/dom'
import BScroll from 'better-scroll'
export default {
  name: '',
  data () {
    return {
      pageIndex: 0
    }
  },
  mounted(){
  	this.setSliderWidth();
  	this.init();
  },
  methods: {
  	setSliderWidth(){
  		this.children = this.$refs.sliderGroup.children;
  		let sliderWidth = this.$refs.xSlider.clientWidth;
      this.children[0].style.width =　sliderWidth + 'px';
  		let width = 0;
  		for(let i = 0; i < this.children.length; i++){
            width += this.children[i].clientWidth;
            addClass(this.children[i], 'slider-item');
        }
      this.$refs.sliderGroup.style.width = width + 'px';
  	},
  	init(){
        var vm = this;
        // 实例化scroll
        this.scroll = new BScroll(this.$refs.xSlider, {
            scrollX: true,
            scrollY: false,
            momentum: false,   //关闭或者打开惯性运动的执行
            snap: true,       //隔断（翻页）
            snapSpeed: 400,   //滑动的时间
            })
        this.scroll.on('scrollStart', () => {
          this.$emit('scrollStart',vm)
        })
        this.scroll.on('scrollEnd', () => {
            // let pageIndex = this.scroll.getCurrentPage().pageX
            this.pageIndex = this.scroll.getCurrentPage().pageX
        })
    },
    initScroll(){
      this.scroll.goToPage(0,0,400)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.slider-group
  display: inline-block
  white-space: nowrap
  align-items: center
  background-color: red;
  .slider-item
    display: inline-block
  .slider-group>div
    height: 100%
.slider-group>div:first-child
  background-color: white
   // .slider-item
   //   height: .4rem
.slider-content
  float: left
.slider-group-btn
  display: inline-block
  color: white
  padding: 0 .15rem
  float: left
</style>