// function delay(duration) {
//     var start = Date.now()
//     while (Date.now - start < duration) {
        
//     }
// }
console.log(6)
//3.延时队列
setTimeout(function(){
    console.log(1)
    Promise.resolve().then(function(){
        console.log(4)
    })
},0)

function a(){
    console.log('5')
}
a()
// delay(1000)

//2。放入微队列 优先执行
Promise.resolve().then(function(){
    console.log(3)
})
Promise.resolve().then(a)

//1主队列    
console.log(2)



