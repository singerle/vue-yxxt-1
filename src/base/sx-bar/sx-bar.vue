<template>
    <div class="sx-bar">
    	<slot></slot>
    	<div class="sx-bar-content" v-if="data">
    		<a v-for="item in list"
    		@click="check(item.mc,item.id)"
    		>
    			{{item.mc}}
    			<img class="fr" v-if="id==item.id" src="static/imgs/home/yes.png">
    		</a>
    	</div>
    </div>
</template>

<script type="ecmascript-6">
export default {
  name: 'sx-bar',
  data () {
    return {
    }
  },
  computed: {
  	list(){
  		var n = []
  		for(var i=0;i<this.data.length;i++){
  			if(this.data[i].zt){
  				n = this.data[i].data
  			}
  		}
  		return n
  	},
  	id(){
  		var id
  		for(var i=0;i<this.data.length;i++){
  			if(this.data[i].zt){
  				id = this.data[i].id
  			}
  		}
  		return id
  	}
  },
  methods: {
  	check(mc,id){
  		this.$emit('check',{mc:mc,id:id})
  	}
  },
  props: ['data']
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.sx-bar
  position: relative 
  display: flex
  font-size: 13px
  color: #999
  background: white
  height: .44rem
  border-bottom: 1px solid #ececec
  align-items: center
  z-index: 999
  >a
    flex: 1
    text-align: center
    img
      width: 0.07rem
      vertical-align: middle
      margin-bottom: 0.03rem
      margin-left: 0.03rem
  .sx-bar-content
    position: absolute
    top: .45rem
    width: 100%
    background: white
    z-index: 999
    text-align: left
    >a
      position: relative
      display: block
      margin: 0 .12rem
      padding: 0 .12rem
      height: .43rem
      line-height: .43rem
      border-bottom: 1px solid #ececec
      img
        position: absolute
        right: .12rem
        top: 50%
        transform: translateY(-50%)
    >a:last-child
      border-bottom: 0
</style>