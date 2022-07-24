import {
  createComments,
  updateComments,
  findCommentById,
  giveLike,
  createLike,
} from "../service";
import { databaseError } from "../constant";

class CommentsController {
  // 创建文章
  async createCommentsCtr(ctx, next) {
    try {
      const { commentId, ...params } = ctx.request.body;
      if (commentId) {
        await updateComments(commentId, params);
      } else {
        // 操作数据库
        await createComments({ params });
      }
      // 返回结果
      ctx.body = {
        code: 200,
        success: true,
        message: "评论成功",
        data: "success",
      };
    } catch (error) {
      console.error("createCommentsCtr", error);
      ctx.app.emit("error", databaseError, ctx);
    }
  }
  // 根据文章id查找对应的评论
  async findCommentsById(ctx, next) {
    try {
      const { id } = ctx.request.body;
      // 操作数据库
      const res = await findCommentById(id);
      if (res) {
        const comments = res.map((i) => {
          const comment = { ...i._doc };
          comment.commentId = comment._id;
          delete comment._id;
          delete comment.__v;
          const newList = comment.replyList.map((j) => {
            const item = { ...j._doc };
            item.commentId = j._id;
            delete item._id;
            delete item.__v;
            return item;
          });
          comment.replyList = newList;
          return comment;
        });

        // 返回结果
        ctx.body = {
          code: 200,
          success: true,
          message: "操作成功",
          data: comments,
        };
      }
    } catch (error) {
      console.error("findCommentById", error);
      ctx.app.emit("error", databaseError, ctx);
    }
  }
  // 点赞
  async giveLikeCtr(ctx, next) {
    try {
      const { commentId, fromCommentId, userId } = ctx.request.body;
      // 判断当前用户是否对当前评论点过赞
      const likeStatus = await createLike(commentId, userId);
      // 对评论详情进行更改，将点赞数加入详情
      await giveLike(commentId, fromCommentId, likeStatus);
      // 返回结果
      ctx.body = {
        code: 200,
        success: true,
        message: "点赞成功",
        data: "success",
      };
    } catch (error) {
      console.error("createCommentsCtr", error);
      ctx.app.emit("error", databaseError, ctx);
    }
  }
}

export default new CommentsController();
