//类型
// type USER = {
//     id:number,
//     username:string,
//     gender:'男'|'女'
// };

// let user1:USER;
// user1.id = 2;
// user1.username = '张三';
// user1.gender = '男'

//接口
interface USER {
    id:number,
    username:string,
    gender:'男'|'女'
};

type CT = 'JS'|'TS'
interface STUDENT extends USER {
    classType:CT
}

let s1:STUDENT;
//@ts-ignore
s1.classType = 'JS'


