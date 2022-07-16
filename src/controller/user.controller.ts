import { createUserServer } from "../service";
import { userRegisterError, databaseError } from "../constant";

class UserController {
  async registerCtr(ctx, next) {
    const { username, password } = ctx.request.body;
    try {
      const res = await createUserServer({ username, password });
      ctx.body = {
        code: 200,
        msg: "注册成功",
        id: res?.id,
      };
    } catch (error) {
      ctx.app.emit("error", databaseError, ctx);
    }
  }

  async loginCtr(ctx, next) {
    const { username } = ctx.request.body;
    ctx.body = {
      code: 200,
      message: "登录成功",
      result: username,
    };
  }
}

export default new UserController();
