function sleep(delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve()
        }, delay);
    })
}

sleep(1000).then(()=>{
    console.log(1);
})


