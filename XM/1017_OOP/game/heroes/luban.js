import L1 from '../skills/l1.js'
import L2 from '../skills/l2.js'
import L3 from '../skills/l3.js'
import lubanSkin1 from '../skins/lubanSkin1.js';
import lubanSkin2 from '../skins/lubanSkin2.js';
import lubanSkin3 from '../skins/lubanSkin3.js';

export default class Luban{
    constructor(){
        this.name = "鲁班",
        this.ico = '',
        this.Skills = [new L1,new L2,new L3],
        this.Skins = [new lubanSkin1,new lubanSkin2,new lubanSkin3]
    }
    heroType(){
        console.log('射手');
    }
}