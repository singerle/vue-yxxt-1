//test

export const SET_sxhID = ({commit},val) => {
    commit('SET_sxhID',val)
}
export const SET_wdsxhList = ({commit},val) => {
    commit('SET_wdsxhList',val)
}
export const updata_wdSxhSfpj = ({commit},val) =>{
	 commit('updata_wdSxhSfpj',val)
}
export const SET_xjhID = ({commit},val) => {
    commit('SET_xjhID',val)
}
export const SET_gwID = ({commit},val) => {
    commit('SET_gwID',val)
}
export const SET_qyID = ({commit},val) => {
    commit('SET_qyID',val)
}

export const SET_MyInfo = ({commit},val) => {
    commit('SET_MyInfo',val)
}
export const update_MyInfo = ({commit},val) => {
    commit('update_MyInfo',val)
}
//我的收藏
export const SET_wdscList = ({commit},val) => {
    commit('SET_wdscList',val)
}
export const del_wdscList = ({commit},val) => {
    commit('del_wdscList',val)
}
//我的点赞
export const SET_wddzList = ({commit},val) => {
    commit('SET_wddzList',val)
}
export const del_wddzList = ({commit},val) => {
    commit('del_wddzList',val)
}
//简历列表
export const SET_jlList = ({commit},val) => {
    commit('SET_jlList', val)
}
//删除简历
export const SET_delJl = ({commit},val) => {
    commit('SET_delJl', val)
}
//编辑简历
export const SET_edtJlsj = ({commit},val) => {
    new Promise((resolve) => {
        commit('SET_edtJlsj', val)
        resolve()
    })
}
//初始化数据
export const SET_initJlsj = ({commit},val) => {
    commit('SET_initJlsj', val)
}
//添加简历模块
// export const SET_addJl = ({commit},val) => {
//     commit('SET_addJl', val)
// }
//添加简历籍贯SET_addJlJg
export const SET_addJlJg = ({commit},val) => {
    commit('SET_addJlJg', val)
}

export const SET_addJlbcsj = ({commit},val) => {
    return new Promise((resolve) => {
        commit('SET_addJlbcsj', val)
        resolve()
    })
}
export const initMap = ({commit},val) => {
    commit('initMap', val)
}
//

//简历模块是否保存
// export const getKeySFBC = ({commit},val) => {
//     var s,key
//     console.log(val)
//     for(var key in state.addJlbcsj){
//         if(!state.addJlbcsj[key]){
//             s = false
//             break
//         }
//     }
//     return s
// }

