import userServer from "../service/user.service";

const { createUser } = userServer;
class UserController {
  async register(ctx, next) {
    const { username, password } = ctx.request.body;

    const res = await createUser({ username, password });

    ctx.body = res;
  }

  async login(ctx, next) {
    console.log(ctx.request.body, "body");
    ctx.body = "登录成功";
  }
}

export default new UserController();
