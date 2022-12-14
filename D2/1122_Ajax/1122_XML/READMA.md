## XMLHttpRequest

- 新建对象
    let xhr = new XMLHttpRequest();
- 配置参数
    xhr.open('get','/checkUser',true);
- 接受返还值
    xhr.onload = function(){
        let res = JSON.parse(xhr.responseText);
    }
- 发送服务器
    xhr.send();