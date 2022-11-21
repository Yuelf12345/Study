window.onload = function(){
    let uls = document.querySelectorAll('.listContainer');
    let spans = document.querySelectorAll('.btnController')
    uls.forEach((v,k)=>{
        v.onmouseover = function(){
            spans.forEach((value,key)=>{
                if(key==k){
                    spans[key].style.display = 'block';
                }else{
                    spans[key].style.display = 'none';
                }
            })
        }
    })
    



    
//本地存储
    // localStorage.setItem("test","测试文字");
    // localStorage.getItem("test");
    // localStorage.removeItem("test");
    // localStorage.clear();
//cookie存储
    // document.cookie = "test=test;Max-Age=300";
    // console.log(document.cookie);

    let colorArr = ["white","rgb(204,232,207","rgb(200,200,169)","rgb(100,100,100)"]
    let key = 0;
    // if(getCookie("key")){
    //     key = getCookie("key")
    // }
    if(localStorage.getItem("key")){
        key = localStorage.getItem("key");
    };
    document.body.style.background = colorArr[key];
    document.querySelector(".changeSkin").onclick = function(){
        key++;
        key = key>3?0:key;
        // setCookie("key",key,{
        //     "Max-Age":3600*24
        // });
        localStorage.setItem("key",key);
        document.body.style.background = colorArr[key];
    };
};

function setCookie(name,value,options={}){
    let cookieData =  `${name}=${value};`;
    for(let key in options){
        let str = `${key}=${options[key]};`;
        cookieData += str;
    }
    document.cookie = cookieData;
}

function getCookie(name){
    let arr = document.cookie.split("; ");
    for(let i=0;i<arr.length;i++){
        let arr2 = arr[i].split("=");
        if(arr2[0]==name){
            return arr2[1];
        }
    }
    return "";
}

function showDetail(musicData){
    console.log(musicData);
    if(localStorage.getItem("musicData")){
        //去重
        let localData = JSON.parse(localStorage.getItem("musicData"));
        if(!localData.find(v=>v.id==musicData.id)){
            localData.push(musicData);
            localStorage.setItem("musicData",JSON.stringify(localData));
        }
    }else{
        localStorage.setItem("musicData",JSON.stringify([musicData]))
    }


    if(!localStorage.getItem("isOpen")){
        window.open("/detail");
    }
}