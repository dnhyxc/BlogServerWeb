import { createUserServer } from "../service";
import { databaseError } from "../constant";

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
    ctx.body = {
      code: 200,
      success: true,
      message: "登录成功",
      data: username,
    };
  }
}

export default new UserController();
