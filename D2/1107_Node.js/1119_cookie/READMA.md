## 共同点
 - localStorage和sessionStorage和cookie共同点
    同域（同源策略）限制:同源策略︰请求与响应的协议、域名、端口都相同则时同源，否则为跨源/跨域
    存储的内容都会转为字符串格式
    都有存储大小限制

 - localStorage和sessionStorage共同点
    API相同
    存储大小限制一样基本类似
    无个数限制

## 不同点
 - localStorage
    没有有效期，除非删除，否则一直存在
    同域下页面共享
    支持storage事件 
- sessionStorage
    浏览器关闭,自动销毁。页面私有
    不支持storage事件
- cookie
    浏览器也会在每次请求的时候主动组织所有域下的cookie到请求头cookie 中，发送给服务器端
    浏览器会主动存储接收到的set-cookie头信息的值
    可以设置http-only属性为true来禁止客户端代码(js）修改该值。可以设置有效期(默认浏览器关闭自动销毁)(不同浏览器有所不同)
    同域下个数有限制，最好不要超过50个(不同浏览器有所不同)
    单个cookie内容大小有限制，最好不要超过4000字节(不同浏览器有所不同)

