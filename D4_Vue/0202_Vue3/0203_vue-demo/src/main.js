import { createApp } from "./canvas";
import { getRootContainer } from "./game";
import App from './App.vue';

// 根组件
// 根容器 game.state
createApp(App).mount(getRootContainer())