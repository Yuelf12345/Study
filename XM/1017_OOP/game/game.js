import Player from './player.js';
// 游戏管理类  
// 导出
export default class Game{
    constructor(){
        this.player = null;
    }
    login(name){
        this.player = new Player(name);
    }
}

//单列
// class Game{
//     constructor(){
//         this.Player = null;
//     }
//     login(name){
//         this.Player = new Player(name);
//     }
// }

// let instance = null;
//工厂模式：
// export default function(...arg){
//     if(!instance){
//         instance = new Game(...arg);
//     }
//     return instance;
// }