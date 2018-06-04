/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-25 16:24:26
 * @version $Id$
 */
import { getDataApi } from './getDataApi'

//宣讲会
//宣讲会-列表
export const getXjhList = (params) => {
    return getDataApi('school/xjh/xjhlb/list', params)
}
//创建宣讲会&编辑宣讲会
export const createXjh = (params) => {
    return getDataApi('school/xjh/cjxjh', params)
}

//宣讲会-开始宣讲会
export const start = (params) => {
    return getDataApi('school/xjh/ksxjh', params)
}
//宣讲会-终止双选会
export const stop = (params) => {
    return getDataApi('school/xjh/jsxjh', params)
}
//宣讲会-删除双选会
export const delXjh = (params) => {
    return getDataApi('school/xjh/scxjh', params)
}
//宣讲会-宣讲会详情
export const getXjhXq = (params) => {
    return getDataApi('school/xjh/ckxjh/map', params)
}
//宣讲会-搜索企业
export const getQyList = (params) => {
    return getDataApi('school/xjh/ssqy/list', params)
}
//安排会场
export const aphc = (params) => {
    return getDataApi('school/xjh/szhc', params)
}


//宣讲会审核
export const xjhSh = (params) => {
    return getDataApi('school/xjh/spxjh', params)
}
//宣讲会审核-列表
export const xjhSh_list = (params) => {
    return getDataApi('school/xjh/xjhsqlb/list', params)
}
//宣讲会审核-岗位审核
export const xjhSh_gwsh = (params) => {
    return getDataApi('school/xjh/spxjhgw', params)
}
//宣讲会审核-搜索宣讲会
export const xjhSh_sslist = (params) => {
    return getDataApi('school/xjh/ssxjhsq/list', params)
}
