"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require('koa');
var Router = require('koa-router');
var koaBody = require('koa-body');
var koaStaticCache = require('koa-static-cache');
var MainController_1 = __importDefault(require("./old-controllers/MainController"));
var app = new Koa();
var router = new Router();
/**
 * 路由统一管理和注册
 */
router.get('/', MainController_1.default);
app.use(router.routes());
app.listen(8888, function () {
    console.log('服务器启动成功 http://localhost:8888/');
});
