/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-09 09:59:18
 * @version $Id$
 */
import { Toast } from 'mint-ui';


export default class resume {
	constructor({store,key}) {
		this.key = key
		this.getters = store.getters
		this.commit = store.commit
    }
    //保存对应模块数据
    resumeBc() {
    	return new Promise((resolve) => {
		      var stu = true
		      for(var key in this.getters.getaddList[this.key]){
		        if(!this.getters.getaddList[this.key][key]){
		          console.log(key)
		          Toast('请填写必要信息')
		          stu = false
		          break
		        }
		      }
		      if(!stu){
		        return false
		      }
		      var d = {}
		      for(var key in this.getters.getaddList[this.key]){
		        d[key] = this.getters.getaddList[this.key][key]
		      }
		      // var obj = Object.assign(d,{sfbc: true})
		      var obj = d
		      this.commit('SET_addJlbcsj',{key: this.key,content: obj})
		      resolve()
    	})
    }
      // 保存对应模块数据-数组
    resumeBcKey(val){
    	return new Promise((resolve) => {
		      var stu = true
		      for(var key in this.getters.getaddList[val]){
		        if(!this.getters.getaddList[val][key]){
		          Toast('请填写必要信息')
		          stu = false
		          break
		        }
		      }
		      if(!stu){
		        return false
		      }
		      var d = {}
		      for(var key in this.getters.getaddList[val]){
		        d[key] = this.getters.getaddList[val][key]
		      }      
		      // var obj = Object.assign(d,{sfbc: true})
		      var obj = d
		      this.commit('SET_addJlbcsj',{key: val,content: obj})
		      resolve()
    	})
    }
    // 保存对应模块数据-数组(向数组添加对象)
    resumeBcArr(){
    	return new Promise((resolve) => {
		      var stu = true
		      for(var key in this.getters.getaddList[this.key]){
		        if(!this.getters.getaddList[this.key][key]){
		          Toast('请填写必要信息')
		          stu = false
		          break
		        }
		      }
		      if(!stu){
		        return false
		      }
		      //防止清空时数据响应
		      var d = {}
		      for(var key in this.getters.getaddList[this.key]){
		        d[key] = this.getters.getaddList[this.key][key]
		      }      
		      var obj = d
		      this.commit('SET_addJlbcsj',{key: this.key,content: obj})
		      resolve()
    	})
    }
  	//向对象保存数组
  	resumeBcArrtoObj(){
  	 	return new Promise((resolve) => {
		      //防止清空时数据响应
		      var arr = []
		      this.getters.getaddList[this.key].forEach((r,i) => {
		      	arr.push(r)
		      })
		      this.commit('SET_addJlbcsj',{key: this.key,content: arr})
		      resolve()
    	})	
  	}
    // 返回-赋值
    backAssign() {
    	this.commit('SET_addJlJg',{content: this.getters.getaddJlbcsj[this.key],key: this.key})
    }
    // 返回-赋值
    backAssignKey(key) {
    	this.commit('SET_addJlJg',{content: this.getters.getaddJlbcsj[key],key: key})
    }
    //数组-添加数据对象
    addLsSj(obj){
    	return new Promise((resolve) => {
    		var stu = true
		      for(var key in obj){
		        if(!obj[key]){
		          Toast('请填写必要信息')
		          stu = false
		          break
		        }
		      }
		      if(!stu){
		        return false
		      }
		      //防止清空时数据响应
		      var d = {}
		      for(var key in obj){
		        d[key] = obj[key]
		      }     
	    	this.commit('SET_addJlJgArr',{content: d,key: this.key})
	    	resolve()
	    })
    }
    //数组-删除数组对象
    delLsSj(key,index){
    	return new Promise((resolve) => {
    		this.commit('SET_delJlJgArr',{key: key,index: index})
    		resolve()
	    })  
    }
  //数组-修改数据对象
    updateLsSj(obj,index){
    	return new Promise((resolve) => {
    		var stu = true
		      for(var key in obj){
		        if(!obj[key]){
		          Toast('请填写必要信息')
		          stu = false
		          break
		        }
		      }
		      if(!stu){
		        return false
		      }
		      //防止清空时数据响应
		      var d = {}
		      for(var key in obj){
		        d[key] = obj[key]
		      }     
	    	this.commit('SET_updateJlJgArr',{content: d,key: this.key,index: index})
	    	resolve()
	    })    	
    }
    //数组-添加数据对象
    addSj(obj){
    	return new Promise((resolve) => {
    		var stu = true
    		console.log(obj)
		      for(var key in obj){
		        if(!obj[key]){
		        	console.log(key)
		          Toast('请填写必要信息')
		          stu = false
		          break
		        }
		      }
		      if(!stu){
		        return false
		      }
		      //防止清空时数据响应
		      var d = {}
		      for(var key in obj){
		        d[key] = obj[key]
		      }     
	    	this.commit('SET_addJlbcsjArr',{content: d,key: this.key})
	    	resolve()
	    })
    }
    //数组-修改数据对象
    updateSj(obj,index){
    	return new Promise((resolve) => {
    		var stu = true
		      for(var key in obj){
		        if(!obj[key]){
		        	console.log(key)
		          Toast('请填写必要信息')
		          stu = false
		          break
		        }
		      }
		      if(!stu){
		        return false
		      }
		      //防止清空时数据响应
		      var d = {}
		      for(var key in obj){
		        d[key] = obj[key]
		      }     
	    	this.commit('SET_updateJlbcsjArr',{content: d,key: this.key,index: index})
	    	resolve()
	    })    	
    }
    //数组-删除数据对象
    delSj(key,index){
    	return new Promise((resolve) => {
    		this.commit('SET_delJlbcsjArr',{key: this.key,index: index})
    		resolve()
	    })  
    }
 }
 export function createResume(store,key) {
  return new resume({store,key})
}