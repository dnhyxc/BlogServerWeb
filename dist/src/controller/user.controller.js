"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const user_service_1 = tslib_1.__importDefault(require("../service/user.service"));
const { createUser } = user_service_1.default;
class UserController {
    register(ctx, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { username, password } = ctx.request.body;
            const res = yield createUser({ username, password });
            ctx.body = res;
        });
    }
    login(ctx, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(ctx.request.body, "body");
            ctx.body = "登录成功";
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map