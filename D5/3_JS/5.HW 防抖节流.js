// Shake throttle
function shake(fn,time){
    let timer
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn()
        },time)
    }
}

function throttle(fn,time){
    let flag = true;
    return function(){
        if(flag){
            setTimeout(()=>{
                fn.call(this),time;
                flag = true;
            },time)
        }
    flag = false
    }
}