function xhrAdapter(config){
    return new Promise((resolve,reject)=>{
        
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            resolve();
        }

        let fd = new FormData();
        console.log(config.data);
        for(let key in config.data){
            fd.append(key,config.data[key])
        }

        xhr.open(config.method,config.url,true);
        xhr.send(fd);
        
        return xhr;
    });
}

function httpAdapter(){

}


function getAdapter(config){
    //如果是浏览器环境
    if(typeof XMLHttpRequest !== 'undefined'){
        return  xhrAdapter(config)
    }else{
        httpAdapter()
    }
}

export {
    getAdapter
}