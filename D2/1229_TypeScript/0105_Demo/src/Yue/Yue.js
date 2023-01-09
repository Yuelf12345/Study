"use strict";
// const Koa = require('koa');
// const Router = require('koa-router');
// const koaBody = require('koa-body');
// const koaStaticCache = require('koa-static-cache');
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = void 0;
/**
 * 没有默认导出 tsconfig.json文件配置
 * "esModuleInterop": true,或者
 *  import * as Koa from 'koa';
*/
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router"));
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var defaultConfigs = {
    port: 8888
};
var Yue = /** @class */ (function () {
    function Yue(configs) {
        this.configs = __assign(__assign({}, defaultConfigs), configs);
        this.app = new koa_1.default();
        this.addRouters();
    }
    Yue.prototype.addRouters = function () {
        var _this = this;
        this.router = new koa_router_1.default();
        // let controller = new MainController
        // this.router.get('/',controller.index)
        console.log('__dirname', __dirname);
        var controllerPath = path_1.default.resolve(__dirname, '../controllers/**/*');
        var controllerFiles = glob_1.default.sync(controllerPath);
        console.log(controllerPath);
        console.log('controllerFiles 数组为空奇怪！', controllerFiles);
        try {
            controllerFiles.forEach(function (controllerFile) { return __awaiter(_this, void 0, void 0, function () {
                var Controller, controller;
                var _this = this;
                return __generator(this, function (_a) {
                    var _b;
                    switch (_a.label) {
                        case 0:
                            console.log('controllerFile', controllerFile);
                            return [4 /*yield*/, (_b = controllerFile, Promise.resolve().then(function () { return __importStar(require(_b)); }))];
                        case 1:
                            Controller = (_a.sent()).default;
                            controller = new Controller();
                            // console.log('controller',controller);
                            console.log('Controller._routes', Controller._routes);
                            //根据_router的数据注册路由
                            if (Array.isArray(Controller._routes)) {
                                console.log('Controller._routes', Controller._routes);
                                Controller._routes.forEach(function (_route) {
                                    _this.router[_route.verb](_route.path, controller[_route.name]);
                                });
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
            this.app.use(this.router.routes());
        }
        catch (e) {
            console.log(e);
        }
    };
    Yue.prototype.start = function () {
        this.app.listen(this.configs.port, function () {
            console.log('服务器启动成功 http://localhost:8888/');
        });
    };
    return Yue;
}());
exports.default = Yue;
/**
 * 封装Get装饰器函数
 * 搜集类信息
 */
var Get = function (path) {
    return function (target, name) {
        //因为当前装饰器是装饰到了实例的方法中，所以target是实例
        var constructor = target.constructor;
        if (!Array.isArray(constructor._routes)) {
            constructor._routes = [];
        }
        constructor._routes.push({
            verb: 'get',
            path: path,
            name: name
        });
    };
};
exports.Get = Get;
