import d,{fn} from './fn';
// import img from './images/2.png';
import './css/css.css';

import article01 from './articles/w01.md';

console.log('d',d);
// fn()
// console.log('img',img);


// const logo = new Image();
// logo.src = img;
// document.body.appendChild(logo);

// const styleElement = document.createElement('style');
// styleElement.innerHTML = css.toString();
// document.head.appendChild(styleElement);

// console.log('article01',article01);
// document.body.innerHTML = article01;


//代理
document.onclick = fn;

//局部热更新
if(module.hot){
    module.hot.accept('/src/fn.js',
    function(){
        //更新
        document.onclick = fn;
    })
}