import Router from "koa-router";
import {
  createCommentsCtr,
  findCommentsById,
  giveLikeCtr,
  deleteCommentCtr,
} from "../controller";
import { auth } from "../middleware";

const router = new Router({ prefix: "/api" });

// 创建文章
router.post("/comments", auth, createCommentsCtr);
// 获取评论
router.post("/getCommentList", auth, findCommentsById);
// 点赞
router.post("/giveLike", auth, giveLikeCtr);
// 删除评论
router.post("/deleteComment", auth, deleteCommentCtr);

module.exports = router;
