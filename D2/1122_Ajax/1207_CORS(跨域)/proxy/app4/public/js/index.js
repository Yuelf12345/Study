/**
 * 同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。
 * 
 * CORS
 * Access-Control-Allow-Origin
 * 浏览器通过ajax发送请求时，如果不同域，就在请求头信息里查找Access-Control-Allow-Origin的值是否是当前域，是则信任
 * 
 * https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS
 * 
 * 预检请求 非简单请求(get head post)
 */
let UpLoadBtnElement = document.querySelector('.UpLoadBtn');
let UpLoadFileElement = document.querySelector('#UpLoadFile');
let taskBodyElement = document.querySelector('.task_body');
let contentListElement = document.querySelector('.content-list');

//请求自己的api
function loadPhotos(){
    ajax({
        method:"get",
        // url:"/api",
        url:"/api/getPhotos",
        success(data){
            //ajax 返回的JSON字符串转JS对象
            data = JSON.parse(data);
            data.forEach((v)=>{
                let img = new Image();
                img.src = 'http://localhost:7777'+v.url;
                document.querySelector('.content-list').appendChild(img)
            })
        }
    })
}
loadPhotos();

//点击上传
UpLoadBtnElement.onclick = function(){
    UpLoadFileElement.click();
}

//内容发生改变，已经选择上传文件
UpLoadFileElement.onchange = function(){
    for(let file of this.files){
        uploadFile({
            file
        });
    }

 
}

let num=0;
function uploadFile(data){
    num++
    //生成li节点
    let li = document.createElement('li');
    li.innerHTML = `
                 <li>
                    <span>任务${num}</span>
                    <div class="task-progress-status">上传中...</div>
                    <div class="progress"></div>
                </li> `
    let taskProgressStatusElement = li.querySelector('.task-progress-status');
    let progressElement = li.querySelector('.progress');
    taskBodyElement.appendChild(li);

    ajax({
        method:'post',
        // url:'http://localhost:7777/upload',
        url:'/api/upload',
        data,
        success(data){
            //ajax 返回的JSON字符串转JS对象
            data = JSON.parse(data);
            //当前上传完成后移除li
            setTimeout(()=>{
                // li.remove();
            },1000);
            taskProgressStatusElement.innerHTML = '上传完成';
           
            createImg(data)

        },
        onprogress(ev){
            // console.log('ev',ev);
            progressElement.style.width = (ev.loaded / ev.total) * 100 +'%';
            // console.log(progressElement.style.width);
        },
        onload(ev){
            console.log('ev',ev);
        }
    });
}

function createImg(data){
    let img = new Image();
    img.src = 'http://localhost:7777'+data.url;
    document.body.appendChild(img)
}


//用户登录
let usernameElement = document.querySelector('#username')
let passwordElement = document.querySelector('#password')
let loginBtnElement = document.querySelector('#loginBtn')

loginBtnElement.onclick = function(){
    let username = usernameElement.value;
    let password = passwordElement.value;
    console.log(username,password);

    ajax({
        method:'post',
        url:'/api/login',
        data:{
            username,
            password
        },
        success(data){
            data = JSON.parse(data);

            console.log(this.getResponseHeader('authorization'));

            localStorage.setItem('authorization',this.getResponseHeader('authorization'))
        }
    });

    // setTimeout(()=>{window.location.reload()},500)
}