import { Comments, Like } from "../models";

class commentServer {
  // 创建评论
  async createComments({ params }) {
    try {
      const comment: any = await Comments.create({
        ...params,
      });
      return comment;
    } catch (error) {
      console.error("createComments", error);
      throw new Error(error as any);
    }
  }

  // 查询用户是否点赞
  static async checkLikeStatus(userId, articleId) {
    const likes = await Like.find({ userId });

    const likeFilter = likes.map((i) => i.likeCommentId);

    await Comments.updateMany(
      { _id: { $nin: likeFilter } },
      {
        $set: {
          isLike: false,
        },
      }
    );

    await Comments.updateMany(
      { _id: { $in: likeFilter } },
      {
        $set: {
          isLike: true,
        },
      }
    );
  }

  // 根据文章id查找评论
  async findCommentById(articleId, userId) {
    await commentServer.checkLikeStatus(userId, articleId);
    const comment: any = await Comments.find({ articleId });
    return comment;
  }

  // 回复评论
  async updateComments(commentId, params) {
    try {
      const filter = { articleId: params.articleId };

      const comment: any = await Comments.updateOne(filter, {
        $set: {
          fromUserId: params.fromUserId,
          fromCommentId: params.fromCommentId,
          fromUsername: params.fromUsername,
          formContent: params.formContent,
        },
      });

      return comment;
    } catch (error) {
      console.error("createComments", error);
      throw new Error(error as any);
    }
  }
  // 点赞
  async giveLike(commentId, fromCommentId, status) {
    const filter = { _id: commentId };

    const comment: any = await Comments.updateOne(
      filter,
      // $inc：自增自减运算符，传入正值为自增，负值为自减
      {
        $inc: { likeCount: status ? -1 : 1 },
        $set: {
          isLike: status ? false : true,
        },
      }
    );

    return comment;
  }
  // 删除评论
  async deleteComment(commentId, fromCommentId) {
    const filter = { _id: commentId };

    const comment: any = await Comments.updateOne(
      filter,
      {
        $set: {
          isDelete: true,
        },
      }
    );

    return comment;
  }
}

export default new commentServer();
