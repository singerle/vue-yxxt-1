/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-12 16:04:52
 * @version $Id$
 */
import axios from 'axios'

function getData(path, p){
    return new Promise((resolve) => {
        axios({
          url: window.REQUEST_URL + path,
          method: 'post',
          params: p
        }).then((res) => {
           resolve(res.data)
        })        
    })
}
//获取性质码表
export function getGzxzCode(){
  return getData('common/zwxz/list')
}
//获取行业码表
export function getHyCode(){
  return getData('common/zwlb/list')
    }
//获取职业码表
export function getZyCode(hybh){
  return getData('common/zw/list',{zwlbbh: hybh})  
}
//获取月薪码表
export function getYxCode(){
  return getData('common/zwyx/list')      
}
//获取教育类型
export function getJylxCode(){
  return getData('common/sjylx/list')      
}
//获取学历代码
export function getXlCode(){
  return getData('common/xllb/list')      
}
//获取熟练度代码
export function getSldCode(){
  return getData('common/jnsld/list')      
}
//获取家庭关系代码
export function getJtgxCode(){
  return getData('common/qsgx/list')      
}