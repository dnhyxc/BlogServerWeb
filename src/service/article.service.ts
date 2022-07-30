import { Article, LikeArticle } from "../models";

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

  // 根据文章id查找文章详情
  async updateArticle({ articleId: _id, ...params }) {
    try {
      await Article.updateOne({ _id }, { $set: params });
    } catch (error) {
      console.error("updateArticle", error);
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

  // 查询用户是否点赞
  async checkLikeStatus(userId) {
    const likes = await LikeArticle.find({ userId });

    const likeFilter = likes.map((i) => i.articleId);

    await Article.updateMany(
      { _id: { $nin: likeFilter } },
      {
        $set: {
          isLike: false,
        },
      }
    );

    await Article.updateMany(
      { _id: { $in: likeFilter } },
      {
        $set: {
          isLike: true,
        },
      }
    );
  }

  // 获取文章列表
  async findArticles({ pageNo, pageSize, filter, userId }) {
    await new articleServer().checkLikeStatus(userId);

    const res = await Article.find(filter)
      .skip((pageNo - 1) * pageSize)
      .limit(pageSize)
      .sort({ createTime: -1 });
    return res;
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
