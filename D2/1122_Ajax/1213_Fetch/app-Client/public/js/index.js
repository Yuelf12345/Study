let UpLoadBtnElement = document.querySelector('.UpLoadBtn');
let UpLoadFileElement = document.querySelector('#UpLoadFile');
let taskBodyElement = document.querySelector('.task_body');
let contentListElement = document.querySelector('.content-list');

function loadPhotos(){
    // fetch('/getPhotos');
}

loadPhotos();

function createImg(data){
    let img = new Image();
    img.src = 'http://localhost:7777'+data.url;
    document.body.appendChild(img)
}


let usernameElement = document.querySelector('#username')
let passwordElement = document.querySelector('#password')
let loginBtnElement = document.querySelector('#loginBtn')

loginBtnElement.onclick = async function(){
    let username = usernameElement.value;
    let password = passwordElement.value;
    console.log(username,password);

    let fd = new FormData();
    fd.append('username',username)
    fd.append('password',password)


    // fetch('/api/login',{
    //     method:'post',
    //     body:fd
    // }).then(res=>{
    //     //res => new Response(从后端返回的数据包装成对象)
    //     console.log('res',res);
    //     //res.headers => new headers()
    //     console.log('authorization',res.headers.get('authorization'));
    //     console.log('body',res.body)
    //     return res.json();
    // }).then(data=>{
    //     console.log('data',data);
    // })

    let res = await fetch('/api/login',{
        method:'post',
        body:fd
    });
    let data = await res.json();
    console.log('data',data);
}