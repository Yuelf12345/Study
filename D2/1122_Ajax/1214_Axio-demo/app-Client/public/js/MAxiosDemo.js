import mxios from './mxios/myAxios.js';

// let mxios = new Mxios();

(async function(){
  

    // let rs = await mxios.request({
    //     method:'post',
    //     url:'/api/login',
    //     data:{
    //         username:'123',
    //         password:'123'
    //     }
    // })

    mxios.interceptors.request.use(function s1(config){
        console.log('s1');
        //config.setHeader();
        //请求拦截器
        return config;
    },function e1(error){
        console.log('e1')
        return Promise.reject(error);
    });
    mxios.interceptors.request.use(function s2(config){
        console.log('s2')
        return config;
    },function e2(error){
        console.log('e2')
        return Promise.reject(error);
    });
    //统一处理请求成功
    // mxios.interceptors.response.use(function s2(config){
    //    //请求成功
    //     return config;
    // },function (error){
    //     if(error){
    //         // alert(error);
    //     }
    //     return Promise.reject(error);
    // });

    let rs = await mxios.post('/api/login',{
        username:'123',
        password:'123'
    });
    // console.log('mxios',mxios);
    console.log('rs',rs);
    console.log('data');
})();