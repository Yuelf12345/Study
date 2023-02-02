//

// ajax({
//     method:'post',
//     url:'/getData',
//     query:{
//         a:1,
//         b:2
//     },
//     data:{
//         x:1,
//         y:2
//     },
//     success(data){
//         console.log('data',data);
//     }
// });

let UpLoadBtnElement = document.querySelector('.UpLoadBtn');
let UpLoadFileElement = document.querySelector('#UpLoadFile');
let taskBodyElement = document.querySelector('.task_body');
let contentListElement = document.querySelector('.content-list');

// 加载所有图片
function loadPhotos(){
    ajax({
        method:"get",
        url:"/getPhotos",
        success(data){
            //ajax 返回的JSON字符串转JS对象
            data = JSON.parse(data);
            console.log('data',data);
            data.forEach((v)=>{
                let img = new Image();
                img.src = v.url;
                document.querySelector('.content-list').appendChild(img)
                // console.log(img.src);
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
    console.dir(this.files);
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
        url:'/upload',
        data,
        success(data){
            //ajax 返回的JSON字符串转JS对象
            data = JSON.parse(data);
            console.log('data',data);
            //当前上传完成后移除li
            setTimeout(()=>{
                li.remove();
            },1000);
            taskProgressStatusElement.innerHTML = '上传完成';
            let img = new Image();
            img.src = data.url;
            document.body.appendChild(img)
            // console.log(img.src);

            let imgAll = new Image();
            imgAll.src = data.url;
            document.querySelector('.content-list').appendChild(imgAll)
            // console.log(imgAll.src);
        },
        onprogress(ev){
            console.log('ev',ev);
            progressElement.style.width = (ev.loaded / ev.total) * 100 +'%';
            console.log(progressElement.style.width);
        },
        onload(ev){
            console.log('ev',ev);
        }
    });
}