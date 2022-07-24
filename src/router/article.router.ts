import Router from "koa-router";
import {
  getArticleListCtr,
  createArticleCtr,
  getArticleByIdCtr,
  updateArticleCtr,
} from "../controller";
import { auth } from "../middleware";

const router = new Router({ prefix: "/api" });

// 创建文章
router.post("/createArticle", auth, createArticleCtr);

// 获取文章
router.post("/articleList", getArticleListCtr);

// 获取文章详情
router.post("/articleDetail", getArticleByIdCtr);

// 评论接口
router.post("/comment", auth, updateArticleCtr);

module.exports = router;
