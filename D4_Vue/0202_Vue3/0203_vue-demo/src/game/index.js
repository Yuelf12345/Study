// pixi.js 学习
import { Application } from 'pixi.js';
// import logo from '../assets/startPage.png'

const game = new Application({
    width:750,
    height:1000,
});

// function createImg(){
//     const img = new Sprite();
//     img.texture = Texture.from(logo);
//     //设置坐标
//     game.stage.addChild(img)
// }
// createImg()
document.body.append(game.view);


export function getRootContainer(){
    return game.stage;
}