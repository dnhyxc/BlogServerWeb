import Router from "koa-router";
import userController from "../controller/user.controller";

const userRouter = new Router({ prefix: "/user" });

const { register, login } = userController;

// 注册接口
userRouter.post("/register", register);

// 登录接口
userRouter.post("/login", login);

export default userRouter;
