#  app4请求app3的服务器

## 通过koa-server-http-proxy组件
- 将请求http://localhost:9999/api/getPhotos替换为http://localhost:7777/getPhotos

## 用户登录验证
- js获取登录用户密码后通过ajax传输到api/login路由
- koa-body组件          ctx.request.body方法获取传送过来的用户密码信息
- mysql2/promise组件    获取数据库中信息判断是否有改用户   
- jsonwebtoken组件      让后端将加密后的信息配置到请求头(Authorization 用于验证)
- 登录成功后             将加密的用户密码信息写入localStorage
- 每次发请求时           配置请求头(authorization:localStorage)
- 判断需要验证的路由请求头ctx.request.header.authorization 是否有该信息
