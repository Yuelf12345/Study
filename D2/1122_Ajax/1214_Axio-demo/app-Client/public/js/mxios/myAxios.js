import { getAdapter } from "./adapters.js";
import InterceptorManager from './InterceptorManager.js'

class Mxios{

    constructor(){
        this.interceptors = {
            request:new InterceptorManager(),
            response:new InterceptorManager()
        }
    }

    request(config){

        let chain = [function(config){
            let adapter = getAdapter(config);
            return adapter;
        },undefined]

        //立即返回成功状态的Promise
        let promise = Promise.resolve(config);
        // 把chain挂载到promise
        //[s1,e1,s2,e2，adapter,undefined,res1,res2...]
        this.interceptors.request.handles.forEach(function (interceptor) {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
      
          /**
           * promise.then(s1,e1)then(s2,e2).then(function(){
           * let adapter = getAdapter(config);
           * },undefined)
           */
          while(chain.length){
            promise = promise.then(chain.shift(),chain.shift());
          }
        // console.log('adapter',adapter);
        return promise;
    }

    get(url,query={}){
        let xhr = XMLHttpRequest();
    }

    post(url,data={},config={}){
        // console.log('post方法');
        config.method = 'post'
        config.url = url,
        config.data = data
        return this.request(config)
    }

}


let mxios = new Mxios()

export default mxios;