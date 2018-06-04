/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-21 09:49:42
 * @version $Id$
 */

import { getDataApi } from './getDataApi'

export const getComInfoList = (params) => {
    return getDataApi('school/qygl/qysqlb/list', params)
}
//企业详情
export const getDwXq = (params) => {
	return getDataApi('school/qygl/qyxq/map', params)
}
//企业审核
export const spqy = (params) => {
	return getDataApi('school/qygl/spqy', params)
}

//岗位列表
export const getGwList = (params) => {
	return getDataApi('school/qygl/gwsqlb/list', params)
}
//岗位审核
export const shgw = (params) => {
	return getDataApi('school/qygl/spgw', params)
}
//查看岗位详情
export const getGwxq = (params) => {
	return getDataApi('school/qygl/gwxq/list', params)
}


//我的企业列表
export const getWdQyList = (params) => {
	return getDataApi('school/qygl/qylb/list', params)
}
export const getWdQyGwList = (params) => {
	return getDataApi('school/gwgl/gwlb/list', params)
}
//新增企业
export const addqy = (params) => {
	return getDataApi('school/qygl/xzqy', params)
}
//删除企业
export const delqy = (params) => {
	return getDataApi('school/qygl/scqy', params)
}

//删除岗位
export const delgw = (params) => {
	return getDataApi('school/gwgl/scgw', params)
}
//添加&编辑岗位
export const edtgw = (params) => {
	return getDataApi('school/qygl/tjgw', params)
}