const childProcess = require('child_process');

const ls = childProcess.exec('rm spawn.js', function (error, stdout, stderr) {
   if (error) {
     console.log(error.stack);
     console.log('Error code: '+error.code);
   }
   console.log('Child Process STDOUT: '+stdout);
});

//nodeJS 使用了exec对其进行很好的封装，而且他支持回调函数，这比较能够让我们理解
// https://segmentfault.com/a/1190000004621734