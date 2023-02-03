// 直接创建基于 canvas 入口文件
import { createRenderer } from "vue";
import { Container, Text ,Sprite, Texture} from "pixi.js";

const renderer = createRenderer({
    createElement(type){
        // 创建元素
        // console.log(type);
        //调用 pixi api
        let element;
        switch(type){
            case "container" :
                element = new Container()
                break;
            case "sprite" :
                element = new Sprite()
                break;
            default:
                break;
        }
        return  element;
    },
    createComment(){
        //canvas 内不需要
    },
    setElementText(node,text){
        const CanvasText = new Text(text)
        node.addChild(CanvasText)
    },
    // 插入
    insert(el,parent){
        // console.log(el,parent);
        if(parent){
            parent.addChild(el)
        }
    },
    patchProp(el,key,prevValue,nextValue){
        switch (key) {
            case "texture":
                el.texture = Texture.from(nextValue)
                break;
            // @click 变成 onclick
            case "onClick":
                el.on("pointertap" ,nextValue)
                break;
            default:
                el[key] = nextValue;
        }
    },
    parentNode(node){
        return node.parent;
    },
    nextSibling(){},
});

export function createApp (rootComponent){
    return renderer.createApp(rootComponent)
}

