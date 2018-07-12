var http = require('http');

// 用于请求的选项
var options = {
   host: 'cn.bing.com',
   port: '80',
   path: '/'  
};

// 处理响应的回调函数
var callback = function(response){
   // 不断更新数据
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   response.on('end', function() {
      // 数据接收完成
      console.log(response);
      console.log(response.body);
      //console.log(body);
   });
   response.on("error",function(){

   });
};
// 向服务端发送请求
var req = http.request(options, callback);
req.end();

