import Y1 from '../skills/y1.js'
import Y2 from '../skills/y2.js'
import Y3 from '../skills/y3.js'
import yaseSkin1 from '../skins/yaseSkin1.js'
import yaseSkin2 from '../skins/yaseSkin2.js'

export default class Yase{
    constructor(){
        this.name = '亚瑟';
        this.ico = "";
        this.Skills = [new Y1,new Y2,new Y3];
        this.Skins = [new yaseSkin1,new yaseSkin2];
    }
    heroType(){
        console.log("战士");
    }
}