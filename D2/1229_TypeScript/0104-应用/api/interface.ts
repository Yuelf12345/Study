export interface LOGIN {
    username: string;
    password: string;
}
export interface REGISTER {
    username: string;
    password: string;
    repassword:string;
}

export interface USER {
    id:number;
    username:string;
}

export interface USER_DETAIL extends USER {
    gender: '男'|'女';
    email: string;
}