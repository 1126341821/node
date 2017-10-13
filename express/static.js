var express = require('express');
var app = express();
 
app.use(express.static('public'));
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
	// 发送响应数据 
app.get('/', function (req, res) {
   res.send(index);
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})