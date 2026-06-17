const http = require('http');
http.createServer((req,res)=>{
	res.writeHead(200);
	res.end("Hello from jenkin pipeline ! usman se242005")
}).listen(3000,=> console.log("app running on port 3000"));
