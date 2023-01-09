//约束参数
import {
    LOGIN
} from './interface'

export const login = async (data:LOGIN)=>{
    // let rs = await fetch('./login');
    // return await rs.json();
    return fetch('./login')
}

export const getUser = async <T>(id:number,isDetail:boolean = false) =>{
    let rs = await fetch('getUser?id='+ id);
    let data: Promise<T> = await rs.json();
    return data
}