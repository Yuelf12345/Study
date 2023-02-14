const xhr = new XMLHttpRequest(); // 1.创建对象

xhr.timeout = 2000   // 2.超时时间

xhr.open('get','www.baidu.com',true)    //3.建立连接

xhr.setRequestHeader('Expires', 'Mon, 20 Jul 2029 23:00:00 GMT') //4.设置请求头

xhr.send()          //5.发送请求
//6.接受请求
xhr.onreadystatechange= ()=>{          
     if(xhr.readyState == 4){
        //请求完成了
        if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
            //请求成功了,拿到返回的数据
            var data = xhr.responseText;
        }          
    }
}
//7.超时和错误事件
xhr.ontimeout = xhr.onerror = err => {          
    this.$fui.popup({
        message: '连通性测试失败',
        type: 'error',
    });
    this.loading = false;
};