// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
//
eventEmitter.on('connection', connectHandler);
// 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
// 调用两次connection，也只执行一次
// eventEmitter.once('connection', connectHandler);
// 使用匿名函数绑定 data_received 事件
// 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
// 为指定事件添加一个监听器到监听器数组的尾部。
//eventEmitter.addListener('data_received', function(){
//	console.log("addListener")
//});
eventEmitter.removeListener('data_received', function(){
   console.log('removeListener');
})
// 触发 connection 事件 
eventEmitter.emit('connection');
console.log("程序执行完毕。");