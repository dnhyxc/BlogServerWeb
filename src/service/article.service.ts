import { Article } from "../models";

class articleServer {
  // 创建文章
  async createArticle({ ...params }) {
    try {
      return await Article.create(params);
    } catch (error) {
      console.error("createArticle", error);
      throw new Error(error as any);
    }
  }

  // 删除文章
  async deleteArticles({ articleId }) {
    try {
      return await Article.updateOne(
        { _id: articleId },
        {
          $set: {
            isDelete: true,
          },
        }
      );
    } catch (error) {
      console.error("createArticle", error);
      throw new Error(error as any);
    }
  }

  // 获取文章列表
  async findArticles({ pageNo, pageSize, filter }) {
    try {
      const res = Article.find(filter)
        .skip((pageNo - 1) * pageSize)
        .limit(pageSize)
        .sort({ createTime: -1 });
      return res;
    } catch (error) {
      console.error("findArticles", error);
      throw new Error(error as any);
    }
  }

  // 根据文章id查找文章详情
  async findArticleById(id) {
    try {
      const article: any = await Article.findById(id);
      return article;
    } catch (error) {
      console.error("findArticleById", error);
      throw new Error(error as any);
    }
  }

  // 根据文章id查找文章详情
  async updateArticle({ id: _id, params }) {
    const id = { _id };
    try {
      const article: any = await Article.updateOne(id, {
        $set: { comments: params },
      });
      return article;
    } catch (error) {
      console.error("updateArticle", error);
      throw new Error(error as any);
    }
  }

  // 根据文章id查找文章详情
  async likeArticle({ id: _id, likeStatus }) {
    try {
      const likeArticle: any = await Article.updateOne(
        { _id },
        {
          $inc: { likeCount: likeStatus ? -1 : 1 },
          $set: {
            isLike: likeStatus ? false : true,
          },
        }
      );
      return likeArticle;
    } catch (error) {
      console.error("likeArticle", error);
      throw new Error(error as any);
    }
  }
}

export default new articleServer();
