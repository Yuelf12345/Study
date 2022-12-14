
### 快速启动node server

> 使用系统： Mac


#### 1. 安装

```bash
npm i -g koa-start
```

#### 2. 设置环境变量

```bash
echo "export PATH=\$PATH:~/bin/" >> ~/.bash_profile
source ~/.bash_profile
```

#### 3. 设置软链

```bash
rm -rf ~/bin/koa-start
ln -s /usr/local/lib/node_modules/koa-start ~/bin/koa-start
```

#### 4. 启动server

```bash
koa-start [-p] [-n]
```

**参数说明**

| 参数        |  含义   | 默认值 |
| --------   | -----   | ----- |
| -p | 启用端口 | 8080 |
| -n | 当前目录下模板文件html | index.html |


> 持续更新中，欢迎[提issue](https://github.com/linwei0201/koa-start/issues)

