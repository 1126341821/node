var fs = require("fs");
var http = require('http');
// http://blog.csdn.net/sam976/article/details/52124636
// 方法1：利用 Express 托管静态文件，详情查看这里
// 方法2：使用fs模块提供的readFile方法打开文件，让其以text/html的形式输出。
function detail(response) {
	fs.readFile('./index.html', 'utf-8', function(err, data) { //读取内容
		if(err) {
			console.log(err);
			//404：NOT FOUND
			response.writeHead(404, {
				"Content-Type": "text/html"
			});
		} else {
			response.setHeader('content-type', 'text/html;charset=utf-8');
			response.writeHead(200, {
				"Content-Type": "text/html"
			});
			response.write(data.toString());
			response.end();
		}

	});
}

http.createServer(function(request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	detail(response);
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');