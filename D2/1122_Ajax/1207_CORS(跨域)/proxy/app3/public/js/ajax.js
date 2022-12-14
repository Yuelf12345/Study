function noop(){}

function ajax(options){

    options = {
        ...{
            method:'get',
            url:'',
            success:noop,
            onprogress:noop,
            onload:noop,
        },
        ...options
    }

    
    if(options.query){
        let queryString = queryParse(options.query);
        options.url += '?' + queryString;
    }

    //创建ajax对象
    let xhr = new XMLHttpRequest();

    //设置ajax请求参数
    xhr.open(options.method,options.url,true);

    //请求的回调函数,后端返回的结果
    xhr.onload = function(){
        options.success(xhr.responseText);
    }

    xhr.upload.onprogress = options.onprogress;
    xhr.upload.onload = options.onload;

    //通过body发送的数据有多种格式 
    let bodyDate = null;
    if(options.data){
        bodyDate = bodyParse(options.data);
    }
    
    //发送请求  send里面放数据
    xhr.send(bodyDate);


    console.log('发送完成');
}
// console.log(queryParse({a:1,b:2}));

function queryParse(obj){
    //{a:1,b:2} => a=1&b=2
    let arr = [];
    for (let key in obj){
        arr.push(`${key}=${obj[key]}`);
    }
    return arr.join('&');
}
function bodyParse(obj){
    let fd = new FormData();
    for (let key in obj){
        fd.append(key,obj[key]);
        console.log(key,obj[key]);
    }
    return fd;
}