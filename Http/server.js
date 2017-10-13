var http = require('http');

http.createServer(function(request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {
		'Content-Type': 'text/html'
	});
	var index = '<!DOCTYPE html>' +
		'<html>' +
		'<head>' +
		'<meta charset="utf-8">' +
		'<title>你好nodejs</title>' +
		'</head>' +
		'<body>' +
		'node.js' +
		'</body>' +
		'</html>';
	// 发送响应数据 "Hello World"
	response.write(index);
	response.end();
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');