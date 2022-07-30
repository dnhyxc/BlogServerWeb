import Router from "koa-router";
import {
  getArticleListCtr,
  createArticleCtr,
  getArticleByIdCtr,
  deleteArticleCtr,
  likeArticleCtr,
  updateArticleCtr,
  searchArticleCtr,
} from "../controller";
import { auth } from "../middleware";

const router = new Router({ prefix: "/api" });

// 创建文章
router.post("/createArticle", auth, createArticleCtr);

// 更新文章
router.post("/updateArticle", auth, updateArticleCtr);

// 更新文章
router.post("/searchArticle", auth, searchArticleCtr);

// 删除文章
router.post("/deleteArticle", auth, deleteArticleCtr);

// 获取文章
router.post("/articleList", getArticleListCtr);

// 获取文章详情
router.post("/articleDetail", getArticleByIdCtr);

// 文章点赞
router.post("/likeArticle", likeArticleCtr);

module.exports = router;
