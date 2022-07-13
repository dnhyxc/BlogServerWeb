import Router from "koa-router";
import userController from "../controller/user.controller";

const userRouter = new Router({ prefix: "/api" });

const { register, login } = userController;

// GET /api
userRouter.get("/", (ctx, next) => {
  ctx.body = "hello users";
});

// 注册接口
userRouter.post("/register", register);

// 登录接口
userRouter.post("/login", login);

export default userRouter;
