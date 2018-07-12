var http = require('http');
var url = require('url');
// 创建服务器
http.createServer(function (request, response) {
    var d = request.url;
    var para = d.substring(d.indexOf("?") +1);
    var params = para.split("=");
    var queryParams = {};
    console.log(d);
    var data = {
        status: "success",
        data: [
            {
                name: "项目1",
                process: 0.5
            },
            {
                name: "项目2",
                process: 0.6
            },
            {
                name: "项目3",
                process: 1
            },
            {
                name: "项目4",
                process: 0.89
            },
            {
                name: "项目5",
                process: 0.58
            },
            {
                name: "项目6",
                process: 0.95
            }
        ]
    }
    response.setHeader("Access-Control-Allow-Origin","*");
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(data));
    response.end();
}).listen(8081);
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');