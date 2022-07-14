import Router from "koa-router";
import userController from "../controller/user.controller";

const router = new Router({ prefix: "/user" });

const { register, login } = userController;

// 注册接口
router.post("/register", register);

// 登录接口
router.post("/login", login);

module.exports = router;
