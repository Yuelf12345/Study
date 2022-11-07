class myPromise{
    constructor(handle){
        this.State = 'pending';
        this.Value = undefined;
        this.resolveFn = null;
        this.rejectFn = null;
        //数组队列保存
        this.resolveQueue = [];
        this.rejectQueue = [];
        /* 难看，封装函数
        handle(function(val){
            this.State = 'fulfilled';
            this.Value = val;
        }.bind(this),function(val){
            this.State = 'rejected';
            this.Value = val;
        }.bind(this))
        */
        handle(this._resolve.bind(this),this._reject.bind(this))
    }
    _resolve(val){
        this.State = 'fulfilled';
        this.Value = val;
        //执行 onResolved
        // this.resolveFn(val)
        const run=()=>{
            // this.resolveFn(val)
            let cb;
            while(cb = this.resolveQueue.shift()){
                cb && cb(val)
            }
            // this.resolveQueue.forEach(cb=>{
            //     cb(val)
            // })
        }
        // setTimeout(run)  宏任务改成微任务执行
        let ob = new MutationObserver(run)
        ob.observe(document.body,{
            attributes:true
        })
        document.body.setAttribute('kkb',Math.random())
    }
    _reject(val){
        this.State = 'rejected';
        this.Value = val;
        // this.rejectFn(val)
        //改成异步 先保存在调用
        // setTimeout(()=>{
        //     // this.rejectFn(val)
        // })

        const run=()=>{
            // this.resolveFn(val)
            let cb;
            while(cb = this.rejectQueue.shift()){
                cb && cb(val)
            }
        }
        // setTimeout(run)
        let ob = new MutationObserver(run)
        ob.observe(document.body,{
            attributes:true
        })
        document.body.setAttribute('kkb',Math.random())
    }
    then(onResolved,onRejected){
        /* 错误写法  onResolved，onRejected没有在then里执行，是和resolve，reject相关的
            if(this.State === 'fulfilled'){
                onResolved && onResolved(this.Value)
            }
            if(this.State === 'rejected'){
            onRejected && onRejected(this.Value)
            }
            console.log(this.State);  //pending
        */
        //保存函数，不执行
        // this.resolveFn = onResolved
        // this.rejectFn = onRejected
        // this.resolveQueue.push(onResolved)
        // this.rejectQueue.push(onRejected)


        return new myPromise((resolve,reject)=>{
            /*  直接执行，错误写法
                let res = onResolved();
                //普通值
                resolve(res)
                //对象
                if(res instanceof myPromise){
                    return res
                }
            */
            this.resolveQueue.push(val=>{
                let res = onResolved && onResolved(val);
                if(res instanceof myPromise){
                    // return res.then(res=>{
                    //     resolve(res)
                    // })
                    return res.then(resolve)
                }
                resolve(res)
            })
            this.rejectQueue.push(val=>{
                onRejected && onRejected(val);
                reject(val);
            })
        })
    }
    catch(onRejected){
        this.then(undefined,onRejected);
    }
    static resolve(val){
        return new myPromise((resolve,reject)=>{
            resolve(val)
        })
    }
    static reject(val){
        return new myPromise((resolve,reject)=>{
            reject(val)
        })
    }
    static all(lists){
        let arr = []
        return new myPromise((resolve,reject)=>{
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
        return new myPromise((resolve,reject)=>{
            lists.forEach(item=>{
                item.then(res=>{
                    resolve(res);
                },err=>{
                    reject(err);
                })
            })
        })
    }
    finally(cb){
        return this.then(res=>{cb()},err=>{cb()})
    }
}