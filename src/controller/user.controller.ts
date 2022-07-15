import { createUserServer, loginServer } from "../service";

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
      ctx.body = {
        code: 409,
        msg: "注册失败",
        error,
      };
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
      ctx.body = {
        code: 500,
        message: "登录失败",
        result: "",
      };
    }
  }
}

export default new UserController();
