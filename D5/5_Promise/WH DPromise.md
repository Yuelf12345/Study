# 三种状态
```javascript
        const PADDING = "padding"
        const FULFILLED = "fulfilled"
        const REJECTED = "rejected"
        class MPromise{
            #State = PADDING
            #Value = undefined
            constructor(executor){
                const reslove = (data) =>{
                    if(this.#State !== PADDING) return 
                    this.#State = FULFILLED
                    this.#Value = data
                }
                const reject = (data) =>{
                    if(this.#State !== PADDING) return 
                    this.#State = REJECTED
                    this.#Value = data
                }
                executor(reslove,reject)
            }
        }
        const p = new Promise((resolve, reject) => {
            resolve("p 成功")
        })
        const y = new MPromise((resolve, reject) => {
            resolve("y 成功")
        })
        console.log(p);
        console.log(y);
```
```javascript
        const PADDING = "padding"
        const FULFILLED = "fulfilled"
        const REJECTED = "rejected"
        class MPromise{
            #State = PADDING
            #Value = undefined
            constructor(executor){
                const reslove = (value) =>{
                    this.#changeState(FULFILLED,value)
                }
                const reject = (value) =>{
                    this.#changeState(REJECTED,value)
                }
                try {
                    executor(reslove,reject)
                } catch (error) {
                    reject(error)
                }
            }
            #changeState(state,value){
                if(this.#State !== PADDING) return 
                    this.#State = state
                    this.#Value = value
            }
        }
        const p = new Promise((resolve, reject) => {
            resolve("p 成功")
        })
        const y = new MPromise((resolve, reject) => {
            resolve("y 成功")
        })
        console.log(p);
        console.log(y);
```
# then 方法 (同步) x
```javascript
        const PADDING = "padding"
        const FULFILLED = "fulfilled"
        const REJECTED = "rejected"
        class MPromise{
            #State = PADDING
            #Value = undefined
            constructor(executor){
                const reslove = (value) =>{
                    this.#changeState(FULFILLED,value)
                }
                const reject = (value) =>{
                    this.#changeState(REJECTED,value)
                }
                try {
                    executor(reslove,reject)
                } catch (error) {
                    reject(error)
                }
            }
            #changeState(state,value){
                if(this.#State !== PADDING) return 
                    this.#State = state
                    this.#Value = value
            }

            then(onResloved,onRejected){
                return new MPromise((reslove,reject)=>{
                    if(this.#State ===FULFILLED){
                        onResloved(this.#Value)
                    }else{
                        onRejected(this.#Value)
                    }
                })
            }
        }
        const p = new Promise((resolve, reject) => {
            resolve("p 成功")
        })
        p.then(res=>{
            console.log(res);
        })
        const y = new MPromise((resolve, reject) => {
            resolve("y 成功")
        })
        y.then(res=>{
            console.log(res);
        })
        console.log(p);
        console.log(y);
```
# then 异步 ✓
```javascript
        const PADDING = "padding"
        const FULFILLED = "fulfilled"
        const REJECTED = "rejected"
        class MPromise {
            #State = PADDING
            #Value = undefined

            #handlers = []
            constructor(executor) {
                const reslove = (value) => {
                    this.#changeState(FULFILLED, value)
                }
                const reject = (value) => {
                    this.#changeState(REJECTED, value)
                }
                try {
                    executor(reslove, reject)
                } catch (error) {
                    reject(error)
                }
            }
            #changeState(state, value) {
                if (this.#State !== PADDING) return;
                this.#State = state
                this.#Value = value
                this.#run()
            }
            #run() {
                if (this.#State === PADDING) return;
                while (this.#handlers.length) {
                    const { onResloved, onRejected,reslove,reject } = this.#handlers.shift();
                    if (this.#State === FULFILLED) {
                        if (typeof onResloved === "function") {
                            onResloved(this.#Value)
                        }
                    } else {
                        if (typeof onRejected === "function") {
                            onRejected(this.#Value)
                        }
                    }
                }
            }
            then(onResloved, onRejected) {
                return new MPromise((reslove, reject) => {
                    this.#handlers.push({
                        onResloved,
                        onRejected,
                        reslove,
                        reject
                    })
                    this.#run()
                })
            }
        }
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("p 成功")
            }, 100)
        })
        p.then(res => {
            console.log(res);
        })
        const y = new MPromise((resolve, reject) => {
            setTimeout(() => {
                resolve("y 成功")
            }, 100)
        })
        y.then(res => {
            console.log(res);
        })
        y.then(res => {
            console.log(res);
        })
        console.log(p);
        console.log(y);
```
```javascript   运行处理
        const PADDING = "padding"
        const FULFILLED = "fulfilled"
        const REJECTED = "rejected"
        class MPromise {
            #State = PADDING
            #Value = undefined

            #handlers = []
            constructor(executor) {
                const reslove = (value) => {
                    this.#changeState(FULFILLED, value)
                }
                const reject = (value) => {
                    this.#changeState(REJECTED, value)
                }
                try {
                    executor(reslove, reject)
                } catch (error) {
                    reject(error)
                }
            }
            #changeState(state, value) {
                if (this.#State !== PADDING) return;
                this.#State = state
                this.#Value = value
                this.#run()
            }
            #run() {
                if (this.#State === PADDING) return;
                while (this.#handlers.length) {
                    const { onResloved, onRejected,reslove,reject } = this.#handlers.shift();
                    if (this.#State === FULFILLED) {
                        if (typeof onResloved === "function") {
                            try {
                                const data = onResloved(this.#Value);
                                reslove(data);
                            } catch (err) {
                                reject(err)     //运行报错
                            }
                        }else{
                            reslove(this.#Value) //穿透
                        }
                    } else {
                        if (typeof onRejected === "function") {
                            try {
                                const data = onRejected(this.#Value);
                                reslove(data);
                            } catch (err) {
                                reject(err) 
                            }
                        }else{
                            reject(this.#Value)
                        }
                    }
                }
            }
            then(onResloved, onRejected) {
                return new MPromise((reslove, reject) => {
                    this.#handlers.push({
                        onResloved,
                        onRejected,
                        reslove,
                        reject
                    })
                    this.#run()
                })
            }
        }
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("p 成功")
            }, 100)
        })
        p.then(res => {
            console.log(res);
        })
        const y = new MPromise((resolve, reject) => {
            setTimeout(() => {
                resolve("y 成功")
            }, 100)
        })
        y.then(res => {
            console.log(res);
        })
        y.then(res => {
            console.log(res);
        })
        console.log(p);
        console.log(y);
```
```javascript
        const PADDING = "padding"
        const FULFILLED = "fulfilled"
        const REJECTED = "rejected"
        class MPromise {
            #State = PADDING
            #Value = undefined

            #handlers = []
            constructor(executor) {
                const reslove = (value) => {
                    this.#changeState(FULFILLED, value)
                }
                const reject = (value) => {
                    this.#changeState(REJECTED, value)
                }
                try {
                    executor(reslove, reject)
                } catch (error) {
                    reject(error)
                }
            }
            #changeState(state, value) {
                if (this.#State !== PADDING) return;
                this.#State = state
                this.#Value = value
                this.#run()
            }
            #runOne(cb, reslove, reject) {
                if (typeof cb === "function") {
                    try {
                        const data = cb(this.#Value);
                        reslove(data);
                    } catch (err) {
                        reject(err)     //运行报错
                    }
                } else {
                    const select = this.#State === FULFILLED ? reslove : reject
                    select(this.#Value);    //穿透
                    return;
                }
            }
            #run() {
                if (this.#State === PADDING) return;
                while (this.#handlers.length) {
                    const { onResloved, onRejected, reslove, reject } = this.#handlers.shift();
                    if (this.#State === FULFILLED) {
                        this.#runOne(onResloved, reslove, reject)
                    } else {
                        this.#runOne(onRejected, reslove, reject)
                    }
                }
            }
            then(onResloved, onRejected) {
                return new MPromise((reslove, reject) => {
                    this.#handlers.push({
                        onResloved,
                        onRejected,
                        reslove,
                        reject
                    })
                    this.#run()
                })
            }
        }
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("p 成功")
            }, 100)
        })
        p.then(res => {
            console.log(res);
        })
        p.then(res => {
            console.log(res);
        })
        const y = new MPromise((resolve, reject) => {
            setTimeout(() => {
                resolve("y 成功")
            }, 100)
        })
        y.then(res => {
            console.log(res);
        })
        y.then(res => {
            console.log(res);
        })
        console.log(p);
        console.log(y);
```