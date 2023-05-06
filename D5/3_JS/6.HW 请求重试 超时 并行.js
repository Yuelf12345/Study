// 请求重试
function limitCount(url,maxCount = 1){
    return fetch(url).catch((err)=>{
        maxCount > 0 ? limitCount(url,maxCount-1):Promise.reject(err)
    })
}
limitCount('https://www.baidu.com/',6).then(res=>console.log(res)).catch(err=>console.log(err))

// 请求超时
function limitTime(url,maxTime = 100){
    return Promise.race([
        fetch(url),
        new Promise(reject=>{setTimeout(()=>{reject('请求超时')},maxTime)})
    ])
}
limitTime('https://www.baidu.com/',0000).then(res=>console.log(res)).catch(err=>console.log(err))

// 请求并行
function limitRequest(urls,maxNum){
    return new Promise(()=>{
        let cnt = 0;
        async function request(){
            if(!urls.length) return;
            await fetch(urls.shift()).finally(()=>{request()})
        }
        while(cnt < maxNum){
            request();
            cnt ++;
        }
    })
}

// 测试数据
const urls = [];
for (let i = 1; i <= 20; i++) {
    urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`)
}
limitRequest(urls, 4).then(res => {
    console.log(res)
})