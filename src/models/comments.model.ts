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
  isDelete: Boolean,
  fromUsername: String,
  formContent: String,
  fromCommentId: String,
});

const Comments = mongoose.model("comments", CommentsSchema);

export default Comments;
