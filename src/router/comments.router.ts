import Router from "koa-router";
import { createCommentsCtr, findCommentsById } from "../controller";
import { auth } from "../middleware";

const router = new Router({ prefix: "/api" });

// 创建文章
router.post("/comments", auth, createCommentsCtr);
// 获取评论
router.post("/getCommentList", auth, findCommentsById);

module.exports = router;
