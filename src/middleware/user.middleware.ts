import bcrypt from "bcryptjs";
import {
  databaseError,
  userFormateError,
  userAlreadyExited,
  userNotFind,
  userPwdError,
} from "../constant";
import { findOneUser } from "../service";

// 校验用户名或密码是否为空
const userValidator = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  if (!username || !password) {
    ctx.app.emit("error", userFormateError, ctx);
    return;
  }
  await next();
};

// 校验用户名
const verifyUser = async (ctx, next) => {
  const { username } = ctx.request.body;
  const filter = { username };
  try {
    if (await findOneUser(filter)) {
      ctx.app.emit("error", userAlreadyExited, ctx);
      return;
    }
  } catch (error) {
    ctx.app.emit("error", databaseError, ctx);
  }

  await next();
};

// 密码加密
const bcryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  ctx.request.body.password = hash;
  
  await next();
};

// 校验用户是否存在
const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const filter = { username };
  try {
    const user = await findOneUser(filter);
    if (!user) {
      ctx.app.emit("error", userNotFind, ctx);
      return;
    }

    const checkPwd = bcrypt.compareSync(password, user.password);
    if (!checkPwd) {
      ctx.app.emit("error", userPwdError, ctx);
      return;
    }
  } catch (error) {
    ctx.app.emit("error", databaseError, ctx);
  }

  await next();
};

export { userValidator, verifyUser, bcryptPassword, verifyLogin };
