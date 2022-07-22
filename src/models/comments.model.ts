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
  replyList: [
    {
      userId: String,
      username: String,
      avatarUrl: String,
      date: Number,
      fromUserId: Number,
      fromUsername: String,
      formContent: String,
      replyContent: String,
      likeCount: Number,
      replyCount: Number,
    },
  ],
});

const Comments = mongoose.model("comments", CommentsSchema);

export default Comments;
