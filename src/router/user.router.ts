import Router from "koa-router";
import { registerCtr, loginCtr } from "../controller";
import {
  userValidator,
  verifyUser,
  bcryptPassword,
  verifyLogin,
} from "../middleware";

const router = new Router({ prefix: "/api" });

// 注册接口
router.post(
  "/register",
  userValidator, // 检验用户名或密码是否为空中间件
  verifyUser, // 检验用户名是否存在中间件
  bcryptPassword, // 密码加密中间件
  registerCtr
);

// 登录接口
router.post("/login", userValidator, verifyLogin, loginCtr);

module.exports = router;
