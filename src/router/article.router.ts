import Router from "koa-router";
import articleController from "../controller/article.controller";

const router = new Router({ prefix: "/article" });

const { getArticleList, createArticle } = articleController;

// 创建文章
router.post("/create", createArticle);

// 获取文章
router.get("/list", getArticleList);

module.exports = router;
