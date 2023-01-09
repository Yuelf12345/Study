import {
    login,
    getUser
} from './api'
import {
    USER,
    USER_DETAIL
} from './api/interface'

login({
    username:'张三',
    password:'123'
});

(async function(){
    let user = await getUser<USER_DETAIL>(1,true);
    user.id
}) ()