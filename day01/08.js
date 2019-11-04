var http = require("http")
var url = require("url")
http.createServer((req, res) => {
	//             协议   主机/域名  端口  ？search   # hash
	//   var result='http://localhost:3000/?username=232&age=232'
	//   var obj=url.parse(result,true)
	// var obj = url.format({
	// 	protocol: 'http:',
	// 	slashes: true,
	// 	auth: null,
	// 	host: 'localhost:3000',
	// 	port: '3000',
	// 	hostname: 'localhost',
	// 	hash: null,
	// 	search: '?userna me=232&password=232',
	// 	query: 'username=232&password=232',
	// 	pathname: '/',
	// 	path: '/?username=232&password=232',
	// 	href: 'http://localhost:3000/?username=232&password=232'
	// })
	// resove
	var obj=url.resolve("http://localhost:3000","/new")
	console.log(obj)
	res.end()
}).listen(3000)

