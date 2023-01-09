// let a:number = 1;
// a.substring();
var text1 = document.querySelector('#text1');
var text2 = document.querySelector('#text2');
var btn = document.querySelector('button');
var result = document.querySelector('#result');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    var rs = Number(text1.value) + Number(text2.value);
    result.innerHTML = rs.toString();
});
