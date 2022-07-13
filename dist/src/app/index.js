"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Koa_1 = tslib_1.__importDefault(require("Koa"));
const koa_bodyparser_1 = tslib_1.__importDefault(require("koa-bodyparser"));
const router_1 = require("../router");
const app = new Koa_1.default();
app.use((0, koa_bodyparser_1.default)());
app.use(router_1.userRouter.routes());
exports.default = app;
//# sourceMappingURL=index.js.map