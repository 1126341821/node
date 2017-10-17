const childProcess = require('child_process');
const worker = childProcess.fork('fork-work.js');

worker.on('message',function(mes){
    console.log(`from worker, message: ${mes}`);
});
worker.send("this is master");

fork其实也是用来执行进程，
比如,spawn("node",['app.js']),其实和fork('app.js') 是一样的效果的。
但是，fork牛逼的地方在于他在开启一个子进程时，同时建立了一个信息通道(双工的哦). 俩个进程之间使用process.on("message",fn)和process.send(...)进行信息的交流.

