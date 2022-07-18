import jwt from "jsonwebtoken";
import { createUserServer, findOneUser } from "../service";
import { databaseError } from "../constant";

import { JWT_SECRET } from "../config";

class UserController {
  async registerCtr(ctx, next) {
    const { username, password } = ctx.request.body;
    try {
      const res = await createUserServer({ username, password });
      ctx.body = {
        code: 200,
        message: "注册成功",
        success: true,
        data: res?.id,
      };
    } catch (error) {
      ctx.app.emit("error", databaseError, ctx);
    }
  }

  async loginCtr(ctx, next) {
    const { username } = ctx.request.body;

    // 1. 获取用户信息（在token的playload中，记录id，username）
    try {
      const { password, ...props } = (await findOneUser({ username })) || {};
      ctx.body = {
        code: 200,
        success: true,
        message: "登录成功",
        data: {
          token: jwt.sign(props, JWT_SECRET, { expiresIn: "1d" }),
        },
      };
    } catch (error) {
      ctx.app.emit("error", databaseError, ctx);
    }
  }

  async updateInfoCtr(ctx, next) {
    const { username, password } = ctx.request.body;
    console.log(username, password);
    ctx.body = "修改成功" + username;
  }
}

export default new UserController();
