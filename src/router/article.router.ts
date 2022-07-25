import Router from "koa-router";
import {
  getArticleListCtr,
  createArticleCtr,
  getArticleByIdCtr,
  deleteArticleCtr,
} from "../controller";
import { auth } from "../middleware";

const router = new Router({ prefix: "/api" });

// 创建文章
router.post("/createArticle", auth, createArticleCtr);

// 创建文章
router.post("/deleteArticle", auth, deleteArticleCtr);

// 获取文章
router.post("/articleList", getArticleListCtr);

// 获取文章详情
router.post("/articleDetail", getArticleByIdCtr);

module.exports = router;
