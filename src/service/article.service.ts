import { FilterQuery } from "mongoose";
import { Article } from "../models";

class articleServer {
  // 创建文章
  async createArticle({
    title,
    content,
    classify,
    tag,
    coverImage,
    abstract,
    createTime,
  }) {
    try {
      return await Article.create({
        title,
        content,
        classify,
        tag,
        coverImage,
        abstract,
        createTime,
      });
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
        .limit(pageSize);
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
    console.log(params, "params");
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
}

export default new articleServer();
