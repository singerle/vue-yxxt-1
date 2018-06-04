<template>
    <div class="my-tabbar">
      <div class="tabContainer">
        <div v-for="(item,i) in routers" v-if="(i+1)===selected" :key="'routeContain'+i">
          <slot name="tab-index"></slot>
        </div>
      </div>
      <mt-tabbar v-model="selected">
    	  <mt-tab-item :id="i+1" v-for="(item,i) in routers" :key="'routeTab'+i">
    	    <img v-if="selected==(i+1)" slot="icon" v-bind:src="item.imgActive">
          <img v-else slot="icon" v-bind:src="item.img">
    	    {{item.name}}
    	  </mt-tab-item>
  	  </mt-tabbar>
    </div>
</template>

<script type="ecmascript-6">
import { Tabbar, TabItem} from 'mint-ui';
export default {
  name: '',
  data () {
    return {
    	selected: 1
    }
  },
  watch: {
    selected(val,old){
      if(val!=old){
        this.$emit('select',this.selected);
      }
    },
    index(val,old){
      this.selected = val
    }
  },
  props: ['routers','index']
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.my-tabbar
  position: relative
  width: 100%
  height: 100%
  color: #666666
</style>