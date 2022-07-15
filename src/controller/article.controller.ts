import { findArticles, addArticles } from "../service";

class ArticleController {
  // 创建文章
  async createArticleCtr(ctx, next) {
    const { id } = ctx.request.query;
    // 操作数据库
    const res = await addArticles(id);
    // 返回结果
    ctx.body = res;
  }
  // 获取文章列表
  async getArticleListCtr(ctx, next) {
    const { id } = ctx.request.query;
    // 操作数据库
    const res = await findArticles(id);
    // 返回结果
    ctx.body = res;
  }
}

export default new ArticleController();
