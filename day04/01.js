var http=require("http")
var fs=require("fs")
var art=require("art-template")
http.createServer((req,res)=>{
     if(req.url=="/favicon.ico"){
		 return
	 }
    fs.readFile("./static/index.art",(err,data)=>{
		// 获取art-tem       plate模板
		var template=data.toString()   //buffer
		// render  模板   数据
		// 定义数据
		var list=["tom","jack","rose"]
		var htmlData=art.render(template,{a:list})
		console.log(htmlData)
		res.end(htmlData)
	})
}).listen(3000)