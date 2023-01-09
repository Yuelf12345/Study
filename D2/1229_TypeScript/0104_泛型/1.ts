function fn1(x:number,y:number);
function fn1(x:string,y:string);
function fn1(x:any,y:any){};

function merge<T1 extends {},T2>(obj1:T1,obj2:T2){
    return Object.assign(obj1,obj2)
}

interface USER{}
interface KKB{
    classType:'JS'|'TS'
}
merge<USER,KKB>({
    id:1,
    name:'yue'
},{
    classType:'TS'
});