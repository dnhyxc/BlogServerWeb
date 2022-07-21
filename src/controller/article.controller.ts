import { findArticles, createArticle, findArticleById } from "../service";
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
    const { id } = ctx.request.body;
    try {
      const res = await findArticleById(id);
      if (res) {
        const detail = {
          id: res.id,
          title: res.title,
          content: res.content,
          classify: res.classify,
          tag: res.tag,
          coverImage: res.coverImage,
          abstract: res.abstract,
          createTime: res.createTime,
        };

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
}

export default new ArticleController();
