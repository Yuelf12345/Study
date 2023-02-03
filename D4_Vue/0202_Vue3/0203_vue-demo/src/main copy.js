/*
import { createApp , defineComponent , h} from 'vue'
// import App from './App.vue'

const App = defineComponent({
    render(){
        const vnode = h("div",[h("p","123")])
        console.log(vnode);
        return vnode;
    }
})

createApp(App).mount('#app')

// 渲染机制
// template -> render() -> vnode tree -> 渲染成真实dom ->添加到dom节点
*/

// pixi.js 学习
import { Application ,Text, TextStyle, Texture , Sprite, Graphics, Container } from 'pixi.js';
import logo from "./assets/logo.png"

const game = new Application({
    width:750,
    height:1000,
});
// game.view -> canvas
// game.stage -> 根容器

document.body.append(game.view);

// 创建容器

const container = createContainer();
game.stage.addChild(container);
container.x = 300;
function createContainer(){
    const container = new Container();
    return container;
}



// 创建文字
function createText(){
    const text = new Text("start");
    text.style = new TextStyle({fill: 0x00ff00});

    // internal
    // 帧循环
    // game.ticker.add(()=>{
    //     text.x ++
    // })
    // 移除
    // game.ticker.remove(handle)


    game.stage.addChild(text);
    // container.addChild(text);
}

//创建图片
function createImg(){
    const img = new Sprite();
    img.texture = Texture.from(logo);
    //设置坐标
    img.x = 100,
    img.y = 200
    // game.stage.addChild(img)
    container.addChild(img);
}

//创建形状
function createRect(){
    const rect = new Graphics()
    rect.beginFill(0x00ff00)
    rect.drawRect(0,0,50,50);
    rect.endFill();

    //点击事件 
    rect.interactive = true;
    rect.on("pointertap",()=>{
        console.log('click');
    })

    // game.stage.addChild(rect)
    container.addChild(rect);
}

createText();
createImg();
createRect()