import Router from "koa-router";
import { getArticleListCtr, createArticleCtr } from "../controller";
import { auth } from "../middleware";

const router = new Router({ prefix: "/api" });

// 创建文章
router.post("/create", auth, createArticleCtr);

// 获取文章
router.get("/list", auth, getArticleListCtr);

module.exports = router;
