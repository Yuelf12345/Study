"use strict";
// let a:number = 1;
// a.substring();
let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');
let btn = document.querySelector('button');
let result = document.querySelector('#result');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    let rs = Number(text1.value) + Number(text2.value);
    result.innerHTML = rs.toString();
});
