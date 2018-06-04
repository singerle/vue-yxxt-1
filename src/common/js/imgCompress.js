/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-02 18:41:11
 * @version $Id$
 */
export default class imgCompress {
	constructor({}) {
    }
    //创建和压缩图片
    createImage(file) {
      var vm = this;
      var reader = null;
      reader = new window.FileReader();
      reader.readAsDataURL(file);
      return new Promise(function(resolve) {
        reader.onload = function(e) {
          vm.picIsLoaded(e.target.result,function(){
            //压缩图片
            var img = vm.compress(this, file.size, '');
            //存储base64图片 img标签展示
            var imgfile = vm.base64ToFile(img);
            // 存储blob图片文件
            resolve({imgfile,img});
          });
        }
      })
    }
    //图片压缩
    // 参数:
    //  quality-图片大小
    //  source_img_obj-图片对象
    //  output_format-压缩对象格式
    compress(source_img_obj, quality, output_format) {
      var mime_type = "image/jpeg";
      if (output_format != undefined && output_format == "png") {
        mime_type = "image/png";
      }
      var cvs = document.createElement('canvas');
      cvs.width = source_img_obj.width
      cvs.height = source_img_obj.height
      var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0);
      //canvas压缩图片生成base64图片流
      var newImageData = cvs.toDataURL(mime_type, .2);
      return newImageData;
    }
    //base64转file
    base64ToFile(urlData) {
      var bytes = window.atob(urlData.split(',')[1]);
      //处理异常,将ascii码小于0的转换为大于0  
      var ab = new ArrayBuffer(bytes.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob([ab], { type: 'image/png' });
    }
    //判断图片是否已经缓存或者加载完毕
    picIsLoaded(url,callback){
      var img = new Image(); //创建一个Image对象，实现图片的预下载  
      img.src = url;  
      if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数  
          callback.call(img);  
         return; // 直接返回，不用再处理onload事件  
      }  
      img.onload = function () { //图片下载完毕时异步调用callback函数。  
          callback.call(img);//将回调函数的this替换为Image对象  
      };  
    }
 }
 export function createImgCompress() {
  return new imgCompress({});
}
