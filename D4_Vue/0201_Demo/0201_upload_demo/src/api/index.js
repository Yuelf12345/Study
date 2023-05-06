import axios from 'axios'

// import store from "../store/index";



axios.create({
    timeout: 8000,
    baseURL:
      process.env.NODE_ENV === "development" ? "/api" : "http://localhost:8081/"
  });
// axios.interceptors.request.use(config => {
//     // 设置 token
//     const token = store.state.token;
//     if (token) {
//         config.headers.authorization = "Bearer " + token;
//     }
// });
// 登录接口
export  function fetchLogin({username , password}){
    console.log(username,password);
    // 接受后端数据
    let rs  =  axios.post("/api/login",{
        username,
        password
    });
    return rs
}

// 上传图片接口
export function fetchUpload({file,uID}){
    const formData = new FormData();
    formData.append("image",file);
    const x = {
        formData:formData,
        uID:uID
    }
    // // 将图片数据传到后端后获取返回数据
    let rs = axios.post("/api/upload",
       x ,true);
    return rs
}