import Router from "koa-router";
import { registerCtr, loginCtr } from "../controller";
import { userValidator, verifyUser } from "../middleware";

const router = new Router({ prefix: "/user" });

// 注册接口
router.post("/register", userValidator, verifyUser, registerCtr);

// 登录接口
router.post("/login", loginCtr);

module.exports = router;
