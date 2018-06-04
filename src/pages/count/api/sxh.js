/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-09 09:59:18
 * @version $Id$
 */
import { getDataApi } from './getDataApi'

//获取双选会列表
export const getSxhList = ( params) => {
    return getDataApi('school/sxh/sxhlb/list', params)
}

//创建双选会
export const createSxh = ( params) => {
    return getDataApi('school/sxh/cjsxh', params)
}
//获取场地列表
export const getCdList = ( params) => {
    return getDataApi('school/sxh/hclb', params)
}
//结束双选会
export const stopSxh = ( params) => {
    return getDataApi('school/sxh/jssxh', params)
}
//撤销双选会
export const cxSxh = ( params) => {
    return getDataApi('school/sxh/cxsxh', params)
}
//开始双选会
export const startSxh = ( params) => {
    return getDataApi('school/sxh/kssxh', params)
}
//双选会详情
export const getSxhXq = (params) => {
	return getDataApi('school/sxh/sxhxq/list', params)
}

// 企业管理
//双选会企业列表
export const getSxhQyList = (params) => {
	return getDataApi('school/sxh/chqy/list', params)
}
//双选会企业 - 一键安排展位
export const sxhQy_yjap = (params) => {
	return getDataApi('school/sxh/yjapzw', params)
}
//双选会企业 - 安排展位
export const sxhQy_apzw = (params) => {
	return getDataApi('school/sxh/apzw', params)
}
//双选会企业 - 审核
export const sxhQy_sh = (params) => {
	return getDataApi('school/sxh/qygl', params)
}
//双选会企业 - 查看企业信息
export const sxhQy_qyxx = (params) => {
	return getDataApi('school/sxh/qyxx/map', params)
}
//双选会企业 - 审核岗位
export const sxhQy_gwsh = (params) => {
	return getDataApi('school/sxh/gwsh', params)
}
//双选会企业 - 添加企业
export const sxhQy_addqy = (params) => {
	return getDataApi('school/sxh/tjsxhqy', params)
}
//双选会企业 - 企业列表
export const sxhQy_qyList= (params) => {
	return getDataApi('school/sxh/qylb/list', params)
}
//双选会企业 - 企业岗位列表
export const sxhQy_qygwList = (params) => {
	return getDataApi('school/sxh/qygw/list', params)
}
//双选会企业 - 搜索企业列表
export const sxhQy_qyssList = (params) => {
	return getDataApi('school/sxh/ssqy/list', params)
}
//双选会企业 - 获取双选会展位信息
export const sxhQy_sxhZwxx = (params) => {
	return getDataApi('school/sxh/zwxx/map', params)
}

//双选会审核
//双选会审核 - 双选会列表
export const sxhsh_sxhList = (params) => {
	return getDataApi('school/sxh/sxhsqlb/list', params)
}
//双选会审核 - 审核
export const sxhsh_sh = (params) => {
	return getDataApi('school/sxh/spsxh', params)
}
//双选会审核 - 搜索双选会
export const sxhsh_ssList = (params) => {
	return getDataApi('school/sxh/sxhsqlb/list', params)
}



//评价列表
export const getPjList = (params) => {
    return getDataApi('school/sxh/ckpj/list', params)
}

//搜索评论列表
export const getSouPjList = (params) => {
    return getDataApi('school/sxh/sspj/list', params)
}

//删除评价
export const delPj = (params) => {
    return getDataApi('school/sxh/scpj', params)
}

//评价详情
export const pjxq = (params) => {
    return getDataApi('school/sxh/pjxq/list', params)
}