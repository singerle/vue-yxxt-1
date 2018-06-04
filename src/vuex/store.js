import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    //双选会id
    sxhID: '',
    //宣讲会id
    xjhID: '',
    //岗位id
    gwID: '',
    //企业ID
    qyID: '',
    //我的信息
    myInfo: {},
    wdsxhList: [],
    //我的收藏
    wdscList: [],
    //我的点赞
    wddzList: {
        sxh: [],
        xjh: []
    },
    //简历列表
    jlList: [],
    addJl: {
            "jlxx": {"jlmc": ""},
            "tx": {"xszp": ""},
            "grxx": {"xjzcs":"","xsxm":"","xb":'',"jg":"","sr":""},
            "lxfs": {"lxdh":"","dzyj":""},
            "zwpj": {"zwpj":""},
            "jyjl": [],
            "qzyx": {"qwyx":"","mqzk":"","qwgzcs":"","zwlbmc":"","zwmc":"","zzxzmc":"","qwcshy":"","qwgzjl":"","qwcszy":""},
            "sxjl": [{"jssj":"","gsmc":"","hylb": "","gzlx":"","lxmc":"","hymc":"" ,"zwmc":"","kssj":""}],
            "xmjy": [{"jssj":"","xmmc":"","kssj":"","zwmc":""}],
            "jcjl": [],
            "zgzs": {"zgzsms": ""},
            "jntc":[{"tcmc":"","tcsld":""}],
            "jtgx":[],
            "sfmr":{"mrbj": ""}
        },
    //添加简历籍贯
    addJlbcsj: {}
    }

// 定义所需的 mutations
const mutations = {
    SET_sxhID(val,stus){
        state.sxhID = stus;
    },
    SET_wdsxhList(val,stus){
        // 变异函数
        state.wdsxhList = state.wdsxhList.concat(stus);
        //非变异函数
        // state.wdsxhList = stus
    },
    //修改状态
    updata_wdSxhSfpj(val, stus){
        const sxhlist = state.wdsxhList;
        for(var i=0;i<sxhlist.length;i++){
            if(sxhlist[i].sxhbh === stus.sxhbh){
                Vue.set(state.wdsxhList[i], 'sfpj', 'true');
            }
        }
    },
    //添加对象
    add_wdsxhObj(val,stus){
        
    },
    Set_xjhID(val,stus){
        state.xjhID =  stus;
    },
    SET_gwID(val,stus){
    	state.gwID = stus;
    },
    SET_qyID(val,stus){
        state.qyID = stus;
    },
    //我的信息
    SET_MyInfo(val,stus){
        state.myInfo = stus;
    },
    update_MyInfo(val,stus){
        state.myInfo = Object.assign(state.myInfo, stus);
    },
    //我的收藏
    SET_wdscList(val,stus){
        if(stus.lx=='fz'){
            state.wdscList = stus.arr;
        }else{
            state.wdscList = state.wdscList.concat(stus.arr);
        }
    },
    del_wdscList(val,stus){
        for(var i=0;i<state.wdscList.length;i++){
            if(state.wdscList[i].zpzwbh == stus){
                state.wdscList.splice(i,1);
            }
        }
    },
    //我的点赞
    SET_wddzList(val,stus){
        if(stus.type == 1){
            if(stus.lx=='fz'){
                state.wddzList.sxh = stus.arr;
                return false;
            }
            state.wddzList.sxh = state.wddzList.sxh.concat(stus.arr);
        }else if(stus.type == 2){
            if(stus.lx=='fz'){
                state.wddzList.xjh = stus.arr;
                return false;
            }
            state.wddzList.xjh = state.wddzList.xjh.concat(stus.arr);
        }
    },
    del_wddzList(val,stus){
        if(stus.type == 1){
            var sxhArr = state.wddzList.sxh;
           for(var i=0;i<sxhArr.length;i++){
                if(sxhArr[i].zpzwbh == stus.zhid){
                    sxhArr.splice(i,1);
                }
            } 
        }else if(stus.type == 2){
            var xjhArr = state.wddzList.xjh;
           for(var i=0;i<xjhArr.length;i++){
                if(xjhArr[i].zpzwbh == stus.zhid){
                    xjhArr.splice(i,1);
                }
            }
        }
    },
    //简历列表
    SET_jlList(val, stus){
        state.jlList = stus?stus:[]
    },
    SET_delJl(val, stus){
        state.jlList.splice(stus,1)
    },
    //编辑
    SET_edtJlsj(val,stus){
            for(var key in state.addJl){
               if(state.addJl[key] && stus[key]!=undefined){
                 if(state.addJl[key] instanceof Array){
                     state.addJl[key] = stus[key] 
                  }else{
                     for(var key1 in state.addJl[key]){
                        if(stus[key].length>0 && stus[key][0][key1]!=undefined){
                            state.addJl[key][key1] = stus[key][0][key1]
                        }
                     }                    
                 }
               }else if(key == 'tx' || key == 'jlxx' || key == 'sfmr'){
                for(var k in state.addJl[key])
                    state.addJl[key][k] = stus['grxx'][0][k]
               }
            }
            Vue.set(state,'addJlbcsj',state.addJl)
    },
    //初始化数据
    SET_initJlsj(val, stus){
        state.addJlbcsj = {}
        var jl = state.addJl
        for(var key in jl){
            if(jl[key] instanceof Array){
                jl[key] = []
            }else{
                for(var k in jl[key]){
                    jl[key][k] = ''
                }
            }
        }
    },
    // SET_addJl(val, stus){
    //     if(state.addJl[stus.key]){
    //         state.addJl = Object.assign(state.addJl,stus.content)
    //     }else{
    //         Vue.set(state.addJl,stus.key,stus.content)
    //     }
    // },

    SET_addJlJg(val, stus){
        if(state.addJl[stus.key]){
            if(state.addJl[stus.key] instanceof Array && stus.content){
                state.addJl[stus.key] = []
                stus.content.forEach((r,i) => {
                    state.addJl[stus.key].push(r)
                })                    
            }else{
                state.addJl[stus.key] = Object.assign(state.addJl[stus.key],stus.content)                
            }
        }else{
            Vue.set(state.addJl,stus.key,stus.content)
        }
    },
    SET_addJlJgArr(val,stus){
        if(state.addJl[stus.key]){
           state.addJl[stus.key].push(stus.content)
        }else{
           var arr = []
           arr.push(stus.content)
           Vue.set(state.addJl,stus.key,arr)
        }
    },
    SET_delJlJgArr(val, stus){
        state.addJl[stus.key].splice(stus.index,1)
    },
    SET_updateJlJgArr(val,stus){
        const bcsj = state.addJl[stus.key][stus.index]
        for(var key in bcsj){
            bcsj[key] = stus.content[key]
        }
    },

    SET_addJlbcsj(val,stus){
        Vue.set(state.addJlbcsj,stus.key,stus.content)
    },
    SET_addJlbcsjArr(val,stus){
        if(state.addJlbcsj[stus.key]){
           state.addJlbcsj[stus.key].push(stus.content)
        }else{
           var arr = []
           arr.push(stus.content)
           Vue.set(state.addJlbcsj,stus.key,arr)
        }
    },
    SET_delJlbcsjArr(val, stus){
        state.addJlbcsj[stus.key].splice(stus.index,1)
    },
    initMap(val,stus){
        for(var key in state.addJl[stus]){
            state.addJl[stus][key] = ''
        }
    },
    SET_updateJlbcsjArr(val,stus){
        const bcsj = state.addJlbcsj[stus.key][stus.index]
        for(var key in bcsj){
            bcsj[key] = stus.content[key]
        }
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})