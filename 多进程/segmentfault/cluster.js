var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
	for(var i = 0; i < numCPUs; i++) {
		cluster.fork(); // 开启联机app.js
	}
	// 打印出工作的信息
	cluster.on('listening', function(worker, address) {
		console.log('[master] ' + 'listening: worker' + worker.id + ',pid:' + worker.process.pid + ', Address:' + address.address + ":" + address.port);
	});

} else if(cluster.isWorker) {
	require('./app.js');
}