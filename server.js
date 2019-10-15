var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
  console.log("请指定端口号 例如 node server.js 8888");
  process.exit(1);
}

var server = http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  console.log("查询字符串的路径:" + pathWithQuery);

  if (path === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`
      <!DOCTYPE html>
      <head>
        <link rel="stylesheet" href="/style.css">
      </head>

      <body>
         <h1>Hello World</h1>
        
      </body>
    `);
    response.end();
  } else if (path === "/style.css") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/css;charset=utf-8");
    response.write(`
        body{background-color: #ddd;}
        h1{color: red}
    `);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write("文件不存在");
    response.end();
  }
});

server.listen(port);
