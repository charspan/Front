var a = 1; var b = 2; var add = function(a , b){return a + b;}; add(a , b);

process

// http://nodejs.cn/api/url.html

url.parse('http://www.imooc.com:8080/video/6710?from=ss&course=node#floor')
Url {
  protocol: 'http:', // 协议
  slashes: true, // 有协议的双斜线//
  auth: null,
  host: 'www.imooc.com:8080', // 域名 或 ip
  port: 8080, //端口 默认80不显示
  hostname: 'www.imooc.com', // 主机名
  hash: '#floor', // 锚点
  search: '?from=ss&course=node', // 查询字符串参数
  query: 'from=ss&course=node', // 发送的数据
  pathname: '/video/6710', // 资源路径
  path: '/video/6710', // 路径
  href: 'http://www.imooc.com:8080/video/6710?from=ss&course=node#floor' }

url.format(
  {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com:8080',
  port: '8080',
  hostname: 'www.imooc.com',
  hash: '#floor',
  search: '?from=ss&course=node',
  query: 'from=ss&course=node',
  pathname: '/video/6710',
  path: '/video/6710?from=ss&course=node',
  href: 'http://www.imooc.com:8080/video/6710?from=ss&course=node#floor' })


// http://nodejs.cn/api/querystring.html


querystring.escape('哈哈')


querystring.unescape('%E5%93%88%E5%93%88')


