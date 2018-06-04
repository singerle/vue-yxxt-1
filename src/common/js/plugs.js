//导入滚动插件
import BScroll from 'better-scroll'
import axios from 'axios'
import {MessageBox,Toast,Indicator} from 'mint-ui'
// import config from '@@/config.js'
let defaultImg = require('studentCommon/image/default.png')
//时间格式转换
Date.prototype.format = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}


export default {
    install: function (Vue, options) {
        // 添加的内容写在这个函数里面
        var _vm = Vue.prototype;
	    // 1. 添加全局方法或属性
		Vue.myGlobalMethod = function () {
			// 逻辑...
			console.log('测试全局函数')
		};
		//字符串转dom对象
		Vue.loadXMLString = function(txt){
		　　var objE = document.createElement("div");
		　　objE.innerHTML = txt;
		　　return objE.childNodes;
		}

		// 2. 自定义指令-添加全局资源
		//图片适配指令
		Vue.directive('handleImg', {
			bind (e,data,vnode,oldVnode) {
				if(e){
					Vue.nextTick(function(){
						var dom = e;
						Vue.prototype.$imgSp(dom,data.value,e.className)
						window.addEventListener('orientationchange',function(){
					      Vue.prototype.$imgSp(dom,data.value,e.className)
					    });
					})
				}
			}
		});
		//图片适配指令--头像
		Vue.directive('handleImgTX', {
			bind (e,data,vnode,oldVnode) {
				if(e){
					Vue.nextTick(function(){
						var dom = e;
						Vue.prototype.$imgSp(dom,data.value,e.className,'tx')
						window.addEventListener('orientationchange',function(){
					      Vue.prototype.$imgSp(dom,data.value,e.className,'tx')
					    });
					})
				}
			}
		});
		Vue.directive('Scroll', {
			bind (e, data, vnode, oldVnode){
				if(e){
					Vue.nextTick(function(){
						new BScroll(e,{probeType:3,scrollY: true,startX: 0,startY: 0,hasVerticalScroll:true,click:true});
					});
				}
			}
		});
		//初始化滚动指令
		Vue.directive('initScroll', {
			componentUpdated(e, data, vnode, oldVnode){
				var _dom = document.getElementsByClassName('getmore')[0];
				var _domBtnMore = document.getElementsByClassName('btnMore')[0];
				var _domNoMore = document.getElementsByClassName('noMore')[0];
				if(_dom){
					if(vnode.context.dataP.length<=0){
						_dom.style.display='none';
					}else if(vnode.context.dataP.length>0){
						_dom.style.display='block';
						_domBtnMore.style.display = 'block';
						_domNoMore.style.display = 'none';
					}				
				}
			},
			bind (e, data, vnode, oldVnode){
				if(e){
					//在$nextTick之前创建scroll,避免火狐浏览报错
					Vue.prototype.$scroll = new BScroll(e,{probeType:3,scrollY: true,bounce:true,click:true});
					Vue.prototype.$nextTick(function(){
						//绑定滚动对象
						var domMore = Vue.loadXMLString('<div class="getmore">'+
								          '<span class="btnMore">查看更多</span>'+
								          '<span class="imgloading"><img src="../../../static/img/loading.gif">正在加载更多...</span>'+
								          '<span class="noMore">我也是有底线的...</span>'+
	        						  '</div>');
							e.childNodes[0].appendChild(domMore[0])
							var _dom = document.getElementsByClassName('getmore')[0];
							var _domBtnMore = document.getElementsByClassName('btnMore')[0];
							var _domImgLoading = document.getElementsByClassName('imgloading')[0];
							var _domNoMore = document.getElementsByClassName('noMore')[0];
							if(!_dom){
								return false;
							}
							_dom.style.display='none';
							if(vnode.context.dataP.length >= Vue.prototype.$pagesize){
								_dom.style.display='block';
								_domBtnMore.style.display = 'block';
							}else if(vnode.context.dataP.length>0){
								_dom.style.display='block';
								_domNoMore.style.display = 'block';
							}
							//绑定点击事件加载更多
							_domBtnMore.addEventListener('click',function(){
									_domNoMore.style.display="none";
									_domBtnMore.style.display="none";
					        		_domImgLoading.style.display="block";
						        	var d = Vue.prototype.$getData(vnode.context.path,vnode.context.more);
						        	if(d){
						        		d.then(function(res){
						        			var d = res.data
							        		if(d.code == '40001'){
							        			d.content.forEach(function(r,i){
							        				vnode.context.dataP.push(r)
							        				// data.value.push(r);
							        			});
							        			// Vue.prototype.$page += 1;
							        		if(d.content.length>=Vue.prototype.$pagesize){
											        setTimeout(function(){
										        		_domBtnMore.style.display="block";
											        	_domImgLoading.style.display="none";
											        	_domNoMore.style.display="none";
										        	},500)
							        		}else{
							        				setTimeout(function(){
										        		_domBtnMore.style.display="none";
											        	_domImgLoading.style.display="none";
											        	_domNoMore.style.display="block";
										        	},500)
							        			}
							        		}else{
							        				setTimeout(function(){
										        		_domBtnMore.style.display="none";
											        	_domImgLoading.style.display="none";
											        	_domNoMore.style.display="block";
										        	},500)
							        		}
						        		})
						        	}
							});
						// }
						//绑定触摸结束事件，判断是否满足加载更多条件
						Vue.prototype.$scroll.on('touchEnd', function(position) {
			            //判断拖动距离是否满足加载更多条件
			            if(position.y <  (this.maxScrollY - 30)){
						_domNoMore.style.display="none";
						_domBtnMore.style.display="none";
					    _domImgLoading.style.display="block";
				        if(vnode.context.path){
					        var d = Vue.prototype.$getData(vnode.context.path,vnode.context.more);
					        if(d){
					        	d.then(function(res){
					        		var d = res.data
					        		var m = data
					        		if(d.code == '40001'){
					        			d.content.forEach(function(r,i){
					        				vnode.context.dataP.push(r)
					        				// data.value.push(r);
					        			});
					        			Vue.prototype.$page += 1;
					        			if(d.content.length>=Vue.prototype.$pagesize){
											        setTimeout(function(){
										        		_domBtnMore.style.display="block";
											        	_domImgLoading.style.display="none";
											        	_domNoMore.style.display="none";
										        	},500)
							        			}else{
							        				setTimeout(function(){
										        		_domBtnMore.style.display="none";
											        	_domImgLoading.style.display="none";
											        	_domNoMore.style.display="block";
													},500)
					        			}
							        }else{
							        	setTimeout(function(){
										    _domBtnMore.style.display="none";
											_domImgLoading.style.display="none";
											_domNoMore.style.display="block";
										},500)
							        }
					        	})
					        }			        	
				        }else{
				        	console.log('获取数据地址不能为空')
				        }
			            }
			          });
					})					
				}
			},
			update(el, binding){
				Vue.nextTick(function(){
					if(Vue.prototype.$scroll){
						Vue.prototype.$scroll.refresh()
					}					
				})
			}
		})
		// 3. 注入组件
		Vue.mixin({
			created: function () {
			        // 逻辑...
			}
		});
		//4实例方法
		// Vue.prototype.$url = config.url;
		//域名
		// Vue.prototype.$domain = config.domain;
		Vue.prototype.$axios = axios;
		Vue.prototype.$scroll = "";
		//默认头像
		Vue.prototype.$tx = "../static/img/st/phb_1.png";
		//默认背景
		Vue.prototype.$photo = defaultImg;
		//分页参数
		Vue.prototype.$page = 2;
		Vue.prototype.$pagesize = 8;
		Vue.prototype.$pageInit = function(val){
			Vue.prototype.$page = 2;
		}
		Vue.prototype.$setPage = function(val){
			Vue.prototype.$page = 2;
		}
		Vue.prototype.$setPagesize = function(val){
			Vue.prototype.$pagesize = val;
		}
		//初始化滚动
		Vue.prototype.$initScroll = function(e){
			Vue.prototype.$scroll = new BScroll(e,{probeType:3,scrollY: true,bounce:true,click:true});
		}
		//隐藏getMore
		Vue.prototype.$hidGetMore = function(){
			var dom = document.getElementsByClassName('getmore')[0]
			if(dom){
				dom.style.display = 'none';
			}
		}
		//显示getMore
		Vue.prototype.$showGetMore = function(){
			var dom = document.getElementsByClassName('getmore')[0]
			if(dom){
				dom.style.display = 'block';
			}
		}
		//更改时间格式
		Vue.prototype.$GetDateDiff = function(DiffTime) {  
            //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
            DiffTime = DiffTime.replace(/\-/g, "/"); 
            return DiffTime;
		}
		//更改时间格式 xxxxxxxxxxx 更改为 xxxx-xx-xx xx:xx
		Vue.prototype.$getDate = function(date){
			var yy=date.substring(0,4);
			var mm=date.substring(4,6);
			var dd=date.substring(6,8);
			var hh=date.substring(8,10);
			var ff=date.substring(10,12);
			return yy+'-'+mm+'-'+dd+' '+hh+':'+ff;
		}
		// Vue.prototype.$this = Vue.prototype;
		//获取数据
		Vue.prototype.$getData = function(url,params){
			var rData;
			var _this = Vue.prototype
			if(url){
				var param =  Object.assign(_this.$getIdentity(),params)
				rData = new Promise(function(resolve){
					axios({
						method:'get',
						url:url+'?page='+_this.$page+'&pagesize='+_this.$pagesize,
						params:param
					}).then(function(res){
						resolve(res)
					});
				});			
			}
			return rData;
		};
		//获取数据通用
		Vue.prototype.$getDataApi = function(action,pars){
			const data = Object.assign({}, pars)
			return new Promise((resolve) => {
			  	axios({
			  		method: 'post',
			  		url: window.REQUEST_URL+action,
			  		params: data
			  	}).then((res) => {
			  		resolve(res)
			  	})
			})
		}
		//路由跳转
		Vue.prototype.$togo = function(path,data){
			var vm = this;
			if(path){
				//判断跳转路由or网络地址
				var routes = vm.$router.options.routes;
				var isRoute;
				for(var i=0;i<routes.length;i++){
					if(path.indexOf(routes[i].path)>-1){
						isRoute = true;
						vm.$router.push({'path':path,query:{data:data}});
						break;
					}
				}
				if(!isRoute){
					window.location.href = path;
				}
			}
		}
		//提示框
		Vue.prototype.$MessageBox = function(mes){
			MessageBox('提示', mes);
		}
		Vue.prototype.$Toast = function(mes){
			Toast({
			    message: mes,
			    duration: 2000,
			    position: 'bottom'
			}); 			
		}
		Vue.prototype.$Indicator = function(){
			Indicator.open(
				{	text:'提交中',
					spinnerType: 'fading-circle'
				});
		}
		Vue.prototype.$IndicatorClose = function(){
			// Indicator.close();
		}
		//获取身份信息
		Vue.prototype.$getIdentity = function(path,data){
			var userinfo = sessionStorage.getItem('userinfo');
			if(userinfo){
				return eval("(" + userinfo + ")");
			}else{
				alert("您的身份信息过期请从进！！！");
			}
		}
		//原生js 赠删class
		Vue.prototype.$delClass = function(e,cls){
			if(e.length){
		  		for(var i=0;i<e.length;i++){
		  			if (this.$hasClass(e[i],cls)) {  
				        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
				        e[i].className = e[i].className.replace(reg, ' ');  
		    		}
		  		}				
			}else{
				if (this.$hasClass(e,cls)) {  
				    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
				    e.className = e.className.replace(reg, ' ');  
		    	}
			}
  		}
	  	Vue.prototype.$hasClass = function(obj,cls){  
	  		var re;
	  		if(obj.className){
	  			re = obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	  		}
	    	return re;
		}
		Vue.prototype.$addClass = function(obj,cls){
		    if (!this.$hasClass(obj,cls)) obj.className += " " + cls;  
		}
		//判断数组是否包含某个元素
		Vue.prototype.$isInArray = function(arr,value){
			for(var i = 0; i < arr.length; i++){
		        if(value === arr[i]){
		            return true;
		        }
		    }
		    return false;
		}
		//图片适配方法
		Vue.prototype.$autoPic = function(e){
			var dom = e.currentTarget;
			var domParent = dom.parentNode;
			domParent.style.position = "relative";
			domParent.style.overflow = "hidden";
			var tpbl = dom.clientWidth/dom.clientHeight;
			var tpblParent = domParent.clientWidth/domParent.clientHeight;
			dom.style = "";
			if(tpbl> tpblParent){
				dom.style.position = "absolute";
				dom.style.height = "100%";
				dom.style.left = "50%";
				dom.style.transform = "translateX(-50%)";
			}
			else{
				dom.style.position = "absolute";
				dom.style.width = "100%";
				dom.style.top = "50%";
				dom.style.transform = "translateY(-50%)";
			}
		}
		//图片适配基于better-scroll的swpie
		Vue.prototype.$autoPicSwpie = function(e,path,index){
			var dom = e.currentTarget;
			var domParent = dom.parentNode;
			var domBorther = domParent.parentNode.childNodes;
			domParent.style.position = "relative";
			domParent.style.overflow = "hidden";
			var tpbl = dom.clientWidth/dom.clientHeight;
			var tpblParent = domParent.clientWidth/domParent.clientHeight;
			if(tpbl> tpblParent){
				dom.style.position = "absolute";
				dom.style.height = "100%";
				dom.style.left = "50%";
				dom.style.transform = "translateX(-50%)";
				if(index==0 || index==(domBorther.length-3)){
					domBorther[domBorther.length-1].style.position = "relative";
					domBorther[domBorther.length-1].style.overflow = "hidden";
					var d 
					if(index==0){
						d = domBorther[domBorther.length-1].getElementsByTagName('img')[0];
					}else if(index == (domBorther.length-3)){
						d = domBorther[0].getElementsByTagName('img')[0];
					}
					d.style.position = "absolute";
					d.style.height = "100%";
					d.style.left = "50%";
					d.style.transform = "translateX(-50%)";
				}
			}else{
				dom.style.position = "absolute";
				dom.style.width = "100%";
				dom.style.top = "50%";
				dom.style.transform = "translateY(-50%)";
				if(index==0 || index==(domBorther.length-3)){
					domBorther[domBorther.length-1].style.position = "relative";
					domBorther[domBorther.length-1].style.overflow = "hidden";
					var d 
					if(index==0){
						d = domBorther[domBorther.length-1].getElementsByTagName('img')[0];
					}else if(index == (domBorther.length-3)){
						d = domBorther[0].getElementsByTagName('img')[0];
					}
					d.style.position = "absolute";
					d.style.width = "100%";
					d.style.top = "50%";
					d.style.transform = "translateY(-50%)";
				}
			}
		}
		//图片适配方法
		Vue.prototype.$imgSp = function(dom,path,cls,lx){
			Vue.nextTick(function(){
			dom.style.position = "relative";
			dom.style.overflow = "hidden";
			// dom.style.width = '100%';
			// dom.style.height = '100%';
			//获取banner实际高宽比例
			var bl = dom.clientWidth/dom.clientHeight;
			// 图片地址
			var img_url = path?path:Vue.prototype.$tx;;
			// 创建对象
			var img = new Image();
			// 改变图片的src
			img.src = img_url;
			// 当为头像时
			if(lx=='tx'){
				//当图片地址无效时
				img.onerror=function(){
					img.src = Vue.prototype.$tx;
				}
			}else{
				img.onerror=function(){
					img.src = Vue.prototype.$photo
				}	
			}
			//判断是否已存在img节点
			if(cls){
				if(dom.getElementsByClassName(cls).length>0){
					dom.removeChild(dom.getElementsByClassName(cls)[0]);
				}
				img.className = cls;				
			}else{
				if(dom.getElementsByClassName('bannerImg').length>0){
					dom.removeChild(dom.getElementsByClassName('bannerImg')[0]);
				}
				img.className = "bannerImg";				
			}
			// 判断是否有缓存
			if(img.complete){
				// 获取图片比例
				var tpbl = img.width/img.height;
				//如果图片宽高比例大于banner,那么图片的宽度过宽
					if(tpbl >= bl){
						// img.setAttribute("style","display: block;position: absolute;height: 100%;top:0;left: 50%;transform: translate(-50%,0);z-index:1;");
						img.setAttribute("style","display: block;position: absolute;height: 100%;top:0;left: 50%;"+
							"transform: translate(-50%,0);"+
							 "-ms-transform: translate(-50%,0);"+
							 "-o-tranform: translate(-50%,0);"+
							 "-webkit-transform: translate(-50%,0);"+
							 "-moz-transform: translate(-50%,0);"+
							"z-index:0;");
						dom.appendChild(img);
					}else{
						img.setAttribute("style","display: block; position: absolute; width: 100%;top: 50%;left:0;"+
							"transform: translate(0,-50%);"+
							"-ms-transform: translate(0,-50%);"+
							 "-o-tranform: translate(0,-50%);"+
							 "-webkit-transform: translate(0,-50%);"+
							 "-moz-transform: translate(0,-50%);"+
							"z-index:0;");
						dom.appendChild(img);
					}
			}else{
				// 加载完成执行，获取图片比例
				img.onload = function(){
					var tpbl = img.width/img.height;
					//判断图片宽度是否比节点宽度宽
					if(tpbl >= bl){
						img.setAttribute("style","display: block;position: absolute;height: 100%;top:0;left: 50%;"+
							"transform: translate(-50%,0);"+
							"-ms-transform: translate(-50%,0);"+
							 "-o-tranform: translate(-50%,0);"+
							 "-webkit-transform: translate(-50%,0);"+
							 "-moz-transform: translate(-50%,0);"+
							"z-index:0;");
						dom.appendChild(img);
					}else{
						img.setAttribute("style","display: block; position: absolute; width: 100%;top: 50%;left:0;"+
							"transform: translate(0,-50%);"+
							"-ms-transform: translate(0,-50%);"+
							 "-o-tranform: translate(0,-50%);"+
							 "-webkit-transform: translate(0,-50%);"+
							 "-moz-transform: translate(0,-50%);"+
							"z-index:0;");
						dom.appendChild(img);
					}
				};
			}
			});
		}
	}
};
