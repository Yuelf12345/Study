class YPromise{
    constructor(handle){
        this.Status = 'pending'
        this.Value = undefined

        this.resolveFn = null
        this.rejectFn = null

        this.resolveQueue = []
        this.rejectQueue = []
        handle(this._resolve.bind(this),this._reject.bind(this))
    }
    _resolve(val){
        this.Status = 'fulfilled'
        this.Value = val

        // this.resolveFn()
        
        let run=()=>{
            //加到宏任务中实现先保存在执行
            // this.resolveQueue.forEach(res=>res(val))
            let cb;
            while(cb = this.resolveQueue.shift()){
                cb && cb(val)
            }
        }
        // setTimeout(run)          宏任务优先级不够，加微任务    
        //加到微任务中实现先保存在执行
        let ob = new MutationObserver(run)
        ob.observe(document.body,{
            attributes:true
        })
        document.body.setAttribute('kkb',Math.random())
       
    }
    _reject(val){
        this.Status = 'rejected'
        this.Value = val

        // this.rejectFn()
        let run=()=>{
            //加到宏任务中实现先保存在执行
            // this.rejectQueue.forEach(err=>err(val))
            let cb;
            while(cb = this.rejectQueue.shift()){
                cb && cb(val)
            }
        }
        // setTimeout(run)
        //加到微任务中实现先保存在执行
        let ob = new MutationObserver(run)
        ob.observe(document.body,{
            attributes:true
        })
        document.body.setAttribute('kkb',Math.random())
       
    }
    then(onResolved,onRejected){
//不放在宏任务里执行
        // if ( this.Status === 'fulfilled') {
        //     onResolved()
        // }
        // if(this.Status === 'rejected'){
        //     onRejected()
        // }
//一个then
        // this.resolveFn = onResolved
        // this.rejectFn = onRejected
//多个then 非链式
        // this.resolveQueue.push(onResolved);
        // this.rejectQueue.push(onRejected)
    //链式
        //then返回值
        return new YPromise((resolve,reject)=>{
            this.resolveQueue.push(val=>{
                let res = onResolved && onResolved(val);
                if(res instanceof YPromise){
                    return res.then(res=>{
                        resolve(res)
                    })
                }
                resolve(res)
            })
            this.rejectQueue.push(val=>{
                onRejected && onRejected(val);
                reject(val)
            })
        })
    }
    catch(onRejected){
        this.then(undefined,onRejected);
    }
    static resolve(val){
        return new YPromise((resolve,reject)=>{
            resolve(val)
        })
    }
    static reject(val){
        return new YPromise((resolve,reject)=>{
            reject(val)
        })
    }
    static all(lists){
        let arr = []
        return new YPromise((resolve)=>{
            lists.forEach(item=>{
                item.then(res=>{
                    arr.push(res);
                    if(arr.length === lists.length){
                        resolve(arr)
                    }
                })
            })
        })
    }
    static race(lists){
        return new YPromise((resolve)=>{
            lists.forEach(item=>{
                item.then(res=>{
                    resolve(res)
                },err=>{
                    this.reject(err)
                })
            })
        })
    }
    finally(cb){
        return this.then(cb,cb)
    }
}