/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-21 14:58:27
 * @version $Id$
 */

import { getDataApi } from './getDataApi'

//海报
export const getHbList = (params) => {
    return getDataApi('manage/blsz/bllb/map', params)
}
//创建海报
export const createHb = (params) => {
    return getDataApi('manage/blsz/xjbl', params)
}
//创建海报-搜索 
export const createdSsHb = (params) => {
    return getDataApi('manage/blsz/sszh/list', params)
}
//下架&上架
export const xjHb = (params) => {
    return getDataApi('manage/blsz/blcz', params)
}
//删除海报
export const delHb = (params) => {
    return getDataApi('manage/blsz/scbl', params)
}
//搜索
export const ssHb = (params) => {
    return getDataApi('manage/blsz/blss/list', params)
}
//展会列表
export const zhList = (params) => {
    return getDataApi('manage/blsz/zhlb/list', params)
}
//搜索展会
export const sszh = (params) => {
    return getDataApi('manage/blsz/sszh/list', params)
}
//编辑保存
export const bjbc = (params) => {
    return getDataApi('manage/blsz/xgbl', params)
}


//推荐
export const getSxhList = (params) => {
    return getDataApi('manage/tjsz/sxhlb/list', params)
}
export const getXjhList = (params) => {
    return getDataApi('manage/tjsz/xjhlb/list', params)
}
export const sztj = (params) => {
    return getDataApi('manage/tjsz/sxhsz', params)
}
export const xjhsztj = (params) => {
    return getDataApi('manage/tjsz/xjhsz', params)
}
//搜索双选会列表
export const sssxhlb = (params) => {
    return getDataApi('manage/tjsz/sssxhlb/list', params)
}
//搜索宣讲会列表
export const ssxjhlb = (params) => {
    return getDataApi('manage/tjsz/ssxjhlb/list', params)
}
//按时间赛选双选会
export const sxsxh = (params) => {
    return getDataApi('manage/tjsz/sxsxhlb/list', params)
}
//按时间赛选宣讲会
export const sxxjh = (params) => {
    return getDataApi('manage/tjsz/sxxjhlb/list', params)
}

//评价
export const getPjSxhList = (params) => {
    return getDataApi('manage/pjsz/pjzblb/list', params)
}
export const addZb = (params) => {
    return getDataApi('manage/pjsz/tjpjzb', params)
}
export const bjZb = (params) => {
    return getDataApi('manage/pjsz/bjpjzb', params)
}
export const delZb = (params) => {
    return getDataApi('manage/pjsz/scpjzb', params)
}
//场地
export const getCdList = (params) => {
    return getDataApi('manage/cdsz/cdlb/list', params)
}
export const addCd = (params) => {
    return getDataApi('manage/cdsz/tjcd', params)
}
export const bjCd = (params) => {
    return getDataApi('manage/cdsz/cdbj', params)
}
export const delCd = (params) => {
    return getDataApi('manage/cdsz/sccd', params)
}
//展位
export const getZwList = (params) => {
    return getDataApi('manage/zwsz/zwlb/list', params)
}
export const addZw = (params) => {
    return getDataApi('manage/zwsz/tjzw', params)
}
export const bjZw = (params) => {
    return getDataApi('manage/zwsz/bjzw', params)
}
export const delZw = (params) => {
    return getDataApi('manage/zwsz/sczw', params)
}
//获取场地分组列表

export const getCdfzList = (params) => {
    return getDataApi('manage/zwsz/cdfz/list', params)
}