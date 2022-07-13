import userServer from "../service/user.service";

const { createUser, findUser } = userServer;
class UserController {
  async register(ctx, next) {
    const { username, password } = ctx.request.body;

    const res = await createUser({ username, password });

    ctx.body = res;
  }

  async login(ctx, next) {
    const { username, password } = ctx.request.body;

    const res = await findUser({ username, password });

    ctx.body = res;
  }
}

export default new UserController();
