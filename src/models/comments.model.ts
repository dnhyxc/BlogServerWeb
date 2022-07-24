import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema({
  articleId: String,
  userId: String,
  username: String,
  avatarUrl: String,
  date: Number,
  content: String,
  fromUserId: String,
  likeCount: Number,
  replyCount: Number,
  isLike: Boolean,
  likeComments: {
    userId: [String],
    commentIds: [String],
  },
  replyList: [
    {
      userId: String,
      username: String,
      avatarUrl: String,
      date: Number,
      fromUserId: String,
      fromUsername: String,
      formContent: String,
      content: String,
      likeCount: Number,
      isLike: Boolean,
      replyCount: Number,
      fromCommentId: String,
      likeComments: {
        userId: [String],
        commentIds: [String],
      },
    },
  ],
});

const Comments = mongoose.model("comments", CommentsSchema);

export default Comments;
