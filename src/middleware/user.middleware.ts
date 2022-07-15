import { userFormateError, userAlreadyExited } from "../constant";
import { findOneUser } from "../service";

const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    ctx.app.emit("error", userFormateError, ctx);
    return;
  }
  await next();
};

const verifyUser = async (ctx, next) => {
  const { username } = ctx.request.body;
  const filter = { username };
  if (await findOneUser(filter)) {
    ctx.app.emit("error", userAlreadyExited, ctx);
    return;
  }
  await next();
};

export { userValidator, verifyUser };
