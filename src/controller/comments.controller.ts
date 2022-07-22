import * as Service from "../service";
import { databaseError } from "../constant";

class CommentsController {
  // 创建文章
  async createCommentsCtr(ctx, next) {
    try {
      const { ...params } = ctx.request.body;
      // 操作数据库
      const res = await Service.createComments({ params });
      console.log(res, "res");
      // 返回结果
      ctx.body = {
        code: 200,
        success: true,
        message: "评论成功",
        data: {},
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
      console.log(id, "paramsparamsparams");
      // 操作数据库
      const res = await Service.findCommentById(id);
      console.log(res, "res");
      if (res) {
        const comments = res.map((i) => {
          const comment = { ...i._doc };
          comment.id = comment._id;
          delete comment._id;
          delete comment.__v;
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
}

export default new CommentsController();
