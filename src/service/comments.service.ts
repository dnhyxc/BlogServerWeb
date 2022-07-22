import { Comments } from "../models";

class commentServer {
  // 创建评论
  async createComments({ params }) {
    console.log(params, "params");
    try {
      const comment: any = await Comments.create(params);
      return comment;
    } catch (error) {
      console.error("createComments", error);
      throw new Error(error as any);
    }
  }
  // 根据文章id查找评论
  async findCommentById(articleId) {
    try {
      const comment: any = await Comments.find({ articleId });
      return comment;
    } catch (error) {
      console.error("createComments", error);
      throw new Error(error as any);
    }
  }
}

export default new commentServer();
