
function fn1(){
    console.log('fn1');
}
function fn2(){
    console.log('fn2');
}

/**
 * Module ={
 *  fn:fn1
 * }
 */

export const fn = fn1; 
export const todo = fn2; 
//默认导出
export default '123';