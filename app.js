const http = require('http');
http.createServer((req,res)=>{
	res.writeHead(200);
	res.end("automatic build now trigger ! usman se242005");
}).listen(3000, () => console.log("app running on port 3000"));
