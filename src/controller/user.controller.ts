import { createUserServer, loginServer } from "../service";
import { userRegisterError, userLoginError } from "../constant";

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
      ctx.app.emit("error", userRegisterError, ctx);
    }
  }

  async loginCtr(ctx, next) {
    const { username, password } = ctx.request.body;
    try {
      const res = await loginServer({ username, password });
      ctx.body = {
        code: 200,
        message: "登录成功",
        result: res?.id,
      };
    } catch (error) {
      ctx.app.emit("error", userLoginError, ctx);
    }
  }
}

export default new UserController();
