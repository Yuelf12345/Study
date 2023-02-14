# https://juejin.cn/post/6844904077537574919
# 谈谈对promise理解
    Promise是为了解决Javascript回调嵌套过多导致回调地狱(callbackhell)而产生的。它有三个状态pending: 初始状态;fulfilled: 操作成功;rejected: 操作失败;promise对状态的改变只有两种：pending -> fulfilled ; pending -> rejected;Promise构造函数接受一个函数作为参数,函数也接受两个参数,reslove(成功)reject(失败)；

# 手写promise(1025 1214)

#  实现Promise.all 方法
    Promise.all()方法用于将多个Promise实例,包装成一个新的实例;只有在所有实例状态都是fulfilled的情况下才会返回reslove,其他都是reject;
