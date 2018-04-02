// 简单模拟实现用户评论
var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content': '一起期待下一期的课程',
    'mid': 8837
})

var options = {
    hostmane: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers:{
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'PHPSESSID=b0jom5suk920mnrulupcp5u1q7; imooc_uuid=9bd9a534-b3df-4dd0-9750-fd078f2d58b9; imooc_isnew=1; imooc_isnew_ct=1522671968; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1522671970; IMCDNS=0; loginstate=1; apsid=QwZWI4N2Y3ZDFhOWZmOWQzNDcyZWU2OGY4MGRmYTkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTExNDg2MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxOTAyMTY4ODA0QHFxLmNvbQAAAAAAAAAAAAAAAAAAADE0ODlhODc4NWRlZDcyNGVhNjg3M2FhNDk2OThiOTBjaCHCWlz3FVg%3DZj; last_login_username=1902168804%40qq.com; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1522679329; cvde=5ac22160b0847-50',
        'Host': 'www.imooc.com',
        'Origin': 'https://www.imooc.com',
        'Referer': 'https://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req =http.request(options, function(res) {
    console.log('Status: ' + res.statusCode)
    console.log('headers: '+ JSON.stringify(res.headers))

    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })

    res.on('end', function() {
        console.log('评论完毕！')
    })

})
req.on('error', function(e) {
    console.log('Error: ' + e.message)
})
req.write(postData)
req.end()