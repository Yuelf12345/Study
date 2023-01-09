// let a:number = 1;
// a.substring();

let text1:HTMLInputElement = document.querySelector('#text1') as HTMLInputElement;
let text2:HTMLInputElement = document.querySelector('#text2') as HTMLInputElement;
let btn:HTMLButtonElement = document.querySelector('button') as HTMLButtonElement;
let result:HTMLSpanElement = document.querySelector('#result') as HTMLSpanElement;

btn?.addEventListener('click',function(){
     let rs:number = Number(text1.value)+Number(text2.value);
     result.innerHTML = rs.toString();
});

let obj:{x:number,y:number} = {
    x:1,
    y:2
}

obj.x;