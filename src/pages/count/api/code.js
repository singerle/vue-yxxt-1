/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-29 11:54:44
 * @version $Id$
 */
import { getDataApi } from './getDataApi'

//获取企业性质列表
export const getQyxzList = (params) => {
    return getDataApi('common/dwxz/list', params)
}
//获取行业列表
export const getHyList = (params) => {
    return getDataApi('common/dwhy/list', params)
}
//获取规模列表
export const getGmList = (params) => {
    return getDataApi('common/dwgm/list', params)
}

//职位性质列表
export const getZwxzList = (params) => {
    return getDataApi('common/zwxz/list', params)
}
//职位类别
export const getZwlbList = (params) => {
    return getDataApi('common/zwlb/list', params)
}
//获取学历要求
export const getXlList = (params) => {
    return getDataApi('common/xlyq/list', params)
}
//获取工作年限
export const getGznxList = (params) => {
    return getDataApi('common/gznx/list', params)
}
//获取职位月薪
export const getZwyxList = (params) => {
    return getDataApi('common/zwyx/list', params)
}
//获取专业大类
export const getZyList = (params) => {
    return getDataApi('common/zydl/list', params)
}