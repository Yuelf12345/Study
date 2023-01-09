let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');
let btn = document.querySelector('button');
let result = document.querySelector('#result');

btn.onclick = function(){
    result.innerHTML = text1.value+text2.value;
}