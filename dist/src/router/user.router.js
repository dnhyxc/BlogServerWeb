"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_router_1 = tslib_1.__importDefault(require("koa-router"));
const user_controller_1 = tslib_1.__importDefault(require("../controller/user.controller"));
const userRouter = new koa_router_1.default({ prefix: "/api" });
const { register, login } = user_controller_1.default;
// GET /api
userRouter.get("/", (ctx, next) => {
    ctx.body = "hello users";
});
// 注册接口
userRouter.post("/register", register);
// 登录接口
userRouter.post("/login", login);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map