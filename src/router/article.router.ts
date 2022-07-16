import Router from "koa-router";
import articleController from "../controller/article.controller";

const router = new Router({ prefix: "/api" });

const { getArticleListCtr, createArticleCtr } = articleController;

// 创建文章
router.post("/create", createArticleCtr);

// 获取文章
router.get("/list", getArticleListCtr);

module.exports = router;
