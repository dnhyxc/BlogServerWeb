import {
  findArticles,
  createArticle,
  findArticleById,
  deleteArticles,
  likeArticle,
  checkLikeArticle,
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
  async deleteArticleCtr(ctx, next) {
    try {
      const { articleId } = ctx.request.body;
      // 操作数据库
      await deleteArticles({ articleId });
      // 返回结果
      ctx.body = {
        code: 200,
        success: true,
        message: "删除成功",
        data: articleId,
      };
    } catch (error) {
      console.error("getArticleListCtr", error);
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
        const filterArticles = res.filter((i) => !i.isDelete);
        const list = filterArticles.map((i) => {
          const article = { ...i._doc };
          article.id = article._id;
          delete article._id;
          delete article.__v;
          return article;
        });

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
      if (res) {
        const detail = { ...res._doc };
        detail.id = detail._id;
        delete detail._id;
        delete detail.__v;

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

  // 文章点赞
  async likeArticleCtr(ctx, next) {
    const { id, userId } = ctx.request.body;
    const likeStatus = await checkLikeArticle(id, userId);
    await likeArticle({ id, likeStatus });
    ctx.body = {
      code: 200,
      success: true,
      message: "为文章点赞成功",
      data: id,
    };
  }
}

export default new ArticleController();
