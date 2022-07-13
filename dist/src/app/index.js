"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Koa_1 = tslib_1.__importDefault(require("Koa"));
const koa_body_1 = tslib_1.__importDefault(require("koa-body"));
const router_1 = require("../router");
const app = new Koa_1.default();
// 注册解析参数的中间件
app.use((0, koa_body_1.default)());
app.use(router_1.userRouter.routes());
exports.default = app;
//# sourceMappingURL=index.js.map