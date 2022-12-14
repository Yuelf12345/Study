let UpLoadBtnElement = document.querySelector('.UpLoadBtn');
let UpLoadFileElement = document.querySelector('#UpLoadFile');
let taskBodyElement = document.querySelector('.task_body');
let contentListElement = document.querySelector('.content-list');

function loadPhotos(){
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

    //console.log(axios);       https://www.npmjs.com/package/axios
    let rs = await axios.post('/api/login',{
        username,
        password
    });
    console.log('rs',rs);
    console.log(fd);
}