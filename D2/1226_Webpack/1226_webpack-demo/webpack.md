# webpack js应用程序的静态模块打包工具,处理时会在内部从一个或多个入口点构建一个依赖图,然后将项目中所需的每一个模块组合成一个或多个bundles,他们均为静态资源

## entry: 入口,构建内部依赖图的起始点
## output:{path:,filename:} 输出,打包好的bundle存放到哪个目录下已经如何命名
## loader: webpack只能识别JavaScript和JSON文件,配置loader可以处理其他类型文件.test属性,识别出哪些文件会被转换.use属性,定义出在进行转换时,应该使用哪个loader.
## plugin: 插件则可以用于执行范围更广的任务.包括：打包优化,资源管理,注入环境变量.
## mode: 通过选择development,production或none之中的一个,来设置mode参数,你可以启用webpack内置在相应环境下的优化.其默认值为production.