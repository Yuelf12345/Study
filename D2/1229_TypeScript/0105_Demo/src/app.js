"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Yue_1 = __importDefault(require("./Yue/Yue"));
var app = new Yue_1.default({
    port: 8888
});
app.start();
