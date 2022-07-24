import {
  findArticles,
  createArticle,
  findArticleById,
  updateArticle,
  findCommentById,
} from "../service";
import { databaseError } from "../constant";
class ArticleController {
  // 创建文章
  async createArticleCtr(ctx, next) {
    try {
      const params = ctx.request.body;
      // 操作数据库
      const res = await createArticle({ ...params });
      // 返回结果
      ctx.body = {
        code: 200,
        success: true,
        message: "发布成功",
        data: {
          id: res.id,
        },
      };
    } catch (error) {
      console.error("registerCtr", error);
      ctx.app.emit("error", databaseError, ctx);
    }
  }
  // 获取文章列表
  async getArticleListCtr(ctx, next) {
    try {
      const { pageNo, pageSize, filter } = ctx.request.body;
      // 操作数据库
      const res: any = await findArticles({ pageNo, pageSize, filter });
      // 返回结果
      if (res) {
        const list = res.map((i) => ({
          id: i.id,
          title: i.title,
          abstract: i.abstract,
          createTime: i.createTime,
        }));

        ctx.body = {
          code: 200,
          success: true,
          message: "获取文章列表成功",
          data: list,
        };
      }
    } catch (error) {
      console.error("getArticleListCtr", error);
      ctx.app.emit("error", databaseError, ctx);
    }
  }
  // 根据文章id获取详情
  async getArticleByIdCtr(ctx, next) {
    try {
      const { id } = ctx.request.body;
      const res = await findArticleById(id);
      const comment = await findCommentById(id);
      if (res) {
        const detail = { ...res._doc };
        detail.id = detail._id;
        delete detail._id;
        delete detail.__v;
        const comments = comment.map((i) => {
          const temp = { ...i._doc };
          temp.id = temp._id;
          delete temp._id;
          delete temp.__v;
          return temp;
        });

        detail.comments = comments;

        ctx.body = {
          code: 200,
          success: true,
          message: "获取文章详情成功",
          data: detail,
        };
      }
    } catch (error) {
      console.error("updateInfoCtr", error);
      ctx.app.emit("error", databaseError, ctx);
    }
  }
  // 更新文章内容
  async updateArticleCtr(ctx, next) {
    try {
      const { id, ...params } = ctx.request.body;
      const res = await updateArticle({ id, params });
      ctx.body = {
        code: 200,
        success: true,
        message: "操作成功",
        data: {},
      };
    } catch (error) {
      console.error("updateArticleCtr", error);
      ctx.app.emit("error", databaseError, ctx);
    }
  }
  // 文章评论
  async articleCommentCtr(ctx, next) {
    try {
      const { id } = ctx.request.body;
    } catch (error) {}
  }
}

export default new ArticleController();
