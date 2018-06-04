<template>
    <section class="showChose" v-show="showChose">
      <section class="address">
        <section class="title address-title">
          <h4>选择地区</h4>
          <span @click="closeAdd()">取消</span>
        </section>
        <section class="title bb">
          <div class="area" @click="provinceSelected()">{{Province?Province:info[province-1].name}}</div>
          <div class="area" @click="citySelected()" :class="City?'':'active'">{{City?City:'请选择'}}</div>
          <div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">{{District?District:'请选择'}}</div>
        </section>
        <ul>
          <scroll class="wrapper" ref="scroll">
            <li class="addList" v-for="(v,k) in info" @click="getProvinceId(v.id, v.name, k)" v-show="showProvince" :class="v.selected ? 'active' : ''">{{v.name}}</li>
            <li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.id, v.name, k)" v-show="showCity" :class="v.selected ? 'active' : ''">{{v.name}}</li>
            <li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.id, v.name, k)" v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.name}}</li>
          </scroll>
        </ul>
      </section>
    </section>
</template>

<script type="ecmascript-6">
import city from './city.js'
import scroll from 'studentBase/scroll/scroll'
export default {
  name: 'myAddress',
  data () {
    return {
      showChose: false,
      showProvince: true,
      showCity: false,
      showDistrict: false,
      showCityList: false,
      showDistrictList: false,
      province: 5,
      city: 3,
      district: 57,
      GetProvinceId: 2,
      District: false,
      Province: false,
      City: false,
      // v-for循环判断是否为当前
      selected: false,
      info: ''
    }
  },
  created(){
    this.info = city
  },
  methods: {
    choseAdd: function() {
      this.showChose = true;
    },
    closeAdd: function() {
      this.showChose = false;
    },
    _filter(add,name,code) {
      let result = [];
      for(let i=0;i<add.length;i++) {
        if(code == add[i].id){
          result = add[i][name];
        }
      }
      return result;
    },
    getProvinceId: function(code,input,index) {
      this.province = code;
      this.Province = input;
      this.showProvince=false;
      this.showCity=true;
      this.showDistrict = false;
      this.showCityList = this._filter(this.info,'city',this.province);
      // 点击选择当前
      this.info.map( a => a.selected = false );
      this.info[index].selected = true;
      this.callback(input)
    },
    provinceSelected: function() {
      // 清除市级和区级列表
      this.showCityList = false;
      this.showDistrictList = false;
      // 清除市级和区级选项
      this.City = false;
      this.District = false;
      // 选项页面的切换
      this.showProvince = true;
      this.showCity = false;
      this.showDistrict = false;
    },
    getCityId: function(code, input, index) {
      this.city = code;
      this.City = input;
      this.showProvince=false;
      this.showCity=false;
      this.showDistrict = true;
      this.showDistrictList = this._filter(this.showCityList,'district',this.city);
      // 选择当前添加active
      this.showCityList.map( a => a.selected = false );
      this.showCityList[index].selected = true;
      this.callback(input)
    },
    citySelected: function() {
      this.showProvince=false;
      this.showCity=true;
      this.showDistrict = false;
    },
    getDistrictId: function(code, input, index) {
      this.district = code;
      this.District = input;
      // 选择当前添加active
      this.showDistrictList.map( a => a.selected = false );
      this.showDistrictList[index].selected = true;
      // 选取市区选项之后关闭弹层
      this.showChose = false;
      this.callback(input)
    },
    districtSelected: function() {
      this.showProvince=false;
      this.showCity=false;
      this.showDistrict = true;
    },
    callback(){
      var d = this.District?this.District:''
      var p = this.Province?this.Province:''
      var c = this.City?this.City:''
      this.$emit('checkValue', c+p+d)
    }
  },
  components: {scroll}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.myAddress{
  width: 100%;
  background-color: white;
  border-top: 4px solid rgba(245,245,245,1);
  color:#333;
}
.myAddress .cont{
  border-bottom: 1px solid rgba(245,245,245,0.8);
}
.myAddress .cont span{
  display: inline-block;
  font-size: .14rem;
  color: #333;
  line-height: 0.3rem;
  margin-left: 0.32rem;
}
.myAddress .cont section{
  float:left;
}
.myAddress .cont p{
  display: inline-block;
  font-size: .14rem;
  color: #333333;
  line-height: 0.3rem;
  margin-left: 1rem;
}
.myAddress .cont .pic2{
  float: right;
  width: 0.14rem;
  height: 0.24rem;
  margin: 0.32rem 0.32rem 0.32rem 0;
}
.myAddress .cont p.text{
  margin-left: 0.72rem;
}
.showChose{
  width:100%;
  // height:100%;
  position:fixed;
  top:0;
  left:0;
  bottom: 0
  z-index:120;
  background:rgba(77,82,113,0.8);
}
.address{
  position:absolute;
  bottom:0;
  left:0;
  z-index:121;
  background:#fff;
  width:100%;
}
.address-title> h4{
  font-weight: bold
  color: black
}
.address-title{
  text-align: center    
}
.bb{
  border-bottom: 1px solid #ececec
}
.title h4{
  display:inline-block;
  margin-left:.12rem;
  font-size:.15rem;
  line-height:0.3rem;
  font-weight: bold;
  color: black;
}
.title span{
  font-size:.14rem;
  margin-right: .12rem;
  line-height:0.34rem;
  color:#D8D8D8;
  float: right
}
.area{
  display:inline-block;
  font-size:.14rem;
  line-height:0.3rem;
  margin-left:.24rem;
  color:#333;
}
.addList{
  padding-left:.24rem;
  font-size:.14rem;
  line-height:0.3rem;
  color:#333;
}
/* 修改的格式 */
.address ul{
  height: 1.5rem
  overflow: hidden;
}
.wrapper{
  height: 100%
}
.address ul li{
}
.address .title .active{
  color:#0071B8;
  border-bottom:0.02rem solid #0071B8;
}
.address ul .active{
  color:#0071B8;
}    
</style>