//app.js就是开启具体的业务逻辑了

//app.js具体内容
const net = require('net');
//自动创建socket
const server = net.createServer(function(socket) { //'connection' listener
    socket.on('end', function() {
        console.log('server disconnected');
    });
    socket.on('data', function() {
        socket.end('hello\r\n');
    });
});
//开启端口的监听
server.listen(8124, function() { //'listening' listener
    console.log('working')
});