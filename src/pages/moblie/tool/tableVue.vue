<template>
  <div id="tableVue">
      <table>
        <tr>
          <th>{{type.name}}</th>
          <th>应到</th>
          <th>实到</th>
          <th>百分比</th>
        </tr>
        <tr v-for="item in tabledata">
          <td v-if="type.type==1">{{item.jgsfmc}}</td>
          <td v-else="type.type==2">{{item.bmmc}}</td>
          <td>{{item.ydrs}}</td>
          <td>{{item.sdrs}}</td>
          <td>{{item.bdl}}</td>
        </tr>
        
      </table>
 </div>
</template>
 <script>
 export default {
  name: 'tableVue',
  data:function(){
    return {
      tabledata:'',
      type:''
    }
  },
  props:['data'],
  created(){
    var _this = this;
     this.data.then(function(rs){
      _this.tabledata = (rs.data)?rs.data:rs;
      if('data' in rs){
        _this.type={type:"1",name:'省份'};
      }else{
        _this.type={type:"2",name:'学院'};
      }
    })
  }
}
</script>
<style>
#tableVue{
  font-size: 14px;
  margin-top: .9375em;
  box-shadow: 0 -.9375em #f0f1f5;
}
table{
  width:100%;
  border-collapse: collapse;
}
table tr:nth-child(2n){
  background: #f4f7f9;
}

table tr td,table tr th{
  text-align: left;
  padding:.8em .8em;
  }
</style>
