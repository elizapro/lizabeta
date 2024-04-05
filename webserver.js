var http = require('http'); 

// 서버 생성
var server = http.createServer(function(request,response){ 
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Hello node.js!!');
});

// 8080 실행
server.listen(8080, function(){ 
    console.log('Server is running...');
});