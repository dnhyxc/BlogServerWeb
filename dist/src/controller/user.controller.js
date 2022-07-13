"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class UserController {
    register(ctx, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            ctx.body = "注册成功！";
        });
    }
    login(ctx, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            ctx.body = "登录成功";
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map