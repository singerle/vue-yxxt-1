<template>
  <div ref="wrapper" class="wapper-content" :probeType="3">
    <div>
      <slot></slot>
      <div v-if="enoughHeight">
        <div v-if="loadStu && isWXGD" class="getMore"><img src="./loading.gif" class="wrapper-loading">加载中</div>
        <div v-else-if="!loadStu && isWXGD" class="getMore getMore-stu" :class="{'getMore-stu-gray': !loadCode}"><span>{{loadStuMessage?'上拉加载更多':(loadCode?'我也是有底线的':'加载失败')}}</span></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        //高度是否达标
        enoughHeight: false,
        //加载状态，如果正在加载则不重复加载
        loadStu: false,
        //是否加载成功;true:40001
        loadStuMessage: true,
        //是否还有数据
        loadCode: true,
        hasMoreData: true,
        //无限加载参数
        wxjzParams: {
          page: 2
        }
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      pullup: {
        type: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      //是否开启无限滚动加在
      isWXGD: {
        type: Boolean,
        default: false
      },
      loadUrl: {
        type: String,
        default: ''        
      },
      loadParams: {}
    },
    mounted() {
      var vm = this;
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          // bounce: false
        })

        if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos);
            //判断是否是无限加载并添加加载模块
            if (me.isWXGD && !this.enoughHeight && this.scroll.maxScrollY<0){
              this.enoughHeight = true
            }
          })
        }

        if (this.pullup) {
           let me = this
          this.scroll.on('scrollEnd', () => {
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('scrollToEnd');
            }
            if (me.isWXGD && this.scroll.y <= (this.scroll.maxScrollY) && Math.abs(this.scroll.maxScrollY)>0){
              me.getMoreData();
            }
          })
        }

        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
      },
      initEnoughHeight(){
        this.enoughHeight = false;
      },
      initPage(page){
        this.wxjzParams.page = page;
      },
      //加载更多数据
      getMoreData(){
        var vm = this
        vm.loadStu = true;
        const params = Object.assign(vm.loadParams, vm.wxjzParams)
        setTimeout(() => {
          this.$axios({
            method: 'get',
            url: window.REQUEST_URL+vm.loadUrl,
            params: params
          }).then((res) => {
            var d = res.data;
            if(d.code == '40001'){
              vm.loadCode = true;
              vm.loadStuMessage = true;
              vm.wxjzParams.page += 1;
              vm.$emit('getMore',d.content);
            }else if(d.code == '30005'){
              vm.loadCode = true;
              vm.loadStuMessage = false;
            }else{
              vm.loadCode = false;
              vm.loadStuMessage = false;
            }
            vm.loadStu = false;
          }).catch((res) => {
            vm.loadStuMessage = false;
            vm.loadCode = false;
            vm.loadStu = false;
          })         
        },200)
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    updated(){
      this.refresh();
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~studentCommon/stylus/variable"
.getMore
  position: relative
  text-align: center
  height: .44rem
  line-height: .44rem
  z-index: 9
.getMore-stu
  position: relative
.getMore-stu
  span
    position: relative
  span:before
    content: ""
    position: absolute
    width: .15rem
    height: 0.01rem
    background: $color-border
    left: -.2rem
    top: 50%
    transform: translateY(-50%)
  span:after
    content: ""
    position: absolute
    width: .15rem
    height: 0.01rem
    background: $color-border
    right: -.2rem
    top: 50%
    transform: translateY(-50%)
.getMore-stu-gray
  color: $color-font-Notes
.wrapper-loading
  width: .16rem
  margin-right: 0.05rem
  vertical-align: middle
</style>
