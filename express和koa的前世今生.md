### express 和 koa 的前世今生

#### 时间线

Express

- 2010 年 6 月，作者 TJ 开始编写 Express
- 2014 发展到 v0.12，基本成熟，移交给 StrongLoop
  Koa
- 2013 年 8 月， TJ 开始编写 Koa
- 2015 年 8 月，Koa 发布 v1.0.0 版本
  Node.js
- 2013 年 3 月，Node.js v0.12 发布
- 2014 年 12 月，io.js 不满 Node.js 的管理发起分裂
- 2015 年 2 月，Node.js v0.12 发布
- 2015 年 9 月，Node.js 与 io.js 合并为 Node.js v4.0

Koa 对 Node.js 的支持

- 2015 年 2 月，Koa 放弃对 Node v0.11 以下的支持，并开始支持 io.js
- 2015 年 10 月，Koa 放弃对 Node v4.0 以下的支持，并用 ES6 重写所有代码，发布 v2.0.0 内测版

#### Koa 对比 Express

编程模型不同

- Express 的中间件是线型的
- Koa 的中间件是 U 型的，也有人称为“洋葱模型”

对语言特性的使用不同

- Express 使用回调函数 next()
- Koa v1.x 使用 generator 语法
- Koa v2.x 使用 async/await 语法

所以 2011 - 2016 年，你大概率会使用 Express ，2017 年之后，你可能会使用 Koa
