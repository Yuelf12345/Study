```javascript
class YPromise{
            constructor(handler){
                this.State = "padding";
                this.Value = undefined;
                handler(function(val){
                    this.State = "fulfilled";
                    this.Value = val;
                }.bind(this),function(val){
                    this.State = "rejected";
                    this.Value = val
                }.bind(this))
            }
        }

        const y = new YPromise((resolve,reject)=>{
            resolve('我的成功')
            reject('我的失败')
        })
```

```javascript
class YPromise{
            constructor(handler){
                this.State = "padding";
                this.Value = undefined;
                handler(this._reslove.bind(this),this._reject.bind(this))
            }
            _reslove(val){
                if(this.State === "padding"){
                    this.State = "fulfilled";
                    this.Value = val;
                }
            }
            _reject(val){
                if(this.State === "padding"){
                    this.State = "rejected";
                    this.Value = val
                }
            }
        }

        const y = new YPromise((resolve,reject)=>{
            resolve('我的成功')
            reject('我的失败')
        })
```
# 同步then方法 x (⊙ˍ⊙)
```javascript
        class YPromise{
            constructor(handler){
                this.State = "padding";
                this.Value = undefined;
                handler(this._reslove.bind(this),this._reject.bind(this))
            }
            _reslove(val){
                if(this.State === "padding"){
                    this.State = "fulfilled";
                    this.Value = val;
                }
            }
            _reject(val){
                if(this.State === "padding"){
                    this.State = "rejected";
                    this.Value = val
                }
            }

            then(onResloved,onRejected){
                if(this.State === "fulfilled"){
                    onResloved && onResloved(this.Value)
                }
                if(this.State === "rejected"){
                    onRejected && onRejected(this.Value)
                }
            }
        }

        const y = new YPromise((resolve,reject)=>{
            resolve('我的成功')
            reject('我的失败')
        })
        y.then(res=>{
            console.log(res);
        })
        console.log(y);
```
# 异步then方法 ✓ ╰(*°▽°*)╯
```javascript
        class YPromise{
            constructor(handler){
                this.State = "padding";
                this.Value = undefined;

                this.resCallBack = null
                this.rejCallBack = null
                handler(this._reslove.bind(this),this._reject.bind(this))
            }
            _reslove(val){
                if(this.State === "padding"){
                    this.State = "fulfilled";
                    this.Value = val;

                    if(this.resCallBack){
                        this.resCallBack(val)
                    }
                }
            }
            _reject(val){
                if(this.State === "padding"){
                    this.State = "rejected";
                    this.Value = val

                    if(this.rejCallBack){
                        this.rejCallBack(val)
                    }
                }
            }

            then(onResloved,onRejected){
                if(this.State === "fulfilled"){
                    onResloved && onResloved(this.Value)
                }
                if(this.State === "rejected"){
                    onRejected && onRejected(this.Value)
                }
                if(this.State === "padding"){
                    this.resCallBack = onResloved
                    this.rejCallBack = onRejected
                }
            }
        }

        const y = new YPromise((resolve,reject)=>{
            // resolve('我的成功')
            // reject('我的失败')

            setTimeout(()=>{
                resolve('我的成功')
            },1000)
        })
        y.then(res=>{
            console.log(res);
        },err=>{
            console.log(err);
        })
        console.log(y);
```
# 队列(多个then)
```javascript 
        class YPromise{
            constructor(handler){
                this.State = "padding";
                this.Value = undefined;

                this.resCallBackQueue = []
                this.rejCallBackQueue = []
                handler(this._reslove.bind(this),this._reject.bind(this))
            }
            _reslove(val){
                if(this.State === "padding"){
                    this.State = "fulfilled";
                    this.Value = val;
                    let cb
                    while(cb = this.resCallBackQueue.shift()){
                        cb && cb(val)
                    }
                }
            }
            _reject(val){
                if(this.State === "padding"){
                    this.State = "rejected";
                    this.Value = val
                    let cb
                    while(cb = this.rejCallBackQueue.shift()){
                        cb && cb(val)
                    }
                }
            }

            then(onResloved,onRejected){
                if(this.State === "fulfilled"){
                    onResloved && onResloved(this.Value)
                }
                if(this.State === "rejected"){
                    onRejected && onRejected(this.Value)
                }
                if(this.State === "padding"){
                    this.resCallBackQueue.push(onResloved)
                    this.rejCallBackQueue.push(onRejected)
                }
            }
        }

        const y = new YPromise((resolve,reject)=>{
            // resolve('我的成功')
            // reject('我的失败')

            setTimeout(()=>{
                resolve('我的成功')
            },1000)
        })
        y.then(res=>{
            console.log(res);
        })
        y.then(res=>{
            console.log(2);
        })

        console.log(y);
```