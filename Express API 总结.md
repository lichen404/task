## Express API 总结

### 概念

- 子应用
  const app = express() //主应用
  const admin = express() //另一个应用
  app.use('/admin',admin) //admin 作子应用
- 挂载点
  '/admin' 就是 admin 的挂载点

### express.xxx

- express.json() // 将请求的 body 解析成 JSON 格式
- express.static() //提供静态服务器
- express.Router() //提供路由功能

### app.xxx

- app.set('views'|'view engine',xxx) //给应用添加配置，需要放在 use 之前
- app.get('env') //获取应用的配置
- app.get('/xxx',fn) //处理 get 请求
- app.render() //返回渲染引擎处理过的 HTML
- app.use() // 设置 path 要对应的中间件

### request.xxx

- req.app //获取全局的 app 变量
- req.get('Content-Type') //获取 request 的 Content-Type
- req.params() //获取路由上设置的参数,如 /users/:id
- req.param() //获取路由上设置的参数或者 query 上的参数
- req.range() // 分片请求，参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Range_requests)

### response.xxx

- res.app // 获取全局的 app 变量
- res.headersSent()
- res.set() //设置返回的 response header
- res.append() //添加返回的 response header
- res.format() //根据请求的 Content-Type 返回不同的内容
- res.render() //渲染模版
- res.send() //一次性 发送 HTTP response
- res.write() //流式写入 response body，不能和 res.send 一起使用

### router.xxx

- 一个小型的 app ，主要提供子路由功能
