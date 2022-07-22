import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  classify: {
    required: true,
    type: String,
  },
  tag: {
    required: true,
    type: String,
  },
  coverImage: String,
  abstract: String,
  createTime: Number,
  createUserId: String,
  comments: [
    {
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
    },
  ],
});

const Article = mongoose.model("articles", ArticleSchema);

export default Article;
