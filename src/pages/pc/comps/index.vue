<template>
  <div id="index">
      <div class="contain">
        <div class="contain-left">
          <v-containLeft v-if="showleft"></v-containLeft>
        </div>
        <div class="contain-right">
          <v-containRight v-if="showright"></v-containRight>
        </div>
        <div class="clear"></div>
      </div>
      <div class="footer">
        <v-footer v-if="showfooter"></v-footer>
      </div>
  </div>
</template>

<script>
import containLeft from './contain-left'
import containRight from './contain-right'
import footer from './footer'
export default {
  name: 'index',
  data () {
    return {
      showleft:'',
      showright:'',
      showfooter:''
    }
  },
  created:function(){
    setTimeout(() => {
      this.showleft = true;
    },0)
    setTimeout(() => {
      this.showright = true;
    },0)
    setTimeout(() => {
      this.showfooter = true;
    },0)
  },
  components:{'v-containLeft':containLeft,'v-containRight':containRight,'v-footer':footer}
}
</script>
<style scoped>
/*tool*/
.clear{
  clear:both;
}
#index{
  background: #eaedf1;
  padding:0em .875em;
  height:100%;
}
.contain-right,.contain-left{
  background: #eaedf1;
  padding-top: .875em;
  float: left;
}
.contain-left{
  /*width:calc(75% - .4375em - 1px);*/
  width:calc(75% - 1px);
}
.contain-right{
  /*width:calc(25% - .4375em - 1px);*/
   width:calc(25% - .6em);
  margin-left:calc(.6em);
}
.contain-left > div,.contain-right>div{
  height:100%;
  /*background:white;*/
}

</style>
