/**
 * 定义一个函数
 * 这个函数，允许我们在不同的一些情况下调用
 * fn 1.x为数字,y为字符串
 *    2.x为字符串,y为字符串
 */

// function fn(x:number,y:number){

// }
function fn(x:number,y:number);
function fn(x:string,y:string);
function fn(x:any,y:any){
    //
}
//会按照上面定义的重载去进行检测
fn(1,2);
fn("2","2");
// fn(1,'2');
