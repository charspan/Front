// nodejs http源码解读
var http = require('http')

http
    .createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello Nodejs')
        res.end()
    })
    .listen(2018)

    // 性能测试
    // ab -n1000 -c10 http://localhost:2018/git 