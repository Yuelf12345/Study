function Ajax(options){

    var defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function() {},
        error: function() {}
    }
    //使用options 对象中的属性覆盖defaults 对象中的属性
    Object.assign(defaults, options)

    const xhr = new XMLHttpRequest();

    const params = '';

    for(var attr in defaults.data){
        params += attr + '=' + defaults.data[attr] + '&';
    }

    params = params.substring(0,params.length - 1);

    if(defaults.type == get){
        defaults.url = defaults.url + '?' + params;
    }

    xhr.open(defaults.type,defaults.url);

    if(defaults.type == post){
        var contentType = defaults.header['Content-Type'];
        xhr.setRequestHeader('Content-Type',contentType);
        if(contentType == 'application/json'){
            xhr.send(JSON.stringify(defaults.data))
        }else{
            xhr.send(params)
        }
    }else{
        xhr.send()
    }

    xhr.onload() = function(){
        if(xhr.status == 2 & xhr.readyState == 4){
            //判断响应头是否需要转json对象
            var contentType = xhr.getResponseHeader('Content-Type');
            if(contentType.includes('application/json'))
            defaults.success(Json.parse(xhr.responseText));

        }else{
            defaults.error(xhr.responseText)
        }
    }
}

Ajax({
    type: 'get',
    url: 'http://localhost:3000/responseData',
    success: function(data) {
        console.log('这里是success函数:');
        console.log(data);
    }
})