<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {addClass} from 'studentCommon/js/dom'
  import BScroll from 'better-scroll'

    export default {
        props: {
            loop: {
                type: Boolean,
                default: true,
            },
            autoPlay: {
                type: Boolean,
                default: true,
            },
            interval: {
                type: Number,
                default: 2000
            }
        },
        data() {
            return {
                dots:[],
                currentPageIndex:0
            }
        },
        mounted() {
            this.setSliderWidth(); //设置轮播图的宽度
            this.init();
            if(this.autoPlay) {
                this.play();
            }

        },
        methods: {
            setSliderWidth() {
                this.children = this.$refs.sliderGroup.children;
                this.dots = new Array(this.children.length)
                let width =0;
                let sliderWidth = this.$refs.slider.clientWidth;
                for(let i = 0; i < this.children.length; i ++){
                    width += sliderWidth;
                    addClass(this.children[i], 'slider-item');
                    this.children[i].style.width = sliderWidth + 'px';
                }
                if(this.loop){
                    width += 2*sliderWidth;
                }
                this.$refs.sliderGroup.style.width = width + 'px';
            },
            init(){
                var vm = this;
                // 实例化scroll
                this.scroll = new BScroll(this.$refs.slider, {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,   //关闭或者打开惯性运动的执行
                    snap: true,       //隔断（翻页）
                    snapLoop: this.loop,   //无限滚动
                    snapThreshold: 0,
                    snapSpeed: 400,   //滑动的时间
                })
                this.scroll.on('scrollEnd', () => {
                    let pageIndex = this.scroll.getCurrentPage().pageX
                    if(this.loop){
                        pageIndex -= 1;
                    }
                    this.currentPageIndex = pageIndex;
                    if(vm.autoPlay) {
                        vm.play();
                    }
                })
                this.scroll.on('beforeScrollStart', () => {
                    if(vm.autoPlay){
                        clearTimeout(vm.timer);
                    }
                })

            },
            play() {
                let pageIndex = this.currentPageIndex + 1
                if (this.loop) {
                    pageIndex += 1
                }
                var vm = this;
                this.timer = setTimeout(() => {
                    vm.scroll.goToPage(pageIndex, 0 , 400);//跳转到的页数 初始化页数 滑动总时间
                },vm.interval)
            }
        },
      destroyed() {
       clearTimeout(this.timer)
     }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~studentCommon/stylus/variable"

  .slider
    position: relative
    min-height: 1px
    overflow: hidden
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          // width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: .36rem
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>