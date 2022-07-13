"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class UserServer {
    createUser({ username, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // 写入数据库
            return "用户写入数据库成功，用户名称：" + username + " 密码：" + password;
        });
    }
}
exports.default = new UserServer();
//# sourceMappingURL=user.service.js.map