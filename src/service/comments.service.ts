import { Comments, UserInfo } from "../models";

class commentServer {
  // 创建评论
  async createComments({ params }) {
    const likeCount = 0;
    const isLike = false;
    try {
      const comment: any = await Comments.create({
        ...params,
        likeCount,
        isLike,
      });
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
  // 根据文章id查找评论
  async updateComments(commentId, params) {
    const likeCount = 0;
    const isLike = false;
    try {
      const { fromCommentId } = params;

      const filter = fromCommentId
        ? {
            articleId: params.articleId,
            "replyList._id": fromCommentId,
          }
        : { _id: commentId, articleId: params.articleId };

      const comment: any = await Comments.updateOne(
        {
          $and: [filter],
        },
        // 向查找到的document中的replyList数组中插入一条评论
        // 注意：如果要使用排序，$sort必须与$each一起使用才会生效
        {
          $push: {
            replyList: {
              // ...params, // 不适用$each包一下sort不会生效
              $each: [{ ...params, likeCount, isLike }], // $each 向replyList插入多条
              // $sort: { date: 1 }, // 正序排列
            },
          },
        },
        {
          $set: {
            "replyList.$.fromUserId": params.fromUserId,
            "replyList.$.fromUsername": params.fromUsername,
            "replyList.$.formContent": params.formContent,
          },
        }
      );

      return comment;
    } catch (error) {
      console.error("createComments", error);
      throw new Error(error as any);
    }
  }
  // 点赞
  async giveLike(commentId, fromCommentId, status, userId) {
    console.log(commentId, fromCommentId, status, userId);

    const filter = fromCommentId
      ? {
          "replyList._id": fromCommentId, // 选择数组replyList中某个对象中的_id属性
        }
      : { _id: commentId };

    const comment: any = await Comments.updateOne(
      {
        $and: [filter],
      },
      // $inc：自增自减运算符，传入正值为自增，负值为自减
      {
        $inc: fromCommentId
          ? {
              "replyList.$.likeCount": status ? -1 : 1, // replyList.$.likeCount：表示选择数组replyList中某个对象的likeCount属性
            }
          : { likeCount: status ? -1 : 1 },
        $set: fromCommentId
          ? {
              "replyList.$.isLike": status ? false : true,
            }
          : {
              isLike: status ? false : true,
            },
      }
    );

    // const findComment = await Comments.findOne({
    //   _id: commentId,
    // });
    // console.log(findComment, "findComment");

    // if (findComment) {
    //   // console.log(findComment.userIds, "idsss");
    //   // if (findComment.userIds.includes(userId)) return;
    //   // findComment.userIds.push(userId);
    //   // Comments.create(findComment);
    //   // console.log(findComment.userIds, "idss>>>>s");

    //   if (status) {
    //     findComment.userIds.push(userId);
    //     findComment.isLike = false;
    //   } else {
    //     findComment.userIds = findComment.userIds.filter((i) => i !== userId);
    //     findComment.isLike = true;
    //   }

    //   if (findComment.userIds.includes(userId)) {
    //     findComment.likeCount = findComment?.likeCount! + 1;
    //   } else {
    //     findComment.likeCount = findComment?.likeCount! - 1;
    //   }

    //   Comments.create(findComment);
    // }

    return comment;
  }
}

export default new commentServer();
