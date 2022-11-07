import Yase from './heroes/yase.js'
import Luban from './heroes/luban.js'

export default class Player{
    constructor(name){
        this.name = name;
        this.hero = [new Yase,new Luban];
    }
}