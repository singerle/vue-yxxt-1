<!-- 入学准备-报道交通 -->
<template>
	<div>入学准备-报道交通
    <mt-datetime-picker
    ref="picker"
    type="time"
    v-model="pickerValue">

  </mt-datetime-picker>
</div>
</template>
<script type="text/ecmascript-6">
	export default {
		data(){
			return {
				pickerValue:null
			}
		},
	    methods:{
	      openPicker() {
	        this.$refs.picker.open();
	      }
	    }
  };
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>