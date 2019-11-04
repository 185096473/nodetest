var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return 
	}
   var obj=url.parse(req.url,true).query
   console.log(obj.username)
   res.end()
}).listen(3000)