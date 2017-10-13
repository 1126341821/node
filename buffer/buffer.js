//JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
//但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
//在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
var buf = new Buffer(10);
console.log(buf);
var buf = new Buffer([10, 20, 30, 40, 50]);
console.log(buf);
var buf = new Buffer("www.runoob.com", "utf-8");
console.log(buf);
// 写入
buf = new Buffer(256);
len = buf.write("tarere",3,4);

console.log("写入字节数 : "+  len);
// 读取
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//将 Buffer 转换为 JSON 对象
var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);

console.log(json);//[ 119, 119, 119, 46, 114, 117, 110, 111, 111, 98, 46, 99, 111, 109 ]

// 缓冲区合并

var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());//buffer3 内容: 菜鸟教程 www.runoob.com
// 缓冲区比较

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABC');
var result = buffer1.compare(buffer2);
console.log(result);
