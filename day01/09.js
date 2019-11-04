// 获取文件路径
var path=require("path") 
// console.log(path.resolve('C:/Users/Rasin/Desktop/six/day01',"./aa"))
// console.log(path.normalize('C:/Users/Rasin/Desktop/six/day01'))
// console.log(path.isAbsolute('C:/Users/Rasin/Desktop/six/day01'))  //true  false
// console.log(path.join("/aa","/sss","/dd","//bb"))
// console.log(path.dirname('C:/Users/Rasin/Desktop/six/day01'))
// console.log(path.basename('C:/Users/Rasin/Desktop/six/day01'))
console.log(path.extname('C:/Users/Rasin/Desktop/six/day01/1.html'))
res.writeHead(200,{"Content-type":"text/html"})
// // 后端：
// res.setHeader("Access-Control-Allow-Origin","*")
// // 前端
// jsonp   get 
// cors    web安全  crsf
// 代理    proxy
// domain